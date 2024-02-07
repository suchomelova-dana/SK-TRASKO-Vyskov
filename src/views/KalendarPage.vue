<template>
  <div class="flex flex-col pb-20 tablet:flex-row-reverse tablet:items-start">
    <KalendarSvazu class="tablet:w-1/4 tablet:py-10"/>

    <div class="tablet:w-3/4">
    <YearCalendar
        v-for="year in yearsToRender"
        :key="year"
        :year="year"
        :events="getCompetitionsOfYear(year)"
    />
    </div>
  </div>

</template>

<script setup lang="ts">

import KalendarSvazu from "@/components/Kalendar/KalendarSvazu.vue";
import YearCalendar from "@/components/Kalendar/YearCalendar.vue";
import {Competition} from "@/interfaces/interfaces";
import zavody from "../../public/data/zavody";

const arrayRange = (start: number, stop: number, step: number) =>
    Array.from(
        { length: (stop - start) / step + 1 },
        (value, index) => start + index * step
    );

const yearsToRender =  arrayRange(new Date().getFullYear(), 2023, -1)

function getCompetitionsOfYear(year: number){
  return zavody.filter((comp) => comp.date.endsWith(year.toString()))
}

const calendar = [
  {
    year: 2023,
    events: [
      {
        date: '28.11.2023',
        name: 'Trasko CUP',
        results: 'swjhdbieud'
      } as Competition,
      {
        date: '15.5.2023',
        name: 'Traskáček',
      } as Competition,
      {
        date: '18.4.2023',
        name: 'O pohár města Vyškova',
      } as Competition,
      {
        date: '4.5.2023',
        name: 'Veselská panenka',
      } as Competition,
      {
        date: '30.5.2023',
        name: 'Žďárská Sněženka',
      } as Competition,


    ]
  },
  {
    year: 2022,
    events: [
      {
        date: '28.11.2022',
        name: 'Trasko CUP',
      } as Competition,
      {
        date: '30.5.2022',
        name: 'Traskáček',
      } as Competition,
      {
        date: '18.4.2022',
        name: 'O pohár města Vyškova',
      } as Competition,
    ]
  }
]
</script>

<style scoped>

</style>