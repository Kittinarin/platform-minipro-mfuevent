<!-- pages/CRUD/readCustomer.vue -->

<template>
    <div>
      <h1>Customer List</h1>
      <div class="card-container">
        <div class="card" v-for="customer in customers" :key="customer._id">
          <div class="card-body">
            <h5 class="card-title">{{ customer.name }}</h5>
            <p class="card-text">Address: {{ customer.address }}</p>
            <p class="card-text">Email: {{ customer.email }}</p>
            <p class="card-text">Telephone Number: {{ customer.telephoneNumber }}</p>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    async asyncData({ $axios }) {
      // ทำ HTTP GET request เพื่อดึงข้อมูลจาก API
      const response = await $axios.get('/api/customers');
      const customers = response.data;
      return { customers };
    },
  };
  </script>
  
  <style scoped>
  .card-container {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
  }
  
  .card {
    width: 300px;
    border: 1px solid #ddd;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
  
  .card-body {
    padding: 16px;
  }
  
  .card-title {
    font-size: 1.2em;
    margin-bottom: 8px;
  }
  
  .card-text {
    color: #555;
  }
  </style>
  