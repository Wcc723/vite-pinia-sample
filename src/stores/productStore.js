import axios from 'axios';
import { defineStore } from 'pinia';
import statusStore from './statusStore';

const status = statusStore();

export default defineStore('productStore', {
  state: () => ({
    products: [],
  }),
  getters: {
    sortProducts: (state) => state.products.sort((a, b) => a.price - b.price),
  },
  actions: {
    getProducts() {
      const url = `${import.meta.env.VITE_APP_API}/api/${import.meta.env.VITE_APP_PATH}/products/all`;
      status.isLoading = true;
      axios.get(url).then((response) => {
        this.products = response.data.products;
        console.log('products:', response);
        status.isLoading = false;
      });
    },
  },
});
