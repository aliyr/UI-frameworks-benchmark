import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    treeViewValues: [],
    users: [
      { id: 1, name: 'aaa' },
      { id: 2, name: 'bbb' }
    ],
    drafterUserInput: ''
  },
  mutations: {
    addMore (state) {
      if (state.treeViewValues.length < 499) {
        for (let i = 1; i <= 500; i++) {
          state.treeViewValues.push({
            text: 'parent number ' + i
          })
        }
      }
    },
    addUser (state, info) {
      state.users.push({ id: 3, name: info })
    },
    updateUser (state, index) {
      state.users[index].name = state.drafterUserInput
    },
    updateDrafterUserInfo (state, info) {
      state.drafterUserInput = info
    }
  },
  actions: { }
})
