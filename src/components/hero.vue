<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>

    <section>
<div class="bg-gray-900 text-white">
    <div class="flex items-center justify-center mt-20 md:grid md:grid-cols-2 md:mt-32 lg:mt-52">

 <div class="hidden md:block order-1 md:order-2 mx-auto">

                <div class="flex justify-center">
                  <img src="/public/img/img__GameController.webp"
                    class="w-2/3 md:full lg:1/3" alt="illustration" />
                </div>

                </div>





  <div class="order-2 md:order-1 ">
  <div class="lg:flex">
    <h1 class="text-4xl text-center md:text-justify font-Helvetica font-bold mt-3 text-white">Audascent</h1>
  </div>

  <div class="lg:flex text-center md:text-justify mt-5 font-bold text-white  ">
    <p >Votre talent, notre arène, à l'apogée du jeu !</p>
  </div>

      <div class="order-3 md:hidden mt-20 mx-auto">
        <div class="flex justify-center">
          <img src="/public/img/img__GameController.webp" class="w-2/3 md:w-full" alt="illustration" />
        </div>
        </div>

  <div class="lg:flex mt-6 text-white text-center md:text-left mx-4 md:mx-0">
    <p>Ascentia est une plateforme dédiée aux amateurs d'esports, offrant un espace pour s'affronter, progresser et exceller dans l'univers compétitif du jeu vidéo.</p>
  </div>

<div class="flex justify-center md:float-left">
      <button class="bg-orange-600 hover:bg-gray-400 text-white mt-10 py-4 px-14 rounded inline-flex items-center border-2 border-whiter lg:flex-row">
        <RouterLink to="../pages/tournois.vue">Rejoindre un tournoi</RouterLink><!--AJOUTER LE LIEN VERS LA PAGE TOURNOIS-->
      </button>
    </div>

  </div>

    </div>
 
</div>

      <!-- Jumbotron -->
    </section>
    <!-- Section: Design Block -->

    </template>