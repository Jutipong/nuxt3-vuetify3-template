<template>
  <div class="flex">
    <div class="m-auto mt-52">
      <h1 class="text-6xl text-blue-500">Welcome to Nuxt3</h1>
      <h2>Counter: {{ counter.counter }}</h2>
      <button class="bg-blue-500 p-4 m-2" @click="counter.increment">+</button>
      <button class="bg-red-500 p-4 m-2" @click="counter.decrement">-</button>
      <Quasar />
    </div>
  </div>
</template>

<script setup>
import { useCounter } from '@/stores/counter';
const counter = useCounter();
</script>
