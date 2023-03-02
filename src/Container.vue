<template>
  <div v-if="step == 0">
    <Post :DataList="a" v-for="(a,i) in DataList" :key="i"/>
  </div>
  <!-- 게시물이 DataList임 -->

  <!-- 필터선택페이지 -->
  <div v-if="step==1">
    <div class="upload-image" :style="`background-image:url(${url})`"></div>
    <div class="filters">
      <FilterBox :filter="filter" :url="url" v-for="filter in Filters" :key="filter">
        <!--        이렇게 열고 닫고 해주면 그 사이에 slot을 써서 원하는 데이터를 넣을 수 있다.  -->
        <!--        HTML 안에 쓸 경우 슬롯이 좋지만 그렇지 못할 경우 props를 써야해서 대체가 불가능하다-->
        <!--        템플릿으로 지정해주면서 각자 원하는 공간으로 보낼 수 있게 할 수 있다.-->
        <!--        props는 여러개를 사용할 경우 훨씬편하다 그럴 경우 슬롯보다 프롭스가 좋다 -->
<!--        <template v-slot:a>데이터1</template>-->
<!--        <template v-slot:b>데이터2</template>-->
<!--        <template v-slot:default="name"> <span> {{name.msg}}</span></template>-->
       <span> {{ filter }}</span>
      </FilterBox>
    </div>
  </div>
  <!-- 글작성페이지 -->
  <div v-if="step==2">
    <div class="upload-image" :style="`background-image:url(${url})`"></div>
    <div class="write">
      <textarea class="write-box" @input="$emit('write', $event.target.value)"></textarea>
    </div>
  </div>
</template>

<script>
import post from "@/Post.vue";
import FilterBox from "@/components/FilterBox.vue";

export default {

  components: {
    Post: post,
    FilterBox,
  },
  props: {
    DataList: Array,
    step: Number,
    url: String, // 이미지
  },
  data() {
    return {
      Filters:
          ["aden", "_1977", "brannan", "brooklyn", "clarendon", "earlybird", "gingham", "hudson",
            "inkwell", "kelvin", "lark", "lofi", "maven", "mayfair", "moon", "nashville", "perpetua",
            "reyes", "rise", "slumber", "stinson", "toaster", "valencia", "walden", "willow", "xpro2"],
    }
  }

}
</script>

<style scoped>
.upload-image {
  width: 100%;
  height: 450px;
  background: cornflowerblue;
  background-size: cover;
}

.filters {
  overflow-x: scroll;
  white-space: nowrap;
}

.filter-1 {
  width: 100px;
  height: 100px;
  background-color: cornflowerblue;
  margin: 10px 10px 10px auto;
  padding: 8px;
  display: inline-block;
  color: white;
  background-size: cover;
}

.filters::-webkit-scrollbar {
  height: 5px;
}

.filters::-webkit-scrollbar-track {
  background: #f1f1f1;
}

.filters::-webkit-scrollbar-thumb {
  background: #888;
  border-radius: 5px;
}

.filters::-webkit-scrollbar-thumb:hover {
  background: #555;
}

.write-box {
  border: none;
  width: 90%;
  height: 100px;
  padding: 15px;
  margin: auto;
  display: block;
  outline: none;
}
</style>