<template>
    <div class="tmpl">
        <div class="section">
            <div class="location">
                <span>当前位置：</span>
                <a href="/index.html">首页</a> &gt;
                <a href="/goods.html">购物商城</a>
            </div>
        </div>
        <div class="section">
            <div class="wrapper">
                <div class="wrap-box">
                    <!--类别菜单-->
                    <div class="left-220" style="margin:0;">
                        <div class="banner-nav">
                            <ul>
                            <!--此处声明下面可重复循环-->
                            
                                <li v-for="(item,index) in catelist" :key="index">
                                    <h3>
                                        <i class="iconfont icon-arrow-right"></i>
                                        <span v-text="item.title"></span>
                                       <p>
                                           <span v-for="(subitem,index) in item.subcates" :key="index"> {{subitem.title}}</span>
                                        </p>
                                    </h3>
                                    <div class="item-box">
                                        <!--如有三级分类，此处可循环-->
                                        <dl>
                                            
                                                <dt>
                                                    <router-link v-bind="{to:'/admin/goodslistitem/'+item.id}">
                                                        <a href="javascript:;">{{item.title}}</a>
                                                    </router-link>
                                                </dt>
                                            
                                           
                                                <dd >  
                                                                           
                                                        <a  href="javascript:;" v-for="(subitem,index) in item.subcates" :key="index" >
                                                            <router-link v-bind="{to:'/admin/goodslistitem/'+subitem.id}">
                                                                  {{subitem.title}}
                                                            </router-link>
                                                        </a>
                                                   
                                                </dd>
                                             
                                        </dl>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <!--/类别菜单-->
                    
                    <!--幻灯片-->
                    <div class="left-705">
                        <div class="banner-img">
                            <div id="focus-box" class="focus-box">
                               <el-carousel :interval="5000" arrow="always">
                                    
                                    <el-carousel-item v-for="(item,index) in sliderlist " :key="index">
                                        <router-link v-bind="{to:'/admin/goodsinfo/'+item.id}" >
                                            <img :src="item.img_url" alt="">
                                            <h3>{{ item.title }}</h3>
                                        </router-link>
                                    </el-carousel-item>
                                    
                                </el-carousel>
                            </div>
                            
                        </div>
                    </div>
                    <!--/幻灯片-->
                    
                    <!--推荐商品-->
                    <div class="left-220">
                        <ul class="side-img-list">
                        
                            <li v-for="(item,index) in toplist" :key="index">
                                <router-link v-bind="{to:'/admin/goodsinfo/'+item.id}" >
                                    <div class="img-box">
                                        <label>{{index+1}}</label>
                                        <img :src="item.img_url">
                                    </div>
                                    <div class="txt-box">
                                        <a href="javascript:;">{{item.title}}</a>
                                        <span>{{item.add_time|datefmt1("YY-MM-DD")}}</span>
                                    </div>
                                </router-link>
                            </li>
                            
                        </ul>
                    </div>
                    <!--/推荐商品-->
                </div>
            </div>
        </div>  

        <div class="section" v-for="(item,index) in goodsgroup " :key="index">
 
            <!--子类-->
            <div class="main-tit">
                <h2>{{item.catetitle}}</h2>
                <p>
                
                    <a href="/goods/43.html" v-for="(subitem,index) in item.level2catelist" :key="index">{{subitem.subcatetitle}}</a>
                    
                    <a href="/goods/40.html">更多
                        <i>+</i>
                    </a>
                </p>
            </div>
                <!--/子类-->
            <div class="wrapper clearfix">
                <div class="wrap-box">
                    <ul class="img-list">
                
                        <li v-for="(dataitem,index) in item.datas" :key="index">
                            <a href="/goods/show-91.html">
                                <div class="img-box">
                                    <img :src="dataitem.img_url">
                                </div>
                                <div class="info">
                                    <h3>{{dataitem.artTitle}}</h3>
                                    <p class="price">
                                        <b>¥{{dataitem.sell_price}}</b>元</p>
                                    <p>
                                        <strong>库存 {{dataitem.stock_quantity}}}</strong>
                                        <span>市场价：
                                            <s>{{dataitem.market_price}}</s>
                                        </span>
                                    </p>
                                </div>
                            </a>
                        </li>
                
                </ul>
                </div>
                </div>
</div>
    </div>
</template>

<script>
    export default {
        // 注册私有组件
        components: {

        },
        data() {
            return {
                // 当前商品的分类数组
                catelist: [],
                sliderlist: [],
                toplist: [],
                goodsgroup: []
            }
        },
        created() {
            this.getcatelist();
            this.getgoodsgroup();
        },
        methods: {
            getcatelist() {
                this.$http.get('/site/goods/gettopdata/goods').then(res => {
                    if (res.data.status == 1) {
                        this.$message.error(res.data.message);
                        return;
                    }
                    this.catelist = res.data.message.catelist;
                    this.sliderlist = res.data.message.sliderlist;
                    this.toplist = res.data.message.toplist;

                });
            },
            getgoodsgroup() {
                console.log(11);
                this.$http.get('/site/goods/getgoodsgroup').then(res => {
                    if (res.data.status == 1) {
                        this.$message.error(res.data.message);
                        return;
                    }

                    this.goodsgroup = res.data.message;
                    console.log(this.goodsgroup);
                })
            }
        }
    }
</script>
<style scoped>
    .el-carousel__item h3 {
        color: #f10215;
        font-size: 18px;
        opacity: 0.75;
        line-height: 50px;
        margin: 0;
    }
    
    .el-carousel__item:nth-child(2n) {
        background-color: #99a9bf;
    }
    
    .el-carousel__item:nth-child(2n+1) {
        background-color: #d3dce6;
    }
</style>