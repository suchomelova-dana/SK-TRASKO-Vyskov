<template>
  <div class="py-14">
    <div class="text-gray-500 font-semibold p-4 ">{{carouselHeading}}</div>

    <div class="relative">
      <ul class="controls w-full flex flex-row justify-between absolute top-[50%]" >
        <li class="prev rotate-180 z-10 flex flex-col items-center justify-center h-[60px] rounded-l px-2 bg-white laptop:hover:px-4 text-gray-500 hover:text-black transition-all hover:cursor-pointer">
          <span class="material-symbols-outlined">arrow_forward_ios</span>
        </li>
        <li class="next z-10 flex flex-col items-center justify-center h-[60px] rounded-l px-2 bg-white laptop:hover:px-4 text-gray-500 hover:text-black transition-all hover:cursor-pointer">
          <span class="material-symbols-outlined ">arrow_forward_ios</span>
        </li>
      </ul>

      <div class="my-slider">
        <div v-for="item in pictures" :key="item.image">
          <img :src="'obrazky/carousel/' + item.image" alt="ahoj" class="h-[300px] laptop:h-[400px]">
        </div>

      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import {tns} from "tiny-slider"
  import {onMounted} from "vue";
  import {pictures, carouselHeading} from "../../../public/data/carousel";

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