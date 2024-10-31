import Vue from 'vue'
import VueRouter from 'vue-router'
//import HelloWorld   from "@/components/HelloWorld.vue";
import UserLogin from "@/components/UserLogin.vue";
import mainPage from "@/components/MainPage.vue";
import MySpaceHome from "@/components/MySpaceHome.vue";
import MySpacePost from "@/components/MySpacePost.vue";
// import MainPage from "@/components/MainPage.vue";
// import MySpaceHome from "@/components/mySpace/MySpaceHome.vue";
// import MySpacePost from "@/components/mySpace/MySpacePost.vue";
// import PostContent from "@/components/PostContent.vue";
// import VideoDetail from "@/components/VideoDetail.vue";
// import MySpaceContent from "@/components/mySpace/MySpaceContent.vue";
// import MySpaceInfo from "@/components/mySpace/MySpaceInfo.vue";
// import MySpaceCollection from "@/components/mySpace/MySpaceCollection.vue";
// import MySpaceFollowing from "@/components/mySpace/MySpaceFollowing.vue";
// import UserMoments from "@/components/UserMoments.vue";
// import UserHistory from "@/components/UserHistory.vue";
// import SearchContents from "@/components/search/SearchContents.vue";

Vue.use(VueRouter)

const routes = [
    {
        // 首页
        path:'/',
        component:mainPage
    },
    {
        // 注册登录页
        path:'/userLogin',
        component:UserLogin
    },
    {
        // 个人中心
        path:'/myspace',
        component:mainPage,
        redirect:'/myspace/home',
        children:[
            {
                // 个人中心-首页
                path: '/home',
                component: MySpaceHome
            },
            {
                // 个人中心-我的投稿
                path: '/post',
                component: MySpacePost
            }
        ]
    },

]

const router = new VueRouter({
    routes
})

export default router