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
    todos: []

  },
  watch:{
          todos: {
            handler: function(){
              localStorage.setItem('todos', JSON.stringify(this.todos));
              // alert('Data saved')
            },
            deep: true
          },
        },
  mounted: function(){
    this.todos =JSON.parse(localStorage.getItem('todos')) || [];    // ||[] の意味は、もし||の左側が、false,つまりなかった場合は、代わりとして、[]という空の配列を渡すという意味。
    },
  methods: {
    addItem: function(){
      var item = {              //todosの今の配列の状態を確認して、今どのような要素を持つ必要があるのか確認する。
        title: this.newItem,
        isDone: false
      };
      this.todos.push(item);   //newItemを、todos(配列)にpush(追加)する。
      this.newItem = '';
    },
    deleteItem: function(index) {
      if (confirm('本当に削除しますか？')) {
        this.todos.splice(index,1)  //ここでindexを使ってどれを消すか選別する。
      }
    },
    purge: function(){
      if (!confirm('delete finished?')){
        return;
      }
      this.todos = this.remaining;    //remaining の中身は、isDone=falseの要素でできた配列
      }
    },

    computed: {
      // remaining: function(){      //remainingとい関数を作成,todosの中で、isDoneが、falseのものを抽出したい。＝＞filterメソッドを用いて、isDone:falseの配列だけを抜き出し、その要素数を数える
      //   var items = this.todos.filter(function(todo){    //filterは、配列に対して使うことができる。また、functionを通じて、配列の要素一つ一つを与えられた条件で選別していく。その結果は、true or falseで返す。
      //     return !todo.isDone;  //returnの条件を満たしているものだけを、itemsに配列として組み直す。的な？？
      //   });
      //   return items.length;        //この時点で、itemsの配列は、!isDoneのやつ（チェックされていない未遂のtodo）なので、これをlengthすることによって、未遂の数がわかる。
      remaining: function(){
        return this.todos.filter(function(todo){
          return !todo.isDone
        });
      }
      // ↑remaining関数は、todos配列を、filterでisDoneされた要素だけで組み替えられたものにし、その配列を返すように記述されている。
    }
  });
})();
