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
      const data = await info.json();
      const firstLetter = data.map(letter =>{
        return letter.name[0];
      });
      const id = data.map(id => {
        return id.id
      });
      const users = [
        {
          id: id[0],
          name: firstLetter[0]
        },
        {
          id: id[1],
          name: firstLetter[1]
        },
        {
          id: id[2],
          name: firstLetter[2]
        },
        {
          id: id[3],
          name: firstLetter[3]
        },
        {
          id: id[4],
          name: firstLetter[4]
        },
        {
          id: id[5],
          name: firstLetter[5]
        },
        {
          id: id[6],
          name: firstLetter[6]
        },
        {
          id: id[7],
          name: firstLetter[7]
        },
        {
          id: id[8],
          name: firstLetter[8]
        },
        {
          id: id[9],
          name: firstLetter[9]
        }
    ];
      commit('getFirstLetterNameUsersMutation', users);
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
