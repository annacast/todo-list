<template id="list">
	<section class="tasks">
    <h1>
      To Do
      <transition name="fade">
        <small v-if="incomplete">({{ incomplete }})</small>
      </transition>
    </h1>
    <div class="tasks__new input-group">
      <input
        type="text"
        class="input-group-field"
        v-model="task"
        @keyup.enter="addItem"
        placeholder="New task"
      >
      <span class="input-group-button">
        <button @click="addItem" class="button">
          <i class="fa fa-plus"></i> Add
        </button>
      </span>
    </div>

    <div class="tasks__clear button-group pull-right">
      <button
        class="button warning small"
        @click="clearCompleted"
      >
        <i class="fa fa-check"></i> Clear Completed
      </button>
      <button class="button alert small" @click="clearAll">
        <i class="fa fa-trash"></i> Clear All
      </button>
    </div>

    <transition-group name="fade" tag="ul" class="tasks__list no-bullet">
      <task-item
        v-for="(item, index) in list"
        @remove="removeItem(index)"
        @complete="completeItem(item)"
        :item="item"
        :key="item"
      ></task-item>
    </transition-group>
  </section>
</template>

<script>
  import Item from './Item.vue';
  export default {
    name: 'List',
    data () {
      return {
        list: [{ text: 'Test item' }],
        task: ''
      }
    },
    computed: {
      incomplete() {
        return this.list.filter(this.pending).length;
      }
    },
    components: { Item },
    methods: {
      addItem() {
        if (this.task) {
          this.list.push({
            text: this.task,
            completed: false
          });
          this.task = '';
        }
      },
      removeItem(index) {
        this.list.splice(index, 1)
      },
      completeItem(item) {
        item.completed = !item.completed
      },
      clearCompleted() {
        this.list = this.lists.filter(this.pending);
      },
      clearAll() {
        this.lists = [];
      },
      pending(item) {
        return !this.isCompleted(item);
      },
      isCompleted(item) {
        return item.completed;
      }
    }
  }
</script>
