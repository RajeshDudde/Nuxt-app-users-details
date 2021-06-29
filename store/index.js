import Vuex from "vuex";
import axios from "axios";
const createStore = () => {
  return new Vuex.Store({
    state: {
      dataArray: [],
      data:[],
       id:0
    },
    mutations: {
      info(state, data) {
        state.dataArray = data;
      },
      adddata(state,data){
       state.data[data.id]=data;
       state.id=data.id
      }
    },
    actions: {
        async nuxtServerInit(vuexContext, context) {
        return   await axios.get(`https://jsonplaceholder.typicode.com/users`)
               .then(res =>{
                   const info=[]
                   for( const d in res.data)
                   {
                       info.push(res.data[d])
                     
                   }
                   vuexContext.commit("info",info)
               })
               .catch(e=> console.log(e))
      },
      info(vuexContext,info) {
        vuexContext.commit("info",info);
      },
      adddata(vuexContext,data)
      {
        vuexContext.commit("adddata",data);
      
      }
    },
    getters: {
      load(state) {
        return state.dataArray;
      },
      display(state){
        return  state.data[state.id]
      }
    }
    
  });
};

export default createStore;
