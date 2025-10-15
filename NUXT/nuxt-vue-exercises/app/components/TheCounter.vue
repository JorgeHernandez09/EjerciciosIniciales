<script lang="ts" setup>
import { ref } from 'vue'

const count = ref(0)

const countLimitUp = 10;
const countLimitDown = 0;
const Increment = ()=> count.value++;
const Decrement = ()=> count.value--;

</script>

<template>
<div>
    <button class=button v-if="count >countLimitDown" @click="Decrement">Decrementar</button>
    <button class=button v-if="count <countLimitUp" @click="Increment">Incrementar</button>

    <TheTitle>
        <p>El numero es: {{ count }}</p>
    </TheTitle>

    </div>
</template> 