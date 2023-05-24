<template>
  <div class="tab-container">
    <ul class="tab-list flex-end">
      <li v-for="(tab, index) in tabs" :key="index" :class="{ active: activeTab === index }" @click="activeTab = index">
        {{ tab.title }}
      </li>
      <li v-for="(item, index) in listItems" :key="index">{{ item }}</li>
    </ul>

    <div class="tab-content">

      <div class="flex m-b"></div>
      <div v-for="(tab, index) in tabs" :key="index" v-show="activeTab === index" class="name m-b">
        <div v-show="tab.content1">
          <div class="flex title">
            <h1>테이블 리스트</h1>
            <div class="flex-center">
              <label class="flex" for="input-search">
                <input type="text" id="input-search" style="margin-left: 1rem" /><img class="img-s"
                  src="../../../resources/image/search.png" alt="" />
              </label>
            </div>
          </div>
          <div class="flex content3 m-b">
            <!-- 표준화 전 섹션 -->
            <div style="width: 45%">
              <div class="flex">
                <h2 class="m-b">표준화 전</h2>
                <div class="m-b">
                  <label class="input-file-button" @click="navigatorToFileInsert">
                    파일 추가하기
                  </label>
                  <input type="file" id="input-file" style="display: none" />
                </div>
              </div>
              <!-- 표준화 전 데이터 테이블 -->
              <table class="">
                <thead>
                  <tr>
                    <th>현재 등록된 데이터</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="index in files.length" :key="index">
                    <td>{{ files[index - 1]?.currentData || '-' }}
                      <button @click="columnStandard(files.id)">수정</button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <!-- 표준화 후 섹션 -->
            <div style="width: 45%">
              <h2 class="m-b">표준화 후</h2>
              <!-- 표준화된 데이터 테이블 -->
              <table class="">
                <thead>
                  <tr>
                    <th>표준화된 데이터</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(standardizedFile, index) in standardizedFiles" :key="index" class="bd inner">
                    <td class="flex">
                      <p>{{ standardizedFile.standardizedData }}</p>
                      <button @click="navigatorToFile(standardizedFile.id)">이동하기</button>
                    </td>
                  </tr>
                </tbody>
              </table>

            </div>

          </div>

        </div>
        <!-- 생성된 탭 -->
        <div v-for="(tab, index) in tabs" :key="index" v-show="activeTab === index" v-if="index !== 0">
          <h2>{{ tab.title }}</h2>
          <div v-html="tab.content">
          </div>
          <div>
            <div class="btn-set">
              <button class="m-r" @click="[show(), changeButton()]">
                {{ buttonText }}
              </button>
              <button @click="navigatorToVisual">시각화 모듈 이동</button>
            </div>
            <div v-if="buttonText === '저장된 차트 보기'">
              <div>
                <table class="">
                  <thead>
                    <tr>
                      <!-- 컬럼명 바인딩 -->
                      <th>column-1</th>
                      <th>column-2</th>
                    </tr>
                    <tr>
                      <!-- 컬럼명 바인딩 -->
                      <th>DATA TYPE</th>
                      <th>DATA TYPE</th>
                    </tr>
                  </thead>
                  <tbody>
                    <!-- 데이터 바인딩 -->
                    <tr>
                      <td>-</td>
                      <td>-</td>
                    </tr>
                    <tr>
                      <td>-</td>
                      <td>-</td>
                    </tr>
                    <tr>
                      <td>-</td>
                      <td>-</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div v-else-if="buttonText === '테이블 내용 보기'">
              <div>
                <div class="layout layout1">
                  <div class="col3" @click="showModal2"></div>
                  <div>
                    <div class="chart" @click="showDiv4 = !showDiv4">
                      차트있는 경우
                      <div v-show="showDiv4" class="changebox">
                        <button class="m-r">차트 삭제하기</button>
                        <button @click="showModal2">차트 변경하기</button>
                      </div>
                    </div>
                  </div>
                  <div @click="showModal2"></div>
                  <div @click="showModal2"></div>
                </div>
                <modal :visible="modalVisible2" @close="closeModal2">
                  <div class="modal_body modal_body2">
                    <h2 style="margin-bottom: 1rem">Select chart list</h2>
                    <div class="layout layout2">
                      <div>1</div>
                      <div>2</div>
                      <div>3</div>
                      <div>4</div>
                    </div>
                    <button class="button" @click="closeModal2">ok</button>
                  </div>
                </modal>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Modal from "../main/Modal.vue";

