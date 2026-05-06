---
theme: seriph
background: https://cover.sli.dev
title: 迭代算法
info: |
  ## 算法设计与分析

  第4章 基本算法策略  
  4.1 迭代算法  

  作者：你的名字  
  日期：2026
class: text-center
transition: slide-left
---


<!-- ✨ 首页 效果 ✨ -->
<!-- ✨ 首页 效果 ✨ -->
<!-- ✨ 首页 效果 ✨ -->
<!-- ✨ 首页 效果 ✨ -->
<!-- ✨ 首页 效果 ✨ -->

# 迭代算法

算法设计与分析 · 第4章

<div class="mt-6 text-lg opacity-80">
  Iterative Algorithm / Recursion Thinking
</div>

<div @click="$slidev.nav.next" class="mt-12 py-2 px-4 inline-block rounded hover:bg-white/10 cursor-pointer">
  ▶  Click to Start
</div>

<div class="abs-br m-6 text-sm opacity-70">
  Slidev Presentation · Powered by Markdown
</div>

<!-- ✨ 目录 -->
<!-- ✨ 目录 -->
<!-- ✨ 目录 -->
<!-- ✨ 目录 -->
<!-- ✨ 目录 -->

---
transition: fade-out
---
# 目录 Overview

本章围绕"迭代算法思想"展开，主要包含以下四个部分：

<div class="grid grid-cols-2 gap-6 mt-6">
  <div class="p-4 bg-white/10 rounded-lg">
    <div class="font-semibold text-blue-500 text-xl"> 📌 01 迭代算法基础 </div>
    <div class="text-lg mt-2">
      - 基本思想<br>
      - 基本步骤
    </div>
  </div>
  
  <div class="p-4 bg-white/10 rounded-lg">
    <div class="font-semibold text-green-500 text-xl"> 🔁 02 递推法 </div>
    <div class="text-lg mt-2">
      - 兔子繁殖问题<br>
      - 欧几里得算法
    </div>
  </div>
  
  <div class="p-4 bg-white/10 rounded-lg">
    <div class="font-semibold text-orange-500 text-xl"> 🔄 03 倒推法 </div>
    <div class="text-lg mt-2">
      - 猴子吃桃<br>
      - 杨辉三角<br>
      - 沙漠运油问题
    </div>
  </div>
  
  <div class="p-4 bg-white/10 rounded-lg">
    <div class="font-semibold text-purple-500 text-xl"> 🧮 04 迭代法解方程 </div>
    <div class="text-lg mt-2">
      - 牛顿迭代法<br>
      - 二分法
    </div>
  </div>
</div>

<br>

<div class="opacity-60 text-base">
Chapter 4 · Algorithm Strategy Overview
</div>

<!-- ✨ 4.1 迭代算法基础 -->
<!-- ✨ 4.1 迭代算法基础 -->
<!-- ✨ 4.1 迭代算法基础 -->
<!-- ✨ 4.1 迭代算法基础 -->
<!-- ✨ 4.1 迭代算法基础 -->

---
layout: right-sidebar
transition: fade-out
class: 'pr-4 text-xs leading-relaxed'
---
# <div class="mt-1 text-lg opacity-80">4.1 迭代算法</div>

## 📖 什么是迭代算法？
<div v-click class="bg-gradient-to-br from-blue-50 to-blue-100 rounded-3xl p-3 mt-2 mb-3 text-xs border-l-6 border-blue-500">
迭代算法是一种<span class="font-bold text-blue-600">用旧值不断计算新值</span>的计算方法，常用于数值计算与逼近问题。
</div>

## ✨ 基本思想
<div v-click class="bg-gradient-to-br from-blue-100 to-blue-200 rounded-3xl p-3 mt-2 mb-3 text-xs border-l-6 border-blue-600">
<ul class="list-disc list-inside space-y-1 text-gray-700">
  <li>用"已知的旧值"不断推出"新的结果"</li>
  <li>通过重复计算逐步逼近目标值</li>
  <li>本质：一种"逐步改进"的计算过程</li>
</ul>
</div>

## 🔄 常见迭代策略
<div v-click class="bg-gradient-to-br from-blue-200 to-blue-250 to-blue-200 rounded-3xl p-3 mt-2 mb-3 text-xs border-l-6 border-blue-700">
<ul class="list-disc list-inside space-y-1 text-gray-700">
  <li>累加（Σ 型问题）</li>
  <li>累乘（阶乘 / 指数增长）</li>
</ul>
</div>

## 🎯 基本步骤
<div v-click class="bg-gradient-to-br from-blue-200 to-blue-100 rounded-3xl p-3 mt-2 mb-3 text-xs border-l-6 border-blue-800">
<ol class="list-decimal list-inside space-y-1 text-gray-700">
  <li class="font-semibold">确定迭代模型</li>
  <li class="font-semibold">建立迭代关系式</li>
  <li class="font-semibold">控制迭代过程</li>
</ol>
<div class="mt-1 text-xxs text-gray-700 pl-4">
  <div>• 固定次数结束</div>
  <div>• 满足特定条件结束（精度 / 收敛）</div>
</div>
</div>

<div v-click class="mt-2 text-xxs text-gray-600 italic bg-slate-100 p-2 rounded-3xl border border-slate-200">
💡 核心思想：从初始值出发，不断逼近最终结果
</div>


<!-- ✨ 4.2 递推法 -->
<!-- ✨ 4.2 递推法 -->
<!-- ✨ 4.2 递推法 -->
<!-- ✨ 4.2 递推法 -->
<!-- ✨ 4.2 递推法 -->


---
layout: right-sidebar
transition: fade-out
class: 'pr-4 text-xs leading-relaxed'
---

# <div class="mt-1 text-lg opacity-80">4.2.1 递推法</div>

## 🐰 兔子繁殖问题（斐波那契数列）

<div v-click class="bg-gradient-to-br from-green-50 to-green-100 rounded-3xl p-3 mt-2 mb-3 text-xs border-l-6 border-green-500">
一对兔子从出生后第三个月开始，每月生一对小兔子。小兔子到第三个月又开始生下一代小兔子。假若兔子只生不死，一月份抱来一对刚出生的小兔子，问一年中每个月各有多少只兔子。
</div>

### 📊 数学模型
<div v-click class="bg-gradient-to-br from-green-100 to-green-200 rounded-3xl p-3 mt-2 mb-3 text-xs border-l-6 border-green-600">
<ul class="list-disc list-inside space-y-1 text-gray-700">
  <li>初始条件：y₁ = y₂ = 1</li>
  <li>递推关系：yₙ = yₙ₋₁ + yₙ₋₂ (n ≥ 3)</li>
</ul>
</div>

### 🔧 算法实现思路
<div v-click class="bg-gradient-to-br from-green-200 to-green-250 to-green-200 rounded-3xl p-3 mt-2 mb-3 text-xs border-l-6 border-green-700">
<ul class="list-disc list-inside space-y-1 text-gray-700">
  <li>数据结构选择：</li>
  <li>&nbsp;&nbsp;&nbsp;&nbsp;数组：存储所有月份的兔子数量</li>
  <li>&nbsp;&nbsp;&nbsp;&nbsp;变量：存储当前和前两个月的数量</li>
</ul>
</div>

### 📈 月度增长示例
<div v-click class="bg-gradient-to-br from-green-200 to-green-100 rounded-3xl p-3 mt-2 mb-3 text-xs border-l-6 border-green-800">
<table class="w-full text-center table-fixed">
  <colgroup>
    <col style="width: 15%;">
    <col style="width: 15%;">
    <col style="width: 15%;">
    <col style="width: 15%;">
    <col style="width: 15%;">
    <col style="width: 15%;">
  </colgroup>
  <tr>
    <th>月份</th>
    <th>1月</th>
    <th>2月</th>
    <th>3月</th>
    <th>4月</th>
    <th>5月</th>
  </tr>
  <tr>
    <th>数量</th>
    <td>1</td>
    <td>1</td>
    <td>1+1=2</td>
    <td>2+1=3</td>
    <td>3+2=5</td>
  </tr>
</table>
</div>

<div v-click class="mt-2 text-xxs text-gray-600 italic bg-slate-100 p-2 rounded-3xl border border-slate-200">
💡 核心思想：利用前两个月的数据推导出当月数据，体现"用旧值计算新值"的迭代思想
</div>


<!-- ✨ 算法一 -->
<!-- ✨ 算法一 -->
<!-- ✨ 算法一 -->
<!-- ✨ 算法一 -->
<!-- ✨ 算法一 -->

---
layout: right-sidebar
class: 'text-xs'
transition: fade-out
---

# <div class="mt-1 text-lg text-blue-500 opacity-80">斐波那契三种实现(可运行 + 可编辑 + 动画演示)</div>

<div class="overflow-x-auto flex justify-center">
  <div class="min-w-[200px] grid grid-cols-3 gap-1">
    <div class="rounded-3xl bg-slate-950/90 p-2 flex flex-col items-center">
      <div class="text-sky-300 text-xs font-semibold mb-0.5 text-center">算法1：经典迭代</div>
      <div class="text-slate-300 text-xs mb-1 text-center">最常见的 a,b,c 迭代更新方式。</div>
    </div>
    <div class="rounded-3xl bg-slate-950/90 p-2 flex flex-col items-center">
      <div class="text-emerald-300 text-xs font-semibold mb-0.5 text-center">算法2：数组构造</div>
      <div class="text-slate-300 text-xs mb-1 text-center">适合可视化展示的数组方式。</div>
    </div>
    <div class="rounded-3xl bg-slate-950/90 p-2 flex flex-col items-center">
      <div class="text-violet-300 text-xs font-semibold mb-0.5 text-center">算法3：解构赋值</div>
      <div class="text-slate-300 text-xs mb-1 text-center">最简洁、最紧凑的写法。</div>
    </div>
  </div>
