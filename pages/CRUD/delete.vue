<template>
    <div>
      <v-select
        v-model="selectedProductId"
        :items="products"
        item-text="name"
        item-value="_id"
        label="Select a product to delete"
        class="mb-4"  
      ></v-select>
      <v-btn @click="deleteProduct" color="red" dark> <!-- เปลี่ยนสีปุ่มเป็นสีแดง -->
        Delete
      </v-btn>
  
      <v-alert v-if="deleteSuccess" type="success" class="mt-4"> <!-- เพิ่มคลาส mt-4 เพื่อให้มีระยะห่างด้านบน -->
        Product deleted successfully!
      </v-alert>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        products: [],
        selectedProductId: null,
        deleteSuccess: false
      };
    },
    methods: {
      async fetchProducts() {
        try {
          const response = await this.$axios.get("http://localhost:8080/api/products");
          this.products = response.data;
        } catch (error) {
          console.error("Error fetching products:", error);
        }
      },
      async deleteProduct() {
        try {
          const response = await this.$axios.delete(`http://localhost:8080/api/products/${this.selectedProductId}`);
          console.log("Product deleted:", response.data);
          this.deleteSuccess = true;
          this.fetchProducts();
        } catch (error) {
          console.error("Error deleting product:", error);
          this.deleteSuccess = false;
        }
      }
    },
    watch: {
      deleteSuccess(newVal) {
        if (newVal) {
          setTimeout(() => {
            this.deleteSuccess = false;
          }, 2000);
        }
      }
    },
    mounted() {
      this.fetchProducts();
    }
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
  