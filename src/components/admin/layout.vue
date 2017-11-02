<template>
  <div class="temp">
      <div id="header" class="header">
            <div class="head-top">
                <div class="section">
                    <div class="left-box">
                        <span>vue2.0单页应用</span>
                        <a target="_blank" href="#"></a>
                        <a target="_blank" href="#"></a>
                    </div>
                    <div id="menu" class="right-box">
                        <router-link v-if="statu" to="/admin/login">
                            <a href="javascript:;">登录</a>
                        </router-link>
                        <router-link v-if="statu" to="/admin/logister">
                            <a href="javascript:;">注册</a><strong>|</strong>
                        </router-link>
                        <router-link v-if="!statu" to="/admin/vipcenter">
                            <a href="javascript:;">会员中心</a>
                        </router-link>
                        <a v-if="!statu" href="javascript:;" @click="logout">退出</a><strong>|</strong>
                        <!-- <a href="/content/contact.html"><i class="iconfont icon-phone"></i>联系我们</a> -->
                        <router-link to="/admin/carinfo">
                        <a href="javascript:;"><i class="iconfont icon-cart"></i>购物车(<span id="shoppingCartCount">{{this.$store.getters.getcount}}</span>)</a>
                        </router-link>    
                    </div>
                </div>
            </div>
      <div class="head-nav">
            <div class="section">
                        <!-- <div class="logo">
                                            <a href="/index.html"><img width="230px" height="70px" src="/templates/main/images/logo.png" /></a>
                                        </div>-->
                    <div id="menu2" class="nav-box menuhd">
                        <ul>
                            
                            <li class="index">
                                <router-link to="/admin/otherpro">
                                    首页
                               </router-link>
                            </li>
                            <li class="news">
                                <a href="/news.html">
                                    学员问题汇总
                                </a>
                            </li>
                            <li class="photo">
                                <a href="/photo.html">
                                    重难点专区
                                </a>
                            </li>
                        <!--<li class="goods"><a href="">就业阶段</a></li>-->
                            <li class="video">
                                <a href="/video.html">
                                    前端常用功能
                                </a>
                            </li>
                            <li class="down">
                                <a href="/down.html">
                                    资源下载
                                </a>
                            </li>
                            <router-link to="/admin/goodslist">
                                <li>
                                    <a target="_blank" href="javascript:;">
                                        购物商城
                                    </a>
                                </li> 
                            </router-link>  
                        </ul>
                        <div class="cls"></div>
                    </div>
                    <div class="search-box">
                        <div class="input-box">
                            <input id="keywords" name="keywords" type="text" onkeydown="if(event.keyCode==13){SiteSearch('/search.html', '#keywords');return false};" placeholder="输入关健字" x-webkit-speech="">
                        </div>
                            <a href="javascript:;" onclick="SiteSearch('/search.html', '#keywords');">
                            <i class="iconfont icon-search"></i>
                        </a>
                    </div>
                </div>
            </div>
    </div>
    <router-view></router-view>
</div>
</template>
<script>
    import {
        vm,
        key
    } from '../../kits/vm.js';

    $(document).ready(function() {
        $("#menu2 li a").wrapInner('<span class="out"></span>');
        $("#menu2 li a").each(function() {
            $('<span class="over">' + $(this).text() + '</span>').appendTo(this);
        });

        $("#menu2 li a").hover(function() {
            $(".out", this).stop().animate({
                'top': '48px'
            }, 300); // move down - hide
            $(".over", this).stop().animate({
                'top': '0px'
            }, 300); // move down - show

        }, function() {
            $(".out", this).stop().animate({
                'top': '0px'
            }, 300); // move up - show
            $(".over", this).stop().animate({
                'top': '-48px'
            }, 300); // move up - hide
        });

    });

    export default {
        data() {
            return {
                statu: true
            }
        },
        mounted() {
            // 监听 changeshow 这个事件
            vm.$on('changeshow', () => {
                    this.checklogin();
                })
                // 当页面重新刷新以后要去获取到localStorage中的这个登录状态，赋值给isvipshow
                // this.checklogin();
        },
        methods: {
            checklogin() {
                this.statu = false;
            },
            logout() {
                this.$http.get("/site/account/logout").then(res => {
                    if (res.data.status == 1) {
                        this.$message.error(res.data.message);
                        return;
                    }
                    this.$message.success(res.data.message);
                    this.statu = true;
                    this.$router.push({
                        name: 'login'
                    });
                })
            }
        }
    }
</script>
<!-- scoped表明style样式只作用于当前页面 -->
<style>
    @import url('../../../statics/elementuiCss/index.css');
    .header .head-nav .search-box {
        right: 215px;
    }
</style>