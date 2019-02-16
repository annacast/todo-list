<template id="list">
	<section class="tasks">
    <h1>
      To Do
      <transition name="fade">
        <small v-if="incomplete">({{ incomplete }})</small>
      </transition>
    </h1>
    <div class="form-row align-items-center">
      <div class="col-10">
        <input
          type="text"
          class="form-control mb-2"
          v-model="task"
          @keyup.enter="addItem"
          placeholder="New task"
        >
      </div>
      <div class="col-2">
        <button
          type="button" 
          class="btn btn-primary btn-block mb-2"
          @click="addItem"
        >
          <i class="fa fa-plus" />&nbsp;&nbsp;Add
        </button>
      </div>
    </div>

    <div class="form-row mb-4">
      <button
        type="button"
        class="btn btn-outline-warning col-auto offset-md-8"
        @click="clearCompleted"
      >
        <i class="fa fa-check" /> Clear Completed
      </button>
      <button
        type="button"
        class="btn btn-danger col-md-2"
        @click="clearAll"
      >
        <i class="fa fa-trash" /> Clear All
      </button>
    </div>

    <div class="display-items-container">
      <transition-group name="fade" tag="ul" class="list-group">
        <Task
          v-for="(task, idx) in tasks"
          @remove="removeItem(idx)"
          @complete="completeItem(task)"
          :task="task"
          :key="idx"
        ></Task>
      </transition-group>
    </div>
  </section>
</template>

<script>
  import Task from './Item.vue';
  export default {
    name: 'List',
    template: '#list',
    props: {
      tasks: { default: [] }
    },
    data () {
      return {
        task: ''
      }
    },
    computed: {
      incomplete() {
        return this.tasks.filter(this.pending).length;
      }
    },
    components: { Task },
    methods: {
      addItem() {
        if (this.task) {
          this.tasks.push({
            text: this.task,
            completed: false
          });
          this.task = '';
        }
      },
      removeItem(index) {
        this.tasks.splice(index, 1)
      },
      completeItem(item) {
        item.completed = !item.completed
      },
      clearCompleted() {
        this.tasks = this.tasks.filter(this.pending);
      },
      clearAll() {
        this.tasks = [];
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
