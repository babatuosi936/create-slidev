<template>
  <div class="layout">

    <!-- 左：代码 -->
    <div class="left">
      <textarea v-model="code" class="editor"></textarea>
      <button @click="step">下一步迭代</button>
    </div>

    <!-- 右：三层 -->
    <div class="right">

      <!-- 1. 曲线 -->
      <div class="box">
        <canvas ref="curveCanvas" width="400" height="200"></canvas>
      </div>

      <!-- 2. 区间动画 -->
      <div class="box">
        <canvas ref="intervalCanvas" width="400" height="120"></canvas>
      </div>

      <!-- 3. 日志 -->
      <div class="box log">
        <div v-for="(l,i) in logs" :key="i">
          {{ l }}
        </div>
      </div>

    </div>

  </div>
</template>