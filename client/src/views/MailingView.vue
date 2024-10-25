<template>
  <div class="mailing-view">
    <h1>Send Email</h1>
    <form @submit.prevent="sendEmail">
      <TextField 
        label="Recipient"
        field="recipient"
        icon="pi pi-envelope"
        v-model="recipient"
        class="form-field"
        :errors="[]"
      >
        <InputText
          id="recipient"
          v-model="recipient"
          placeholder="Enter recipient email"
        />
      </TextField>
      <TextField
        label="Subject"
        field="subject"
        icon="pi pi-bookmark"
        v-model="subject"
        class="form-field"
        :errors="[]"
      >
        <InputText
          id="subject"
          v-model="subject"
          placeholder="Enter subject"
        />
      </TextField>
      <TextField
        label="Text"
        field="text"
        icon="pi pi-align-left"
        v-model="text"
        class="form-field"
        :errors="[]"
      >
        <InputText
          id="text"
          v-model="text"
          rows="5"
          placeholder="Enter email text"
        />
      </TextField>
      <Button
        label="Send"
        icon="pi pi-check"
        type="submit"
        class="form-field"
      />
    </form>
    <Message
      v-if="message"
      severity="error"
      >{{ message }}</Message
    >
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useEmailsStore } from '../stores/Emails.js'
import InputText from 'primevue/inputtext'
import Button from 'primevue/button'
import Message from 'primevue/message'
import TextField from '@/components/forms/TextField.vue'

const emailStore = useEmailsStore()
const recipient = ref('')
const subject = ref('')
const text = ref('')
const message = ref('')

const sendEmail = async () => {
  try {
    if(!recipient.value){
      message.value = 'Recipient is required'
      return
    }
    await emailStore.sendEmail({
      to: recipient.value,
      subject: subject.value,
      text: text.value,
      html: text.value,
    })
    recipient.value = ''
    subject.value = ''
    text.value = ''
    message.value = 'Email sent successfully'
  } catch (error) {
    message.value = 'Failed to send email'
    console.error('Failed to send email', error)
  }
}
</script>


<style scope>
.mailing-view {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
}

.form-field {
  margin-bottom: 30px;
}
</style>

