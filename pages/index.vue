<template>
  <div class="background-component">
    <v-row justify="center" align="center">
      <v-col cols="12" sm="10" md="8" lg="6">
        <v-spacer></v-spacer>
        <v-card class="centercard">
          <v-card-text>
            <p class="maintext">
              Welcome to MFUEVENT
              You can look around what events
              and activities are going on around
              the school
              If you would like to request your events to be posted
              please contact (Phone number)
            </p>
          </v-card-text>
          <v-card-actions>
            <v-spacer />
            <v-btn color="primary" nuxt to="/homepage">
              Continue
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: 'IndexPage'
}
</script>

<style scoped>
.background-component {
  background-position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: url('/background-entry-page.png');
  background-size: cover;
  background-repeat: no-repeat;
  z-index: -1;
}

/* Style the v-card as needed */
.centercard {
  margin: 15% 2vw;
  margin-bottom: 20%;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 135px;
  border: 5px solid #E8B71A;
}

.maintext {
  margin-top: 10%;
  font-family: 'Montserrat', sans-serif;
  text-align: center;
  color: rgb(143, 43, 49);
  font-size: 200%;
  line-height: 1.5;
  margin-left: 5%;
  margin-right: 5%;
}



</style>



