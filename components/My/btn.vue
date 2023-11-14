<template>
    <v-card
      :color="color"
      :max-width="max_width"
      :width="width"
      :rounded="rounded"
      v-ripple
      class="d-flex justify-center align-center"
      :style="cardStyles"
      @click="handleClick"
    >
      <div class="px-2" :style="textStyles">
        <slot></slot>
      </div>
    </v-card>
  </template>
  
  <script>
  export default {
    props: {
      color: {
        type: String,
        default: "primary",
      },
      width: {
        type: String,
        default: "100px",
      },
      max_width: {
        type: String,
        default: "200px",
      },
      rounded: {
        type: String,
        default: "pill", // Set the default value to true (pill)
      },
      text: {
        type: String,
        default: "Confirm",
      },
      fontSize: {
        type: String,
        default: "large",
      },
    },
    computed: {
      cardStyles() {
        return {
          height: "3rem",
        };
      },
      textStyles() {
        return {
          color: "white",
          fontSize: this.fontSize === "large" ? "large" : "small",
          userSelect: "none",
        };
      },
    },
  
    methods: {
      handleClick() {
        // Handle the click event here
        // You can customize this method to perform the desired action when the card is clicked.
        this.$emit("click");
      },
    },
  };
  </script>
  