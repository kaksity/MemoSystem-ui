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
    userName: null || localStorage.getItem('memo-system-fullname'),
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
      if (payload.name) {
        state.userName = payload.name
      }
      if (payload.role) {
        state.userRole = payload.role
      }
      if (payload.email) {
        state.userEmail = payload.email
      }
      if (payload.avatar) {
        state.userAvatar = payload.avatar
      }
      if (payload.token) {
        state.userLoginToken = payload.token
        state.userTokenExpires = payload.expires
      }
    },
    logout (state) {
      state.userName = null
      state.userRole = null
      state.userEmail = null
      state.userAvatar = null
      state.userLoginToken = null
      state.userTokenExpires = null
    }
  },
  getters: {
    user (state) {
      return {
        userName: state.userName,
        userEmail: state.userEmail,
        userAvatar: state.userAvatar,
        userLoginToken: state.userLoginToken,
        userTokenExpires: state.userTokenExpires
      }
    },
    isUserLoggedIn (state) {
      if (state.userLoginToken === null || state.userTokenExpires === null) {
        return false
      }
      return true
    },
    isAdmin (state) {
      if (state.userRole !== 'admin') {
        return false
      }
      return true
    }
  },
  actions: {
    login ({ commit }, payload) {
      // commit it to the localstorage
      const { access_token: accessToken } = payload
      localStorage.setItem('memo-system-token', JSON.stringify(accessToken))
      commit('user', { token: accessToken })
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
