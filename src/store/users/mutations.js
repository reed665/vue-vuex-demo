export default {
  load (state, users) {
    state.data = users
  },

  remove (state, user) {
    state.data = state.data.filter(item => item.id !== user.id)
  },

  add (state, user) {
    state.data.push(user)
  },

  update (state, user) {
    state.data = state.data.map(item => item.id === user.id ? user : item)
  },
}
