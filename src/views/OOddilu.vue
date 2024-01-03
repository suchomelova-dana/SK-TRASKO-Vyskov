<template>
  <div class="bg-greenLight flex items-center flex-col laptop:flex-row">

    <div class="laptop:w-1/2" id="image">
      <img src="images/zavody/esg.jpg" alt="" class="h-[500px] object-cover w-full">
    </div>

    <div class="flex flex-col gap-10 laptop:w-1/2 px-[10%] laptop:px-[5%] py-5 justify-center">
      <h3 class="text-blue text-lg font-semibold px-[5%] ">Historie oddílu</h3>
      <p>Klub <strong>SK TRASKO Vyškov </strong>byl založen v lednu 2000 pod původním názvem SK QUANTUM MONTÁŽE Vyškov. U jeho založení stála MUDr.Kateřina Kapounková. Od počátku existence je klub registrován u ČSMG v Praze. Na základě přání hlavního sponzora došlo v prosinci téhož roku ke změně názvu na SK TRASKO VYŠKOV. Kvalitní zázemí našel klub na ZŠ Purkyňova.</p>
      <p>SK TRASKO VYŠKOV sdružuje děvčata z Vyškova a okolí, která ve věnují cvičení a závodění dle <span class="text-green underline">pravidel moderní gymnastiky (jednotlivkyně i společné skladby) </span>a dle  <span class="text-green underline">pravidel estetické skupinové gymnastiky (ESG)</span>. Jsme hodnoceni opakovaně jako jeden z nejúspěšnějších sportovních oddílů Vyškova. Nové členky jsou vítány.</p>
    </div>


  </div>


  <div class="flex flex-col laptop:flex-row laptop:justify-between laptop:px-[5%] desktop:px-[10%] py-28">
    <ul class="flex flex-col ml-auto mr-auto " v-for="list in coachesAndJudgesLists" :key="list.heading">
      <span class="text-lg py-5 font-semibold">{{ list.heading }}</span>
      <li v-for="item in list.list" :key="item.name" class="flex">
        <span class="px-2 font-semibold text-left" :class="list.color">{{ item.level }} </span>
        <span class="px-2 text-left">{{ item.degree }} {{ item.name }}</span>
      </li>
    </ul>

  </div>
</template>

<script setup lang="ts">

import {Coach, JudgesList} from "@/interfaces/interfaces";
import {TrenerskaTrida} from "@/interfaces/enums";


const coaches : Coach[] = [
  {
    level: TrenerskaTrida.trida1,
    name: 'Kapounková Kateřina',
    degree: 'MUDr.'
  } as Coach,
  {
    level: TrenerskaTrida.trida1,
    name: 'Langová Hanne',
    degree: 'Mgr.'
  } as Coach,
  {
    level: TrenerskaTrida.baletniPedagog,
    name: 'Dvořák Kamil',
    degree: 'MgA.'
  } as Coach,
  {
    level: TrenerskaTrida.trida2,
    name: 'Bohuslavová Simona',
    degree: ''
  } as Coach,
  {
    level: TrenerskaTrida.trida2,
    name: 'Bubníková Hanna',
    degree: ''
  } as Coach,
  {
    level: TrenerskaTrida.trida2,
    name: 'Kapounková Karolína',
    degree: ''
  } as Coach,
  {
    level: TrenerskaTrida.trida2,
    name: 'Langová Jiřina',
    degree: ''
  } as Coach,
  {
    level: TrenerskaTrida.trida2,
    name: 'Pavlíková Michaela',
    degree: ''
  } as Coach,
  {
    level: TrenerskaTrida.trida2,
    name: 'Štaudrová Petra',
    degree: ''
  } as Coach,
  {
    level: TrenerskaTrida.trida2,
    name: 'Urbancová Markéta',
    degree: ''
  } as Coach,
  {
    level: TrenerskaTrida.trida3,
    name: 'Dohnalová Kristýna',
    degree: ''
  } as Coach,
  {
    level: TrenerskaTrida.trida3,
    name: 'Dohnalová Šárka',
    degree: ''
  } as Coach,
  {
    level: TrenerskaTrida.trida3,
    name: 'Sládková Nicol',
    degree: ''
  } as Coach,
  {
    level: TrenerskaTrida.trida3,
    name: 'Suchomelová Dana',
    degree: ''
  } as Coach,
  {
    level: TrenerskaTrida.trida3,
    name: 'Surková Iva',
    degree: ''
  } as Coach,
  {
    level: TrenerskaTrida.trida3,
    name: 'Šnajdárová Eva',
    degree: ''
  } as Coach,
  {
    level: TrenerskaTrida.trida3,
    name: 'Trgalová Helena',
    degree: ''
  } as Coach,
  {
    level: TrenerskaTrida.trida3,
    name: 'Vágnerová Lenka',
    degree: ''
  } as Coach,
]

