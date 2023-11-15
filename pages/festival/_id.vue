<template>
  <v-row justify="center" class="mt-12">
    <v-col class="d-flex justify-center align-start mb-5" cols="1">
      <nuxt-link to="/">
        <v-icon
          style="transform: scaleX(-1); color: #ff914d"
          class="rotate-180"
          size="100"
        >
          mdi-share-outline
        </v-icon>
      </nuxt-link>
    </v-col>

    <v-row>
      <!-- ด้านซ้าย -->
      <v-col cols="5">
        <div class="d-flex justify-center" style="border: 1px solid #a0a0a0">
          <v-img
            src="/1.png"
            aspect-ratio="1"
            style="max-width: 75%; height: auto"
          ></v-img>
        </div>
      </v-col>

      <v-col cols="5">
        <!-- ด้านขวา -->
        <!-- แถวที่ 1 -->
        <div
          outlined
          class="px-10 pt-10 pb-5 mb-3"
          style="border: 1px solid #a0a0a0"
        >
          <div class="text-h4 font-weight-bold">เตารีด 750 – 2,000 วัตต์</div>
          <div class="font-weight-bold my-5">รายละเอียดสินค้า : เตารีด</div>
          <div class="text-h5 font-weight-bold">100 บาท/วัน</div>
        </div>

        <div class="mx-10">
          <!-- แถวที่ 2 -->
          <div class="my-10">
            <v-btn color="orange" outlined class="mr-3" @click="selectOption(1)"
              >1 วัน</v-btn
            >
            <v-btn color="orange" outlined class="mx-3" @click="selectOption(2)"
              >7 วัน</v-btn
            >
            <v-btn color="orange" outlined class="mx-3" @click="selectOption(3)"
              >30 วัน</v-btn
            >
          </div>

          <!-- แถวที่ 3 -->
          <div class="my-10">
            <div class="text-h8">จำนวนสินค้ามีสินค้า 5 ชิ้น</div>
          </div>

          <!-- แถวที่ 4 -->
          <div>
            <v-btn color="#ff914d" class=" mr-8 white--text" @click="goToNextPage"
              >เช่าสินค้า</v-btn
            >
            <v-btn color="orange" outlined @click="goToNextPage"
              >ซื้อสินค้า</v-btn
            >
          </div>
        </div>
      </v-col>
    </v-row>

    <festival-edit id="1" :dialog="editDialog" @close="editDialog = false" />
    <festival-delete
      id="1"
      :dialog="deleteDialog"
      @close="deleteDialog = false"
    />
  </v-row>
</template>

<script>
export default {
  methods: {
    selectOption(option) {
      // ทำสิ่งที่ต้องการเมื่อเลือกตัวเลือก
    },
    goToNextPage() {
      this.$router.push({ name: 'item', query: { day: '1', option: 'rent' } });
      // นำทางไปหน้าต่อไป
    },
  },
};
</script>
