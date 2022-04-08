import path from 'path'
const resolve = pagePath => path.resolve(process.cwd(), `./${pagePath}`)

// 白名单
const whiteList = [
  {
    path: '/login',
    name: 'Login-pc',
    component: resolve('pages/passport/login.vue'),
    meta: {
      title: '登录',
      icon: ''
    }
  },
  {
    path: '/register',
    name: 'register',
    component: resolve('pages/passport/register.vue'),
    meta: {
      title: '注册',
      icon: 'icon'
    }
  },
  {
    path: '/forget',
    name: 'forget',
    component: resolve('pages/passport/forget.vue'),
    meta: {
      title: '忘记密码',
      icon: 'icon'
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
  },
  {
    path: '/bypassAccount',
    name: '子账号登陆',
    component: resolve('pages/passport/bypassAccount.vue'),
    meta: {
      title: '子账号登陆',
      icon: 'icon'
    }
  }
]

export const $routes = [
  ...whiteList,
  // {
  //   path: '/',
  //   name: 'Home',
  //   component: resolve('pages/home/index.vue'),
  //   meta: {
  //     title: '首页',
  //     icon: 'icon-home'
  //   }
  // },
  // 首页
  {
    path: '/',
    name: 'Home-pc',
    component: resolve('pages/home/index.vue'),
    meta: {
      title: '首页',
      icon: 'icon-home'
    },
    children: [
      {
        path: '/detail',
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
    path: '/cloud-choose',
    name: 'cloud',
    component: resolve('pages/product/cloud/cloud-choose.vue'),
    meta: {
      title: '云服务器',
      icon: 'icon'
    }
  },
  {
    path: '/cloud-price',
    name: 'cloud-p',
    component: resolve('pages/product/cloud/cloud-price.vue'),
    meta: {
      title: '云服务器-选购',
      icon: 'icon'
    }
  },
  {
    path: '/cloud-product',
    name: 'cloud-c',
    component: resolve('pages/product/cloud/cloud-pin.vue'),
    meta: {
      title: '云服务器-产品',
      icon: 'icon'
    }
  },
  {
    path: '/introduce-product',
    name: 'introduce',
    component: resolve('pages/product/introduce/introduce-prod.vue'),
    meta: {
      title: 'CDN产品介绍页',
      icon: 'icon'
    }
  },
  {
    path: '/instant-open',
    name: 'instant',
    component: resolve('pages/product/instant/instant-open.vue'),
    meta: {
      title: 'CDN开通页',
      icon: 'icon'
    }
  },
  {
    path: '/price-detail',
    name: 'price',
    component: resolve('pages/product/pricedetail/price.vue'),
    meta: {
      title: 'CDN详细价格信息',
      icon: 'icon'
    }
  },
  {
    path: '/balancing-ba',
    name: 'balancing',
    component: resolve('pages/product/balancing/balancing-ba.vue'),
    meta: {
      title: '负载均衡',
      icon: 'icon'
    }
  },
  {
    path: '/object-based-use',
    name: 'object',
    component: resolve('pages/product/object-based/object-based-use.vue'),
    meta: {
      title: '对象储存',
      icon: 'icon'
    }
  },
  {
    path: '/object-based-price',
    name: 'object-price',
    component: resolve('pages/product/object-based/object-based-price.vue'),
    meta: {
      title: '对象储存-价格',
      icon: 'icon'
    }
  },
  {
    path: '/Domain-name',
    name: 'domain',
    component: resolve('pages/product/domain/Domain-name.vue'),
    meta: {
      title: '域名注册',
      icon: 'icon'
    }
  },
  {
    path: '/mysql',
    name: 'mysql-pc',
    component: resolve('pages/home/database/mysql/index.vue'),
    meta: {
      title: '数据库',
      icon: 'icon-mysql'
    }
  },

  {
    path: '/mysql/buy',
    name: 'buy-pc',
    component: resolve('pages/home/database/buy/index.vue'),
    meta: {
      title: '数据库购买',
      icon: 'icon-buy'
    }
  },
  {
    path: '/sqlserver',
    name: 'sqlserver-pc',
    component: resolve('pages/home/database/sqlserver/index.vue'),
    meta: {
      title: 'SQLServer',
      icon: 'icon-buy'
    }
  },
  {
    path: '/help',
    name: 'help-pc',
    component: resolve('pages/home/help/index.vue'),
    meta: {
      title: '帮助中心',
      icon: 'icon-help'
    },
    children: [
      {
        path: 'helpInfo',
        name: 'helpInfo-pc',
        component: resolve('pages/home/help/helpInfo.vue'),
        meta: {
          title: '帮助详情',
          icon: 'icon-cloud'
        }
      },
      {
        path: 'classInfo',
        name: 'class-pc',
        component: resolve('pages/home/help/classInfo.vue'),
        meta: {
          title: '帮助中心文档',
          icon: 'icon-cloud'
        }
      },
      {
        path: 'search',
        name: 'search-pc',
        component: resolve('pages/home/help/search.vue'),
        meta: {
          title: '帮助中心搜索',
          icon: 'icon-cloud'
        }
      }
    ]
  },
  {
    path: '/mysql/price',
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
  // 服务保障
  {
    path: '/assurance',
    name: 'assurances',
    component: resolve('pages/assurance/assurance.vue'),
    meta: {
      title: '服务保障',
      icon: 'icon-ass'
    }
  },
  // 解决方案
  {
    path: '/programme/finance',
    name: 'Finance-pc',
    component: resolve('pages/programme/finance.vue'),
    meta: {
      title: '金融解决方案',
      icon: 'icon-home'
    }
  },
  {
    path: '/programme/online',
    name: 'Online-pc',
    component: resolve('pages/programme/online.vue'),
    meta: {
      title: '电商解决方案',
      icon: 'icon-home'
    }
  },
  {
    path: '/programme/move',
    name: 'Move-pc',
    component: resolve('pages/programme/move.vue'),
    meta: {
      title: '移动解决方案',
      icon: 'icon-home'
    }
  },
  {
    path: '/programme/game',
    name: 'Game-pc',
    component: resolve('pages/programme/game.vue'),
    meta: {
      title: '游戏解决方案',
      icon: 'icon-home'
    }
  },
  {
    path: '/programme/website',
    name: 'Website-pc',
    component: resolve('pages/programme/website.vue'),
    meta: {
      title: '网站解决方案',
      icon: 'icon-home'
    }
  },
  // 关于我们
  {
    path: '/about/index',
    name: 'About-pc',
    component: resolve('pages/about/index.vue'),
    meta: {
      title: '关于我们',
      icon: 'icon-home'
    }
  },
  // 代理招募
  {
    path: '/about/recruit',
    name: 'Recruit-pc',
    component: resolve('pages/about/recruit.vue'),
    meta: {
      title: '代理招募',
      icon: 'icon-home'
    }
  },
  {
    path: '/passport/agreement',
    name: 'Agreement',
    component: resolve('pages/passport/agreement.vue'),
    meta: {
      title: '服务协议',
      icon: 'icon-home'
    }
  }
]

const extendRoutes = (routes) => {
  routes.length = 0 // 清除 nuxt 自己生成的路由，这里不要用 空数组 赋值
  routes.push(...$routes)
}

export default { base: '/', extendRoutes }
