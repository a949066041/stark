<!--
 * @Author: Rikka
 * @Date: 2022-12-01 21:55:51
 * @LastEditTime: 2022-12-23 22:22:49
 * @LastEditors: Rikka
 * @Description: 
 * @FilePath: \stark\project\heartbreaker\src\views\v-calendar\components\simple-calendar.vue
-->
<template>
  <div class="text-center">
    <description>
      <h2 class="text-4xl">Calendar Attributes</h2>
      <h3 class="text-3xl">Show highlights, dots, bars and custom popovers</h3>
    </description>
    <div class="flex flex-col items-center md:flex-row md:justify-around">
      <div class="mb-6">
        <h3 class="text-base semibold text-gray-700 mb-3">Highlights</h3>
        <calendar :attributes="highlights()" ref="cal" />
      </div>
      <div class="mb-6">
        <h3 class="text-base semibold text-gray-700 mb-3">Dots</h3>
        <calendar :attributes="dots()" />
      </div>
    </div>
    <div class="flex flex-col items-center md:flex-row md:justify-around mb-8">
      <div class="mb-6">
        <h3 class="text-base semibold text-gray-700 mb-3">Bars</h3>
        <calendar :attributes="bars()" />
      </div>
      <div class="mb-6">
        <h3 class="text-base semibold text-gray-700 mb-3">Popovers</h3>
        <calendar :attributes="popovers()">
          <template #day-popover="{ day, format, masks, attributes, updateLayout }">
            <div>
              <!--Day Header-->
              <span class="text-xs text-gray-3 font-semibold">{{ format(day.date, masks.dayPopover) }}</span>
              <!--Todo Rows-->
              <popover-row
                v-for="{ key, customData, highlight, dot, bar } in attributes.filter((a: { customData: any; }) => a.customData)"
                :key="key"
                :attribute="{ highlight, dot, bar }"
              >
                <div class="flex flex-no-wrap items-center w-full">
                  <!--Todo content-->
                  <div class="flex-grow text-left">
                    <!--Show textbox when editing todo-->
                    <input
                      v-if="customData.id === editId"
                      class="appearance-none bg-white border px-1 text-black"
                      :style="{ minWidth: '180px' }"
                      v-model="customData.description"
                      @keyup.enter="editId = 0"
                    />
                    <!--Show status/description when not editing-->
                    <span class="flex items-center" v-else>
                      <!--Completed checkbox-->
                      <input type="checkbox" v-model="customData.isComplete" />
                      <!--Description-->
                      <span
                        class="ml-2 cursor-pointer"
                        :class="{ 'line-through': customData.isComplete }"
                        @click="toggleTodoComplete(customData)"
                        >{{ customData.description }}</span
                      >
                    </span>
                  </div>
                  <!--Edit/Done buttons-->
                  <a @click.prevent="toggleTodoEdit(customData, updateLayout)" class="ml-2 cursor-pointer">
                    <!--Edit button-->
                    <svg
                      v-if="editId !== customData.id"
                      class="fill-current text-blue-300"
                      viewBox="0 0 20 20"
                      width="12"
                      height="12"
                    >
                      <path d="M12.3 3.7l4 4L4 20H0v-4L12.3 3.7zm1.4-1.4L16 0l4 4-2.3 2.3-4-4z" />
                    </svg>
                    <!--Done button-->
                    <svg v-else class="fill-current text-green-300" viewBox="0 0 20 20" width="12" height="12">
                      <path d="M0 11l2-2 5 5L18 3l2 2L7 18z" />
                    </svg>
                  </a>
                  <!--Delete button-->
                  <a
                    @click.prevent="deleteTodo(customData, updateLayout)"
                    v-if="!editId || editId !== customData.id"
                    class="ml-1 cursor-pointer"
                  >
                    <svg class="fill-current text-red-300" viewBox="0 0 20 20" width="12" height="12">
                      <path
                        d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z"
                      />
                    </svg>
                  </a>
                </div>
              </popover-row>
              <!--Add Todo Row-->
              <a
                @click="addTodo(day)"
                class="block text-center text-green-200 hover:text-green-300 font-semibold cursor-pointer px-1 mt-1"
                >+ Add Todo</a
              >
            </div>
          </template>
        </calendar>
      </div>
    </div>
    <h2>Week Numbers</h2>
    <div class="flex flex-col items-center md:flex-row md:justify-around mb-8">
      <div class="mb-6">
        <h3 class="text-base semibold text-gray-700 mb-3">Default Left Inside</h3>
        <div class="mb-6">
          <calendar :from-page="{ month: 1, year: 2021 }" show-weeknumbers />
        </div>
      </div>
      <div class="mb-6">
        <h3 class="text-base semibold text-gray-700 mb-3">ISO, Right and Outside Options</h3>
        <div class="mb-6">
          <calendar :from-page="{ month: 1, year: 2021 }" show-iso-weeknumbers="right-outside" />
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
export default {
  name: "[heartbreaker]SimpleCalendar"
};
</script>
<script lang="ts" setup>
import { Description } from "@stark/common-silver";
import { Calendar } from "v-calendar";
import { nextTick, ref } from "vue";

