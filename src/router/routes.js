import Home from "../pages/Home"
import Category from "../pages/Category"
import Cart from "../pages/Cart"
import Mine from "../pages/Mine"
import Login from "../pages/Login"
import AppHeader from "../components/AppHeader"
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
      header: AppHeader,
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
      header: AppHeader,
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
      header: AppHeader,
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
      header: AppHeader,
      main: Mine,
      tabbar: Tabbar
    },
    meta: {
      isNav: true,
      navTitle: '我的'
    }
  }, {
    path: '/login',
    name: 'login',
    meta: {
      isNav: false
    },
    components: {
      header: AppHeader,
      main: Login
    }
  }
]

export default routes