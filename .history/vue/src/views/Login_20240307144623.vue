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
        <p style="margin: 15px;
          text-align: center;
                  color: #a0a0a0;
                  font-family: PingFang SC;
                  font-size: 12px;
                  font-weight: 400;
                  line-height: 12px;
                  letter-spacing: 0;">

          依据《网络安全法》，为保障您的账户安全和正常使用，请尽快完成手机号验证！
          新版
          <a href="" class="black" target="_blank" style="outline: rgb(109, 109, 109) none 0px;">《隐私政策》</a>
          已上线，将更有利于保护您的个人隐私。
        </p>
      </div>
    </div>

    <!-- 第二个区域 -->
    <div class="middle-section">

      <div class="login-container">
        <el-form ref="form" :model="form" :rules="rules" class="login-page">
          <h2 class="title" style="margin-bottom: 30px;text-align: center">登录</h2>
          <el-form-item prop="username">
            <el-input v-model="form.username" placeholder="用户名" clearable>
              <template #prefix>
                <el-icon class="el-input__icon">
                  <User />
                </el-icon>
              </template>
            </el-input>
          </el-form-item>
          <el-form-item prop="password">
            <el-input v-model="form.password" placeholder="密码" clearable show-password>

              <template #prefix>
                <el-icon class="el-input__icon">
                  <Lock />
                </el-icon>
              </template>
            </el-input>
          </el-form-item>
          <el-form-item>
            <div style="display: flex">
              <el-input v-model="form.validCode" style="width: 45%;" placeholder="请输入验证码"></el-input>
              <ValidCode @input="createValidCode" style="width: 50%" />
            </div>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" style=" width: 100%;height: 130%;font-size: 16px" @click="login">登 录</el-button>
          </el-form-item>
          <el-form-item>
            <el-button type="text" style="font-size: 16px;width: 20%; color: #ee7463"
              @click="$router.push('')">忘记密码?</el-button>
            <el-button type="text" style="font-size: 16px;margin-left: 139px"
              @click="$router.push('/register')">没有账号?前往注册</el-button>
          </el-form-item>
        </el-form>
      </div>

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
            Copyright&nbsp;&copy;&nbsp;2024&nbsp;&nbsp;周何熊小组&nbsp;版权所有
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import request from "../utils/request";
import { ElMessage } from "element-plus";
import ValidCode from "../components/Validate.vue";

export default {
  name: "Login",
  components: {
    ValidCode
  },
  data() {
    return {
      validCode: '',//通过valicode获取的验证码
      form: {},
      rules: {
        username: [
          {
            required: true,
            message: '请输入用户名',
            trigger: 'blur',
          }
        ],
        password: [
          {
            required: true,
            message: '请输入密码',
            trigger: 'blur',
          }
        ]

      }

    }
  },
  methods: {
    createValidCode(data) {
      this.validCode = data
    },
    login() {
      this.$refs['form'].validate((valid) => {
        if (valid) {
          if (!this.form.validCode) {
            ElMessage.error("请填写验证码")
            return
          }
          if (this.form.validCode.toLowerCase() !== this.validCode.toLowerCase()) {
            ElMessage.error("验证码错误")
            return
          }

          request.post("http://localhost:9090/user/login", this.form).then(res => {
            if (res.code == 0) {
              ElMessage.success("登录成功")
              sessionStorage.setItem("user", JSON.stringify(res.data))//缓存用户信息
              this.$router.push("/");
            } else {
              ElMessage.error(res.msg)
            }
          })
        }
      })

    }
  }
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
.login-container {
  position: fixed;
  width: 100%;
  height: 100vh;
  background-size: contain;
  overflow: hidden;
}

.login-page {
  border-radius: 5px;
  margin: 40px auto;
  width: 420px;
  padding: 35px 35px 15px;
  background: #fff;
  border: 1px solid #eaeaea;
  box-shadow: 0 0 25px #cac6c6;
}

.el-input__inner {
  height: 40px;
}
</style>
