<script lang="ts" setup>
    //defineProps(['propTitle'])
</script>

<template>
  <!--<p>El titulo es: {{ propTitle }}</p>-->
    <div class="card">
        <slot></slot> <!-- Aquí se inyecta el contenido -->
    </div>
</template>
