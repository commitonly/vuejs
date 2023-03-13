<template>
  <div style="padding : 10px">
    <h4>팔로워</h4>
    <input placeholder="?"/>
    <div class="post-header" v-for="(a,i) in follower"  :key="i">
      <div class="profile" :style="`background-image: url(${a.url})`"></div>
      <span class="profile-name">{{ a.name }}</span>
    </div>
  </div>
</template>

<script>
import {computed, onMounted, reactive, ref, toRefs, watch} from "vue";
import axios from "axios";
import {useStore} from "vuex";

export default {
  name: 'mypage',
  props: {
    one : Number,
  },

  setup() {
    // reference를 만들자
    let follower = ref([]);
    // // let test = reactive({ name : 'kim' })
    //
    // let {one} = toRefs(props);
    // one.value
    // console.log(one.value);
    //
    // let result = computed( ()=> {
    //   return follower.value.length
    // })
    //
    // console.log(result.value)
    //
    // let store = useStore();
    // console.log(store.state.name)
    // console.log(store.commit())
    //
    // watch(one, ()=>{
    //
    // })



    // 기능개발을 고도화해서 기본적인 CRUD에서 벗어나 서버와 연동을 해야함.
    // 현재 사내 코드 기능구현이 시급해서 잠정중단.
    //  데이터바인딩, methods, watch, component, props, event, mitt, v-if, v-for 기능 숙지 숙달
    // 스프링부트와 VUE를 활용해서 제대로 된 사이트 하나 만드는 것이 목표
    // 현재 스터디 및 업무 과중으로 인해 일시중단되었지만 이번에는 코드카타가 아니라 제대로 해보고 싶다.



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