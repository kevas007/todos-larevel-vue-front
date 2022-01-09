import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    todos: null,
  },
  mutations: {
    setTodos(state, todos) {
      state.todos = todos
    },
  },
  actions: {
    getTodos({ commit }) {
      axios({
        method: 'get',
        url: 'http://127.0.0.1:8000/api/todos',
      })
        .then(function (response) {
          commit('setTodos', response.data.data.todos)

          // console.log(response.data.data.todos)
        })
    },
  },
  getters: {
    getTodos: state => state.todos,
  },
  modules: {
  }
})