</div>

<div class="flex items-center justify-between gap-2 mt-1">
  <div class="font-semibold text-base opacity-80 whitespace-nowrap">算法1：经典迭代</div>
  <div class="flex gap-1">
    <button 
      @click="toggleCodeBox('fib1')" 
      class="px-2 py-0.5 bg-slate-700 text-slate-200 rounded-lg hover:bg-slate-600 transition-colors text-xs whitespace-nowrap"
    >
      <span>📋 查看代码</span>
      <span v-if="codeBoxes.fib1" class="text-green-400">▼</span>
      <span v-else class="text-blue-400">▶</span>
    </button>
    <button 
      @click="startAnimation" 
      v-if="!showAnimation" 
      class="px-2 py-0.5 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors text-xs whitespace-nowrap"
    >
      🎬 开始动画演示
    </button>
    <button 
      @click="stopAnimation" 
      v-if="showAnimation" 
      class="px-2 py-0.5 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors text-xs whitespace-nowrap"
    >
      ⏹️ 停止演示
    </button>
  </div>
</div>


<div v-if="showAnimation" key="fibonacci-animation" class="mt-2 transition-all duration-500">
  <div class="bg-gray-800 p-3 rounded-lg border-2 border-blue-500">
    <h3 class="text-white font-semibold text-sm mb-2">
      📊 Fibonacci 动画演示（a + b = c）
    </h3>
    <!-- 数值展示 -->
    <div class="flex items-center justify-center gap-2 mb-2 text-xs text-white font-mono">
      <span class="px-2 py-1 bg-blue-600 rounded">a = {{currentA}}</span>
      <span>+</span>
      <span class="px-2 py-1 bg-green-600 rounded">b = {{currentB}}</span>
      <span>=</span>
      <span class="px-2 py-1 bg-purple-600 rounded">c = {{currentC}}</span>
    </div>
    <!-- 进度条可视化（关键改动） -->
    <div class="space-y-1 text-xs text-white">
      <div>
        <div class="flex justify-between">
          <span>a</span>
          <span>{{currentA}}</span>
        </div>
        <div class="h-2 bg-gray-700 rounded overflow-hidden">
          <div class="h-full bg-blue-500 transition-all duration-500"
               :style="{width: getBarWidth(currentA)}"></div>
        </div>
      </div>
      <div>
        <div class="flex justify-between">
          <span>b</span>
          <span>{{currentB}}</span>
        </div>
        <div class="h-2 bg-gray-700 rounded overflow-hidden">
          <div class="h-full bg-green-500 transition-all duration-500"
               :style="{width: getBarWidth(currentB)}"></div>
        </div>
      </div>
      <div>
        <div class="flex justify-between">
          <span>c = a + b</span>
          <span>{{currentC}}</span>
        </div>
        <div class="h-2 bg-gray-700 rounded overflow-hidden">
          <div class="h-full bg-purple-500 transition-all duration-500"
               :style="{width: getBarWidth(currentC)}"></div>
        </div>
      </div>
    </div>
    <div class="text-center text-gray-300 text-xs mt-2">
      Step {{step}} / {{totalSteps}}
    </div>
  </div>
</div>

<div v-if="codeBoxes.fib1" class="mt-4 p-4 bg-slate-900/90 rounded-xl border border-slate-600">
<CodeRunner 
  :code="fib1Code"
  language="c"
  :height="400"
  :output-height="60"
/>
</div>

<script setup>
import { ref } from 'vue'

const fib1Code = `#include <stdio.h>
int main() {
  int n = 10;
  int seq[10] = {1, 1};
  int a = 1, b = 1;
  for (int i = 2; i < n; i++) {
      int c = a + b;
      seq[i] = c;
      a = b;
      b = c;
  }
  printf("算法1: ");
  for (int i = 0; i < n; i++) {
      printf("%d ", seq[i]);
  }
  printf("\\n");
  return 0;
}`

const getBarWidth = (value) => {
  const max = 55 // 你最大 Fibonacci 值
  return Math.min((value / max) * 100, 100) + '%'
}

// 控制动画状态
const showAnimation = ref(false)
const currentA = ref(1)
const currentB = ref(1)
const currentC = ref(0)
const step = ref(0)
const totalSteps = ref(8)
const progress = ref(0)
let animationInterval = null

// 控制代码框显示状态
const codeBoxes = ref({
  fib1: false,
  fib2: false,
  fib3: false
})

// 切换代码框显示
const toggleCodeBox = (key) => {
  // 如果动画正在播放，先停止动画
  if (showAnimation.value) {
    stopAnimation()
  }
  
  // 切换指定的代码框
  codeBoxes.value[key] = !codeBoxes.value[key]
}


// 动画控制函数
const startAnimation = () => {
  // 如果已经有动画在运行，先停止它
  stopAnimation()
  
  // 关闭所有代码框
  codeBoxes.value.fib1 = false
  codeBoxes.value.fib2 = false
  codeBoxes.value.fib3 = false
  
  showAnimation.value = true
  step.value = 0
  progress.value = 0
  currentA.value = 1
  currentB.value = 1
  currentC.value = 0
  
  // 模拟斐波那契计算过程
  const steps = [
    { a: 1, b: 1, c: 2 },  // 第3项
    { a: 1, b: 2, c: 3 },  // 第4项
    { a: 2, b: 3, c: 5 },  // 第5项
    { a: 3, b: 5, c: 8 },  // 第6项
    { a: 5, b: 8, c: 13 }, // 第7项
    { a: 8, b: 13, c: 21 },// 第8项
    { a: 13, b: 21, c: 34 },//第9项
    { a: 21, b: 34, c: 55 } //第10项
  ]
  
  let currentStep = 0
  animationInterval = setInterval(() => {
    if (currentStep < steps.length) {
      // 使用批量更新避免不必要的中间渲染
      currentA.value = steps[currentStep].a
      currentB.value = steps[currentStep].b
      currentC.value = steps[currentStep].c
      step.value = currentStep + 1
      progress.value = ((currentStep + 1) / steps.length) * 100
      
      currentStep++
    } else {
      // 动画完成后自动停止
      stopAnimation()
    }
  }, 1500)
}


const stopAnimation = () => {
  if (animationInterval) {
    clearInterval(animationInterval)
    animationInterval = null
  }
  showAnimation.value = false
  // 重置所有动画状态
  step.value = 0
  progress.value = 0
  currentA.value = 1
  currentB.value = 1
  currentC.value = 0
}
</script>


<!-- ✨ 算法二 -->
<!-- ✨ 算法二 -->
<!-- ✨ 算法二 -->
<!-- ✨ 算法二 -->
<!-- ✨ 算法二 -->

---
layout: right-sidebar
class: 'text-xs'
transition: fade-out
---

# <div class="mt-1 text-lg text-blue-500 opacity-80">斐波那契三种实现(可运行 + 可编辑 + 动画演示)</div>

<div class="overflow-x-auto flex justify-center">
  <div class="min-w-[200px] grid grid-cols-3 gap-1">
    <div class="rounded-3xl bg-slate-950/90 p-2 flex flex-col items-center">
      <div class="text-sky-300 text-xs font-semibold mb-0.5 text-center">算法1：经典迭代</div>
      <div class="text-slate-300 text-xs mb-1 text-center">最常见的 a,b,c 迭代更新方式。</div>
    </div>
    <div class="rounded-3xl bg-slate-950/90 p-2 flex flex-col items-center">
      <div class="text-emerald-300 text-xs font-semibold mb-0.5 text-center">算法2：数组构造</div>
      <div class="text-slate-300 text-xs mb-1 text-center">适合可视化展示的数组方式。</div>
    </div>
    <div class="rounded-3xl bg-slate-950/90 p-2 flex flex-col items-center">
      <div class="text-violet-300 text-xs font-semibold mb-0.5 text-center">算法3：解构赋值</div>
      <div class="text-slate-300 text-xs mb-1 text-center">最简洁、最紧凑的写法。</div>
    </div>
  </div>
</div>

<div class="flex items-center justify-between gap-2 mt-1">
  <div class="font-semibold text-base opacity-80 whitespace-nowrap">算法2：数组构造</div>
  <div class="flex gap-1">
    <button 
      @click="toggleCodeBox('fib1')" 
      class="px-2 py-0.5 bg-slate-700 text-slate-200 rounded-lg hover:bg-slate-600 transition-colors text-xs whitespace-nowrap"
    >
      <span>📋 查看代码</span>
      <span v-if="codeBoxes.fib1" class="text-green-400">▼</span>
      <span v-else class="text-blue-400">▶</span>
    </button>
    <button 
      @click="startAnimation2" 
      v-if="!showAnimation2" 
      class="px-2 py-0.5 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors text-xs whitespace-nowrap"
    >
      🎬 开始动画演示
    </button>
    <button 
      @click="stopAnimation2" 
      v-if="showAnimation2" 
      class="px-2 py-0.5 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors text-xs whitespace-nowrap"
    >
      ⏹️ 停止演示
    </button>
  </div>
</div>

