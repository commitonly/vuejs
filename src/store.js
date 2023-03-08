import { createStore } from 'vuex'
import axios from "axios";

const store = createStore({
    state(){
        return {
            name : 'kim',
            age : 20,
            likes : 30,
            LikesState : false,
            more : {},
        }
    },
    // state 수정 정의하는 곳
    mutations : {
        setMore(state, data){
            state.more = data
        },
        changeLikes(state){
            if (state.LikesState == false){
                state.likes++
                state.LikesState = true;
            }else {
                state.likes--;
                state.LikesState = false;
            }

        },

        changeName(state){
            state.name = 'park'
        },
        changeAge(state, data){
            state.age += data
        },
        likesToggle(state){
            state.likes++;
        },


    },
    actions : {
        getDate(context){
            axios.get('https://codingapple1.github.io/vue/more0.json').then((a)=>{
                console.log(a.data);
                context.commit('setMore', a.data);
            })
        }
    },


})

export default store