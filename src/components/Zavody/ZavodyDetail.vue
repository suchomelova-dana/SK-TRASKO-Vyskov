<template>
  <div class="flex flex-col laptop:flex-row laptop:items-start laptop:px-[5%]">
<!--    Years buttons-->
    <div class="flex flex-row py-10 overflow-scroll gap-8 items-start laptop:flex-col laptop:sticky laptop:top-[60px] laptop:overflow-hidden laptop:items-center laptop:p-[2%] laptop:min-h-[100vh] laptop:justify-center">
        <div class="w-[30px]"></div>
        <CustomButton
            v-for="item in years"
            :value="item.toString()"
            :key="item"
            :bg-color="item === activeYear ? 'bg-' + getColor() : 'bg-' + getColor() + 'Light'"
            class="rounded-2xl font-semibold hover:text-white"
            :class=" compType === CompetitionType.jednotlivci ? 'hover:bg-orange' : (compType === CompetitionType.spolecky ? 'hover:bg-green' : 'hover:bg-blue')"
            :text-color="item === activeYear ? 'text-white' : 'text-' + getColor() + 'Dark'"
            @click="activeYear = item"
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
    <div class=" flex flex-col flex-grow items-center py-14 ">
      <div class="w-fit flex flex-col gap-5 items-center ">
        <div
            v-for="item in competitions"
            :key="item.name"
            class="flex flex-row w-[100%] "
        >
          <div class="p-5 bg-opacity-40 flex-grow text-left px-10" :class="'bg-' + getColor() + 'Light'">
            <h2 class="text-xl font-semibold" :class="'text-' + getColor() + 'Dark'">{{ item.name }}</h2>
            <h3 class="text-black" >{{ item.club }}</h3>
            <h4 class="text-gray-400" >{{ item.date }}</h4>
          </div>

          <div class="p-5 flex flex-col justify-center gap-2" :class="'bg-' + getColor() + 'Light'">
            <a
                href="/Vyskovsky%20pohar%20-%20vysledky.pdf"
                target="_blank"
            >
              <div class="underline text-sm hover:scale-105 transition duration-200" :class="'text-' + getColor()">vysledky</div>
            </a>
            <div class="underline text-sm hover:scale-105 transition duration-200" :class="'text-' + getColor()">pozvanka</div>
          </div>
        </div>
      </div>
    </div>
  </div>

<!--  Spacing-->
  <div class="h-[200px] bg-white w-full"></div>

</template>

<script setup lang="ts">
  import {defineProps, ref, withDefaults} from 'vue'
  import {Competition} from "@/interfaces/interfaces";
  import {CompetitionType} from "@/interfaces/enums"
  import CustomButton from "@/components/Base/CustomButton.vue";


  const props = withDefaults(
      defineProps<{
        compType?: CompetitionType
        year?: number
      }>(),
      {
        compType: CompetitionType.spolecky,
        year: 2023
      }
  )

  function getButtonBgColor(btnYear: number){
    let color = ''
    switch(props.compType as CompetitionType){
      case CompetitionType.spolecky : { color = 'bg-greenLight'} break
      case CompetitionType.jednotlivci : {color = 'bg-orangeLight'} break
      case CompetitionType.esg :  {color = 'bg-blueLight'} break
    }
    if(btnYear === props.year){
       color = color.slice(0,-5)
    }
    return color
  }

  const competitions = ref<Competition[]>([
    {
      name: 'Trasko CUP',
      date: '3.11.2023',
      club: 'SK Trasko Vyškov'
    } as Competition,
    {
      name: 'Žďárská sněženka',
      date: '3.11.2023',
      club: 'SK Trasko Vyškov'
    } as Competition,
    {
      name: 'O pohár města Vyškova',
      date: '3.11.2023',
      club: 'SK Trasko Vyškov'
    } as Competition,
    {
      name: 'Přerovská stuha',
      date: '3.11.2023',
      club: 'SK Trasko Vyškov'
    } as Competition,
    {
      name: 'Trasko CUP',
      date: '3.11.2023',
      club: 'SK Trasko Vyškov'
    } as Competition,
    {
      name: 'Trasko CUP',
      date: '3.11.2023',
      club: 'SK Trasko Vyškov'
    } as Competition,

  ])

  const activeYear = ref<number>(props.year)

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

  const years = [2023, 2022, 2021, 2020, 2019, 2018]
</script>

<style scoped>

</style>