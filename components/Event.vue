<template>
  <v-card color="#FF914D" :to="'/festival/'+a_event.event_id">
    <div class="mb-3">
      <v-img :src="a_event.event_img" height="250"> </v-img>

      <div class="pt-3 pb-1 px-3 white--text">{{ a_event.event_title }}</div>
      <div class="pt-3 pb-1 px-3 white--text">School of {{ a_event.event_school }}</div>

      <div class="pt-3 pb-1 px-3 white--text">{{ a_event.event_date }}</div>

    </div>

    <v-card color="#FFFFFF">
      <div
        class="pt-3 pb-1 px-3 black--text d-flex justify-center align-center"
      >
        รายละเอียดเพิ่มเติม
        <v-icon class="black--text pl-1 my-2">mdi-format-align-left</v-icon>
      </div>
    </v-card>
  </v-card>
</template>

<script>
export default {
  name: "event",
  props: ["a_event"],
};
</script>
