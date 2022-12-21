<script setup lang="ts">
import { useDrawer } from '@/stores/drawer';
const drawer = useDrawer();
const route = useRoute();
// let isActive = $ref(false);

watch(route, newRoute => {
  // checkPath();
});

onMounted(() => isActive());

const isActive = () => {
  console.log(route.path);
  // const currentPath = `${props.rootPath}${props.childrenPath}`;
  // isActive = route.path === currentPath;
  // console.log(`currentPath: ${currentPath} isActive: ${isActive}`);
};
</script>

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
    <div v-for="menu in drawer.menus" :key="menu.label + menu.icon">
      <q-list class="border-b border-b-slate-50" v-if="!menu?.childrens">
        <LayoutsItem :rootPath="menu.path" :childrenPath="''" :level="0.0" :menu="menu" />
      </q-list>
      <q-list class="border-b border-b-gray-100" v-else>
        <q-expansion-item v-model="menu.active" header-style="min-height:42px" header-class="q-hoverable-remove">
          <template v-slot:header>
            <q-item-section
              :class="menu.active ? 'text-sky-600' : 'text-black'"
              class="transition hover:scale-105 ease-in duration-300">
              {{ menu.label }}
            </q-item-section>
          </template>
          <LayoutsItem
            :rootPath="menu.path"
            :childrenPath="children.path"
            v-for="children in menu.childrens"
            :level="0.1"
            :menu="children" />
        </q-expansion-item>
      </q-list>
    </div>
  </q-scroll-area>
</template>
