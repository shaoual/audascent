<template>
  <div class="mx-auto  p-32 ml-44">
    <!-- Section Bienvenue -->
    
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div v-for="champion in champions" :key="champion.name" class="champion-card">
        <img :src="champion.image" alt="Champion image" class="champion-img">
        <div class="p-4 text-white">
          <p><strong>Nom du Joueur :</strong> {{ champion.name }}</p>
          <p><strong>Jeux de prédilection :</strong> {{ champion.games }}</p>
          <p><strong>Palmarès :</strong> {{ champion.achievements }}</p>
        </div>
      </div>
    </div>

    <!-- Section Pagination -->
    <div class="mt-6 flex justify-center">
      <button class="bg-gray-800 text-white py-2 px-4 rounded mr-2" v-for="page in totalPages" :key="page">{{ page }}</button>
      <button class="bg-black text-white py-2 px-4 rounded">suivant</button>
    </div>
  </div>
</template>

<script setup>
const champions = [
  {
    name: "LegendMaster",
    image: "/public/img/joueur__1.webp",
    games: "League of Legends",
    achievements: "Vainqueur du Championnat Mondial LoL 2023 Ascentia League"
  },
  {
    name: "FightGenius",
    image: "/public/img/joueur__2.webp",
    games: "Street Fighter V, Tekken 7",
    achievements: "Champion Ascentia SFV 2022, Finaliste Tekken 7 International Cup"
  },
  {
    name: "ChessMaster",
    image: "/img/joueur__3.webp",
    games: "StarCraft II, Age of Empires II",
    achievements: "Quadruple vainqueur StarCraft II Ascentia Open, Champion AOE II Online Marathon"
  },
  {
    name: "ChessMaster",
    image: "/public/img/joueur__4.webp",
    games: "StarCraft II, Age of Empires II",
    achievements: "Quadruple vainqueur StarCraft II Ascentia Open, Champion AOE II Online Marathon"
  }
];

const totalPages = [1, 2, 3, 4];
</script>

<style scoped>
.container {
  background-color: #0000;
}

.champion-card {
  background-color: #0000;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s;
}

.champion-card:hover {
  transform: translateY(-5px);
}

.champion-img {
  width: 100%;
  height: 500px;
  object-fit: cover;
}

.button-container {
  display: flex;
  justify-content: center;
}

button {
  margin: 0 2px;
}
</style>
