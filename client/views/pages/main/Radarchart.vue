<template>
    <div class="tab-container">
      <ul class="tab-list flex-end">
        <li v-for="(tab, index) in tabs" :key="index" :class="{ active: activeTab === index }" @click="activeTab = index">
          {{ tab.title }}
        </li>
      </ul>
      <div class="tab-content">
        <div class="flex m-b"></div>
        <div v-for="(tab, index) in tabs" :key="index" v-show="activeTab === index" class="name m-b">
          <div v-show="tab.content3" class="content3">
            <div class="flex title">
              <h2>Radar Chart</h2>
            </div>
            <div class="flex content2 m-b">
              <div style="width: 60%">
                <canvas ref="barChart"></canvas>
              </div>
              <div style="width: 40%">
                <div class="box m-b">
                  <div class="flex">
                    <h2>ABC.Table 통계정보</h2>
                  </div>
                  <div class="select">
                    <p>colunm별 통계값</p>
                    <p>평균, 4분위수, 합계 등</p>
                    <p>나타나야 할듯?</p>
                  </div>
                </div>
                <div class="box">
                  <div class="flex">
                    <h2>변수(Colunm) 선택</h2>
                  </div>
                  <div class="select">
                    <p>1-1</p>
                    <p>2-2</p>
                    <p>-</p>
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
  import { Chart, registerables } from 'chart.js'
  Chart.register(...registerables)
  
  export default {
    data() {
      return {
        activeTab: 0,
        tabs: [
          {
            title: "ABC.Table",
            content3: "This is the content for Tab 3",
          },
        ],
        dataLabels: ['사람', '일', '날', '인간', '나이', '주소', '번호'],
        data: {
          labels: ['사람', '일', '날', '인간', '나이', '주소', '번호'],
          datasets: [
            {
              label: '용어들',
              data: [12 + 13 / 5, 19, 3, 5, 2, 3, 0.3],
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
            }
          ],
        },
        options: {
          scales: {
            y: {
              beginAtZero: true
            }
          }
        },
        chartInstance: null
      }
    },
    mounted() {
      this.createChart()
    },
    methods: {
      createChart() {
        if (this.chartInstance) {
          this.chartInstance.destroy(); // 기존 차트 인스턴스 제거
        }
        
        this.chartInstance = new Chart(this.$refs.barChart, {
          type: 'radar',
          data: this.data,
          options: this.options
        });
      },
      toggleLabels() {
        const targetLabel = '인간'; // 숨길 데이터의 값
        
        const index = this.data.labels.indexOf(targetLabel);
        if (index !== -1) {
          this.data.labels.splice(index, 1); // 숨겨진 데이터 제거
        } else {
          this.data.labels = this.dataLabels.slice(); // 초기 라벨 데이터 복사
        }
        this.createChart()
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