<template>
  <div class="page-wrapper">
    <!-- v-bind의 축약형으로 :posts 사용가능. 동적 데이터 바인딩 -->
    <!-- 부모 컴포넌트에 있는 posts라는 data 혹은 computed 속성 값을 자식 컴포넌트 PostList에 prop 이름 posts로 넘겨주는 것 -->
    <PostList :posts="posts" />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import PostList from "../components/PostList.vue";

export default {
  components: { PostList }, // 자식 컴포넌트 PostList를 끌어와서 쓰겠다.
  computed: {
    ...mapGetters(["allPosts"]),
    posts() {
      return this.allPosts;
    },
  },
};
</script>

<style scoped>
.page-wrapper {
  padding: 40px 16px;
  background: #f9f9f9;
  min-height: 100vh;
}
</style>
