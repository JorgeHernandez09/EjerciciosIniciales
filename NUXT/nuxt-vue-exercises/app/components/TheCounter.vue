<script lang="ts" setup>
import { useCounter } from "~/composables/useCounter";

const { count, countLimitUp, countLimitDown, Increment, Decrement, multipliedCount } = useCounter(); // Lo del parentesis sera el valor que se le quiera dar a: (numero inicial, numero maximo, numero minimo)

const textStyles = computed(() => ({
  backgroundColor: count.value >= countLimitUp.value ? "green" : "white",
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

    <p>El numero es: {{ count }}</p>
    <p>El numero duplicado es: {{ multipliedCount }}</p>

    <p v-if= "count == countLimitDown">Estás en el valor mínimo</p>
    <p v-if= "count == countLimitUp">Estás en el valor máximo</p>
    <p v-if= "count > countLimitDown && count < countLimitUp">Estás en los parámetros adecuados</p>

  </div>
</template>

<style>
.card {
  padding: 1rem;
  border-radius: 0.5rem;
}
</style>