<div v-if="showAnimation2" key="fibonacci-animation-2" class="mt-2 transition-all duration-500">
  <div class="bg-gray-800 p-3 rounded-lg border-2 border-emerald-500">
    <h3 class="text-white font-semibold text-sm mb-2">
      📊 Fibonacci 动画演示（数组构造）
    </h3>
    <!-- 数值展示 -->
    <div class="flex items-center justify-center gap-2 mb-2 text-xs text-white font-mono">
      <span class="px-2 py-1 bg-emerald-600 rounded">seq[0] = {{seq[0]}}</span>
      <span>+</span>
      <span class="px-2 py-1 bg-emerald-600 rounded">seq[1] = {{seq[1]}}</span>
      <span>=</span>
      <span class="px-2 py-1 bg-emerald-600 rounded">seq[2] = {{seq[2]}}</span>
    </div>
    <!-- 进度条 -->
    <div class="space-y-1 text-xs text-white">
      <!-- seq -->
      <div v-for="(item, i) in seq" :key="i" class="transition-opacity duration-500">
        <div class="flex justify-between">
          <span>seq[{{i}}]</span>
          <span>{{ item }}</span>
        </div>
        <div class="h-2 bg-gray-700 rounded overflow-hidden">
          <div class="h-full bg-purple-500 transition-all duration-500"
               :style="{width: getBarWidth(item)}"></div>
        </div>
      </div>
    </div>
    <div class="text-center text-gray-300 text-xs mt-2">
      Step {{step2}} / {{totalSteps2}}
    </div>
  </div>
</div>

<div v-if="codeBoxes.fib1" class="mt-4 p-4 bg-slate-900/90 rounded-xl border border-slate-600">
<CodeRunner 
  :code="fib2Code"
  language="c"
  :height="400"
  :output-height="60"
/>
</div>

<script setup>
import { ref } from 'vue'

const getBarWidth = (value) => {
  const max = 55
  return Math.min((value / max) * 100, 100) + '%'
}

// 状态
const showAnimation2 = ref(false)
const seq = ref([1, 1])
const step2 = ref(0)

// ❗ 修复点：这里改成普通变量
const totalSteps2 = 8

const currentValues = ref({
  a: 1,
  b: 1,
  c: 0
})

// 步骤
const steps2 = [
  { a: 1, b: 1, c: 2 },
  { a: 1, b: 2, c: 3 },
  { a: 2, b: 3, c: 5 },
  { a: 3, b: 5, c: 8 },
  { a: 5, b: 8, c: 13 },
  { a: 8, b: 13, c: 21 },
  { a: 13, b: 21, c: 34 },
  { a: 21, b: 34, c: 55 }
]

let animationInterval2 = null

const startAnimation2 = () => {
  stopAnimation2()
  
  showAnimation2.value = true
  step2.value = 0
  seq.value = [1, 1]
  currentValues.value = { a: 1, b: 1, c: 0 }

  let currentStep = 0

  animationInterval2 = setInterval(() => {
    if (currentStep < steps2.length) {
      const s = steps2[currentStep]
      
      currentValues.value.a = s.a
      currentValues.value.b = s.b
      currentValues.value.c = s.c

      seq.value.push(s.c)

      step2.value = currentStep + 1
      currentStep++
    } else {
      stopAnimation2()
    }
  }, 1500)
}

const stopAnimation2 = () => {
  if (animationInterval2) {
    clearInterval(animationInterval2)
    animationInterval2 = null
  }
  showAnimation2.value = false
  step2.value = 0
  seq.value = [1, 1]
  currentValues.value = { a: 1, b: 1, c: 0 }
}

const codeBoxes = ref({
  fib1: false
})

const toggleCodeBox = (key) => {
  codeBoxes.value[key] = !codeBoxes.value[key]
}

const fib2Code = `#include <stdio.h>
int main() {
  int n = 10;
  int seq[10] = {1, 1};

  for (int i = 2; i < n; i++) {
    seq[i] = seq[i-1] + seq[i-2];
  }

  printf("算法2: ");
  for (int i = 0; i < n; i++) {
    printf("%d ", seq[i]);
  }

  return 0;
}`

</script>


<!-- ✨ 算法三 -->
<!-- ✨ 算法三 -->
<!-- ✨ 算法三 -->
<!-- ✨ 算法三 -->
<!-- ✨ 算法三 -->

---
layout: right-sidebar
class: 'text-xs'
transition: fade-out
---

# <div class="mt-1 text-lg text-blue-500 opacity-80">斐波那契三种实现(可运行 + 可编辑 + 动画演示)</div>

<div class="overflow-x-auto flex justify-center">
  <div class="min-w-[200px] grid grid-cols-3 gap-1">
    <div class="rounded-3xl bg-slate-950/90 p-2 flex flex-col items-center">
      <div class="text-sky-300 text-xs font-semibold mb-0.5 text-center">算法1：经典迭代</div>
      <div class="text-slate-300 text-xs mb-1 text-center">最常见的 a,b,c 迭代更新方式。</div>
    </div>
    <div class="rounded-3xl bg-slate-950/90 p-2 flex flex-col items-center">
      <div class="text-emerald-300 text-xs font-semibold mb-0.5 text-center">算法2：数组构造</div>
      <div class="text-slate-300 text-xs mb-1 text-center">适合可视化展示的数组方式。</div>
    </div>
    <div class="rounded-3xl bg-slate-950/90 p-2 flex flex-col items-center">
      <div class="text-violet-300 text-xs font-semibold mb-0.5 text-center">算法3：解构赋值</div>
      <div class="text-slate-300 text-xs mb-1 text-center">最简洁、最紧凑的写法。</div>
    </div>
  </div>
</div>

<div class="flex items-center justify-between gap-2 mt-1">
  <div class="font-semibold text-base opacity-80 whitespace-nowrap">算法3：解构赋值</div>
  <div class="flex gap-1">
    <button 
      @click="toggleCodeBox('fib3')" 
      class="px-2 py-0.5 bg-slate-700 text-slate-200 rounded-lg hover:bg-slate-600 transition-colors text-xs whitespace-nowrap"
    >
      <span>📋 查看代码(c语言)</span>
      <span v-if="codeBoxes.fib3" class="text-green-400">▼</span>
      <span v-else class="text-blue-400">▶</span>
    </button>
    <button 
      @click="startAnimation3" 
      v-if="!showAnimation3" 
      class="px-2 py-0.5 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors text-xs whitespace-nowrap"
    >
      🎬 开始动画演示
    </button>
    <button 
      @click="stopAnimation3" 
      v-if="showAnimation3" 
      class="px-2 py-0.5 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors text-xs whitespace-nowrap"
    >
      ⏹️ 停止演示
    </button>
  </div>
</div>

<!-- ✅ 算法三动画演示 -->
<div v-if="showAnimation3" key="fibonacci-animation-3" class="mt-2 transition-all duration-500">
  <div class="bg-gray-800 p-3 rounded-lg border-2 border-violet-500">
    <h3 class="text-white font-semibold text-sm mb-2">
      📊 Fibonacci 动画演示（解构赋值）
    </h3>
    <!-- 数值展示 -->
    <div class="flex items-center justify-center gap-2 mb-2 text-xs text-white font-mono">
      <span class="px-2 py-1 bg-violet-600 rounded">a = {{currentA3}}</span>
      <span>,</span>
      <span class="px-2 py-1 bg-violet-600 rounded">b = {{currentB3}}</span>
    </div>
    <!-- 当前计算步骤展示 -->
    <div class="mb-2 text-xs text-white font-mono text-center bg-gray-700 p-2 rounded">
      Step {{step3}}: {{currentA3}} + {{currentB3}} = {{currentA3 + currentB3}}
    </div>
    <!-- 历史步骤记录 -->
    <div class="text-xs text-white bg-gray-700 p-2 rounded max-h-64 overflow-y-auto">
      <div v-for="(record, index) in historyRecords3" :key="index" class="py-1 border-b border-gray-600 last:border-0">
        {{record}}
      </div>
    </div>
    <!-- 实时输出结果 - 每步更新的序列 -->
    <div class="mt-2 text-xs text-green-400 font-mono bg-gray-900 p-2 rounded text-center">
      输出序列: {{outputSequence3.join(' ')}}
    </div>
    <div class="text-center text-gray-300 text-xs mt-2">
      Step {{step3}} / {{totalSteps3}}
    </div>
  </div>
</div>

<div v-if="codeBoxes.fib3" class="mt-4 p-4 bg-slate-900/90 rounded-xl border border-slate-600">
<CodeRunner 
  :code="fib3Code"
  language="c"
  :height="400"
  :output-height="60"
/>
</div>

<script setup>
import { ref } from 'vue'

// 共享函数：计算进度条宽度
const getBarWidth = (value) => {
  const max = 55 // 最大斐波那契值
  return Math.min((value / max) * 100, 100) + '%'
}

// ✅ 算法3 相关状态
const showAnimation3 = ref(false)
const currentA3 = ref(1)
const currentB3 = ref(1)
const step3 = ref(0)
const totalSteps3 = ref(8)
const historyRecords3 = ref([]) // 记录每一步的计算过程
const outputSequence3 = ref([1, 1]) // 记录输出序列，初始为 [1, 1]

// 控制代码框显示状态
const codeBoxes = ref({
  fib1: false,
  fib2: false,
  fib3: false
})

// 切换代码框显示
const toggleCodeBox = (key) => {
  // 如果动画正在播放，先停止动画
  if (showAnimation3.value) {
    stopAnimation3()
  }
  
  // 切换指定的代码框
  codeBoxes.value[key] = !codeBoxes.value[key]
}

// 算法3 步骤数据
const steps3 = [
  { a: 1, b: 2, next: 2 },  // [1, 1] → [1, 2]
  { a: 2, b: 3, next: 3 },  // [1, 2] → [2, 3]
  { a: 3, b: 5, next: 5 },  // [2, 3] → [3, 5]
  { a: 5, b: 8, next: 8 },  // [3, 5] → [5, 8]
  { a: 8, b: 13, next: 13 }, // [5, 8] → [8, 13]
  { a: 13, b: 21, next: 21 },// [8, 13] → [13, 21]
  { a: 21, b: 34, next: 34 },// [13, 21] → [21, 34]
  { a: 34, b: 55, next: 55 } // [21, 34] → [34, 55]
]

let animationInterval3 = null

