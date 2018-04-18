<template>
  <div>
    <nav-bar/>
    <div v-if="fetching">
      FETCHING...
    </div>
    <div v-else-if="user">
      <h1>Detail information:</h1>
      <div>
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
  name: 'UserDetail',
  components: {
    NavBar
  },
  data () {
    return {
      user: null,
      fetching: false
    }
  },
  methods: {
    loadUser (id) {
      this.fetching = true
      fetch(`http://jsonplaceholder.typicode.com/users/${id}`)
        .then(res => res.json()).then(user => {
          this.user = user
          this.fetching = false
        }).catch(err => {
          console.log(err)
          this.fetching = false
        })
    }
  },
  mounted () {
    this.loadUser(this.$route.params.userId)
  }
}
</script>

<style scoped>
</style>
