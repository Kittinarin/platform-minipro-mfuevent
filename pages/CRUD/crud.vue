<template>
    <div class="crud-buttons">
      <h1>CRUD Operations</h1>
  
      <!-- ปุ่มที่ 1 ไปที่ /CRUD/create -->
      <nuxt-link to="/CRUD/createProduct">
        <v-btn color="primary" class="crud-button">Create Product</v-btn>
      </nuxt-link>
  
      <!-- ปุ่มที่ 2 ไปที่ /CRUD/read -->
      <nuxt-link to="/CRUD/readProduct">
        <v-btn color="primary" class="crud-button">Read Product</v-btn>
      </nuxt-link>
  
      <!-- ปุ่มที่ 3 ไปที่ /CRUD/update -->
      <nuxt-link to="/CRUD/updateProduct">
        <v-btn color="primary" class="crud-button">Update Product</v-btn>
      </nuxt-link>
  
      <!-- ปุ่มที่ 4 ไปที่ /CRUD/delete -->
      <nuxt-link to="/CRUD/deleteProduct">
        <v-btn color="primary" class="crud-button">Delete Product</v-btn>
      </nuxt-link>

      <h1>CRUD Customer</h1>
      <nuxt-link to="/CRUD/createCustomer">
        <v-btn color="primary" class="crud-button">Create Customer</v-btn>
      </nuxt-link>

      <nuxt-link to="/CRUD/readCustomer">
        <v-btn color="primary" class="crud-button">Create Customer</v-btn>
      </nuxt-link>

      <nuxt-link to="/CRUD/updateCustomer">
        <v-btn color="primary" class="crud-button">Create Customer</v-btn>
      </nuxt-link>

      <nuxt-link to="/CRUD/deleteCustomer">
        <v-btn color="primary" class="crud-button">Create Customer</v-btn>
      </nuxt-link>
    </div>
  </template>
  
  <style scoped>
  .crud-buttons {
    text-align: center;
  }
  
  .crud-button {
    margin: 10px;
  }
  </style>
  