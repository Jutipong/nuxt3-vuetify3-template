<script setup lang="ts">
import { IDrawer } from '@/types/layouts';
const props = defineProps<{ rootPath: string; childrenPath?: string; level: number; menu: IDrawer }>();
const route = useRoute();

const isActive = () => {
  const currentPath = `${props.rootPath}${props.childrenPath}`;
  return route.path === currentPath;
};
</script>

<template>
  <q-item
    style="min-height: 42px"
    clickable
    :inset-level="level"
    class="m-2 rounded-r-sm"
    :class="isActive() ? 'bg-sky-100 border-l-4 border-sky-600' : ''"
    :to="rootPath + childrenPath">
    <q-item-section v-if="menu.icon" avatar style="min-width: 0px">
      <Icon :name="menu.icon!" />
    </q-item-section>
    <q-item-section class="transition hover:scale-105 ease-in duration-300">{{ menu.label }}</q-item-section>
  </q-item>
</template>
