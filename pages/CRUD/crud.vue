<template>
    <div class="crud-buttons">
      <h1>CRUD Operations</h1>
  
      <!-- ปุ่มที่ 1 ไปที่ /CRUD/create -->
      <nuxt-link to="/CRUD/create">
        <v-btn color="primary" class="crud-button">Create</v-btn>
      </nuxt-link>
  
      <!-- ปุ่มที่ 2 ไปที่ /CRUD/read -->
      <nuxt-link to="/CRUD/read">
        <v-btn color="primary" class="crud-button">Read</v-btn>
      </nuxt-link>
  
      <!-- ปุ่มที่ 3 ไปที่ /CRUD/update -->
      <nuxt-link to="/CRUD/update">
        <v-btn color="primary" class="crud-button">Update</v-btn>
      </nuxt-link>
  
      <!-- ปุ่มที่ 4 ไปที่ /CRUD/delete -->
      <nuxt-link to="/CRUD/delete">
        <v-btn color="primary" class="crud-button">Delete</v-btn>
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
  