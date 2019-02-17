<template>
    <div>
      login form
      <br>
      <input type="text" v-model="userInput">
      <button @click="submitUser">submit</button>
      <div id="error" style="color: red;" v-if="errorMessage">{{errorMessage}}</div>
    </div>
</template>

<script>
export default {
  name: 'LoginForm',
  data: function () {
    return {
      userInput: 'aaa',
      errorMessage: ''
    }
  },
  methods: {
    submitUser () {
      let userId = this.$store.state.users.find(p => p.name === this.userInput)
      if (userId !== undefined) {
        this.$router.push({ name: 'profile', params: { id: userId.id } })
      } else {
        this.errorMessage = 'user not found'
      }
    },
    addUser (name) {
      this.$store.commit('addUser', name)
    }
  }
}
</script>

<style scoped>

</style>
