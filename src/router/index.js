import Vue from 'vue'
import Router from 'vue-router'
// import * as router from "mocha";

Vue.use(Router);

const login = r => require.ensure([], () => r(require('@/page/login')), 'login');
const urlList = r => require.ensure([], () => r(require('@/page/urlList')), 'urlList');
const manage = r => require.ensure([], () => r(require('@/page/manage')), 'manage');
const home = r => require.ensure([], () => r(require('@/page/home')), 'home');

const router = new Router({
    routes : [
        {
            path: '/',
            redirect: '/login'
        },
        {
            path: '/login',
            component: login,
            name:'login'
        },

        {
            path: '/manage',
            component: manage,
            name: '',
            children: [{
                path: '',
                component: urlList,
                meta: [],
            },
                {
                path: '/urlList',
                component: urlList,
                meta: ['数据', '链接数据'],
            },
                // {
            //     path: '/addStaff',
            //     component: addStaff,
            //     meta: ['添加数据', '添加员工'],
            // },{
            //     path: '/addCourse',
            //     component: addCourse,
            //     meta: ['添加数据', '添加课程'],
            // },{
            //     path: '/userList',
            //     component: userList,
            //     meta: ['数据管理', '用户列表'],
            // },{
            //     path: '/shopList',
            //     component: shopList,
            //     meta: ['数据管理', '商家列表'],
            // },{
            //     path: '/commentList',
            //     component: commentList,
            //     meta: ['数据管理', '评论列表'],
            // },{
            //     path: '/teacherList',
            //     component: teacherList,
            //     meta: ['数据管理', '教师管理'],
            // },{
            //     path: '/courseList',
            //     component: courseList,
            //     meta: ['数据管理', '课程管理'],
            // },{
            //     path: '/staffList',
            //     component: staffList,
            //     meta: ['数据管理', '员工管理'],
            // },{
            //     path: '/orderList',
            //     component: orderList,
            //     meta: ['数据管理', '订单列表'],
            // },{
            //     path: '/checkFeedback',
            //     component: checkFeedback,
            //     meta: ['数据管理', '用户反馈'],
            // },{
            //     path: '/shareList',
            //     component: shareList,
            //     meta: ['数据管理', '用户反馈'],
            // },{
            //     path: '/adminList',
            //     component: adminList,
            //     meta: ['数据管理', '管理员列表'],
            // },{
            //     path: '/visitor',
            //     component: visitor,
            //     meta: ['图表', '用户分布'],
            // },{
            //     path: '/newMember',
            //     component: newMember,
            //     meta: ['图表', '用户数据'],
            // },
            ]
        }
    ]
});


// 导航守卫
// 使用 router.beforeEach 注册一个全局前置守卫，判断用户是否登陆

router.beforeEach((to, from, next) => {
    if (to.path === '/login') {
        console.log('login');
        next();
    } else {
        let token = localStorage.getItem('Authorization');

        if (token === null || token === '') {
            console.log('no token');
            alert('用户未登录');
            next('/login');
        } else {
            next();
        }
    }
});

// router.beforeEach((to, from, next) => {
//     console.log(to.path);   // 即将要进入路由的对象
//     console.log(from.path); // 当前导航要离开的路由对象
//     console.log(next); // 调用next该方法，才能进入下一个路由
//     next();
// });

// export default new Router({
// 	routes,
// 	strict: process.env.NODE_ENV !== 'production',
// })
export default router;
