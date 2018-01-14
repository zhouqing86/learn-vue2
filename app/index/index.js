import Vue from 'Vue'
import TodoList from './components/TodoList.vue'
Vue.config.debug = true;//开启错误提示
window.onload = function () {
  new Vue({
      el: '#app',
      components: {
        'todo-list': TodoList
      }
  });
}
