<template>
  <div class="form-container">
    <h2>📌 게시글 작성</h2>
    <input v-model="title" placeholder="제목" />
    <textarea v-model="content" placeholder="내용을 입력하세요.."></textarea>
    <input v-model="writer" placeholder="작성자" />
    <button @click="submitPost">등록</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "",
      content: "",
      writer: "",
    };
  },
  methods: {
    submitPost() {
      if (!this.title || !this.content) {
        alert("제목과 내용을 모두 입력해주세요.");
        return;
      }
      this.$emit("submit", {
        id: Date.now(),
        title: this.title,
        content: this.content,
        writer: this.writer,
      });
      this.title = "";
      this.content = "";
    },
  },
};
</script>

<style scoped>
.form-container {
  max-width: 600px;
  margin: 40px auto;
  padding: 24px;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  gap: 12px;
}
.form-container h2 {
  margin-bottom: 8px;
}
input,
textarea {
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 6px;
  font-size: 16px;
  font-family: inherit;
}
textarea {
  min-height: 120px;
  resize: vertical;
}
button {
  align-self: flex-end;
  padding: 10px 20px;
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: 0.2s;
}
button:hover {
  background-color: #45a049;
}
</style>
