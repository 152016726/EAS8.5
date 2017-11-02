<template>
<div class="tmpl">
    <div class="section">
        <div class="location">
            <span>当前位置：</span>
            <a href="/index.html">首页</a>&gt;
            <a href="/goods.html">购物商城</a>
            <a href="/goods/42/1.html">商品详情</a>
         
        </div>
    </div>
     
    <!-- 商品详情 -->
    <div class="section">
        <div class="wrapper clearfix">
            <div class="wrap-box">
        <!--页面左边-->
                <div class="left-925">
                    <div class="goods-box clearfix" >
        <!--商品图片-->
                        <div class="pic-box">

                            <div class="magnifier" id="magnifier1">
                                <div class="magnifier-container">
                                    <div class="images-cover"></div>
                                    <!--当前图片显示容器-->
                                    <div class="move-view"></div>
                                    <!--跟随鼠标移动的盒子-->
                                    </div>
                                    <div class="magnifier-assembly">
                                    <div class="magnifier-btn">
                                            <span class="magnifier-btn-left">&lt;</span>
                                            <span class="magnifier-btn-right">&gt;</span>
                                    </div>
                                        <!--按钮组-->
                                        <div class="magnifier-line">
                                            <ul class="clearfix animation03">
                                                <li v-for="(item,index) in imglist" :key="index">
                                                    <div class="small-img">
                                                        <img :src="item.thumb_path" />
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                        <!--缩略图-->
                                    </div>
                                    <div class="magnifier-view"></div>
                                    <!--经过放大的图片显示容器-->
                                </div>

                        </div>
        <!--/商品图片-->
         
        <!--商品信息-->
                        <div class="goods-spec" >
                            <h1>{{goodsinfo.title}}</h1>
                            <p class="subtitle">{{goodsinfo.sub_title}}</p>
                            <div class="spec-box">
                                <dl>
                                    <dt>货号</dt>
                                    <dd id="commodityGoodsNo">{{goodsinfo.goods_no}}</dd>
                                </dl>
                                <dl>
                                    <dt>市场价</dt>
                                    <dd>
                                        <s id="commodityMarketPrice">¥{{goodsinfo.market_price}}</s>
                                    </dd>
                                </dl>
                                <dl>
                                    <dt>销售价</dt>
                                    <dd>
                                        <em class="price" id="commoditySellPrice">¥{{goodsinfo.sell_price}}</em>
                                    </dd>
                                </dl>
                            </div>
         
                            <div class="spec-box">
                                <dl>
                                    <dt>购买数量</dt>
                                    <dd>
                                        <div class="stock-box">
                                             <el-input-number size="small" v-model="buycount"></el-input-number>
                                        </div>
                                        <span class="stock-txt">
                                        库存
                                            <em id="commodityStockNum">{{goodsinfo.stock_quantity}}</em>件
                                        </span>
                                    </dd>
                                </dl>
                                <dl>
                                    <dd>
                                        <div class="btn-buy" id="buyButton">
                                            <button class="buy" >立即购买</button>
                                            <button class="add" @click="subcount">加入购物车</button>
                                        </div>
                                    </dd>
                                </dl>
                            </div>
         
                        </div>
    <!--/商品信息-->
                    </div>
     
                <div id="goodsTabs" class="goods-tab bg-wrap">
    <!--选项卡-->
                    <Affix>
                        <div id="tabHead" class="tab-head" style="position: static; top: 517px; width: 925px;">
                           
                            <ul>
                                
                                <li>
                                <a v-bind="{class:istoggle?'selected':''}"  href="javascript:;" @click="gettoggle(true)">商品介绍</a>
                                </li>
                                <li>
                                <a href="javascript:;" v-bind="{class:!istoggle?'selected':''}" @click="gettoggle(false)">商品评论</a>
                                </li>
                                
                            </ul>
                        </div>
                    </Affix>   
            <!--/选项卡-->
             
                        <!--选项内容-->
                        <div class="tab-content entry" v-if="istoggle" >
                            <span v-html="goodsinfo.content"></span>
                        </div>
             
                        <div class="tab-content" v-if="!istoggle">
            <!--网友评论-->
                            <div class="comment-box">
            <!--取得评论总数-->
                                <form id="commentForm" name="commentForm" class="form-box" url="/tools/submit_ajax.ashx?action=comment_add&amp;channel_id=2&amp;article_id=98">
                                    <div class="avatar-box">                                    
                                        <i class="iconfont icon-user-full"></i>                                    
                                    </div>
                                    <div class="conn-box">
                                        <div class="editor">
                                            <textarea id="txtContent" name="txtContent" sucmsg=" " v-model="txtContent" datatype="*10-1000" nullmsg="请填写评论内容！"></textarea>
                                            <span class="Validform_checktip"></span>
                                        </div>
                                        <div class="subcon">
                                            <input id="btnSubmit" name="submit" type="button" value="提交评论" class="submit" @click="submitComment">
                                            <span class="Validform_checktip"></span>
                                        </div>
                                    </div>
                                </form>
                                <ul id="commentList" class="list-box">
                                    <p v-if="contents.length<=0" style="margin:5px 0 15px 69px;line-height:42px;text-align:center;border:1px solid #f7f7f7;">暂无评论，快来抢沙发吧！</p>
                                    <li v-for="(item,index) in contents" :key="index">
                                        <div class="avatar-box">
                                            <i class="iconfont icon-user-full"></i>
                                        </div>
                                        <div class="inner-box">
                                            <div class="info">
                                                <span>{{item.user_name}}</span>
                                                <span>{{item.add_time}}</span>
                                            </div>
                                            <p>{{item.content}}</p>
                                        </div>
                                    </li>
                                </ul>
            <!--放置页码-->
                                <div class="page-box" style="margin:5px 0 0 62px">
                                    <div id="pagination" class="digg">
                                        <el-pagination
                                            @size-change="SizeChange"
                                            @current-change="CurrentChange"
                                            :current-page="pageIndex"
                                            :page-sizes="[10, 20, 30, 40]"
                                            :page-size="pageSize"
                                            layout="total, sizes, prev, pager, next, jumper"
                                            :total="totalCount">
                                            </el-pagination>
                                    </div>
                                </div>
            <!--/放置页码-->
                            </div>
     
    <!--/网友评论-->
                        </div>
     
                </div>
         
        </div>  
    <!--/页面左边-->
     
    <!--页面右边-->
        <div class="left-220">
            <div class="bg-wrap nobg">
                <div class="sidebar-box">
                    <h4>推荐商品</h4>
                    <ul class="side-img-list">
                     
                        <li v-for="(item,index) in hotgoodslist" :key="index">
                            <router-link v-bind="{to:'/admin/goodsinfo/'+item.id}">
                                <div class="img-box">
                                        <a href="/goods/show-98.html">
                                            <img :src="item.img_url">
                                        </a>
                                </div>
                                <div class="txt-box">
                                        <a href="/goods/show-98.html">{{item.title}}</a>
                                        <span>{{item.add_time|datefmt1("YY-MM-DD")}}</span>   
                                </div>
                            </router-link>
                        </li>         
                    </ul>
                </div>
            </div>
        </div>
    <!--/页面右边-->
        </div>
    </div>
    </div>
    </div>
