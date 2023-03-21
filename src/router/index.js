import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('../views/FrontLayout.vue'),
    children: [
      {
        path: '',
        component: () => import('../views/frontend/HomeView.vue')
      },
      {
        path: 'story',
        component: () => import('../views/frontend/BrandStory.vue')
      },
      {
        path: 'menu',
        name: 'product-list',
        component: () => import('../views/frontend/ProductMenu.vue')
      },
      {
        path: 'detail/:id',
        name: 'product-detail',
        component: () => import('../views/frontend/ProductDescription.vue')
      },
      {
        path: 'stores',
        component: () => import('../views/frontend/StoresInfo.vue')
      },
      {
        path: 'cart',
        component: () => import('../views/frontend/CartView.vue')
      },
      {
        path: 'checkout',
        component: () => import('../views/frontend/CheckoutView.vue')
      },
      {
        path: 'checkOrder/:id',
        name: 'order-detail',
        component: () => import('../views/frontend/CheckOrderView.vue')
      },
      {
        path: 'complete/:id',
        name: 'pay-complete',
        component: () => import('../views/frontend/OrderComplete.vue')
      },
      {
        path: 'login',
        component: () => import('../views/frontend/LoginPage.vue')
      }
    ]
  },
  {
    path: '/admin',
    component: () => import('../views/DashboardLayout.vue'),
    children: [
      {
        path: 'products',
        component: () => import('../views/admin/AdminProducts.vue')
      },
      {
        path: 'orders',
        component: () => import('../views/admin/AdminOrders.vue')
      },
      {
        path: 'coupons',
        component: () => import('../views/admin/AdminCoupons.vue')
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
