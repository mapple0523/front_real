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
        <div v-show="tab.content2">
          <modal :visible="modalVisible" @close="closeModal">
            <div class="modal_body">
              <h2 style="margin-bottom: 1rem">Success</h2>

              <button class="button" @click="closeModal">continue</button>
            </div>
          </modal>
          <div class="table-container">
            <table class="content2 m-b">
              <thead>
                <tr>
                  <th style="width: 40%">
                    <div class="header-text center-text"> 칼럼 원본명 <div class="arrow-right"></div>
                    </div>
                  </th>
                  <th style="width: 40%">
                    <div class="header-text center-text">표준화 칼럼 <div class="arrow-right"></div>
                    </div>
                  </th>
                  <th style="width: 20% ">
                    데이터 타입
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(column, index) in columns" :key="index">
                  <td>
                    <div class="flex-center">
                      <label class="input-file-button flex" :for="`input-${index}`" style="margin-left: 1rem">
                        {{ column.name }}
                      </label>
                    </div>
                  </td>
                  <td>
                    <div class="flex-center">
                      <label class="input-file-button flex" :for="`input-${index}`">
                        {{ column.name }}<input type="text" :id="`input-${index}`" style="margin-left: 1rem" /><img
                          class="img-s" src="../../../resources/image/search.png" alt="" />
                      </label>
                    </div>
                  </td>
                  <td>
                    <p class="bd" @click="showTypeSelect = !showTypeSelect">{{ column.type }}</p>
                    <div v-if="showTypeSelect" class="popup">
                      <select v-model="column.type">
                        <option>Number</option>
                        <option>String</option>
                      </select>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="flex-end"><button @click="showModal">저장</button></div>
        </div>
      </div>
    </div>
  </div>
</template>
  
<script>
import Modal from "../../pages/main/Modal.vue";

export default {
  data() {
    return {
      modalVisible: false,
      activeTab: 0,
      showTypeSelect: false,
      fileNames: [],
      columns: [
        { name: "Column 1", type: "Number" },
        { name: "Column 2", type: "Number" },
      ], // Fill this array with your column data (name and type)
      tabs: [
        {
          title: "표준화",
          content2: "This is the content for Tab 2",
        },

      ],
    };
  },
  created() {
    // TODO: Fetch your columns data here and assign to 'columns'
  },
  components: {
    Modal: Modal,
  },
  methods: {
    showModal() {
      console.log("@@@");
      this.modalVisible = true;
    },
    closeModal() {
      console.log("###");
      this.modalVisible = false;
    },
  },
  watch: {},
  computed: {},
  mounted() {
    console.log("Main2 mounted");
  },
};
</script>
<style scoped>
.bd {
  padding: 1rem;
}

.content2>div {
  border: 1px solid #eee;
  padding: 1rem;
  min-height: 64rem;
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

.modal_body {
  text-align: center;
  width: 24rem;
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

.table-container {
  width: 90%;
  margin: auto;
}

.header-text {
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: center;
}

.center-text {
  text-align: center;
}

.arrow-right {
  border: solid black;
  border-width: 0 2px 2px 0;
  display: inline-block;
  padding: 3px;
  transform: rotate(-45deg);
  -webkit-transform: rotate(-45deg);
}

.popup {
  position: absolute;
  background-color: white;
  border: 1px solid black;
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
  