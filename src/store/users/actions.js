import http from '@/http'

export default {
  load ({ commit }) {
    return http.get('/users')
      .then(({ data: users }) => {
        commit('load', users)
      })
  },

}
