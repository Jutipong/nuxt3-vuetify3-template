import { defineStore } from 'pinia';
import { IDrawer } from '@/types/layouts';

export const useDrawer = defineStore('drawer', () => {
  let drawers = $ref<Array<IDrawer>>([
    {
      label: 'Home',
      route: '/home',
      active: true,
    },
    {
      label: 'Master',
      route: '/master',
      active: false,
      children: [
        { label: 'User', route: '/master/user', active: false },
        { label: 'Role', route: '/master/role', active: false },
      ],
    },
  ]);

  return { drawers };
});
