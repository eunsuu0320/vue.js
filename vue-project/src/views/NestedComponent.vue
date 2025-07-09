<template>
  <h3>상위 컴포넌트 = 하위 컴포넌트(PageTitle)</h3>
  <PageTitle
    v-bind:title="titleMsg"
    v-bind:likes="likeCnt"
    v-bind:isOK="okVal"
    v-bind:members="memberList"
  >
    <template v-slot><p>내용입니다.</p></template>
    <template v-slot:header><p>Header의 slot 입니다.</p></template>
    <template v-slot:footer><p>footer의 slot 입니다.</p></template>
  </PageTitle>
</template>

<script>
import PageTitle from "../components/PageTitle.vue";
export default {
  components: {
    PageTitle,
  },
  data() {
    return {
      titleMsg: "동적인 내용 전달하기",
      likeCnt: 3,
      okVal: true,
      memberList: [
        { name: "아버지", age: 40 },
        { name: "어머니", age: 35 },
        { name: "아들", age: 5 },
      ],
    };
  },
};
</script>
