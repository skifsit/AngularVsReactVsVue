<template>
  <div>
    <nav-bar/>
    <div v-if="fetching">
      FETCHING...
    </div>
    <div v-else="">
      <div v-for="user in users"
           :key="user.id"
           class="flex-row">
        <div>{{user.id}}</div>
        <div>{{user.name}}</div>
        <div>{{user.email}}</div>
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from './NavBar'

export default {
  name: 'UsersList',
  components: {
    NavBar
  },
  data () {
    return {
      users: [],
      fetching: false
    }
  },
  methods: {
    loadUsers () {
      this.fetching = true
      fetch('http://jsonplaceholder.typicode.com/users')
        .then(res => res.json()).then(users => {
          this.users = users
          this.fetching = false
        })
    }
  },
  mounted () {
    this.loadUsers()
  }
}
</script>

<style scoped>
  .flex-row {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
  }
</style>
