<script lang="ts" setup>


const counter = useCounterStore();
const { count, countLimitUp, countLimitDown, multipliedCount } = storeToRefs(counter);
const { Increment, Decrement, Reset } = counter;

const textStyles = computed(() => ({
  backgroundColor: count.value >= countLimitUp.value ? "green" : "white"
}));
</script>

<template>
  <div class="card" :style="textStyles">
    <button class="button" v-if="count > countLimitDown" @click="Decrement">
      Decrementar
    </button>
    
    <button class="button" v-if="count < countLimitUp" @click="Increment">
      Incrementar
    </button>

    <button class="button" v-if="count > countLimitDown" @click="Reset">
      Resetear número
    </button>

    <p>El número es: {{ count }}</p>
    <p>El número duplicado es: {{ multipliedCount }}</p>

    <p v-if="count == countLimitDown">Estás en el valor mínimo</p>
    <p v-if="count == countLimitUp">Estás en el valor máximo</p>
    <p v-if="count > countLimitDown && count < countLimitUp">Estás en los parámetros adecuados</p>
  </div>
</template>

<style scoped>
.card {
  padding: 1rem;
  border-radius: 0.5rem;
}
</style>
