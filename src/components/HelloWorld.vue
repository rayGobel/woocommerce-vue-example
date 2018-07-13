<template>
  <div class="container">
    <div class="columns">
      <div class="column col-3">
        <product-card></product-card>
      </div>
      <div class="column col-3">
        <product-card></product-card>
      </div>
      <div class="column col-3">
        <product-card></product-card>
      </div>
      <div class="column col-3">
        <product-card></product-card>
      </div>
    </div>
  </div>
</template>

<script>
import ProductCard from '@/components/ProductCard'

export default {
  name: 'HelloWorld',
  components: {
    'product-card': ProductCard
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>
