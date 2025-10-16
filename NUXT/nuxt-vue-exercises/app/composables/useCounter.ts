export function useCounter(num = 0, upLimit = 10, downLimit = 0) {  // Parámetros por defecto
  const count = ref(num);
  const countLimitUp = ref(upLimit);
  const countLimitDown = ref(downLimit);
  const Increment = () => count.value++;
  const Decrement = () => count.value--;

  return { count, countLimitUp, countLimitDown, Increment, Decrement };
}
