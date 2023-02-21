import { createWebHistory, createRouter } from "vue-router";
import List from "./components/List.vue";
import Home from "./components/Home.vue";
import Detail from "./components/Detail.vue";
import error from "@/components/Error.vue";
import Author from "@/components/Author.vue";
import Comment from "@/components/Comment.vue";

const routes = [

    {
        path: "/list",
        component: List,
    },
    {
        path: "/",
        component: Home,
    },
    {
        path: "/detail/:id",
        // path: "/detail/:id(\\d+)",// 정규식문법 : 숫자만 넣어라!
        // path: "/detail/:id*",// 정규식문법 : /:id/:id 이렇게 슬래시 이후로 중복해서 쳤을 때
        component: Detail,
        children:[
            {
                path: "author",
                component : Author,
            },
            {
                path : "comment",
                component: Comment,
            },
        ]
    },
    {
        // 이런 404페이지를 만들게 되면 최하단에 쓰는 것이 좋다. 위에 작성된 코드가 우선권을 가지니까 가장 아래에 쓰도록하자
        // 그렇지 않으면 이게 최상단이면 아래에 list detail 이런 단어가 anything 정규식에 먹힌다.
        path: "/:anything(.*)", // 정규식 문법 : 모든 문자가 들어오면 !
        component: error,
    },


];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;