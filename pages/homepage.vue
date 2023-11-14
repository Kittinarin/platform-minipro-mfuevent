import { createVuetify} from 'vuetify'
<template>
  <div>
    <v-container class="search-container" fluid>
      <v-row justify="center" align="center">
        <v-col align="center">
          <v-text-field
            v-model="search"
            label="ค้นหา"
            class="search-text-field"
            solo
            hide-details
            rounded
            outlined
          >
            <template v-slot:append>
              <v-icon>mdi-magnify</v-icon>
            </template>
          </v-text-field>
        </v-col>

        <v-col xs="12" sm="4" md="4" lg="2">
          <v-btn rounded @click="handleSort"
            >Sort <v-icon>mdi-sort</v-icon></v-btn
          >
        </v-col>

        <v-col xs="12" sm="12" md="12" lg="12">
          <v-radio-group v-model="selectedStatus" row>
            <v-radio
              v-for="(label, value) in statusOptions"
              :key="value"
              :label="label"
              :value="value"
              color="black"
              class="mr-2"
            ></v-radio>
          </v-radio-group>
        </v-col>
      </v-row>
    </v-container>

    <v-container>
      <v-row>
        <v-col
          v-for="(item, i) in all_event"
          :key="item.id"
          cols="4"
          class="px-10"
        >
          <Event :a_event="item" />
        </v-col>
      </v-row>
    </v-container>

    <v-btn
      v-show="fab"
      fab
      dark
      fixed
      bottom
      right
      color="#FF914D"
      size="125"
      @click="toTop"
    >
      <v-icon size="50" class="font-weight-bold">mdi-plus</v-icon>
    </v-btn>
  </div>
</template>

<script>
import mockData from "@/static/mockData.json";

export default {
  name: "homepage",
  data() {
    return {
      fab: true, // Ensure 'fab' is defined in your data

      all_event: mockData,
      search: "",
      selectedStatus: null,
      statusOptions: {
        OnEvents: "อุปกรณ์ไฟฟ้าภายในบ้าน",
        UpEvents: "เครื่องแต่งกาย",
        ExpEvents: "อื่น ๆ",
      },
    };
  },
  methods: {
    handleSort() {
      // Add your sorting logic here
    },
  
    toTop() {
      this.$router.push( 'festival/new' );
    },
  },
};
</script>

<style>
.search-container {
  background-color: #FF914D;
  border-radius: 50px;
  width: 90%; /* Adjust the width as needed */
  max-width: 1200px;
  margin: 40px auto;
  padding: 35px 10px 0px;
}

.search-text-field {
  font-size: 18px; /* Adjust the font size as needed */
  width: 90%;
}
.v-input--radio-group__input {
  justify-content: space-evenly;
}

/* Additional styling as needed */
</style>
