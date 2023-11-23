<!-- pages/CRUD/deleteCustomer.vue -->

<template>
    <div>
      <v-select
        v-model="selectedCustomerId"
        :items="customers"
        item-text="name"
        item-value="_id"
        label="Select a customer to delete"
        class="mb-4"  
      ></v-select>
      <v-btn @click="deleteCustomer" color="red" dark>
        Delete
      </v-btn>
  
      <v-alert v-if="deleteSuccess" type="success" class="mt-4">
        Customer deleted successfully!
      </v-alert>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        customers: [],
        selectedCustomerId: null,
        deleteSuccess: false,
      };
    },
    methods: {
      async fetchCustomers() {
        try {
          const response = await this.$axios.get("https://peach-bat-tutu.cyclic.app/customers");
          this.customers = response.data;
        } catch (error) {
          console.error("Error fetching customers:", error);
        }
      },
      async deleteCustomer() {
        try {
          const response = await this.$axios.delete(`https://peach-bat-tutu.cyclic.app/customers/${this.selectedCustomerId}`);
          console.log("Customer deleted:", response.data);
          this.deleteSuccess = true;
          this.fetchCustomers();
        } catch (error) {
          console.error("Error deleting customer:", error);
          this.deleteSuccess = false;
        }
      },
    },
    watch: {
      deleteSuccess(newVal) {
        if (newVal) {
          setTimeout(() => {
            this.deleteSuccess = false;
          }, 2000);
        }
      },
    },
    mounted() {
      this.fetchCustomers();
    },
  };
  </script>
  
  <style scoped>
  /* เพิ่มสไตล์ที่คุณต้องการ */
  .mb-4 {
    margin-bottom: 1rem;
  }
  
  .mt-4 {
    margin-top: 1rem;
  }
  </style>
  