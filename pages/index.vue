<template>
  <div>
    <search />
    <div class="card-container">
      <!-- Display fetched data here -->
      <v-card
        v-for="product in products"
        :key="product._id"
        class="mx-auto"
        max-width="344"
      >
        <v-expand-transition>
          <div v-show="show">
            <v-divider></v-divider>
            <v-card-text @click="goToDetailPage(product._id)">
              <v-img :src="product.image" height="200px" cover></v-img>
              <div>
                <div>{{ product.name }}</div>
                <div>{{ product.price }}/day ฿</div>
                <div>There are {{ product.amount }} pieces</div>
              </div>
            </v-card-text>
          </div>
        </v-expand-transition>
      </v-card>
    </div>
  </div>
</template>




<script>
// นำเข้าคอมโพเนนต์ Vue
import topbar from "@/components/topbar.vue";
import search from "@/components/search.vue";

export default {
  // คุณสมบัติข้อมูล
  data() {
    return {
      show: false, // ตัวแปรสำหรับควบคุมการแสดงผลของสินค้า
      products: [], // อาร์เรย์เพื่อเก็บข้อมูลสินค้าที่ดึงมา
    };
  },
  // ไลฟ์ไซค์ฮุค: mounted
  mounted() {
    // เรียกเมธอด fetchProducts เมื่อคอมโพเนนต์ถูกโหลด
    this.fetchProducts();
  },
  // เมธอด
  methods: {
    // เมธอดสำหรับนำทางไปยังหน้ารายละเอียดสินค้า
    goToDetailPage(productId) {
      this.$router.push(`/product/${productId}`);
    },
    // เมธอดแบบ asynchronous สำหรับดึงข้อมูลสินค้า
    async fetchProducts() {
      try {
        // ทำ GET request เพื่อดึงข้อมูลสินค้าจาก URL ที่ระบุ
        const response = await this.$axios.get(
          "https://peach-bat-tutu.cyclic.app/products"
        );
        // อัปเดตอาร์เรย์ 'products' ด้วยข้อมูลจาก response
        this.products = response.data;
        // ตั้งค่า 'show' เป็น true เพื่อบ่งบอกว่าสินค้าพร้อมแสดงผล
        this.show = true;
      } catch (error) {
        // ล็อกข้อความข้อผิดพลาดถ้ามีข้อผิดพลาดในการดึงข้อมูลสินค้า
        console.error("Error fetching products:", error);
      }
    },
  },
};
</script>


<style>
.card-container {
  display: flex;
  flex-wrap: wrap; /* Optional: allows cards to wrap to the next line if the container is not wide enough */
}

/* Optional: add additional styles for spacing or alignment */
.v-card {
  margin: 3px 5px;
  /* Add margin to each card for spacing */
}
.centered-container {
  display: flex;
  justify-content: center;
}

.centered-label .label {
  text-align: center;
}
</style>