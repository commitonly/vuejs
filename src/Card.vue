<template>
  <div>
    <img :src="datas.image" class="romm-img"><br/>
    <h4 @click="함수('modalOpen', datas.id)">{{ datas.title }}</h4>
    <p>{{ datas.price }}원</p>
  </div>
  <!--  <div>-->
  <!--    <h4 v-for="(item,i) in datas" :key="i">-->
  <!--      <img :src="item.image" class="romm-img"><br/>-->
  <!--      <div @click="modalOpen=true; pushed = [i]" class="name">{{ item.title }}</div>-->
  <!--      <p>{{item.price}}원</p>-->
  <!--    </h4>-->
  <!--    <br/>-->
  <!--  </div>-->
</template>

<script>
export default {
  name: 'Card',
  props: {
    datas: Object,
    modalOpen: Boolean,
  },
  methods: {
    함수() {
      this.$emit('modalOpen', this.datas.id)
    }
  }

}
</script>

<style lang="scss" scoped>

</style>