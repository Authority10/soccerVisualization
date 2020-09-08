import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);

const store = new Vuex.Store({
  state:{
    // 控制Players界面的默认teamID
    teamID:4418,
    //初始化时用sessionStore.getItem('token'),这样子刷新页面就无需重新登录
    token: window.sessionStorage.getItem('token'),
    username: ''
  },
  mutations:{
    // changeTeamID(state,payload){
    //  state.teamID = payload
    // }
    LOGIN(state,data){
      state.token = data;
      window.sessionStorage.setItem("token",data)
    },
    LOGOUT(state){
      state.token = null;
      window.sessionStorage.removeItem("token")
    },
    USERNAME(state,data){
      state.username = data;
      window.sessionStorage.setItem("username",data)
    }
  },
  actions:{
    //actions的另外一种写法
    UserLogin({ commit }, data){
      commit('LOGIN', data);
    },
    UserLogout({ commit }){
      commit('LOGOUT');
    },
    UserName({ commit }, data){
      commit('USERNAME', data);
    }
  },
  getters:{

  },
  modules:{

  }
});

export default store


