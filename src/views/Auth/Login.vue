<script setup>
import { reactive } from 'vue'
import { useRouter } from 'vue-router'
import { mdiAccount, mdiAsterisk } from '@mdi/js'
import FullScreenSection from '@/components/FullScreenSection.vue'
import CardComponent from '@/components/CardComponent.vue'
import CheckRadioPicker from '@/components/CheckRadioPicker.vue'
import Field from '@/components/Field.vue'
import Control from '@/components/Control.vue'
import Divider from '@/components/Divider.vue'
import JbButton from '@/components/JbButton.vue'
import { useStore } from 'vuex'
import JbButtons from '@/components/JbButtons.vue'
import Axios from '@/api'
import { useToast } from 'vue-toastification'

const form = reactive({
  username: '',
  password: '',
  remember: ['remember']
})

const toastMessage = useToast()
const router = useRouter()
const store = useStore()
const error = reactive({
  username: {
    message: ''
  },
  password: {
    message: ''
  }
})

function clearError () {
  error.username.message = ''
  error.password.message = ''
}
const submit = () => {
  clearError()
  if (form.username === '' || form.password === '') {
    error.username.message = 'Username is required'
    error.password.message = 'Password is required'
    return
  } else if (form.password.length < 8) {
    toastMessage.error('Invalid login credentials')
    return
  }
  Axios.post('/auth/login', form).then((response) => {
    console.log(response.data)
    store.dispatch('login', response.data)
    toastMessage.success(response.message)
    router.push('/dashboard')
  }).catch((error) => {
    toastMessage.error(error.message)
  }).finally(() => {
  })
}
</script>

<template>
  <full-screen-section
    v-slot="{ cardClass, cardRounded }"
    bg="login"
  >
    <card-component
      :class="cardClass"
      :rounded="cardRounded"
      form
      @submit.prevent="submit"
    >
      <field
        label="Login"
        :help="error.username.message"
      >
        <control
          v-model="form.username"
          :icon="mdiAccount"
          name="login"
          autocomplete="username"
        />
      </field>

      <field
        label="Password"
        :help="error.password.message"
      >
        <control
          v-model="form.password"
          :icon="mdiAsterisk"
          type="password"
          name="password"
          autocomplete="current-password"
        />
      </field>

      <check-radio-picker
        v-model="form.remember"
        name="remember"
        :options="{ remember: 'Remember' }"
      />

      <divider />

      <jb-buttons>
        <jb-button
          type="submit"
          color="info"
          label="Login"
        />
        <jb-button
          to="/dashboard"
          color="info"
          outline
          label="Back"
        />
      </jb-buttons>
    </card-component>
  </full-screen-section>
</template>
