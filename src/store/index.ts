import { createStore } from "vuex";

export default createStore({
  state: {
    isLogin: false,
    nickname: "",
    token: "",
  },
  mutations: {
    changeLogin(state: any, nickname) {
      state.isLogin = !state.isLogin;
      state.nickname = nickname;
    },
    changeToken(state, token) {
      state.token = token;
    },
  },
  actions: {},
  modules: {},
});
