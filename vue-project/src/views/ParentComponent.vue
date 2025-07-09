<template>
  <!-- <h3>부모컴포넌트 parentComponent.vue</h3>
  <p class="parent-component">{{ msg }}</p>
  <ChildComponent v-on:send-message="sendMessage" ref="child_component">
  </ChildComponent> -->

  <div class="parent">
    <h2>📋 부모 컴포넌트: ToDo 리스트</h2>
    <ChildComponent
      :todos="todoList"
      @add-todo="handleAddTodo"
      @delete-todo="handleDeleteTodo"
    />
  </div>
</template>

<script>
import ChildComponent from "./ChildComponent.vue";

export default {
  components: {
    ChildComponent,
  },
  data() {
    return {
      todoList: ["산군이 먹이 주기"],
    };
  },
  methods: {
    handleAddTodo(todo) {
      this.todoList.push(todo);
    },
    handleDeleteTodo(index) {
      this.todoList.splice(index, 1);
    },
  },
};
// export default {
//   data() {
//     return {
//       msg: "홍길동",
//     };
//   },
//   components: { ChildComponent },
//   methods: {
//     sendMessage(data) {
//       console.log("전달받은 데이터: " + data);
//     },
//   },
//   mounted() {
//     this.$refs.child_component.$refs.btn.click();
//   },
// };
</script>

<style scoped>
.parent {
  max-width: 600px;
  margin: 40px auto;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

h2 {
  color: #333;
  margin-bottom: 20px;
  text-align: center;
}
</style>