// 算法3 动画控制函数
const startAnimation3 = () => {
  stopAnimation3()
  
  showAnimation3.value = true
  step3.value = 0
  currentA3.value = 1
  currentB3.value = 1
  historyRecords3.value = [] // 清空历史记录
  outputSequence3.value = [1, 1] // 重置输出序列
  
  let currentStep = 0
  animationInterval3 = setInterval(() => {
    if (currentStep < steps3.length) {
      const s = steps3[currentStep]
      
      // 更新 a, b
      currentA3.value = s.a
      currentB3.value = s.b
      
      // 记录当前步骤
      historyRecords3.value.push(`Step ${currentStep + 1}: a=${s.a}, b=${s.b}`)
      
      // 更新输出序列 - 在每一步添加新的斐波那契数
      if (currentStep === 0) {
        outputSequence3.value = [1, 1, s.b] // [1, 1, 2]
      } else {
        outputSequence3.value.push(s.next) // 添加下一个斐波那契数
      }
      
      step3.value = currentStep + 1
      currentStep++
    } else {
      stopAnimation3()
    }
  }, 1500)
}

const stopAnimation3 = () => {
  if (animationInterval3) {
    clearInterval(animationInterval3)
    animationInterval3 = null
  }
  showAnimation3.value = false
  step3.value = 0
  currentA3.value = 1
  currentB3.value = 1
  outputSequence3.value = [1, 1] // 重置输出序列
}

// 算法3 代码
const fib3Code = `#include <stdio.h>
int main() {
  int i,a=1,b=1;
  print(a,b);
  for (int i = 1; i < 4; i++) {
    a = a + b;  
    b = a + b;
    print(a,b);
  }
  return 0;
}`
</script>


<!-- ✨斐波那契三算法教学播放器  -->
<!-- ✨斐波那契三算法教学播放器  -->
<!-- ✨斐波那契三算法教学播放器  -->
<!-- ✨斐波那契三算法教学播放器  -->
<!-- ✨斐波那契三算法教学播放器  -->

---
layout: right-sidebar
class: 'text-xs'
---

# <div class="text-lg text-blue-500">斐波那契三算法对比播放</div>

<!-- ================= 状态 ================= -->
<div class="mt-2 text-xs text-gray-300">
Step {{step}} / {{maxStep}} ｜ 
<span class="text-sky-300">算法1 O(1)</span> ｜ 
<span class="text-emerald-300">算法2 O(n)</span> ｜ 
<span class="text-violet-300">算法3 变形</span>
</div>

<!-- ================= 三算法展示 ================= -->
<div class="grid grid-cols-3 gap-2 mt-3 text-xs">

  <div class="p-2 bg-slate-900 rounded text-white">
    <div class="text-sky-300 font-bold">算法1：标准迭代</div>
    <div class="mt-2 font-mono">
      a={{a1}}, b={{b1}}, c={{c1}}
    </div>
  </div>

  <div class="p-2 bg-slate-900 rounded text-white">
    <div class="text-emerald-300 font-bold">算法2：数组构造</div>
    <div class="mt-2 font-mono">
      {{seq2.join(' ')}}
    </div>
  </div>

  <div class="p-2 bg-slate-900 rounded text-white">
    <div class="text-violet-300 font-bold">算法3：变形累加</div>
    <div class="mt-2 font-mono">
      a={{a3}}, b={{b3}}
    </div>
  </div>

</div>

<!-- ================= 进度条 ================= -->
<input
  type="range"
  min="0"
  :max="maxStep"
  v-model="step"
  class="w-full mt-3"
/>

<!-- ================= 控制按钮 ================= -->
<div class="flex flex-wrap gap-2 mt-3">

  <button @click="play" class="px-3 py-1 bg-green-500 text-white rounded">
    ▶ 播放
  </button>

  <button @click="pause" class="px-3 py-1 bg-yellow-500 text-white rounded">
    ⏸ 暂停
  </button>

  <button @click="stepBack" class="px-3 py-1 bg-purple-500 text-white rounded">
    ⏮ 回退
  </button>

  <button @click="stepForward" class="px-3 py-1 bg-blue-500 text-white rounded">
    ⏭ 单步
  </button>

  <button @click="reset" class="px-3 py-1 bg-red-500 text-white rounded">
    🔁 重置
  </button>

</div>

<div class="overflow-x-auto mt-4">
  <table class="w-full text-center table-fixed border-collapse">
    <colgroup>
      <col style="width: 20%;">
      <col style="width: 25%;">
      <col style="width: 20%;">
      <col style="width: 35%;">
    </colgroup>
    <thead>
      <tr class="bg-slate-800 text-white">
        <th class="p-2 font-semibold">名称</th>
        <th class="p-2 font-semibold">类型</th>
        <th class="p-2 font-semibold">空间复杂度</th>
        <th class="p-2 font-semibold">特点</th>
      </tr>
    </thead>
    <tbody>
      <tr class="border-t border-slate-700 hover:bg-slate-700/50 transition-colors">
        <td class="p-2 font-mono text-sky-300">算法1</td>
        <td class="p-2">标准迭代</td>
        <td class="p-2">O(1)</td>
        <td class="p-2 text-sm text-gray-300">不保存历史，仅滑动变量</td>
      </tr>
      <tr class="border-t border-slate-700 hover:bg-slate-700/50 transition-colors">
        <td class="p-2 font-mono text-emerald-300">算法2 ⭐</td>
        <td class="p-2">数组构造（标准）</td>
        <td class="p-2">O(n)</td>
        <td class="p-2 text-sm text-gray-300">完整保存序列（推荐）</td>
      </tr>
      <tr class="border-t border-slate-700 hover:bg-slate-700/50 transition-colors">
        <td class="p-2 font-mono text-violet-300">算法3</td>
        <td class="p-2">变形递推</td>
        <td class="p-2">O(1)</td>
        <td class="p-2 text-sm text-gray-300">非标准 Fibonacci，仅演示</td>
      </tr>
    </tbody>
  </table>
</div>

<script setup>
import { ref } from 'vue'

// ================= 状态 =================
const step = ref(0)
const maxStep = 8
const playing = ref(false)

// ================= 算法1 =================
const a1 = ref(1)
const b1 = ref(1)
const c1 = ref(0)

// ================= 算法2 =================
const seq2 = ref([1,1])

// ================= 算法3 =================
const a3 = ref(1)
const b3 = ref(1)

// ================= 讲解 =================
const tip = ref('点击播放开始教学')

// ================= 定时器 =================
let timer = null
const speed = 900

// ================= 核心一步 =================
const nextStep = () => {

  if (step.value >= maxStep) {
    pause()
    return
  }

  const c = a1.value + b1.value

  // 算法1
  c1.value = c
  a1.value = b1.value
  b1.value = c

  // 算法2
  seq2.value.push(c)

  // 算法3
  a3.value = a3.value + b3.value
  b3.value = a3.value + b3.value

  step.value++
  tip.value = tips[step.value] || ''
}

// ================= 播放 =================
const play = () => {
  if (playing.value) return
  playing.value = true

  timer = setInterval(() => {
    nextStep()
  }, speed)
}

// ================= 暂停 =================
const pause = () => {
  clearInterval(timer)
  playing.value = false
}

// ================= 单步前进 =================
const stepForward = () => {
  pause()
  nextStep()
}

// ================= 回退 =================
const stepBack = () => {
  pause()
  if (step.value <= 0) return

  reset()
  for (let i = 0; i < step.value - 1; i++) {
    nextStep()
  }
}

// ================= 重置 =================
const reset = () => {
  pause()

  step.value = 0

  a1.value = 1
  b1.value = 1
  c1.value = 0

  seq2.value = [1,1]

  a3.value = 1
  b3.value = 1

  tip.value = '已重置'
}
</script>


<!-- ✨ 4.2.2递推法 -->
<!-- ✨ 4.2.2递推法 -->
<!-- ✨ 4.2.2递推法 -->
<!-- ✨ 4.2.2递推法 -->
<!-- ✨ 4.2.2递推法 -->

---
layout: right-sidebar
transition: fade-out
class: 'pr-4 text-xs leading-relaxed'
---

# <div class="mt-1 text-lg opacity-80">4.2.2 递推法</div>

## 📌 例2：求两个整数的最大公约数

<div v-click class="bg-gradient-to-br from-green-50 to-green-100 rounded-3xl p-3 mt-2 mb-3 text-xs border-l-6 border-green-500">
算法设计思路：
</div>

### 🔧 算法实现方法

<div v-click class="bg-gradient-to-br from-green-100 to-green-200 rounded-3xl p-3 mt-2 mb-3 text-xs border-l-6 border-green-600">
<ol class="list-decimal list-inside space-y-1 text-gray-700">
  <li><strong>短除法</strong></li>
  <li><strong>辗转相除法（欧几里得算法）</strong></li>
</ol>
</div>

### 📐 数学公式

<div v-click class="bg-gradient-to-br from-green-200 to-green-100 rounded-3xl p-3 mt-2 mb-3 text-xs border-l-6 border-green-700">
<div class="text-center font-mono text-red-600 text-lg font-bold">
gcd(m, n) = gcd(n, m%n)
</div>
</div>

<div v-click class="mt-2 text-xxs text-gray-600 italic bg-slate-100 p-2 rounded-3xl border border-slate-200">
💡 核心思想：利用余数不断缩小问题规模，直到余数为0时得到最大公约数
</div>

---
layout: right-sidebar
class: 'text-xs'
transition: fade-out
---

