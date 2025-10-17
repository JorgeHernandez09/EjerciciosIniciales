<script lang="ts" setup>
// Importar los productos
import { products } from "@/data/mock";
const counter = useCounterStore();
const { count , multipliedCount} = storeToRefs(counter);
</script>

<template>
  <div>
    <NuxtLink class="button" to="/">Ir a la página Home</NuxtLink>
    <h1>Lista de productos</h1>
    <ProductCard
      v-for="product in products"
      :title="product.title"
      :description="product.description"
      :price="product.price"
    />
    <p>El contador es: {{ count }}</p>
    <p>El número duplicado es: {{ multipliedCount }}</p>
  </div>
</template>
