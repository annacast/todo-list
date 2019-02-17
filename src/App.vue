<template>
  <div id="app" class="container">
    <List />
  </div>
</template>

<script>
  import List from './components/List.vue'

  export default {
    name: 'app',
    components: {
      List
    },
  }
</script>

<style>
  @import './assets/main.scss';
</style>
