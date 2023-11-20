<template>
  <div class="create-customer">
    <h1>Create Customer</h1>
    <form @submit.prevent="createCustomer" class="form-container">
      <label for="name">Customer Name:</label>
      <input type="text" v-model="customerName" required class="input-field">

      <label for="address">Address:</label>
      <input type="text" v-model="customerAddress" required class="input-field">

      <label for="email">Email:</label>
      <input type="email" v-model="customerEmail" required class="input-field">

      <label for="telephoneNumber">Telephone Number:</label>
      <input type="text" v-model="customerTelephoneNumber" required class="input-field">

      <button type="submit" class="submit-button">Create Customer</button>
    </form>

    <v-alert v-if="createSuccess" type="success" class="success-alert">Customer created successfully!</v-alert>
  </div>
</template>

<script>
import axios from 'axios';
import { VAlert } from 'vuetify/lib';

export default {
  data() {
    return {
      customerName: '',
      customerAddress: '',
      customerEmail: '',
      customerTelephoneNumber: '',
      createSuccess: false,
    };
  },
  methods: {
    async createCustomer() {
      try {
        await this.$axios.post('http://localhost:8080/api/customers', {
          name: this.customerName,
          address: this.customerAddress,
          email: this.customerEmail,
          telephoneNumber: this.customerTelephoneNumber,
        });

        console.log('Customer created successfully!');
        this.createSuccess = true;
        this.resetForm();
      } catch (error) {
        console.error('Error creating customer:', error);
      }
    },
    resetForm() {
      this.customerName = '';
      this.customerAddress = '';
      this.customerEmail = '';
      this.customerTelephoneNumber = '';

      setTimeout(() => {
        this.createSuccess = false;
      }, 2000);
    },
  },
  components: {
    VAlert,
  },
};
</script>

<style scoped>
.create-customer {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

h1 {
  color: #333;
  text-align: center;
}

.form-container {
  display: flex;
  flex-direction: column;
}

.label {
  margin-bottom: 8px;
  font-weight: bold;
}

.input-field {
  width: 100%;
  padding: 8px;
  margin-bottom: 16px;
  box-sizing: border-box;
}

.submit-button {
  background-color: #4caf50;
  color: white;
  padding: 10px 15px;
  border: none;
  border-radius: 3px;
  cursor: pointer;
}

.success-alert {
  margin-top: 16px;
}
</style>
