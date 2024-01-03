<template>
  <div class="flex flex-col gap-5 p-10 tablet:flex-row laptop:flex-col">

    <CustomButton
        v-for="button in buttons"
        :key="button.type"
        :bg-color="button.bgColor"
        :value="button.type"
        text-color="text-white"
        :class="activeBtn === button.type ? 'scale-x-105 tablet:translate-y-[20px] laptop:translate-y-0 laptop:translate-x-[-40px] transition duration-200 font-semibold' : ''"
        @click="handleClickBtn(button.type)"
        class="transition duration-200"
    />

  </div>
</template>

<script setup lang="ts">

import CustomButton from "@/components/Base/CustomButton.vue";
import {ProClenyButton} from "@/interfaces/enums";
import {ref, defineEmits} from "vue";

const activeBtn = ref<ProClenyButton>(ProClenyButton.aktualniInfo)

function changeActiveBtn(toBeActivated: ProClenyButton){
  activeBtn.value = toBeActivated
}

function handleClickBtn(clickedBtn: ProClenyButton){
  changeActiveBtn(clickedBtn)
  emit('activeBtnChanged', clickedBtn)
}

const emit= defineEmits(['activeBtnChanged'])

const buttons = [
  {
    type: ProClenyButton.aktualniInfo,
    bgColor: 'bg-green',
  },
  {
    type: ProClenyButton.organizaceSkolnihoRoku,
    bgColor: 'bg-orange',
  },
  {
    type: ProClenyButton.rozpisTreninku,
    bgColor: 'bg-blue',
  },
  {
    type: ProClenyButton.clenskePrispevky,
    bgColor: 'bg-yellow',
  }
]

</script>

<style scoped>

</style>