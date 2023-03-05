<template>
  <div @click="fire" :class="filter + ' filter-item'" :style="`background-image:url(${url})` ">
    <!--    공간을 열어두는 것 name 슬롯으로 여러개의 공간 만들기-->
<!--    <slot name="a"></slot>-->
<!--    <slot name="b"></slot>-->
<!--    <slot :msg="msg"></slot>-->
    <slot></slot>
<!--    <button @click="fire">버튼</button>-->
  </div>
</template>

<script>
export default {
  name: 'filterbox',
  methods : {
    fire(){
      this.emitter.emit('clickBox', this.filter)
    },

  },
  data() {
    return {
      msg : 'hello'
    }
  },


  props: {
    url: String,
    filter: String,
  }
}
</script>

<style scoped>
.filter-item {
  width: 100px;
  height: 100px;
  margin: 10px 10px 10px auto;
  padding: 8px;
  display: inline-block;
  color: white;
  background-size: cover;
  background-position: center;
}
</style>
