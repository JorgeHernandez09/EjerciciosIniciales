<script setup>
import { ref } from 'vue'

const count = ref(0)
function Increment (){
    count.value += 1
}

function Decrement (){
    count.value -= 1
}

</script>

<template>
  <button @click="Increment">Incrementar</button>
  <button @click="Decrement">Decrementar</button>
  <TheTitle>
        <h3>El numero es: {{ count }}</h3>
    </TheTitle>
</template> 