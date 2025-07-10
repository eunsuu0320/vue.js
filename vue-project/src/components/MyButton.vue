<template>
  <!-- <h3>MyButton.vue</h3> -->
  <button v-on:click="handleClick">{{ label }}</button>
</template>

<script>
export default {
  props: {
    label: { type: String, default: "클릭하세요" },
  },
  methods: {
    handleClick() {
      // $emit 사용
      // console.log(this);
      this.$emit("my-event", this.label + "을 전달");
    },
  },
};
</script>

<style scoped>
button {
  background-color: green;
  border: 1px solid green;
  color: #eee;
  border-radius: 5px;
  cursor: pointer;
  padding: 10px 20px;
  margin: 20px;
}

button:hover {
  background-color: #eee;
  border: 1px solid #eee;
  color: green;
}
</style>
