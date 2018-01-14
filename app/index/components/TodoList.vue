<template id="template-home">
  <div class="container">
    <div class="summary">
      一共{{items.length}}个事项，完成{{items.filter(item => item.finished).length}}, 剩余{{items.filter(item => !item.finished).length}}
    </div>
    <div class="list-items">
      <div v-for="(item,index) in items">
        <TodoItem :item="item" @delItem="delItem"/>
      </div>
    </div>
    待办事项：<input type="text" v-model="text" class="input-todo" placeholder='写点什么。。。' @keyup.enter="onChange">
  </div>
</template>

<script>
import TodoItem from './TodoItem';
export default {
  data() {
    return {
      items: [
      ],
      text: '',
      id: 0
    }
  },
  components: {
    TodoItem
  },
  methods: {
    onChange() {
      if(this.text.length > 0) {
        this.items.push({
          finished: false,
          text: this.text,
          id: this.id++
        });
      }
    },
    delItem(id) {
      var item = this.items.find(item => item.id === id);
      if(item) {
        item.finished = true;
      }
    }
  }

}

</script>

<style>
body {
  font-size: 12px;
}

.container {
    width: 300px;
    margin: 0 30%;
}

.input-todo {
    width: 220px;
}

.list-items {
  border: 1px solid #ccc;
  height: 150px;
  margin-bottom: 10px;
  overflow-y: auto;
}
</style>
