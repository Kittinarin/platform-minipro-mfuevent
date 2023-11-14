<template>
  <v-dialog
    v-model="dialog"
    width="70rem"
    @click:outside="close"
    content-class="elevation-0"
  >
    <v-card class="brown-outline pa-5">
      <div
        class="d-flex justify-center text-h4 font-weight-medium"
        style="color: brown"
      >
        Do you want to delete this Event?
      </div>

      <v-row class="mt-4">
        <v-col class="d-flex justify-center">
          <!-- <v-btn @click="handleYes" color="success">Yes</v-btn> -->
          <my-btn color="#a52a2a" rounded="xl" width="100px">Yes</my-btn>
        </v-col>

        <v-col class="d-flex justify-center">
          <my-btn @click="close" color="#E8B71A" rounded="xl" width="100px"
            >No</my-btn
          >

          <!-- <v-btn @click="handleNo" color="error">No</v-btn> -->
        </v-col>
      </v-row>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  props: {
    id: {
      type: String,
    },
    dialog: {
      type: Boolean,
    },
  },

  methods: {
    close() {
      console.log(this.id);
      this.$emit("close");
    },
  },
};
</script>

<style scoped>
.brown-outline {
  border: 5px solid #a52a2a;
  border-radius: 50px;
  padding: 16px;
}
</style>
