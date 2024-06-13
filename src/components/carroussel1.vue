<script setup lang="ts">
import { ref } from 'vue';

interface GameItem {
  name: string;
  image: string;
}

const gamesList = ref<GameItem[]>([
  { name: "Rocket League", image: "/img/RocketLeague.webp" },
  { name: "Counter Strike 2", image: "/img/couterStrike2_carrousel.webp" },
  { name: "Rainbow Six Siege", image: "/img/Rainbowsix__1.webp" },
  { name: "FIFA 23", image: "/img/Fifa23__1.webp" },
  { name: "VALORANT", image: "/img/valorant__1.webp" }
]);
</script>

<template>
  <div class="container mx-auto py-12">
    <div class="flex overflow-x-auto space-x-4 scrollbar-hide">
      <div v-for="(game, index) in gamesList" :key="index" class="min-w-[20%] flex-shrink-0 px-2">
        <div class="bg-gray-800 rounded-lg overflow-hidden">
          <img :src="game.image" :alt="game.name" class="w-full h-64 object-cover">
          <p class="text-white text-center py-2">{{ game.name }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  background-color: #000;
}

.scrollbar-hide::-webkit-scrollbar {
  display: none;
}
.scrollbar-hide {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
</style>
