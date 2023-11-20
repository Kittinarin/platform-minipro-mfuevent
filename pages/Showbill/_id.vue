<template>
  <v-card class="mx-auto" max-width="344" hover>
    <v-card-item>
      <v-card-title> EquipmentEase </v-card-title>
      <v-card-subtitle>
        ร้าน EquipmentEase 999 , Chiangrai , Thailand 099-999-9999
      </v-card-subtitle>
    </v-card-item>
    <v-card-title> รายการ </v-card-title>
    <v-card-text>
      เตารีด 1 วัน

      <div>
        <h1>Bill Details</h1>
        <div v-if="bill">
          <p>Start Date: {{ bill.start_date }}</p>
          <p>End Date: {{ bill.end_date }}</p>
          <!-- เพิ่มรายละเอียดอื่น ๆ ตามต้องการ -->
        </div>
        <div v-else>
          <p>Bill not found</p>
        </div>
      </div>
    </v-card-text>
  </v-card>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      bill: null,
    };
  },
  async created() {
    // ดึงข้อมูลบิลโดยใช้ Axios
    const billId = "your_bill_id"; // แทนที่ด้วย ID ของบิลที่คุณต้องการ
    try {
      const response = await axios.get(
        `http://localhost:8080/api/getBills/${billId}`
      );
      this.bill = response.data;
    } catch (error) {
      console.error("Error fetching bill details:", error);
      this.bill = null;
    }
  },
};
</script>

<style>
</style>