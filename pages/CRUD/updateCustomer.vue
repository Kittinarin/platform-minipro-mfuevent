<template>
    <div class="min-h-screen flex items-center justify-center">
      <div class="w-full max-w-md p-8 bg-white shadow-md">
        <h1 class="text-3xl font-semibold mb-6">Update Customer</h1>
        <form @submit.prevent="updateCustomer">
          <div class="mb-4">
            <v-select
              v-model="customerId"
              :items="customerIds"
              label="Select Customer ID"
              required
              class="mt-1 w-full"
            ></v-select>
          </div>
          <div class="mb-4">
            <label for="name" class="block text-sm font-medium text-gray-600">Customer Name:</label>
            <input type="text" v-model="customerName" required class="mt-1 p-2 w-full border rounded-md">
          </div>
          <div class="mb-4">
            <label for="address" class="block text-sm font-medium text-gray-600">Customer Address:</label>
            <input type="text" v-model="customerAddress" required class="mt-1 p-2 w-full border rounded-md">
          </div>
          <!-- Add other input fields for customer properties as needed -->
          <button type="submit" class="bg-blue-500 text-white px-4 py-2 rounded-md">Update Customer</button>
        </form>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        customerId: '',
        customerName: '',
        customerAddress: '',
        customerIds: [],
      };
    },
    async asyncData({ $axios }) {
      try {
        const allCustomersResponse = await $axios.get(`http://localhost:8080/api/customers`);
        const allCustomers = allCustomersResponse.data;
  
        const customerIds = allCustomers.map((customer) => String(customer._id));
  
        return {
          customerIds: customerIds,
        };
      } catch (error) {
        console.error('Error fetching customer data:', error);
        throw error;
      }
    },
    methods: {
      async updateCustomer() {
        try {
          await this.$axios.put(`http://localhost:8080/api/customers/${this.customerId}`, {
            name: this.customerName,
            address: this.customerAddress,
          });
  
          console.log('Customer updated successfully!');
          // เพิ่มการนำผู้ใช้ไปหน้าอื่น ๆ หรือทำการรีเฟรชข้อมูล, อื่น ๆ ตามต้องการ
        } catch (error) {
          console.error('Error updating customer:', error);
        }
      },
    },
  };
  </script>
  
  <style scoped>
  /* Add your custom styles here */
  </style>
  