<template>
    <ul class="flex flex-col justify-start items-start space-y-3 list-disc px-[7%]">
      <li
          v-for="item in organizace"
          :key="item.link"
          class="text-left"
      >
          <a :href="item.link" target="_blank" class="text-orange underline" v-if="item.linkText !== null">{{item.linkText}}</a>
          <span v-if="item.description !== null && item.linkText !== null"> - </span>
          <span v-if="item.description !== null" class="text-black"> {{item.description}}</span>
      </li>
    </ul>
</template>

<script setup lang="ts">

const organizace = [
  {
    link: '',
    linkText: 'Rozvrh 1.12.2021 - 31.3.2022',
    description: null,
  },
  {
    link: '',
    linkText: 'Provozní řád domečku',
    description: 'aktualizace 1.10.2021',
  },
  {
    link: null,
    linkText: null,
    description: '13.10.2021 burza trikotů, tréninkové oblečení a náčiní 18:00 - 19:00',
  },
  {
    link: '',
    linkText: 'Soustředění podzim 2021, jaro 2022',
    description: null,
  },
  {
    link: '',
    linkText: null,
    description: 'Do 3.12.2021 prosím nahlásit hory o lednových a únororvých víkendech kvůli rozvrhu skládání sestav',
  },
  {
    link: '',
    linkText: null,
    description: '4.12.2021 Vánoční besídka od 17:00',
  },
  {
    link: '',
    linkText: null,
    description: 'Vánoční prázdniny 15.12.2021 - 2.1.2022',
  }
]

</script>

<style scoped>

</style>