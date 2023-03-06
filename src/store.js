import { createStore } from 'vuex'

const store = createStore({
    state(){
        return {
            name : 'kim',
            age : 20,
            likes : 30,
        }
    },
    // state 수정 정의하는 곳
    mutations : {
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