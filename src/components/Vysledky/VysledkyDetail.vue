<template>
  <div class="flex flex-col laptop:flex-row laptop:items-start  laptop:px-[5%] ">
<!--    Years buttons-->
    <div class="flex flex-row py-10 overflow-scroll gap-8 items-start laptop:flex-col laptop:sticky laptop:top-[60px] laptop:overflow-hidden laptop:items-center laptop:p-[2%] laptop:min-h-[100vh] laptop:justify-center">
        <div class="w-[30px]"></div>
        <CustomButton
            v-for="item in yearsToRender"
            :value="item.toString()"
            :key="item"
            :bg-color="item === activeYear ? 'bg-' + getColor() : 'bg-' + getColor() + 'Light'"
            class="rounded-2xl font-semibold hover:text-white"
            :class=" compType === CompetitionType.jednotlivci ? 'hover:bg-orange' : (compType === CompetitionType.spolecky ? 'hover:bg-green' : 'hover:bg-blue')"
            :text-color="item === activeYear ? 'text-white' : 'text-' + getColor() + 'Dark'"
            @click="handleClickYear(item)"
        />
        <div class="w-[30px]"></div>
    </div>

<!--    Heading-->
    <div class="flex flex-col py-10 px-[7%] justify-center laptop:sticky laptop:top-[60px] laptop:h-[100vh] laptop:w-[400px]">
      <h1
          class=" text-4xl uppercase font-bold laptop:w-[20px] laptop:overflow-visible laptop:text-left laptop:text-5xl laptop:leading-[70px]"
          :class="compType === CompetitionType.jednotlivci ? 'text-orange' : (compType === CompetitionType.spolecky ? 'text-green' : 'text-blue')"
      >
        Závody {{getCompetitionType(compType)}} {{activeYear}}
      </h1>
    </div>

<!--    Competition content-->
    <div class=" flex flex-col flex-grow items-center laptop:items-end py-14 my-auto " v-if="competitionsToRender.length !== 0">
      <div class=" flex flex-col gap-5 w-3/4  justify-end items-end my-auto " >
        <div
            v-for="item in competitionsToRender"
            :key="item.name"
            class="flex flex-row w-[100%] "
        >
          <div class="p-5 bg-opacity-40 flex-grow text-left px-10" :class="'bg-' + getColor() + 'Light'">
            <h2 class="text-xl font-semibold" :class="'text-' + getColor() + 'Dark'">{{ item.name }}</h2>
            <h3 class="text-black" >{{ item.club }}</h3>
            <h4 class="text-gray-400" >{{ item.date }}</h4>
          </div>


          <a href="" target="_blank" class="p-5 flex flex-col justify-center hover:px-7 transition-all duration-200 group" :class="['bg-' + getColor() + 'Light', 'hover:bg-' + getColor()]">
              <div class="underline text-[16px] transition duration-200 group-hover:text-white" :class="'text-' + getColor()">výsledky</div>
          </a>
        </div>
      </div>
    </div>
    <div v-else class="flex items-center laptop:w-3/4 justify-center h-full align-middle items-center my-auto ">
      <p class="flex w-1/2 justify-center">V tomto roce momentálně nejsou k dispozici žádné výsledky</p>
    </div>
  </div>

<!--  Spacing-->
  <div class="h-[200px] bg-white w-full"></div>

</template>

<script setup lang="ts">
import {defineProps, onMounted, ref, withDefaults} from 'vue'
  import {Competition} from "@/interfaces/interfaces";
  import {CompetitionType} from "@/interfaces/enums"
  import CustomButton from "@/components/Base/CustomButton.vue";
  import zavody from "../../../public/data/zavody";


  const props = withDefaults(
      defineProps<{
        compType?: CompetitionType
        year?: number
      }>(),
      {
        compType: CompetitionType.spolecky,
        year: new Date().getFullYear
      }
  )

  // function getButtonBgColor(btnYear: number){
  //   let color = ''
  //   switch(props.compType as CompetitionType){
  //     case CompetitionType.spolecky : { color = 'bg-greenLight'} break
  //     case CompetitionType.jednotlivci : {color = 'bg-orangeLight'} break
  //     case CompetitionType.esg :  {color = 'bg-blueLight'} break
  //   }
  //   if(btnYear === props.year){
  //      color = color.slice(0,-5)
  //   }
  //   return color
  // }

  // const competitions = ref<Competition[]>([
  //   {
  //     name: 'Trasko CUP',
  //     date: '3.11.2023',
  //     club: 'SK Trasko Vyškov'
  //   } as Competition,
  //   {
  //     name: 'Žďárská sněženka',
  //     date: '3.11.2023',
  //     club: 'SK Trasko Vyškov'
  //   } as Competition,
  //   {
  //     name: 'O pohár města Vyškova',
  //     date: '3.11.2023',
  //     club: 'SK Trasko Vyškov'
  //   } as Competition,
  //   {
  //     name: 'Přerovská stuha',
  //     date: '3.11.2023',
  //     club: 'SK Trasko Vyškov'
  //   } as Competition,
  //   {
  //     name: 'Trasko CUP',
  //     date: '3.11.2023',
  //     club: 'SK Trasko Vyškov'
  //   } as Competition,
  //   {
  //     name: 'Trasko CUP',
  //     date: '3.11.2023',
  //     club: 'SK Trasko Vyškov'
  //   } as Competition,
  //
  // ])

  const activeYear = ref<number>(new Date().getFullYear())

  function getCompetitionType(type: CompetitionType){
    switch (type){
      case CompetitionType.jednotlivci : return 'jednotlivkyň'
      case CompetitionType.spolecky : return 'společných skladeb'
      case CompetitionType.esg : return 'esg'
    }
  }

  function getColor(): string{
    switch(props.compType){
      case CompetitionType.jednotlivci : return 'orange'
      case CompetitionType.spolecky : return 'green'
      case CompetitionType.esg : return 'blue'
    }
  }

  const arrayRange = (start: number, stop: number, step: number) =>
      Array.from(
          { length: (stop - start) / step + 1 },
          (value, index) => start + index * step
      );

  const yearsToRender =  arrayRange(new Date().getFullYear(), 2023, -1)

  const competitionsToRender = ref<Competition[]>([])

  function getCompetitionsToRender(){
    competitionsToRender.value = zavody.filter((comp) => comp.date.endsWith(activeYear.value.toString())  && comp.results != null && comp.results !== '')
  }

  onMounted(() => {
    getCompetitionsToRender()
  })

function handleClickYear(year: number) {
  activeYear.value = year
  getCompetitionsToRender()
}


</script>

<style scoped>

</style>