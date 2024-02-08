<template>
  <div class="min-h-[calc(100vh-60px)] flex flex-col items-center tablet:flex-row-reverse">

<!--    White box with input-->
    <div class="flex flex-col items-center gap-10 py-10 px-[5%] h-[450px] justify-center tablet:w-3/5 tablet:h-[calc(100vh-60px)] tablet:min-h-[450px]">
      <p class="w-[350px]">Pro vstup do sekce pro členy je nutné zadat přístupové heslo</p>
      <div>
        <input
            placeholder="heslo"
            type="password"
            v-model="input"
            id="input"
            class="py-3 px-5 border-b-2 outline-none focus:outline-none focus:border-b-green focus:px-7 transition ease-in-out transition-all duration-200"
        >
        <p v-show="wrongPassword" class="text-xs text-red-500 p-3" id="wrongPassword">Nesprávné heslo</p>
      </div>
      <CustomButton
          value="Přihlásit se"
          bg-color="bg-green"
          text-color="text-white"
          @click="validatePassword"
      />
    </div>

<!--    Image-->
    <div
        class="group w-full h-[450px] relative flex flex-col items-center justify-center tablet:w-2/5 tablet:h-[calc(100vh-60px)] tablet:min-h-[450px] "
        id="imageBox"
    >
      <img src="images/login.jpg" alt="" class="object-cover w-full h-full">
      <div class="bg-black bg-opacity-60 absolute top-0 h-full w-full"></div>
      <h1 class="text-5xl absolute m-auto left-0 right-0 text-white font-bold px-[10%] tablet:px-[3%]">Informace <br> pro členy</h1>
    </div>

  </div>

</template>

<script setup lang="ts">

  import CustomButton from "@/components/Base/CustomButton.vue";
  import {  ref} from "vue";
  import router from "@/router";
  import correctHashes from "../../public/data/password";

  const wrongPassword = ref(false)
  const input = ref<string>('')
  const inputHash = ref<string>('')

  function validatePassword(){
    generatePasswordHash(input.value).then(() => {
      const index = correctHashes.findIndex(element => {
        return element.toLowerCase() === inputHash.value.toLowerCase()
      })
      index !== -1 ? createCookie() : handleWrongPassword()
    })
  }

  function createCookie(){
    const currentDate = new Date()
    currentDate.setMinutes(currentDate.getMinutes()+5)
    document.cookie = "SKTraskoCookie=obsahCookie; expires=" + currentDate.toUTCString()
    router.push('/pro_cleny')
  }

  document.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
      const inputEl = document.getElementById("input")


      event.preventDefault();
      validatePassword()
    }
  });

  async function generatePasswordHash(pass: string) {
    const password = pass;
    const encoder = new TextEncoder();
    const data = encoder.encode(password);
    const hash = await crypto.subtle.digest("SHA-256", data);
    const hashArray = Array.from(new Uint8Array(hash));
    const hashHex = hashArray.map((b) => b.toString(16).padStart(2, "0")).join("");
    inputHash.value = hashHex
  }


  async function handleWrongPassword(){
    wrongPassword.value = true
    const el = document.getElementById('wrongPassword')
    console.log(el)
    if(el !== null){
      el.classList.add('pulseClass')
    }
    await new Promise(resolve => setTimeout(resolve, 3000)); // 3 sec
    el?.classList.remove('pulseClass')

  }

</script>

<style scoped>

#imageBox{
  animation: slideRight 1s ;
}

@keyframes pulse {
  0% { transform: rotate(0deg); }
  25% { transform: rotate(5deg); }
  50% { transform: rotate(0deg); }
  75% { transform: rotate(-5deg); }
  100% { transform: rotate(0deg); }
}

.pulseClass{
  animation: pulse 0.5s;
  animation-iteration-count: 3;
}

@keyframes slideRight {
  0%{
    transform: translateX(-500px);
  }
  70%{
    transform: translateX(0px);
  }
}


</style>