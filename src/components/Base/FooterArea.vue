<template>
  <div class="flex flex-col laptop:flex-row h-auto">

    <div class="w-full laptop:w-3/5 bg-blueDark py-7 px-5">
      <h5 class="pb-3 font-semibold text-greenLight">Výroční zprávy spolku</h5>
      <div class="flex flex-row flex-wrap justify-center text-greenLight">
        <a v-for="zprava in vyrocniZpravySpolku" :href="'PDFs/vyrocniZpravy/' + zprava.pdf" target="_blank" :key="zprava.year" class="py-1 px-2 hover:underline hover:text-white transition duration-200">{{zprava.year}}</a>
      </div>
    </div>

    <div class="w-full laptop:w-2/5 bg-gray-600 flex flex-row justify-center flex-wrap items-center gap-16 py-7 px-5 text-greenLight text-lg font-semibold">
        <a class="hover:text-white transition duration-200" href="https://www.rgform.eu/menu.php" target="_blank">
          <img src="images/ksis.png" alt="" class="w-[100px]">
        </a>
        <a class="hover:text-white transition duration-200" href="https://www.csmg.cz/" target="_blank">
          <img src="images/csmg.png" alt="" class="w-[100px]">
        </a>
        <a class="hover:text-white transition duration-200" href="https://csesg.cz/" target="_blank">
          <img src="images/csesg.png" alt="" class="w-[100px]">
        </a>
    </div>

  </div>

  <div class="bg-greenLight flex flex-row items-center pl-5 pr-14 py-10 justify-between tablet:px-10 laptop:py-4">
    <router-link to="/" class="">
      <img alt="Logo" src="../../../public/images/trasko_logo.svg">
    </router-link>

    <div class="flex flex-col laptop:flex-row w-[50%] items-start laptop:mr-32 laptop:justify-between">
      <span class="font-semibold">Kontakty:</span>
      <div class=" flex text-left ">
        <span class="material-symbols-outlined px-3">home</span>
        <span>Drnovská 413/39a, Nosálovice, 682 01 Vyškov</span>
      </div>
      <div class=" flex text-left">
        <span class="material-symbols-outlined px-3"> mail </span>
        <span>admin@sktrasko.cz</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import vyrocniZpravySpolku from "../../../public/data/vyrocniZpravySpolku";
</script>

<style scoped>

</style>