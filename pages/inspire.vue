import { createVuetify} from 'vuetify'
<template>
  <v-app>
    <v-container class="search-container">
      <v-col>
        <v-row justify="space-between" align="center">
          <v-col xs="12" sm="8" md="6" lg="4">
            <v-text-field
              v-model="search"
              label="Search"
              class="search-text-field"
              solo-inverted
              hide-details
              rounded
              outlined
            >
              <template v-slot:append>
                <v-icon>mdi-magnify</v-icon>
              </template>
            </v-text-field>
          </v-col>
          <v-col class="text-right" xs="12" sm="4" md="3" lg="2">
            <v-btn @click="handleSort"
              >Sort
              <v-icon>mdi-sort</v-icon>
            </v-btn>
          </v-col>
        </v-row>
        <v-radio-group v-model="selectedStatus" row>
          <v-radio 
            v-for="(label, value) in statusOptions"
            :key="value"
            :label="label"
            :value="value"
            color="black"
            class="mr-3"
          ></v-radio>
        </v-radio-group>
      </v-col>
    </v-container>
  </v-app>
</template>

<script>
export default {
  name: 'inspire',
  data() {
    return {
      search: "",
      statusOptions: {
        OnEvents: "Ongoing Events",
        UpEvents: "Upcoming Events",
        ExpEvents: "Expired Events",
      },
    };
  },
  methods: {
    handleSort() {
      // Add your sorting logic here
    },
  },
};
</script>


<style>
.search-container {
  background-color: #bc8e5d;
  border-radius: 50px;
  width: 80%;
}
.search-text-field {
  background-color: white;
}
.v-input--radio-group__input {
    justify-content: space-evenly;
}
</style>
