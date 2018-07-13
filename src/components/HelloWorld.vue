<template>
  <div class="container">
    <div class="columns">
      <div v-for="(product, index) in products" :key="index" class="column col-3 col-md-6 col-xs-12">
        <product-card :product="product"></product-card>
      </div>
    </div>
    <div class="divider"></div>
    <div class="columns">
      <div class="column col-12">
        <pagination></pagination>
      </div>
    </div>
  </div>
</template>

<script>
import ProductService from '@/api/ProductService'
import ProductCard from '@/components/ProductCard'
import Pagination from '@/components/Pagination'

export default {
  name: 'HelloWorld',
  components: {
    'product-card': ProductCard,
    'pagination': Pagination
  },
  data () {
    return {
      products: []
    }
  },
  created () {
    ProductService.getProducts()
      .then(products => {
        this.products = products
      })
  }
}
</script>
