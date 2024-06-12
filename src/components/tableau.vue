<template>
  <div class="ranking-table">
    <h2>Top Joueurs</h2>
    <table>
      <thead>
        <tr>
          <th>Rang</th>
          <th>Joueurs</th>
          <th>PAYS</th>
          <th>SCORE</th>
          <th>Progression</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(player, index) in players" :key="player.id">
          <td>#{{ index + 1 }}</td>
          <td>
            <img :src="player.Image" alt="Avatar" class="avatar" />
            {{ player.Nom }}
          </td>
          <td>{{ player.Pays }}</td>
          <td>{{ player.Score }}</td>
          <td>{{ player.Progression }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import PocketBase from 'pocketbase';

const pb = new PocketBase('http://127.0.0.1:8090'); // URL de votre serveur PocketBase
const players = ref([]); // Liste des joueurs

// Fonction pour récupérer les joueurs et les trier par score décroissant
const fetchPlayers = async () => {
  try {
    const records = await pb.collection('players').getFullList(200, {
      sort: '-Score', // Trie par score décroissant
    });
    players.value = records.map(player => ({
      id: player.id,
      Nom: player.Nom,
      Pays: player.Pays,
      Score: player.Score,
      Progression: player.Progression,
      Image: player.Image ? pb.files.getUrl(player, player.Image) : '', // Assure que l'URL de l'image est correcte
    }));
  } catch (e) {
    console.error(e);
  }
};

// Appel de la fonction pour récupérer les joueurs au montage du composant
onMounted(fetchPlayers);
</script>

<style scoped>
.ranking-table {
  max-width: 800px;
  margin: auto;
}
table {
  width: 100%;
  border-collapse: collapse;
}
th, td {
  padding: 10px;
  border-bottom: 1px solid #ddd;
}
.avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
}
.flag {
  width: 24px;
  height: 24px;
}
</style>
