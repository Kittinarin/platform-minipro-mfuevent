<template>
    <div class="min-h-screen flex items-center justify-center">
      <div class="w-full max-w-md p-8 bg-white shadow-md">
        <h1 class="text-3xl font-semibold mb-6">Update Product</h1>
        <form @submit.prevent="updateProduct">
          <div class="mb-4">
            <v-select
              v-model="productId"
              :items="productIds"
              label="Select Product ID"
              required
              class="mt-1 w-full"
            ></v-select>
          </div>
          <div class="mb-4">
            <label for="name" class="block text-sm font-medium text-gray-600">Product Name:</label>
            <input type="text" v-model="productName" required class="mt-1 p-2 w-full border rounded-md">
          </div>
          <div class="mb-4">
            <label for="price" class="block text-sm font-medium text-gray-600">Product Price:</label>
            <input type="number" v-model="productPrice" required class="mt-1 p-2 w-full border rounded-md">
          </div>
          <button type="submit" class="bg-blue-500 text-white px-4 py-2 rounded-md">Update Product</button>
        </form>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        productId: '', // Selected product ID
        productName: '',
        productPrice: 0,
        productIds: [], // Array to store product IDs for v-select
      };
    },
    async asyncData({ $axios }) {
      try {
        // ทำ HTTP GET request เพื่อดึงข้อมูลทั้งหมดของสินค้า
        const allProductsResponse = await $axios.get(`/api/products`);
        const allProducts = allProductsResponse.data;
  
        // แปลง ObjectID ให้เป็น String
        const productIds = allProducts.map((product) => String(product._id));
  
        return {
          productIds: productIds,
        };
      } catch (error) {
        console.error('Error fetching product data:', error);
        throw error;
      }
    },
    methods: {
      async updateProduct() {
        try {
          // ทำ HTTP PUT request เพื่อแก้ไขข้อมูลสินค้า
          await this.$axios.put(`/api/products/${this.productId}`, {
            name: this.productName,
            price: this.productPrice,
          });
  
          // สำเร็จ: ทำการนำไปทำสิ่งที่คุณต้องการหลังจากแก้ไขข้อมูล
          console.log('Product updated successfully!');
          // เช่น: นำผู้ใช้ไปหน้าอื่นหรือทำการรีเฟรชข้อมูล, อื่น ๆ
        } catch (error) {
          console.error('Error updating product:', error);
          // จัดการข้อผิดพลาดที่เกิดขึ้นในขณะทำ PUT request
        }
      },
    },
  };
  </script>
  <style scoped>
  /* Add your custom styles here */
  .min-h-screen {
    min-height: 100vh;
  }

  .flex {
    display: flex;
  }

  .items-center {
    align-items: center;
  }

  .justify-center {
    justify-content: center;
  }

  .w-full {
    width: 100%;
  }

  .max-w-md {
    max-width: 28rem; /* Adjust the maximum width as needed */
  }

  .p-8 {
    padding: 2rem;
  }

  .bg-white {
    background-color: #ffffff;
  }

  .shadow-md {
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }

  .text-3xl {
    font-size: 1.875rem; /* 30px */
  }

  .font-semibold {
    font-weight: 600;
  }

  .mb-6 {
    margin-bottom: 1.5rem; /* 24px */
  }

  .mb-4 {
    margin-bottom: 1rem; /* 16px */
  }

  .block {
    display: block;
  }

  .text-sm {
    font-size: 0.875rem; /* 14px */
  }

  .font-medium {
    font-weight: 500;
  }

  .text-gray-600 {
    color: #4a5568;
  }

  .mt-1 {
    margin-top: 0.25rem; /* 4px */
  }

  .p-2 {
    padding: 0.5rem; /* 8px */
  }

  .w-full {
    width: 100%;
  }

  .border {
    border: 1px solid #e2e8f0;
  }

  .rounded-md {
    border-radius: 0.375rem; /* 6px */
  }

  .mt-1 {
    margin-top: 0.25rem; /* 4px */
  }

  .bg-blue-500 {
    background-color: #4299e1;
  }

  .text-white {
    color: #ffffff;
  }

  .px-4 {
    padding-left: 1rem; /* 16px */
    padding-right: 1rem; /* 16px */
  }

  .py-2 {
    padding-top: 0.5rem; /* 8px */
    padding-bottom: 0.5rem; /* 8px */
  }

  .rounded-md {
    border-radius: 0.375rem; /* 6px */
  }
</style>