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
            <v-col cols="5">
                <div class="d-flex justify-center" style="border: 1px solid #a0a0a0">
                    <v-img src="/1.png" aspect-ratio="1" style="max-width: 75%; height: auto"></v-img>
                </div>
            </v-col>

            <v-col cols="5">
                <!-- ด้านขวา -->
                <!-- แถวที่ 1 -->
                <div class="px-10 pt-10 pb-5 mb-3" style="border: 1px solid #a0a0a0">
                    <div class="text-h4 font-weight-bold">เตารีด 750 – 2,000 วัตต์</div>
                    <div class="mt-5 red--text text-h5 font-weight-bold">100 บาท/วัน</div>
                </div>


                <!-- แถวที่ 4 -->
                <v-row>
                    <v-col cols="6">
                        <div class="px-10 pt-10 pb-5 mb-3" style="border: 1px solid #ff914d">
                            <div class=" mb-11">
                                <div class="text-h8 font-weight-bold text-center mb-3 " style="color: #ff914d;">
                                    รับที่ร้าน
                                </div>
                                <div class=" mb-16" style="color: #ff914d;">
                                    - ไม่มีค่าใช้จ่าย
                                </div>
                                <div class=" text-center">
                                    <v-btn color="orange mr-8 white--text" @click="goToNextPage">เช่าสินค้า</v-btn>
                                </div>
                            </div>
                        </div>
                    </v-col>
                    
                    <v-col cols="6">
                        <div class="px-10 pt-10 pb-5 mb-3" style="border: 1px solid #ff914d">
                            <div class=" mb-9">
                                <div class="text-h8 font-weight-bold text-center mb-3 " style="color: #ff914d;">
                                    จัดส่ง
                                </div>
                                <div style="color: #ff914d;">
                                    - มีค่าจัดส่ง    
                                </div>
                                <div style="color: #ff914d;">
                                    - จัดส่งภายในระยะเวลา 3-7 วัน
                                    (ขึ้นอยู่กับระยะทางการจัดส่ง)  
                                </div>
                                <div class="text-center">
                                    <v-btn color="orange mr-8 white--text" @click="goToNextPage">เช่าสินค้า</v-btn>
                                </div>
                            </div>
                        </div>
                    </v-col>

                </v-row>

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
            // ทำสิ่งที่ต้องการเมื่อเลือกตัวเลือก
        },
        goToNextPage() {
            this.$router.push({ name: 'confirm_item', query: { day: '2', option: 'confirm rent' } });
            // นำทางไปหน้าต่อไป
        },
    },
};
</script>
  