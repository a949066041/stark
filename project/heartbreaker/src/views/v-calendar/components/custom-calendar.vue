<!--
 * @Author: Rikka
 * @Date: 2022-12-02 00:05:09
 * @LastEditTime: 2022-12-26 19:22:30
 * @LastEditors: Rikka
 * @Description: 
 * @FilePath: \stark\project\heartbreaker\src\views\v-calendar\components\custom-calendar.vue
-->
<template>
  <div class="text-center section mt-8">
    <description>
      <h2 class="h2">Custom Calendars</h2>
      <p class="text-lg font-medium text-gray-600 mb-6">Roll your own calendars using scoped slots</p>
    </description>
    <calendar
      class="custom-calendar max-w-full"
      :masks="masks"
      :attributes="attributesData"
      disable-page-swipe
      is-expanded
    >
      <template #day-content="{ day, attributes }">
        <div class="flex flex-col h-full z-10 overflow-hidden">
          <span class="day-label text-sm text-gray-900">{{ day.day }}</span>
          <div class="flex-grow overflow-y-auto overflow-x-auto">
            <p
              v-for="attr in attributes"
              :key="attr.key"
              class="text-xs leading-tight rounded-sm p-1 mt-0 mb-1"
              :class="attr.customData.class"
            >
              {{ attr.customData.title }}
            </p>
          </div>
        </div>
      </template>
    </calendar>
  </div>
</template>
<script lang="ts">
export default {
  name: "[heartbreaker]CustomCalendar"
};
</script>
<script lang="ts" setup>
import { Description } from "@stark/common-silver";
import { Calendar } from "v-calendar";

const month = new Date().getMonth();
const year = new Date().getFullYear();
const masks = {
  weekdays: "WWW"
};
const attributesData = [
  {
    key: 1,
    customData: {
      title: "Lunch with mom.",
      class: "bg-red-600 text-white"
    },
    dates: new Date(year, month, 1)
  },
  {
    key: 2,
    customData: {
      title: "Take Noah to basketball practice",
      class: "bg-blue-500 text-white"
    },
    dates: new Date(year, month, 2)
  },
  {
    key: 3,
    customData: {
      title: "Noah's basketball game.",
      class: "bg-blue-500 text-white"
    },
    dates: new Date(year, month, 5)
  },
  {
    key: 4,
    customData: {
      title: "Take car to the shop",
      class: "bg-indigo-500 text-white"
    },
    dates: new Date(year, month, 5)
  },
  {
    key: 4,
    customData: {
      title: "Meeting with new client.",
      class: "bg-teal-500 text-white"
    },
    dates: new Date(year, month, 7)
  },
  {
    key: 5,
    customData: {
      title: "Mia's gymnastics practice.",
      class: "bg-pink-500 text-white"
    },
    dates: new Date(year, month, 11)
  },
  {
    key: 6,
    customData: {
      title: "Cookout with friends.",
      class: "bg-orange-500 text-white"
    },
    dates: { months: 5, ordinalWeekdays: { 2: 1 } }
  },
  {
    key: 7,
    customData: {
      title: "Mia's gymnastics recital.",
      class: "bg-pink-500 text-white"
    },
    dates: new Date(year, month, 22)
  },
  {
    key: 8,
    customData: {
      title: "Visit great grandma.",
      class: "bg-red-600 text-white"
    },
    dates: new Date(year, month, 25)
  }
];
defineExpose({
  name: "[heartbreaker]CustomCalendar"
});
</script>
<style lang="less" scoped>
::-webkit-scrollbar {
  width: 0;
}

::-webkit-scrollbar-track {
  display: none;
}

:deep(.custom-calendar.vc-container) {
  --day-border: 1px solid #b8c2cc;
  --day-border-highlight: 1px solid #b8c2cc;
  --day-width: 90px;
  --day-height: 90px;
  --weekday-bg: #f8fafc;
  --weekday-border: 1px solid #eaeaea;

  width: 100%;
  border-radius: 0;

  & .vc-header {
    padding: 10px 0;
    background-color: #f1f5f8;
  }

  & .vc-weeks {
    padding: 0;
  }

  & .vc-weekday {
    padding: 5px 0;
    background-color: var(--weekday-bg);
    border-top: var(--weekday-border);
    border-bottom: var(--weekday-border);
  }

  & .vc-day {
    min-width: var(--day-width);
    height: var(--day-height);
    padding: 0 5px 3px;
    text-align: left;
    background-color: white;

    &.weekday-1,
    &.weekday-7 {
      background-color: #eff8ff;
    }

    &:not(.on-bottom) {
      border-bottom: var(--day-border);

      &.weekday-1 {
        border-bottom: var(--day-border-highlight);
      }
    }

    &:not(.on-right) {
      border-right: var(--day-border);
    }
  }

  & .vc-day-dots {
    margin-bottom: 5px;
  }
}
</style>
