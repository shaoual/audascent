<script setup lang="ts">
import carrousel from '@/components/carrousel.vue'
import Menu from '@/components/menu.vue'
</script>

<template>

      <div class="relative h-96 bg-cover bg-center" style="background-image: url('/public/img/img__news.webp');">
    <div class="absolute inset-0 bg-black opacity-50"></div>
    <div class="relative z-10 flex items-center justify-center h-full">
      <h1 class="text-5xl font-bold text-white">Actualités E-sport </h1>
    </div>
  </div>

  
  <div class="container mx-auto p-6">
    <!-- Section Événements Immanquables -->
    <h2 class="text-white text-3xl font-bold mb-6 ml-36 ">ÉVÉNEMENTS IMMANQUABLES</h2>
    <p class="text-gray-300 mb-8 md:text-m lg:w-1/2 ml-36">
      Audascent vous invite à explorer un univers où passion, compétition et innovation se rencontrent.
      Découvrez sans plus attendre les derniers échos de la scène e-sportive, des insights exclusifs et
      des histoires inspirantes qui façonnent notre communauté vibrante.
    </p>
    <img src="/public/img/img__news1.webp" alt="Événements Immanquables" class="rounded-lg mb-10 w- h-96 object-cover ml-36">

    <!-- Section À la Une -->
    <h3 class="text-white text-2xl font-bold mb-4 ml-36">À la Une</h3>
    <ul class="text-gray-300 mb-10">
      <li class="mb-4 lg:w-1/2 ml-36">
        <strong>• Révolution à Audascent E-sport :</strong> Découvrez comment l'intelligence artificielle transforme
        l'entraînement et la stratégie dans les jeux compétitifs, offrant des perspectives inédites aux
        joueurs et aux équipes.
      </li>
      <li class="mb-4 lg:w-1/2 ml-36">
        <strong>• Le Boom des e-sports Mobiles :</strong> Les e-sports ne se jouent plus seulement sur PC et console.
        Explorez la manière fulgurante dont les compétitions sur mobile, un phénomène mondial qui ouvre l'e-sport à un public encore plus large.
      </li>
    </ul>

    <!-- Section Événements et Tournois -->
    <h3 class="text-white text-2xl font-bold ml-36 mb-4">Événements et Tournois</h3>
    <p class="text-gray-300 mb-10 ml-36 lg:w-1/2">
      <strong>• Calendrier des Compétitions E-sport :</strong> Marquez vos agendas avec les dates des prochains
      grands tournois. Ne manquez aucune occasion de briller.
    </p>

    <!-- Section Spotlight sur les Prodiges de l'E-sport -->
    <h3 class="text-white text-2xl font-bold mb-4 ml-36">Spotlight sur les Prodiges de l'E-sport</h3>
    <p class="text-gray-300 mb-10 lg:w-1/2 ml-36">
      <strong>• Rencontre avec les Légendes :</strong> Découvrez les parcours inspirants des idoles de l'e-sport à
      travers des interviews exclusives.
    </p>

    <!-- Section Participez et Exprimez-vous -->
    <h3 class="text-white text-2xl font-bold mb-4 ml-36">Participez et Exprimez-vous</h3>
    <p class="text-gray-300 mb-10 lg:w-1/2 ml-36">
      <strong>• Forums et Discussions :</strong> Rejoignez la conversation sur les dernières tendances e-sport et
      partagez vos propres expériences et analyses.
    </p>
    <img src="/public/img/img__news2.webp" alt="Participez et Exprimez-vous" class="rounded-lg mb-10 w- h-96 object-cover ml-36">

   

    
  </div>

  <carrousel/>

<Menu />


</template>





