<script setup>
    //defineProps(['propTitle'])
</script>

<template>
  <!--<p>El titulo es: {{ propTitle }}</p>-->
    <div class="tarjeta">
        <slot></slot> <!-- Aquí se inyecta el contenido -->
    </div>
</template>
