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
import topbar from "@/components/topbar.vue";
import search from "@/components/search.vue";
export default {
  data() {
    return {
      show: false,
      products: [],
    };
  },
  mounted() {
    this.fetchProducts();
  },
  methods: {
    goToDetailPage(productId) {
      this.$router.push(`/product/${productId}`);
    },
    async fetchProducts() {
      try {
        // Make a GET request to fetch products
        const response = await this.$axios.get(
          "/api/products"
        );
        this.products = response.data;
        this.show = true;
      } catch (error) {
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