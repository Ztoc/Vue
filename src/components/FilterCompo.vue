<template lang="html">
  <div class="flex flex-col">
    <div class="space-x-4 ml-10 mb-5" v-for="(item, index) in lists" :key="index">
      <input type="checkbox" name="" id="" class="text-3xl" />
      <label for="a" class="font-serif text-gray-900 text-2xl">
        {{ item }}
      </label>
    </div>
  </div>
</template>
<!-- <script lang="ts">
import { defineComponent, PropType } from 'vue'
export default defineComponent({
  name: 'FilterCom',
  props: {
    lists: Array as PropType<string[]>,
  },
  mounted(){
    console.log(this.lists)
  }
})
</script> -->

<script lang="ts" setup>
  import {defineProps} from 'vue';
  const props = defineProps<{
    lists:string[]
  }>()
</script>