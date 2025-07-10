import { createStore } from "vuex";

// createStore() 함수로 이루어진 스토어(전역 상태 관리소)를 만들고, 구성 정의
export default createStore({
  // 데이터 저장소
  state: {
// posts 라는 배열 저장. => 게시글 목록을 저장하는 역할
    posts: [],
  },
  // state에 정의된 변수를 변경시키는 역할. 동기 처리 commit을 통해서 호출, state 정의된 변수 값 변경 가능
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
