<template>
    <div class="tab-container">
      <!-- Tab list -->
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
    
      <!-- Tab content -->
      <div class="tab-content">
        <!-- Insert your additional content here -->
        <div class="flex m-b"></div>
        <div
          v-for="(tab, index) in tabs"
          :key="index"
          v-show="activeTab === index"
          class="name m-b"
        >
          <div v-show="tab.content3" class="content3">
            <!-- ABC Table section -->
            <div class="flex title">
              <h2>ABC.Table</h2>
              <button @click="navigatorToData">데이터 목록으로 이동</button>
              <!-- More content here -->
              <div>
                <div class="btn-set">
                  <!-- Module list -->
                  <div v-show="showDiv" class="modulelist layout1 layout">
                    <!-- Toggles for showing the second div -->
                    <div v-for="(item, index) in 8" :key="index">
                      <span v-if="index === 0" @click="navigatorToBar">막대 차트</span>
                      <span v-if="index === 1" @click="navigatorToDoughnut">도넛 차트</span>
                      <span v-if="index === 2" @click="navigatorToLine">선형 차트</span>
                      <span v-if="index === 3" @click="navigatorToPie">파이 차트</span>
                      <span v-if="index === 4" @click="navigatorToPolararea">극좌표형 차트</span>
                      <span v-if="index === 5" @click="navigatorToRadar">레이더 차트</span>
                      <span v-if="index === 6" @click="navigatorToBubble">버블 차트</span>
                    </div>
                  </div>
                </div>
                <!-- Module one -->
                <div class="moduleone" v-show="showDiv2">
                  <!-- More content here -->
                  <div>
                    <!-- Chart and axes selection -->
                    <div class="flex content2 m-b">
                      <div style="width: 60%">
                        <div class="chart">chart</div>
                      </div>
                      <div style="width: 40%">
                        <!-- X and Y axis selection boxes -->
                        <div class="box m-b">
                          <div class="flex">
                            <h2>x축 선택</h2>
                            <p>-</p>
                          </div>
                          <div class="select">
                            <p>-</p>
                            <p>-</p>
                            <p>-</p>
                          </div>
                        </div>
                        <div class="box">
                          <div class="flex">
                            <h2>y축 선택</h2>
                            <p>-</p>
                          </div>
                          <div class="select">
                            <p>-</p>
                            <p>-</p>
                            <p>-</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <!-- Button for chart creation -->
                    <div @click="showDiv3 = !showDiv3">
                      <!-- <button @click="tab.content3">차트 만들기</button> -->
                      <button @click="navigatorToTablelist">차트 만들기</button>
                    </div>
                  </div>
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
        currentIndex: 0, // Index to keep track of the current button text
        showDiv: true,
        showDiv2: false,
        showDiv3: false,
        showDiv4: false,
        modalVisible: false,
        modalVisible2: false,
        activeTab: 0,
        tabs: [
          {
            title: "ABC.Table",
            content3: "This is the content for Tab 3",
          },
        ],
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
      navigatorToFileInsert(){
        this.$router.push('/Tableinsert.page');
      },
      //칼럼 표준화로 이동하기
      columnStandard() {
        this.$router.push('/Filestandard.page');
      },
      navigatorToTablelist() {
        this.tab.content1 = true;
        this.$router.push('/Tablelist.page');
        
      },
      navigatorToBar() {
      this.$router.push('/Barchart.page/${id}');
    },
    navigatorToDoughnut() {
      this.$router.push('/Doughnutchart.page');
    },
    navigatorToLine() {
      this.$router.push('/Linechart.page');
    },
    navigatorToPie() {
      this.$router.push('/Piechart.page');
    },
    navigatorToPolararea() {
      this.$router.push('/Polarareachart.page');
    },
    navigatorToRadar() {
      this.$router.push('/Radarchart.page');
    },
    navigatorToBubble() {
      this.$router.push('/Bubblechart.page');
    },
    navigatorToData() {
      this.$router.push('/Tablelist.page');
    },
    },
    watch: {},
    computed: {
      buttonText() {
        return this.buttonTexts[this.currentIndex]; // Get the current button text based on the currentIndex
      },
    },
    mounted() {
      console.log("Main2 mounted");
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
  .changebox button{width: max-content;}
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
  .modulelist > div {
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
  .content2 > div {
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
  