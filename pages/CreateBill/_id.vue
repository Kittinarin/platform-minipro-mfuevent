<template>
  <div>
    <v-card class="mx-auto" max-width="700">
      <!-- Product Image -->
      <v-img
        v-if="productDetails && productDetails.image"
        :src="productDetails.image"
        height="200"
        cover
      ></v-img>

      <!-- Product Details -->
      <v-card-title class="text-center">
        <v-row>
          <v-col cols="12">
            <div v-if="productDetails" class="headline font-weight-bold">
              {{ productDetails.name }}
            </div>
            <div v-if="productDetails" class="caption">
              Price: {{ productDetails.price }}/ 1 day ฿
            </div>
          </v-col>
        </v-row>
      </v-card-title>

      <!-- Reservation Form -->
      <v-card-text>
        <h1>Create Bill</h1>
        <label for="start_date">Start Date:</label>
        <input type="date" v-model="startDate" id="start_date" />

        <label for="end_date">End Date:</label>
        <input type="date" v-model="endDate" id="end_date" />

        <v-container class="mx-auto">
          <v-card style="max-width: 400px" class="mx-auto">
            <v-card-title class="headline font-weight-bold text-center">
              ร้าน EquipmentEase
            </v-card-title>
            <v-card-subtitle class="caption text-center">
              999 , Chiangrai , Thailand 099-999-9999
            </v-card-subtitle>
          </v-card>
        </v-container>

        <v-container class="mx-auto">
          <v-card style="max-width: 400px" class="mx-auto">
            <v-card-title class="headline font-weight-bold">
              ข้อกำหนดการเช่าสินค้า
            </v-card-title>
            <v-card-subtitle class="caption">
              - หากเช่าสินค้านานกว่ากำหนดทางบริษัท
              จะทำการคิดค่าเช่าเพิ่มขึ้น+ราคาต่อวัน และ+1%จากวันที่เลยกำหนด -
              หากสินค้าเกิดการชำรุดหรือเสียหาย
              ทางบริษัทจะทำการให้ลูกค้าซื้อสินค้าทันที
              (ควรตรวจสอบสินค้าที่เช่าก่อนรับ)
            </v-card-subtitle>
          </v-card>
        </v-container>

        <v-row class="mt-4 text-center">
          <v-col cols="12">
            <v-btn color="primary" @click="createBill" > ยืนยัน </v-btn>
            <v-btn
              type="submit"
              color="red"
              class="white--text"
              @click="cancelForm"
              >ยกเลิก</v-btn
            >
          </v-col>
        </v-row>

        <!-- Additional Information Card -->
      </v-card-text>
    </v-card>
  </div>
</template>
  
  <script>
export default {
  data() {
    return {
      startDate: "",
      endDate: "",
    };
  },
  methods: {
    async createBill() {
      try {
        const response = await this.$axios.post(
          "http://localhost:8080/api/createBillWithDates",
          {
            start_date: this.startDate,
            end_date: this.endDate,
          }
        );

        console.log(response.data.message);
        // ทำอย่างอื่นตามต้องการ เช่น แสดงข้อความ success, ล้างค่าฟอร์ม, เปลี่ยนหน้า, ฯลฯ
        const billsId = response.data.newBill.billsId; // ให้แก้ไขตามข้อมูลที่ได้จาก API
        this.$router.push(`/Showbill/${billsId}`);
        
      } catch (error) {
        console.error("Error creating bill with dates:", error);
        // ทำอย่างอื่นตามต้องการ เช่น แสดงข้อความ error
      }
    },
  },
};
</script>
  