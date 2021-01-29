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
    todos: [            //todosの配列の中身を、titleと、やったかどうかを示すisDoneのハッシュにする。
      {
        title: 'task1',
        isDone: false
      },
      {
        title: 'task2',
        isDone: true
      },
      {
        title: 'task3',
        isDone: true
      }
    ]

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
    }
  },
    computed: {
      remaining: function(){      //remainingとい関数を作成,todosの中で、isDoneが、falseのものを抽出したい。＝＞filterメソッドを用いて、isDone:falseの配列だけを抜き出し、その要素数を数える
        var items = this.todos.filter(function(todo){    //filterは、配列に対して使うことができる。また、functionを通じて、配列の要素一つ一つを与えられた条件で選別していく。その結果は、true or falseで返す。
          return !todo.isDone;  //returnの条件を満たしているものだけを、itemsに配列として組み直す。的な？？
        });
        return items.length;        //この時点で、itemsの配列は、!isDoneのやつ（チェックされていない未遂のtodo）なので、これをlengthすることによって、未遂の数がわかる。
      }
    }
  });
})();
