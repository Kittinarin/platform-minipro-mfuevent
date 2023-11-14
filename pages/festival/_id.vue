<template>
  <v-row justify="center">
    <v-col class="d-flex justify-center align-start" cols="1">
      <nuxt-link to="/homepage">
        <v-icon
          style="transform: scaleX(-1); color: brown"
          class="rotate-180"
          size="120"
        >
          mdi-share-outline
        </v-icon>
      </nuxt-link>
    </v-col>

    <v-col cols="10" class="d-flex justify-center my-12">
      <v-card class="pb-12" color="#C78186" max-width="100rem" rounded="xl">
        <v-img :src="a_event.event_img" max-height="300" />

        <div class="px-6">
          <v-row>
            <v-col cols="12">
              <div class="pt-12 pb-1 white--text font-weight-bold">
                Title: {{ a_event.event_title }}
              </div>
            </v-col>
          </v-row>

          <v-row>
            <v-col cols="6">
              <div class="pt-3 pb-1 white--text font-weight-bold">
                School: {{ a_event.event_school }}
              </div>
            </v-col>

            <v-col cols="6">
              <div class="pt-3 pb-1 white--text font-weight-bold">
                Time: {{ a_event.event_date }}
              </div>
            </v-col>
          </v-row>

          <v-row>
            <v-col cols="12">
              <div class="pt-3 pb-1 white--text font-weight-bold">
                Description <br />
                {{ a_event.event_description }}
              </div>
            </v-col>
          </v-row>

          <v-row>
            <v-col cols="12">
              <div class="white--text font-weight-bold">Tag</div></v-col
            >

            <v-col
              v-for="(tag, index) in a_event.event_tags"
              :key="index"
              cols="auto"
            >
              <v-chip :color="tag.color" label>{{ tag.text }}</v-chip>
            </v-col>
          </v-row>

          <v-row>
            <v-col cols="12">
              <div class="pt-3 pb-1 white--text font-weight-bold">
                Description
                {{ a_event.event_contact }}
              </div>
            </v-col>
          </v-row>
        </div>
      </v-card>
    </v-col>

    <v-col class="d-flex justify-center align-end" cols="1">
      <v-row>
        <v-col cols="12">
          <v-icon @click="editDialog = true"  style="color: brown" class="rotate-180" size="120">
            mdi-delete
          </v-icon>
        </v-col>

        <v-col cols="12">
          <v-icon
          @click="deleteDialog = true" 
          style="color: gold"
          class="rotate-180"
          size="120"
        >
          mdi-square-edit-outline
        </v-icon>
        </v-col>

      </v-row>
    </v-col>

    <festival-edit id="1" :dialog="editDialog" @close="editDialog = false" />
    <festival-delete id="1" :dialog="deleteDialog" @close="deleteDialog = false" />

  </v-row>
</template>

<script>
export default {
  name: "event",
  data() {
    return {
      editDialog: false,
      deleteDialog: false,

      a_event: {
        event_id: 1,
        event_title:
          "นักศึกษาชั้นปีที่ 1 มฟล. เข้าร่วมพิธีถวายสัตย์ปฏิญาณต่อพระราชานุสาวรีย์สมเด็จพระศรีนครินทราบรมราชชนนี",
        event_school: "All",
        event_date: "29/02/2023  8.00-11.30",
        event_img:
          "https://cdn.discordapp.com/attachments/907187581517713449/1173185483354943548/400328773_735203061974610_6390522025429870777_n.png?ex=6563091f&is=6550941f&hm=3b7a25de6932d5214dde384db948bf0b5042e38c07c4a266d5a9a1880cd67126&",
        event_limit: 300,
        event_participant: 133,
        event_description: `มหาวิทยาลัยแม่ฟ้าหลวง (มฟล.) จัดพิธีถวายสัตย์ปฏิญาณต่อพระราชานุสาวรีย์สมเด็จพระศรีนครินทราบรมราชชนนี เมื่อวันพฤหัสบดีที่ 1 กันยายน 2565 ณ ลานเฉลิมพระเกียรติฯ โดยมีนักศึกษาชั้นปีที่ 1 เข้าร่วมพิธี โดยพิธีเริ่มจากขบวนอัญเชิญตราสัญลักษณ์มหาวิทยาลัยและเครื่องสักการะแบบล้านนาเข้าสู่ลานเฉลิมพระเกียรติฯ จากนั้นผู้แทนนักศึกษาชั้นปีที่ 1 นำกล่าวคำถวายสัตย์ปฏิญาณต่อพระราชานุสาวรีย์สมเด็จพระศรีนครินทราบรมราชชนนี ความว่า
“ข้าพเจ้า จักตั้งใจมั่นในการศึกษาเล่าเรียนจนสุดความสามารถ เพื่อหมายมั่นนำชาติสู่ความเจริญรุ่ง จะมีใจมุ่งผดุงชาติ ศาสน์ กษัตริย์ ให้คงอยู่คู่ประชาชาติไทย จะรักษาไว้ซึ่งความรู้รักสามัคคีให้เกิดมีในหมู่คณะและสังคม จะดำรงตนให้ถึงพร้อมด้วยภูมิรู้และภูมิธรรม จะยึดมั่นในกฎเกณฑ์และกติกาเพื่อให้มีความสงบและร่มเย็น จะรักษาไว้ซึ่งเกียรติศักดิ์และเกียรติภูมิของความเป็นนักศึกษาแห่งมหาวิทยาลัยในพระนาม แม่ฟ้าหลวง ตลอดไป”`,
        event_tags: [
          { text: "Blushing", color: "#FF0000" },
          { text: "Comedy", color: "#00FF00" },
          { text: "Drugs", color: "#0000FF" },
          { text: "Dubious consent", color: "#FF00FF" },
          { text: "Ecchi", color: "#FFFF00" },
          { text: "Harem", color: "#00FFFF" },
          { text: "NSFW", color: "#000000" },
          { text: "School girl", color: "#FFFFFF" },
          { text: "Yuri", color: "#808080" },
        ],

        event_contact: "1234567890",
      },
    };
  },

  methods: {
  
  },
};
</script>
