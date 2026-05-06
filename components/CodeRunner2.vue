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

  const code = editableCode.value

  // gcd 模拟
  if (code.includes('%') && code.includes('while')) {
    let a = 48
    let b = 18

    output.value += `start: a=${a}, b=${b}\n`

    while (b !== 0) {
      const c = a % b
      output.value += `a=${a}, b=${b}, c=${c}\n`
      a = b
      b = c
    }

    output.value += `\nresult: gcd = ${a}`
    return
  }

  output.value = 'unsupported code'
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

  /* ✅ 修复点1：允许内容自然扩展 */
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
}

/* ✅ 修复点2：输出区不会溢出 */
.output-console {
  background: #11131e;
  border-radius: 0.8rem;
  padding: 0.9rem;
  color: #8df8a1;
  font-family: monospace;
  font-size: 0.85rem;

  max-height: 220px;
  overflow-y: auto;   /* ⭐关键 */
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