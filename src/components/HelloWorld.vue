<template>
  <div class="container">
    <div class="columns">
      <div v-for="(product, index) in products" :key="index" class="column col-4 col-md-6 col-xs-12">
        <product-card :product="product"></product-card>
      </div>
    </div>
    <div class="divider"></div>
    <div class="columns">
      <div class="column col-12">
        <pagination
          :page="page"
          :maxPage="maxPage"
          v-on:prevPageClicked="goToPrevPage()"
          v-on:nextPageClicked="goToNextPage()"></pagination>
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
      products: [],
      page: 1,
      maxPage: 2
    }
  },
  created () {
    ProductService.getProducts()
      .then(products => {
        this.products = products
      })
  },
  methods: {
    goToPrevPage () {
      const vm = this
      const currentPage = vm.page
      const prevPage = currentPage - 1
      ProductService.getProducts(prevPage)
        .then(products => {
          vm.products = products
          vm.page = prevPage
        })
    },
    goToNextPage () {
      const vm = this
      const currentPage = vm.page
      const nextPage = currentPage + 1
      ProductService.getProducts(nextPage)
        .then(products => {
          vm.products = products
          vm.page = nextPage
        })
    }
  }
}
</script>
