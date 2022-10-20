import { createStore } from "vuex";

export type IProduct = {
  title:string,
  body:string,
  type: string,
  price: number
}
interface IState {
  products:Array<IProduct>,
  isLoading:boolean
}

export default createStore({
  state: {} as IState,
  getters: {},
  mutations: {  
    setProducts(state:IState,productList:IProduct[]){
      state.products = productList;
    }
  },
  actions: {
    async fetchProducts({commit}){
      const a = await require('../service/Data.json');
      const {lists} =  a.data;
      
      commit("setProducts",lists);
    }
  },
  modules: {},
});
