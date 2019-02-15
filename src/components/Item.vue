<template id="todo-item">
  <li class="item">
    <button :class="className" @click.self="$emit('complete')">
      {{ item.text }}
    </button>
    <button class="pull-right" @click="$emit('remove')">
      <i class="fa fa-times"></i>
    </button>
  </li>
</template>

<script>
  export default {
    name: 'Item',
    props: {
      item: Object
    }
  }
</script>
