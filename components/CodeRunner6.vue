<!-- CodeRunner6.vue -->
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
    height: 520,
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

  const code = editableCode.value.replace(/\s/g, '') // 去掉所有空白

// ========================
// C语言：沙漠运油问题（修复识别）
// ========================
if (
  (code.includes('dis=500') || code.includes('dis=500.0')) &&
  code.includes('while(dis<1000') &&
  (
    code.includes('500/(2*k-1)') ||
    code.includes('500.0/(2*k-1)')
  )
){
    let dis = 500
    let k = 1
    let oil = 500
    
    output.value += "start:\n"
    output.value += "----------------------------------------\n"
    
    while (dis < 1000) {
      output.value += `storepoint: ${k}, length: ${1000-dis}, oil: ${oil}\n`
      
      k++
      dis = dis + 500 / (2 * k - 1)
      oil = 500 * k
    }
    
    // 最后一次运输
    oil = 500 * (k - 1) + (1000 - dis) * (2 * k - 1)
    output.value += `storepoint: ${k}, length: 0, oil: ${oil}\n`
    output.value += "----------------------------------------\n"
    return
  }

  // fallback
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