<div class="flex items-center justify-between gap-2 mt-1">

  <!-- 标题 -->
  <div class="font-semibold text-base opacity-80 whitespace-nowrap">
    递推法求最大公约数
  </div>

  <!-- 按钮组 -->
  <div class="flex gap-1">
    <!-- JS代码 -->
    <button
      @click="toggleCode('js')"
      class="px-2 py-0.5 bg-slate-700 text-slate-200 rounded-lg hover:bg-slate-600 text-xs"
    >
      📋 查看代码(JavaScript)
      <span v-if="show.js" class="text-green-400">▼</span>
      <span v-else class="text-blue-400">▶</span>
    </button>
    <!-- C代码 -->
    <button
      @click="toggleCode('c')"
      class="px-2 py-0.5 bg-slate-700 text-slate-200 rounded-lg hover:bg-slate-600 text-xs"
    >
      📋 查看代码(C语言)
      <span v-if="show.c" class="text-green-400">▼</span>
      <span v-else class="text-blue-400">▶</span>
    </button>
    <!-- 动画 -->
    <!--<button
    v-if="!show.anim"
    @click="show.anim = true"
    class="px-2 py-0.5 bg-blue-500 text-white rounded-lg hover:bg-blue-600 text-xs"
  >
    🎬 开始动画演示
  </button>
  <button
    v-else
    @click="show.anim = false"
    class="px-2 py-0.5 bg-red-500 text-white rounded-lg hover:bg-red-600 text-xs"
  >
    ⏹️ 停止演示
  </button>-->

  </div>
</div>

<!-- JS代码 -->
<div v-if="show.js" class="mt-3">
  <CodeRunner :code="jsCode" />
</div>

<!-- C代码 -->
<div v-if="show.c" class="mt-3">
  <CodeRunner2 :code="cCode" />
</div>

<!-- 动画 -->
<div v-if="showAnim" class="mt-3 p-4 bg-gray-800 text-white rounded-xl">
  📊 动画演示区域（后续你可以接递推步骤）
</div>

<script setup>
import { ref } from 'vue'

const show = ref({
  js: false,
  c: false
})

const showAnim = ref(false)

const toggleCode = (type) => {
  show.value[type] = !show.value[type]
}

/* JS版本 */
const jsCode = `
const gcd = (a, b) => {
  while (b !== 0) {
    const c = a % b;
    console.log(a, b, c);
    a = b;
    b = c;
  }
  console.log('gcd =', a);
};

gcd(48, 18);
`

/* C版本 */
const cCode = `#include <stdio.h>

int main() {
    int a = 48, b = 18, c;

    while (b != 0) {
        c = a % b;
        a = b;
        b = c;
    }

    printf("gcd = %d\\n", a);
    return 0;
}`
</script>

<!-- ✨ 4.3.1 倒推法(例1：猴子吃桃问题) -->
<!-- ✨ 4.3.1 倒推法(例1：猴子吃桃问题) -->
<!-- ✨ 4.3.1 倒推法(例1：猴子吃桃问题) -->
<!-- ✨ 4.3.1 倒推法(例1：猴子吃桃问题) -->
<!-- ✨ 4.3.1 倒推法(例1：猴子吃桃问题) -->

---
layout: right-sidebar
transition: fade-out
class: 'pr-4 text-xs leading-relaxed'
---


# <div class="mt-1 text-lg opacity-80">4.3.1 倒推法</div>

## 🐵 例1：猴子吃桃问题

<div v-click class="bg-gradient-to-br from-orange-50 to-orange-100 rounded-3xl p-3 mt-2 mb-3 text-xs border-l-6 border-orange-500">
一只小猴子摘了若干桃子，每天吃现有桃的一半多一个，到第10天时就只有一个桃子了，求原有多少个桃？
</div>

### 🔧 算法设计思路
<div v-click class="bg-gradient-to-br from-orange-100 to-orange-200 rounded-3xl p-3 mt-2 mb-3 text-xs border-l-6 border-orange-600">
<ul class="list-disc list-inside space-y-1 text-gray-700">
  <li>逆向思维：从最后一天的1个桃子开始倒推</li>
  <li>每天的桃子数 = (前一天剩余 + 1) × 2</li>
  <li>递推关系式：aᵢ = (1 + aᵢ₊₁) × 2, i=9,8,7……</li>
</ul>
</div>

### 📐 数学模型
<div v-click class="bg-gradient-to-br from-orange-200 to-orange-250 to-orange-200 rounded-3xl p-3 mt-2 mb-3 text-xs border-l-6 border-orange-700">
<div class="text-center font-mono text-red-600 text-lg font-bold">
a = (1 + a) * 2
</div>
</div>

<div v-click class="mt-2 text-xxs text-gray-600 italic bg-slate-100 p-2 rounded-3xl border border-slate-200">
💡 核心思想：从已知结果出发，逐步推导初始状态
</div>


---
layout: right-sidebar
class: 'text-xs'
transition: fade-out
---

<div class="flex items-center justify-between gap-2 mt-1">

  <div class="font-semibold text-base opacity-80 whitespace-nowrap">
    倒推法：猴子吃桃问题
  </div>
  <button
    @click="show.js = !show.js"
    class="px-2 py-0.5 bg-slate-700 text-slate-200 rounded-lg hover:bg-slate-600 text-xs"
  >
    📋 查看代码(JavaScript)
    <span v-if="show.js">▼</span>
    <span v-else>▶</span>
  </button>
  <button
    @click="show.c = !show.c"
    class="px-2 py-0.5 bg-slate-700 text-slate-200 rounded-lg hover:bg-slate-600 text-xs"
  >
    📋 查看代码(C语言)
    <span v-if="show.c">▼</span>
    <span v-else>▶</span>
  </button>
  <!--<button
    v-if="!show.anim"
    @click="show.anim = true"
    class="px-2 py-0.5 bg-blue-500 text-white rounded-lg hover:bg-blue-600 text-xs"
  >
    🎬 开始动画演示
  </button>
  <button
    v-else
    @click="show.anim = false"
    class="px-2 py-0.5 bg-red-500 text-white rounded-lg hover:bg-red-600 text-xs"
  >
    ⏹️ 停止演示
  </button>-->

</div>

<div v-if="show.js" class="mt-3">
  <CodeRunner3 :code="jsCode" />
</div>

<div v-if="show.c" class="mt-3">
  <CodeRunner3 :code="cCode" />
</div>

<div v-if="show.anim" class="mt-3 p-4 bg-gray-800 text-white rounded-xl">
  🍑 动画演示：倒推过程（第9天 → 第1天）
</div>

<script setup>
import { ref } from 'vue'

const show = ref({
  js: false,
  c: false,
  anim: false
})

/* JS */
const jsCode = `let s = 1;

for (let i = 9; i >= 1; i--) {
  s = (s + 1) * 2;
  console.log("step", i, ":", s);
}

console.log("result:", s);`

/* C */
const cCode = `#include <stdio.h>

int main() {
    int i;
    int s = 1;

    printf("start: %d\\n", s);

    for (i = 9; i >= 1; i--) {
        s = (s + 1) * 2;
        printf("step %d: %d\\n", i, s);
    }

    printf("result: %d\\n", s);

    return 0;
}`
</script>


<!-- ✨ 4.3.2 倒推法(例2：杨辉三角形输出) -->
<!-- ✨ 4.3.2 倒推法(例2：杨辉三角形输出) -->
<!-- ✨ 4.3.2 倒推法(例2：杨辉三角形输出) -->
<!-- ✨ 4.3.2 倒推法(例2：杨辉三角形输出) -->
<!-- ✨ 4.3.2 倒推法(例2：杨辉三角形输出) -->

---
layout: right-sidebar
transition: fade-out
class: 'pr-4 text-xs leading-relaxed'
---

# <div class="mt-1 text-lg opacity-80">4.3.2 倒推法</div>

## 🔷 例2：杨辉三角形输出（用1维数组完成）

<div v-click class="bg-gradient-to-br from-orange-50 to-orange-100 rounded-3xl p-3 mt-2 mb-3 text-xs border-l-6 border-orange-500">
如何用一维数组实现杨辉三角形的输出？
</div>

### 🔧 算法设计思路
<div v-click class="bg-gradient-to-br from-orange-100 to-orange-200 rounded-3xl p-3 mt-2 mb-3 text-xs border-l-6 border-orange-600">
<ul class="list-disc list-inside space-y-1 text-gray-700">
  <li>一维数组A[1-i]存储第i行</li>
  <li>正推法会覆盖上一行对应的值，无法求下一个值</li>
  <li>反推法可以避免这个问题</li>
</ul>
</div>

### 📐 数学模型
<div v-click class="bg-gradient-to-br from-orange-200 to-orange-250 to-orange-200 rounded-3xl p-3 mt-2 mb-3 text-xs border-l-6 border-orange-700">
<div class="text-center font-mono text-red-600 text-lg font-bold">
A[j] = A[j-1] + A[j], j = i-1,i-2,…2
</div>
</div>

<div v-click class="mt-2 text-xxs text-gray-600 italic bg-slate-100 p-2 rounded-3xl border border-slate-200">
💡 核心思想：从后往前计算，避免数据覆盖问题
</div>


---
layout: right-sidebar
class: 'text-xs'
transition: fade-out
---

<div class="flex items-center justify-between gap-2 mt-1">

  <div class="font-semibold text-base opacity-80 whitespace-nowrap">
    杨辉三角（递推生成）
  </div>
  <button
    @click="show.js = !show.js"
    class="px-2 py-0.5 bg-slate-700 text-slate-200 rounded-lg hover:bg-slate-600 text-xs"
  >
    📋 查看代码(JavaScript)
    <span v-if="show.js">▼</span>
    <span v-else>▶</span>
  </button>
  <button
    @click="show.c = !show.c"
    class="px-2 py-0.5 bg-slate-700 text-slate-200 rounded-lg hover:bg-slate-600 text-xs"
  >
    📋 查看代码(C语言)
    <span v-if="show.c">▼</span>
    <span v-else>▶</span>
  </button>
  <!--<button
    v-if="!show.anim"
    @click="show.anim = true"
    class="px-2 py-0.5 bg-blue-500 text-white rounded-lg hover:bg-blue-600 text-xs"
  >
    🎬 开始动画演示
  </button>
  <button
    v-else
    @click="show.anim = false"
    class="px-2 py-0.5 bg-red-500 text-white rounded-lg hover:bg-red-600 text-xs"
  >
    ⏹️ 停止演示
  </button>-->

