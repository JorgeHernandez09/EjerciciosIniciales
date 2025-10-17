// stores/useCounterStore.ts
export const useCounterStore = defineStore('counter', () => {
  const count = ref(0);
  const countLimitUp = ref(10);
  const countLimitDown = ref(0);

  const Increment = () => {
    if (count.value < countLimitUp.value) count.value++;
  };

  const Decrement = () => {
    if (count.value > countLimitDown.value) count.value--;
  };

  const Reset = () => {
    count.value = 0;
  };

  const multipliedCount = computed(() => count.value * 2);

  return {
    count,
    countLimitUp,
    countLimitDown,
    Increment,
    Decrement,
    Reset,
    multipliedCount
  };
});
