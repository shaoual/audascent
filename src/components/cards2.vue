<template>
  <div class=" mx-auto p-32 ml-44">
    
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div v-for="card in cards" :key="card.title" class="card">
        <img :src="card.image" alt="Card image" class="card-img">
        <div class="p-4">
          <h3 class="text-white text-xl mb-2">{{ card.title }}</h3>
          <p class="text-gray-400 mb-2">{{ card.dates }}</p>
          <p class="text-gray-400 mb-4">{{ card.participants }} Participants</p>
          <button class="bg-gray-700 text-white py-2 px-4 rounded" v-if="card.action === 'Jouer'">Jouer</button>
          <button class="bg-purple-600 text-white py-2 px-4 rounded" v-else>Rejoindre</button>
        </div>
      </div>
    </div>
    <div class="mt-6 flex justify-center">
      <button class="bg-gray-800 text-white py-2 px-4 rounded mr-2" v-for="page in totalPages" :key="page">{{ page }}</button>
      <button class="bg-purple-700 text-white py-2 px-4 rounded">suivant</button>
    </div>
  </div>
</template>

<script setup>
const cards = [
  {
    title: "VALORANT Tournois",
    image: "/img/Valorant.webp",
    dates: "Mars 01 - Mars 27, 2024",
    participants: 128,
    action: "Jouer"
  },
  {
    title: "FIFA 23 Tournois",
    image: "/img/fifa23.webp",
    dates: "Mars 06 - Mars 29, 2024",
    participants: 50,
    action: "Rejoindre"
  },
  {
    title: "Counter Strike 2 Tournois",
    image: "/img/couterStrike2_carrousel.webp",
    dates: "Mars 05 - Mars 29, 2024",
    participants: 64,
    action: "Rejoindre"
  },
  {
    title: "Rocket League Tournois",
    image: "/img/RocketLeague.webp",
    dates: "Mars 07 - Mars 29, 2024",
    participants: 64,
    action: "Rejoindre"
  },
  {
    title: "League Of Legends Tournois",
    image: "/img/LeaguesLegends__1.webp",
    dates: "Mars 07 - Mars 29, 2024",
    participants: 64,
    action: "Rejoindre"
  },
  {
    title: "Call Of Duty: Warzone Tournois",
    image: "/img/CallOfDuty__1.webp",
    dates: "Mars 07 - Mars 29, 2024",
    participants: 64,
    action: "Rejoindre"
  }
];

const totalPages = [1, 2, 3, 4];
</script>

<style scoped>
.container {
  background-color: #1f1f1f;
}

.card {
  background-color: #2a2a2a;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s;
}

.card:hover {
  transform: translateY(-5px);
}

.card-img {
  width: 100%;
  height: 200px;
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
