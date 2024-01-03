<template>
  <div class="py-7">
    <div class="font-semibold p-10 " :class="textColor"> {{ sectionName }} : </div>
    <div class="flex flex-col items-center justify-center" :class="bgColor">
      <slot></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
  import {defineProps, withDefaults} from "vue";

  withDefaults(
      defineProps<{
        sectionName: string,
        bgColor?: string,
        textColor?: string
      }>(),
      {
        bgColor: 'bg-white',
        textColor: 'text-orange',
      }
)
</script>

<style scoped>

</style>