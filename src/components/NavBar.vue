<template lang="html">
  <div>
    <div class="flex">
      <p
        v-for="(item, index) in lists"
        :key="index"
        class="mr-5 text-2xl hover:underline cursor-pointer"
      >
        {{ item }}

      </p>
      
    </div>
  </div>
</template>
<!-- <script lang="ts">
import { defineComponent, PropType } from 'vue'
export default defineComponent({
  name: 'NavBar',
  props: {
    lists: Array as PropType<string[]>,
  },
})
</script> -->
<script lang="ts" setup>
  import {defineProps} from 'vue';
  const props = defineProps<{
    lists:string[]
  }>()
</script>