</div>

<div v-if="show.js" class="mt-3">
  <CodeRunner4 :code="jsCode" />
</div>

<div v-if="show.c" class="mt-3">
  <CodeRunner4 :code="cCode" />
</div>

<div v-if="show.anim" class="mt-3 p-4 bg-gray-800 text-white rounded-xl">
  📊 动画演示：递推生成杨辉三角
</div>

<script setup>
import { ref } from 'vue'

const show = ref({
  js: false,
  c: false,
  anim: false
})

/* JS版本（修复后的正确实现） */
const jsCode = `
let n = 5;
let a = new Array(100).fill(0);

console.log("1");

a[1] = a[2] = 1;
console.log(a[1], a[2]);

for (let i = 3; i <= n; i++) {
  a[i] = 1;

  // 杨辉三角核心递推逻辑
  for (let j = i - 1; j > 1; j--) {
    a[j] = a[j] + a[j - 1];
  }

  let line = "";
  for (let j = 1; j <= i; j++) {
    line += a[j] + " ";
  }
  console.log(line);
}
`

/* C版本（正确实现杨辉三角） */
const cCode = `#include <stdio.h>

int main() {
    int n = 5; // 假设打印5行
    int a[100] = {0}; // 初始化数组为0
    a[1] = 1; // 第一行第一个是1

    printf("1\\n");

    for (int i = 2; i <= n; i++) {
        a[i] = 1; // 每一行的最后一个数设为1（修复了老师的 a[i]==1 错误）

        // 核心：从后往前更新
        for (int j = i - 1; j > 1; j--) {
            a[j] = a[j] + a[j - 1];
        }

        // 打印当前行
        for (int j = 1; j <= i; j++) {
            printf("%d ", a[j]);
        }
        printf("\\n");
    }
    return 0;
}`

</script>


<!-- ✨ 4.3.3 倒推法(例3：穿越沙漠问题) -->
<!-- ✨ 4.3.3 倒推法(例3：穿越沙漠问题) -->
<!-- ✨ 4.3.3 倒推法(例3：穿越沙漠问题) -->
<!-- ✨ 4.3.3 倒推法(例3：穿越沙漠问题) -->
<!-- ✨ 4.3.3 倒推法(例3：穿越沙漠问题) -->

---
layout: right-sidebar
transition: fade-out
class: 'pr-4 text-xs leading-relaxed'
---

# <div class="mt-1 text-lg opacity-80">4.3.3 倒推法</div>

## 🏜️ 例3：穿越沙漠问题

<div v-click class="bg-gradient-to-br from-orange-50 to-orange-100 rounded-3xl p-3 mt-2 mb-3 text-xs border-l-6 border-orange-500">
用一辆吉普车穿越1000公里的沙漠。吉普车的总装油量为500加仑，耗油率为1加仑/公里。由于沙漠中没有油库，必须先用这辆车在沙漠中建立临时油库。该吉普车以最少的耗油量穿越沙漠，应在什么地方建油库，以及各处的贮油量。
</div>

### 🔧 最省油的方案
<div v-click class="bg-gradient-to-br from-orange-100 to-orange-200 rounded-3xl p-3 mt-2 mb-3 text-xs border-l-6 border-orange-600">
<ol class="list-decimal list-inside space-y-1 text-gray-700">
  <li>每次从a点加满油出发</li>
  <li>a-b之间来回奇数次，最后一次朝b点走</li>
  <li>a点储油量 = a-b之间耗油量 + b点储油量</li>
</ol>
</div>

### 📐 数学模型
<div v-click class="bg-gradient-to-br from-orange-200 to-orange-250 to-orange-200 rounded-3xl p-3 mt-2 mb-3 text-xs border-l-6 border-orange-700">
<div class="text-center font-mono text-red-600 text-lg font-bold">
S1 = 500*k<br>
S2 = S1-(2k-1)*x = 500k-(2k-1)x
</div>
</div>

<div v-click class="mt-2 text-xxs text-gray-600 italic bg-slate-100 p-2 rounded-3xl border border-slate-200">
💡 核心思想：通过最优策略倒推，找到最省油的运输方案
</div>



---
layout: right-sidebar
class: 'text-xs'
transition: fade-out
---

<div class="flex items-center justify-between gap-2 mt-1">

  <div class="font-semibold text-base opacity-80 whitespace-nowrap">
    沙漠运油问题（倒推法）
  </div>
  <button
    @click="show.js = !show.js"
    class="px-2 py-0.5 bg-slate-700 text-slate-200 rounded-lg hover:bg-slate-600 text-xs"
  >
    📋 查看代码(JavaScript)
    <span v-if="show.js">▼</span>
    <span v-else>▶</span>
  </button>
  <button
    @click="show.c = !show.c"
    class="px-2 py-0.5 bg-slate-700 text-slate-200 rounded-lg hover:bg-slate-600 text-xs"
  >
    📋 查看代码(C语言)
    <span v-if="show.c">▼</span>
    <span v-else>▶</span>
  </button>
  <!--<button
    v-if="!show.anim"
    @click="show.anim = true"
    class="px-2 py-0.5 bg-blue-500 text-white rounded-lg hover:bg-blue-600 text-xs"
  >
    🎬 开始动画演示
  </button>
  <button
    v-else
    @click="show.anim = false"
    class="px-2 py-0.5 bg-red-500 text-white rounded-lg hover:bg-red-600 text-xs"
  >
    ⏹️ 停止演示
  </button>-->

</div>

<div v-if="show.js" class="mt-3">
  <CodeRunner6 :code="jsCode" />
</div>

<div v-if="show.c" class="mt-3">
  <CodeRunner6 :code="cCode" />
</div>

<div v-if="show.anim" class="mt-3 p-4 bg-gray-800 text-white rounded-xl">
  🚗 动画演示：倒推建立油库过程（从终点到起点）
</div>

<script setup>
import { ref } from 'vue'

const show = ref({
  js: false,
  c: false,
  anim: false
})

/* JS版本（修复后的正确实现） */
const jsCode = `
let dis = 500, k = 1, oil = 500;

console.log("storepoint: 1, length: " + (1000 - dis) + ", oil: " + oil);

while (dis < 1000) {
  k++;
  dis += 500 / (2 * k - 1);
  oil = 500 * k;
  console.log("storepoint: " + k + ", length: " + Math.round(1000 - dis) + ", oil: " + oil);
}

// 最后一段
let finalOil = 500 * (k - 1) + (1000 - dis) * (2 * k - 1);
console.log("storepoint: " + k + ", length: 0, oil: " + finalOil);
`

/* C版本 */
const cCode = `#include <stdio.h>

int main() {
    int k = 1;
    double dis = 500.0, oil = 500.0;

    printf("storepoint: %d, length: %.0f, oil: %.0f\\n", k, 1000 - dis, oil);

    while (dis < 1000) {
        k++;
        dis += 500.0 / (2 * k - 1);
        oil = 500.0 * k;
        printf("storepoint: %d, length: %.0f, oil: %.0f\\n", k, 1000 - dis, oil);
    }

    // 最后一段
    double finalOil = 500.0 * (k - 1) + (1000 - dis) * (2 * k - 1);
    printf("storepoint: %d, length: 0, oil: %.0f\\n", k, finalOil);

    return 0;
}`
</script>






<!-- ✨ 4.4 迭代法解方程 -->
<!-- ✨ 4.4 迭代法解方程 -->
<!-- ✨ 4.4 迭代法解方程 -->
<!-- ✨ 4.4 迭代法解方程 -->
<!-- ✨ 4.4 迭代法解方程 -->


---
layout: right-sidebar
transition: fade-out
class: 'pr-4 text-xs leading-relaxed'
---


# <div class="mt-1 text-lg opacity-80">4.4 迭代法解方程</div>

## 🧮 什么是迭代法解方程？

<div v-click class="bg-gradient-to-br from-purple-50 to-purple-100 rounded-3xl p-3 mt-2 mb-3 text-xs border-l-6 border-purple-500">
迭代法解方程是一种通过逐步逼近来求解方程根的数值方法。
</div>

### ✨ 基本思想
<div v-click class="bg-gradient-to-br from-purple-100 to-purple-200 rounded-3xl p-3 mt-2 mb-3 text-xs border-l-6 border-purple-600">
<ul class="list-disc list-inside space-y-1 text-gray-700">
  <li>从一个初始近似值开始</li>
  <li>通过迭代公式不断计算新的近似值</li>
  <li>逐步逼近方程的精确解</li>
</ul>
</div>

### 🔧 基本步骤
<div v-click class="bg-gradient-to-br from-purple-200 to-purple-250 to-purple-200 rounded-3xl p-3 mt-2 mb-3 text-xs border-l-6 border-purple-700">
<ol class="list-decimal list-inside space-y-1 text-gray-700">
  <li class="font-semibold">确定初值x₀</li>
  <li class="font-semibold">建立迭代关系式：f(0)=0 → x=φ(x)</li>
  <li class="font-semibold">构造数列：x(n)=φ(x(n-1))</li>
  <li class="font-semibold">直到满足停止条件</li>
</ol>
</div>

<div v-click class="mt-2 text-xxs text-gray-600 italic bg-slate-100 p-2 rounded-3xl border border-slate-200">
💡 核心思想：通过不断迭代，使近似值逐步收敛到方程的精确解
</div>



