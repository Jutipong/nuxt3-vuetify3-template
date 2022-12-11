<template>
  <div class="flex">
    <div class="m-auto mt-52">
      <h1 class="text-6xl text-purple-500">Welcome to Nuxt3</h1>
      <h2>Counter: {{ counter.counter }}</h2>
      <button class="bg-blue-500 p-4 m-2" @click="counter.increment">+</button>
      <button class="bg-red-500 p-4 m-2" @click="counter.decrement">-</button>
      <!-- <Quasar /> -->
      <h2>Sum: {{ sum }}</h2>
      <h2>version: {{ $q.version }}</h2>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useCounter } from '@/stores/counter';
import { useQuasar } from 'quasar';

const $q = useQuasar();

const counter = useCounter();

let sum = $ref(10);
sum = +20;
</script>
