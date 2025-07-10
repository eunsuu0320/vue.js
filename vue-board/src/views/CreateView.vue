<template>
  <div class="page-wrapper">
    <PostForm @submit="handleSubmit" />
  </div>
</template>

<script>
import { mapActions } from "vuex";
import PostForm from "../components/PostForm.vue";

export default {
  components: { PostForm },
  methods: {
    ...mapActions(["addPost"]),
    handleSubmit(post) {
      this.addPost(post);
      this.$router.push("/");
    },
  },
};
</script>

<style scoped>
.page-wrapper {
  padding: 40px 16px;
  background: #f4f4f4;
  min-height: 100vh;
}
</style>
