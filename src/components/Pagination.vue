<template>
  <div class="centered">
    <ul class="pagination">
      <li class="page-item" v-bind:class="{ disabled: page === 1 }">
        <a href="#" v-on:click="$emit('prevPageClicked')">Previous</a>
      </li>
      <li class="page-item"
          v-bind:class="{ active: n === page }"
          v-for="n in maxPage"
          :key="n">
        <a href="#" v-on:click="$emit('gotoPageClicked', n)">{{ n }}</a>
      </li>
      <li class="page-item" v-bind:class="{ disabled: page === maxPage }">
        <a href="#" v-on:click="$emit('nextPageClicked')">Next</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: [
    'page',
    'maxPage'
  ]
}
</script>
