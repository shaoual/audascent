   <script setup lang="ts">
  
import tableau from '/Users/selmahaoual/Desktop/audascent/src/components/tableau.vue'
 

  
</script>




<template>

       
   <div class="relative h-96 bg-cover bg-center" style="background-image: url('/public/img/img1_classement.webp');">
    <div class="absolute inset-0 bg-black opacity-50"></div>
    <div class="relative z-10 flex items-center justify-center h-full">
      <h1 class="text-5xl font-bold text-white">CLASSEMENTS AUDASCENT</h1>
    </div>
  </div>

 <div class= "md:text-left md:col-span-2 ml-12 mt-12">
        <h3 class="text-2xl">Classement des Meilleurs Joueurs</h3> 
        <p class="md:text-sm lg:w-1/2"> Découvrez les maîtres du jeu qui dominent les classements d'Audascent. Ces champions ont su démontrer habileté, stratégie et persévérance pour atteindre le sommet. Consultez le tableau ci-dessous pour voir qui sont les étoiles de notre communauté e-sportive :
        </p>

  
      <tableau/>



<!--TABLEAU CLASSEMENTS-->

        <h3 class="text-2xl mt-12">Spotlight sur les Tournois</h3> 
        <img src="/public/img/img2_classement.webp" class="h-auto rounded-lg lg:w-1/2 mt-10 mx-9" alt=".." />

        
         
            <p class="mt-10 md:text-sm lg:w-1/2">
      Ne ratez pas l'opportunité de vous mesurer aux meilleurs et d'inscrire votre nom dans l'histoire d'Audascent. Voici les tournois actuellement en vedette, prêts à accueillir de nouveaux challengers :
    </p>
    <ul class="space-y-6">
      <li>
        <h2 class="text-2xl font-bold mb-2">Audascent Global Masters :</h2>
        <p class="lg:w-1/2">Le sommet de la compétition mondiale. Quelques places sont encore disponibles pour les audacieux prêts à affronter l'élite.</p>
      </li>
      <li>
        <h2 class="text-2xl font-bold mb-2">League of Legends Audascent Cup :</h2>
        <p class="lg:w-1/2">Affûtez vos compétences et rejoignez la bataille pour la suprématie dans l'arène de LoL. Inscriptions ouvertes pour les équipes et les joueurs solo.</p>
      </li>
      <li>
        <h2 class="text-2xl font-bold mb-2">Rocket League Audascent Championship :</h2>
        <p class="lg:w-1/2">Faites rugir vos moteurs et lancez-vous dans une compétition effrénée. Places limitées, ne manquez pas votre chance de participer.</p>
      </li>
    </ul>


      <h3 class="text-2xl mt-24 ">Classement des Meilleurs Joueurs</h3> 
        <p class="md:text-sm  mx-0."> Découvrez les maîtres du jeu qui dominent les classements d'Audascent. Ces champions ont su démontrer habileté, stratégie et persévérance pour atteindre le sommet. Consultez le tableau ci-dessous pour voir qui sont les étoiles de notre communauté e-sportive :
        </p>
  </div>

    
       
  
  </template>