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
      }
    ]
  }

]

const router = createRouter({
  history: createWebHashHistory(),
  linkActiveClass: 'active',
  scrollBehavior (to, from, savedPosition) {
    // always scroll to top
    return { top: 0 }
  },
  routes
})

export default router
