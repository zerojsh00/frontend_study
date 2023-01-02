import { createStore } from "vuex";
import axios from "axios";

// vuex에서는 아래와 같이 상태를 저장한다.
const store = createStore({
  state() {
    return {
      name: "simon",
      number: 0,
      more: {},
    };
  },

  // 상태를 변화시키기 위한 함수를 아래에 정의한다.
  // 각 컴포넌트에서 상태를 직접 변화시키면 유지보수가 매우 어려워지기 때문이다.
  mutations: {
    changeName(state) {
      state.name = "Sanghyeon";
    },
    increaseNumber(state) {
      state.number++;
    },
    increase10Number(state, payLoad) {
      state.number += payLoad;
    },
    setMorePages(state, data) {
      state.more = data;
    },
  },

  // ajax 요청은 actions 항목에서 정의한다.
  actions: {
    getData(context) {
      axios
        .get("https://codingapple1.github.io/vue/more0.json")
        .then((page) => {
          context.commit("setMorePages", page.data);
        });
    },
  },
});

export default store;
