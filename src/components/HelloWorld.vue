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
          <div v-for="(product, index) in displayedProducts" :key="index" class="column col-4 col-md-6 col-xs-12">
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
      displayPerPage: 4,
      filter: {
        categories: []
      }
    }
  },
  computed: {
    filteredProducts () {
      const vm = this
      if (vm.filter.categories.length) {
        return vm.products.filter(product => {
          return vm.filter.categories.some(catId => {
            return product.categories.some(cat => {
              return cat.id === catId
            })
          })
        })
      } else {
        return vm.products
      }
    },
    displayedProducts () {
      const currentPage = this.page - 1
      const pageSize = this.displayPerPage
      return this.filteredProducts.slice(currentPage * pageSize, (currentPage + 1) * pageSize)
    },
    maxPage () {
      return Math.ceil(this.filteredProducts.length / this.displayPerPage)
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
      vm.page = vm.page - 1
    },
    goToNextPage () {
      const vm = this
      vm.page = vm.page + 1
    },
    filterByCategory (categoriesId) {
      // Do simple filtering
      const vm = this
      vm.filter.categories = categoriesId
      /*
      vm.products = vm.products.filter(product => {
        return categoriesId.some(catId => {
          return product.categories.some(cat => {
            return cat.id === catId
          })
        })
      })
      */
    }
  }
}
</script>
