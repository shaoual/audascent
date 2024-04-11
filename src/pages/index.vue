<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import { ref } from 'vue';

//
const sectionOpen = ref(1)

</script>

<template>
  <h1 class="text-2xl">Bonjour monde !</h1>
  <section>
    <button @click="sectionOpen = 1" class="text-xl">bouton 1</button>
    <p v-show="sectionOpen === 1">
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum praesentium enim iste, voluptatibus minima, quas
      corporis tempore consectetur, at illum ullam fugiat libero. Ab illum eum optio consequuntur. Saepe, quae.</p>
  </section>
  <section>
    <button @click="sectionOpen = 2" class="text-xl">bouton 2</button>
    <p v-show="sectionOpen === 2">
      Nam excepturi cumque praesentium quae dolorum id eum neque enim sint. Eaque corporis animi assumenda ea debitis!
      Quo, corrupti excepturi. Blanditiis iste minus sit! Quisquam ab animi omnis. Molestiae, quas.</p>
  </section>
  <section>
    <button @click="sectionOpen = 3" class="text-xl">bouton 3</button>
    <p v-show="sectionOpen === 3">
    Assumenda expedita dolore pariatur modi labore natus enim alias repellat quos, ab deleniti porro autem ipsum
      maiores blanditiis neque saepe explicabo aliquam corporis officiis, rem laborum. At delectus ad earum.</p>
  </section>
</template>
