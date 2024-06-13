<script setup lang="ts">
import { ref } from 'vue';

interface ImageItem {
  name: string;
  image: string;
}

const imagesList = ref<ImageItem[]>([
  { name: "Souris Gaming", image: "/public/img/img_souris.webp" },
  { name: "Écran PC", image: "/public/img/img__pc.webp" },
  { name: "Microphone USB", image: "/public/img/img__micro.webp" },
  { name: "Clavier Gaming", image: "/public/img/img__casque.webp" },
  { name: "Casque Audio", image: "/public/img/img__claviers.webp" }
]);

const currentIndex = ref(0);

function slide(direction: string) {
  if (direction === 'prev') {
    currentIndex.value = currentIndex.value === 0 ? imagesList.value.length - 3 : currentIndex.value - 1;
  } else {
    currentIndex.value = (currentIndex.value + 1) % imagesList.value.length;
  }
}
</script>

<template>
  <div class="container mx-auto py-12">
    <h3 class="text-white text-3xl font-bold mb-6 text-center">BOOSTEZ VOTRE EXPÉRIENCE GAMING</h3>
    <div class="relative w-full overflow-hidden">
      <div class="flex transition-transform duration-500 ease-out gap-4" :style="{ transform: `translateX(-${currentIndex * (100 / 3)}%)` }">
        <div v-for="(item, index) in imagesList" :key="index" class="w-1/3 flex-shrink-0 px-2">
          <img :src="item.image" :alt="item.name" class="mx-auto my-4 rounded-md w-full h-64 object-cover" />
          <p class="text-white mt-2 text-center">{{ item.name }}</p>
        </div>
      </div>
      
      <button @click="slide('prev')" class="absolute top-1/2 left-0 transform -translate-y-1/2 px-4 py-2 bg-purple-600 text-white rounded-full focus:outline-none">
        &lt;
      </button>
      
      <button @click="slide('next')" class="absolute top-1/2 right-0 transform -translate-y-1/2 px-4 py-2 bg-purple-600 text-white rounded-full focus:outline-none">
        &gt;
      </button>
    </div>
  </div>
</template>

<style scoped>
.container {
  background-color: #000;
}
</style>
