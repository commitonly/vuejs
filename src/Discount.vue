<template>
  <div class="discount">
    <h4>지금 결제하면 {{ discount }}% 할인</h4>
  </div>
</template>

<script>
export default {
  name : "Discount",
  data() {
    return {
      discount : 30
    }
  },
  mounted() {
    let time = setInterval(() => {
      this.discount --;
      if (this.discount == 0){
        clearInterval(time);
      }
    }, 1000);
  },
}
// 리셋되도록 걸어뒀는데 리셋이 되지 않는다.
// 금요일 퇴근 후 다시 처음부터 뜯어고칠 예정 <-

</script>

<style lang="scss" scoped>

</style>