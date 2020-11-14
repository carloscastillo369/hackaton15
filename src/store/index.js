import { createStore } from 'vuex'

export default createStore({
  state: {
    users: [],
    user: {}
  },

  mutations: {
    getFirstLetterNameUsersMutation(state, payload){
      state.users = payload;
    },

    getOneUserMutation(state, payload){
      state.user = payload;
    }
  },

  actions: {
    async getFirstLetterNameUsersAction({commit}){
      const info = await fetch('https://jsonplaceholder.typicode.com/users');
      let data = await info.json();
      data.map(user =>{
        user.name = user.name[0];
      });
      commit('getFirstLetterNameUsersMutation', data);
    },

    async getOneUserAction({commit}, id){
      const info = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
      const data = await info.json();
      commit('getOneUserMutation', data);
    }
  },

  modules: {
  }
})
