<template>
  
  <div style="margin-top: 5rem;">
        <router-link to="/Main.page"> <h2 ><img style="margin-right: 1rem;" class="img-s" src="../../resources/image/home.png" alt=""
        />메인</h2></router-link>
    <div v-for="(item, index) in items" :key="index" class="m-b" style="margin-top: 3rem;">
      <div class="local flex"><img src="../../resources/image/home.png" alt=""> pagelocation</div>
      <div @click="item.showContent = !item.showContent" class="flex">
        <div class="flex">
          <div v-show="item.icon1"><img class="img-s" src="../../resources/image/database.png" alt=""
        /></div>
          <div v-show="item.icon2"><img class="img-s" src="../../resources/image/schema.png" alt=""
        /></div>
          <h2>{{ item.title }}</h2>
        </div>
        <span v-if="item.showContent"
          ><img src="../../resources/image/down.png" alt=""
        /></span>
        <span v-else><img src="../../resources/image/up.png" alt="" /></span>
      </div>
      <div v-show="item.showContent">
        <router-link to="/Tableinsert.page"> <p v-show="item.content1">파일 관리</p></router-link>
        <router-link to="/Tablelist.page"> <p v-show="item.content1">테이블 리스트</p></router-link>
        <!-- <router-link to="/Datalist.page"> <p v-show="item.content1">데이터 목록</p></router-link> -->
        <router-link to="/Dashboard.page"><p v-show="item.content2">대시보드</p></router-link>   
        <router-link to="/Dashboardlist.page"><p v-show="item.content2">대시보드 목록</p></router-link>   
        <router-link to="/Barchart.page"><p v-show="item.content2">시각화 테스트</p></router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          title: "데이터 관리",
          content1: "Content for item 1.",
          showContent: false,
          icon1: "d",
        },
        {
          title: "데이터 활용",
          content2: "Content for item 2.",
          showContent: false,
          icon2: "d",
        },
      ],
    };
  },
  methods: {},
  watch: {},
  computed: {},
  mounted() {
    console.log("Menu mounted");
  },
};
</script>
<style scoped>
.local{position: absolute;     font-size: 23px;
    top: 0;
    left: 32rem;
    width: 50%;}

h2 {
  color: #000;
  font-size: 2rem;
}
p{padding: 1rem 0 0 3rem; font-size: 18px;}
</style>
