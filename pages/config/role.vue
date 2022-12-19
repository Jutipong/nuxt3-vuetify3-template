<template>
  <h2>Config Role</h2>
  <pre>
        {{ drawer.menus }}
      </pre
  >
</template>
<script setup lang="ts">
import { useDrawer } from '@/stores/drawer';
const drawer = useDrawer();
</script>
