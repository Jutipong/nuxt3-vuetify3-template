<template>
  <q-item
    style="min-height: 42px"
    clickable
    :inset-level="level"
    class="m-2 rounded-r-sm"
    :class="menu.active ? 'bg-sky-100 border-l-4 border-sky-600' : ''"
    :to="rootPath + childrenPath"
    @click="drawer.onSelect(rootPath, childrenPath)">
    <q-item-section v-if="menu.icon" avatar style="min-width: 0px">
      <Icon :name="menu.icon!" />
    </q-item-section>
    <q-item-section class="transition hover:scale-105 ease-in duration-300">{{ menu.label }}</q-item-section>
  </q-item>
</template>

<script setup lang="ts">
import { IDrawer } from '@/types/layouts';
import { useDrawer } from '@/stores/drawer';
defineProps<{ rootPath: string; childrenPath?: string; level: number; menu: IDrawer }>();
const drawer = useDrawer();
</script>
