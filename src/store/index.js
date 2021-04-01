import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // 使用数组进行存储每一个商品的信息
    shoplist : []
  },
  mutations: {
    addCount(state, payload){
      payload.count ++
    },
    addShop(state, payload){
      state.shoplist.push(payload)
    }
  },
  getters: {
  },
  actions: {
    addShop(context, payload){
      // state.shoplist.push(payload)
      // 先进行判断，是否已经存在这个商品了
      // 创建一个临时变量
      return new Promise((resolve, reject) => {
        let oldproduct = null
      for (let i = 0; i < context.state.shoplist.length; i++){
        if(payload.iid == context.state.shoplist[i].iid){
          oldproduct = context.state.shoplist[i]
        }
      }
      // 进行相同商品就加1，没出现过的就push
      if(oldproduct){
        context.commit('addCount', oldproduct)
        resolve('当前商品数量+1')
      }else{
        // 没有的话，就创建一个count计数1
        payload.count = 1
        payload.checked = 1
        context.commit('addShop', payload)
        resolve("商品添加成功")
      }
      })
    }
  },
  modules: {
  }
})
