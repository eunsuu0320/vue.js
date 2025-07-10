<template>
  <div class="list-container">
    <div class="header">
      <h2>📋 게시글 목록</h2>
      <router-link to="/create" class="create-button">+ 새 글</router-link>
    </div>
    <ul>
      <li v-for="post in posts" :key="post.id">
        <router-link :to="`/post/${post.id}`">{{ post.title }}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ["posts"],
};
</script>

<style scoped>
.list-container {
  max-width: 600px;
  margin: 40px auto;
  padding: 24px;
  border-radius: 12px;
  background-color: #fafafa;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
}
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
}
ul {
  list-style: none;
  padding: 0;
}
li {
  margin: 10px 0;
  padding: 12px 16px;
  border-radius: 8px;
  background-color: #ffffff;
  transition: background-color 0.2s;
}
li:hover {
  background-color: #f0f0f0;
}
a {
  text-decoration: none;
  color: #333;
  font-weight: 500;
}
.create-button {
  background-color: #1976d2;
  color: white;
  padding: 6px 12px;
  border-radius: 6px;
  text-decoration: none;
  transition: background-color 0.2s;
}
.create-button:hover {
  background-color: #125aa2;
}
</style>
