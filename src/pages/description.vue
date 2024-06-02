<script setup lang="ts">
import { ref } from 'vue'
import { RouterView } from 'vue-router'
import { RouterLink } from 'vue-router'



</script>


<template> 
    <main class="main-content">
        <h2 class="font-bold mb-3"> League of legends</h2>
       
    <a href="https://lexica.art/">
      <button class="flex bg-violet-900 text-white rounded-lg py-2 px-5 items-center justify-center">
        <Iconview />
        Voir le site
      </button>
    </a>

    
      <img src="/public/img/img_leagues_desc.webp" class="h-auto rounded-lg lg:w-1/2 mt-10" alt="Lexica IA" />


      <h2 class="font-bold mb-3">Description</h2>

      <div class="lg:w-1/2">
      <p> League of Legends" (LoL), c'est l'aventure ultime dans l'univers des MOBAs (Arènes de bataille en ligne multijoueur), où stratégie et action s'entremêlent pour offrir une expérience de jeu incomparable. En débutant une partie, vous vous plongez dans un monde fantastique où deux équipes de cinq joueurs s'affrontent pour la victoire, avec pour mission principale de détruire le Nexus adverse, tout en protégeant le vôtre.</p>
     <p class="mt-4">En tant que joueur, vous choisissez un "champion" parmi plus d'une centaine disponibles, chacun avec ses propres capacités spéciales, forces et faiblesses. Que vous aimiez mener l'attaque en première ligne, soutenir vos alliés avec des soins ou contrôler le champ de bataille à distance, il y a un champion pour chaque style de jeu.</p>
     <p class="mt-4">LoL n'est pas seulement un jeu de combat ; c'est une expérience stratégique profonde. La victoire demande de la réflexion rapide, une bonne coordination d'équipe, et la capacité à s'adapter à l'évolution de la partie. Chaque match est une nouvelle histoire, pleine de retournements inattendus et de moments épiques.</p>
    </div>

     <h2 class="font-bold mb-3">Utile pour...</h2>
    
      <ul>
        <li>Amateurs de stratégie
        </li>
        <li>Passionnés de jeux en équipe</li>
        <li>Fans de compétitions e-sport</li>
      </ul>
  
      <h2 class="font-bold mb-3">Caractéristiques</h2>

      <img src="/public/img/img__2_description.webp" class="h-auto rounded-lg lg:w-1/2" alt="caractéristiques IA"/>

      <ul class="space-y-4 mt-10 mb-44">
        <li>• Gameplay Dynamique : Choix stratégique, tactiques en équipe, et actions rapides.</li>
        <li>• Diversité des Champions : Plus de 140 champions offrant des styles de jeu uniques.</li>
        <li>• Compétitions Mondiales : Des tournois locaux aux championnats mondiaux.</li>
        <li>• Mises à Jour Constantes : Nouveaux contenus, équilibrages et événements réguliers.</li>
        <li>• Communauté Engagée : Forums actifs, streams en direct et contenus communautaires riches.</li>
      </ul>
    

    </main>
<RouterView />
  
  </template>