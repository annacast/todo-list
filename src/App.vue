<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <List :tasks="tasks" />
  </div>
</template>

<script>
  import List from './components/List.vue'

  export default {
    name: 'app',
    components: {
      List
    },
    data: () => {
      return {
        tasks: [],
      };
    }
  }
</script>
