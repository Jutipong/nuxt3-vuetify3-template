<template>
  <q-img class="absolute-top" src="https://cdn.quasar.dev/img/material.png" style="height: 150px">
    <div class="w-full">
      <div class="flex flex-col items-center">
        <img class="w-16 h-16 mb-2 rounded-full" src="https://cdn.quasar.dev/img/boy-avatar.png" alt="profile" />
        <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">Js.Dev</h5>
        <span class="text-sm text-gray-500 dark:text-gray-400">0000000000</span>
      </div>
    </div>
  </q-img>
  <q-scroll-area style="height: calc(100% - 150px); margin-top: 150px">
    <!-- home -->
    <q-list>
      <q-item
        clickable
        :inset-level="0.0"
        class="rounded-l-full ml-2 my-1"
        :class="!root ? 'bg-sky-100 border-r-4 border-sky-600' : ''"
      >
        <q-item-section avatar style="min-width: 0px">
          <Icon name="mdi:home" />
        </q-item-section>
        <q-item-section class="transition hover:scale-105 ease-in duration-300">Home</q-item-section>
      </q-item>
    </q-list>
    <!-- end home -->
    <!-- <q-list>
      <q-expansion-item header-class="q-hoverable-remvoe">
        <template v-slot:header>
          <q-item-section
            :class="!root ? 'text-sky-600' : 'text-black'"
            class="transition hover:scale-105 ease-in duration-300"
          >
            Menu 1
          </q-item-section>
        </template>
        <q-item
          clickable
          :inset-level="0.0"
          :manual-focus="true"
          class="rounded-l-full ml-2 my-1"
          :class="!root ? 'bg-sky-100 border-r-4 border-sky-600' : ''"
        >
          <q-item-section avatar>
            <Icon name="mdi:home" />
          </q-item-section>
          <q-item-section class="transition hover:scale-105 ease-in duration-300"> label 1.1</q-item-section>
        </q-item>
      </q-expansion-item>
    </q-list> -->

    <q-list>
      <q-expansion-item header-class="q-hoverable-remvoe" v-model="root">
        <template v-slot:header>
          <q-item-section
            :class="root ? 'text-sky-600' : 'text-black'"
            class="transition hover:scale-105 ease-in duration-300"
          >
            Menu 2
          </q-item-section>
        </template>
        <!-- item 1-->
        <q-item
          clickable
          :inset-level="0.0"
          class="rounded-l-full ml-2 my-1"
          :class="!root ? 'bg-sky-100 border-r-4 border-sky-600' : ''"
        >
          <q-item-section avatar style="min-width: 0px">
            <Icon name="mdi:home" />
          </q-item-section>
          <q-item-section class="transition hover:scale-105 ease-in duration-300">2.1</q-item-section>
        </q-item>
        <!-- item 2  -->
        <q-item
          clickable
          v-bind:active="root"
          :inset-level="0.0"
          class="rounded-l-full ml-2 my-1"
          :class="root ? 'bg-sky-100 border-r-4 border-sky-600' : ''"
        >
          <q-item-section avatar style="min-width: 0px">
            <Icon name="mdi:home" />
          </q-item-section>
          <q-item-section class="transition hover:scale-105 ease-in duration-300">2.2</q-item-section>
        </q-item>
      </q-expansion-item>
    </q-list>
  </q-scroll-area>
</template>

<script setup lang="ts">
import { useDrawer } from '@/stores/drawer';
const drawer = useDrawer();

let root = $ref(true);
let q2 = $ref(false);
</script>