import { Locale } from "../utils/locale";
import { PopoverRow } from "./popover-row";

interface TodoItem {
  id: number;
  description: string;
  isComplete: boolean;
  dates: Date;
  color: string;
}

const locale = new Locale();
const { month, year } = locale.getThisMonthComps();
const pageForThisMonth = { month, year };
const pageForNextMonth = locale.getNextMonthComps(month, year);
const nextMonthYear = pageForNextMonth.year;
const nextMonth = pageForNextMonth.month - 1;
const thisMonthYear = pageForThisMonth.year;
const thisMonth = pageForThisMonth.month - 1;

const todos = ref<TodoItem[]>([
  {
    id: 1,
    description: "Take Noah to basketball practice.",
    isComplete: false,
    dates: new Date(thisMonthYear, thisMonth, 1),
    color: "blue"
  },
  {
    id: 2,
    description: "Get some milks.",
    isComplete: false,
    dates: new Date(thisMonthYear, thisMonth, 5),
    color: "red"
  },
  {
    id: 3,
    description: "Pay the utility bill.",
    isComplete: false,
    dates: new Date(thisMonthYear, thisMonth, 19),
    color: "orange"
  },
  {
    id: 4,
    description: "Pick up clothes from the cleaners.",
    isComplete: false,
    dates: new Date(thisMonthYear, thisMonth, 19),
    color: "purple"
  },
  {
    id: 5,
    description: "Lunch with Leo.",
    isComplete: false,
    dates: new Date(thisMonthYear, thisMonth, 22),
    color: "green"
  }
]);
const editId = ref(0);
const incId = ref(5);

