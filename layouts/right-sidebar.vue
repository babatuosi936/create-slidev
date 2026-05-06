<template>
  <div class="flex w-full h-full">

    <!-- 左侧内容 -->
    <div class="flex-1 p-6">
      <slot />
    </div>

    <!-- 右侧目录 -->
    <aside class="w-72 border-l p-5 text-sm leading-6 overflow-auto bg-white/40 backdrop-blur">

      <div class="font-bold mb-4 text-gray-700">
        📚 目录 Overview
      </div>

      <!-- 01 -->
      <div
        class="mb-4 transition-all duration-300 rounded-lg px-3 py-2 cursor-pointer"
        :class="isSection01 ? 'bg-blue-50 shadow-sm opacity-100' : 'opacity-40'"
        @click="nav.go(3)"
      >
        <div :class="['font-semibold', isSection01 ? 'text-blue-700 font-bold' : 'text-blue-500']">
          📌 01 迭代算法基础
        </div>

        <div class="ml-3" :class="isSection01 ? 'text-gray-800' : 'text-gray-400'">
          <span
            v-if="showSection01Item1"
            class="cursor-pointer hover:text-blue-600"
            @click.stop="goTo('section01_item1')"
          >
            • 基本思想：用旧值计算新值<br/>
          </span>

          <span
            v-if="showSection01Item2"
            class="cursor-pointer hover:text-blue-600"
            @click.stop="goTo('section01_item2')"
          >
            • 基本步骤：建模 → 递推 → 终止
          </span>
        </div>
      </div>

      <!-- 02 -->
      <div
        class="mb-4 transition-all duration-300 rounded-lg px-3 py-2 cursor-pointer"
        :class="isSection02 ? 'bg-green-50 shadow-sm opacity-100' : 'opacity-40'"
        @click="nav.go(4)"
      >
        <div :class="['font-semibold', isSection02 ? 'text-green-700 font-bold' : 'text-green-500']">
          🔁 02 递推法(迭代法)
        </div>

        <div class="ml-3" :class="isSection02 ? 'text-gray-800' : 'text-gray-400'">
          <span
            v-if="showSection02Item1"
            class="cursor-pointer hover:text-green-600"
            @click.stop="goTo('section02_item1')"
          >
            • 兔子繁殖问题（经典递推模型）<br/>
          </span>

          <span
            v-if="showSection02Item2"
            class="cursor-pointer hover:text-green-600"
            @click.stop="goTo('section02_item2')"
          >
            • 欧几里得算法（最大公约数）
          </span>
        </div>
      </div>

      <!-- 03 -->
      <div
        class="mb-4 transition-all duration-300 rounded-lg px-3 py-2 cursor-pointer"
        :class="isSection03 ? 'bg-orange-50 shadow-sm opacity-100' : 'opacity-40'"
        @click="nav.go(11)"
      >
        <div :class="['font-semibold', isSection03 ? 'text-orange-700 font-bold' : 'text-orange-500']">
          🔄 03 倒推法
        </div>

        <div class="ml-3" :class="isSection03 ? 'text-gray-800' : 'text-gray-400'">
          <span
            v-if="showSection03Item1"
            class="cursor-pointer hover:text-orange-600"
            @click.stop="goTo('section03_item1')"
          >
            • 猴子吃桃（逆向递推）<br/>
          </span>

          <span
            v-if="showSection03Item2"
            class="cursor-pointer hover:text-orange-600"
            @click.stop="goTo('section03_item2')"
          >
            • 杨辉三角（数组倒推）<br/>
          </span>

          <span
            v-if="showSection03Item3"
            class="cursor-pointer hover:text-orange-600"
            @click.stop="goTo('section03_item3')"
          >
            • 沙漠运油问题（最优策略倒推）
          </span>
        </div>
      </div>

      <!-- 04 -->
      <div
        class="mb-4 transition-all duration-300 rounded-lg px-3 py-2 cursor-pointer"
        :class="isSection04 ? 'bg-purple-50 shadow-sm opacity-100' : 'opacity-40'"
        @click="nav.go(17)"
      >
        <div :class="['font-semibold', isSection04 ? 'text-purple-700 font-bold' : 'text-purple-500']">
          🧮 04 迭代法解方程
        </div>

        <div class="ml-3" :class="isSection04 ? 'text-gray-800' : 'text-gray-400'">
          <span
            v-if="showSection04Item1"
            class="cursor-pointer hover:text-purple-600"
            @click.stop="goTo('section04_item1')"
          >
            • 牛顿迭代法（快速收敛）<br/>
          </span>

          <span
            v-if="showSection04Item2"
            class="cursor-pointer hover:text-purple-600"
            @click.stop="goTo('section04_item2')"
          >
            • 二分法（区间逼近）
          </span>
        </div>
      </div>

    </aside>

  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useNav } from '@slidev/client'

const nav = useNav()
const currentSlide = computed(() => nav.currentSlideNo.value)

/* =========================
   📌 章节高亮（保留你的逻辑）
========================= */
const isSection01 = computed(() => currentSlide.value === 3)
const isSection02 = computed(() => currentSlide.value >= 4 && currentSlide.value <= 10)
const isSection03 = computed(() => currentSlide.value >= 11 && currentSlide.value <= 16)
const isSection04 = computed(() => currentSlide.value >= 17 && currentSlide.value <= 30)

/* =========================
   📌 子项显示控制（保留）
========================= */
const showSection01Item1 = computed(() => currentSlide.value > 1)
const showSection01Item2 = computed(() => currentSlide.value > 1)

const showSection02Item1 = computed(() => currentSlide.value > 3)
const showSection02Item2 = computed(() => currentSlide.value > 8)

const showSection03Item1 = computed(() => currentSlide.value > 10)
const showSection03Item2 = computed(() => currentSlide.value > 12)
const showSection03Item3 = computed(() => currentSlide.value > 14)

const showSection04Item1 = computed(() => currentSlide.value > 19)
const showSection04Item2 = computed(() => currentSlide.value > 21)

/* =========================
   📌 子项跳转系统（新增核心）
========================= */
const subNavMap = {
  section01_item1: 2,
  section01_item2: 3,

  section02_item1: 4,
  section02_item2: 9,

  section03_item1: 11,
  section03_item2: 13,
  section03_item3: 15,

  section04_item1: 20,
  section04_item2: 22,
}

function goTo(key: keyof typeof subNavMap) {
  nav.go(subNavMap[key])
}
</script>