<template>
  <div class="code-runner-container" :style="{ maxHeight: height + 'px' }">

    <div class="code-display" :style="{ maxHeight: codeMaxHeight + 'px' }">
      <textarea
        v-model="editableCode"
        class="code-editor"
        spellcheck="false"
      />
    </div>

    <button type="button" @click="runCode" class="run-button">
      ▶ 运行（安全模式）
    </button>

    <div v-if="showOutput" class="output-console">
      <div class="output-header">📤 模拟运行结果：</div>
      <pre>{{ output }}</pre>
    </div>

  </div>
</template>

<script setup lang="ts">
import { computed, ref, watch } from 'vue'

const props = withDefaults(
  defineProps<{
    code: string
    height?: number
  }>(),
  {
    height: 520
  }
)

const editableCode = ref(props.code)
const output = ref('')
const showOutput = ref(false)

watch(() => props.code, (val) => {
  editableCode.value = val
})

const codeMaxHeight = computed(() => props.height - 200)

const runCode = () => {
  output.value = ''
  showOutput.value = true

  const code = editableCode.value

// =========================
// 修复：兼容C/JS双语言的杨辉三角检测
// 核心检测杨辉三角的标志性递推逻辑，不再只认C语言语法
// =========================
  const hasCoreLogic = /a\[j\]\s*=\s*a\[j\]\s*\+\s*a\[j\s*-\s*1\]/.test(code)
  const hasReverseLoop = /for\s*\(.*j\s*=\s*i\s*-\s*1.*j\s*>\s*1/.test(code)
  const hasInit = /a\[[0-9]+\]\s*=\s*1/.test(code)
  const isYanghui = hasCoreLogic && hasReverseLoop && hasInit

  if (isYanghui) {
    // 完全匹配你代码逻辑的模拟运行，n=5
    const n = 5
    const a = Array(100).fill(0)
    
    // 第一行
    output.value += '1\n'
    // 第二行
    a[1] = a[2] = 1
    output.value += `${a[1]} ${a[2]}\n`

    // 第3到n行，和你的代码逻辑完全一致
    for (let i = 3; i <= n; i++) {
      a[i] = 1
      // 从后往前更新，避免覆盖
      for (let j = i - 1; j > 1; j--) {
        a[j] = a[j] + a[j - 1]
      }
      // 拼接行内容
      let line = ''
      for (let j = 1; j <= i; j++) {
        line += a[j] + ' '
      }
      output.value += line.trim() + '\n'
    }

    return
  }

  // 非杨辉三角代码的提示
  output.value = "未识别到特定的杨辉三角特征码，或者是其他类型的代码。\n(当前支持C语言/JS语言的杨辉三角递推代码片段)"
}
</script>

<style scoped>
.code-runner-container {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  width: 100%;
  padding: 0.75rem;
  border-radius: 1rem;
  background: #0f111a;
  border: 1px solid #2f3340;
  overflow: visible;
}

.code-display {
  background: #141820;
  border-radius: 0.8rem;
  overflow: auto;
}

.code-editor {
  width: 100%;
  min-height: 180px;
  border: none;
  outline: none;
  resize: vertical;
  background: transparent;
  color: #e5e7eb;
  font-family: monospace;
  font-size: 0.9rem;
  padding: 0.8rem;
}

.run-button {
  padding: 0.8rem;
  border-radius: 0.8rem;
  border: none;
  background: linear-gradient(135deg, #4f7cff, #7c4dff);
  color: white;
  font-weight: bold;
  cursor: pointer;
  transition: opacity 0.2s;
}

.run-button:hover {
  opacity: 0.9;
}

.output-console {
  background: #11131e;
  border-radius: 0.8rem;
  padding: 0.9rem;
  color: #8df8a1;
  font-family: monospace;
  font-size: 0.85rem;
  max-height: 220px;
  overflow-y: auto;
  border: 1px solid #2f3340;
}

.output-header {
  color: #7dd3fc;
  margin-bottom: 0.5rem;
  font-weight: bold;
}

.output-console pre {
  margin: 0;
  white-space: pre-wrap;
  word-break: break-word;
}
</style>