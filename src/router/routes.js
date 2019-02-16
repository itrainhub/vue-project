import Home from "../pages/Home"
import Category from "../pages/Category"
import Cart from "../pages/Cart"
import Mine from "../pages/Mine"
import Tabbar from "../components/Tabbar"

const routes = [
  {
    path: '/',
    redirect: '/home',
    meta: {
      isNav: false
    }
  }, {
    path: '/home',
    name: 'home',
    components: {
      main: Home,
      tabbar: Tabbar
    },
    meta: {
      isNav: true,
      navTitle: '首页'
    }
  }, {
    path: '/category',
    name: 'category',
    components: {
      main: Category,
      tabbar: Tabbar
    },
    meta: {
      isNav: true,
      navTitle: '分类'
    }
  }, {
    path: '/cart',
    name: 'cart',
    components: {
      main: Cart,
      tabbar: Tabbar
    },
    meta: {
      isNav: true,
      navTitle: '购物车'
    }
  }, {
    path: '/mine',
    name: 'mine',
    components: {
      main: Mine,
      tabbar: Tabbar
    },
    meta: {
      isNav: true,
      navTitle: '我的'
    }
  }
]

export default routes