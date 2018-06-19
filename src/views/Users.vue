<template>
  <div class="users container">
    <h2 class="title">Users</h2>
    <div class="columns">
      <div class="column is-one-third">
        <ul class="user-lit">
          <li class="user-item" v-for="user of users" :key="user.id"
            @click="selectUser(user)"
          >
            <span>{{ user.name }}</span>

            <span class="user-item-delete icon" @click.stop="deleteUser(user)">
              <i class="fas fa-trash"></i>
            </span>
          </li>
        </ul>
      </div>

      <div class="column">
        <div v-if="selectedUser" class="user-info">
          <ul>
            <li>username: {{ selectedUser.username }}</li>
            <li>email: {{ selectedUser.email }}</li>
            <li>phone: {{ selectedUser.username }}</li>
            <li>website: {{ selectedUser.website }}</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  data () {
    return {
      selectedUser: null
    }
  },

  computed: {
    users () {
      return this.$store.state.users.data
    }
  },

  methods: {
    selectUser (user) {
      this.selectedUser = user
    },

    deleteUser (user) {
      this.$store.dispatch('users/remove', user)
        .then(() => {
          if (this.selectedUser && this.selectedUser.id === user.id) {
            this.selectedUser = null
          }
        })
    },
  },

  created () {
    this.$store.dispatch('users/load')
  },
}
</script>


<style lang="scss" scoped>
.users {
  margin-top: 30px;
  margin-bottom: 30px;
}

.user-item {
  padding: 5px;
  cursor: pointer;
  transition: background-color .3s ease;
  display: flex;
  justify-content: space-between;

  &-delete {
    opacity: 0;
    visibility: hidden;
  }

  &:hover {
    background: #eee;

    .user-item-delete {
      opacity: 1;
      visibility: visible;
    }
  }
}

.user-info {
  background: #444;
  color: white;
  padding: 10px;
}
</style>
