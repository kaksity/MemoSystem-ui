<script setup>
import { computed, ref } from 'vue'
import { useStore } from 'vuex'
import {
  mdiForwardburger,
  mdiBackburger,
  mdiClose,
  mdiDotsVertical,
  mdiMenu,
  mdiAccount,
  mdiLogout,
  mdiThemeLightDark
} from '@mdi/js'
import NavBarItem from '@/components/NavBarItem.vue'
import NavBarItemLabel from '@/components/NavBarItemLabel.vue'
import NavBarMenu from '@/components/NavBarMenu.vue'
import Divider from '@/components/Divider.vue'
import Icon from '@/components/Icon.vue'
import NavBarSearch from '@/components/NavBarSearch.vue'

const store = useStore()

const lightBorderStyle = computed(() => store.state.lightBorderStyle)

const toggleLightDark = () => {
  store.dispatch('darkMode')
}

const isNavBarVisible = computed(() => !store.state.isFullScreen)

const isAsideMobileExpanded = computed(() => store.state.isAsideMobileExpanded)

const userName = computed(() => store.state.userName)

const menuToggleMobileIcon = computed(() => isAsideMobileExpanded.value ? mdiBackburger : mdiForwardburger)

const menuToggleMobile = () => store.dispatch('asideMobileToggle')

const isMenuNavBarActive = ref(false)

const menuNavBarToggleIcon = computed(() => isMenuNavBarActive.value ? mdiClose : mdiDotsVertical)

const menuNavBarToggle = () => {
  isMenuNavBarActive.value = !isMenuNavBarActive.value
}

const menuOpenLg = () => {
  store.dispatch('asideLgToggle', true)
}
</script>

<template>
  <nav
    v-show="isNavBarVisible"
    class="top-0 left-0 right-0 fixed flex bg-white h-14 border-b z-30 w-screen
    transition-position xl:pl-60 lg:w-auto lg:items-stretch dark:bg-gray-900 dark:border-gray-800"
    :class="[lightBorderStyle, {'ml-60 lg:ml-0':isAsideMobileExpanded}]"
  >
    <div class="flex-1 items-stretch flex h-14">
      <nav-bar-item
        type="flex lg:hidden"
        @click.prevent="menuToggleMobile"
      >
        <icon
          :path="menuToggleMobileIcon"
          size="24"
        />
      </nav-bar-item>
      <nav-bar-item
        type="hidden lg:flex xl:hidden"
        @click.prevent="menuOpenLg"
      >
        <icon
          :path="mdiMenu"
          size="24"
        />
      </nav-bar-item>
      <nav-bar-item>
        <nav-bar-search />
      </nav-bar-item>
    </div>
    <div class="flex-none items-stretch flex h-14 lg:hidden">
      <nav-bar-item @click.prevent="menuNavBarToggle">
        <icon
          :path="menuNavBarToggleIcon"
          size="24"
        />
      </nav-bar-item>
    </div>
    <div
      class="absolute w-screen top-14 left-0 bg-white shadow
        lg:w-auto lg:items-stretch lg:flex lg:grow lg:static lg:border-b-0 lg:overflow-visible lg:shadow-none dark:bg-gray-900"
      :class="[isMenuNavBarActive ? 'block' : 'hidden']"
    >
      <div
        class="max-h-screen-menu overflow-y-auto lg:overflow-visible lg:flex lg:items-stretch lg:justify-end lg:ml-auto"
      >
        <nav-bar-item
          has-divider
          is-desktop-icon-only
          @click.prevent="toggleLightDark"
        >
          <nav-bar-item-label
            :icon="mdiThemeLightDark"
            label="Light/Dark"
            is-desktop-icon-only
          />
        </nav-bar-item>
        <nav-bar-menu has-divider>
          <nav-bar-item-label :label="userName" />

          <template #dropdown>
            <nav-bar-item to="/settings/change-password">
              <nav-bar-item-label
                :icon="mdiAccount"
                label="Change Password"
              />
            </nav-bar-item>
            <divider nav-bar />
            <nav-bar-item to="/login">
              <nav-bar-item-label
                :icon="mdiLogout"
                label="Log Out"
              />
            </nav-bar-item>
          </template>
        </nav-bar-menu>
      </div>
    </div>
  </nav>
</template>
