<template>
    <div id="tree">
        <VJstree klass="customHeight"  :data="$store.state.treeViewValues" ></VJstree>
    
    
    
    <button v-on:click="$store.commit('addMore')">add More</button>
    </div>

</template>
<script>
import VJstree from 'vue-jstree'
export default {
    data(){
return {
  
  someText : "hello",

   }

    },
  components:{
    VJstree
  }
}
</script>
<style>
.customHeight{

height: 300px;
overflow: scroll;
width: 200px;
background-color: #f9f9f9;
}
</style>
