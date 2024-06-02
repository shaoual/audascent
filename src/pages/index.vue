<script setup lang="ts">
import HeaderPage from '@/components/HeaderPage.vue'
import FooterPage from '@/components/FooterPage.vue'
import Hero from '@/components/hero.vue'
import GameCards from '@/components/GameCards.vue'
</script>

<template>
  <div class="flex flex-col min-h-screen">

    <main class="flex-grow">
      <!-- Hero Section -->
      <Hero class="mb-44 lg:mb-96" />

      <!-- About Us Section -->
      <div class="px-4 py-20 md:py-32 lg:py-52 text-center md:text-left">
        <div class="flex items-center justify-center md:grid md:grid-cols-2">
          <!-- Image for larger screens -->
          <div class="hidden md:block mx-auto">
            <img src="/public/img/img__GameController.webp" class="w-2/3 lg:w-1/3" alt="illustration" />
          </div>

          <!-- Text Content -->
          <div>
            <h1 class="text-3xl font-bold mt-3 text-white">À PROPOS DE NOUS</h1>
            <p class="mt-6 mx-4 md:mx-0 text-white">
              Bienvenue dans l'univers d'Ascentia, le carrefour où les passionnés d'esports gravissent les sommets de la compétition. Notre plateforme vous propose une expérience de jeu inégalée, conçue pour les aspirants champions en quête d'ascension. À travers nos tournois dynamiques, Ascentia réunit une communauté soudée par la passion du jeu et le goût du défi. Rejoignez-nous et tracez votre parcours vers la gloire.
            </p>
            <div class="flex justify-center md:justify-start mt-10">
              <RouterLink to="/apropos" class="bg-indigo-600 hover:bg-gray-400 text-white py-4 px-14 rounded inline-flex items-center border-2 border-white">
                Lire plus
              </RouterLink>
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
          <div class="bg-gray-800 p-6 rounded-lg shadow-lg flex flex-col items-center text-center">
            <a href="https://instagram.com" aria-label="Tweeter">
            <Icon_1 />
          </a>
            <h3 class="text-2xl font-bold mb-2 text-white">Graphiques Dynamiques</h3>
            <p class="text-gray-400">Visualisez votre progression grâce à des graphiques et des analyses détaillées de vos performances.</p>
          </div>
          <div class="bg-gray-800 p-6 rounded-lg shadow-lg flex flex-col items-center text-center">
            <a href="https://instagram.com" aria-label="Tweeter">
            <Icon_2 />
          </a>
            <h3 class="text-2xl font-bold mb-2 text-white">Récompenses exclusives</h3>
            <p class="text-gray-400">Participez à des tournois pour gagner des prix uniques et des récompenses qui vous aideront à vous démarquer dans la communauté.</p>
          </div>
          <div class="bg-gray-800 p-6 rounded-lg shadow-lg flex flex-col items-center text-center">
            <a href="https://instagram.com" aria-label="Tweeter">
            <Icon_3 />
          </a>
            <h3 class="text-2xl font-bold mb-2 text-white">Accessibilité Totale</h3>
            <p class="text-gray-400">Accédez à notre plateforme depuis n'importe quel appareil et plongez au cœur de l'action où que vous soyez.</p>
          </div>
        </div>
      </section>

      <!-- Tournaments Section -->
      <section class="px-4 py-20 text-center">
        <h2 class="text-4xl font-bold mb-12 text-white">DÉCOUVREZ LES TOURNOIS</h2>
        <GameCards />
      </section>
    </main>

  </div>
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
