<template>
  <div>
    <Post :DataList="DataList[0]" />
    <Post :DataList="DataList[1]" />
    <Post :DataList="DataList[2]" />
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