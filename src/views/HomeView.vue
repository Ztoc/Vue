<template>
  <div>
    <HeaderCom />
    <NavBar :lists="nav_list" />
    <div class="flex flex-row mt-10">
      <div class="basis-1/3">
        <Filter :lists="filter_list" />
      </div>
      <p class="basis-2/3">sadkfsdkfl;kl;</p>
    </div>
  </div>
</template>
<!-- <script lang="ts" >
import { defineComponent } from 'vue'
import HeaderCom from '@/components/Header.vue'
import NavBar from '@/components/NavBar.vue'
import Filter from '@/components/Filter.vue'
export default defineComponent({
  name: 'HomeView',
  components: { HeaderCom, NavBar, Filter },
  data() {
    return {
      nav_list: ['CLOTH', 'GLASS', 'TROUSERS', 'SHOES'],
      filter_list:['CLOTH','GLASS','TROUSERS', 'SHOES']
    }
  },
})
</script> -->

<script lang="ts" setup>
import HeaderCom from '@/components/HeaderCompo.vue'
import NavBar from '@/components/NavBar.vue'
import Filter from '@/components/FilterCompo.vue'
import { ref } from 'vue'

const nav_list = ref(['CLOTH', 'GLASS', 'TROUSERS', 'SHOES'])
const filter_list = ref(['CLOTH', 'GLASS', 'TROUSERS', 'SHOES'])

</script>