export default {
  data() {
    return {
      buttonTexts: ["저장된 차트 보기", "테이블 내용 보기"], // Array of button texts
      currentIndex: 0, // Index to keep track of the current button text
      files: [{ id: 2, currentData: 'Data1' },
      { id: 2, currentData: 'Data2' },],
      standardizedFiles: [{ id: 1, standardizedData: 'StandardData1' },
      { id: 2, standardizedData: 'StandardData2' },],
      showDiv: false,
      showDiv2: false,
      showDiv3: false,
      showDiv4: false,
      modalVisible: false,
      modalVisible2: false,
      activeTab: 0,
      tabs: [
        {
          title: "Table List",
          content1: "This is the content for Tab 1",
        },
      ],
      listItems: [],
    };
  },
  components: {
    Modal: Modal,
  },
  methods: {
    addNewLi() {
      const newItem = `Item ${this.listItems.length + 1}`;
      this.listItems.push(newItem);
    },
    show() {
      this.showDiv3 = !this.showDiv3;
    },
    changeButton() {
      this.currentIndex = (this.currentIndex + 1) % this.buttonTexts.length;
    },
    showModal() {
      console.log("@@@");
      this.modalVisible = true;
    },
    closeModal() {
      console.log("###");
      this.modalVisible = false;
    },
    showModal2() {
      console.log("@@@");
      this.modalVisible2 = true;
    },
    closeModal2() {
      console.log("###");
      this.modalVisible2 = false;
    },
    // 파일추가로 이동하기
    navigatorToFileInsert() {
      this.$router.push('/Tableinsert.page');
    },
    //칼럼 표준화로 이동하기
    columnStandard() {
      this.$router.push('/Filestandard.page/${id}');
    },
    navigatorToVisual() {
      this.$router.push('/Visualization.page/${id}')
    },
     navigatorToFile(id) {
      let standardizedFile = this.standardizedFiles.find(d => d.id === id);
      if (standardizedFile) {
        let existingTab = this.tabs.find(tab => tab.title === standardizedFile.standardizedData);
        if (existingTab) {
          this.activeTab = this.tabs.indexOf(existingTab);
        } else {
          this.tabs.push({
            title: standardizedFile.standardizedData,
            content: `This is the content for ${standardizedFile.standardizedData}`
          });
          this.activeTab = this.tabs.length - 1;
        }
        
        // Save the updated tabs array and activeTab index in the session storage
        sessionStorage.setItem('tabs', JSON.stringify(this.tabs));
        sessionStorage.setItem('activeTab', this.activeTab.toString());
      }
    },
    createTab(title) {
      // Create a new tab object and add it to the tabs array
      const newTab = {
        title: title,
        content: `This is the content for ${title}`
      };
      this.tabs.push(newTab);

      // Save the updated tabs array in the session storage
      sessionStorage.setItem('tabs', JSON.stringify(this.tabs));
      sessionStorage.setItem('activeTab', this.activeTab.toString());
    },
    retrieveTabsFromSession() {
      // Retrieve the tabs array from the session storage
      const savedTabs = sessionStorage.getItem('tabs');

      // Retrieve the activeTab index from the session storage
      const savedActiveTab = sessionStorage.getItem('activeTab');

      // Parse the JSON data if it exists
      if (savedTabs) {
        this.tabs = JSON.parse(savedTabs);
      }

      // Set the activeTab index if it exists
      if (savedActiveTab) {
        this.activeTab = parseInt(savedActiveTab);
      }
    },

  },
  watch: {},
  computed: {
    buttonText() {
      return this.buttonTexts[this.currentIndex]; // Get the current button text based on the currentIndex
    },
  },
  mounted() {
    this.showDiv3 = this.$route.query.showChartView;
    console.log("Main2 mounted");
    this.retrieveTabsFromSession();
  },
};
</script>
<style scoped>
.chart {
  position: relative;
}

.changebox {
  position: absolute;
  display: inline-table;
  left: 13%;
  top: 37%;
  background: none;
}

.changebox button {
  width: max-content;
}

.layout2 {
  padding: 1rem;
  max-height: 410px;
  overflow: scroll;
  overflow-x: hidden;
}

.modal_body2 {
  width: 49rem !important;
}

.div4 {
  width: 30rem;
  height: 30rem;
}

button {
  padding: 2px 10px;
}

.select {
  background: #fff;
  margin-top: 1rem;
  min-height: 23rem;
  max-height: 23rem;
  overflow: scroll;
  overflow-x: hidden;
}

.box {
  padding: 1rem;
}

.content3 {
  position: relative;
}

.modulelist {
  position: absolute;
  background: #ffffff;
  width: -webkit-fill-available;
  height: 65rem;
  left: 0;
  top: 5rem;
  overflow: scroll;
  overflow-x: hidden;
}

.chartview {
  position: absolute;
  background: #ffffff;
  width: -webkit-fill-available;
  height: 69rem;
  left: 0;
  top: 0rem;
}

.moduleone {
  position: absolute;
  background: #ffffff;
  width: -webkit-fill-available;
  height: 70rem;
  left: 0;
  top: 0rem;
}

.modulelist>div {
  min-height: 30rem;
  border: 1px solid #eee;
}

table {
  max-height: 58rem;
  overflow: scroll;
  overflow-x: hidden;
}

thead tr:nth-child(2) {
  background: #f6f6f6;
}

table,
td,
th {
  border: 1px solid #eee;
  width: -webkit-fill-available;
}

th {
  font-size: 18px;
  padding: 0.5rem;
}

td {
  font-size: 14px;
}

.bd {
  min-height: 48rem;
  padding: 1rem;
}

.content3 {
  padding: 0 2rem;
}

.content3 h2 {
  text-align: left;
}

.content2>div {
  border: 1px solid #eee;
  padding: 1rem;
  min-height: 61rem;
}

.tab-content {
  min-height: 76rem;
}

.button {
  padding: 5px 30px;
  border: 1px solid #ff6600;
  background: #fff;
  border-radius: 4px;
  /* color: white; */
  cursor: pointer;
  font-size: 1.5rem;
  margin-top: 3rem;
}

.modal {
  left: 24%;
}

.modal_body {
  text-align: center;
  width: 24rem;
}

.p-l-l {
  padding: 7px 20.2rem 7px 10px !important;
}

.content input {
  width: inherit;
}

.content {
  min-height: 76rem;
}

label {
  width: fit-content;
}

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
  color: #333;
  font-size: 20px;
}

h3 {
  font-size: 18px;
  color: #eee;
}
</style>
