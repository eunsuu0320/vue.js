<template>
  <div class="grand-child">
    <h3>GrandChildComponent.vue (최하위 - Injector)</h3>
    <p>
      주입받은 이름: <strong>{{ providerUsername }}</strong>
    </p>
    <button @click="updateParentName">부모 사용자 이름 변경</button>
  </div>
</template>

<script>
export default {
  // 부모 컴포넌트에서 provide로 넘겨준 값을 inject에서 정의해줘야 함.
  inject: ["providerUsername", "updateUserName"], // 사용자의 이름을 받아왔고, 사용자의 이름을 변경하는 함수를 받아옴.
  methods: {
    updateParentName() {
      this.updateUserName("김길동");
    },
  },
};
</script>

<style scoped>
.grand-child {
  border: 1px solid green;
}
</style>
