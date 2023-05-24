<template>
  <!-- ??? 왜 있는지 모르겠음 -->
  <div class="tab-container">
    <!-- Tab 배경? 테두리? -->
    <ul class="tab-list flex-end">
      <li v-for="(tab, index) in tabs" :key="index" :class="{ active: activeTab === index }" @click="activeTab = index">
        {{ tab.title }}
      </li>
    </ul>
    <!-- tab과 tab내부 만드는 기능 -->
    <div class="tab-content">
      <div class="flex m-b"></div>
      <div v-for="(tab, index) in tabs" :key="index" v-show="activeTab === index" class="name m-b">
        <button @click="navigatorToVisual">시각화 목록으로 </button>
        <div v-show="tab.content3" class="content3">
          <div class="flex title">
            <h2>Bar Chart</h2>
          </div>
          <div class="flex content2 m-b">
            <div style="width: 60%">
              <button @click="goToy_Barchart">차트를 세로로 전환</button>
              <canvas ref="barChart"></canvas>
            </div>
            <div style="width: 40%">
              <div class="box m-b">
                <div class="flex">
                  <h2>ABC.Table 통계정보</h2>
                </div>
                <ul>
                  <li v-for="(label, index) in data.labels" :key="label">
                    {{ label }}: {{ sumData.datasets[0].data[index] }}
                  </li>
                </ul>
              </div>
              <div class="box">
                <div class="flex">
                  <h2>변수(Colunm) 선택</h2>
                </div>
                <div class="select">
                  <ul>
                    <li v-for="label in data.labels" :key="label">
                      {{ label }}
                      <button @click="toggleLabel(label)">
                        {{ labelStatus[label] ? 'Off' : 'On' }}
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <button @click="downloadChart">차트 저장</button>
          <!-- Button for chart creation -->
          <div @click="showDiv3 = !showDiv3">
            <button @click="navigatorToTablelist">차트 만들기</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
  
<script>
import Modal from "../main/Modal.vue";
import { Chart, registerables } from 'chart.js'
Chart.register(...registerables)

export default {
  data: () => ({
    showDiv3: false,
    activeTab: 0,
    tabs: [
      {
        title: "ABC.Table",
        content3: "This is the content for Tab 3",
      },
    ],
    // 여기부터 데이터를 받아오게 하면 될듯
    labelStatus: {
      'Red': true,
      'Blue': true,
      'Yellow': true,
      'Green': true,
      'Purple': true,
      'Orange': true,
    },
    type: 'bar',
    data: {
      labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
      datasets: [{
        label: '# of Votes',
        data: [
          [12, 7, 10, 10], // multiple values for 'Red'
          [19], // single value for 'Blue'
          [3, 6, 5], // multiple values for 'Yellow'
          [5], // and so on...
          [2],
          [3],
        ],
        // 여기까지 데이터를 받아오게 하면 될듯
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)'
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)'
        ],
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  }),
  mounted() {
    this.createChart()
  },
  computed: {
    sumData() {
      let sumData = JSON.parse(JSON.stringify(this.data));

      sumData.datasets[0].data = sumData.datasets[0].data.map((dataArr) => {
        return dataArr.reduce((acc, curr) => acc + curr, 0);
      });

      return sumData;
    },
    filteredData() {
      let newData = JSON.parse(JSON.stringify(this.sumData));

      newData.labels = newData.labels.filter((label, index) => {
        return this.labelStatus[label];
      });

      newData.datasets[0].data = newData.datasets[0].data.filter((_, index) => {
        return this.labelStatus[this.sumData.labels[index]];
      });

      return newData;
    },
  },
  methods: {
    goToy_Barchart() {
        this.$router.push('/y_Barchart.page'); // y_Barchart.vue로 이동하는 라우터 네비게이션
      },
    createChart() {
      this.chart = new Chart(this.$refs.barChart, {
        type: 'bar',
        data: this.filteredData,
        options: this.options
      });
    },
    updateChartData() {
      this.chart.data = this.filteredData;
      this.chart.update();
    },
    toggleLabel(label) {
      this.labelStatus[label] = !this.labelStatus[label];
      this.updateChartData();
    },
    navigatorToTablelist() {
      this.showDiv3 = true;
      this.$router.push('/Tablelist.page');
    },
    navigatorToVisual() {
      this.$router.push('/Visualization.page/${id}');
    },
    downloadChart() {
  // chart.js에서 이미지 데이터를 얻습니다.
  let imageData = this.chart.toBase64Image();

  // 새로운 a 엘리먼트를 생성하고, href 속성에 이미지 데이터를 설정합니다.
  let dummyLink = document.createElement('a');
  dummyLink.download = 'chart.png';
  dummyLink.href = imageData;
  dummyLink.dataset.downloadurl = ['image/png', dummyLink.download, dummyLink.href].join(':');

  // a 엘리먼트를 클릭하여 이미지를 다운로드합니다.
  dummyLink.click();
}

  }
}
</script>

<style scoped>
.tab-content {
  min-height: 76rem;
}

.content3 {
  position: relative;
}

.content2>div {
  border: 1px solid #eee;
  padding: 1rem;
  min-height: 61rem;
}

.select {
  background: #fff;
  margin-top: 1rem;
  min-height: 23rem;
  max-height: 23rem;
  overflow: scroll;
  overflow-x: hidden;
}

h2 {
  color: #333;
  font-size: 20px;
}

/* canvas {
  max-width: 300px;
  max-height: 300px;
} */
.box {
  padding: 1rem;
}
</style>