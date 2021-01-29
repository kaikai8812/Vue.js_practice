(function(){
  'use strict';

// var vm =new Vue({
//   el: '#app',
//   data: {
//     name: 'taguchi'
//   }
// });
var vm = new Vue({
  el: '#app',
  data: {
    newItem: '',
    todos: [
      'task1',
      'task2',
      'task3'
    ]
  },
  methods: {
    addItem: function(e){
      e.preventDefault();
      this.todos.push(this.newItem);   //newItemを、todos(配列)にpush(追加)する。
      this.newItem = '';
    },
    deleteItem: function(index) {
      if (confirm('本当に削除しますか？')) {
        this.todos.splice(index,1)  //ここでindexを使ってどれを消すか選別する。
      }
    }
  }
});



})();
