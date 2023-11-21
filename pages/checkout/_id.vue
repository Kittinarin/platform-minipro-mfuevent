<template>
  <div>
    <v-card class="mx-auto" max-width="600">
      <v-img
        v-if="productDetails && productDetails.image"
        :src="productDetails.image"
        height="200"
        cover
      >
        <!-- <v-card-title class="white--text">{{ productDetails.name }}</v-card-title> -->
      </v-img>

      <v-card-text>
        <div v-if="productDetails" class="product-info">
          {{ productDetails.name }}
        </div>
        <div v-if="productDetails" class="product-info">
          Price: {{ productDetails.price }}/ 1 day ฿
        </div>
      </v-card-text>

      <v-container>
        <v-row>
          <!-- Receive at Store Card -->
          <v-col cols="12" md="6" lg="4">
            <v-card class="custom-card" color="orange">
              <v-card-title class="white--text">รับที่ร้าน</v-card-title>
              <v-card-text class="white--text">- ไม่มีค่าใช้จ่าย</v-card-text>
              <v-card-actions class="align-center">
                <v-btn
                  color="white"
                  @click="goinsertdataPage(productDetails._id)"
                  >เช่าสินค้า</v-btn
                >
              </v-card-actions>
            </v-card>
          </v-col>

          <!-- Delivery Card -->
          <v-col cols="12" md="6" lg="4">
            <v-card class="custom-card" color="orange">
              <v-card-title class="white--text">จัดส่ง</v-card-title>
              <v-card-text class="white--text"
                >- มีการจัดส่ง จัดส่งภายในระยะเวลา 3-7 วัน
                (ขึ้นอยู่กับ)</v-card-text
              >
              <v-card-actions class="align-center">
                <v-btn>เช่าสินค้า</v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-card>
  </div>
</template>
    
  <script>
import axios from "axios";

export default {
  data() {
    return {
      foo: 1,
      selectedDuration: null,
      productDetails: null,
    };
  },
  methods: {
    goinsertdataPage(productId) {
      this.$router.push(`/CreateBill/${productId}`);
    },
    redirectToProductDetails() {
      window.location.href = "/product/ProductDetails";
    },
    toggleButton(duration) {
      if (this.selectedDuration === duration) {
        this.selectedDuration = null;
      } else {
        this.selectedDuration = duration;
      }
    },
    increment() {
      if (this.foo < this.productDetails.amount) {
        this.foo++;
      }
    },
    decrement() {
      if (this.foo > 1) {
        this.foo--;
      }
    },
  },
  async asyncData({ params }) {
    try {
      if (!params || !params.id) {
        console.error("Product ID is missing");
        return { productDetails: null };
      }

      const productId = params.id;
      const response = await axios.get(
        `/api/products/${productId.toString()}`
      );
      const productDetails = response.data;
      return { productDetails };
    } catch (error) {
      console.error("Error fetching product details:", error);
      return { productDetails: null };
    }
  },
};
</script>
  

<style scoped>
.align-center {
  justify-content: center;
}
.custom-card {
  margin-bottom: 16px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  height: 200px; /* Set a fixed height for the cards */
}
.v-card--reveal {
  bottom: 0;
  opacity: 1 !important;
  position: absolute;
  width: 100%;
}
.product-info {
  margin-bottom: 10px;
  font-size: 14px;
}
.text-field-custom {
  max-width: 100px;
  margin-left: 10px; /* ปรับระยะห่างไอคอนทางซ้าย */
  margin-right: 10px; /* ปรับระยะห่างไอคอนทางขวา */
}
</style>
    