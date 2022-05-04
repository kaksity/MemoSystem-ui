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

const selectOptions = ref([])

const toastMessage = useToast()

const form = reactive({
  fullName: '',
  username: '',
  password: '',
  role: ''
})

function clearInputs () {
  form.fullName = ''
  form.username = ''
  form.password = ''
  form.role = ''
}

async function getRoles () {
  try {
    const response = await Api.get('/roles')
    selectOptions.value = response.data
  } catch (error) {
    toastMessage.error(error.message)
  }
}

onMounted(async () => {
  await getRoles()
})

const submit = () => {
  if (form.fullName === '' || form.fullName.length < 8) {
    toastMessage.error('Full Name is required and must be 5 or more characters')
    return
  }

  if (form.username === '' || form.username.length < 5) {
    toastMessage.error('Username is required and must be 5 or more characters')
    return
  }

  if (form.password === '' || form.password.length < 8) {
    toastMessage.error('Password is required and must 8 or more characters')
    return
  }

  form.role = form.role.id
  Api.post('/users', form).then((response) => {
    toastMessage.success(response.message)
    clearInputs()
  }).catch((error) => {
    toastMessage.error(error.message)
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
        >
          <control
            v-model="form.fullName"
          />
        </field>
        <field label="Role">
          <control
            v-model="form.role"
            :options="selectOptions"
          />
        </field>
        <field
          label="Username"
        >
          <control
            v-model="form.username"
            name="username"
            autocomplete="username"
          />
        </field>
        <field
          label="Password"
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
