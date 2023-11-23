<template>
  <v-row justify="center" class="mt-12">
    <v-col class="d-flex justify-center align-start mb-5" cols="1">
      <nuxt-link to="/">
        <v-icon style="transform: scaleX(-1); color: #ff914d" class="rotate-180" size="100">
          mdi-share-outline
        </v-icon>
      </nuxt-link>
    </v-col>

    <v-row>
      <!-- ด้านซ้าย -->
      <!--รูป--><v-col cols="2">
        <div class="px-10 pt-10 pb-5 mb-5" style="border: 1px solid #a0a0a0">
          <v-img src="/1.png" aspect-ratio="1" style="max-width: 78%; height: auto"></v-img>
        </div>
      </v-col>
      <!--ข้อความ--><v-col cols="4">
        <div class="px-10 pt-10 pb-5 mb-5" style="border: 1px solid #a0a0a0">
          <div class="text-h5 font-weight-bold">เตารีด 750 – 2,000 วัตต์</div>
          <div class="mt-2 text-h8 font-weight-bold">รายละเอียดสินค้า : เตารีด</div>
          <div class="mt-2 red--text text-h5 font-weight-bold">1 วัน 100 บาท/วัน</div>
        </div>
      </v-col>


      <!-- ด้านขวา --><v-col cols="5">
        <div class="px-10 pt-10 pb-5 mb-5" style="border: 1px solid #a0a0a0; text-align:center">
          <div class="text-h5 font-weight-bold">ร้าน EquipmentEase</div>
          <div class="text-h5 font-weight-bold">999, Chiangrai, Thailand</div>
          <div class="mt-2 text-h5 font-weight-bold">เบอร์โทร 099-999-9999</div>
        </div>
      </v-col>
    </v-row>

    <v-row justify="center">
      <!-- ด้านซ้าย -->
      <!--ข้อความ--><v-col cols="6">
        <div class="px-10 pt-10 pb-10 mb-12"
          style="border: 1px solid #a0a0a0; text-align: center; display: flex; align-items: center;">
          <v-icon color="#a0a0a0" size="32">mdi-calendar</v-icon>
          <div class="text-h5 font-weight-bold" style="margin-left: 75px;">วันยืม : 09/10/2023 เวลา : 07:45 น.</div>
        </div>
        <div class="px-10 pt-10 pb-10 mb-3"
          style="border: 1px solid #a0a0a0; text-align: center; display: flex; align-items: center;">
          <v-icon color="#a0a0a0" size="32">mdi-calendar</v-icon>
          <div class="text-h5 font-weight-bold" style="margin-left: 75px;">วันคืน : 10/10/2023 เวลา : 07:45 น.</div>
        </div>
      </v-col>



      <!-- ด้านขวา --><v-col cols="4">
        <div class="px-10 pt-5 pb-5 mb-3" style="border: 1px solid #a0a0a0; text-align:center">
          <div class="text-h5 font-weight-bold">ข้อกำหนดการเช่าสินค้า</div>
          <div class="mt-5 text-h8 font-weight-bold">- หากเช่าสินค้านานกว่ากำหนดทางบริษัท
            จะทำการคิดค่าเช่าเพิ่มขึ้น+ราคาต่อวัน และ+1%จากวันที่เลยกำหนด</div>
          <div class="mt-5 text-h8 font-weight-bold">-หากสินค้าเกิดการชำรุดหรือเสียหาย
            ทางบริษัทจะทำการให้ลูกค้าซื้อสินค้าทันที
            (ควรตรวจสอบสินค้าที่เช่าก่อนรับ)</div>
          <div class="mt-7 text-center">
            <v-btn color="#ff914d" class=" mr-16 white--text" @click="selectOption">ยกเลิก</v-btn>
            <v-btn color="#ff914d" class=" mr-16 white--text" @click="goToNextPage">ยืนยัน</v-btn>
          </div>
          
        </div>

      </v-col>
    </v-row>


    <festival-edit id="1" :dialog="editDialog" @close="editDialog = false" />
    <festival-delete id="1" :dialog="deleteDialog" @close="deleteDialog = false" />
  </v-row>
</template>
  
<script>
export default {
  methods: {
    selectOption(option) {
      this.$router.push({ name: 'item', query: { day: '1', option: 'rent' } });
    },
    goToNextPage() {
      this.$router.push({ name: 'slip', query: { day: '3', option: 'rent' } });
      // นำทางไปหน้าต่อไป
    },
  },
};
</script>
  