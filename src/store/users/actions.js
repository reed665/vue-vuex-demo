import http from '@/http'

export default {
  load ({ commit }) {
    return http.get('/users')
      .then(({ data: users }) => {
        commit('load', users)
      })
      .catch(console.error)
  },

  remove ({ commit }, user) {
    return http.delete(`/users/${user.id}`)
      .then(() => {
        commit('remove', user)
      })
      .catch(console.error)
  },
}
