<template>
    <div id="tree">
        <VJstree :data=$store.state.treeViewValues ></VJstree>
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
