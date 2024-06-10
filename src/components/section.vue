<template>
  <div class="flex justify-end">
    <div class="bg-black text-white p-6 w-full max-w-xs">
      <h2 class="text-xl font-bold mb-4">DERNIÈRES NEWS</h2>
      <div class="space-y-6">
        <div v-for="news in newsList" :key="news.id" class="flex items-start space-x-4">
          <img :src="news.image" alt="news image" class="w-16 h-16 object-cover rounded-md">
          <div>
            <p class="text-sm text-gray-400">{{ news.date }}</p>
            <p>{{ news.title }}</p>
          </div>
        </div>
      </div>
      <button class="mt-4 text-center w-full py-2 border-t border-gray-700">LIRE PLUS</button>
      <img src="/public/img/clavier__1.webp" alt="gaming setup" class="my-6 w-full rounded-md">
      <h2 class="text-xl font-bold mb-4">TOP JOUEUR</h2>
      <div class="space-y-4">
        <div v-for="player in playersList" :key="player.id" class="flex items-center space-x-4">
          <img :src="player.image" alt="player image" class="w-12 h-12 object-cover rounded-full">
          <p>{{ player.name }}</p>
        </div>
      </div>
      <button class="mt-4 text-center w-full py-2 border-t border-gray-700">DECOUVRIR PLUS</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Sidebar',
  data() {
    return {
      newsList: [
        { id: 1, date: '6 Mars, 2024', title: 'Stratégies Gagnantes sur Rocket League : La Route vers la Victoire', image: 'path/to/image1.jpg' },
        { id: 2, date: '6 Mars, 2024', title: 'FIFA 23 : Techniques Avancées pour un Jeu Impeccable', image: 'path/to/image2.jpg' },
        { id: 3, date: '6 Mars, 2024', title: 'Valorant : Comment Élever votre Niveau de Jeu', image: 'path/to/image3.jpg' },
      ],
      playersList: [
        { id: 1, name: 'LegendMaster', image: 'path/to/player1.jpg' },
        { id: 2, name: 'HKHWKUE', image: 'path/to/player2.jpg' },
        { id: 3, name: 'HKHWKUE', image: 'path/to/player3.jpg' },
        { id: 4, name: 'HKHWKUE', image: 'path/to/player4.jpg' },
        { id: 5, name: 'HKHWKUE', image: 'path/to/player5.jpg' },
      ]
    }
  }
}
</script>

<style scoped>
/* Styles optionnels supplémentaires */
</style>
