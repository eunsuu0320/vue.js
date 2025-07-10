<template>
  <div class="middle-component">
    <h3>MiddleComponent.vue (중간 컴포넌트)</h3>
    <p>얘는 하는 게 없음</p>
    <GrandChildComponent />
  </div>
</template>

<script>
import GrandChildComponent from "./child/GrandChildComponent.vue";
export default {
  components: { GrandChildComponent },
};
</script>

<style scoped>
.middle-component {
  border: 1px solid red;
}
</style>
