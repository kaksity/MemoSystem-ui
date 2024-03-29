import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { darkModeKey } from '@/config.js'
import Toast from 'vue-toastification'
// Import the CSS or use your own!
import 'vue-toastification/dist/index.css'
import 'nprogress/nprogress.css'
import './css/main.css'
import { QuillEditor } from '@vueup/vue-quill'
import '@vueup/vue-quill/dist/vue-quill.snow.css'
import Datepicker from '@vuepic/vue-datepicker'
import '@vuepic/vue-datepicker/dist/main.css'

/* Fetch sample data */
store.dispatch('fetch', 'clients')
store.dispatch('fetch', 'history')

/* App style */
store.dispatch('setStyle', 'basic')

/* Dark mode */
if ((!localStorage[darkModeKey] && window.matchMedia('(prefers-color-scheme: dark)').matches) || localStorage[darkModeKey] === '1') {
  store.dispatch('darkMode', true)
}

/* Default title tag */
const defaultDocumentTitle = 'Memo System'

/* Collapse mobile aside menu on route change */
router.beforeEach(to => {
  store.dispatch('asideMobileToggle', false)
  store.dispatch('asideLgToggle', false)
})

router.beforeEach((to, from, next) => {
  if (to.path === '/login') {
    store.dispatch('logout')
    next()
  } else if (to.meta.requiresAuth === true && store.getters.isUserLoggedIn === true) {
    if (to.meta.mustBeAdmin === true && store.getters.isAdmin === false) {
      next({ path: '/dashboard' })
    }
    next()
  } else {
    next({ path: '/login' })
  }
})

router.afterEach((to) => {
  /* Set document title from route meta */
  if (to.meta && to.meta.title) {
    document.title = `${to.meta.title} — ${defaultDocumentTitle}`
  } else {
    document.title = defaultDocumentTitle
  }

  /* Full screen mode */
  store.dispatch('fullScreenToggle', !!to.meta.fullScreen)
})

createApp(App)
  .use(store)
  .use(router)
  .use(Toast)
  .component('QuillEditor', QuillEditor)
  .component('Datepicker', Datepicker)
  .mount('#app')
