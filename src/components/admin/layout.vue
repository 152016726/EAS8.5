<template>
  <!-- <div class="temp"> -->
<div class="mall">
    <div class="wrapper">
        <div class="container">

            <div id="to-top">
                <a class="pngfix" href="#"></a>
            </div>

            <div class="mall-head-box">
                <div class="mall-head clear2">
                    <h1 class="KD-LOGO-box f-l"><span><a class="KD-LOGO f-l" href="http://www.kingdee.com" target="_blank">金蝶官网</a><a class="KD-TXT f-l" href="/">商城</a></span></h1>
                    <div class="head-right f-r">
                        <div class="head-search-box clear2">
                            <form id="prdct-search" name="prdct-search" action="/search.action">
                                <input id="gsk" type="text" name="k" class="prdct-search-input f-l" value="输入关键词" onfocus="if (value =='输入关键词'){value =''}" maxlength="50" onblur="if (value ==''){value='输入关键词'}" />
                                <input id="gsBtn" type="button" class="prdct-search-submit f-l" value="搜 索" />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <!--content-->
            <div class="main-content">
                <div class="mall-main-menu-box">
                    <div class="mall-main-menu">
                        <div class="menu-box f-l">
                            <div class="all-menu-box f-l">
                                <a class="all-menu-btn pngfix" href="javascript:void(0);">所有商品分类</a>
                                <ul class="sub-menu">
                                    <li>
                                        <a href="/search.action">所有商品</a>
                                        <ul class="sub-2-menu">
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="/search.action?c=263010">财务软件</a>
                                        <ul class="sub-2-menu">
                                            <li><a href="/search.action?c=265203">KIS系列</a></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="/search.action?c=263011">进销存软件</a>
                                        <ul class="sub-2-menu">
                                            <li><a href="/search.action?c=265175">KIS系列</a></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="/search.action?c=263012">管理软件</a>
                                        <ul class="sub-2-menu">
                                            <li><a href="/search.action?c=265204">KIS系列</a></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="/search.action?c=263033">软件服务</a>
                                        <ul class="sub-2-menu">
                                            <li><a href="/search.action?c=265176">KIS系列适用</a></li>
                                            <li><a href="/search.action?c=266318">K/3系列适用</a></li>
                                            <li><a href="/search.action?c=303737">EAS系列适用</a></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="/search.action?c=265174">配套用品</a>
                                        <ul class="sub-2-menu">
                                            <li><a href="/search.action?c=265205">套打凭证</a></li>
                                            <li><a href="/search.action?c=265206">套打账簿</a></li>
                                            <li><a href="/search.action?c=265207">装订产品</a></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="/search.action?c=453360">其他</a>
                                        <ul class="sub-2-menu">
                                            <li><a href="/search.action?c=453362">其他</a></li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                            <ul class="menu-item f-l"> 
                                <li class="f-l cur">
                                    <router-link to="/admin/goodslist">
                                        <a href="javascript:;">首页</a>
                                    </router-link>
                                </li>
                                <li class="f-l "><a href="javascript:;">财务软件</a></li>
                                <li class="f-l "><a href="javascript:;">进销存软件</a></li>
                                <li class="f-l "><a href="javascript:;">管理软件</a></li>
                                <li class="f-l "><a href="javascript:;">配套用品</a></li>
                                <li class="f-l "><a href="javascript:;">原厂服务</a></li>
                                <li class="f-l "><a href="javascript:;">热销商品</a></li>
                                <li class="f-l "><a href="javascript:;">客户须知</a></li>
                            </ul>
                        </div>
                        <div class="acount-box f-r">
                            <ul>

                                <router-link v-if="statu" to="/admin/login">
                                    <li class="blue-menu-item f-l">
                                        <a class="logo-out f-l" href="javascript:;">登录</a>
                                    </li>
                                </router-link>
                                <router-link v-if="statu" to="/admin/logister">
                                     <li class="blue-menu-item f-l">
                                        <a class="logo-out f-l" href="javascript:;">注册</a>
                                     </li>
                                </router-link>
                                <router-link v-if="!statu" to="/admin/vipcenter">
                                    <li class="blue-menu-item f-l">
                                        <a class="logo-out f-l" href="javascript:;">会员中心</a>
                                    </li>
                                </router-link>
                                <li v-if="!statu" class="blue-menu-item f-l">
                                    <a href="javascript:;" @click="logout">退出</a>
                                </li>
                                <router-link to="/admin/carinfo">
                                    <li class="my-carray f-l">
                                        <a href="javascript:;"><span class="txt">购物车</span><span class="buy-num" id="shoppingCartCount">{{this.$store.getters.getcount}}</span></a>
                                    </li>
                                </router-link>        
                            </ul>
                        </div>
                        <div class="clear hide"></div>
                    </div>
                </div>
            </div>
            <router-view></router-view>
            <!-- 底部foot -->
            <div class="mall-foot-box">
                <div class="mall-foot-out">
                    <div class="mall-foot clear2">
                        <div class="contact-service f-l">
                            <dl>
                                <dt>联系客服</dt>
                                <dd>4008-830-830</dd>
                            </dl>
                        </div>
                        <div class="rule new f-l">
                            <dl>
                                <dt>新手上路</dt>
                                <dd><span>&middot;</span><a href="/how.action#how1">注册新用户</a></dd>
                                <dd><span>&middot;</span><a href="/how.action#how2">网站订购流程</a></dd>
                            </dl>
                        </div>
                        <div class="rule pay f-l">
                            <dl>
                                <dt>付款</dt>
                                <dd><span>&middot;</span><a href="/how.action#how3">支付方式</a></dd>
                                <dd><span>&middot;</span><a href="/how.action#how5">发票服务</a></dd>
                            </dl>
                        </div>
                        <div class="rule send f-l">
                            <dl>
                                <dt>配送/查询</dt>
                                <dd><span>&middot;</span><a href="/how.action#how6">配送方式</a></dd>
                                <dd><span>&middot;</span><a href="/how.action#how7">签收注意事项</a></dd>
                                <dd><span>&middot;</span><a href="/how.action#how8">快递查询</a></dd>
                            </dl>
                        </div>
                        <div class="rule garantee f-l">
                            <dl>
                                <dt>售后服务</dt>
                                <dd><span>&middot;</span><a href="/how.action#how9">退换货事项</a></dd>
                                <dd><span>&middot;</span><a href="/how.action#how10">退换货流程</a></dd>
                            </dl>
                        </div>
                        <div class="rule help f-l">
                            <dl>
                                <dt>帮助中心</dt>
                                <dd><span>&middot;</span><a href="/how.action#how11">联系我们</a></dd>
                                <dd><span>&middot;</span><a href="/how.action#how12">投诉与建议</a></dd>
                            </dl>
                        </div>
                    </div>
                </div>
                <div class="mall-foot-bottom">版权所有 ©1993-2017&nbsp;&nbsp;&nbsp;&nbsp;金蝶软件（中国）有限公司&nbsp;&nbsp;&nbsp;&nbsp;粤ICP备05041751号-21</div>
            </div>
        </div>
    </div>
</div>
      <!-- <div id="header" class="header">
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
                        <router-link to="/admin/carinfo">
                        <a href="javascript:;"><i class="iconfont icon-cart"></i>购物车(<span id="shoppingCartCount">{{this.$store.getters.getcount}}</span>)</a>
                        </router-link>    
                    </div>
                </div>
            </div>
      <div class="head-nav">
            <div class="section">
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
    <router-view></router-view> -->
<!-- </div> -->
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
    @import url('../../../statics/site/css/mall-base.css');
    @import url('../../../statics/site/css/mall-index.css');
    @import url('../../../statics/site/css/base.css');
    @import url('../../../statics/site/css/mykdbase.css');
    @import url('../../../statics/site/css/reset.css');
    .header .head-nav .search-box {
        right: 215px;
    }
</style>