<template>

<!--  Homepage box-->
  <div class="flex flex-col tablet:flex-row tablet:h-[calc(100vh-60px)] tablet:min-h-[600px] bg-greenLight overflow-hidden" id="homepageHeading">
    <div class="bg-greenLight text-greenDarkest flex justify-center flex-col h-full tablet:w-1/2 laptop:w-1/3 ">
      <div class="flex flex-col space-y-5 items-center p-14">
        <h2 class="text-greenDarkest font-semibold text-3xl">Vítejte</h2>
        <h3 class="text-greenDarkest text-lg w-72 ">na stránkách oddílu moderní gymnastiky</h3>
        <h1 class="text-primary font-bold text-5xl tablet:text-6xl mt-20 mb-32 pt-10 w-96">SK TRASKO VYŠKOV</h1>
        <CustomButton
            class="mt-56 hover:scale-105 transition duration-200"
            value="Aktuality"
            bg-color="bg-orange"
            text-color="text-white"
            @click="scrollToAktuality()"
        />
      </div>
    </div>
    <img
        src="../../public/obrazky/homepage_photo.png"
        alt=" "
        class="object-cover w-full tablet:w-1/2 tablet:h-[100vh-60px] laptop:w-2/3 transition-transform duration-200"
        id="homeImage"
    >
  </div>

<!--  Orange boxes-->
  <section class="hide-animate">
    <div class="bg-white p-[90px] space-y-6 px-[10%] flex flex-col tablet:flex-row tablet:justify-between tablet:space-y-0 laptop:px-[15%]">
      <div class="bg-orangeLight text-orangeDark p-5 px-10 tablet:w-[30%] flex justify-center flex-col">Trénujeme moderní a estetickou skupinovou gymnastiku</div>
      <div class="bg-orangeLight text-orangeDark p-5 px-10  tablet:w-[30%] flex justify-center flex-col">Jezdíme na závody po celé České republice i mimo ní</div>
      <div class="bg-orangeLight text-orangeDark p-5 px-10 tablet:w-[30%] flex justify-center flex-col">Kromě závodů pořádáme také každoroční akce jako Akademie a Vánoční besídky</div>
    </div>
  </section>

<!--  Aktuality-->
  <section id="aktualityRef" class="hide-animate scroll-mt-32" ref="aktualityRef">
    <SectionBoxHomepage id="aktuality" section-name="Aktuality" text-color="text-orange"  >
      <slot>
        <div class="bg-grayLight w-full py-8 pl-12 pr-8 tablet:p-20 tablet:px-32 flex flex-col items-start desktop:items-center desktop:flex-row desktop:justify-between">
          <ul class="list-disc text-green text-lg " :class="{'desktop:w-[50%]': showAktualityImage}">
            <li class="p-2 text-left" v-for="item in aktuality" :key="item.title">
                <span class="text-gray-500 ">{{item.title}}</span>
                <span v-if="item.PDF" class="text-gray-500 "> - </span>
                <span>
                  <a :href="'PDFs/aktuality/' + item.PDF" target="_blank" class="text-green hover:text-greenDark">  {{item.PDFtitle}}</a>
                </span>
            </li>
          </ul>

          <div v-if="showAktualityImage" class="max-w-[400px] w-[100%] tablet:max-w-[600px] desktop:max-w-[50%] desktop:w-[50%] my-10 desktop:my-0 flex justify-end">
            <img :src="'obrazky/aktuality/' + aktualityImage" alt="" class="w-full desktop:w-[80%]"/>
          </div>

        </div>
      </slot>
    </SectionBoxHomepage>
  </section>


<!--  Carousel-->
  <section class="hide-animate">
    <MyCarousel/>
  </section>

<!--  Sponzori-->
  <section class="hide-animate">
      <SectionBoxHomepage section-name="Sponzoři" text-color="text-blue">
      <slot>
        <div class="px-5 tablet:px-10 flex flex-col items-center justify-center ">
          <a href="https://www.trasko.cz/" target="_blank" class="hover:scale-105 transition"><img src="../../public/obrazky/sponzori/TRASKO_logo+pas__pos__sRGB.jpg" class="h-[140px] laptop:h-[200px]"></a>
          <div class="w-[90%] text-blue pb-10 text-sm tablet:w-[60%]">Firma TRASKO, a.s. finančně zabezpečuje chod oddílu po celou dobu jeho působení, a dále oddílu vypomáhá také materiálně-technickým zabezpečením všech pořádaných akcí.</div>

          <div class="flex flex-col items-center justify-center laptop:flex-row">
            <a href="https://www.vyskov-mesto.cz/" target="_blank" class="flex justify-center laptop:hover:scale-105 transition"><img class="h-[15vw] tablet:h-[100px] " src="/obrazky/sponzori/vyskov_logo_MV_web.jpg"></a>
            <a href="https://www.jmk.cz/" target="_blank" class="flex justify-center laptop:hover:scale-105 transition"><img class="h-[15vw] tablet:h-[100px]" src="/obrazky/sponzori/Logotyp_jihomoravsky_kraj_RGB.jpg"></a>
            <a href="https://nsa.gov.cz/" target="_blank" class="flex justify-center laptop:hover:scale-105 transition"><img class="h-[15vw] tablet:h-[100px]" src="/obrazky/sponzori/Narodni%20sportovni%20agentura_logo%20rgb.jpg"></a>
          </div>
          <div class="w-[90%] text-blue pb-10 text-sm tablet:w-[60%]">Činnost oddílu SK TRASKO Vyškov, z.s. a akce jím realizované jsou finančně podporovány městem Vyškov, Jihomoravským krajem a Národní sportovní agenturou.</div>

          <div class="flex block flex-grow"></div>
        </div>
      </slot>
    </SectionBoxHomepage>
  </section>

  <div class="h-[100px]"></div>

</template>


<script setup lang="ts">
  import CustomButton from "@/components/Base/CustomButton.vue";
  import MyCarousel from "@/components/HomePage/MyCarousel.vue";
  import SectionBoxHomepage from "@/components/HomePage/SectionBoxHomepage.vue";
  import {ref} from "vue";
  import aktuality, {aktualityImage} from "../../public/data/aktuality";

  const aktualityRef = ref<HTMLElement | null>(null);

  const showAktualityImage = Boolean(aktualityImage);

  function scrollToAktuality(){
    // document.getElementById('aktuality')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    aktualityRef.value?.scrollIntoView({behavior: "smooth", block: "start"});
  }

  let sections = document.getElementsByTagName('section')
  window.onscroll = () => {
    for(let item of sections){
      let top =window.scrollY;
      let offset = item.offsetTop;
      let height = item.offsetHeight;
      let relativeOffset = window.innerHeight * 0.8;

      if(top >= (offset - relativeOffset) && top < offset + height){
        item.classList.add('show-animate')
      }
      // else{
      //   item.classList.remove('show-animate')
      // }
    }
  }
</script>

<style scoped>

#homeImage{
  animation: slideLeft 1s ;
}

@keyframes slideLeft {
  0%{
    transform: translateX(500px);
  }
  80%{
    transform: translateX(0px);
  }
}

.hide-animate{
  opacity: 0;
  transition: 1s;
  transform: translateY(5%);
}

.show-animate{
  opacity: 1;
  transition: 1s;
  transform: translateX(0);
}

</style>
