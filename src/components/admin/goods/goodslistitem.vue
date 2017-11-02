<template>
<div class="tmpl">
<div class="section">
    <div class="location">
        <span>当前位置：</span>
        <a href="/index.html">首页</a> &gt;
        <a href="/goods.html">购物商城</a> &nbsp;&gt;&nbsp;
        <a href="/goods/40/1.html">手机数码</a>
    </div>
</div>

<div class="section">
    <div class="wrapper clearfix">
        <div class="screen-box">
            <!--分类-->
            <dl>
                <dt>分类：</dt>
                <dd>

                    <a href="/goods/0.html">全部</a>

                    <a class="selected" href="/goods/40.html">手机数码</a>

                    <a href="/goods/41.html">电脑办公</a>

                    <a href="/goods/42.html">影音娱乐</a>

                </dd>
            </dl>
            <!--/分类-->
        </div>

    </div>
</div>

<div class="section">
    <div class="wrapper clearfix">
        <ul class="img-list">
            <!--取得一个分页DataTable-->

            <li v-for="item in goodslist" :key="item.id">
                <a href="/goods/show-91.html">
                    <div class="img-box">

                        <div class="abs-txt">推荐</div>

                        <img :src="item.img_url">
                    </div>
                    <div class="info">
                        <h3>{{item.title}}</h3>
                        <p class="price">
                            <b>¥{{item.sell_price}}</b>元</p>
                        <p>
                            <strong>库存 {{item.stock_quantity}}</strong>
                            <span>市场价：<s>{{item.market_price}}</s></span>
                        </p>
                    </div>
                </a>
            </li>


        </ul>

        <!--页码列表-->
        <div class="page-box" style="margin:15px 0 0;">
            <div class="digg">
              <div class="el-pagination">
                  <el-pagination
                     @size-change="ChangeSize"
                     @current-change="ChangePage"
                     :current-page="pageIndex"
                     :page-sizes="[1, 10, 20, 30]"
                     :page-size="pageSize"
                     layout="total, sizes, prev, pager, next, jumper"
                     :total="totalCount">
                  </el-pagination>
              </div>
            </div>
        </div>
        <!--/页码列表-->
    </div>

</div>
</div>
</template>

<script>
    export default {
        data() {
            return {
                pageIndex: 1,
                pageSize: 10,
                totalCount: 0,
                goodslist: []
            }
        },
        created() {
            this.getgoodslistitem();
        },
        methods: {
            ChangeSize(val) {
                this.pageSize = val;
                this.getgoodslistitem();
            },
            ChangePage(val) {
                this.pageIndex = val;
                this.getgoodslistitem();
            },
            getgoodslistitem() {
                this.$http.get("/site/goods/getgoodsbycateid/" + this.$route.params.id + "?pageIndex=" + this.pageIndex + "&pageSize=" + this.pageSize + "").then(res => {
                    this.goodslist = res.data.message;
                    this.totalCount = res.data.totalcount;
                })
            }
        }
    }
</script>
<style scoped>

</style>