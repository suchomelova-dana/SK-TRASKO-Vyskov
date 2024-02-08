<template>
  <div class="flex flex-col justify-center">
    <div class="flex flex-col justify-center bg-orangeLight rounded-xl py-14 px-5">
    <h3 class="text-lg font-semibold p-5 text-orangeDark">Užitečné dokumenty</h3>
    <div class="flex flex-col">
      <a :href="'PDFs/uzitecneDokumenty/' + item.document" target="_blank" v-for="item in uzitecneDokumenty" :key="item.title" class="bg-orange text-white m-2 p-2 rounded laptop:hover:scale-105 transition">
        {{item.title}}
      </a>
    </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import uzitecneDokumenty from "../../../public/data/uzitecneDokumenty";

</script>

<style scoped>

</style>