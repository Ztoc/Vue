<template>
  <div
    class=" border-blue-400 border-2 rounded-md shadow-pink-100 mb-10 px-5"
  >
    <div class="text-center font-extrabold text-2xl">
      {{ product.title }}
    </div>
    <div class="text-center">
      {{product.body}}
    </div>
    <div class="flex flex-row justify-between">
        <div>{{product.type}}</div>
        <div class="text text-red-500">${{product.price}}</div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { defineProps } from 'vue'
import { IProduct } from '../store/index'
const props = defineProps<{
  product: IProduct
}>()
</script>
