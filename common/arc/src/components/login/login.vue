<!--
 * @Author: Rikka
 * @Date: 2022-11-11 13:44:35
 * @LastEditTime: 2022-11-12 12:58:14
 * @LastEditors: Rikka
 * @Description: 
 * @FilePath: \stark\common\arc\src\components\login\login.vue
-->
<template>
  <div class="w-screen h-screen bg-gray-50 flex flex-row text-gray-700">
    <div class="login-left">
      <Vue3Lottie animationLink="/arc/lottie-login.json" />
    </div>
    <div class="basis-1/2 flex flex-col items-center justify-center">
      <div class="login-box">
        <div class="text-center mb-2">
          <h1 class="font-bold text-4xl">Welcome Stark</h1>
        </div>
        <div class="text-center mb-6">
          <span>Please enter your details</span>
        </div>
        <div class="mb-1">
          <span>Username</span>
        </div>
        <div>
          <a-input size="large" />
        </div>
        <div class="mb-1">
          <span>Password</span>
        </div>
        <div>
          <a-input size="large" />
        </div>
        <div class="flex flex-row justify-between my-4">
          <div>
            <a-checkbox size="large">Remember for 30 days</a-checkbox>
          </div>
          <div>
            <a-button type="link">Forgot password</a-button>
          </div>
        </div>
        <div>
          <a-button @click="handleLogin()" size="large" type="primary" round class="w-full"> Login </a-button>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { useRouter } from "vue-router";
import { Vue3Lottie } from "vue3-lottie";
const router = useRouter();
function handleLogin() {
  router.push("/view");
}
</script>
<style lang="less" scoped>
.login-left {
  @apply basis-1/2 bg-blue-400 h-full rounded-r-3xl flex flex-row justify-center items-center overflow-hidden;
}

.login-box {
  width: 20vw;
}
</style>
