<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/data">Data link</router-link>
  </nav>
  <div class="appUse" v-if="appUse">
    <div>
      <h3>App.vue(부모컴포넌트 - Provider)</h3>
      <p>
        제공자이름: <strong>{{ username }}</strong>
      </p>
      <MiddleComponent />
    </div>
  </div>
  <router-view />
</template>

<script>
import MiddleComponent from "./views/MiddleComponent.vue";

export default {
  components: { MiddleComponent },
  data() {
    return {
      msg: "",
      username: "홍길동",
      appUse: false,
    };
  },
  // provide는 상위 컴포넌트에서 하위 컴포넌트로 어떠한 값을 전달할 때 사용, 하위컴포넌트에서는 inject로 받음.
  provide() {
    return {
      providerUsername: this.username, // 데이터 속성
      // 부모 컴포넌트의 메소드를 아래 속성으로 전달 할 수 있음.
      updateUserName: this.changeUserName, // 함수
    };
  },
  methods: {
    changeUserName(name) {
      // username 데이터 속성 변경
      this.username = name;
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
