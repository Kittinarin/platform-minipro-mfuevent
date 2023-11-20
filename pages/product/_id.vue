<template>
  <div>
    <v-card class="mx-auto" max-width="600">
      <v-img :src="productDetails.image" height="200" cover>
        <!-- <v-card-title class="white--text">{{ productDetails.name }}</v-card-title> -->
      </v-img>

      <v-card-text>
        <div class="product-info">{{ productDetails.name }}</div>
        <div class="product-info">Price: {{ productDetails.price }}/day ฿</div>
        <div class="product-info">Details: {{ productDetails.details }}</div>
      </v-card-text>

      <v-card-actions class="justify-center">
        <v-btn
          :outlined="selectedDuration !== '1'"
          :color="selectedDuration === '1' ? 'orange' : ''"
          @click="toggleButton('1')"
        >
          1 Day
        </v-btn>
        <v-btn
          :outlined="selectedDuration !== '7'"
          :color="selectedDuration === '7' ? 'orange' : ''"
          @click="toggleButton('7')"
        >
          7 Day
        </v-btn>
        <v-btn
          :outlined="selectedDuration !== '30'"
          :color="selectedDuration === '30' ? 'orange' : ''"
          @click="toggleButton('30')"
        >
          30 Day
        </v-btn>
      </v-card-actions>

      <v-card-actions>
        <v-row class="d-flex align-center justify-center">
          <v-text-field
            v-model.number="foo"
            label=""
            append-outer-icon="mdi-plus"
            @click:append-outer="increment"
            prepend-icon="mdi-minus"
            @click:prepend="decrement"
            class="text-field-custom"
            :max="productDetails.amount"
          ></v-text-field>
          <v-card-text class="text-center">
            <div>
              <p>{{ "Amount stock :  " + productDetails.amount }}</p>
            </div>
          </v-card-text>
        </v-row>
      </v-card-actions>

      <v-card-actions class="justify-center">
        <v-btn
          :disabled="selectedDuration === null || foo === 0"
          depressed
          color="primary"
          @click="goTocheckoutPage(productDetails._id)"
        >
          Borrow
        </v-btn>

        <v-btn
          :disabled="selectedDuration === null || foo === 0"
          depressed
          color="error"
        >
          Buy
        </v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>
  
<script>
import axios from "axios";

export default {
  data() {
    return {
      productId: "",
      foo: 1,
      selectedDuration: null,
      productDetails: null,
    };
  },
  methods: {
    goTocheckoutPage(productId) {
      this.$router.push(`/checkout/${productId}`);
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
      const productId = params.id;
      const response = await axios.get(
        `http://localhost:8080/api/products/${productId.toString()}`
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
  