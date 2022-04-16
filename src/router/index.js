import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    // Document title tag
    // We combine it with defaultDocumentTitle set in `src/main.js` on router.afterEach hook
    meta: {
      title: 'Dashboard',
      requiresAuth: true
    },
    path: '/dashboard',
    name: 'dashboard',
    component: () => import(/* webpackChunkName: "forms" */ '@/views/Dashboard/Index.vue')
  },
  {
    meta: {
      title: 'Files',
      requiresAuth: true
    },
    path: '/files',
    name: 'files',
    component: () => import(/* webpackChunkName: "forms" */ '@/views/File/Index.vue')
  },
  {
    meta: {
      title: 'Upload Files',
      requiresAuth: true
    },
    path: '/files/:fileId/uploads',
    name: 'file-uploads',
    component: () => import(/* webpackChunkName: "forms" */ '@/views/File/UploadFile.vue')
  },
  {
    meta: {
      title: 'Login',
      fullScreen: true
    },
    path: '/login',
    name: 'login',
    component: () => import(/* webpackChunkName: "login" */ '@/views/Auth/Login.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior (to, from, savedPosition) {
    return savedPosition || { top: 0 }
  }
})

export default router
