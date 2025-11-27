<template>
  <h1>
    Product Details
  </h1>
  <div class="product-details" v-for="prod in prods">
    <article>
      <img :src="prod.image" alt="Product Image">
      <h2>{{prod.title}}</h2>
      <p>{{prod.description}}</p>
      <p>{{prod.price}}</p>
      <p>{{prod.category}}</p>
    </article>
  </div>
</template>

<script setup lang="ts">
import {computed, ref} from 'vue';
import products from "@/data/products.ts";
import type InterfaceProduct from "@/types/InterfaceProduct.ts";

const prods = ref<InterfaceProduct[]>(products);
</script>

<style scoped>

</style>