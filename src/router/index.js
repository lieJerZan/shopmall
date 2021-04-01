import Vue from 'vue'
import Router from 'vue-router'
// import Home from '../components/home.vue'
// import Sort from '../components/sort.vue'
// import Shop from '../components/shop.vue'
// import Profile from '../components/profile.vue'
const Home = () => import('../views/home/home.vue')
const Sort = () => import('../views/sort/sort.vue')
const Shop = () => import('../views/shop/shop.vue')
const Profile = () => import('../views/profile/profile.vue')
const Detail = () => import('../views/detail/detail.vue')

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path : '',
      redirect : '/home'
    },
    {
      path: '/home',
      component: Home,
      meta : {
        title : '首页'
      }
    },
    {
      path: '/sort',
      component: Sort,
      meta : {
        title : '分类'
      }
    },
    {
      path: '/shop',
      component: Shop,
      meta : {
        title : '购物车'
      }
    },
    {
      path: '/profile',
      component: Profile,
      meta : {
        title : '个人中心'
      }
    },
    {
      path: '/detail/:iid',
      component: Detail,
      meta : {
        title : '商品详情'
      },
    }
  ],
  mode : 'history'
})

router.beforeEach((to, from, next) => {
  // to and from are both route objects. must call `next`.
  document.title = to.matched[0].meta.title
  // console.log(to);
  next()
})
export default router