const judges : Coach[] = [
  {
    level: TrenerskaTrida.brevet,
    name: 'Kapounková Kateřina',
    degree: 'MUDr.'
  } as Coach,
  {
    level: TrenerskaTrida.brevet,
    name: 'Langová Hanne',
    degree: 'Mgr.'
  } as Coach,
  {
    level: TrenerskaTrida.trida1,
    name: 'Pavlíková Michaela',
    degree: ''
  } as Coach,
  {
    level: TrenerskaTrida.trida1,
    name: 'Surková Iva',
    degree: ''
  } as Coach,
  {
    level: TrenerskaTrida.trida2,
    name: 'Štaudrová Petra',
    degree: ''
  } as Coach,
  {
    level: TrenerskaTrida.trida2,
    name: 'Urbancová Markéta',
    degree: ''
  } as Coach,
  {
    level: TrenerskaTrida.trida3,
    name: 'Bohuslavová Simona',
    degree: ''
  } as Coach,
  {
    level: TrenerskaTrida.trida3,
    name: 'Dohnalová Kristýna',
    degree: ''
  } as Coach,
  {
    level: TrenerskaTrida.trida3,
    name: 'Frydrychová Lenka',
    degree: ''
  } as Coach,
  {
    level: TrenerskaTrida.trida3,
    name: 'Hudáková Eva',
    degree: ''
  } as Coach,
  {
    level: TrenerskaTrida.trida3,
    name: 'Kapounková Karolína',
    degree: ''
  } as Coach,
  {
    level: TrenerskaTrida.trida3,
    name: 'Langová Jiřina',
    degree: ''
  } as Coach,
  {
    level: TrenerskaTrida.trida3,
    name: 'Nováková Radana',
    degree: ''
  } as Coach,
  {
    level: TrenerskaTrida.trida3,
    name: 'Rybková Veronika',
    degree: ''
  } as Coach,
  {
    level: TrenerskaTrida.trida3,
    name: 'Suchomelová Dana',
    degree: ''
  } as Coach,
  {
    level: TrenerskaTrida.trida3,
    name: 'Šnajdárová Eva',
    degree: ''
  } as Coach,
  {
    level: TrenerskaTrida.trida3,
    name: 'Vágnerová Lenka',
    degree: ''
  } as Coach,
  {
    level: TrenerskaTrida.trida3,
    name: 'Vejrostová Květa',
    degree: ''
  } as Coach,
  {
    level: TrenerskaTrida.trida4,
    name: 'Bubníková Hanna',
    degree: ''
  } as Coach,
  {
    level: TrenerskaTrida.trida4,
    name: 'Dohnalová Šárka',
    degree: ''
  } as Coach,
  {
    level: TrenerskaTrida.trida4,
    name: 'Sládková Nicol',
    degree: ''
  } as Coach,
  {
    level: TrenerskaTrida.trida4,
    name: 'Suchomelová Kvetoslava',
    degree: ''
  } as Coach,
  {
    level: TrenerskaTrida.trida4,
    name: 'Trgalová Helena',
    degree: ''
  } as Coach,
]

const judgesESG : Coach[] = [
  {
    level: TrenerskaTrida.trida1,
    name: 'Kapounková Kateřina',
    degree: 'MUDr.'
  } as Coach,
  {
    level: TrenerskaTrida.trida1,
    name: 'Surková Iva',
    degree: ''
  } as Coach,
  {
    level: TrenerskaTrida.trida2,
    name: 'Pavlíková Michaela',
    degree: ''
  } as Coach,
  {
    level: TrenerskaTrida.trida2,
    name: 'Urbancová Markéta',
    degree: ''
  } as Coach,
]

const coachesAndJudgesLists : JudgesList[] = [
  {
    list: coaches,
    heading: 'Trenéři',
    color: 'text-green'
  } as JudgesList,
  {
    list: judges,
    heading: 'Rozhodčí',
    color: 'text-orange'
  } as JudgesList,
  {
    list: judgesESG,
    heading: 'Rozhodčí ESG',
    color: 'text-blue'
  } as JudgesList,

]

</script>

<style scoped>

#image{
  animation: slideLeft 1s;
}

@keyframes slideLeft {
  0%{
    transform: translateX(-300px);
  }
  80%{
    transform: translateX(0px);
  }
}
</style>