const highlights = () => {
  return [
    {
      highlight: "red",
      contentStyle: {
        color: "white"
      },
      dates: [
        // Use single dates
        new Date(nextMonthYear, nextMonth, 6),
        new Date(nextMonthYear, nextMonth, 23),
        // ...or date ranges
        {
          start: new Date(thisMonthYear, thisMonth, 2),
          end: new Date(thisMonthYear, thisMonth, 4)
        },
        // ...or complex date patterns
        {
          start: new Date(thisMonthYear, thisMonth, 1),
          ordinalWeekdays: { [-1]: 7 } // Last Saturday of the month
        }
      ]
    },
    {
      highlight: "blue",
      contentStyle: {
        color: "white"
      },
      dates: [
        new Date(thisMonthYear, thisMonth, 1),
        {
          start: new Date(thisMonthYear, thisMonth, 10),
          end: new Date(thisMonthYear, thisMonth, 12)
        },
        {
          start: new Date(nextMonthYear, nextMonth, 22),
          end: new Date(nextMonthYear, nextMonth, 26)
        }
      ]
    },
    {
      highlight: "teal",
      contentStyle: {
        color: "white"
      },
      dates: [
        new Date(thisMonthYear, thisMonth, 14),
        {
          start: new Date(thisMonthYear, thisMonth, 24),
          end: new Date(thisMonthYear, thisMonth, 25)
        },
        new Date(thisMonthYear, thisMonth, 28),
        new Date(nextMonthYear, nextMonth, 4),
        {
          start: new Date(nextMonthYear, nextMonth, 16),
          end: new Date(nextMonthYear, nextMonth, 17)
        }
      ]
    }
  ];
};
const dots = () => {
  return [
    {
      dot: "red",
      dates: [
        new Date(thisMonthYear, thisMonth, 1),
        new Date(thisMonthYear, thisMonth, 10),
        new Date(thisMonthYear, thisMonth, 22),
        new Date(nextMonthYear, nextMonth, 6),
        new Date(nextMonthYear, nextMonth, 16)
      ]
    },
    {
      dot: "teal",
      dates: [
        new Date(thisMonthYear, thisMonth, 4),
        new Date(thisMonthYear, thisMonth, 10),
        new Date(thisMonthYear, thisMonth, 15),
        new Date(nextMonthYear, nextMonth, 1),
        new Date(nextMonthYear, nextMonth, 12),
        {
          start: new Date(nextMonthYear, nextMonth, 20),
          end: new Date(nextMonthYear, nextMonth, 25)
        }
      ]
    },
    {
      dot: "blue",
      dates: [
        new Date(thisMonthYear, thisMonth, 12),
        new Date(thisMonthYear, thisMonth, 26),
        new Date(thisMonthYear, thisMonth, 15),
        new Date(nextMonthYear, nextMonth, 9),
        new Date(nextMonthYear, nextMonth, 5),
        new Date(nextMonthYear, nextMonth, 6),
        new Date(nextMonthYear, nextMonth, 20),
        new Date(nextMonthYear, nextMonth, 25)
      ]
    }
  ];
};
const bars = () => {
  return [
    {
      bar: "red",
      dates: [
        new Date(thisMonthYear, thisMonth, 1),
        new Date(thisMonthYear, thisMonth, 10),
        new Date(thisMonthYear, thisMonth, 22),
        new Date(nextMonthYear, nextMonth, 6),
        new Date(nextMonthYear, nextMonth, 16)
      ]
    },
    {
      bar: "teal",
      dates: [
        new Date(thisMonthYear, thisMonth, 4),
        new Date(thisMonthYear, thisMonth, 10),
        new Date(thisMonthYear, thisMonth, 15),
        new Date(nextMonthYear, nextMonth, 1),
        new Date(nextMonthYear, nextMonth, 12),
        {
          start: new Date(nextMonthYear, nextMonth, 20),
          end: new Date(nextMonthYear, nextMonth, 25)
        }
      ]
    },
    {
      bar: "blue",
      dates: [
        new Date(thisMonthYear, thisMonth, 12),
        new Date(thisMonthYear, thisMonth, 26),
        new Date(thisMonthYear, thisMonth, 15),
        new Date(nextMonthYear, nextMonth, 9),
        new Date(nextMonthYear, nextMonth, 5),
        new Date(nextMonthYear, nextMonth, 6),
        new Date(nextMonthYear, nextMonth, 20),
        new Date(nextMonthYear, nextMonth, 25)
      ]
    }
  ];
};
const popovers = () => {
  return [
    // Todo attributes
    ...todos.value.map((todo) => ({
      key: todo.id,
      dates: todo.dates,
      customData: todo,
      order: todo.id,
      dot: {
        color: todo.color,
        class: todo.isComplete ? "opacity-25" : ""
      },
      popover: {
        visibility: "click"
      }
    })),
    // 'Add todo' attribute
    {
      key: "add-todo",
      dates: {},
      popover: true
    }
  ];
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function addTodo(day: any) {
  editId.value = ++incId.value;
  todos.value = [
    ...todos.value,
    {
      id: editId.value,
      description: "New todo",
      isComplete: false,
      dates: day.date,
      color: "red"
    }
  ];
}
function toggleTodoComplete(todo: TodoItem) {
  todo.isComplete = !todo.isComplete;
}
function toggleTodoEdit(todo: TodoItem, updateLayout: () => void) {
  editId.value = editId.value === todo.id ? 0 : todo.id;
  nextTick(() => updateLayout());
}
function deleteTodo(todo: TodoItem, updateLayout: () => void) {
  todos.value = todos.value.filter((t) => t !== todo);
}

defineExpose({
  name: "[heartbreaker]SimpleCalendar"
});
</script>
<style lang="less" scoped></style>
