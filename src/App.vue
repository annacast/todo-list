<template>
  <div id="app" class="container">
    <List :taskList="tasks" />
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

<style>
  @import './assets/main.scss';
</style>