<!-- ✨ 4.4.1 迭代法解方程(简单迭代法) -->
<!-- ✨ 4.4.1 迭代法解方程(简单迭代法) -->
<!-- ✨ 4.4.1 迭代法解方程(简单迭代法) -->
<!-- ✨ 4.4.1 迭代法解方程(简单迭代法) -->
<!-- ✨ 4.4.1 迭代法解方程(简单迭代法) -->

---
layout: right-sidebar
transition: fade-out
class: 'pr-4 text-xs leading-relaxed'
---

# <div class="mt-1 text-lg opacity-80">4.4.1 迭代法解方程(简单迭代法)</div>

## 🧮 例1：迭代法求方程组根

<div v-click class="bg-gradient-to-br from-purple-50 to-purple-100 rounded-3xl p-3 mt-2 mb-3 text-xs border-l-6 border-purple-500">
算法说明：方程组解的初值X=（x₀，x₁，...，xₙ₋₁），迭代关系方程组为：xᵢ = gᵢ(X) (i=0,1,...,n-1)，w为解的精度。
</div>

### 🔧 算法设计思路
<div v-click class="bg-gradient-to-br from-purple-100 to-purple-200 rounded-3xl p-3 mt-2 mb-3 text-xs border-l-6 border-purple-600">
<ul class="list-disc list-inside space-y-1 text-gray-700">
  <li>从初始近似根开始迭代</li>
  <li>每次迭代计算新的近似值</li>
  <li>通过比较前后两次结果的差值判断收敛性</li>
</ul>
</div>

### 📐 数学模型
<div v-click class="bg-gradient-to-br from-purple-200 to-purple-250 to-purple-200 rounded-3xl p-3 mt-2 mb-3 text-xs border-l-6 border-purple-700">
<div class="text-center font-mono text-red-600 text-lg font-bold">
x[i] = gi(X)
</div>
</div>

<div v-click class="mt-2 text-xxs text-gray-600 italic bg-slate-100 p-2 rounded-3xl border border-slate-200">
💡 核心思想：通过不断迭代逼近方程组的精确解
</div>







---
layout: right-sidebar
class: 'text-xs'
transition: fade-out
---

<div class="flex items-center justify-between gap-2 mt-1">

  <div class="font-semibold text-base opacity-80 whitespace-nowrap">
    简单迭代法求方程组根
  </div>
  <button
    @click="show.js = !show.js"
    class="px-2 py-0.5 bg-slate-700 text-slate-200 rounded-lg hover:bg-slate-600 text-xs"
  >
    📋 查看代码(JavaScript)
    <span v-if="show.js">▼</span>
    <span v-else>▶</span>
  </button>
  <button
    @click="show.c = !show.c"
    class="px-2 py-0.5 bg-slate-700 text-slate-200 rounded-lg hover:bg-slate-600 text-xs"
  >
    📋 查看代码(C语言)
    <span v-if="show.c">▼</span>
    <span v-else>▶</span>
  </button>
  <!--<button
    v-if="!show.anim"
    @click="show.anim = true"
    class="px-2 py-0.5 bg-blue-500 text-white rounded-lg hover:bg-blue-600 text-xs"
  >
    🎬 开始动画演示
  </button>
  <button
    v-else
    @click="show.anim = false"
    class="px-2 py-0.5 bg-red-500 text-white rounded-lg hover:bg-red-600 text-xs"
  >
    ⏹️ 停止演示
  </button>-->

</div>

<div v-if="show.js" class="mt-3">
  <CodeRunner5 :code="jsCode" />
</div>

<div v-if="show.c" class="mt-3">
  <CodeRunner5 :code="cCode" />
</div>

<div v-if="show.anim" class="mt-3 p-4 bg-gray-800 text-white rounded-xl">
  🔄 动画演示：简单迭代法求解过程（逐步逼近）
</div>

<script setup>
import { ref } from 'vue'

const show = ref({
  js: false,
  c: false,
  anim: false
})

/* JS版本（修复后的正确实现） */
const jsCode = `
let x = 0.5, y = 0.5;
let k = 0;
const maxIter = 100;
const tolerance = 1e-6;

console.log("迭代过程：");

while (k < maxIter) {
  let x_new = Math.cos(x);
  let y_new = Math.sin(y);

  console.log(
    "第" + (k+1) + "次迭代: x=" + x.toFixed(6) +
    ", y=" + y.toFixed(6) +
    " → x'=" + x_new.toFixed(6) +
    ", y'=" + y_new.toFixed(6)
  );

  if (Math.abs(x_new - x) < tolerance && Math.abs(y_new - y) < tolerance) {
    console.log("收敛！最终结果：");
    console.log(
      "x ≈ " + x_new.toFixed(6) +
      ", y ≈ " + y_new.toFixed(6)
    );
    break;
  }

  x = x_new;
  y = y_new;
  k++;
}

if (k === maxIter) {
  console.log("达到最大迭代次数，未收敛");
}
`

/* C版本（正确实现杨辉三角） */
const cCode = `#include <stdio.h>
#include <math.h>

int main() {
    double x = 0.5, y = 0.5; // 初始近似根
    int k = 0;
    const int maxIter = 100;
    const double tolerance = 1e-6;

    printf("迭代过程：\\n");

    while (k < maxIter) {
        double x_new = cos(x);
        double y_new = sin(y);

        printf("第%d次迭代: x=%.6f, y=%.6f → x'=%.6f, y'=%.6f\\n", 
               k+1, x, y, x_new, y_new);

        if (fabs(x_new - x) < tolerance && fabs(y_new - y) < tolerance) {
            printf("✅ 收敛！最终结果：\\n");
            printf("x ≈ %.6f, y ≈ %.6f\\n", x_new, y_new);
            break;
        }

        x = x_new;
        y = y_new;
        k++;
    }

    if (k == maxIter) {
        printf("❌ 达到最大迭代次数，未收敛\\n");
    }

    return 0;
}`

</script>



<!-- ✨ 4.4.2 迭代法解方程(牛顿-拉夫逊方法) -->
<!-- ✨ 4.4.2 迭代法解方程(牛顿-拉夫逊方法) -->
<!-- ✨ 4.4.2 迭代法解方程(牛顿-拉夫逊方法) -->
<!-- ✨ 4.4.2 迭代法解方程(牛顿-拉夫逊方法) -->
<!-- ✨ 4.4.2 迭代法解方程(牛顿-拉夫逊方法) -->


---
layout: right-sidebar
transition: fade-out
class: 'pr-4 text-xs leading-relaxed'
---

# <div class="mt-1 text-lg opacity-80">4.4.2 迭代法解方程(牛顿-拉夫逊方法)</div>

## 🚀 例2：牛顿迭代法求根

<div v-click class="bg-gradient-to-br from-purple-50 to-purple-100 rounded-3xl p-3 mt-2 mb-3 text-xs border-l-6 border-purple-500">
牛顿迭代法解求形如ax³+bx²+cx+d=0方程的根
</div>

### 🔧 算法设计思路
<div v-click class="bg-gradient-to-br from-purple-100 to-purple-200 rounded-3xl p-3 mt-2 mb-3 text-xs border-l-6 border-purple-600">
<ul class="list-disc list-inside space-y-1 text-gray-700">
  <li>利用函数在某点的切线来逼近零点</li>
  <li>通过导数信息快速收敛到根</li>
  <li>迭代公式：x=x₀-f(x₀)/f'(x₀)</li>
</ul>
</div>

### 📐 数学模型
<div v-click class="bg-gradient-to-br from-purple-200 to-purple-250 to-purple-200 rounded-3xl p-3 mt-2 mb-3 text-xs border-l-6 border-purple-700">
<div class="text-center font-mono text-red-600 text-lg font-bold">
x = x0 - f(x0) / ▽f(x0)
</div>
</div>

<div v-click class="mt-2 text-xxs text-gray-600 italic bg-slate-100 p-2 rounded-3xl border border-slate-200">
💡 核心思想：利用切线逼近曲线，实现快速收敛
</div>




---
layout: right-sidebar
class: 'text-xs'
transition: fade-out
---

<div class="flex items-center justify-between gap-2 mt-1">

  <div class="font-semibold text-base opacity-80 whitespace-nowrap">
    牛顿迭代法解方程
  </div>
  <button
    @click="show.js = !show.js"
    class="px-2 py-0.5 bg-slate-700 text-slate-200 rounded-lg hover:bg-slate-600 text-xs"
  >
    📋 查看代码(JavaScript)
    <span v-if="show.js">▼</span>
    <span v-else>▶</span>
  </button>
  <button
    @click="show.c = !show.c"
    class="px-2 py-0.5 bg-slate-700 text-slate-200 rounded-lg hover:bg-slate-600 text-xs"
  >
    📋 查看代码(C语言)
    <span v-if="show.c">▼</span>
    <span v-else>▶</span>
  </button>
  <!--<button
    v-if="!show.anim"
    @click="show.anim = true"
    class="px-2 py-0.5 bg-blue-500 text-white rounded-lg hover:bg-blue-600 text-xs"
  >
    🎬 开始动画演示
  </button>
  <button
    v-else
    @click="show.anim = false"
    class="px-2 py-0.5 bg-red-500 text-white rounded-lg hover:bg-red-600 text-xs"
  >
    ⏹️ 停止演示
  </button>-->
</div>

<div v-if="show.js" class="mt-3">
  <CodeRunner7 :code="jsCode" />
</div>

<div v-if="show.c" class="mt-3">
  <CodeRunner7 :code="cCode" />
</div>

<div v-if="show.anim" class="mt-3 p-4 bg-gray-800 text-white rounded-xl">
  📊 动画演示：牛顿迭代法逼近方程根
</div>

<script setup>
import { ref } from 'vue'

const show = ref({
  js: false,
  c: false,
  anim: false
})

