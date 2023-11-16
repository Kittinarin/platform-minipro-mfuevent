<template>
   <div>
    <h1>Product List</h1>
    <div class="card-container">
      <div class="card" v-for="product in products" :key="product._id">
        <div class="card-body">
          <h5 class="card-title">{{ product.name }}</h5>
          <p class="card-text">Price: {{ product.price }}</p>
        </div>
      </div>
    </div>
  </div>
  </template>
  
  
  <script>
  export default {
    async asyncData({ $axios }) {
      // ทำ HTTP GET request เพื่อดึงข้อมูลจาก API
      const response = await $axios.get('http://localhost:8080/api/products');
      const products = response.data;
      return { products };
    }
  
  }
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