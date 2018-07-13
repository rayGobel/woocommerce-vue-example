<template>
  <div id="app" class="container">
    <div class="columns">
      <div class="column col-10 col-mx-auto">
        <h1>WooCommerce - Vue.js App</h1>
      </div>
      <div class="column col-10 col-mx-auto">
        <router-view/>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  margin-top: 20px;
}
</style>
