<template>
  <div id="app" class="container">
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
