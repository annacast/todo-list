<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <List />
  </div>
</template>

<script>
  import List from './components/List.vue'

  export default {
    name: 'app',
    components: {
      List
    }
  }
</script>
