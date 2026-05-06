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
    height: 450
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
  // ✅ 简单迭代法（稳定版识别）
  // =========================
  const hasIteration =
    code.includes('cos') ||
    code.includes('sin')

  const hasWhile =
    code.includes('while')

  const hasUpdate =
    code.includes('x_new') ||
    code.includes('y_new')

  const isSimpleIteration =
    hasIteration && hasWhile && hasUpdate

  if (isSimpleIteration) {

    let x = 0.5
    let y = 0.5
    let k = 0
    const maxIter = 100
    const tolerance = 1e-6

    output.value += "迭代过程：\n"

    while (k < maxIter) {
      let x_new = Math.cos(x)
      let y_new = Math.sin(y)

      output.value += `第${k+1}次迭代: x=${x.toFixed(6)}, y=${y.toFixed(6)} → x'=${x_new.toFixed(6)}, y'=${y_new.toFixed(6)}\n`

      if (
        Math.abs(x_new - x) < tolerance &&
        Math.abs(y_new - y) < tolerance
      ) {
        output.value += "\n✅ 收敛！最终结果：\n"
        output.value += `x ≈ ${x_new.toFixed(6)}, y ≈ ${y_new.toFixed(6)}\n`
        return
      }

      x = x_new
      y = y_new
      k++
    }

    output.value += "\n❌ 达到最大迭代次数，未收敛\n"
    return
  }

  // fallback（必须留）
  output.value = "未识别到特定的简单迭代法特征码"
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
}
</style>