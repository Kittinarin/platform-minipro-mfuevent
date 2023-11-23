<template>
  <v-row justify="center" class="mt-12">
  <v-col class="d-flex justify-end align-start mb-5" cols="1">
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

  <v-row justify="center" class="mt-12 mb-5">
    <v-col cols="5">
      <div class="d-flex justify-center" style="border: 1px solid #a0a0a0">
        <v-img
          src="/7.png"
          aspect-ratio="1"
          style="max-width: 80%; height: auto"
        ></v-img>
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
            // ทำสิ่งที่ต้องการเมื่อเลือกตัวเลือก
        },
        goToNextPage() {
            //this.$router.push({ name: 'confirm_item', query: { day: '2', option: 'confirm rent' } });
            // นำทางไปหน้าต่อไป
        },
    },
};
</script>