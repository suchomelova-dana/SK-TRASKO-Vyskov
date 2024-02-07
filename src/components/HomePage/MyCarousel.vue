<template>
  <div class="py-14">
    <div class="text-gray-500 font-semibold p-4 ">Naše holky na Mistrovství České republiky 2023 ve společných skladbách:</div>

    <div class="relative">
      <ul class="controls w-full flex flex-row justify-between absolute top-[50%]" >
        <li class="prev rotate-180 z-10 flex flex-col items-center py-5 px-2 bg-white bg-opacity-60 hover:cursor-pointer hover:bg-opacity-100">
          <span class="material-symbols-outlined">arrow_forward_ios</span>
        </li>
        <li class="next z-10 flex flex-col items-center py-5 px-2 bg-white bg-opacity-60 hover:cursor-pointer hover:bg-opacity-100">
          <span class="material-symbols-outlined ">arrow_forward_ios</span>
        </li>
      </ul>

      <div class="my-slider">
        <div v-for="item in pictures" :key="item.image">
          <img :src="item.image" alt="ahoj" class="h-[300px] laptop:h-[400px]">
        </div>

      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import {tns} from "tiny-slider"
  import {onMounted} from "vue";
  import pictures from "../../../public/data/carousel";

  onMounted(() => {
    var slider = tns({
      "container": ".my-slider",
      "items": 9,
      "mouseDrag": true,
      "swipeAngle": false,
      "speed": 400,
      "gutter": 10,
      "autoWidth": true,
      "slideBy": 1,
      "controlsContainer": ".controls",
      "nav": false,
      "touch": true,
    });
  })

</script>

<style scoped>

</style>