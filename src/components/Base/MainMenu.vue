<template>
  <div class="flex justify-between pl-5  pr-8 laptop:px-10 items-center h-[80px] z-20 sticky top-0 bg-white shadow">

<!--    logo-->
    <router-link to="/" class=" h-full hover:scale-105 transition-all" @click="mobileNavOpened = false">
      <img alt="Logo" src="/trasko_logo.svg" class="h-full">
    </router-link>

<!--    desktop menu-->
    <nav v-if="!mobile" class="flex items-center uppercase text-sm text-black justify-between tablet:w-3/5 laptop:w-2/5 desktop:1/3 ">
      <router-link
          v-for="menuItem in menuItems"
          :key="menuItem.link"
          class="p-2 hover:text-orange transition-all"
          :to="menuItem.link"
      >
        {{ menuItem.name}}
      </router-link>
      <router-link active-class="pro-cleny" class="bg-primary py-2.5 px-3 rounded-2xl text-white" to="/pro_cleny">Pro členy</router-link>
    </nav>

<!--    burger-->
    <div class="icon hover:cursor-pointer" v-if="mobile" >
      <i @click="toggleMobileNav()" class="fa-bars" :class="{'icon-active' : mobileNavOpened}">
        <div v-for="i in 3" :key="i" :id="'bar' + i" class="w-[25px] h-[2px] bg-black rounded m-[7px] transition duration-500" :class="getBarClassName(i)"></div>
      </i>
    </div>

  </div>

<!--  mobile menu-->
  <nav>
    <transition name="mobile-nav">
      <ul v-show="mobileNavOpened" class="flex flex-col fixed w-full h-calc(100%-80px) bg-white bottom-0 items-center overflow-hidden p-[100px] justify-between z-10">
        <router-link
            v-for="menuItem in menuItems"
            :key="menuItem.link"
            class="p-3"
            :to="menuItem.link"
            @click="toggleMobileNav"
        >
          {{ menuItem.name}}
        </router-link>
        <router-link active-class="pro-cleny" class="bg-primary p-2.5 rounded-2xl text-white" to="/pro_cleny" @click="toggleMobileNav" exact >Pro členy</router-link>
      </ul>
    </transition>
  </nav>

</template>

<script setup lang="ts">
import {onMounted, ref} from 'vue'
import {MenuItem} from "@/interfaces/interfaces";

  const mobile = ref(false);
  const mobileNavOpened = ref(false)

  const menuItems = ref<Array<MenuItem>>([
    {
      name: 'O oddílu',
      link: '/o_oddilu',
    } as MenuItem,
    {
      name: 'Výsledky',
      link: '/vysledky',
    } as MenuItem,
    {
      name: 'Kalendář',
      link: '/kalendar',
    } as MenuItem,
  ])

  onMounted(() => {
    window.addEventListener('resize', checkScreen);
    checkScreen();
  })

  function toggleMobileNav(){
    mobileNavOpened.value = !mobileNavOpened.value;
  }

  function checkScreen(){
    if(window.innerWidth <= 640){
      mobile.value = true
      return
    }
    mobile.value = false
    mobileNavOpened.value = false
  }

  function getBarClassName(i: 1|2|3){
    if(mobileNavOpened.value){
      return 'bar'+ i + '-active'
    }
  }
</script>

<style scoped>

  nav a {
    font-weight: 400;
  }

  nav a.router-link-active {
    color: #FF9C81;
    border-bottom: #FF9C81 1px solid;
  }

  .pro-cleny{
    background-color: #FF9C81 !important;
    color: white !important;
  }

  .a:hover{
    background-color: #FF9C81 !important;
    color: white !important;
  }

  /*#pro-cleny:hover{*/
  /*  background-color: #FF9C81 !important;*/
  /*  color: white !important;*/
  /*}*/

  .bar1-active {
    transform: rotate(-44deg) translate(-6px,7px);
  }

  .bar2-active {
    opacity: 0%;
  }

  .bar3-active {
    transform: rotate(45deg) translate(-6px,-7px);
  }

  .mobile-nav-enter-active,
  .mobile-nav-leave-active{
    transition: 0.5s ease all;
  }

  .mobile-nav-enter-from,
  .mobile-nav-leave-to{
    transform: translateX(500px);
  }

  .mobile-nav-enter-to{
    transform: translateX(0);
  }

  .h-calc\(100\%-80px\){
    height: calc(100% - 80px);
  }

</style>