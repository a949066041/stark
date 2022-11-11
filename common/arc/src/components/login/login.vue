<!--
 * @Author: Rikka
 * @Date: 2022-11-11 13:44:35
 * @LastEditTime: 2022-11-11 15:23:46
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
          <el-input size="large" />
        </div>
        <div class="mb-1">
          <span>Password</span>
        </div>
        <div>
          <el-input size="large" />
        </div>
        <div class="flex flex-row justify-between my-4">
          <div>
            <el-checkbox size="large" label="Remember for 30 days" />
          </div>
          <div>
            <el-link>Forgot password</el-link>
          </div>
        </div>
        <div>
          <el-button
            @click="handleLogin()"
            size="large"
            type="primary"
            round
            class="w-full"
          >
            Login
          </el-button>
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
<style lang="scss" scoped>
.login-left {
  @apply basis-1/2 bg-blue-400 h-full rounded-r-3xl flex flex-row justify-center items-center;
}

.login-box {
  width: 20vw;
}
</style>
