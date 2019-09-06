import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

// 标签栏
const Home = (resolve) => {
  import('@/components/tabbars/home').then((module) => {
    resolve(module)
  })
}
const Classify = (resolve) => {
  import('@/components/tabbars/classify').then((module) => {
    resolve(module)
  })
}
const Cashier = (resolve) => {
  import('@/components/tabbars/cashier').then((module) => {
    resolve(module)
  })
}
const Cart = (resolve) => {
  import('@/components/tabbars/cart').then((module) => {
    resolve(module)
  })
}
const My = (resolve) => {
  import('@/components/tabbars/my').then((module) => {
    resolve(module)
  })
}

// 业务升级
const UserLevel = (resolve) => {
  import('@/components/member/userLevel').then((module) => {
    resolve(module)
  })
}


// 认证登录
const Login = (resolve) => {
  import('@/components/login/login').then((module) => {
    resolve(module)
  })
}

// 会员中心
const Message = (resolve) => {
  import('@/components/member/message').then((module) => {
    resolve(module)
  })
}
const Wallet = (resolve) => {
  import('@/components/member/wallet').then((module) => {
    resolve(module)
  })
}
const User = (resolve) => {
  import('@/components/member/user').then((module) => {
    resolve(module)
  })
}
const Password = (resolve) => {
  import('@/components/member/password').then((module) => {
    resolve(module)
  })
}
const Ptp = (resolve) => {
  import('@/components/member/ptp').then((module) => {
    resolve(module)
  })
}
const Instructions = (resolve) => {
  import('@/components/member/instructions').then((module) => {
    resolve(module)
  })
}
const Service = (resolve) => {
  import('@/components/member/service').then((module) => {
    resolve(module)
  })
}
const About = (resolve) => {
  import('@/components/member/about').then((module) => {
    resolve(module)
  })
}

// 会员中心二级
const MessagePage = (resolve) => {
  import('@/components/member/messagePage').then((module) => {
    resolve(module)
  })
}
const UserUpdate = (resolve) => {
  import('@/components/member/userUpdate').then((module) => {
    resolve(module)
  })
}
const AddCard = (resolve) => {
  import('@/components/member/addCard').then((module) => {
    resolve(module)
  })
}
const RealName = (resolve) => {
  import('@/components/member/realName').then((module) => {
    resolve(module)
  })
}
const ChangePassword = (resolve) => {
  import('@/components/member/changePassword').then((module) => {
    resolve(module)
  })
}
const ChangePayPassword = (resolve) => {
  import('@/components/member/changePayPassword').then((module) => {
    resolve(module)
  })
}
const ChangePayPasswordSec = (resolve) => {
  import('@/components/member/changePayPasswordSec').then((module) => {
    resolve(module)
  })
}
const SetGesturePassword = (resolve) => {
  import('@/components/member/setGesturePassword').then((module) => {
    resolve(module)
  })
}
// 我的钱包
const Deposit = (resolve) => {
  import('@/components/wallet/deposit').then((module) => {
    resolve(module)
  })
}
const Proceeds = (resolve) => {
  import('@/components/wallet/proceeds').then((module) => {
    resolve(module)
  })
}
const Promote = (resolve) => {
  import('@/components/wallet/promote').then((module) => {
    resolve(module)
  })
}
const Withdrawal = (resolve) => {
  import('@/components/wallet/withdrawal').then((module) => {
    resolve(module)
  })
}
const Card = (resolve) => {
  import('@/components/wallet/card').then((module) => {
    resolve(module)
  })
}
// 我的钱包二级
const CardSec = (resolve) => {
  import('@/components/wallet/cardSec').then((module) => {
    resolve(module)
  })
}
// 支付
const Pay = (resolve) => {
  import('@/components/pay/pay').then((module) => {
    resolve(module)
  })
}
const Payfor = (resolve) => {
  import('@/components/pay/payfor').then((module) => {
    resolve(module)
  })
}

