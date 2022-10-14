<template>
    <div class="row justify-content-center">
        <div class="col-md-6">
        <!-- Content goes here -->
        <h1>Login</h1>
        <form>
            <div class="form-group">
                <label for="name">Username</label>
                <input type="text" class="form-control" v-model="student.name" required>
            </div>
            <div class="form-group">
                <label for="email">password</label>
                <input type="text" class="form-control" v-model="student.password" required>
            </div>
            <div class="form-group">
                <button class="btn btn-success btn-block">Login</button>
            </div>
        </form>
        </div>
    </div>
</template>

<script>
// import axios from 'axios';

export default {
    data() {
        return {
            User: {
                name: '',
                password: '',
            }
        }
    },
    methods: {
        handleSubmitForm() {

        }
    }
}
</script>