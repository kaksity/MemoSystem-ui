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
    path: '/file/view',
    name: 'file-view',
    component: () => import(/* webpackChunkName: "forms" */ '@/views/File/ListFile.vue')
  },
  {
    meta: {
      title: 'Upload Files',
      requiresAuth: true
    },
    path: '/file/:fileId/upload',
    name: 'file-upload',
    component: () => import(/* webpackChunkName: "forms" */ '@/views/File/UploadFile.vue')
  },
  {
    meta: {
      title: 'View Files',
      requiresAuth: true
    },
    path: '/file/:fileId/view',
    name: 'file-view-details',
    component: () => import(/* webpackChunkName: "forms" */ '@/views/File/FileDetails.vue')
  },
  {
    meta: {
      title: 'Create File',
      requiresAuth: true
    },
    path: '/file/create',
    name: 'file-create',
    component: () => import('@/views/File/CreateFile.vue')
  },
  {
    meta: {
      title: 'Create Inventory',
      requiresAuth: true
    },
    path: '/inventory/create',
    name: 'inventory-create',
    component: () => import('@/views/Inventory/CreateInventory.vue')
  },
  {
    meta: {
      title: 'View Inventory',
      requiresAuth: true
    },
    path: '/inventory/view',
    name: 'inventory-view',
    component: () => import(/* webpackChunkName: "forms" */ '@/views/Inventory/ListInventory.vue')
  },
  {
    meta: {
      title: 'View Inventory',
      requiresAuth: true
    },
    path: '/inventory/:inventoryId/view',
    name: 'inventory-view-details',
    component: () => import(/* webpackChunkName: "forms" */ '@/views/Inventory/InventoryDetails.vue')
  },
  {
    meta: {
      title: 'Create Memo',
      requiresAuth: true
    },
    path: '/memo/create',
    name: 'memo-create',
    component: () => import('@/views/Memo/CreateMemo.vue')
  },
  {
    meta: {
      title: 'View Self Memo',
      requiresAuth: true
    },
    path: '/memo/view/self',
    name: 'memo-view-self',
    component: () => import('@/views/Memo/ListOfSelfMemo.vue')
  },
  {
    meta: {
      title: 'View Mentioned Memo',
      requiresAuth: true
    },
    path: '/memo/view/mentioned',
    name: 'memo-view-mentioned',
    component: () => import('@/views/Memo/ListOfMentionedMemo.vue')
  },
  {
    meta: {
      title: 'View Memo Details',
      requiresAuth: true
    },
    path: '/memo/:memoId/view',
    name: 'memo-view-details',
    component: () => import('@/views/Memo/MemoDetails.vue')
  },
  {
    meta: {
      title: 'View Memo Attachments(Self)',
      requiresAuth: true
    },
    path: '/memo/:memoId/attachments/self',
    name: 'memo-attachment-self',
    component: () => import('@/views/Memo/SelfMemoAttachments.vue')
  },
  {
    meta: {
      title: 'View Memo Attachments(Mentioned)',
      requiresAuth: true
    },
    path: '/memo/:memoId/attachments/mentioned',
    name: 'memo-attachment-mentioned',
    component: () => import('@/views/Memo/MentionedMemoAttachments.vue')
  },
  {
    meta: {
      title: 'View Memo Comments',
      requiresAuth: true
    },
    path: '/memo/:memoId/comments',
    name: 'memo-view-comments',
    component: () => import('@/views/Memo/MemoComments.vue')
  },
  {
    meta: {
      title: 'Edit Memo Details',
      requiresAuth: true
    },
    path: '/memo/:memoId/edit',
    name: 'memo-view-edit',
    component: () => import('@/views/Memo/EditMemo.vue')
  },
  {
    meta: {
      title: 'Create Council Memo',
      requiresAuth: true
    },
    path: '/council/memo/create',
    name: 'council-memo-create',
    component: () => import('@/views/CouncilMemo/CreateMemo.vue')
  },
  {
    meta: {
      title: 'View Self Council Memo',
      requiresAuth: true
    },
    path: '/council/memo/view/self',
    name: 'council-memo-view-self',
    component: () => import('@/views/CouncilMemo/ListOfSelfMemo.vue')
  },
  {
    meta: {
      title: 'View Mentioned Council Memo',
      requiresAuth: true
    },
    path: '/memo/view/mentioned',
    name: 'memo-view-mentioned',
    component: () => import('@/views/CouncilMemo/ListOfMentionedMemo.vue')
  },
  {
    meta: {
      title: 'View Council Memo Details',
      requiresAuth: true
    },
    path: '/council/memo/:memoId/view',
    name: 'council-memo-view-details',
    component: () => import('@/views/CouncilMemo/MemoDetails.vue')
  },
  {
    meta: {
      title: 'View Council Memo Attachments(Self)',
      requiresAuth: true
    },
    path: '/council/memo/:memoId/attachments/self',
    name: 'council-memo-attachment-self',
    component: () => import('@/views/CouncilMemo/SelfMemoAttachments.vue')
  },
  {
    meta: {
      title: 'View Council Memo Attachments(Mentioned)',
      requiresAuth: true
    },
    path: '/council/memo/:memoId/attachments/mentioned',
    name: 'council-memo-attachment-mentioned',
    component: () => import('@/views/CouncilMemo/MentionedMemoAttachments.vue')
  },
  {
    meta: {
      title: 'View Memo Comments',
      requiresAuth: true
    },
    path: '/council/memo/:memoId/comments',
    name: '/council/memo-view-comments',
    component: () => import('@/views/CouncilMemo/MemoComments.vue')
  },
  {
    meta: {
      title: 'Edit Memo Details',
      requiresAuth: true
    },
    path: '/council/memo/:memoId/edit',
    name: 'council-memo-view-edit',
    component: () => import('@/views/CouncilMemo/EditMemo.vue')
  },
  {
    meta: {
      title: 'Create Message',
      requiresAuth: true
    },
    path: '/message/create',
    name: 'message-create',
    component: () => import('@/views/Message/CreateMessage.vue')
  },
  {
    meta: {
      title: 'View Self Messages',
      requiresAuth: true
    },
    path: '/message/view/self',
    name: 'message-view-self',
    component: () => import('@/views/Message/ListOfSelfMessage.vue')
  },
  {
    meta: {
      title: 'View Message Details',
      requiresAuth: true
    },
    path: '/message/:messageId/view',
    name: 'message-view-details',
    component: () => import('@/views/Message/MessageDetails.vue')
  },
  {
    meta: {
      title: 'View Mentioned Messages',
      requiresAuth: true
    },
    path: '/message/view/mentioned',
    name: 'message-view-mentioned',
    component: () => import('@/views/Message/ListOfMentionedMessage.vue')
  },
  {
    meta: {
      title: 'Create User',
      requiresAuth: true,
      mustBeAdmin: true
    },
    path: '/user/create',
    name: 'user-create',
    component: () => import('@/views/User/CreateUser.vue')
  },
  {
    meta: {
      title: 'Change Password',
      requiresAuth: true,
      mustBeAdmin: true
    },
    path: '/settings/change-password',
    name: 'settings-change-password',
    component: () => import('@/views/Settings/ChangePassword.vue')
  },
  {
    meta: {
      title: 'View Users',
      requiresAuth: true,
      mustBeAdmin: true
    },
    path: '/user/view',
    name: 'user-view',
    component: () => import('@/views/User/Index.vue')
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
