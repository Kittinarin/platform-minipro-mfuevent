<template>
  <div class="create-product">
    <h1>Create Product</h1>
    <form @submit.prevent="createProduct" class="form-container">
      <label for="name">Product Name:</label>
      <input type="text" v-model="productName" required class="input-field">

      <label for="price">Product Price:</label>
      <input type="number" v-model="productPrice" required class="input-field">

      <!-- Add input fields for the new properties -->
      <label for="amount">Amount:</label>
      <input type="number" v-model="productAmount" required class="input-field">

      <label for="details">Details:</label>
      <textarea v-model="productDetails" required class="input-field"></textarea>

      <label for="startDate">Start Date:</label>
      <input type="date" v-model="productStartDate" required class="input-field">

      <label for="endDate">End Date:</label>
      <input type="date" v-model="productEndDate" required class="input-field">

      <label for="address">Address:</label>
      <input type="text" v-model="productAddress" required class="input-field">

      <label for="image">Image URL:</label>
      <input type="text" v-model="productImage" required class="input-field">

      <button type="submit" class="submit-button">Create Product</button>
    </form>

    <!-- Add v-alert for notifications -->
    <v-alert v-if="createSuccess" type="success" class="success-alert">Product created successfully!</v-alert>
  </div>
</template>

<script>
import axios from 'axios';
import { VAlert } from 'vuetify/lib';
export default {
  data() {
    return {
      productName: '',
      productPrice: 0,
      productAmount: 0,
      productDetails: '',
      productStartDate: '',
      productEndDate: '',
      productAddress: '',
      productImage: '',
      createSuccess: false,
    };
  },
  methods: {
    async createProduct() {
      try {
        // HTTP POST request to create data
        await this.$axios.post('http://localhost:8080/api/products', {
          name: this.productName,
          price: this.productPrice,
          amount: this.productAmount,
          details: this.productDetails,
          startDate: this.productStartDate,
          endDate: this.productEndDate,
          address: this.productAddress,
          image: this.productImage,
        });

        console.log('Product created successfully!');
        this.createSuccess = true;
        this.resetForm();
      } catch (error) {
        console.error('Error creating product:', error);
      }
    },
    resetForm() {
      // Reset form values
      this.productName = '';
      this.productPrice = 0;
      this.productAmount = 0;
      this.productDetails = '';
      this.productStartDate = '';
      this.productEndDate = '';
      this.productAddress = '';
      this.productImage = '';

      // Reset createSuccess after 2 seconds
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
.create-product {
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

textarea {
  resize: vertical; /* Allow vertical resizing of textarea */
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