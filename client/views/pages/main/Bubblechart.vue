<template>
    <div>
      <canvas ref="bubbleChart"></canvas>
    </div>
  </template>
  
  <script>
  import { Chart, registerables } from 'chart.js';
  Chart.register(...registerables);
  
  export default {
    mounted() {
      this.createChart();
    },
    methods: {
      createChart() {
        const canvas = this.$refs.bubbleChart;
        const ctx = canvas.getContext('2d');
  
        const data = {
          datasets: [
            {
              label: 'Bubble Chart',
              data: [
                { x: 10, y: 20, r: 5 },
                { x: 15, y: 25, r: 10 },
                { x: 8, y: 12, r: 8 },
                // Add more data points...
              ],
              backgroundColor: 'rgba(255, 99, 132, 0.2)',
              borderColor: 'rgba(255, 99, 132, 1)',
              borderWidth: 1,
            },
          ],
        };
  
        const options = {
          scales: {
            x: {
              beginAtZero: true,
            },
            y: {
              beginAtZero: true,
            },
          },
        };
  
        new Chart(ctx, {
          type: 'bubble',
          data: data,
          options: options,
        });
      },
    },
  };
  </script>
  
  <style>
  canvas {
    width: 100%;
    height: 100%;
  }
  </style>