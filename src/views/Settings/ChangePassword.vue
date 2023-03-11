<script setup>
import { reactive, ref } from 'vue'
import { mdiBallot } from '@mdi/js'
import MainSection from '@/components/MainSection.vue'
import CardComponent from '@/components/CardComponent.vue'
import Field from '@/components/Field.vue'
import Control from '@/components/Control.vue'
import Divider from '@/components/Divider.vue'
import JbButton from '@/components/JbButton.vue'
import JbButtons from '@/components/JbButtons.vue'
import Api from '@/api'
import { useToast } from 'vue-toastification'
import { groupErrors } from '@/helpers'

const toastMessage = useToast()

const errors = ref([])

const form = reactive({
  oldPassword: '',
  newPassword: '',
  confirmPassword: ''
})

function clearError () {
  errors.value = {}
}

function clearInputs () {
  form.oldPassword = ''
  form.newPassword = ''
  form.confirmPassword = ''
}

const submit = () => {
  clearError()
  const requestBody = {
    oldPassword: form.oldPassword,
    newPassword: form.newPassword,
    confirmPassword: form.confirmPassword
  }
  Api.post('/auth/change-password', requestBody).then((response) => {
    toastMessage.success(response.message)
    clearInputs()
  }).catch((error) => {
    if (error.errors) {
      errors.value = groupErrors(error.errors, 'field')
    } else {
      toastMessage.error(error.detail)
    }
  })
}
</script>
<template>
  <div>
    <main-section>
      <card-component
        title="Change Passowrd"
        :icon="mdiBallot"
        form
        @submit.prevent="submit"
      >
        <field
          label="Old Password"
          :help="errors.oldPassword"
        >
          <control
            v-model="form.oldPassword"
            type="password"
          />
        </field>
        <field
          label="New Password"
          :help="errors.newPassword"
        >
          <control
            v-model="form.newPassword"
            type="password"
          />
        </field>
        <field
          label="Confirm Password"
          :help="errors.confirmPassword"
        >
          <control
            v-model="form.confirmPassword"
            type="password"
          />
        </field>
        <divider />
        <jb-buttons>
          <jb-button
            type="submit"
            color="info"
            label="Submit"
          />
        </jb-buttons>
      </card-component>
    </main-section>
  </div>
</template>
