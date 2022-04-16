<script setup>
import { reactive } from 'vue'
import { mdiBallot } from '@mdi/js'
import MainSection from '@/components/MainSection.vue'
import CardComponent from '@/components/CardComponent.vue'
import Field from '@/components/Field.vue'
import Control from '@/components/Control.vue'
import Divider from '@/components/Divider.vue'
import JbButton from '@/components/JbButton.vue'
import JbButtons from '@/components/JbButtons.vue'
const selectOptions = [
  { id: 1, label: 'Business development' },
  { id: 2, label: 'Marketing' },
  { id: 3, label: 'Sales' }
]
const form = reactive({
  name: 'John Doe',
  email: 'john.doe@example.com',
  phone: '',
  department: selectOptions[0],
  subject: '',
  question: ''
})

const submit = () => {
  //
}
</script>
<template>
  <div>
    <main-section>
        <card-component
        title="Create Memo"
        :icon="mdiBallot"
        form
        @submit.prevent="submit"
        >
        <field label="Receipient">
            <control
            v-model="form.department"
            :options="selectOptions"
            />
        </field>
        <divider />
        <field
            label="Message"
            help="Your Message. Max 255 characters"
        >
            <control
            type="textarea"
            placeholder="Message..."
            />
        </field>
        <divider />
        <jb-buttons>
            <jb-button
            type="submit"
            color="info"
            label="Send"
            />
        </jb-buttons>
        </card-component>
    </main-section>
  </div>
</template>
