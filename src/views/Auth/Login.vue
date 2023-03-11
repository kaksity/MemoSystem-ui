<script setup>
import { reactive, ref } from 'vue'
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
import httpClient from '@/api'
import { groupErrors } from '@/helpers'
import { useToast } from 'vue-toastification'

const form = reactive({
  username: '',
  password: '',
  remember: ['remember']
})

const toastMessage = useToast()
const router = useRouter()
const store = useStore()
const errors = ref({})

function clearError () {
  errors.value = {}
}
const submit = () => {
  clearError()

  httpClient.post('/auth/login', form).then(({ data }) => {
    store.dispatch('login', data)
    toastMessage.success('User Logged In')
    router.push('/dashboard')
  }).catch((error) => {
    if (error.errors) {
      errors.value = groupErrors(error.errors, 'field')
    } else {
      toastMessage.error(error.detail)
    }
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
        :help="errors.username"
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
        :help="errors.password"
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
