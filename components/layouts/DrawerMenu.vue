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
    <q-list>
      <q-expansion-item expand-separator label="Account settings">
        <q-item clickable v-ripple :inset-level="0.2">
          <q-item-section avatar>
            <q-icon name="home" />
          </q-item-section>
          <q-item-section> label </q-item-section>
        </q-item>
      </q-expansion-item>
    </q-list>

    <q-list>
      <q-expansion-item expand-separator label="Account settings" v-model="root">
        <q-item clickable v-ripple :inset-level="0.2">
          <q-item-section avatar>
            <q-icon name="home" />
          </q-item-section>
          <q-item-section> label </q-item-section>
        </q-item>
      </q-expansion-item>
    </q-list>
  </q-scroll-area>
</template>

<script setup lang="ts">
let root = $ref(true);
let q2 = $ref(false);
</script>
