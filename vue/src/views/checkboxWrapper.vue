<template>
  <div>
    <div>{{value}}</div>
    <Checkbox v-model="value">
      <img src="../assets/logo.png" alt="" class="img-logo">
    </Checkbox>
  </div>
</template>

<script>
import Checkbox from '../components/checkbox'
export default {
  name: 'checkboxWrapper',
  components: { Checkbox },
  data: function () {
    return {
      value: false
    }
  }
}
</script>

<style scoped>
  .img-logo{
    height: 50px;
  }
</style>
