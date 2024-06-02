<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
  <section class="relative w-full h-screen bg-cover bg-center bg-no-repeat" style="background-image: url('/public/img/accueil__1.webp');">
    <div class="absolute inset-0 bg-gradient-to-b from-transparent to-black"></div>
    <div class="relative z-10 h-full flex flex-col justify-center items-start text-left px-4 md:px-8 lg:px-16">
      <h1 class="text-6xl font-bold text-white">Ascentia</h1>
      <p class="mt-4 text-2xl text-white">Votre talent, notre arène, à l'apogée du jeu !</p>
      <p class="mt-4 text-lg text-white max-w-xl">Ascentia est une plateforme dédiée aux amateurs d'esports, offrant un espace pour s'affronter, progresser et exceller dans l'univers compétitif du jeu vidéo.</p>
      <div class="mt-6">
        <RouterLink to="/pages/tournois.vue" class="bg-orange-600 hover:bg-orange-700 text-white py-3 px-8 rounded-lg inline-block">
          Rejoindre un tournoi
        </RouterLink>
      </div>
    </div>
  </section>
</template>

<style scoped>
body, html {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
}
</style>