</template>

<script>
    import '../../../../statics/site/js/jqplugins/imgzoom/magnifier.js';

    import Affix from '../../../../node_modules/iview/src/components/affix';

    // 导入localStoageKit.js，  {setItem}单独拿到这个setItem方法
    import {
        setItem
    } from '../../../kits/localStotagekits.js';


    export default {
        components: {
            Affix: Affix
        },
        data() {
            return {
                buycount: 1,
                txtContent: '',
                pageIndex: 1,
                pageSize: 10,
                totalCount: 0,
                goodsinfo: [],
                imglist: [],
                hotgoodslist: [],
                istoggle: true,
                contents: []
            }

        },
        created() {
            //获取商品信息
            this.getgoodsinfo();
            //获取评论数据
            this.getComment();
        },
        watch: {
            '$route': function() {
                this.getgoodsinfo();
            }
        },
        methods: {
            //加入购物车
            subcount() {
                this.$store.dispatch('changeBuyCount', this.buycount);
                var obj = {};
                obj.gid = this.$route.params.id;
                obj.count = this.buycount;
                setItem(obj);
                this.buycount = 1;
            },
            submitComment() {
                if (this.txtContent == "") {
                    this.$message.error('评论不能为空');
                    return;
                }
                var url = "/site/validate/comment/post/goods/" + this.$route.params.id;
                this.$http.post(url, "commenttxt=" + this.txtContent).then(res => {
                    if (res.data.status == 1) {
                        this.$message.error(res.data.message);
                        return;
                    }
                    this.txtContent = "";
                    this.getComment();
                })
            },
            SizeChange(val) {
                this.pageSize = val;
                this.getComment();
            },
            CurrentChange(val) {
                this.pageIndex = val;
                this.getComment();
            },
            getComment() {
                var url = "/site/comment/getbypage/goods/" + this.$route.params.id + "?pageIndex=" + this.pageIndex + "&pageSize=" + this.pageSize + "";
                this.$http.get(url).then(res => {
                    if (res.data.status == 1) {
                        this.$message.error(res.data.message);
                        return;
                    }
                    this.totalCount = res.data.totalcount;
                    this.contents = res.data.message;

                })
            },
            getgoodsinfo() {
                console.log(this.$route);
                this.$http.get('/site/goods/getgoodsinfo/' + this.$route.params.id).then(res => {
                    if (res.data.status == 1) {
                        this.$message.error(res.data.message);
                        return;
                    }
                    this.goodsinfo = res.data.message.goodsinfo;
                    this.imglist = res.data.message.imglist;
                    this.hotgoodslist = res.data.message.hotgoodslist;
                    setTimeout(() => {
                        $(function() {
                            $('#magnifier1').imgzoon({
                                magnifier: '#magnifier1'
                            });
                        })
                    }, 100)

                })
            },
            gettoggle(content) {
                this.istoggle = content;
            }
        }
    }
</script>
<style>
    @import url('../../../../statics/site/js/jqplugins/imgzoom/css/magnifier.css');
    @import url('../../../../node_modules/iview/dist/styles/iview.css');
</style>