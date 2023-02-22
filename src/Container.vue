<template>
  <div>
    <Post :DataList="a" v-for="(a,i) in DataList" :key="i" />
  </div>
</template>

<script>
import post from "@/Post.vue";
import data from "@/Data";

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