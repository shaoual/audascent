<script setup lang="ts">
import HeaderPage from '@/components/HeaderPage.vue'
import FooterPage from '@/components/FooterPage.vue'
import hero from '@/components/hero.vue'
</script>


<template>
   <main class="main-content">
  <hero class="mb-44 lg:mb-96" />

  <div class=" text-white ">
 
    <div class="flex items-center justify-center mt-20 md:grid md:grid-cols-2 md:mt-32 lg:mt-52 ">

 <div class="hidden md:block order-2 md:order-2 mx-auto">

                <div class="flex justify-center">
                  <img src="/public/img/img__GameController.webp"
                    class="w-2/3 md:full lg:1/3" alt="illustration" />
                </div>

                </div>





  <div class="order-2 md:order-1 ">
  <div class="lg:flex">
    <h1 class="text-3xl text-center md:text-justify font-Helvetica font-bold mt-3 text-white">À PROPOS DE NOUS</h1>
  </div>


      <div class="order-3 md:hidden mt-20 mx-auto">
        <div class="flex justify-center">
          <img src="/public/img/img__GameController.webp" class="w-2/3 md:w-full" alt="illustration" />
        </div>
        </div>

  <div class="lg:flex mt-6 text-white text-center md:text-left mx-4 md:mx-0">
    <p>Bienvenue dans l'univers d'Ascentia, le carrefour où les passionnés d'esports gravissent les sommets de la compétition. Notre plateforme vous propose une expérience de jeu inégalée, conçue pour les aspirants champions en quête d'ascension. À travers nos tournois dynamiques, Ascentia réunit une communauté soudée par la passion du jeu et le goût du défi. Rejoignez-nous et tracez votre parcours vers la gloire.</p>
  </div>

<div class="flex justify-center md:float-left">
      <button class="bg-indigo-952 hover:bg-gray-400 text-white mt-10 py-4 px-14 rounded inline-flex items-center border-2 border-whiter lg:flex-row">
        <RouterLink to="/apropos">Lire plus</RouterLink>
      </button>
    </div>

  </div>

    </div>
  </div>

</main>
</template>