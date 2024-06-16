<script>
import axios from 'axios';
export default {
    name: 'SectionContactForm',
    data() {
        return {
            name: '',
            email: '',
            message: '',
            success: false,
            errors: false,
            sending: false
        }
    },
    methods: {
        sendMessage() {
            this.sending = true;
            console.log('hi');

            const payload = {
                name: this.name,
                email: this.email,
                message: this.message
            }

            console.log(payload);

            axios
                .post('http://127.0.0.1:8000/api/contacts', payload)
                .then((response) => {
                    this.sending = false;
                    console.log(response);
                    if (response.data.success) {
                        this.success = 'Thanks for your message';
                        this.errors = false;
                        this.name = '';
                        this.email = '';
                        this.message = '';
                    } else {
                        this.errors = response.data.errors;
                        this.success = false;
                    }
                })
                .catch((error) => {
                    console.error(error)
                })
        },
        resetValue() {
            this.success = false;
            this.errors = false;
            this.name = '';
            this.email = '';
            this.message = '';
        }
    }
}
</script>
<template>
    <!-- Button trigger modal -->
    <button type="button" class="border-0 bg-transparent fw-bold" data-bs-toggle="modal" data-bs-target="#modalContactUsId">
        Contact Us <i class="fa-regular fa-envelope" style="color: #000000;"></i>
    </button>

    <!-- Modal -->
    <div class="modal fade" id="modalContactUsId" tabindex="-1" role="dialog" aria-labelledby="modalContactUsTitleId"
        aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="modalContactUsTitleId">
                        Contact me
                    </h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" :disabled="sending"
                        @click="resetValue()"></button>
                </div>

                <div class="modal-body">
                    <form @submit.prevent="sendMessage()">

                        <div class="alert alert-success" role="alert" v-if="success">
                            <strong>{{ success }}</strong>
                        </div>

                        <div class="alert alert-danger" role="alert" v-if="errors">
                            <strong>Errors</strong>
                            <ul>
                                <li v-for="error in errors">{{ error[0] }}</li>
                            </ul>
                        </div>



                        <div class="mb-3">
                            <label for="name" class="form-label">Name</label>
                            <input type="text" class="form-control" name="name" id="name" aria-describedby="helpIdNameGuest"
                                placeholder="Your name ..." v-model="name" />
                            <small id="helpIdNameGuest" class="form-text text-muted">Insert your name
                                here</small>
                        </div>

                        <div class="mb-3">
                            <label for="email" class="form-label">Email</label>
                            <input type="email" class="form-control" name="email" id="email" aria-describedby="emailHelpId"
                                placeholder="abc@mail.com" v-model="email" />
                            <small id="emailHelpId" class="form-text text-muted">Insert here your
                                mail</small>
                        </div>

                        <div class="mb-3">
                            <label for="message" class="form-label">Message</label>
                            <textarea class="form-control" name="message" id="message" rows="3"
                                v-model="message"></textarea>
                        </div>
                        <button type="button" class="btn btn-secondary me-3" data-bs-dismiss="modal" :disabled="sending"
                            @click="resetValue()">
                            Close
                        </button>
                        <button type=" submit" class="btn btn-dark" :disabled="sending">
                            <span class="spinner-grow spinner-grow-sm" aria-hidden="true" v-if="sending"></span>
                            <span role="status">{{ sending ? 'Sending...' : 'Send' }}</span>
                        </button>
                    </form>
                </div>

            </div>
        </div>
    </div>
</template>


<style scoped></style>