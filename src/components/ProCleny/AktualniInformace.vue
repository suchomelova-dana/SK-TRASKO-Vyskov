<template>
  <ul class="flex flex-col justify-start items-start space-y-3 list-disc px-[7%]">
    <li
        v-for="info in informace"
        :key="info.date"
        class="text-left"
    >
      <span>{{info.date}} -</span>
      <a :href="'PDFs/informace/' + info.pdf" target="_blank" class="text-green underline"> Informace </a>
      <span v-if="info.description !== null && info.description !== ''"> - {{info.description}}</span>
    </li>
  </ul>
</template>

<script setup lang="ts">

import informace from "../../../public/data/informace";
// const informations = [
//   {
//     date: '25.8.2023',
//     link: '/data/informace/Vyskovsky pohar - vysledky.pdf',
//     title: null,
//   },
//   {
//     date: '12.6.2023',
//     link: '/Vyskovsky pohar - vysledky.pdf',
//     title: 'Prohlášení o bezinfekčnosti',
//   },
//   {
//     date: '1.6.2023',
//     link: '/Vyskovsky pohar - vysledky.pdf',
//     title: 'Soustředění Bystřice pod Hostýnem, Ústí nad Orlicí a Vyškov',
//   },
//   {
//     date: '9.5.2023',
//     link: '/Vyskovsky pohar - vysledky.pdf',
//     title: null,
//   },
//   {
//     date: '1.5.2023',
//     link: '/Vyskovsky pohar - vysledky.pdf',
//     title: 'Tréninky do akademie',
//   },
//   {
//     date: '25.8.2023',
//     link: '/Vyskovsky pohar - vysledky.pdf',
//     title: null,
//   },
//   {
//     date: '25.8.2023',
//     link: '/data/informace/Vyskovsky pohar - vysledky.pdf',
//     title: null,
//   },
//   {
//     date: '12.6.2023',
//     link: '/Vyskovsky pohar - vysledky.pdf',
//     title: 'Prohlášení o bezinfekčnosti',
//   },
//   {
//     date: '1.6.2023',
//     link: '/Vyskovsky pohar - vysledky.pdf',
//     title: 'Soustředění Bystřice pod Hostýnem, Ústí nad Orlicí a Vyškov',
//   },
//   {
//     date: '9.5.2023',
//     link: '/Vyskovsky pohar - vysledky.pdf',
//     title: null,
//   },
//   {
//     date: '1.5.2023',
//     link: '/Vyskovsky pohar - vysledky.pdf',
//     title: 'Tréninky do akademie',
//   },
//   {
//     date: '25.8.2023',
//     link: '/Vyskovsky pohar - vysledky.pdf',
//     title: null,
//   },
//   {
//     date: '25.8.2023',
//     link: '/data/informace/Vyskovsky pohar - vysledky.pdf',
//     title: null,
//   },
//   {
//     date: '12.6.2023',
//     link: '/Vyskovsky pohar - vysledky.pdf',
//     title: 'Prohlášení o bezinfekčnosti',
//   },
//   {
//     date: '1.6.2023',
//     link: '/Vyskovsky pohar - vysledky.pdf',
//     title: 'Soustředění Bystřice pod Hostýnem, Ústí nad Orlicí a Vyškov',
//   },
//   {
//     date: '9.5.2023',
//     link: '/Vyskovsky pohar - vysledky.pdf',
//     title: null,
//   },
//   {
//     date: '1.5.2023',
//     link: '/Vyskovsky pohar - vysledky.pdf',
//     title: 'Tréninky do akademie',
//   },
//   {
//     date: '25.8.2023',
//     link: '/Vyskovsky pohar - vysledky.pdf',
//     title: null,
//   },
//   {
//     date: '25.8.2023',
//     link: '/data/informace/Vyskovsky pohar - vysledky.pdf',
//     title: null,
//   },
//   {
//     date: '12.6.2023',
//     link: '/Vyskovsky pohar - vysledky.pdf',
//     title: 'Prohlášení o bezinfekčnosti',
//   },
//   {
//     date: '1.6.2023',
//     link: '/Vyskovsky pohar - vysledky.pdf',
//     title: 'Soustředění Bystřice pod Hostýnem, Ústí nad Orlicí a Vyškov',
//   },
//   {
//     date: '9.5.2023',
//     link: '/Vyskovsky pohar - vysledky.pdf',
//     title: null,
//   },
//   {
//     date: '1.5.2023',
//     link: '/Vyskovsky pohar - vysledky.pdf',
//     title: 'Tréninky do akademie',
//   },
//   {
//     date: '25.8.2023',
//     link: '/Vyskovsky pohar - vysledky.pdf',
//     title: null,
//   }
// ]

</script>

<style scoped>


</style>