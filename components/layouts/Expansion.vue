<script setup lang="ts">
import { IDrawer } from '@/types/layouts';
const { rootPath, menu } = defineProps<{ rootPath: string; menu: IDrawer }>();
const route = useRoute();
let isActive = $ref(false);
watchEffect(() => (isActive = route.path.startsWith(rootPath)));
</script>

<template>
  <q-expansion-item header-style="min-height:42px" header-class="q-hoverable-remove">
    <template v-slot:header>
      <q-item-section :class="isActive ? 'text-sky-600 font-bold' : 'text-black'" class="transition hover:scale-105 ease-in duration-300">
        {{ menu.label }}
      </q-item-section>
    </template>
    <LayoutsItem v-for="children in menu.childrens" :rootPath="rootPath" :childrenPath="children.path" :level="0.1" :menu="children" />
  </q-expansion-item>
</template>
