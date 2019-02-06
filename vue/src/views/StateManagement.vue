<template>
    <div>
      <Main/>
      <Navbar/>
    </div>
</template>

<script>
import Main from '../components/stateManagement/Main'
import Navbar from '../components/stateManagement/Navbar'
export default {
  name: 'StateManagement',
  components: { Navbar, Main }
}
</script>

<style scoped>

</style>
