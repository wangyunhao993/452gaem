<template>
    <div class="index-container">
        <!-- 头部 -->
        <header id="header" >
            <div class="head-top w">
                <div class="left">
                    <ul class="top-mages " >
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
                        <li><i class="iconfont icon-shoucang"></i>
                        <i class="iconfont icon-shoucang1"></i>
                        收藏</li>
                    </ul>
                </div>
            </div>
            <nav class="nav w">

            </nav>
        </header>
        <!-- 主体 -->
        <!-- 底部 -->
        <footer id="footer" >

        </footer>
    </div>
</template>

<script>
export default {
  name: "index"
}
</script>

<style lang="less">
    .index-container{
        position: relative;
        height: 100%;
        width: 100%;
        #header{
            height: 151px;
            background-color: #272830;
            .head-top{
               height: 43px;
               background-color: #050001;
            //    background-color: #96525f;

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
                   }
               }

               .right{
                   float: right;
                   height: 100%;
                   ul{
                       margin-right: 30px;
                       margin-top: 16px;
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

            .nav{
                background-color: #880f25;
            }
        }

        // 底部
        #footer{
            // margin-top: 500px;
            width: 100%;
            position: absolute;
            left: 0;
            bottom: 0;
            height: 243px;
            background-color: #210803;
        }
    }
</style>