const jsCode = `
// 牛顿迭代法求解方程 f(x) = x^3 + 2x^2 + 3x + 4 = 0
function newtonMethod() {
  let x0 = -1.0;
  const tolerance = 1e-6;
  const maxIterations = 100;

  console.log("迭代过程：");
  console.log("k\\t\\t x_k\\t\\t f(x_k)\\t f'(x_k)\\t x_{k+1}");

  for (let k = 0; k < maxIterations; k++) {
    const fx = Math.pow(x0, 3) + 2 * Math.pow(x0, 2) + 3 * x0 + 4;
    const dfx = 3 * Math.pow(x0, 2) + 4 * x0 + 3;

    if (Math.abs(dfx) < 1e-10) {
      console.log("❌ 导数接近零，无法继续迭代");
      return;
    }

    const x1 = x0 - fx / dfx;

    console.log(k + "\\t " + x0.toFixed(6) + "\\t " + fx.toFixed(6) + "\\t " + dfx.toFixed(6) + "\\t " + x1.toFixed(6));

    if (Math.abs(x1 - x0) < tolerance) {
      console.log("\\n✅ 收敛！最终结果：");
      console.log("x ≈ " + x1.toFixed(8));
      return;
    }

    x0 = x1;
  }

  console.log("\\n❌ 达到最大迭代次数，未收敛");
}
newtonMethod();
`

/* C版本 */
const cCode = `#include <stdio.h>
#include <math.h>

double f(double x) {
    return pow(x, 3) + 2 * pow(x, 2) + 3 * x + 4;
}

double df(double x) {
    return 3 * pow(x, 2) + 4 * x + 3;
}

int main() {
    double x0 = -1.0;
    double tolerance = 1e-6;
    int maxIterations = 100;

    printf("迭代过程：\\n");
    printf("k\t x_k\t f(x_k)\t f'(x_k)\t x_{k+1}\\n");

    for (int k = 0; k < maxIterations; k++) {
        double fx = f(x0);
        double dfx = df(x0);

        if (fabs(dfx) < 1e-10) {
            printf("❌ 导数接近零，无法继续迭代\\n");
            return 1;
        }

        double x1 = x0 - fx / dfx;

        printf("%d\t %.6f\t %.6f\t %.6f\t %.6f\\n", k, x0, fx, dfx, x1);

        if (fabs(x1 - x0) < tolerance) {
            printf("\\n✅ 收敛！最终结果：\\n");
            printf("x ≈ %.8f\\n", x1);
            return 0;
        }

        x0 = x1;
    }

    printf("\\n❌ 达到最大迭代次数，未收敛\\n");
    return 0;
}`
</script>





<!-- ✨ 4.4.3 迭代法解方程(区间二分法) -->
<!-- ✨ 4.4.3 迭代法解方程(区间二分法) -->
<!-- ✨ 4.4.3 迭代法解方程(区间二分法) -->
<!-- ✨ 4.4.3 迭代法解方程(区间二分法) -->
<!-- ✨ 4.4.3 迭代法解方程(区间二分法) -->

---
layout: right-sidebar
transition: fade-out
class: 'pr-4 text-xs leading-relaxed'
---

# <div class="mt-1 text-lg opacity-80">4.4.3 迭代法解方程(区间二分法)</div>

## 🔍 例1：二分法求方程根

<div v-click class="bg-gradient-to-br from-purple-50 to-purple-100 rounded-3xl p-3 mt-2 mb-3 text-xs border-l-6 border-purple-500">
二分法求解方程 x³/2+2x²-8=0 在区间[0,1]上的近似根
</div>

### 🔧 算法设计思路
<div v-click class="bg-gradient-to-br from-purple-100 to-purple-200 rounded-3xl p-3 mt-2 mb-3 text-xs border-l-6 border-purple-600">
<ul class="list-disc list-inside space-y-1 text-gray-700">
  <li>前提条件：函数在区间上连续且端点函数值异号</li>
  <li>每次将区间一分为二，选择包含根的子区间</li>
  <li>重复过程直到区间足够小</li>
</ul>
</div>

### 📐 数学模型
<div v-click class="bg-gradient-to-br from-purple-200 to-purple-250 to-purple-200 rounded-3xl p-3 mt-2 mb-3 text-xs border-l-6 border-purple-700">
<div class="text-center font-mono text-red-600 text-lg font-bold">
c = (a+b)/2<br>
若f(a)*f(c)<0，则[a,b]=[a,c]<br>
若f(b)*f(c)<0，则[a,b]=[c,b]
</div>
</div>

<div v-click class="mt-2 text-xxs text-gray-600 italic bg-slate-100 p-2 rounded-3xl border border-slate-200">
💡 核心思想：通过不断缩小搜索区间来逼近方程的根
</div>



---
layout: right-sidebar
class: 'text-xs'
transition: fade-out
---

<div class="flex items-center justify-between gap-2 mt-1">

  <div class="font-semibold text-base opacity-80 whitespace-nowrap">
    二分法求方程根
  </div>
  <button
    @click="show.js = !show.js"
    class="px-2 py-0.5 bg-slate-700 text-slate-200 rounded-lg hover:bg-slate-600 text-xs"
  >
    📋 查看代码(JavaScript)
    <span v-if="show.js">▼</span>
    <span v-else>▶</span>
  </button>
  <button
    @click="show.c = !show.c"
    class="px-2 py-0.5 bg-slate-700 text-slate-200 rounded-lg hover:bg-slate-600 text-xs"
  >
    📋 查看代码(C语言)
    <span v-if="show.c">▼</span>
    <span v-else>▶</span>
  </button>
  <!--<button
    v-if="!show.anim"
    @click="show.anim = true"
    class="px-2 py-0.5 bg-blue-500 text-white rounded-lg hover:bg-blue-600 text-xs"
  >
    🎬 开始动画演示
  </button>
  <button
    v-else
    @click="show.anim = false"
    class="px-2 py-0.5 bg-red-500 text-white rounded-lg hover:bg-red-600 text-xs"
  >
    ⏹️ 停止演示
  </button>-->

</div>

<div v-if="show.js" class="mt-3">
  <CodeRunner8 :code="jsCode" />
</div>

<div v-if="show.c" class="mt-3">
  <CodeRunner8 :code="cCode" />
</div>
<!--
<div v-if="show.anim" class="mt-3 p-4 bg-gray-800 text-white rounded-xl">
  📊 动画演示：二分法求解方程 $ x^3/2 + 2x^2 - 8 = 0 $
</div>-->

<script setup>
import { ref } from 'vue'

const show = ref({
  js: false,
  c: false,
  anim: false
})

/* JS版本 */
const jsCode = `
// 二分法求解方程 f(x) = x^3/2 + 2*x^2 - 8 = 0
function bisectionMethod() {
  let a = 0, b = 2;
  const tolerance = 1e-6;
  const maxIterations = 100;

  console.log("迭代过程：");
  console.log("k\\t a\\t\t f(a)\\t b\\t\t f(b)\\t c\\t\t f(c)");

  for (let k = 0; k < maxIterations; k++) {
    const fa = Math.pow(a, 3)/2 + 2*Math.pow(a, 2) - 8;
    const fb = Math.pow(b, 3)/2 + 2*Math.pow(b, 2) - 8;
    const c = (a + b) / 2;
    const fc = Math.pow(c, 3)/2 + 2*Math.pow(c, 2) - 8;

    console.log(k + "\\t " + a.toFixed(6) + "\\t " + fa.toFixed(6) + "\\t " + b.toFixed(6) + "\\t " + fb.toFixed(6) + "\\t " + c.toFixed(6) + "\\t " + fc.toFixed(6));

    if (Math.abs(fc) < tolerance || Math.abs(b - a) < tolerance) {
      console.log("\\n✅ 收敛！最终结果：");
      console.log("x ≈ " + c.toFixed(8));
      return;
    }

    if (fa * fc < 0) {
      b = c;
    } else {
      a = c;
    }
  }

  console.log("\\n❌ 达到最大迭代次数，未收敛");
}
bisectionMethod();
`

/* C版本 */
const cCode = `#include <stdio.h>
#include <math.h>

double f(double x) {
    return pow(x, 3)/2 + 2*pow(x, 2) - 8;
}

int main() {
    double a = 0, b = 2;
    double tolerance = 1e-6;
    int maxIterations = 100;

    printf("迭代过程：\\n");
    printf("k\\t a\\t f(a)\\t b\\t f(b)\\t c\\t f(c)\\n");

    for (int k = 0; k < maxIterations; k++) {
        double fa = f(a);
        double fb = f(b);
        double c = (a + b) / 2;
        double fc = f(c);

        printf("%d\\t %.6f\\t %.6f\\t %.6f\\t %.6f\\t %.6f\\t %.6f\\n", k, a, fa, b, fb, c, fc);

        if (fabs(fc) < tolerance || fabs(b - a) < tolerance) {
            printf("\\n✅ 收敛！最终结果：\\n");
            printf("x ≈ %.8f\\n", c);
            return 0;
        }

        if (fa * fc < 0) {
            b = c;
        } else {
            a = c;
        }
    }

    printf("\\n❌ 达到最大迭代次数，未收敛\\n");
    return 0;
}`
</script>

<!-- ✨ 总结页面 -->
---
layout: center
class: 'text-center'
---

# 🎯 总结与展望

## 本章回顾

- **迭代算法本质**：用旧值计算新值
- **三种策略**：递推法、倒推法、迭代法解方程
- **核心思想**：逐步逼近目标结果

<div class="mt-8 text-lg">
  <div class="mb-4">💡 <strong>迭代不仅是编程技巧，更是思维模式</strong></div>
  <div>从已知走向未知，从局部推导全局</div>
</div>

<button @click="$slidev.nav.next" class="mt-8 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full hover:scale-105 transition-transform">
  ▶ 下一章节：递归算法
</button>