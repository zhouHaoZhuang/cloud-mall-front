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
  // 首页
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
    path: '/pc/mysql',
    name: 'mysql-pc',
    component: resolve('pages/home/database/mysql/index.vue'),
    meta: {
      title: '数据库',
      icon: 'icon-mysql'
    },
  },
      
  {
    path: '/pc/mysql/buy.html',
    name: 'buy-pc',
    component: resolve('pages/home/database/buy/index.vue'),
    meta: {
      title: '数据库购买',
      icon: 'icon-buy'
    }
  },
  {
    path: '/pc/mysql/price.html',
    name: 'price-pc',
    component: resolve('pages/home/database/price/index.vue'),
    meta: {
      title: '数据库价格',
      icon: 'icon-price'
    }
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
  },
  // 解决方案
  {
    path: '/pc/programme/finance',
    name: 'Finance-pc',
    component: resolve('pages/programme/finance.vue'),
    meta: {
      title: '金融解决方案',
      icon: 'icon-home'
    }
  },
  {
    path: '/pc/programme/online',
    name: 'Online-pc',
    component: resolve('pages/programme/online.vue'),
    meta: {
      title: '电商解决方案',
      icon: 'icon-home'
    }
  },
  {
    path: '/pc/programme/move',
    name: 'Move-pc',
    component: resolve('pages/programme/move.vue'),
    meta: {
      title: '移动解决方案',
      icon: 'icon-home'
    }
  },
  {
    path: '/pc/programme/game',
    name: 'Game-pc',
    component: resolve('pages/programme/game.vue'),
    meta: {
      title: '游戏解决方案',
      icon: 'icon-home'
    }
  },
  {
    path: '/pc/programme/website',
    name: 'Website-pc',
    component: resolve('pages/programme/website.vue'),
    meta: {
      title: '网站解决方案',
      icon: 'icon-home'
    }
  },
  // 关于我们
  {
    path: '/pc/about/index',
    name: 'About-pc',
    component: resolve('pages/about/index.vue'),
    meta: {
      title: '关于我们',
      icon: 'icon-home'
    }
  },
  // 代理招募
  {
    path: '/pc/about/recruit',
    name: 'Recruit-pc',
    component: resolve('pages/about/recruit.vue'),
    meta: {
      title: '代理招募',
      icon: 'icon-home'
    }
  }
]

const extendRoutes = (routes) => {
  routes.length = 0 // 清除 nuxt 自己生成的路由，这里不要用 空数组 赋值
  routes.push(...$routes)
}

export default { base: '/', extendRoutes }
