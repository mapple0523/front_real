<template>
  <div class="tab-container">
    <ul class="tab-list flex-end">
      <li
        v-for="(tab, index) in tabs"
        :key="index"
        :class="{ active: activeTab === index }"
        @click="activeTab = index"
      >
        {{ tab.title }}
      </li>
    </ul>
    <div class="tab-content">
      <div class="flex m-b">
          <div>
            <p class="m-b-1">현재 등록된 데이터 수: 0개</p>
            <p>표준화가 완료된 데이터 수: 0개</p>
          </div>
          <div>
            <!-- <label class="input-file-button m-r" for="input-file"> -->
            <label class="input-file-button m-r" @click="navigatorToFileInsert">
              파일 추가하기
            </label>
            <input type="file" id="input-file" style="display: none" />
            <button class="input-file-button" @click="navigatorToDataList">데이터 조회</button>
          </div>
      </div>
      <div
        v-for="(tab, index) in tabs"
        :key="index"
        v-show="activeTab === index"
        class="name m-b"
      >
        {{ tab.content }}
      </div>
      <div class="layout" style="background: none">
        <div><h2>표준화를 할 때 사용된 용어 순위</h2></div>
        <div><h2>도메인 순위</h2></div>
        <div class="col2"><h2>자주 사용된 합성 용어 순위</h2></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeTab: 0,
      tabs: [
        {
          title: "Main",
          content: "This is Main Page. Check All The Files.",
        },
      ],
    };
  },
  methods: {
    // 데이터 목록 조회로 이동하기
    navigatorToDataList() {
      this.$router.push('/Datalist.page');
    },
    // 파일추가로 이동하기
    navigatorToFileInsert(){
      this.$router.push('/Tableinsert.page');
    }
  },
  watch: {},
  computed: {},
  mounted() {
    console.log("Main2 mounted");
  },
};
</script>
<style scoped>
.input-file-button {
  padding: 5px 10px;
  border: 1px solid #ff6600;
  background: #fff;
  border-radius: 4px;
  /* color: white; */
  cursor: pointer;
  box-shadow: 2px 2px 0px 1px #f3f3f3;
}
h2 {
  text-align: center;
  padding: 1rem;
  color: #333;
}
p{font-size: 14px;}
p::before{
    content: "";
    border-left: 13px solid #ff6600;
    font-size: 1px;
    margin-right: 1rem;
    }
</style>
