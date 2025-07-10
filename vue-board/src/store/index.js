import { createStore } from "vuex";

export default createStore({
  state: {
    posts: [],
  },
  mutations: {
    add_post(state, post) {
      state.posts.push(post);
    },
  },
  actions: {
    addPost({ commit }, post) {
      commit("add_post", post);
    },
  },
  getters: {
    allPosts(state) {
      // 게시글 목록에서 게시글 전체 반환 console.log(state) 확인
      return state.posts;
    },
    getPostById: (state) => (id) => {
      return state.posts.find((post) => post.id === id);
    },
  },
});
