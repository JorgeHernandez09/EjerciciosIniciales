<script lang="ts" setup>
// Importamos los productos
import { products } from '@/data/mock';
</script>


<template>
   <h1>Lista de productos</h1>
      <ul>
        <li v-for="product in products" :key="product.title">
          {{ product.title }} - ${{ product.price }}
        </li>
      </ul>
  
</template>


