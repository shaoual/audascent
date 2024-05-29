<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
  <section class="relative bg-cover bg-center bg-no-repeat h-screen" style="background-image: url('/public/img/accueil__1.webp');">
    <div class="absolute inset-0 bg-gradient-to-b from-transparent to-black"></div>
    <div class="relative z-10 h-full flex flex-col justify-start items-center pt-20 md:pt-32 lg:pt-40 p-4 md:p-8">
      <div class="text-center md:text-left text-white">
        <h1 class="text-4xl font-Helvetica font-bold">Audascent</h1>
        <p class="mt-5 font-bold">Votre talent, notre arène, à l'apogée du jeu !</p>
        <p class="mt-6 md:text-left m md:mx-0">Ascentia est une plateforme dédiée aux amateurs d'esports, offrant un espace pour s'affronter, progresser et exceller dans l'univers compétitif du jeu vidéo.</p>
        <div class="mt-10 flex justify-center md:justify-start">
          <button class="bg-orange-600 hover:bg-gray-400 text-white py-4 px-14 rounded inline-flex items-center border-2 border-white">
            <RouterLink to="../pages/tournois.vue">Rejoindre un tournoi</RouterLink>
          </button>
        </div>
      </div>
    </div>
  </section>
</template>


