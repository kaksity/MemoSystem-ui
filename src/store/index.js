import { createStore } from 'vuex'
import axios from 'axios'
import { darkModeKey, styleKey } from '@/config.js'
import * as styles from '@/styles.js'

export default createStore({
  state: {
    /* Styles */
    lightBorderStyle: '',
    lightBgStyle: '',
    asideStyle: '',
    asideBrandStyle: '',
    asideMenuCloseLgStyle: '',
    asideMenuLabelStyle: '',
    asideMenuItemStyle: '',
    asideMenuItemActiveStyle: '',
    asideMenuItemInactiveStyle: '',
    asideSubmenuListStyle: '',
    navBarItemLabelStyle: '',
    navBarItemLabelHoverStyle: '',
    navBarItemLabelActiveColorStyle: '',
    navBarMenuListUpperLabelStyle: '',
    tableTrStyle: '',
    tableTrOddStyle: '',
    overlayStyle: '',

    /* User */
    userName: null || localStorage.getItem('memo-system-full-name'),
    userEmail: null,
    userAvatar: null,
    userRole: null || localStorage.getItem('memo-system-role'),
    userLoginToken: null || localStorage.getItem('memo-system-token'),
    userTokenExpires: null || localStorage.getItem('memo-system-expires'),

    /* fullScreen - fullscreen form layout (e.g. login page) */
    isFullScreen: true,

    /* Aside */
    isAsideMobileExpanded: false,
    isAsideLgActive: false,

    /* Dark mode */
    darkMode: false,

    /* Field focus with ctrl+k (to register only once) */
    isFieldFocusRegistered: false,

    /* Sample data (commonly used) */
    clients: [],
    history: []
  },
  mutations: {
    /* A fit-them-all commit */
    basic (state, payload) {
      state[payload.key] = payload.value
    },

    /* Styles */
    styles (state, payload) {
      for (const key in payload) {
        if (['body', 'html'].includes(key)) {
          continue
        }

        state[`${key}Style`] = payload[key]
      }
    },

    /* User */
    user (state, payload) {
      const { user } = payload
      if (user) {
        state.userName = payload.user.fullName
        state.userRole = payload.user.role.code
      }
      if (payload.token) {
        state.userLoginToken = payload.token
        state.userTokenExpires = payload.expires
      }
    },
    logout (state) {
      state.userName = null
      state.userLoginToken = null
      state.userTokenExpires = null
    }
  },
  getters: {
    user (state) {
      return {
        userName: state.userName,
        userLoginToken: state.userLoginToken,
        userTokenExpires: state.userTokenExpires
      }
    },
    isUserLoggedIn (state) {
      return !((state.userLoginToken === null || state.userTokenExpires === null))
    },
    isAdmin (state) {
      return state.userRole === 'system-admin'
    }
  },
  actions: {
    login ({ commit }, payload) {
      // commit it to the local storage
      const { access_token: accessToken, user } = payload
      console.log(payload)
      localStorage.setItem('memo-system-full-name', user.fullName)
      localStorage.setItem('memo-system-token', JSON.stringify(accessToken))
      commit('user', { token: accessToken, user })
    },
    logout ({ commit }) {
      localStorage.removeItem('memo-system-token')
      commit('logout')
    },
    setStyle ({ commit, dispatch }, payload) {
      const style = styles[payload] ?? styles.basic

      document.body.className = style.body
      document.documentElement.className = style.html

      if (localStorage[styleKey] !== payload) {
        localStorage.setItem(styleKey, payload)
      }

      commit('styles', style)
    },

    asideMobileToggle ({ commit, state }, payload = null) {
      const isShow = payload !== null ? payload : !state.isAsideMobileExpanded

      document.getElementById('app').classList[isShow ? 'add' : 'remove']('ml-60', 'lg:ml-0')

      document.documentElement.classList[isShow ? 'add' : 'remove']('m-clipped')

      commit('basic', {
        key: 'isAsideMobileExpanded',
        value: isShow
      })
    },

    asideLgToggle ({ commit, state }, payload = null) {
      commit('basic', { key: 'isAsideLgActive', value: payload !== null ? payload : !state.isAsideLgActive })
    },

    fullScreenToggle ({ commit, state }, value) {
      commit('basic', { key: 'isFullScreen', value })

      document.documentElement.classList[value ? 'add' : 'remove']('full-screen')
    },

    darkMode ({ commit, state }, payload = null) {
      const value = payload !== null ? payload : !state.darkMode

      document.documentElement.classList[value ? 'add' : 'remove']('dark')

      localStorage.setItem(darkModeKey, value ? '1' : '0')

      commit('basic', {
        key: 'darkMode',
        value
      })
    },

    fetch ({ commit }, payload) {
      axios
        .get(`data-sources/${payload}.json`)
        .then((r) => {
          if (r.data && r.data.data) {
            commit('basic', {
              key: payload,
              value: r.data.data
            })
          }
        })
        .catch(error => {
          alert(error.message)
        })
    }
  },
  modules: {
  }
})
