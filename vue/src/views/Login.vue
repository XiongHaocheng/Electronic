<template>
    <div class="container">
        <!-- 第一个区域 -->
        <div class="top-section">
            <div style="margin-left: 18%;margin-top: 15px;height: 60%;">
                <img src="https://misc.360buyimg.com/lib/img/e/logo-201305-b.png" alt="First Image" style="margin:10px;">
                <img src="https://storage.jd.com/retail-mall/jdc_user_passport/pc/user/passport/1.0.16/css/i/l-icon.png"
                    alt="Second Image" style="margin:10px;">
            </div>
            <div style="position: relative; /* 设置相对定位 */
                top: 15px; /* 负边距将第二个div向上移动，靠近第一个div的底部 */
                display: flex;
                justify-content: center;
                align-items: flex-end;
                background-color: rgb(255, 245, 236);
                height: 30%;">
                <p style="text-align: center;
                  color: #a0a0a0;
                  font-family: PingFang SC;
                  font-size: 12px;
                  font-weight: 400;
                  line-height: 12px;
                  letter-spacing: 0;">

                    依据《网络安全法》，为保障您的账户安全和正常使用，请尽快完成手机号验证！
                    新版
                    <a href="" class="black" target="_blank" style="outline: rgb(109, 109, 109) none 0px;">《京东隐私政策》</a>
                    已上线，将更有利于保护您的个人隐私。
                </p>
            </div>
        </div>


        <!-- 第二个区域 -->
        <div class="middle-section">

       

        </div>

        <!-- 第三个区域 -->
        <div class="bottom-section">
            <div style="display: flex;
                    justify-content: center;
                    align-items: center;
                    height: 100px;
                    margin-top: 10px; /* 设置容器高度 */">
                <div id="footer-2013" style="text-align: center;">
                    <div class="links" style="font: 12px/150% Arial,Verdana;color: #999;">
                        <a style="margin: 0px 10px;" rel="nofollow" target="_blank" href="">
                            关于我们
                        </a>
                        |
                        <a style="margin: 0px 10px;" rel="nofollow" target="_blank" href="">
                            联系我们
                        </a>
                        |
                        <a style="margin: 0px 10px;" rel="nofollow" target="_blank" href="">
                            人才招聘
                        </a>
                        |
                        <a style="margin: 0px 10px;" rel="nofollow" target="_blank" href="">
                            商家入驻
                        </a>
                        |
                        <a style="margin: 0px 10px;" rel="nofollow" target="_blank" href="">
                            广告服务
                        </a>
                        |
                        <a style="margin: 0px 10px;" rel="nofollow" target="_blank" href="">
                            手机京东
                        </a>
                        |
                        <a style="margin: 0px 10px;" target="_blank" href="">
                            友情链接
                        </a>
                        |
                        <a style="margin: 0px 10px;" target="_blank" href="">
                            销售联盟
                        </a>
                        |
                        <a style="margin: 0px 10px;" href="" target="_blank">
                            京东社区
                        </a>
                        |
                        <a style="margin: 0px 10px;" href="" target="_blank">
                            京东公益
                        </a>
                    </div>
                    <div class="copyright" style="font-size: 12px; color: #999;margin-top: 10px; ">
                        Copyright&nbsp;&copy;&nbsp;2004-2024&nbsp;&nbsp;京东JD.com&nbsp;版权所有
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>
  
<script>
export default {
  name: 'MyLayout',
}
</script>

<style scoped>
.container {
    display: flex;
    flex-direction: column;
    height: 100vh;
    /* Full height of the viewport */
}

.top-section {
    height: 20%;
    background-color: white;
    /* Light gray background */
}

.middle-section {
    height: 60%;
    background-color: #e0e0e0;
    /* Lighter gray background */
}

.bottom-section {
    height: 20%;
    background-color: white;
    /* Lightest gray background */
}
/*登录测试样式*/

</style>
  