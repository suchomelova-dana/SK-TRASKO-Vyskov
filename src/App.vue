<template>
  <MainMenu/>
  <router-view/>
  <FooterArea/>
</template>

<style>
#app {
  font-family: 'Poppins', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  box-sizing: border-box;
}


</style>
<script>
import MainMenu from "@/components/Base/MainMenu";
import FooterArea from "@/components/Base/FooterArea";
export default {
  components: {FooterArea, MainMenu }
}
</script>