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


  <div class="flex flex-col bg-grayLight px-12 py-16 laptop:flex-row">
    <div class="flex flex-col laptop:w-1/2 px-12 ">
      <h3 class="text-orange text-xl font-semibold p-6">Sportovní akademie</h3>
      <div class="flex justify-center items-center">
        <p>Sportovní akademie (dále jen „SA“) je určena pro talentované moderní gymnastky ve věku 6 až 13 let.
          Jejím posláním je vytvoření podmínek pro rozvoj moderní gymnastiky v dané oblasti a systematická, dlouhodobá sportovní příprava gymnastek na přechod do SpS</p>
      </div>

      <ul class="flex flex-col">
        <span class="text-lg py-5 font-semibold">Členky SA</span>
        <li v-for="member in SAmembers" :key="member.name" class="py-1 ">{{member.name}}</li>
      </ul>
    </div>

    <div class="flex flex-col laptop:w-1/2 px-12 ">
      <h3 class="text-green text-xl font-semibold p-6">Družstvo nadějí</h3>
      <div class="flex justify-center items-center">
        <p>V našem oddílu máme také gymnastky, které jsou členkami družstva nadějí.</p>
      </div>

      <ul class="flex flex-col">
        <span class="tex-lg py-5 font-semibold">Členky Družstva nadějí</span>
        <li v-for="member in clenkyDruzstvaNadeji" :key="member.name" class="py-1 ">{{member.name}}</li>
      </ul>
    </div>
  </div>



  <div class="w-full h-[200px] bg-white"></div>

</template>

<script setup lang="ts">

import {JudgesList} from "@/interfaces/interfaces";
import judges from "../../public/data/rozhodci";
import coaches from "../../public/data/trenerky";
import judgesESG from "../../public/data/rozhodciESG";
import SAmembers from "../../public/data/clenkySA";
import clenkyDruzstvaNadeji from "../../public/data/clenkyDruzstvaNadeji";


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