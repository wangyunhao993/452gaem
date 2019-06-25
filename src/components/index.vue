<template>
    <div class="index-container">
        <!-- 头部 -->
        <header id="header">
            <div class="head-top">
                <div class="bgc w">
                    <div class="left">
                        <ul class="top-mages" >
                            <li><img src="../assets/images/index/top1.png" alt="">&nbsp;452游戏网</li>
                            <li><img src="../assets/images/index/top2.png" alt="">&nbsp;452游戏网</li>
                            <li><img src="../assets/images/index/top3.png" alt="">&nbsp;452游戏网</li>
                            <li><img src="../assets/images/index/top4.png" alt="">&nbsp;452游戏网</li>
                        </ul>
                    </div>
                    <div class="right">
                        <ul>
                            <li>登入</li><li>|</li>
                            <li>注册账号</li><li>|</li>
                            <li>
                            <!-- <i class="iconfont icon-shoucang"></i> -->
                            <i class="iconfont icon-shoucang1"></i>
                            收藏</li>
                        </ul>
                    </div>
                </div>
            </div>
            <nav class="nav w">
                <h1>
                    <router-link to="/"> <img src="../assets/images/index/gonshim.png" alt="452游戏"> </router-link>
                </h1>
                <ul class="nav-ul" >
                    <!-- <li v-for="(item,index) in navList">{{item}}</li> -->
                    <li class="atc">首页</li>
                    <li>咨询</li>
                    <li >游戏中心</li>
                    <li>礼包中心</li>
                    <li>商城</li>
                    <li>VIP</li>
                    <li >452游戏盒子</li>
                    <li>客服</li>
                    <li>个人中心</li>
                </ul>
                <div class="nav-right">
                    <div class="nav-le">
                        <div>游戏</div>
                        <i class="iconfont icon-jiantouarrow486"></i>
                    </div>
                    <input type="text">
                    <img src="../assets/images/index/fangdajing.png" alt="">
                </div>
            </nav>
        </header>
        <!-- 主体 -->
        <!-- 也是link to 的地方 -->
        <main id="main">
            <div class="lunbotu">
                <swiper class="container" :options="swiperOption" ref="mySwiper" @someSwiperEvent="callback">
                <!-- slides -->
                <swiper-slide v-for="(ietm,index) in imgList" ><img @click="imgClick(ietm)" height="550px" src="../assets/images/index/banner.png" alt=""></swiper-slide>
                <!-- <swiper-slide><img height="550px" src="../assets/images/index/banner.png" alt=""></swiper-slide>
                <swiper-slide><img height="550px" src="../assets/images/index/banner.png" alt=""></swiper-slide>
                <swiper-slide><img height="550px" src="../assets/images/index/banner.png" alt=""></swiper-slide> -->
                <!-- Optional controls -->
                <!-- 分页器 -->
                <div id="my-lunbotu" class="swiper-pagination"  slot="pagination"></div>
                <!-- 导航按钮 上下页 -->
                <!-- <div class="swiper-button-prev" slot="button-prev"></div>
                <div class="swiper-button-next" slot="button-next"></div> -->
                <!-- 滚动条 -->
                <!-- <div class="swiper-scrollbar"   slot="scrollbar"></div> -->
            </swiper>
            </div>
            
            
            <div class="main w">
                <!-- 个人中心弹框 -->
                <div class="main-gerentankuang">
                    <div class="gerentankuang-top">
                        <img src="../assets/images/index/touxiang.png" alt="">
                        <div class="top-explain">
                            <div class="wenzi">欢迎来到452游戏!</div>
                            <div class="login">
                                <span class="denglu">登录</span>
                                <span class="zhuce">注册</span>
                            </div>
                        </div>
                    </div>
                    <div class="gerentankuang-buttom">
                        <div class="buttom-tel">
                            推荐游戏
                        </div>
                        <ul>
                            <li>
                                <img src="" alt="">
                                <p>热血传奇</p>
                            </li>
                        </ul>
                    </div>
               </div>
                <div class="main-left">
                    <div class="main-left-top">
                        <div class="main-tle">
                            <h2>新闻中心</h2>
                            <div class="xinwengengduo">更多</div>
                        </div>

                        <div class="m-l-center">
                            <div class="m-l-tile"><h6>热血重击</h6></div>
                            <div class="m-l-contenter">
                                <div class="m-l-contenter-img">
                                    <img src="../assets/images/index/gonshim.png" alt="">
                                </div>
                                <div class="m-l-contenter-right">
                                    免费领取茶叶蛋免费领取茶叶蛋免费领取茶叶蛋
                                </div>
                            </div>
                            <div class="m-l-footer">
                                <ul>
                                    <li class="m-l-footer-avtive">• &nbsp;传奇来了传奇来了传奇来了传奇来了传奇来了</li>
                                    <li>• &nbsp;传奇来了</li>
                                    <li>• &nbsp;传奇来了</li>
                                    <li>• &nbsp;传奇来了</li>
                                    <li>• &nbsp;传奇来了</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="main-left-conten">
                        <div class="main-left-conten-tel main-tle">
                            <h2>下载游戏</h2>
                            <!-- <div class="xinwengengduo">更多</div> -->
                        </div>
                        <div class="main-left-conten-body">
                            <img src="../assets/images/index/xiazaiyouxi.gif" alt="">
                            <div class="main-left-conten-body-img">
                                <img src="../assets/images/index/erweima2392.png" alt="" class="erweima">
                                <img src="../assets/images/index/saomaguanzhu.png" alt="" class="wenzisaoma">
                                <img src="../assets/images/index/shayubuhui.png" alt="" class="shayubuhuifei">
                                <img src="../assets/images/index/genduo.png" alt="" class="gengduozixun">
                                <img src="../assets/images/index/shayu1.png" alt="" class="shayu">
                            </div>
                        </div>
                    </div>
                    <div class="main-left-footer">
                        <div class="main-left-footer-tle main-tle">
                                <h2>快速通道</h2>
                        </div>
                        <div class="main-left-footer-body">
                            <ul>
                                <li>
                                    <img class="kuaisutongdao" src="../assets/images/index/miand.png" alt="">
                                    <img src="../assets/images/index/kuaisutongdao-sj.png" alt="" class="sanjiao">
                                    <h6>免费注册</h6>
                                </li>
                                <li>
                                    <img class="kuaisutongdao" src="../assets/images/index/miand.png" alt="">
                                    <img src="../assets/images/index/kuaisutongdao-sj.png" alt="" class="sanjiao">
                                    <h6>免费注册</h6>
                                </li>
                                <li>
                                    <img class="kuaisutongdao" src="../assets/images/index/miand.png" alt="">
                                    <img src="../assets/images/index/kuaisutongdao-sj.png" alt="" class="sanjiao">
                                    <h6>免费注册</h6>
                                </li>
                                <li>
                                    <img class="kuaisutongdao" src="../assets/images/index/miand.png" alt="">
                                    <img src="../assets/images/index/kuaisutongdao-sj.png" alt="" class="sanjiao">
                                    <h6>免费注册</h6>
                                </li>
                                <li>
                                   <img class="kuaisutongdao" src="../assets/images/index/miand.png" alt="">
                                    <img src="../assets/images/index/kuaisutongdao-sj.png" alt="" class="sanjiao">
                                    <h6>免费注册</h6>
                                </li>
                                <li>
                                    <img class="kuaisutongdao" src="../assets/images/index/miand.png" alt="">
                                    <img src="../assets/images/index/kuaisutongdao-sj.png" alt="" class="sanjiao">
                                    <h6>免费注册</h6>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <!-- 右边 -->
                <div class="main-right">
                    <div class="main-right-body">
                        <div class="main-tle">
                            <h2>游戏推荐</h2>
                            <div class="xinwengengduo">更多</div>
                        </div>
                        <div class="main-right-body-contener">
                            <ul>
                                <li>
                                    <div class="main-right-body-contener-img">
                                        <img class="img" src="../assets/images/index/xiazai-erweima.png" alt="">
                                    </div>
                                    <div class="main-right-explain">
                                         <p>热血合击</p>
                                        <div class="explain-jinruyouxi">
                                            进入游戏
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div class="main-right-body-contener-img">
                                       <img class="img" src="../assets/images/index/xiazai-erweima.png" alt="">
                                    </div>
                                    <div class="main-right-explain">
                                         <p>热血合击</p>
                                        <div class="explain-jinruyouxi">
                                            进入游戏
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div class="main-right-body-contener-img">
                                        <img class="img" src="../assets/images/index/xiazai-erweima.png" alt="">
                                    </div>
                                    <div class="main-right-explain">
                                         <p>热血合击</p>
                                        <div class="explain-jinruyouxi">
                                            进入游戏
                                        </div>
                                    </div>
                                </li>
                               
                            </ul>
                        </div>
                        <!-- 长图 -->
                        <div class="main-right-body-footer">
                            <img class="changtu-img" src="../assets/images/index/changtu.png" alt="">
                        </div>
                    </div>
                    <!-- 热门 -->
                    <div class="main-right-hot">
                        <div class="main-tle">
                            <h2>热门游戏</h2>
                            <div class="xinwengengduo">更多</div>
                        </div>
                        <div class="right-hot-center">
                            <ul>
                                <li>
                                     <div class="hot-center-bjimg">
                                        <img class="img" src="../assets/images/index/xiazai-erweima.png" alt="">
                                        <div class="center-beimg-left"><i class="iconfont icon-jiantouarrow122"></i>游戏详情<i class="iconfont icon-jiantouarrow119-copy"></i></div>
                                        <div class="center-beimg-right"> 休闲竞技</div>
                                    </div>
                                    <div class="hot-center-explain">
                                        <h6>纵横仙界</h6>
                                         <p>修为转生 合击必杀</p>
                                        <div class="explain-jinruyouxi">
                                            进入游戏
                                        </div>
                                    </div>
                                </li>
                                <li>
                                     <div class="hot-center-bjimg">
                                        <img class="img" src="../assets/images/index/xiazai-erweima.png" alt="">
                                        <div class="center-beimg-left"><i class="iconfont icon-jiantouarrow122"></i>游戏详情<i class="iconfont icon-jiantouarrow119-copy"></i></div>
                                        <div class="center-beimg-right"> 休闲竞技</div>
                                    </div>
                                    <div class="hot-center-explain">
                                        <h6>纵横仙界啊</h6>
                                         <p>修为转生 合击必杀</p>
                                        <div class="explain-jinruyouxi">
                                            进入游戏
                                        </div>
                                    </div>
                                </li>
                                <li>
                                     <div class="hot-center-bjimg">
                                        <img class="img" src="../assets/images/index/xiazai-erweima.png" alt="">
                                        <div class="center-beimg-left"><i class="iconfont icon-jiantouarrow122"></i>游戏详情<i class="iconfont icon-jiantouarrow119-copy"></i></div>
                                        <div class="center-beimg-right"> 休闲竞技</div>
                                    </div>
                                    <div class="hot-center-explain">
                                        <h6>啊纵横仙界</h6>
                                         <p>修为转生 合击必杀</p>
                                        <div class="explain-jinruyouxi">
                                            进入游戏
                                        </div>
                                    </div>
                                </li>
                                <li>
                                     <div class="hot-center-bjimg">
                                        <img class="img" src="../assets/images/index/xiazai-erweima.png" alt="">
                                        <div class="center-beimg-left"><i class="iconfont icon-jiantouarrow122"></i>游戏详情<i class="iconfont icon-jiantouarrow119-copy"></i></div>
                                        <div class="center-beimg-right"> 休闲竞技</div>
                                    </div>
                                    <div class="hot-center-explain">
                                        <h6>啊纵横仙界</h6>
                                         <p>修为转生 合击必杀</p>
                                        <div class="explain-jinruyouxi">
                                            进入游戏
                                        </div>
                                    </div>
                                </li>
                                <li>
                                     <div class="hot-center-bjimg">
                                        <img class="img" src="../assets/images/index/xiazai-erweima.png" alt="">
                                        <div class="center-beimg-left"><i class="iconfont icon-jiantouarrow122"></i>游戏详情<i class="iconfont icon-jiantouarrow119-copy"></i></div>
                                        <div class="center-beimg-right"> 休闲竞技</div>
                                    </div>
                                    <div class="hot-center-explain">
                                        <h6>啊纵横仙界</h6>
                                         <p>修为转生 合击必杀</p>
                                        <div class="explain-jinruyouxi">
                                            进入游戏
                                        </div>
                                    </div>
                                </li>
                                <li>
                                     <div class="hot-center-bjimg">
                                        <img class="img" src="../assets/images/index/xiazai-erweima.png" alt="">
                                        <div class="center-beimg-left"><i class="iconfont icon-jiantouarrow122"></i>游戏详情<i class="iconfont icon-jiantouarrow119-copy"></i></div>
                                        <div class="center-beimg-right"> 休闲竞技</div>
                                    </div>
                                    <div class="hot-center-explain">
                                        <h6>啊纵横仙界</h6>
                                         <p>修为转生 合击必杀</p>
                                        <div class="explain-jinruyouxi">
                                            进入游戏
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <!-- 礼包 -->
                    <div class="main-right-gift">
                        <div class="main-tle">
                            <h2>游戏礼包</h2>
                            <div class="xinwengengduo">更多</div>
                        </div>
                        <div class="gift-center">
                            <ul>
                                <li>
                                   <img src="../assets/images/index/gift1.png" alt="">
                                   <div class="gift-cnter-explain">
                                       <h6>传奇来了独家礼包</h6>
                                       <span class="shengyu">剩余</span> <span class="number">15254</span>
                                       <span class="lingqu">领取</span>
                                   </div>
                                </li>
                                <li>
                                   <img src="../assets/images/index/gift1.png" alt="">
                                   <div class="gift-cnter-explain">
                                       <h6>传奇来了独家礼包</h6>
                                       <span class="shengyu">剩余</span><span class="number">15254</span>
                                       <span class="lingqu">领取</span>
                                   </div>
                                </li>
                                <li>
                                   <img src="../assets/images/index/gift1.png" alt="">
                                   <div class="gift-cnter-explain">
                                       <h6>传奇来了独家礼包</h6>
                                       <span class="shengyu">剩余</span><span class="number">15254</span>
                                       <span class="lingqu">领取</span>
                                   </div>
                                </li>
                                <li>
                                   <img src="../assets/images/index/gift1.png" alt="">
                                   <div class="gift-cnter-explain">
                                       <h6>传奇来了独家礼包</h6>
                                       <span class="shengyu">剩余</span><span class="number">15254</span>
                                       <span class="lingqu">领取</span>
                                   </div>
                                </li>
                                <li>
                                   <img src="../assets/images/index/gift1.png" alt="">
                                   <div class="gift-cnter-explain">
                                       <h6>传奇来了独家礼包</h6>
                                       <span class="shengyu">剩余</span><span class="number">15254</span>
                                       <span class="lingqu">领取</span>
                                   </div>
                                </li>
                                <li>
                                   <img src="../assets/images/index/gift1.png" alt="">
                                   <div class="gift-cnter-explain">
                                       <h6>传奇来了独家礼包</h6>
                                       <span class="shengyu">剩余</span><span class="number">15254</span>
                                       <span class="lingqu">领取</span>
                                   </div>
                                </li>
                                <li>
                                   <img src="../assets/images/index/gift1.png" alt="">
                                   <div class="gift-cnter-explain">
                                       <h6>传奇来了独家礼包</h6>
                                       <span class="shengyu">剩余</span><span class="number">15254</span>
                                       <span class="lingqu">领取</span>
                                   </div>
                                </li>
                                <li>
                                   <img src="../assets/images/index/gift1.png" alt="">
                                   <div class="gift-cnter-explain">
                                       <h6>传奇来了独家礼包</h6>
                                       <span class="shengyu">剩余</span><span class="number">15254</span>
                                       <span class="lingqu">领取</span>
                                   </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </main>
        <!-- 底部 -->
        <footer id="footer" >
            <ul class="about">
                <li>关于我们</li>
                <li>商务合作</li>
                <li><i>防沉迷系统</i></li>
                <li>用户协议</li>
                <li>纠纷处理</li>
                <li>家长监护</li>
            </ul>
            <p>健康游戏忠告：抵制不良游戏 拒绝盗版游戏 注意自我保护 谨防受骗上当 适度游戏益脑 沉迷游戏伤身 合理安排时间 享受健康生活</p>
            <div class="extra">
                <p>深圳市华圣网络科技有限公司 文网文:粤[2017]2614-401号ICP备:粤ICP备17027058号-1增值电信业务经营许可证:粤B2-20180040</p>
                文化部网络游戏举报和联系电子邮箱：ts@452wan.com 纠纷处理方式：联系客服或依《用户协议》约定方式处理
            </div>
            <ul class="public">
                <li>
                    <img src="../assets/images/index/pulic1.png" alt="">
                    <div class="pulic-explain">
                        <p>上海市互联网违法和</p>
                        <p>不良信息举报中心</p>
                    </div>
                </li>
                <li>
                    <img src="../assets/images/index/pulic2.png" alt="">
                    <div class="pulic-explain">
                        <p>公共信息安全</p>
                        <p>网络检查</p>
                    </div>
                </li>
                <li>
                    <img src="../assets/images/index/pulic3.png" alt="">
                    <div class="pulic-explain">
                        <p>上海市工商行</p>
                        <p>政管理局</p>
                    </div>
                </li>
                <li>
                    <img src="../assets/images/index/pulic4.png" alt="">
                    <div class="pulic-explain">
                        <p>互联网文化</p>
                        <p>经营单位</p>
                    </div>
                </li>
                <li>
                    <img src="../assets/images/index/pulic5.png" alt="">
                    <div class="pulic-explain">
                        <p>沪公网备标识</p>
                        <p>31011402001121</p>
                    </div>
                </li>
            </ul>
        </footer>
    </div>
