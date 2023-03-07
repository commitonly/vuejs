import { createStore } from 'vuex'

const store = createStore({
    state(){
        return {
            name : 'kim',
            age : 20,
            likes : 30,
            LikesState : false,
        }
    },
    // state 수정 정의하는 곳
    mutations : {
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
        }

    }


})

export default store