import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);

const store = new Vuex.Store({
  state:{
    // 控制Players界面的默认teamID
    teamID:4418
  },
  mutations:{
    changeTeamID(state,payload){
      state.teamID = payload
    }
  },
  actions:{

  },
  getters:{

  },
  modules:{

  }
});

export default store


