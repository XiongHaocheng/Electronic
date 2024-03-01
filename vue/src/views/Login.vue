<template>

    <el-form ref="loginForm" :model="loginForm" label-width="80px">
      <el-form-item label="账号">
        <el-input v-model="username"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input type="password" v-model="password"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="handleLogin">登录</el-button>
      </el-form-item>
    </el-form>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import { useRouter } from 'vue-router';
  import axios from 'axios';
  import { ElMessage } from 'element-plus';
  
  const router = useRouter();
    const username = ref('');
    const password = ref('');
  const handleLogin = async () => {
    // 这里简化处理，直接判断账号密码是否为1111
    if (username.value === '1111' && password.value === '1111') {
      // 登录成功，跳转到首页
      ElMessage.success('登录成功');
      router.push('/');
    } else {
      // 登录失败，显示错误信息
      ElMessage.error('账号或密码错误');
    }
  };
  </script>