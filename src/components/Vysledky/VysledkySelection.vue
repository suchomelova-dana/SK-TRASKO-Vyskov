<template>
  <div class="flex flex-col justify-center items-center min-h-[calc(100vh-60px)] laptop:flex-row laptop:px-20 gap-20 laptop:gap-10 p-10" id="contentArea">

      <router-link
          :to="'/vysledky' + item.path"
          v-for="item in items"
          :key="item.name"
          :id="'link-' + item.name"
          class="w-[60%] rounded-2xl flex flex-col items-center justify-center hover:cursor-pointer ease-in-out transition transition-duration-100 hover:scale-105 laptop:bg-gray-100 laptop:p-5 laptop:w-auto laptop:space-y-10"
          :class="item.bgColor"
      >
        <img :src="'images/zavody/' + item.image" alt="" class="invisible h-0 flex flex-col justify-center items-center rounded-xl laptop:visible  laptop:h-[300px] ">
        <CustomButton :value="item.name" :bg-color="item.btnColor" text-color="text-white" class="w-full h-[70px] font-semibold text-lg laptop:w-auto laptop:h-auto laptop:text-base laptop:font-normal  "/>
      </router-link>

  </div>
</template>

<script setup lang="ts">
import CustomButton from "@/components/Base/CustomButton.vue";
import {ref} from "vue";
import {ZavodyBtn} from "@/interfaces/interfaces";
import {CompetitionType} from "@/interfaces/enums";

const items = ref<Array<ZavodyBtn>>([
  {
    image: 'spolecky.jpg',
    name: CompetitionType.spolecky,
    path: '/vysledkySpolecneSkladby',
    btnColor: 'bg-green',
    bgColor: 'hover:bg-greenLight'
  } as ZavodyBtn,
  {
    image: 'jednotlivci.png',
    name: CompetitionType.jednotlivci,
    path: '/vysledkyJednotlivci',
    btnColor: 'bg-orange',
    bgColor: 'hover:bg-orangeLight'
  }as ZavodyBtn,
  {
    image: 'esg.jpg',
    name: CompetitionType.esg,
    path: '/vysledkyESG',
    btnColor: 'bg-blue',
    bgColor: 'hover:bg-blueLight'
  } as ZavodyBtn
])



</script>

<style scoped>

  #contentArea{
    /*animation: slideUp 0.5s;*/
  }

  /*@keyframes slideUp {*/
  /*  0%{*/
  /*    opacity: 0;*/
  /*    transform: translateY(50px);*/
  /*  }*/
  /*  80%{*/
  /*    opacity: 1;*/
  /*    transform: translateY(0);*/
  /*  }*/
  /*}*/
</style>