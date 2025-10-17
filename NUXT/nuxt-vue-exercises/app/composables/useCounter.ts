export function useCounter(num = 0, upLimit = 10, downLimit = 0) {  // Parámetros por defecto
  const count = ref(num);
  const countLimitUp = ref(upLimit);
  const countLimitDown = ref(downLimit);
  const Increment = () => count.value++;
  const Decrement = () => count.value--;
  const multipliedCount = computed(() => count.value * 2);
  const Reset = () => count.value = 0;

  return { count, countLimitUp, countLimitDown, Increment, Decrement, multipliedCount, Reset };
}
