<template>
  <div>
    <input type="text" v-model="userValue" v-on:keyup.enter="sendUserInfo">
  </div>
</template>

<script>
export default {
  name: 'Navbar',
  data: function () {
    return {
      userValue: ''
    }
  },
  methods: {
    sendUserInfo () {
      this.$store.commit('addUser', this.userValue)
    }
  },
  watch: {
    userValue: function () {
      this.$store.commit('updateDrafterUserInfo', this.userValue)
    }
  }
}
</script>

<style scoped>

</style>
