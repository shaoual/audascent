<script setup>
import { RouterLink } from 'vue-router'
import IconMonde from '/src/components/icons/icon__monde.vue'
import IconCup from '/src/components/icons/icon__cup.vue'
import IconManette from '/src/components/icons/icon_manette.vue'
import IconReglage from '/src/components/icons/icon__reglage.vue'
</script>

<template>
  <div class="menu">
    <ul>
      <li>
        <RouterLink to="/news">
          <div class="icon-wrapper">
            <IconMonde class="icon h-2 w-2"/>
          </div>
          <span>News</span>
        </RouterLink>
      </li>
      <li>
        <RouterLink to="/tournois">
          <div class="icon-wrapper">
            <IconCup class="icon"/>
          </div>
          <span>Tournois</span>
        </RouterLink>
      </li>
      <li>
        <RouterLink to="/jeux">
          <div class="icon-wrapper">
            <IconManette class="icon"/>
          </div>
          <span>Jeux</span>
        </RouterLink>
      </li>
      <li>
        <RouterLink to="/hall-of-fame">
          <div class="icon-wrapper">
            <IconReglage class="icon"/>
          </div>
          <span>Hall of fame</span>
        </RouterLink>
      </li>
      <li>
        <RouterLink to="/comment-jouer">
          <div class="icon-wrapper">
            <IconManette class="icon"/>
          </div>
          <span>Comment jouer</span>
        </RouterLink>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.menu {
  position: fixed;
  left: 0;
  top: 60%;
  transform: translateY(-50%);
  width: 200px;
  background-color: #1f1f1f;
  padding: 20px;
  border-radius: 0 10px 10px 0;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
}

ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

li {
  margin-bottom: 20px;
}

a {
  text-decoration: none;
  color: white;
  display: flex;
  align-items: center;
}

.icon-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  border: 2px solid white;
  border-radius: 50%;
  margin-right: 10px;
  overflow: hidden;
}

.icon {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

a:hover {
  background-color: #2c2c2c;
  border-radius: 5px;
  padding: 5px;
}
</style>
