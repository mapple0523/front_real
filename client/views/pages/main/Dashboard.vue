<template>
  <div class="tab-container">
    <ul class="tab-list flex-end">
      <li v-for="(tab, index) in tabs" :key="index" :class="{ active: activeTab === index }" @click="activeTab = index">{{ tab.title }}</li>
    </ul>
    <div class="tab-content">
      <div v-for="(tab, index) in tabs" :key="index" v-show="activeTab === index" class="name">
    <div contenteditable="true" @input="e => (tab.content = e.target.textContent)">
      {{ tab.content }}
    </div>
  </div>
      <button style="margin-top: 5rem" @click="showModal">저장</button>
      <div>
        <select name="" id="" class="m-r"  v-model="selectedLayout">
          <option value="layout1">2단(1*3) 레이아웃</option>
          <option value="layout2">2단(2*2) 레이아웃</option>
          <option value="layout3">2단(2*3) 레이아웃</option>
          <option value="layout4">2단(2*4) 레이아웃</option>
          <option value="layout5">2단(3*1) 레이아웃</option>
          <option value="layout6">2단(3*2) 레이아웃</option>
          <option value="layout7">2단(3*3) 레이아웃</option>
          <option value="layout8">2단(4*2) 레이아웃</option>
          <option value="layout9">2단(4*4) 레이아웃</option>
          <option value="layout10">3단(2*3*3) 레이아웃</option>
        </select>
        <div v-if="selectedLayout === 'layout1'" class="layout layout1">
          <div class="col3"></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div v-else-if="selectedLayout === 'layout2'" class="layout layout2">
          <div @click="ShowModal1"></div>
          <div class="chart" @click="showDiv4 = !showDiv4">
          차트 있는경우
            <div v-show="showDiv4" class="changebox">
              <button class="m-r">삭제하기</button>
              <button @click="ShowModal1">변경하기</button>
            </div>
          </div>
          <div></div>
          <div></div>
          <Modal :visible="modalVisible" @close="closeModal1">
            <div class="modal_body modal_body2">
              <h2 style="margin-bottom: 1rem">Select chart list</h2>
              <div class="layout layout00">
                <div class="divItem">1</div>
                <div class="divItem">2</div>
                <div class="divItem">3</div>
                <div class="divItem">4</div>
              </div>
              <button class="button" @click="closeModal1">ok</button>
            </div>
          </Modal>
      </div>
        <div v-else-if="selectedLayout === 'layout3'" class="layout ">
          <div class="layout2 layout" style="background: none;">
            <div></div>
            <div></div>
          </div>
          <div class="layout1 layout" style="background: none;">
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
        <div v-else-if="selectedLayout === 'layout4'" class="layout2 layout">
          <div class="layout " style="background: none;">
            <div class="col2"></div>
            <div></div>
            <div></div>
          </div>
          <div class="layout" style="background: none;">
            <div class="col2"></div>
            <div></div>
            <div></div>
          </div>
        </div>
        <div v-else-if="selectedLayout === 'layout5'" class="layout layout1">
          <div></div>
          <div></div>
          <div></div>
          <div class="col3"></div>
        </div>
        <div v-else-if="selectedLayout === 'layout6'" class="layout ">
          <div class="layout1 layout" style="background: none;">
            <div></div>
            <div></div>
            <div></div>
          </div>
          <div class="layout2 layout" style="background: none;">
            <div></div>
            <div></div>
          </div>
        </div>
        <div v-else-if="selectedLayout === 'layout7'" class="layout layout1">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div v-else-if="selectedLayout === 'layout8'" class="layout layout2">
          <div class="layout " style="background: none;">
            <div></div>
            <div></div>
            <div class="col2"></div>
          </div>
          <div class="layout" style="background: none;">
            <div></div>
            <div></div>
            <div class="col2"></div>
          </div>
        </div>
        <div v-else-if="selectedLayout === 'layout9'" class="layout layout4">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div v-else-if="selectedLayout === 'layout10'" class="layout layout10">        
          <div class="layout2 layout" style="background: none;">
            <div></div>
            <div></div>
          </div>
          <div class="layout1 layout" style="background: none;">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
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
        selectedLayout: "layout2",
        activeTab: 0,
        modalVisible: false,
        showDiv4: false,
      tabs: [
        {
          title: "Make DashBoard",
          content: "This is Make a DashBoard"
        },
      ]
    };
  },
  components: {
    Modal: Modal,
  },
  methods: {
    ShowModal1() {
      console.log("@@@");
      this.modalVisible = true;
    },
    closeModal1() {
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
.layout00 {
  padding: 1rem;
  max-height: 410px;
  overflow: scroll;
  overflow-x: hidden;
  display: flex;
  flex-wrap: wrap;
  background-color: #fff;
}
.modal_body {
  text-align: center;
  width: 24rem;
  background: transparent;
}
.modal_body2 {
  width: 49rem !important;
  background: transparent;
}
.modal {
  left: 24%;
  background: transparent;
}
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
.divItem {
  width: 45%;
  height: 100px;
  background-color: orange;
  flex-basis: 48%; 
}
h2 {
  color: #333;
  font-size: 20px;
}

</style>
