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
          
        </v-col>
  
        <v-col cols="5">
          <!-- ด้านขวา -->
        
          
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
        //this.$router.push({ name: 'item', query: { day: '1', option: 'rent' } });
        // นำทางไปหน้าต่อไป
      },
    },
  };
  </script>
  