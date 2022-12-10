import { defineStore } from 'pinia';

export const useCounter = defineStore('counter', {
  state: () => ({
    total: 0,
  }),
  getters: {
    counter: (state) => state.total,
  },
  actions: {
    increment() {
      this.total++;
    },
    decrement() {
      this.total--;
    },
  },
});

// if (import.meta.hot) {
//   console.log('xx');
//   import.meta.hot.accept(acceptHMRUpdate(useCounter, import.meta.hot));
// }
