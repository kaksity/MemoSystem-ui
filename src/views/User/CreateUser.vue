<script setup>
import { onMounted, reactive, ref } from 'vue'
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
const selectOptions = ref([])

const toastMessage = useToast()

const errors = ref([])

const form = reactive({
  fullName: '',
  username: '',
  password: '',
  roleId: ''
})

function clearError () {
  errors.value = {}
}

function clearInputs () {
  form.fullName = ''
  form.username = ''
  form.password = ''
  form.role = ''
}

async function getRoles () {
  try {
    const { data } = await Api.get('/roles')
    selectOptions.value = data.map(({ id, name: label }) => {
      return {
        id,
        label
      }
    })
  } catch (error) {
    toastMessage.error(error.detail)
  }
}

onMounted(async () => {
  await getRoles()
})

const submit = () => {
  clearError()
  Api.post('/users', { ...form, roleId: form.roleId.id }).then(({ message }) => {
    toastMessage.success(message)
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
        title="Forms"
        :icon="mdiBallot"
        form
        @submit.prevent="submit"
      >
        <field
          label="Full Name"
          :help="errors.fullName"
        >
          <control
            v-model="form.fullName"
          />
        </field>
        <field
          label="Role"
          :help="errors.roleId"
        >
          <control
            v-model="form.roleId"
            :options="selectOptions"
          />
        </field>
        <field
          label="Username"
          :help="errors.username"
        >
          <control
            v-model="form.username"
            name="username"
            autocomplete="username"
          />
        </field>
        <field
          label="Password"
          :help="errors.password"
        >
          <control
            v-model="form.password"
            type="password"
            name="password"
            autocomplete="current-password"
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
