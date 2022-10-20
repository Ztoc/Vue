<template lang="html">
  <div class="app container mx-auto mt-5">
    <HeaderCom/>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import HeaderCom from '@/components/Header.vue'
export default defineComponent({
    name: "app",
   
    components: { HeaderCom }
})
</script>
