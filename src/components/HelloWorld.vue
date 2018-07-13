<template>
  <div class="container">
    <div class="columns">
      <div class="column col-3">

        <div class="card">
          <div class="card-header">
            <div class="card-title h5">ProductName</div>
            <div class="card-subtitle text-gray">product description goes here</div>
          </div>
          <div class="card-image">
            <img src="http://via.placeholder.com/350x150" alt="card-image" class="img-responsive">
          </div>
          <div class="card-body">
            <h4>Rp. 10,900</h4>
          </div>
          <div class="card-footer">
            <div class="btn-group">
              <button class="btn btn-primary">Add to Cart</button>
              <button class="btn">Share</button>
            </div>
          </div>
        </div>

      </div>
      <div class="column col-3">
        Content
      </div>
      <div class="column col-3">
        Content
      </div>
      <div class="column col-3">
        Content
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>
