<template>
  <nav class="navbar is-dark" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <a class="navbar-item" href="https://bulma.io">
        <img src="https://bulma.io/images/bulma-logo-white.png" alt="Bulma: a modern CSS framework based on Flexbox" width="112" height="28">
      </a>

      <span role="button" class="navbar-burger" :class="{ 'is-active': menuIsActive }" @click="toggleNavbar" aria-label="menu" aria-expanded="false">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </span>
    </div>

    <div class="navbar-menu" :class="{ 'is-active': menuIsActive }">
      <div class="navbar-start">
        <router-link class="navbar-item" to="/">Home</router-link>
        <router-link class="navbar-item" to="/users">Users</router-link>
        <router-link class="navbar-item" to="/about">About</router-link>
      </div>
    </div>
  </nav>
</template>


<script>
export default {
  data () {
    return {
      menuIsActive: false,
    }
  },
  methods: {
    toggleNavbar () {
      this.menuIsActive = !this.menuIsActive
    }
  }
}
</script>
