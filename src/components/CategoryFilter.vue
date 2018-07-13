<template>
  <div class="card">
    <div class="card-header">
      <div class="card-title h4">Filter</div>
    </div>
    <div class="card-body">
      <h5>Category</h5>
      <div class="form-group">
        <label v-for="(category, index) in categories" :key="index" class="form-checkbox">
          <input
            type="checkbox"
            v-model="checkedCategories"
            :value="category.id">
          <i class="form-icon"></i> {{ category.name }} - {{ category.count }}
        </label>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      'checkedCategories': []
    }
  },
  props: ['categories'],
  methods: {
    updateCheckedCategories () {
      this.$emit('checkedCategoriesUpdated', this.checkedCategories)
    }
  },
  watch: {
    'checkedCategories': function () {
      this.updateCheckedCategories()
    }
  }
}
</script>
