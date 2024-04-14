<template>
  <div class="w-full tablet:px-[5%] py-5 " v-if="events.length !== 0">
    <div>
      <h2 class="text-orange font-bold p-5 text-2xl">{{ year }}</h2>
    </div>

    <div class="flex flex-col items-start text-left">
      <div v-for="month in getUsedMonths()" :key="month" class="p-3 w-full">
        <h3 class="text-green font-semibold mb-2 ml-2">{{ getMonthName(month) + ' ' + year}}</h3>
        <div class="bg-gray-100 rounded-md">
          <div v-for="event in getMontEvents(month)" :key="event" class="flex flex-row items-start px-5 laptop:px-10 p-2  w-[100%] text-greenDarkest">
            <span class="w-[120px] font-medium">{{event.date}}</span>
            <div class="w-[calc(100%-120px)]">
              <span class="">{{ event.name}}</span>
              <a :href="'/PDFs/vysledky/' + event.results" target="_blank" v-if="event.results" class=" text-green text-sm font-semibold  underline pl-3 "> výsledky </a>
            </div>
            </div>
        </div>
      </div>
    </div>
  </div>


</template>

<script setup lang="ts">
import {defineProps, withDefaults} from "vue/dist/vue";
import {Competition} from "@/interfaces/interfaces";

const props = withDefaults(
    defineProps<{
      year: number,
      events: Competition[]
    }>(), {}
)

function getUsedMonths(){
  let usedMonths : string[] = []
  props.events.forEach((item) => {
    let month = getMontNumberFromDate(item.date)
    if(!usedMonths.includes(month))
      usedMonths.push(month)
  })
  return usedMonths
}

function getMontNumberFromDate(date : string): string {
  return date.split('.')[date.split('.').length-2] as string
}

function getMonthName(monthString: string){
  switch (monthString){
    case '1' : return 'Leden'
    case '2' : return 'Únor'
    case '3' : return 'Březen'
    case '4' : return 'Duben'
    case '5' : return 'Květen'
    case '6' : return 'Červen'
    case '7' : return 'Červenec'
    case '8' : return 'Srpen'
    case '9' : return 'Září'
    case '10' : return 'Říjen'
    case '11' : return 'Listopad'
    case '12' : return 'Prosinec'
  }
}

function getMontEvents(month: string){
  return props.events.filter((item) => getMontNumberFromDate(item.date) === month).sort(compareEvents)
}

function compareEvents(a: Competition, b: Competition){
  if(a.date.split('.')[0].length > b.date.split('.')[0].length){
    return 1
  }
  else if (a.date.split('.')[0].length < b.date.split('.')[0].length){
    return -1
  }
  else {
    return 0
  }
}

</script>

<style scoped>
.w-calc{
  max-width: calc(100% - 120px);
}
</style>