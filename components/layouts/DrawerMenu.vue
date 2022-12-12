<template>
  <q-img class="absolute-top" src="https://cdn.quasar.dev/img/material.png" style="height: 150px">
    <div class="absolute-bottom bg-transparent">
      <q-avatar size="56px" class="q-mb-sm">
        <img src="https://cdn.quasar.dev/img/boy-avatar.png" />
      </q-avatar>
      <div class="text-weight-bold">Razvan Stoenescu</div>
      <div>@rstoenescu</div>
    </div>
  </q-img>
  <q-scroll-area style="height: calc(100% - 150px); margin-top: 150px">
    <!-- home -->
    <q-list>
      <q-item :focused="false" clickable class="hover:text-sky-600 hover:font-bold hover:bg-opacity-100">
        <q-item-section avatar>
          <q-icon name="outlined" />
        </q-item-section>
        <q-item-section> label </q-item-section>
      </q-item>
    </q-list>
    <!-- end home -->
    <q-list>
      <q-expansion-item expand-separator label="Menu 1">
        <q-item clickable :inset-level="0.2" class="hover:text-sky-600 hover:font-bold">
          <q-item-section avatar>
            <q-icon name="home" />
          </q-item-section>
          <q-item-section> label 1.1</q-item-section>
        </q-item>
      </q-expansion-item>
    </q-list>

    <q-list>
      <q-expansion-item expand-separator label="Menu 2" v-model="root">
        <!-- item -->
        <q-item clickable :inset-level="0.2" class="hover:text-sky-600 hover:font-bold">
          <q-item-section avatar>
            <Icon name="mdi:home" />
          </q-item-section>
          <q-item-section>2.1</q-item-section>
        </q-item>
        <!-- item 2  -->
        <q-item clickable :inset-level="0.2" class="hover:text-sky-600 hover:font-bold">
          <q-item-section avatar>
            <q-icon name="home" />
          </q-item-section>
          <q-item-section>2.2</q-item-section>
        </q-item>
      </q-expansion-item>
    </q-list>
  </q-scroll-area>
</template>

<script setup lang="ts">
let root = $ref(true);
let q2 = $ref(false);
</script>
