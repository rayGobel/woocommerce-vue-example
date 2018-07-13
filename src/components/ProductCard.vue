<template>
  <div class="card">
    <div class="card-header">
      <div class="card-title h5">{{ product.name }}</div>
      <div class="card-subtitle text-gray">product description goes here</div>
    </div>
    <div class="card-image">
      <img :src="product.images[0].src" alt="card-image" class="img-responsive">
    </div>
    <div class="card-body">
      <h4 v-html="product.price_html"></h4>
    </div>
    <div class="card-footer">
      <div class="btn-group">
        <button class="btn btn-primary">Add to Cart</button>
        <button class="btn">Share</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['product']
}
</script>
