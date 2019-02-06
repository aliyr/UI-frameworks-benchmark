<template>
  <div>
<!-- <div>    <button v-on:click="addMoreCheckBox">add 500 checkbox</button> -->
<!-- </div>    -->
    <!-- <Checkbox v-for="(element , index) in elements "  v-bind:id="index">
        
         <img src="../assets/logo.png" alt="" class="img-logo">
         {{index}} 
       </Checkbox>  -->
     <Checkbox v-model="value" id="2">
        
       <img src="../assets/logo.png" alt="" class="img-logo"> 
     aaaa
      </Checkbox>
  </div>
</template>

<script>
import Checkbox from '../components/checkbox'
import { method } from 'bluebird';
import { METHODS } from 'http';
export default {
  name: 'checkboxWrapper',
  components: { Checkbox },
  data: function () {
    return {
      value: false,
      value1: false,
      value2: true,
      elements : new Array(0)
    }
  },
  methods:{
    addMoreCheckBox(){
            this.elements = new Array(500)
    }
  }
}
</script>

<style scoped>
  .img-logo{
    height: 50px;
  }
</style>
