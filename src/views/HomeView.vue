<template>
  <div>
    <HeaderCom />
    <NavBar :lists="nav_list" />
    <div class="flex flex-row mt-10">
      <div class="basis-1/3">
        <Filter :lists="filter_list" />
      </div>
      <div class="basis-2/3">
        
        <div class="columns-4">
          
        <ProductCompo v-for="(item, index) in products" :key="index" :product="item">
        </ProductCompo>
        </div>
      </div>
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
import { ref ,onBeforeMount} from 'vue'
import { useStore } from 'vuex'
import { IProduct } from '@/store'
import ProductCompo from '@/components/ProductCompo.vue'

const store = useStore()
const nav_list = ref(['CLOTH', 'GLASS', 'TROUSERS', 'SHOES'])
const filter_list = ref(['CLOTH', 'GLASS', 'TROUSERS', 'SHOES'])
const products = ref([] as IProduct[])
onBeforeMount(() => {
  store.dispatch('fetchProducts').then(() => {
  products.value = store.state.products})
})
</script>
