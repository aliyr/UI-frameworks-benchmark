<template>
  <div>
    
  <div>
    <div>{{value}}</div>
      <Checkbox v-model="value">
        <img src="../assets/logo.png" alt="" class="img-logo">
      </Checkbox>
  </div>

    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet aut quos tempora illo earum laborum rerum, dolore alias maiores cum fuga quod asperiores necessitatibus ea odio ducimus. Repellendus, perspiciatis quaerat?</p>
       <div>
         <div>{{value1}}</div>
        <Checkbox v-model="value1">
          <img src="../assets/logo.png" alt="" class="img-logo">
        </Checkbox>
       </div>
<div>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet aut quos tempora illo earum laborum rerum, dolore alias maiores cum fuga quod asperiores necessitatibus ea odio ducimus. Repellendus, perspiciatis quaerat?</p>
       <Checkbox v-model="value2">
        <img src="../assets/logo.png" alt="" class="img-logo">
      </Checkbox>
</div>
     
  </div>
</template>

<script>
import Checkbox from '../components/checkbox'
export default {
  name: 'checkboxWrapper',
  components: { Checkbox },
  data: function () {
    return {
      value: false,
            value1: false,
                        value2: true


    }
  }
}
</script>

<style scoped>
  .img-logo{
    height: 50px;
  }
</style>