</template>

<script>


import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
// import { log } from 'util';

export default {
  name: "index",
  data() {
      return {
          navList:[
              '首页',
              '咨询',
              '游戏中心111',
              '礼包中心22',
              '商城22',
              'VIP',
              '452游戏盒子22',
              '客服',
              '个人中心'
          ],
           swiperOption: {
          // some swiper options/callbacks
          // 所有的参数同 swiper 官方 api 参数
          // ...
            //显示分页
            pagination: {
                el: '.swiper-pagination',
                clickable:true
            },
           autoplay: {
                disableOnInteraction: false,
                delay:3000
            },
            speed:1000,
            // 开启无限循环
            loop:true,
             //设置点击箭头
           paginationClickable :true,
            // nextEl: '.swiper-button-next',
            // prevEl: '.swiper-button-prev',
            prevButton:'.swiper-button-prev',
            nextButton:'.swiper-button-next',

            //设置同屏显示的数量，默认为1，使用auto是随意的意思。
            // slidesPerView:1,
        },
        imgList:['张三','李四','典韦','李欣']
      }
  },
  methods:{
      callback(){
          
      },
      imgClick(index){
          console.log(index)
      }
  },
   computed: {
      swiper() {
        return this.$refs.mySwiper.swiper
      }
    },
    mounted() {

    },
    components: {
        swiper,
        swiperSlide
    }
}
</script>

