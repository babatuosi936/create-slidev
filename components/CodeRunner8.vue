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
    outputHeight?: number
  }>(),
  {
    height: 450,
    outputHeight: 140
  }
)

const editableCode = ref(props.code)
const output = ref('')
const showOutput = ref(false)

watch(() => props.code, (val) => {
  editableCode.value = val
})

const codeMaxHeight = computed(() => {
  const padding = 120
  return Math.max(120, props.height - props.outputHeight - padding)
})

const runCode = () => {
  output.value = ''
  showOutput.value = true

  const code = editableCode.value.replace(/\s+/g, '') // 去空格（关键）

  // ========================
  // ✅ 二分法识别（稳定增强版）
  // ========================
  const isBisection =
    (
      /a\s*=\s*0/.test(code) &&
      /b\s*=\s*2/.test(code)
    ) &&
    (
      /c\s*=\s*\(a\+b\)\/2/.test(code) ||
      /c=\(a\+b\)\/2/.test(code)
    ) &&
    (
      /fa\*fc<0/.test(code) ||
      /f\(a\)\*f\(c\)/.test(code)
    ) &&
    (
      code.includes('math.pow') ||
      code.includes('pow') ||
      code.includes('^') ||
      code.includes('x')
    )

  if (!isBisection) {
    output.value = "❌ 未识别到二分法特征代码"
    return
  }

  // ========================
  // ✅ 真实二分法模拟
  // ========================
  let a = 0
  let b = 2
  const tolerance = 1e-6
  const maxIter = 50

  output.value += "📌 二分法迭代过程：\n"
  output.value += "k\t a\t f(a)\t b\t f(b)\t c\t f(c)\n"

  for (let k = 0; k < maxIter; k++) {
    const fa = Math.pow(a, 3)/2 + 2*Math.pow(a, 2) - 8
    const fb = Math.pow(b, 3)/2 + 2*Math.pow(b, 2) - 8
    const c = (a + b) / 2
    const fc = Math.pow(c, 3)/2 + 2*Math.pow(c, 2) - 8

    output.value += `${k}\t${a.toFixed(4)}\t${fa.toFixed(4)}\t${b.toFixed(4)}\t${fb.toFixed(4)}\t${c.toFixed(4)}\t${fc.toFixed(4)}\n`

    if (Math.abs(fc) < tolerance || Math.abs(b - a) < tolerance) {
      output.value += `\n✅ 收敛：x ≈ ${c.toFixed(8)}`
      return
    }

    if (fa * fc < 0) {
      b = c
    } else {
      a = c
    }
  }

  output.value += "\n❌ 未收敛（达到最大迭代次数）"
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