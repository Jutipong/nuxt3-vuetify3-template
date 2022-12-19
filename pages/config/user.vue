<template>
  <h2>Config User</h2>
  <pre>
          {{ drawer.menus }}
        </pre
  >
</template>
<script setup lang="ts">
import { useDrawer } from '@/stores/drawer';
const drawer = useDrawer();
</script>
