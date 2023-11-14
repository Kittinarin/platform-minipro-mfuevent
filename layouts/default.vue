<template>
  <v-app dark>
    

    <v-main>
      <nuxt />
    </v-main>
  </v-app>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style scoped>
@import url('typeface-montserrat');

.logoevent {
  height: 50%;
  width: 150px;
  border-radius: 10%;
}

.headcard {
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  margin-left: 10%;
  margin-right: 10%;
  border-radius: 60px;
  background-color: rgb(232, 183, 26);
  height: 50%;
  width: max-content;
}

.HeadMarkText {
  color: black;
  font-weight: 650;
  font-family: 'Montserrat', sans-serif;
  font-size: 250%;
  text-align: center;
  margin-top: 13px;
  margin-left: 10%;
  margin-right: 10%;
}

@media (max-width: 900px) {
  .HeadMarkText {
    font-size: 20px;
  }
}

@media (max-width: 600px) {
  .HeadMarkText {
    font-size: 16px;
  }
}

@media (max-width: 400px) {
  .HeadMarkText {
    font-size: 10px;
  }
}
</style>
