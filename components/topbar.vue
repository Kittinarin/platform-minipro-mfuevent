<template>
  <!-- Single v-card section -->
  <v-card color="grey-lighten-4" flat height="70px" rounded="0">
    <v-toolbar density="compact">
      <v-app-bar-nav-icon></v-app-bar-nav-icon>

      <v-toolbar-title>
        <router-link to="/" class="custom-link">EquipmentEase</router-link>
      </v-toolbar-title>

      <v-spacer></v-spacer>

      <v-toolbar-items>
        <v-btn to="/CRUD/crud">manage</v-btn>

        <!-- <v-btn>Register</v-btn> -->
      </v-toolbar-items>

      <v-btn icon>
        <v-icon>mdi-login</v-icon>
      </v-btn>
    </v-toolbar>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      search: "", // เพิ่มตัวแปร search เข้ามาใน data
    };
  },
  // ... โค้ดอื่น ๆ
};
</script>


<style scoped>
.custom-link {
  color: black; /* Set the color to black or any other color you want */
  text-decoration: none; /* Remove underline */
}
</style>