<style lang="less">
// require styles
// @import '../../node_modules/swiper/dist/css/swiper.css';
@indexColor :#187BEB;
    .index-container{
        position: relative;
        height: 100%;
        width: 100%;
        #header{
            height: 151px;
            background-color: #272830;
            .head-top{
               height: 41px;
            //    margin: 
               background-color: #050001;
            //    background-color: #96525f;

                .bgc{
                height: 41px;

               .left{
                   height: 100%;
                    float: left;
                   .top-mages{
                    //    margin-top: 10px;
                    height: 100%;
                       li {
                        //    margin-top: 10px;
                        height: 100%;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        position: relative;

                           float: left;
                           color: #8B8D8E;
                           margin-right: 15px;
                           img{
                               width: 33px;
                               height: 24px;
                           }
                           &::after{
                               content: '';
                               position: absolute;
                               display: block;
                               height: 17px;
                               width: 1px;
                               right: -10px;
                               top: 13px;
                            //    background-color: #fff;
                            background:linear-gradient(94deg,rgba(55,56,67,1),rgba(41,42,46,1));
                           }
                       }

                   }
               }

               .right{
                   float: right;
                   height: 100%;
                   ul{
                       margin-right: 30px;
                       margin-top: 10px;
                       li {
                           color: #8B8D8E;
                           float: left;
                       }
                   }

                   .icon-shoucang1{
                       color: yellow;
                   }
               }
            }
            }
            .nav{
                // background-color: #880f25;
                height: 110px;

                h1 {
                    margin-top: 30px;
                    float: left;
                    height: 47px;
                    a{
                        height: 100%;

                        img{
                            
                        }
                    }
                }

                .nav-ul{
                    float: left;
                    margin-top: 40px;
                    margin-left: 40px;
                    li {
                        line-height: 28px;
                        float: left;
                        font-size:18px;
                        font-family:MicrosoftYaHei;
                        font-weight:400;
                        color:rgba(249,244,244,1);
                        margin-right: 25px;
                        text-align: center;
                        position: relative;
                        padding: 0 10px;
                        &.atc{
                            // width:76px;
                            // height:28px;

                            background:#187BEB;
                            border-radius:13px;
                            
                        }
                        // &::after{
                        //        content: '';
                        //        position: absolute;
                        //        display: block;
                        //        height: 28px;
                        //        width: 10px;
                        //        right: -10px;
                        //        top: 0;
                        //     //    border-radius: 19px;
                        //         border-bottom-right-radius: 15px;
                        //         border-top-right-radius: 15px;
                        //        background:#187BEB;
                        //     }
                    }
                }

                .nav-right{
                    box-sizing: border-box;
                    padding: 0 10px;
                    margin-top:38px;
                    float: right;
                    display: flex;
                    background-color: #fff;
                    width: 246px;
                    height: 36px;
                    border-radius: 18px;
                    justify-content: center;
                    align-items: center;

                    .nav-le{
                        flex: 1;
                        display: flex;
                        flex-direction: column;
                        justify-content: center;
                        align-items: center;
                        width: 45px;
                        span{
                            color: #616266;
                            font-size:15px;
                        }
                        // input{
                        //     w
                        // }
                        .iconfont{
                            font-size:18px;
                        }
                    }
                    img{
                        width: 20px;
                        height: 20px;
                    }
                }
            }
        }
        // 主体
        #main {
            position: relative;
            height: 1839px;
            // 轮播图样式
            .lunbotu{
                width: 1920px;
                margin: 0 auto;
                .container{
                height: 550px;
                width: 1920px;
                // margin: 0 auto;
                display: block;
                #my-lunbotu>.swiper-pagination-bullet{
                    width: 18px;
                    height: 18px;
                    margin-right: 21px;

                }
               #my-lunbotu{
                   bottom: 140px;
               }
            }
            }
            
            .main{
                     // 个人弹框样式
                .main-gerentankuang{
                    border-radius:0px 0px 20px 20px;
                    background:#193864;
                    opacity:0.71;
                    position: absolute;
                    width: 369px;
                    height: 317px;
                    // background-color: rgba(197, 17, 173,0.5);
                    top: -487px;
                    left: 0;
                    z-index: 66;

                    .gerentankuang-top{
                        height: 50%;
                        display: flex;
                        justify-content: space-around;
                        align-items: center;

                        img{

                        }

                        .top-explain{
                            height: 70px;
                            display: flex;
                            flex-direction: column;
                            justify-content: space-around;
                            
                            .wenzi{
                                color: #fff;
                            }

                            .login{
                                display: flex;
                                justify-content: space-between;
                                span{
                                    text-align: center;
                                    display: block;
                                    width: 52px;
                                    height: 20px;
                                    border-radius: 10px;
                                    // color: #fff;
                                    &:nth-child(1){
                                        color: #fff;
                                        background-color: @indexColor;
                                    }
                                    &:nth-child(2){
                                        color: #fff;
                                        background-color: rgb(243, 116, 2);
                                    }
                                }
                            }
                        }
                    }
                    .gerentankuang-buttom{
                        height: 50%;
                        background-color: rgb(194, 10, 10);
                    }
                }
                position: absolute;
                top: 487px;
                left: 50%;
                transform: translateX(-50%);
                z-index: 66;
                background: url(/../../assets/images/index/beij.png) no-repeat;
                width: 1439px;
                height: 1352px;
                // background-color: yellowgreen;
                padding: 10px 20px;
                box-sizing: border-box;
                // background-image: url("../assets/images/index/beij.png");
                // background: url();

                // .main-title{
                //     height: 60px;
                //     background-color: deepskyblue;
                // }
                .main-left{
                    height: 100%;
                    width: 344px;
                    float: left;
                    // background-color: rgb(60, 10, 241);
                    .main-left-top{
                        height: 368px;
                    .m-l-center{
                        margin-top: 25px;
                        padding: 4px;
                        box-sizing: border-box;

                        .m-l-tile{
                            height: 14px;
                            h6{
                                font-size: 14px;
                                line-height: 14px;
                                color: @indexColor;
                            }
                        }

                        .m-l-contenter{
                            height: 82px;
                            width: 336px;
                            margin-top: 10px;
                            // box-sizing: border-box;

                            .m-l-contenter-img{
                                float: left;

                                 img{
                                width: 191px;
                                height: 82px;
                                }
                            }
                           

                            .m-l-contenter-right{
                                float: right;
                                width: 145px;
                                padding: 12px 0 12px 12px;
                                box-sizing: border-box;
                                color: #4F5052;
                            }
                        }

                        .m-l-footer{
                            height: 172px;
                            width: 100%;
                            margin-top: 25px;

                            // display: -webkit-box;
                            // -webkit-box-orient: vertical;
                            // -webkit-line-clamp: 1;
                            // overflow: hidden;

                            ul{
                                li{
                                    font-size: 18px;
                                    height: 18px;
                                    line-height: 18px;
                                    margin-bottom: 10px;
                                    width: 100%;
                                    
                                    // 文字超出显示
                                     display: -webkit-box;
                                     -webkit-box-orient: vertical;
                                     -webkit-line-clamp: 1;
                                     overflow: hidden;
         
                                    &.m-l-footer-avtive{
                                        color: @indexColor;
                                    }
                                }
                            }
                        }
                    }
                    
                }
                
                .main-left-conten{

                    .main-left-conten-body{
                        width: 299px;
                        height: 521px;
                        margin: 0 auto;
                        margin-top: 19px;
                        padding-bottom: 19px;

                        .main-left-conten-body-img{
                            height: 404px;
                            background: url(../assets/images/index/xiazai-beij.png);
                            position: relative;
                            
                            img{
                               position: absolute;
                            }

                            .erweima{
                                top: 17px;
                                left: 50%;
                                // top: 50%;
                                transform: translate(-50%,);
                            }

                            .wenzisaoma{
                               
                                top: 278px;
                                left: 50%;
                                // top: 50%;
                                transform: translate(-50%,);
                            }
                            .shayubuhuifei{
                                
                                top: 304px;
                                left: 50%;
                                // top: 50%;
                                transform: translate(-50%,);
                            }
                            .gengduozixun{
                                top: 352px;
                                left: 50%;
                                // top: 50%;
                                transform: translate(-50%,);
                            }
                            .shayu{
                                top: 103px;
                                left: 50%;
                                // top: 50%;
                                transform: translate(-50%,);
                            }

                        }
                    }
                }

                .main-left-footer{
                    padding-top: 12px;

                    .main-left-footer-body{
                        margin-top: 16px;
                        width: 100%;
                        height: 230px;
                        // background-color: rgb(135, 165, 66);

                        ul{
                            width: 100%;
                            height: 100%;
                            border: 1px solid #ccc;
                            box-sizing: border-box;
                            li{
                                float: left;
                                width: 171px;
                                height: 76px;
                                // background-color: rgb(228, 102, 228);
                                position: relative;

                                .kuaisutongdao{
                                    position: absolute;
                                    left: 34px;
                                    top: 21px;
                                }
                                .sanjiao{
                                    position: absolute;
                                    right: 0;
                                    bottom: 0;
                                }
                                h6{
                                    position: absolute;
                                    left: 87px;
                                    top: 35px;
                                }

                                &:nth-child(1){
                                    border-bottom: 1px solid #ccc;
                                    border-right: 1px solid #ccc;
                                    box-sizing: border-box;

                                    &:hover{
                                        background: url(../assets/images/index/kuaisutongdao-2293.png) no-repeat -1px 0;
                                    }
                                }
                                &:nth-child(2){
                                    border-bottom: 1px solid #ccc;
                                    box-sizing: border-box;

                                    &:hover{
                                        background: url(../assets/images/index/kuaisutongdao-2293.png) no-repeat -1px 0;
                                    }
                                }
                                &:nth-child(3){
                                    border-bottom: 1px solid #ccc;
                                    border-right: 1px solid #ccc;
                                    box-sizing: border-box;

                                    &:hover{
                                        background: url(../assets/images/index/kuaisutongdao-2293.png) no-repeat -1px 0;
                                    }
                                }
                                &:nth-child(4){
                                    border-bottom: 1px solid #ccc;
                                    box-sizing: border-box;

                                    &:hover{
                                        background: url(../assets/images/index/kuaisutongdao-2293.png) no-repeat -1px 0;
                                    }
                                }
                                &:nth-child(5){
                                    border-right: 1px solid #ccc;
                                    box-sizing: border-box;

                                    &:hover{
                                        background: url(../assets/images/index/kuaisutongdao-2293.png) no-repeat -1px 0;
                                    }
                                }
                                &:nth-child(6){
                                    color: #CD7A53;

                                    &:hover{
                                        background: url(../assets/images/index/kuaisutongdao-2293.png) no-repeat -1px 0;
                                    }
                                }
                            }
                        }
                    }
                }

                // 右边的盒子
                }
                .main-right{
                     height: 100%;
                     width: 1018px;
                    //  background-color: rgb(223, 88, 88);
                     float: right;

                    //  公共标题改的样式
                    .xinwengengduo{
                        margin-right: 31px;
                    }

                     .main-right-body{

                         .main-right-body-contener{
                             margin-top: 18px;
                             height: 216px;
                             ul{

                                 li{
                                     float: left;
                                    //  width: 320px;
                                    //  height: 219px;
                                    width: 318px;
                                    height: 216px;
                                    margin-right: 28px;
                                    
                                    box-sizing: border-box;
                                    border-right: 1px solid #ccc;
                                    border-bottom: 1px solid #ccc;
                                    border-left: 1px solid #ccc;
                                    border-bottom-right-radius: 20px;
                                    border-bottom-left-radius: 20px;
                                    border-top-right-radius: 20px;
                                    border-top-left-radius: 20px;

                                     .main-right-body-contener-img{
                                         width: 100%;
                                         height: 180px;
                                         background: url(../assets/images/index/youxituijian-1.png);
                                         position: relative;
                                         img{
                                             position: absolute;
                                             top: 50%;
                                             left: 50%;
                                             transform:translate(-50%,-50%);
                                             display: none;
                                         }
                                     }
                                     &:nth-child(3){
                                         margin-right: 0px;
                                     }

                                     .main-right-explain{
                                         height: 36px;
                                        
                                        //  border-right: 1px solid #ccc;
                                        //  border-bottom: 1px solid #ccc;
                                        //  border-left: 1px solid #ccc;
                                         position: relative;
                                         box-sizing: border-box;

                                         p{
                                             position: absolute;
                                             left: 16px;
                                             top: 8px;
                                             font-size: 17px;
                                             line-height: 17px;
                                             color: #202324;
                                            //  font-weight: 400px;
                                         }

                                        .explain-jinruyouxi{
                                            position: absolute;
                                            top: 6px;
                                            right: 18px;
                                            width: 73px;
                                            height: 23px;
                                            font-size: 12px;
                                            line-height: 23px;
                                            background-color: #FB7D00;
                                            text-align: center;
                                            border-radius:20px;
                                            color: #FBFCFC;
                                        }
                                     }

                                     &:hover{
                                        //  background: url(../assets/images/index/yxtj-beijing.png);
                                        transform: scale(1.05) ;
                                        border: 1px solid #FB7D00;
                                        box-sizing: border-box;
                                        border-top-right-radius: 19px;
                                        border-top-left-radius: 21px;
                                            //  background-size: 110%;
                                        //  width: 320px;
                                        //  height: 218px;
                                        // "transform","scaleX(1.1) scaleY(1.1)"
                                         
                                     }
                                     &:hover .main-right-body-contener-img{
                                         background: url(../assets/images/index/yxtj-beijing.png) no-repeat;
                                        //  background: url('')
                                        // content: url('');
                                        // content: url(../assets/images/index/yxtj-beijing.png)
                                        .img{
                                            display: block;
                                        }
                                     }



                                     &:hover .main-right-explain{
                                        //  border-right: 1px solid #FB7D00;
                                        //  border-bottom: 1px solid #FB7D00;
                                        //  border-left: 1px solid #FB7D00;
                                        // border: 0;
                                     }
                                     
                                 }
                             }
                         }
                        // 长图样式
                        .main-right-body-footer{
                            margin-top: 24px;
                            padding: 0 0 20px 0;
                            .changtu-img{
                                width: 1018px;
                                height: 66px;
                            }
                        }
                    }

                     // 热门
                        .main-right-hot{
                            .right-hot-center{
                                margin-top: 18px;
                                height: 537px;
                                ul{
                                    li{
                                        width: 313px;
                                        height: 256px;
                                        // background-color: rgb(133, 19, 19);
                                        float: left;
                                        box-sizing: border-box;
                                        margin-right: 35px;
                                        box-shadow:0px 0px 6px 0px rgba(4,0,0,0.28);
                                        .hot-center-bjimg{
                                            width: 313px;
                                            height: 184px;
                                            width: 100%;
                                            // height: 180px;
                                            background: url(../assets/images/index/hot1.png);
                                            position: relative;
                                            img{
                                                position: absolute;
                                                top: 50%;
                                                left: 50%;
                                                transform:translate(-50%,-50%);
                                                display: none;
                                            }
                                            .center-beimg-left{
                                                position: absolute;
                                                left: 7px;
                                                bottom: 7px;
                                                color: #187BEB;
                                                font-size: 14px;
                                                line-height: 14px;
                                                display: none;
                                            }
                                            .center-beimg-right{
                                                position: absolute;
                                                right: 11px;
                                                bottom: 8px;
                                                color: #187BEB;
                                                font-size: 14px;
                                                line-height: 14px;
                                                display: none;
                                            }
                                        }

                                        .hot-center-explain{
                                            height: 72px;
                                            width: 100%;
                                            position: relative;
                                            // box-shadow: 1px 1px 1px #616266 ;
                                            box-shadow:0px 0px 3px 0px rgba(3, 0, 0, 0.075);
                                            h6{
                                                position: absolute;
                                                left: 12px;
                                                top: 12px;
                                                font-size: 21px;
                                                font-weight:400;
                                                color: #0E0005;
                                            }
                                            p{
                                                position: absolute;
                                                left: 13px;
                                                top: 43px;
                                                font-size: 13px;
                                                line-height: 13px;
                                                color: #5B5D5E;
                                            }

                                            .explain-jinruyouxi{
                                               position: absolute;
                                               left: 214px;
                                               top: 24px;
                                               width: 83px;
                                               height: 24px;
                                               background-color: @indexColor;
                                               text-align: center;
                                               line-height: 24px;
                                               font-size: 12px;
                                               border-radius: 12px;
                                               color: #FDFDFE;
                                            }
                                        }

                                        &:nth-child(3){
                                            margin-right: 0;
                                        }
                                        &:nth-child(6){
                                            margin-right: 0;
                                        }
                                        &:nth-child(n+4){
                                            margin-top: 25px;
                                        }
                                        

                                        &:hover {

                                            .hot-center-bjimg{
                                                background: url(../assets/images/index/hot-beijing.png) no-repeat -1px 0;
                                            }

                                            .img{
                                                display: block;
                                            }

                                            .center-beimg-left{
                                                display: block;
                                            }
                                            .center-beimg-right{
                                                display: block;
                                            }
                                        }
                                    }
                                }
                            }
                        }

                        // 游戏礼包
                        .main-right-gift{
                            padding-top: 14px;

                            .gift-center{
                                width: 1018px;
                                height: 231px;
                                margin-top: 18px;
                                ul{
                                    border-top: 1px solid #ccc;
                                    border-left: 1px solid #ccc;
                                    height: 234px;
                                    width: 1012px;
                                    li{
                                    float: left;
                                    width: 252px;
                                    height: 116px;
                                    border-right: 1px solid #ccc;
                                    border-bottom: 1px solid #ccc;
                                    position: relative;

                                    img{
                                        position:absolute;
                                        left: 11px;  
                                        top: 50%;
                                        transform: translateY(-50%)

                                    }
                                    .gift-cnter-explain{
                                        position:absolute;
                                        height: 44px;
                                        // text-align: center;
                                        left: 112px;
                                        top: 50%;
                                        transform: translateY(-50%);

                                        h6{
                                            color: #00080A;
                                            font-size: 16px;
                                            line-height: 16px;
                                            font-family:MicrosoftYaHei;
                                            margin-bottom: 12px;
                                        }

                                        span.shengyu{
                                            color: #6D6D6D;
                                            font-size: 13px;
                                            line-height: 13px;
                                            margin-right: 8px;
                                        }
                                        span.number{
                                            color: #F90118;
                                            color:rgba(249,1,24,1);
                                            font-size: 12px;
                                            line-height: 12px;
                                            font-weight: 400;
                                        }
                                        span.lingqu{
                                            display: none;
                                            width: 67px;
                                            height: 22px;
                                            font-size: 14px;
                                            line-height: 21px;
                                            text-align: center;
                                            border-radius: 11px;
                                            background-color: @indexColor;
                                            color: #F5F0EA;
                                        }
                                    }

                                    &:hover {
                                        
                                        span.shengyu,span.number{
                                            display: none;
                                        }
                                        span.lingqu{
                                            display: block;
                                            margin: 0 auto;
                                        }
                                    }
                                }
                                }
                                
                            }
                        }
                }
            }
        }

        // 底部
        #footer{
            position: relative;
            margin-top: 9px;
            width: 100%;
            // position: absolute;
            left: 0;
            bottom: 0;
            height: 243px;
            background-color: #210803;
            display: flex;
            flex-direction:column;
            justify-content: space-around;
            align-items: center;

            ul.about{
                
                li{
                    position: relative;
                    color: #fff;
                    float: left;
                    font-size: 17px;
                    margin-right: 16px;
                    line-height: 17px;
                    font-weight:400;

                    &::after{
                        content: '';
                        position: absolute;
                        display: block;
                        height: 17px;
                        width: 1px;
                        right: -8px;
                        top: 1px;
                        background-color: #fff;
                    }    

                    &:nth-child(7)::after{
                        display: none;
                       
                    }
                }
            }
            p{
                color: #fff;
                font-size: 14px;
                line-height: 14px;
            }
            ul.public{
                color: #fff;

                li{
                    float: left;
                    height: 36px;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    margin-right: 20px;
                    img{
                        width: 34px;
                        height: 36px;
                        margin-right: 5px;
                    }

                    .pulic-explain{
                        // width: 109px;
                        height: 36px;
                        line-height: 12px;
                        font-size: 12px;
                        p{
                            line-height: 12px;
                            font-size: 12px;
                            margin-top: 4px;
                        }
                    }
                }

                
            }
            .extra{
                    
                    text-align: center;
                    color: #fff;
                }
        }

        // 公共标题
        .main-tle{
             height: 24px;
             display: flex;
             justify-content: space-between;
             align-items: center;
             margin-top: 12px;
             position: relative;

             h2{
                 font-size: 24px;
                 font-weight:400;
                 margin-left: 17px;
                 box-sizing: border-box;
                 line-height: 24px;
             }

             .xinwengengduo{
                 width: 34px;
                 height: 14px;
                 font-size: 12px;
                 line-height: 14px;
                 border: 1px solid #187BEB;
                 border-radius: 5px;
                 text-align: center;
                 color: #187BEB;
                 
             }
            // 伪元素线
            &::before{
                content: '';
                position: absolute;
                display: block;
                height: 32px;
                width: 5px;
                left: 0;
                background-color: @indexColor;
            }
            
        }
    }
</style>
