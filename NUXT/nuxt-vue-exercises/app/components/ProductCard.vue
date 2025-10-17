<script lang="ts" setup>
defineProps<{
  title: string;
  description: string;
  price: number;
}>();
</script>

<template>
  <ul class="card">
    <li>
      {{ title }}
    </li>
    <li>
      {{ description }}
    </li>

    <li>{{ price }}€</li>
  </ul>
</template>
