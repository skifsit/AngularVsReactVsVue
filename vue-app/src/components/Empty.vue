<template>
  <div>
    <nav-bar />
    Empty
    <router-view/>
  </div>
</template>

<script>
import NavBar from './NavBar'

export default {
  name: 'Empty',
  components: {
    NavBar
  }
}
</script>

<style scoped>

</style>
