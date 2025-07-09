<template>
  <h1>Hello, {{ msg }}</h1>
  <h1 v-text="msg"></h1>
  <h2 v-html="htmlStr"></h2>

  <p><input type="text" v-model="valueModel" /></p>
  <p><input type="number" v-model="numberModel" /></p>
  <p>
    <select v-model="city">
      <option value="02">서울</option>
      <option value="053">대구</option>
    </select>
  </p>

  <p>
    <label>{{ checking }} </label>
    <input
      type="checkbox"
      true-value="yes"
      false-value="no"
      v-model="checking"
    />
  </p>

  <p>{{ valueModel }}, {{ numberModel }}, {{ city }}</p>
</template>

<script>
export default {
  data() {
    return {
      msg: "World",
      htmlStr: '<span style="color: red;">Red Text<span>',
      valueModel: "홍길동은 회원입니다.",
      numberModel: 10,
      city: "053",
      checking: "yes",
    };
  },
};
</script>

<!-- 현재 페이지에만 css 적용하는 거 scoped -->
<style scoped>
h1 {
  color: green;
}
</style>
