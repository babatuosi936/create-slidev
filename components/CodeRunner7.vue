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

  const code = editableCode.value.replace(/\s/g, '')

const hasNewton =
  code.includes('x0') &&
  (code.includes('fx') || code.includes('f(')) &&
  (code.includes('dfx') || code.includes('df(')) &&
  code.includes('x1') &&
  code.includes('x0-') &&
  code.includes('/')

if (hasNewton) {
  let x0 = -1.0
  const tolerance = 1e-6
  const maxIter = 100

  output.value += "迭代过程：\n"
  output.value += "k\t x_k\t f(x_k)\t f'(x_k)\t x_{k+1}\n"

  for (let k = 0; k < maxIter; k++) {
    const fx = Math.pow(x0, 3) + 2 * Math.pow(x0, 2) + 3 * x0 + 4
    const dfx = 3 * Math.pow(x0, 2) + 4 * x0 + 3

    if (Math.abs(dfx) < 1e-10) {
      output.value += "\n❌ 导数接近零，无法继续迭代\n"
      return
    }

    const x1 = x0 - fx / dfx

    output.value += `${k}\t ${x0.toFixed(6)}\t ${fx.toFixed(6)}\t ${dfx.toFixed(6)}\t ${x1.toFixed(6)}\n`

    if (Math.abs(x1 - x0) < tolerance) {
      output.value += "\n✅ 收敛！最终结果：\n"
      output.value += `x ≈ ${x1.toFixed(8)}\n`
      return
    }

    x0 = x1
  }

  output.value += "\n❌ 达到最大迭代次数，未收敛\n"
  return
}

  // fallback
  output.value = "未识别到牛顿迭代法特征码"
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