// 路由导航
const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/classify',
    name: 'Classify',
    component: Classify
  },
  {
    path: '/cashier',
    name: 'Cashier',
    component: Cashier,
    meta: {
      title: "收银台"
    }
  },
  {
    path: '/cart',
    name: 'Cart',
    component: Cart
  },
  {
    path: '/my',
    name: 'My',
    component: My
  },
  {
    path: '/userLevel',
    name: 'UserLevel',
    component: UserLevel,
    meta: {
      title: "用户升级"
    }
  },
  {
    path: '/login',
    redirect: '/realname'
  },
  {
    path: '/message/:id',
    name: 'Message',
    component: Message,
    meta: {
      title: "信息中心"
    }
  },
  {
    path: '/messagepage',
    name: 'MessagePage',
    component: MessagePage,
    meta: {
      title: "信息中心"
    }
  },
  {
    path: '/userupdate',
    name: 'UserUpdate',
    component: UserUpdate,
    meta: {
      title: "身份证上传"
    }
  },
  {
    path: '/addCard',
    name: 'AddCard',
    component: AddCard,
    meta: {
      title: "信用卡认证"
    }
  },
  {
    path: '/realname',
    name: 'RealName',
    component: RealName,
    meta: {
      title: "实名认证"
    }
  },
  {
    path: '/changepassword',
    name: 'ChangePassword',
    component: ChangePassword,
    meta: {
      title: "修改登录密码"
    }
  },
  {
    path: '/changepaypassword',
    name: 'ChangePayPassword',
    component: ChangePayPassword,
    meta: {
      title: "修改支付密码"
    }
  },
  {
    path: '/changepaypasswordsec',
    name: 'ChangePayPasswordSec',
    component: ChangePayPasswordSec,
    meta: {
      title: "修改支付密码"
    }
  },
  {
    path: '/setgesturepassword',
    name: 'SetGesturePassword',
    component: SetGesturePassword,
    meta: {
      title: "手势密码"
    }
  },
  {
    path: '/wallet',
    name: 'Wallet',
    component: Wallet,
    meta: {
      title: "我的钱包"
    }
  },
  {
    path: '/user',
    name: 'User',
    component: User,
    meta: {
      title: "我的用户"
    }
  },
  {
    path: '/password',
    name: 'Password',
    component: Password,
    meta: {
      title: "密码设置"
    }
  },
  {
    path: '/ptp',
    name: 'Ptp',
    component: Ptp,
    meta: {
      title: "推广赚钱"
    }
  },
  {
    path: '/Instructions',
    name: 'Instructions',
    component: Instructions,
    meta: {
      title: "使用说明"
    }
  },
  {
    path: '/service',
    name: 'Service',
    component: Service,
    meta: {
      title: "联系客服"
    }
  },
  {
    path: '/about',
    name: 'About',
    component: About,
    meta: {
      title: "关于立德信"
    }
  },
  {
    path: '/deposit',
    name: 'Deposit',
    component: Deposit,
    meta: {
      title: "申请提现"
    }
  },
  {
    path: '/proceeds',
    name: 'Proceeds',
    component: Proceeds,
    meta: {
      title: "我的钱包"
    }
  },
  {
    path: '/promote',
    redirect: '/ptp',
  },
  {
    path: '/withdrawal',
    name: 'Withdrawal',
    component: Withdrawal,
    meta: {
      title: "我的钱包"
    }
  },
  {
    path: '/card',
    name: 'Card',
    component: Card,
    meta: {
      title: "我的银行卡"
    }
  },
  {
    path: '/cardsec',
    name: 'CardSec',
    component: CardSec,
    meta: {
      title: "我的银行卡"
    }
  },
  {
    path: '/pay',
    name: 'Pay',
    component: Pay,
    meta: {
      title: "银联快捷支付"
    }
  },
  {
    path: '/payfor',
    name: 'Payfor',
    component: Payfor,
    meta: {
      title: "银联快捷支付"
    }
  }
]

// 实例化路由
export default new Router({
  scorllBehavior: () => ({
    y: 0
  }),
  routes: routes
})
