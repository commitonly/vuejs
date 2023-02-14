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
</template>

<script>
export default {
  name : 'Modal',
  props : {
    datas : Array,
    pushed : Number,
    modalOpen : Boolean,
  }
}
</script>

<style lang="scss" scoped>

</style>