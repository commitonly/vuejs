<template>
  <div class="header">
    <ul class="header-button-left">
      <li>Cancel</li>
    </ul>
    <ul class="header-button-right">
      <li v-if="step==1" @click="step++">Next</li>
      <li v-if="step==2" @click="publish">발행</li> <!-- 이미지가 왜 안들어가지? -->
    </ul>
    <img src="./assets/logo.png" class="logo"/>
  </div>

  <Container :DataList="DataList" :step="step" :url="url" @my-event="handleEvent" @my-photo="handlePhoto" />
  <button @click="more">더보기</button>

  <!--  <div class="sample-box">임시 박스</div>-->

  <div class="footer">
    <ul class="footer-button-plus">
      <input @change="upload" type="file" id="file" class="inputfile"/>
      <label for="file" class="input-plus">+</label>
    </ul>
  </div>


<!--혹시 모르니 지우지말고 나중에 연결하거나 응용해보자 -->
<!--  회사 코드와 비교해가면서 기본적인 CRUD에 응용해야함. -->

  <!--  연습용 버튼 : 각 버튼 클릭시 내용물 바꿔보기 -->
  <!--  <div v-if="step == 0">내용0</div>-->
  <!--  <div v-if="step == 1">내용1</div>-->
  <!--  <div v-if="step == 2">내용2</div>-->
  <!--  <button @click="step =  0">버튼0</button>-->
  <!--  <button @click="step =  1">버튼1</button>-->
  <!--  <button @click="step =  2">버튼2</button>-->
  <!--  <div style="margin-top : 500px"></div>-->


</template>

<script>

import container from "@/Container.vue";
import data from "@/Data";
import axios from 'axios'


export default {
  emits: ['my-event', 'my-photo'],
  name: 'App',
  data() {
    return {
      DataList: data,
      count: 0,
      step: 0,
      url : '',
      photo : '',
      message : '',

    }
  },
  components: {
    Container: container,

  },
  methods: {
    more() {
      if (this.count == 0)
        axios.get('https://codingapple1.github.io/vue/more0.json')
            .then((result) => {
              console.log(result.data);
              this.DataList.push(result.data)
              this.count++;
            }).catch(() => {
          console.log('저런.. 실패해버렸네요..')
        })
      if (this.count == 1) {
        axios.get('https://codingapple1.github.io/vue/more1.json')
            .then((result) => {
              console.log('카운트1이라서 성공했습니다!', result.data)
              this.DataList.push(result.data)
              this.count = 0;
            }).catch(() => {
          console.log('저런.. 실패해버렸네요.. 카운트를 확인하세요!')
        })
      }
    },
    publish() {
      let myPost = {
        name: "Kim Hyun",
        userImage: "https://placeimg.com/100/100/arch",
        postImage: this.photo,
        likes: 36,
        date: "May 15",
        liked: false,
        content: this.message,
        filter: "perpetua"
      };
      this.DataList.unshift(myPost); // 왼쪽 Array에 자료를 넣어주는 코드
      this.step = 0; // 메인페이지로 돌아가기.
    },
    upload(e) {
      let a = e.target.files;
      console.log(a[0]);
      let url = URL.createObjectURL(a[0]);
      console.log(url);
      this.url = url;
      this.step++;
    },
    handleEvent(dataFromChild) {
      this.message = dataFromChild;
    },
    handlePhoto(dataFromChildPhoto){
      this.photo = dataFromChildPhoto;
    }
  }
}
</script>

<style>
body {
  margin: 0;
}

ul {
  padding: 5px;
  list-style-type: none;
}

.logo {
  width: 22px;
  margin: auto;
  display: block;
  position: absolute;
  left: 0;
  right: 0;
  top: 13px;
}

.header {
  width: 100%;
  height: 40px;
  background-color: white;
  padding-bottom: 8px;
  position: sticky;
  top: 0;
}

.header-button-left {
  color: skyblue;
  float: left;
  width: 50px;
  padding-left: 20px;
  cursor: pointer;
  margin-top: 10px;
}

.header-button-right {
  color: skyblue;
  float: right;
  width: 50px;
  cursor: pointer;
  margin-top: 10px;
}

.footer {
  width: 100%;
  position: sticky;
  bottom: 0;
  padding-bottom: 10px;
  background-color: white;
}

.footer-button-plus {
  width: 80px;
  margin: auto;
  text-align: center;
  cursor: pointer;
  font-size: 24px;
  padding-top: 12px;
}

.sample-box {
  width: 100%;
  height: 600px;
  background-color: bisque;
}

.inputfile {
  display: none;
}

.input-plus {
  cursor: pointer;
}

#app {
  box-sizing: border-box;
  font-family: "consolas";
  margin-top: 60px;
  width: 100%;
  max-width: 460px;
  margin: auto;
  position: relative;
  border-right: 1px solid #eee;
  border-left: 1px solid #eee;
}
</style>
