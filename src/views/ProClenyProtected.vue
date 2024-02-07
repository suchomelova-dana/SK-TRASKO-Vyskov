<template>
  <div class="min-h-[calc(100vh-60px)] flex flex-col w-full pb-20 px-[5%] tablet:items-start laptop:flex-row-reverse gap-5">

    <UzitecneDokumenty class="w-full h-full laptop:w-1/4 laptop:h-[calc(100vh-60px)] laptop:flex laptop:justify-center laptop:sticky laptop:top-0"/>

    <div class="text-black w-full laptop:w-3/4 flex flex-col items-center laptop:my-10">
      <h3 class="w-full p-5 text-lg font-semibold flex flex-col laptop:items-start">{{activeBtn}}</h3>
      <div class="w-full flex flex-col items-start">
        <AktualniInformace class="contentBox"/>
      </div>
    </div>

  </div>
</template>

<script setup lang="ts">

import {ref} from "vue";
import {ProClenyButton} from "@/interfaces/enums";
import AktualniInformace from "@/components/ProCleny/AktualniInformace.vue";
import UzitecneDokumenty from "@/components/ProCleny/UzitecneDokumenty.vue";

const activeBtn = ref<ProClenyButton>(ProClenyButton.aktualniInfo)

</script>

<style scoped>

.contentBox{
  animation: slideRight 1s;
}

@keyframes slideRight {
  0%{
    opacity: 0;
    transform: translateX(-50px);
  }
  70%{
    opacity: 1;
    transform: translateX(0px);
  }
}
</style>