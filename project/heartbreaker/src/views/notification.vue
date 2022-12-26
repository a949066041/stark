<!--
 * @Author: Rikka
 * @Date: 2022-12-02 21:09:49
 * @LastEditTime: 2022-12-26 19:23:03
 * @LastEditors: Rikka
 * @Description: 
 * @FilePath: \stark\project\heartbreaker\src\views\notification.vue
-->
<template>
  <div class="stark-container py-4 px-8">
    <Notifications group="foo-css" position="bottom left" :speed="500" />

    <!-- Velocity animation example -->
    <Notifications group="foo-velocity" position="bottom right" animation-type="velocity" :speed="500" />

    <!-- Custom style example -->
    <notifications group="custom-style" position="top center" classes="n-light" :max="3" :width="400" />

    <!-- Custom template example -->
    <notifications
      group="custom-template"
      :duration="5000"
      :width="500"
      animation-name="v-fade-left"
      position="top left"
    >
      <template #body="{ item }">
        <div class="custom-template">
          <div class="custom-template-icon">
            <i class="icon ion-android-checkmark-circle" />
          </div>
          <div class="custom-template-content">
            <div class="custom-template-title">
              {{ item.title }}

              <p>Random number: {{ item.data.randomNumber }}</p>
            </div>
            <div class="custom-template-text" v-html="item.text" />
          </div>
          <div class="custom-template-close">
            <i class="icon ion-android-close" />
          </div>
        </div>
      </template>
    </notifications>

    <!-- Full width example -->
    <notifications group="full-width" width="100%" />

    <div class="content">
      <p>CSS animation:</p>
      <div class="block">
        <button class="success" @click="show('foo-css', 'success')">
          <i class="icon ion-information-circled" />
          SUCCESS
        </button>
        <button class="warn" @click="show('foo-css', 'warn')">
          <i class="icon ion-alert-circled" />
          WARNING
        </button>
        <button class="error" @click="show('foo-css', 'error')">
          <i class="icon ion-close-circled" />
          ERROR
        </button>
      </div>

      <p>Velocity animation:</p>

      <div class="block">
        <button class="success" @click="show('foo-velocity', 'success')">
          <i class="icon ion-information-circled" />
          SUCCESS
        </button>
        <button class="warn" @click="show('foo-velocity', 'warn')">
          <i class="icon ion-alert-circled" />
          WARNING
        </button>
        <button class="error" @click="show('foo-velocity', 'error')">
          <i class="icon ion-close-circled" />
          ERROR
        </button>
      </div>
      <div>
        <p>Custom style:</p>
        <button @click="show('custom-style')">top center (max=3)</button>
        <p>Custom template:</p>
        <button @click="show('custom-template')">show top left</button>
        <p />
        <button @click="clean('custom-template')"><u>clean all</u> top left</button>
        <p />
        <button @click="show('full-width')">show bottom (full width)</button>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
export default {
  name: "[heartbreaker]Notification"
};
</script>
<script lang="ts" setup>
import { useNotification } from "@kyvg/vue3-notification";

const { notify } = useNotification();
let id = 0;

function show(group: string, type = "") {
  const text = `
        This is notification text!
        <br>
        Date: ${new Date()}
      `;
  notify({
    group,
    title: `Test ${type} notification #${id++}`,
    text,
    type,
    data: {
      randomNumber: Math.random()
    }
  });
}
function clean(group: string) {
  notify({ group, clean: true });
}
defineExpose({
  name: "[heartbreaker]Notification"
});
</script>
<style lang="less" scoped>
h2 {
  font-weight: 300;

  a {
    font-size: 12px;
    color: black;
  }
}

button {
  box-sizing: border-box;
  display: inline-block;
  width: 100%;
  padding: 12px;
  font-family: inherit;
  font-size: 12px;
  font-weight: 600;
  color: white;
  text-decoration: none;
  letter-spacing: 1px;
  vertical-align: top;
  cursor: pointer;
  background: #02ccba;
  border: 0;
  border-radius: 3px;
  outline: none;
  box-shadow: none;
  box-shadow: 0 5px 15px 0 rgb(46 61 73 / 10%);
  transition: all 500ms;

  &.success {
    background: #68cd86;
  }

  &.warn {
    background: #ffb648;
  }

  &.error {
    background: #e54d42;
  }

  &:active {
    opacity: 0.8;
  }
}

.sub-button {
  display: inline-block;
  padding: 4px;
  background: #e54d42;
  box-shadow: 0 5px 15px 0 rgb(46 61 73 / 10%);
}

/*
  EXAMPLES
*/
.notification.n-light {
  padding: 10px 20px;
  margin: 10px;
  margin-bottom: 0;
  font-size: 13px;
  color: #495061;
  background: #eaf4fe;
  border: 1px solid #d4e8fd;
  border-radius: 3px;

  .notification-title {
    font-size: 10px;
    color: #2589f3;
    text-transform: uppercase;
    letter-spacing: 1px;
  }
}

.custom-template {
  display: flex;
  flex-direction: row;
  /* stylelint-disable-next-line declaration-block-no-redundant-longhand-properties */
  flex-wrap: nowrap;
  align-items: center;
  justify-content: center;
  margin: 5px;
  margin-bottom: 0;
  font-size: 13px;
  text-align: left;
  background: #e8f9f0;
  border: 2px solid #d0f2e1;

  &,
  & > div {
    box-sizing: border-box;
  }

  .custom-template-icon {
    flex: 0 1 auto;
    padding: 0 10px;
    font-size: 32px;
    color: #15c371;
  }

  .custom-template-close {
    flex: 0 1 auto;
    padding: 0 20px;
    font-size: 16px;
    cursor: pointer;
    opacity: 0.2;

    &:hover {
      opacity: 0.8;
    }
  }

  .custom-template-content {
    flex: 1 0 auto;
    padding: 10px;

    .custom-template-title {
      font-size: 10px;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 1px;
    }
  }
}

.block {
  display: flex;
}

.v-fade-left-enter-active,
.v-fade-left-leave-active,
.v-fade-left-move {
  transition: all 0.5s;
}

.v-fade-left-enter,
.v-fade-left-leave-to {
  opacity: 0;
  transform: translateX(-500px) scale(0.2);
}
</style>
