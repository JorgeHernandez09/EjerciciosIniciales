<script lang="ts" setup>
import ChildComponent from "./ChildComponent.vue";

let son = ref<string>("");

function handleCustomEvent(payload: { message: any }) {
  son.value = payload.message;
}

const greeting = "Saludos del componente padre";
provide("message", greeting);
</script>

<template>
  <div>
    <ChildComponent @handleClick="handleCustomEvent" />
    <p>{{ son }}</p>
  </div>
</template>
