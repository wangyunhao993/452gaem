<template>
    <div class="index-container">
        <!-- 头部 -->
        <header id="header" >
            <div class="head-top">
                <div class="bgc w">
                    <div class="left">
                        <ul class="top-mages" >
                            <li><img src="../assets/images/index/top1.png" alt="">&nbsp;452游戏网</li><li>|</li>
                            <li><img src="../assets/images/index/top2.png" alt="">&nbsp;452游戏网</li><li>|</li>
                            <li><img src="../assets/images/index/top3.png" alt="">&nbsp;452游戏网</li><li>|</li>
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
                    <li class="atc" >首页</li>
                    <li>咨询</li>
                    <li class="atc">游戏中心</li>
                    <li>礼包中心</li>
                    <li>商城</li>
                    <li>VIP</li>
                    <li class="atc">452游戏盒子</li>
                    <li>客服</li>
                    <li>个人中心</li>
                </ul>
                <div class="nav-right">
                    <div class="nav-le">
                        <span>游戏</span>
                        <i class="iconfont icon-jiantouarrow486" ></i>
                    </div>
                    <input type="text">
                    <img src="" alt="">
                </div>
            </nav>
        </header>
        <!-- 主体 -->
        <!-- 也是link to 的地方 -->
        <main id="main" >
            <swiper class="container" :options="swiperOption" ref="mySwiper" @someSwiperEvent="callback">
                <!-- slides -->
                <swiper-slide v-for="(ietm,index) in imgList" ><img @click="imgClick(ietm)" height="550px" src="../assets/images/index/banner.png" alt=""></swiper-slide>
                <!-- <swiper-slide><img height="550px" src="../assets/images/index/banner.png" alt=""></swiper-slide>
                <swiper-slide><img height="550px" src="../assets/images/index/banner.png" alt=""></swiper-slide>
                <swiper-slide><img height="550px" src="../assets/images/index/banner.png" alt=""></swiper-slide> -->
                <!-- Optional controls -->
                <!-- 分页器 -->
                <div class="swiper-pagination"  slot="pagination"></div>
                <!-- 导航按钮 上下页 -->
                <!-- <div class="swiper-button-prev" slot="button-prev"></div>
                <div class="swiper-button-next" slot="button-next"></div> -->
                <!-- 滚动条 -->
                <!-- <div class="swiper-scrollbar"   slot="scrollbar"></div> -->
            </swiper>
            <div class="main w">

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
                                <div class="m-l-contenter-right" >
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

                <div class="main-right">
                    <div class="main-tle">
                        <h2>下载游戏</h2>
                        <div class="xinwengengduo">更多</div>
                    </div>
                   

                </div>

            </div>
        </main>
        <!-- 底部 -->
        <footer id="footer" >

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
              '游戏中心',
              '礼包中心',
              '商城',
              'VIP',
              '452游戏盒子',
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
                           margin-top: 10px;
                           float: left;
                           color: #8B8D8E;
                           margin-right: 5px;
                           img{
                               width: 33px;
                               height: 24px;
                           }
                       }

                        /* 伪元素线 */
                        // &.right::before {
                        //     content: '';
                        //     position: absolute;
                        //     display: block;
                        //     height: 300px;
                        //     width: 1px;
                        //     left: 0;
                        //     background-color: #ccc;
                        //     top: 50%;
                        //     transform: translate(0, -50%);
                        // }
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
                        margin-right: 45px;
                        text-align: center;
                        &.atc{
                            // width:76px;
                            // height:28px;
                            background:#187BEB;
                            border-radius:13px;
                        }
                    }
                }

                .nav-right{
                    float: right;

                    .nav-le{
                        span{
                            color: #616266;
                            font-size:15px;
                        }

                        .iconfont{
                            font-size:18px;
                        }
                    }
                }
            }
        }
        // 主体
        #main {

            .container{
                .swiper-pagination-bullet{
                    width: 16px;
                    height: 16px;
                    margin-right: 21px;
                }
            }

            
            .main{
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

                    .main-left-top{
                    
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
                        position: relative;

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
                                transform: translate(-50%, -50%);
                            }

                            .wenzisaoma{
                               
                                top: 278px;
                                left: 50%;
                                // top: 50%;
                                transform: translate(-50%, -50%);
                            }
                            .shayubuhuifei{
                                
                                top: 304px;
                                left: 50%;
                                // top: 50%;
                                transform: translate(-50%, -50%);
                            }
                            .gengduozixun{
                                top: 352px;
                                left: 50%;
                                // top: 50%;
                                transform: translate(-50%, -50%);
                            }

                        }
                    }
                }

                .main-left-footer{
                    // background-color: rgb(134, 22, 125);

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
                                        background: url(../assets/images/index/kuaisutongdao-2293.png)
                                    }
                                }
                                &:nth-child(2){
                                    border-bottom: 1px solid #ccc;
                                    box-sizing: border-box;

                                    &:hover{
                                        background: url(../assets/images/index/kuaisutongdao-2293.png)
                                    }
                                }
                                &:nth-child(3){
                                    border-bottom: 1px solid #ccc;
                                    border-right: 1px solid #ccc;
                                    box-sizing: border-box;
                                }
                                &:nth-child(4){
                                    border-bottom: 1px solid #ccc;
                                    box-sizing: border-box;
                                }
                                &:nth-child(5){
                                    border-right: 1px solid #ccc;
                                    box-sizing: border-box;
                                }
                                &:nth-child(6){
                                    color: #CD7A53;
                                }
                            }
                        }
                    }
                }

                // 右边的盒子
                }
                .main-right{
                     height: 100%;
                     width: 1002px;
                     background-color: rgb(223, 88, 88);
                     float: right;
                }
            }
        }

        // 底部
        #footer{
            margin-top: 500px;
            width: 100%;
            // position: absolute;
            left: 0;
            bottom: 0;
            height: 243px;
            background-color: #210803;
        }

        // 公共标题
        .main-tle{
             height: 24px;
             display: flex;
             justify-content: space-between;
             align-items: center;
             margin-top: 12px;

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
             
        }
    }
</style>
