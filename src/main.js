// 导入vue这个包
import Vue from 'vue';

//解析和呈现App.vue中的内容，则导入 App.vue组件
import App from './app.vue';

//引入vm对象
import {
    vm
} from './kits/vm.js';

// 路由引入
import vueRouter from 'vue-router';

Vue.use(vueRouter);

//注册路由
//导入login.vue组件对象
import login from './components/admin/goods/login.vue';
//导入后台管理系统的整体布局组件
import layout from './components/admin/layout.vue';
//导入goodslist.vue
import goodslist from './components/admin/goods/goodslist.vue';
//导入goodsadd.vue
import goodsadd from './components/admin/goods/goodsadd.vue';
//导入goodsedit.vue
import goodsinfo from './components/admin/goods/goodsinfo.vue';

import carinfo from './components/admin/goods/carinfo.vue';

import shopping from './components/admin/goods/shopping.vue';

import order from './components/admin/goods/order.vue';

import pay from './components/admin/goods/pay.vue';

import paysuccess from './components/admin/goods/paysuccess.vue';

import vipcenter from './components/admin/goods/vipcenter.vue';

import logister from './components/admin/goods/logister.vue';

import viporderlist from './components/admin/goods/viporderlist.vue';

import orderdetail from './components/admin/goods/orderdetail.vue';

import goodslistitem from './components/admin/goods/goodslistitem.vue';



import vuex from 'vuex';

Vue.use(vuex);

var state = {
    //购物车中的数量
    goodsCount: 0
}

var actions = {
    changeBuyCount({ commit }, paramsCount) {
        commit('changeBuyCount', paramsCount);
    }
}

var mutations = {
    changeBuyCount(state, paramsCount) {
        state.goodsCount += paramsCount;
    }
}

import { getItem } from './kits/localStotagekits.js';

var getters = {
    getcount(state) {
        //然后显示添加了多少
        if (state.goodsCount > 0) {
            return state.goodsCount;
        }
        //系统刷新时，获取到购物车中有几种商品
        var item = getItem();
        var count = 0;
        for (var key in item) {
            count += item[key]
        }
        state.goodsCount = count;
        return state.goodsCount;
    }
}


var store = new vuex.Store({
    state,
    actions,
    mutations,
    getters
});

//引入axios
import axios from 'axios';

axios.defaults.baseURL = 'http://157.122.54.189:9095';
// axios.defaults.baseURL = 'http://111.230.21.151:8899';

Vue.prototype.$http = axios;

//设定AXIOS的参数使得axios发出的ajax请求能够自动带上cookie
axios.defaults.withCredentials = true;

Vue.use(axios);

//引用elementUI 和elementUI的css样式
import elementUI from 'element-ui';
import '../statics/site/css/style.css';
Vue.use(elementUI);

// //引用移动端UI的样式
import mintui from 'mint-ui';
// //将mintui样式导入
import 'mint-ui/lib/style.css';
Vue.use(mintui);

// //全局导入Mui的样式
import '../statics/mui/css/mui.css';


//创建路由
var router = new vueRouter({
    //routes构建路由
    routes: [{ name: 'default', path: '/', redirect: '/admin/goodslist' },
        {
            name: 'layout',
            path: '/admin',
            component: layout,
            children: [{
                    name: 'goodslist',
                    path: 'goodslist',
                    component: goodslist
                },
                {
                    name: 'goodsadd',
                    path: 'goodsadd',
                    component: goodsadd
                },
                {
                    name: 'goodsinfo',
                    path: 'goodsinfo/:id',
                    component: goodsinfo
                },
                {
                    name: 'carinfo',
                    path: 'carinfo',
                    component: carinfo
                },
                {
                    name: 'shopping',
                    path: 'shopping/:id',
                    component: shopping,
                    meta: { islogin: true }
                },
                {
                    name: 'login',
                    path: 'login',
                    component: login
                },
                {
                    name: 'order',
                    path: 'order/:id',
                    component: order,
                    meta: { islogin: true }
                },
                {
                    name: 'pay',
                    path: 'pay/:id',
                    component: pay,
                    meta: { islogin: true }
                },
                { name: 'vipcenter', path: 'vipcenter', component: vipcenter, meta: { islogin: true } },
                { name: 'logister', path: 'logister', component: logister, meta: { islogin: true } },
                { name: 'viporderlist', path: 'viporderlist', component: viporderlist, meta: { islogin: true } },
                {
                    name: 'paysuccess',
                    path: 'paysuccess',
                    component: paysuccess,
                    meta: { islogin: true }
                },
                {
                    name: 'orderdetail',
                    path: 'orderdetail/:id',
                    component: orderdetail,
                    meta: { islogin: true }
                },
                {
                    name: 'goodslistitem',
                    path: 'goodslistitem/:id',
                    component: goodslistitem
                }
            ]
        }
    ]
})

//利用router的全局守卫的钩子函数来进行登录判断
router.beforeEach((to, from, next) => {
    if (to.name != 'login') {
        var obj = { name: to.name, params: to.params.id }
        localStorage.setItem("routerName", JSON.stringify(obj));
        //合度是否登录控制layout头部
        axios.get('/site/account/islogin').then(res => {
            if (res.data.code == "logined") {
                vm.$emit('changeshow');
            }
        })
    }
    if (to.meta.islogin) {
        axios.get('/site/account/islogin').then(res => {
            if (res.data.code == "logined") {
                next();
            } else {
                router.push({ name: 'login' });
            }
        })
    } else {
        next();
    }
})

Vue.filter("datefmt1", function(input, splitchar) {
    var input = new Date(input);
    var y = input.getFullYear();
    var m = input.getMonth() + 1;
    var d = input.getDate();
    var h = input.getHours();
    var mi = input.getMinutes();
    var s = input.getSeconds();
    if (splitchar == "YY-MM-DD hh:mm:ss") {
        return y + "-" + m + "-" + d + " " + h + ":" + mi + ":" + s;
    }
    if (splitchar == "YY-MM-DD") {
        return y + "-" + m + "-" + d;
    }
})
new Vue({
    el: '#app',
    router,
    store,
    //ES5的写法render:function(create){create(App)}
    render: create => create(App)
})