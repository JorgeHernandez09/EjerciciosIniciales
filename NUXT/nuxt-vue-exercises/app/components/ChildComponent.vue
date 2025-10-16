<script setup>
const emit = defineEmits(["handleClick"]);

function handleClick() {
  emit("handleClick", { message: "Hola desde el componente hijo" });
}

const greeting = ref(""); //ref para hacerla variable reactiva
const fathermessage = inject("message");

function updateGreeting() {
  greeting.value = fathermessage;
}
</script>

<template>
  <div>
    <button class="button" @click="handleClick">Emitir Evento</button>

    <button class="button" @click="greeting = fathermessage">
      Saludar desde hijo
    </button>
    <p>{{ greeting }}</p>
  </div>
</template>
