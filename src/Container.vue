<template>
  <div>
    <Post :DataList="a" v-for="(a,i) in DataList" :key="i" />
  </div>
</template>

<script>
import post from "@/Post.vue";

export default {
  components:{
    Post : post,
  },
  props : {
    DataList : Array,
  }

}
</script>

<style scoped>

</style>