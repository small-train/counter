import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);
const store = new Vuex.Store({
    state: {
        firstNum: 0,
        secondNum: 0,
        result: 0,
    },
    mutations: {
        clearNums: function (state) {
            state.firstNum = 0
            state.secondNum = 0;
            state.result = 0;
            alert(222)
        }
    },
    actions:{
        cle: function(){
            alert('cle');
        }
    }
})
export default store;
