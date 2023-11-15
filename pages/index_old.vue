<template>
  <div class="background-component">
    <v-row justify="center" align="center">
      <v-col cols="12" sm="10" md="8" lg="6">
        <v-spacer></v-spacer>
        <v-card class="centercard">
          <v-card-text>
            <p class="maintext">
              ยินดีต้อนรับสู่ EquipmentEase 
               บริการเช่ายืมของต่าง ๆผ่านทางเว็ปไซด์ของเรามีสินค้าให้ท่านเลือกเช่าได้หลากหลาย
               และสามารถเช่ารายวันถึงรายเดือนหากท่านสนใจในสินค้า ท่านสามารถซื้อหลังใช้บริการเราได้
               และช่องทางการติดต่อสอบถามได้ที่เพจเฟสบุ๊คของเรา "EquipmentEase - เช่าของออนไลน์" 
            </p>
          </v-card-text>
          <v-card-actions>
            <v-spacer />
            <v-btn color="#FF914D" nuxt to="/homepage" style="color: white;">
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
  background-image: url('/pictrue.png');
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
  border: 5px solid #FF914D;
}

.maintext {
  margin-top: 10%;
  font-family: 'Montserrat', sans-serif;
  text-align: center;
  color: rgb(0, 0, 0);
  font-size: 200%;
  line-height: 1.5;
  margin-left: 5%;
  margin-right: 5%;
}



</style>



