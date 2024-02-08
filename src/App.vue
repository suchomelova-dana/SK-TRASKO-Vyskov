<template>
  <MainMenu/>
  <router-view/>
  <FooterArea/>
  <SocialsIcons class="bottom-0 right-0 fixed"></SocialsIcons>
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
import SocialsIcons from "@/components/Base/SocialsIcons";
export default {
  components: {SocialsIcons, FooterArea, MainMenu }
}
</script>