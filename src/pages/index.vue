<script setup lang="ts">
import Hero from '@/components/hero.vue'
import GameCards from '@/components/GameCards.vue'
import IconCard1 from '@/components/icons/IconCard__1.vue'
import carroussel from '@/components/carroussel1.vue'
</script>

<template>
  <div class="">

    
      <!-- Hero Section -->
      <Hero class=" lg:" />

      <!-- About Us Section -->
      
    <div class="px-4 py-20 md:py-32 lg:py-52 text-center md:text-left">
  <div class="flex flex-col-reverse md:flex-row items-center justify-center">
    <!-- Text Content -->
    <div class="md:w-1/2 lg:pr-20">
      <h1 class="text-3xl font-bold  text-white ml-12">À PROPOS DE NOUS</h1>
      <p class="mt-6 ml-12 text-white ">
        Bienvenue dans l'univers d'Audascent, le carrefour où les passionnés d'esports gravissent les sommets de la compétition. Notre plateforme vous propose une expérience de jeu inégalée, conçue pour les aspirants champions en quête d'ascension. À travers nos tournois dynamiques, Audascent réunit une communauté soudée par la passion du jeu et le goût du défi. Rejoignez-nous et tracez votre parcours vers la gloire.
      </p>
      <div class="flex justify-center md:justify-start mt-10 ml-12">
        <RouterLink to="/apropos" class="bg-violet-950 hover:bg-gray-400 text-white py-4 px-14 rounded inline-flex items-center border-2 border-white">
          Lire plus
        </RouterLink>
      </div>
    </div>

    <!-- Image for larger screens -->
    <div class="md:w-1/2 mt-10 md:mt-0">
      <img src="/public/img/Game__Controller1.webp" class="w-2/3 md:w-full lg:w-2/3 mx-auto" alt="illustration" />
    </div>
  </div>


          <!-- Image for smaller screens -->
          <div class="md:hidden mt-20 mx-auto">
            <img src="/public/img/img__GameController.webp" class="w-2/3" alt="illustration" />
          </div>
        </div>
      </div>

      <!-- Experience Section -->
       <section class="px-4 py-20 text-center">
        <h2 class="text-4xl font-bold mb-12 text-white">VIVEZ L'EXPÉRIENCE ASCENTIA</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="bg-gradient-to-r from-gray-800  to-black p-6 rounded-lg shadow-lg flex flex-col items-center text-center">
            <IconCard1 class="w-150 h-150 mb-4 text-white" aria-label="Graphiques Dynamiques" />
            <h3 class="text-2xl font-bold mb-2 text-white">Graphiques Dynamiques</h3>
            <p class="text-gray-400">Visualisez votre progression grâce à des graphiques et des analyses détaillées de vos performances.</p>
          </div>
          <div class="bg-gradient-to-r from-gray-800  to-black p-6 rounded-lg shadow-lg flex flex-col items-center text-center">
            <img src="/Users/selmahaoual/Desktop/audascent/public/img/game_2.webp" class="w-200 h-200 mb-4 text-white" aria-label="Récompenses exclusives" />
            <h3 class="text-2xl font-bold mb-2 text-white">Récompenses exclusives</h3>
            <p class="text-gray-400">Participez à des tournois pour gagner des prix uniques et des récompenses qui vous aideront à vous démarquer dans la communauté.</p>
          </div>
          <div class="bg-gradient-to-r from-gray-800  to-black rounded-lg shadow-lg flex flex-col items-center text-center">
            <img src="/Users/selmahaoual/Desktop/audascent/public/img/IconCard3_1.webp" class="w-200 h-200 mb-4 text-white" aria-label="Accessibilité Totale" />
            <h3 class="text-2xl font-bold mb-2 text-white">Accessibilité Totale</h3>
            <p class="text-gray-400">Accédez à notre plateforme depuis n'importe quel appareil et plongez au cœur de l'action où que vous soyez.</p>
          </div>
        </div>
      </section>

      <!-- Tournaments Section -->
      <section class="px-4 py-20 text-center">
        <h2 class="text-4xl font-bold mb-12 text-white">DÉCOUVREZ LES TOURNOIS</h2>
        <GameCards />
         <h2 class="text-4xl font-bold mb-12 text-white">LES JEUX PRÉSENT DANS L'ARÈNE!</h2>
          <carroussel/>
      </section>
   


 
</template>

<style scoped>
body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';
}

.main-content {
  width: 100%;
  min-height: 100vh;
}

h1, h2, h3 {
  color: white;
}
</style>
