<template id="item">
  <li class="list-group-item list-group-item-action">
    <button
      type="button"
      class="btn btn-list-item col-md-11"
      :class="className"
      @click.self="$emit('complete')"
    >
      {{ task.text }}
    </button>
    <button
      type="button"
      class="btn btn-small pull-right"
      @click="$emit('remove')"
    >
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
        let classes = [''];
        if (this.task.completed) {
          classes.push('disabled');
        }
        return classes.join(' ');
      }
    }
  }
</script>
