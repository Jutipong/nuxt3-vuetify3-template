<template>
  <q-img class="absolute-top" src="https://cdn.quasar.dev/img/material.png" style="height: 150px">
    <div class="w-full">
      <div class="flex flex-col items-center">
        <LazyLink></LazyLink>
        <img class="w-16 h-16 mb-2 rounded-full" src="https://cdn.quasar.dev/img/boy-avatar.png" alt="profile" />
        <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">Js.Dev</h5>
        <span class="text-sm text-gray-500 dark:text-gray-400">0000000000</span>
      </div>
    </div>
  </q-img>
  <q-scroll-area style="height: calc(100% - 150px); margin-top: 150px">
    <!-- home -->
    <q-list>
      <q-item :focused="false" clickable :manual-focus="true" class="hover:bg-sky-100 hover:border-r-4 hover:border-sky-500">
        <q-item-section avatar>
          <Icon name="mdi:home" />
        </q-item-section>
        <q-item-section> HOME </q-item-section>
      </q-item>
    </q-list>
    <!-- end home -->
    <q-list>
      <q-expansion-item header-class="q-hoverable-remvoe hover:bg-sky-100">
        <template v-slot:header>
          <q-item-section class="text-black"> Menu 1 </q-item-section>
        </template>
        <q-item clickable :inset-level="0.2" :manual-focus="true" class="hover:bg-sky-100 hover:border-r-4 hover:border-sky-500">
          <q-item-section avatar>
            <Icon name="mdi:home" />
          </q-item-section>
          <q-item-section> label 1.1</q-item-section>
        </q-item>
      </q-expansion-item>
    </q-list>

    <q-list>
      <q-expansion-item header-class="q-hoverable-remvoe hover:bg-sky-100">
        <template v-slot:header>
          <q-item-section class="text-black"> Menu 2 </q-item-section>
        </template>
        <!-- item 1-->
        <q-item clickable :inset-level="0.2" :manual-focus="true" class="hover:bg-sky-100 hover:border-r-4 hover:border-sky-500">
          <q-item-section avatar>
            <Icon name="mdi:home" />
          </q-item-section>
          <q-item-section>2.1</q-item-section>
        </q-item>
        <!-- item 2  -->
        <!-- <q-item clickable :inset-level="0.2" :manual-focus="true" class="hover:bg-sky-50 hover:text-sky-600 "> -->
        <q-item clickable :inset-level="0.2" :manual-focus="true" class="hover:bg-sky-100 hover:border-r-4 hover:border-sky-500">
          <q-item-section avatar>
            <Icon name="mdi:home" />
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

<style scoped>
.q-item__section--avatar {
  color: inherit;
  min-width: 0px;
}
.baseItemActive {
  /* content: ''; */
  /* position: absolute; */
  width: 3px;
  height: 100%;
  background: #1976d2 !important;
  /* top: 0; */
  /* right: 0; */
}

/* .q-hoverable {
  color: green !important;
} */

.xxxx {
  color: green !important;
}
</style>
