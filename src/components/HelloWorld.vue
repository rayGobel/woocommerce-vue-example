<template>
  <div class="container">
    <div class="columns">

      <div class="column col-2">
        <category-filter
          v-on:checkedCategoriesUpdated="filterByCategory"
          :categories="categories"></category-filter>
      </div>

      <div class="column col-10">
        <div class="columns">
          <div v-for="(product, index) in products" :key="index" class="column col-4 col-md-6 col-xs-12">
            <product-card :product="product"></product-card>
          </div>
        </div>
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
import CategoryFilter from '@/components/CategoryFilter'

export default {
  name: 'HelloWorld',
  components: {
    'product-card': ProductCard,
    'pagination': Pagination,
    'category-filter': CategoryFilter
  },
  data () {
    return {
      products: [],
      categories: [],
      page: 1,
      maxPage: 2
    }
  },
  created () {
    ProductService.getProducts()
      .then(products => {
        this.products = products
      })
    ProductService.getCategories()
      .then(categories => {
        this.categories = categories
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
    },
    filterByCategory (categoriesId) {
      // Do simple filtering
      const vm = this
      vm.products = vm.products.filter(product => {
        return categoriesId.some(catId => {
          return product.categories.some(cat => {
            return cat.id === catId
          })
        })
      })
    }
  }
}
</script>
