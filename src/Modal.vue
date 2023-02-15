<template>
  <div class="black-bg" v-if="modalOpen == true">
    <div class="white-bg">
      <img :src="datas[pushed].image" class="romm-img">
      <h4> {{ datas[pushed].title }}</h4>
      <p> {{ datas[pushed].content }}</p>
      <input v-model="month">
<!--      <input type="range" min="1" max="12">-->
      <p> {{ month }}개월 선택 : {{ datas[pushed].price * month }}원</p>
      <button @click="$emit('closeModal')">닫기</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Modal',
  data() {
    return {
      month: 1,
    }
  },
  watch: {
    // month(a,b){ // a 는 변경 후 데이터 b는 변경 전 데이터
    month(a){
      if (a >= 13) {
        alert('13개월 이상은 불가능합니다.')
        this.month = 1
      }
      if (isNaN(a)){
        alert("숫자만 입력해주세요!")
        this.month = 1
      }
      if (a == 0){
        alert('1보다 작은 수를 입력할 수 없습니다.')
        this.month = 1
      }
    },
  },
  props: {
    datas: Array,
    pushed: Number,
    modalOpen: Boolean,
  }
}
</script>

<style lang="scss" scoped>

</style>