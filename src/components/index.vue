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
        <main id="main" >
            <swiper class="container" :options="swiperOption" ref="mySwiper" @someSwiperEvent="callback">
                <!-- slides -->
                <swiper-slide><img height="550px" src="../assets/images/index/banner.png" alt=""></swiper-slide>
                <swiper-slide><img height="550px" src="../assets/images/index/banner.png" alt=""></swiper-slide>
                <swiper-slide><img height="550px" src="../assets/images/index/banner.png" alt=""></swiper-slide>
                <swiper-slide><img height="550px" src="../assets/images/index/banner.png" alt=""></swiper-slide>
                <!-- Optional controls -->
                <!-- 分页器 -->
                <div class="swiper-pagination"  slot="pagination"></div>
                <!-- 导航按钮 上下页 -->
                <div class="swiper-button-prev" slot="button-prev"></div>
                <div class="swiper-button-next" slot="button-next"></div>
                <!-- 滚动条 -->
                <!-- <div class="swiper-scrollbar"   slot="scrollbar"></div> -->
            </swiper>
            <div class="main w">
                <div class="main-left">
                    <div class="main-tle">
                        <h2>新闻中心</h2>
                        <div class="xinwengengduo">更多</div>
                    </div>
                    <div class="m-l-center">

                    </div>
                </div>
                <div class="main-right">
                    <div class="main-tle">
                        <h2>新闻中心</h2>
                        <div class="xinwengengduo">更多</div>
                    </div>
                    <div class="m-r-center">

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
import { log } from 'util';

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
          autoplay: 1000,
        },
        
      }
  },
  methods:{
      callback(){
          console.log('hahh')
      }
  },
   computed: {
      swiper() {
        return this.$refs.mySwiper.swiper
      }
    },
    mounted() {

    //     new Swiper (this.$refs.slider, {
    //     loop: true,
    //     // 如果需要分页器
    //     pagination: '.swiper-pagination',
    //     // 如果需要前进后退按钮
    //     nextButton: '.swiper-button-next',
    //     prevButton: '.swiper-button-prev',
    //     // 如果需要滚动条
    //     scrollbar: '.swiper-scrollbar',
    //   })

      // current swiper instance
      // 然后你就可以使用当前上下文内的swiper对象去做你想做的事了
    //   console.log('swiper对象', this.swiper)
    //   this.swiper.slideTo(3, 1000, true)
    //   this.swiper.autoplay.run(1000)
    //   this.swiper.autoplay.pause(1000)

        // var mySwiper = new Swiper('.swiper-container', {
        // autoplay: 5000,//可选选项，自动滑动
    // })
    }
}
</script>

<style lang="less">
// require styles
// @import '../../node_modules/swiper/dist/css/swiper.css';

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

        #main {

            .main{
                width: 1439px;
                height: 1352px;
                background-color: yellowgreen;
                padding: 10px 20px;
                // background-image: url("../assets/images/index/beij.png");
                // background: url();

                // .main-title{
                //     height: 60px;
                //     background-color: deepskyblue;
                // }
                .main-left{
                    height: 100%;
                    width: 344px;
                    background-color: rgb(63, 52, 52);
                    float: left;

                    .main-tle{
                        height: 45px;
                        display: flex;
                        justify-content: space-between;
                        align-items: center;

                        h2{
                            font-size: 23px;
                            font-weight:400;
                            margin-left: 17px;
                            box-sizing: border-box;
                            line-height: 45px;
                        }

                        .xinwengengduo{
                            widows: 34px;
                            height: 14px;
                            font-size: 12px;
                            line-height: 14px;
                            border: 1px solid #187BEB;
                            border-radius: 4px;
                            text-align: center;
                            color: #187BEB;
                            
                            
                        }
                        
                    }
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
             height: 45px;
             display: flex;
             justify-content: space-between;
             align-items: center;

             h2{
                 font-size: 23px;
                 font-weight:400;
                 margin-left: 17px;
                 box-sizing: border-box;
                 line-height: 45px;
             }

             .xinwengengduo{
                 widows: 34px;
                 height: 14px;
                 font-size: 12px;
                 line-height: 14px;
                 border: 1px solid #187BEB;
                 border-radius: 4px;
                 text-align: center;
                 color: #187BEB;
                 
                 
             }
             
        }
    }
</style>
