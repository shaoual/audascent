<script setup lang-="ts">
import Menu from '@/components/menu.vue'
import cards2 from '@/components/cards2.vue'
</script>

<template>
  
       

    <!--chager l'image-->

    <div class="relative h-96 bg-cover bg-center" style="background-image: url('/public/img/Img1__tournois.webp');">
    <div class="absolute inset-0 bg-black opacity-50"></div>
    <div class="relative z-10 flex items-center justify-center h-full">
      <h1 class="text-5xl font-bold text-white">L’ARÈNE DES COMPETITEURS
      </h1>
    </div>
  </div>
  


 <h2 class="font-bold mb-3 text-center"> Tournois en Vedette</h2>
 <div class=" mx-auto p-32 ml-44">
    <h2 class="text-white text-2xl mb-4">Tournoi du Mois : Bataille Royale Audascent</h2>
    <div class="flex mb-4">
      <button class="bg-gray-800 text-white py-2 px-4 rounded">Ce mois</button>
    </div>
</div>


<cards2/>

 <!-- Section Calendrier Complet des Tournois -->
    <div class="mx-auto p-32 ml-44 ">
      <h2 class="text-white text-2xl mb-4">Calendrier Complet des Tournois</h2>
      <p class="text-gray-400 mb-4">
        Consultez notre <a href="#" class="text-orange-500">calendrier complet</a> pour découvrir tous les tournois à venir. Vous pouvez filtrer par jeu, date et type de tournoi pour trouver celui qui correspond à vos compétences et à vos intérêts.
      </p>
 

    <!-- Section S'inscrire à un Tournoi -->
   
      <h2 class="text-white text-2xl mb-4">S'inscrire à un Tournoi</h2>
      <div class="text-gray-400 mb-4">
        <h3 class="text-white text-lg mb-2">Sélectionnez un Tournoi</h3>
        <p class="mb-2">Parcourez notre liste de tournois et choisissez celui qui vous intéresse.</p>

        <h3 class="text-white text-lg mb-2">Lisez les Règles</h3>
        <p class="mb-2">Chaque tournoi a ses propres règles. Assurez-vous de les comprendre avant de vous inscrire.</p>

        <h3 class="text-white text-lg mb-2">Inscrivez-vous</h3>
        <p>Utilisez votre compte Ascentia pour vous inscrire au tournoi.</p>
      </div>
   

    <!-- Section FAQ des Tournois -->
  
      <h2 class="text-white text-2xl mb-4">FAQ des Tournois</h2>
      <p class="text-gray-400 mb-4">
        Vous avez des questions ? Consultez notre <a href="#" class="text-orange-500">FAQ des tournois</a> pour trouver des réponses aux questions fréquemment posées sur les inscriptions, les formats de jeu, les prix, et plus encore.
      </p>
      <p class="text-gray-400">Nous sommes impatients de vous voir en compétition dans nos tournois. Que le meilleur gagne !</p>
    </div>
  
 <Menu />
    
  
 


</template>