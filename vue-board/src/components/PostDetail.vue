<template>
  <div class="detail-container" v-if="post">
    <h2>{{ post.title }}</h2>
    <h3>{{ post.writer }}</h3>
    <p>{{ post.content }}</p>
    <router-link to="/" class="back-button">← 목록으로</router-link>
  </div>
  <div v-else class="detail-container">
    <p>존재하지 않는 게시글입니다.</p>
    <router-link to="/" class="back-button">← 목록으로</router-link>
  </div>
</template>

<script>
export default {
  props: ["post"],
};
</script>

<style scoped>
.detail-container {
  max-width: 600px;
  margin: 40px auto;
  padding: 24px;
  background-color: #ffffff;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
}
h2 {
  margin-bottom: 12px;
}
p {
  white-space: pre-wrap;
  line-height: 1.6;
}
.back-button {
  display: inline-block;
  margin-top: 20px;
  color: #1976d2;
  text-decoration: none;
  font-weight: bold;
  transition: 0.2s;
}
.back-button:hover {
  color: #125aa2;
}
</style>
