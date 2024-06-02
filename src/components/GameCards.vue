<script setup lang="ts">

const games = [
  {
    title: "League of Legends",
    matches: 50,
    description: "Rejoignez la bataille ! Entrez dans l'arène du jeu MOBA le plus populaire et grimpez les échelons. Votre légende commence maintenant.",
    image: "/public/img/LeaguesLegends__1.webp"
  },
  {
    title: "Valorant",
    matches: 30,
    description: "Précision et stratégie vous attendent. Découvrez l'adrénaline de Valorant et devenez inarrêtable. Intégrez l'équipe, la partie commence !",
    image: "/public/img/Valorant.web"
  },
  {
    title: "Call of Duty Warzone",
    matches: 41,
    description: "L'appel du devoir vous attend, plongez dans l'action intense de Warzone. Équipez-vous, combattez, survivez.",
    image: "/public/img/CallOfDuty.webp"
  },
  {
    title: "FIFA 23",
    matches: 60,
    description: "Plongez au cœur du match ! Rejoignez la compétition dans le jeu de football le plus immersif et hissez-vous au sommet. Votre aventure de gloire démarre ici.",
    image: "/public/img/Fifa23__1.webp"
  },
  {
    title: "Rocket League",
    matches: 20,
    description: "Lancez-vous dans l'arène ! Rejoignez la frénésie de Rocket League, allez vitesse et stratégie et hissez-vous vers la victoire. Le sport mécanique commence dès à présent.",
    image: "/public/img/RocketLeague.webp"
  },
  {
    title: "Rainbow Six Siege",
    matches: 43,
    description: "Tactique et tension à leur paroxysme. Intégrez l'élite dans Rainbow Six Siege. Votre mission commence maintenant.",
    image: "/public/img/Rainbowsix__1.webp"
  }
];
</script>

<template>
  <div class="p-8 min-h-screen">
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      <div v-for="game in games" :key="game.title" class="bg-gray-800 rounded-lg shadow-lg overflow-hidden">
        <img :src="game.image" alt="game.title" class="w-full h-48 object-cover">
        <div class="p-4">
          <h3 class="text-xl font-bold text-white">{{ game.title }}</h3>
          <p class="mt-2 text-white">{{ game.matches }} Matches En Cours...</p>
          <p class="mt-2 text-gray-400">{{ game.description }}</p>
          <button class="mt-4 bg-orange-600 hover:bg-orange-700 text-white py-2 px-4 rounded-lg">Rejoindre</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
</style>
