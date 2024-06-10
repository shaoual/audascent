<template>
  <div class="bg-black text-white h-screen flex flex-col items-center py-10 space-y-8">
    <MenuItem icon="./" label="News" />
    <MenuItem icon="trophy" label="Tournois" />
    <MenuItem icon="gamepad" label="Jeux" />
    <MenuItem icon="users" label="Hall of fame" />
    <MenuItem icon="cog" label="Comment jouer" />
  </div>
</template>

<script>
import MenuItem from './MenuItem.vue';

export default {
  name: 'menu',
  components: {
    MenuItem
  }
}
</script>

<style scoped>
/* Styles optionnels supplémentaires */
</style>
