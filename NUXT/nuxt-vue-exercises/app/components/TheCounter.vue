<script lang="ts" setup>
import { useCounter } from "~/composables/useCounter";

const { count, countLimitUp, countLimitDown, Increment, Decrement } = useCounter(); // Lo del parentesis sera el valor que se le quiera dar a: (numero inicial, numero maximo, numero minimo)
</script>

<template>
  <div>
    <button class="button" v-if="count > countLimitDown" @click="Decrement">
      Decrementar
    </button>
    <button class="button" v-if="count < countLimitUp" @click="Increment">
      Incrementar
    </button>

    <TheTitle>
      <p>El numero es: {{ count }}</p>
    </TheTitle>
  </div>
</template>
