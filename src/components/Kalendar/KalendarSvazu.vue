<template>
  <div class="flex flex-col w-auto items-center">
    <h3 class="uppercase text-orangeDark font-semibold p-5">Kalendář svazů</h3>
    <div class="bg-orangeLight rounded-2xl flex flex-row p-5 tablet:flex-col">

      <div class="flex flex-col gap-5 p-3">
        <h4 class="font-semibold text-orangeDark">Moderní gymnastika</h4>
        <div class="flex flex-col gap-3">
          <a href="https://www.csmg.cz/cs/zavody/domaci-terminova-listina/" target="_blank" class="text-orange underline" >český (ČSMG)</a>
          <a href="https://www.gymnastics.sport/site/events/search.php?type=sport" target="_blank" class="text-orange underline"> mezinárodní (FIG)</a>
        </div>
      </div>

      <div class="flex flex-col gap-5 p-3 tablet:pt-5">
        <h4 class="font-semibold text-orangeDark">ESG</h4>
        <div class="flex flex-col gap-3">
          <a href="https://csesg.cz/kalendar/" target="_blank" class="text-orange underline">český (ČSESG)</a>
          <a href="https://www.ifagg.com/v1/page.php?n=5" target="_blank" class="text-orange underline"> mezinárodní (IFAGG)</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped>

</style>