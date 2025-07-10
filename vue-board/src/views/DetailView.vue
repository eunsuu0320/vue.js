<template>
  <div class="page-wrapper">
    <PostDetail :post="post" />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import PostDetail from "@/components/PostDetail.vue";

export default {
  components: { PostDetail },
  props: ["id"],
  computed: {
    ...mapGetters(["getPostById"]),
    post() {
      return this.getPostById(Number(this.id));
    },
  },
};
</script>

<style scoped>
.page-wrapper {
  padding: 40px 16px;
  background: #f0f0f0;
  min-height: 100vh;
}
</style>
