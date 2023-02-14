<template>

  <div class="black-bg" v-if="modalOpen == true">
    <div class="white-bg">
      <h4>건물소개</h4>
      <p> {{ datas[pushed].title }}</p>
      <img :src="datas[pushed].image" class="romm-img">
      <p> {{ datas[pushed].price }}</p>
      <p> {{ datas[pushed].content }}</p>
      <button @click="modalOpen=false">닫기</button>
    </div>
  </div>


  <div class="menu">
    <a v-for="(item,i) in menus" :key="i">{{ item }}</a>
  </div>

  <div>
    <h4 v-for="(item,i) in datas" :key="i">
      <img :src="item.image" class="romm-img"><br/>
      <div @click="modalOpen=true; pushed = [i]" class="name">{{ item.title }}</div>
      <p>{{item.price}}원</p>
    </h4>
    <br/>
  </div>

</template>

<script>
import oneroom from "./oneroom"


export default {
  name: 'App',
  data () {
    return {
      pushed : 0,
      price: [50,70,100],
      mainColor : 'color:purple',
      menus: ['Home','Shop','About'],
      products : ['역삼동원룸','천호동원룸','마포구원룸'],
      reportNum : [0,0,0],
      modalOpen : false,
      datas : oneroom,
    }
  },
  methods: {
    increase() {
      this.reportNum++;
    },
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

.romm-img{
  width: 40%;
  margin-top: 5%;
  border-radius: 20px;
  border: 1px solid purple;
}

body{
  margin:0;
}
div{
  box-sizing: border-box;
}
.black-bg {
  width: 100%; height: 100%;
  background: rgba(0,0,0,0.5);
  position: fixed; padding: 20px;
}
.white-bg{
  width: 100%; background: white;
  border-radius: 8px;
  padding: 20px;
}
.name{
  cursor: pointer;
}
</style>
