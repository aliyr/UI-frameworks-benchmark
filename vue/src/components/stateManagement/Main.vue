<template>
  <div>
    <div v-for="(user, index) in $store.state.users" @click="$store.commit('updateUser',index,)">{{user.name}}</div>
  </div>
</template>

<script>
export default {
  name: 'Main'
}
</script>

<style scoped>

</style>
