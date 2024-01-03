<template>
    <div class="w-full flex flex-col items-center">
      <table>
        <tr>
          <th>Ročník - oddělení</th>
          <th>Kč / pololetí</th>
        </tr>

        <tr
            v-for="item in prispevky"
            :key="item.rocnik"
            :class="item.id % 2 === 0 ? 'bg-yellowLight' : 'bg-white'"
        >
          <td class="py-5 px-10">{{ item.rocnik }}</td>
          <td class="py-5 px-10">{{ item.cena }},-</td>
        </tr>

      </table>
    </div>
</template>

<script setup lang="ts">

const prispevky = [
  {
    rocnik: 'Přípravka',
    cena: 800,
    id: 1
  },
  {
    rocnik: 'Pokročilá přípravka',
    cena: 1600,
    id: 2
  },
  {
    rocnik: 'NNML 2015',
    cena: 2200,
    id: 3
  },
  {
    rocnik: 'NNML 2014',
    cena: 2900,
    id: 4
  },
  {
    rocnik: '2013 + ESG KR 10-12 let',
    cena: 3300,
    id: 5
  },
  {
    rocnik: 'ESG KR 8-10 let, ESG 12-14 let + Terka K. + Lea',
    cena: 3600,
    id: 6
  },
  {
    rocnik: 'ESG DL 10-12 let + Nela + JUN',
    cena: 4000,
    id: 7
  },
]

</script>

<style scoped>

</style>