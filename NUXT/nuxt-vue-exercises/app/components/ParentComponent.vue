<script setup>
import ChildComponent from "./ChildComponent.vue";
function handleCustomEvent(payload) {
 alert (payload.message);
}



const greeting = "Saludos del componente padre";
provide("message", greeting);
</script>

<template>
  <div>
    <ChildComponent  @handleClick="handleCustomEvent" />  
  </div>
</template>
