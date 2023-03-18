import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('../views/FrontLayout.vue'),
    children: [
      {
        path: '',
        component: () => import('../views/HomeView.vue')
      },
      {
        path: 'story',
        component: () => import('../views/BrandStory.vue')
      },
      {
        path: 'menu',
        name: 'product-list',
        component: () => import('../views/ProductMenu.vue')
      },
      {
        path: 'detail/:id',
        name: 'product-detail',
        component: () => import('../views/ProductDescription.vue')
      },
      {
        path: 'stores',
        component: () => import('../views/StoresInfo.vue')
      },
      {
        path: 'cart',
        component: () => import('../views/CartView.vue')
      },
      {
        path: 'checkout',
        component: () => import('../views/CheckoutView.vue')
      },
      {
        path: 'checkOrder/:id',
        name: 'order-detail',
        component: () => import('../views/CheckOrderView.vue')
      },
      {
        path: 'complete/:id',
        name: 'pay-complete',
        component: () => import('../views/OrderComplete.vue')
      }
    ]
  },
  {
    path: '/:pathMatch(.*)*',
    name: '404',
    component: () => import('../views/NotFound.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  linkActiveClass: 'active',
  scrollBehavior (to, from, savedPosition) {
    // always scroll to top
    return {
      top: 0
    }
  },
  routes
})

export default router
