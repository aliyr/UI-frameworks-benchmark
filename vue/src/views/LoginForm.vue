<template>
    <div>
      login form
      <br>
      <input type="text" v-model="userInput">
      <button @click="submitUser">submit</button>
      <div style="color: red;">{{errorMessage}}</div>
    </div>
</template>

<script>
export default {
  name: 'LoginForm',
  data: function () {
    return {
      userInput: 'gholi',
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
    }
  }
}
</script>

<style scoped>

</style>
