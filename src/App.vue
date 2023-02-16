<template>

  <!--  <div class="start" :class="{end : modalOpen}">-->
  <!--  <Modal @closeModal="modalOpen = false" :datas="datas" :pushed="pushed" :modalOpen="modalOpen"/>-->
  <!--  </div>-->
  <transition name="fade">
    <Modal @closeModal="modalOpen = false" :datas="datas" :pushed="pushed" :modalOpen="modalOpen"/>
  </transition>

  <div class="menu">
    <a v-for="(item,i) in menus" :key="i">{{ item }}</a>
  </div>

  <Discount v-if="showDiscount == true "/>

  <button @click="priceSort">낮은가격순정렬</button>
  <br/>
  <button @click="highPriceSort">높은가격순정렬</button>
  <br/>
  <!--  <button @click="abcSort">가나다순정렬</button><br/>-->
  <button @click="sortBack">초기화</button>

  <!--  아래는 반복문 -->
  <Card @modalOpen="modalOpen = true; pushed = $event" :datas="datas[i]" v-for="(item, i) in datas" :key="i"/>

  <!--  아래는 하드코딩 -->

  <!--  <Card :datas="datas[1]" />-->
  <!--  <Card :datas="datas[2]" />-->
  <!--  <Card :datas="datas[3]" />-->
  <!--  <Card :datas="datas[4]" />-->
  <!--  <Card :datas="datas[5]" />-->


</template>

<script>
import oneroom from "./oneroom"
import Discount from "./Discount.vue";
import Modal from "@/Modal.vue";
import Card from "@/Card.vue";


export default {
  name: 'App',
  data() {
    return {
      showDiscount: true,
      datasOrigin: [...oneroom],
      pushed: 0,
      price: [50, 70, 100],
      mainColor: 'color:purple',
      menus: ['Home', 'Shop', 'About'],
      products: ['역삼동원룸', '천호동원룸', '마포구원룸'],
      reportNum: [0, 0, 0],
      modalOpen: false,
      datas: oneroom,
    }
  },
  methods: {
    increase() {
      this.reportNum++;
    },
    priceSort() {
      this.datas.sort(function (a, b) {
        return a.price - b.price
      })
    },
    sortBack() {
      this.datas = [...this.datasOrigin];
    },
    highPriceSort() {
      this.datas.sort(function (a, b) {
        return b.price - a.price
      })
    },
    abcSort() {
      this.datas(function (a, b) {
        return a.title - b.title
      })
    }
  },

  created() {
    //html 생성 전 라이프사이클


  },

  updated() {

  },








  components: {
    Discount: Discount,
    Modal: Modal,
    Card: Card,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.menu {
  background: darkslateblue;
  padding: 15px;
  border-radius: 5px;
}

.menu a {
  color: white;
  padding: 10px;
}

.romm-img {
  width: 40%;
  margin-top: 5%;
  border-radius: 20px;
  border: 1px solid purple;
}

body {
  margin: 0;
}

div {
  box-sizing: border-box;
}

.discount {
  background: #eee;
  padding: 10px;
  margin: 10px;
  border-radius: 5px;
}


.black-bg {
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  padding: 20px;
}

.white-bg {
  width: 100%;
  background: white;
  border-radius: 8px;
  padding: 20px;
}

.name {
  cursor: pointer;
}

.start {
  opacity: 0;
  transition: all 1s;
}

.end {
  opacity: 1;
}

.fade-enter-from {
  /*opacity: 0;*/
  transform: translateY(-1000px);

}

.fade-enter-active {
  transition: all 1s;
}

.fade-enter-to {
  transform: translateY(0px);
}

.fade-leave-from {
  opacity: 1;

}

.fade-leave-active {
  transition: all 1s;
}

.fade-leave-to {
  opacity: 0;
}
</style>
