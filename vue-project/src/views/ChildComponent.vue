<template>
  <!-- <h3>자식컴포넌트 ChildComponent.vue</h3>
  <p><input type="text" v-model="msg" /></p>
  <button v-on:click="sendMessage">메세지 보내기</button>
  <button type="button" @click="childFunc" ref="btn">click</button> -->

  <div class="child">
    <h3>ToDo 입력</h3>
    <div class="input-group">
      <input
        type="text"
        v-model="newTodo"
        @keyup.enter="addTodo"
        placeholder="할 일 입력"
      />
      <button @click="addTodo">추가</button>
    </div>

    <h3>ToDo 목록</h3>
    <ul class="todo-list">
      <li v-for="(todo, index) in todos" :key="index">
        <span>{{ todo }}</span>
        <button class="delete-btn" @click="deleteTodo(index)">삭제</button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    todos: Array,
  },
  data() {
    return {
      newTodo: "",
    };
  },
  methods: {
    addTodo() {
      if (this.newTodo) {
        this.$emit("add-todo", this.newTodo);
        this.newTodo = "";
      }
    },
    deleteTodo(index) {
      this.$emit("delete-todo", index);
    },
  },
};
// export default {
//   data() {
//     return {
//       msg: "",
//     };
//   },
//   methods: {
//     sendMessage() {
//       this.$emit("send-message", this.msg);
//       // this.$parent.msg = this.msg;
//       // this.$root.msg = this.msg;
//     },
//     childFunc() {
//       console.log("부모 컴포넌트에서 직접 발생시킨 이벤트");
//     },
//   },
//   mounted() {
//     console.log(this.$refs);
//   },
// };
</script>

<style scoped>
.child {
  padding: 20px;
}

h3 {
  color: #444;
  margin-bottom: 10px;
}

.input-group {
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
}

.input-group input {
  flex: 1;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 6px;
  font-size: 14px;
}

.input-group button {
  padding: 8px 16px;
  background-color: #42b983;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
}

.input-group button:hover {
  background-color: #36976a;
}

.todo-list {
  list-style: none;
  padding: 0;
}

.todo-list li {
  display: flex;
  justify-content: space-between;
  padding: 10px 12px;
  border-bottom: 1px solid #eee;
  align-items: center;
}

.todo-list li:last-child {
  border-bottom: none;
}

.delete-btn {
  padding: 5px 10px;
  background-color: #ff5e5e;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
}

.delete-btn:hover {
  background-color: #e04b4b;
}
</style>
