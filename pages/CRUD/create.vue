<template>
    <div class="create-product">
      <h1>Create Product</h1>
      <form @submit.prevent="createProduct">
        <label for="name">Product Name:</label>
        <input type="text" v-model="productName" required>
  
        <label for="price">Product Price:</label>
        <input type="number" v-model="productPrice" required>
  
        <button type="submit">Create Product</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        productName: '',
        productPrice: 0,
      };
    },
    methods: {
      async createProduct() {
        try {
          // HTTP POST request to create data
          await this.$axios.post('http://localhost:8080/api/products', {
            name: this.productName,
            price: this.productPrice,
          });
  
          console.log('Product created successfully!');
        } catch (error) {
          console.error('Error creating product:', error);
        }
      },
    },
  };
  </script>
  
  <style scoped>
  .create-product {
    max-width: 400px;
    margin: 0 auto;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  }
  
  h1 {
    color: #333;
  }
  
  label {
    display: block;
    margin-bottom: 8px;
  }
  
  input {
    width: 100%;
    padding: 8px;
    margin-bottom: 16px;
    box-sizing: border-box;
  }
  
  button {
    background-color: #4caf50;
    color: white;
    padding: 10px 15px;
    border: none;
    border-radius: 3px;
    cursor: pointer;
  }
  </style>
  