<template>
  <div class="flex flex-col laptop:flex-row h-auto">

<!--    Vyrocni zpravy-->
    <div class="w-full laptop:w-3/5 bg-blueDark py-7 px-5">
      <h5 class="pb-3 font-semibold text-greenLight">Výroční zprávy spolku</h5>
      <div class="flex flex-row flex-wrap justify-center text-greenLight">
        <a v-for="zprava in vyrocniZpravySpolku" :href="'/PDFs/vyrocniZpravy/' + zprava.pdf" target="_blank" :key="zprava.year" class="py-1 px-2 hover:underline hover:text-white transition duration-200">{{zprava.year}}</a>
      </div>
    </div>

<!--    Odkazy-->
    <div class="w-full laptop:w-2/5 bg-gray-600 flex flex-row justify-center flex-wrap items-center gap-16 py-7 px-5 text-greenLight text-lg font-semibold">
        <a class="hover:text-white transition duration-200 hover:scale-105" href="https://www.rgform.eu/menu.php" target="_blank">
          <img src="/obrazky/odkazy/ksis.png" alt="a" class="w-[100px]">
        </a>
        <a class="hover:text-white transition duration-200 hover:scale-105" href="https://www.csmg.cz/" target="_blank">
          <img src="/obrazky/odkazy/csmg.png" alt="b" class="w-[100px]">
        </a>
        <a class="hover:text-white transition duration-200 hover:scale-105" href="https://csesg.cz/" target="_blank">
          <img src="/obrazky/odkazy/csesg.png" alt="c" class="w-[100px]">
        </a>
    </div>
  </div>


<!--  Footer-->
  <div class="bg-greenLight flex flex-col-reverse tablet:flex-row items-center py-10 gap-10 justify-between tablet:px-10 laptop:py-4">
    <router-link to="/" class="">
      <img alt="Logo" src="/trasko_logo.svg" class="h-[70px]">
    </router-link>

    <div class="flex flex-col laptop:flex-row  gap-5 laptop:mx-5 laptop:items-center ">
      <span class="font-semibold flex flex-row w-full justify-center laptop:w-auto">Kontakty:</span>
      <div class="flex flex-col gap-2">
        <div class=" flex text-left items-center px-5">
          <span class="material-symbols-outlined px-3">home</span>
          <span>Drnovská 413/39a, Nosálovice, 682 01 Vyškov</span>
        </div>
        <div class=" flex text-left px-5">
          <span class="material-symbols-outlined px-3"> mail </span>
          <span>admin@sktrasko.cz</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import vyrocniZpravySpolku from "../../../public/data/vyrocniZpravySpolku";
</script>

<style scoped>

</style>