import path from 'path'
const resolve = pagePath => path.resolve(process.cwd(), `./${pagePath}`)

// 白名单
const whiteList = [
  {
    path: '/login-pc',
    name: 'Login-pc',
    component: resolve('pages/passport/login.vue'),
    meta: {
      title: '登录',
      icon: ''
    }
  },
  {
    path: '/login-mb',
    name: 'Login-mb',
    component: resolve('pages/passport/login-m.vue'),
    meta: {
      title: '登录',
      icon: ''
    }
  }
]

export const $routes = [
  ...whiteList,
  {
    path: '/',
    name: 'Home',
    component: resolve('pages/home/index.vue'),
    meta: {
      title: '首页',
      icon: 'icon-home'
    }
  },
  {
    path: '/pc',
    name: 'Home-pc',
    component: resolve('pages/home/index.vue'),
    meta: {
      title: '首页',
      icon: 'icon-home'
    },
    children: [
      {
        path: '/pc/detail',
        name: 'Home-detail-pc',
        component: resolve('pages/home/detail/detail.vue'),
        meta: {
          title: '首页详情',
          icon: 'icon-cloud'
        }
      }
    ]
  },
  {
    path: '/mb',
    name: 'Home-mb',
    component: resolve('pages/home/index-m.vue'),
    meta: {
      title: '首页',
      icon: 'icon-home'
    },
    children: [
      {
        path: '/mb/detail',
        name: 'Home-detail-mb',
        component: resolve('pages/home/detail/detail-m.vue'),
        meta: {
          title: '首页详情',
          icon: 'icon-cloud'
        }
      }
    ]
  }
]

const extendRoutes = (routes) => {
  routes.length = 0 // 清除 nuxt 自己生成的路由，这里不要用 空数组 赋值
  routes.push(...$routes)
}

export default { base: '/', extendRoutes }
