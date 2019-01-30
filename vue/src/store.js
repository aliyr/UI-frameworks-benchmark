import Vue from 'vue'
import Vuex from 'vuex'
import { fromCallback } from 'bluebird';
import { stat } from 'fs';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
treeViewValues : [
 
],
  },
  mutations: {
    addMore(state){
    
if(state.treeViewValues.length <499){


        for(let i = 1 ; i<=500; i++){
          state.treeViewValues.push({
          text : 'parent number ' + i ,
          })
        }
      }
    }
  },
  actions: {

  }
})
