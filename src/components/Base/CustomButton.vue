<template>
  <button
      class="pl-5 pr-5 pt-2 pb-2 rounded "
      :class="[bgColor, textColor, {'w-full': maxWidth}]"
  >
    {{ value }}
  </button>
</template>

<script setup lang="ts">

import {defineProps, withDefaults} from 'vue'

const props = withDefaults(
    defineProps<{
      maxWidth?: boolean,
      value: string,
      bgColor: string,
      textColor: string,
    }>(),
    {
      maxWidth: false
    }
)

</script>

<style scoped>

</style>