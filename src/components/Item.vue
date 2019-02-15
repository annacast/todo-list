<template id="item">
  <li class="item">
    <button :class="className" @click.self="$emit('complete')">
      {{ task.text }}
    </button>
    <button class="pull-right" @click="$emit('remove')">
      <i class="fa fa-times"></i>
    </button>
  </li>
</template>

<script>
  export default {
    name: 'Item',
    template: '#item',
    props: {
      task: {
        type: Object
      },
    },
    computed: {
      className() {
        let classes = ['tasks__item__toggle'];
        if (this.task.completed) {
          classes.push('tasks__item__toggle--completed');
        }
        return classes.join(' ');
      }
    }
  }
</script>
