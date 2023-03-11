<template>
  <div style="padding : 10px">
    <h4>팔로워</h4>
    <input placeholder="?"/>
    <div class="post-header">
      <div class="profile" style="background-image: url()"></div>
      <span class="profile-name">{{ follower }}</span>
    </div>
  </div>
</template>

<script>
import {onMounted, ref} from "vue";
import axios from "axios";

export default {
  name: 'mypage',
  setup() {
    // reference를 만들자
    let follower = ref([]);

    onMounted(() => {
      axios.get('/follower.json').then((a) => {
        follower.value = a.data;
      })

    })


    return {follower}
  },

  data() {
    return {}
  }

}
</script>

<style scoped>

</style>