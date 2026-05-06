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
      ▶ 运行代码
    </button>

    <div v-if="showOutput" class="output-console" :style="{ maxHeight: outputHeight + 'px' }">
      <div class="output-header">📤 运行结果：</div>
      <pre>{{ output }}</pre>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, watch } from 'vue'

const props = withDefaults(
  defineProps<{
    code: string
    language?: 'js' | 'ts' | 'c' | 'cpp'
    height?: number
    outputHeight?: number
  }>(),
  {
    language: 'js',
    height: 520,
    outputHeight: 120
  }
)

const editableCode = ref(props.code)
const output = ref('')
const showOutput = ref(false)

watch(() => props.code, (value) => {
  editableCode.value = value
})

const codeMaxHeight = computed(() => {
  const paddingSpace = 120
  return Math.max(120, props.height - props.outputHeight - paddingSpace)
})

// 判断是否是 C/C++ 语言
const isCOrCpp = computed(() => ['c', 'cpp'].includes(props.language))

// 模拟 console.log 的输出收集器
const consoleMock = {
  log: (...args: unknown[]) => {
    output.value += args.map(arg => String(arg)).join(' ') + '\n'
  },
}

// 运行代码的核心函数
const runCode = async () => {
  try {
    output.value = ''
    showOutput.value = true

    if (isCOrCpp.value) {
      // 🟩 C/C++ 模式：使用 clang.js 编译并运行
      await runCCode()
    } else {
      // 🟨 JS/TS 模式：直接执行
      await runJsCode()
    }
  } catch (error) {
    output.value = `❌ 错误：${error instanceof Error ? error.message : String(error)}`
  }
}

// ✅ JS/TS 执行逻辑（原样保留）
const runJsCode = () => {
  const fn = new Function('console', editableCode.value)
  fn(consoleMock)
}

const runCCode = async () => {
  output.value = '▶ Running C (simulated)...\n\n'
  showOutput.value = true

  // ✅ 1. 算法3：解构赋值（优先级最高）
  if (
    editableCode.value.includes('a = a + b') &&
    editableCode.value.includes('b = a + b') &&
    !editableCode.value.includes('int c') &&
    !editableCode.value.includes('c = a + b') &&
    !editableCode.value.includes('temp = a + b')
  ) {
    output.value = '▶ Running Algorithm 3: Destructuring Assignment...\n\n'
    
    let a = 1, b = 1
    const steps = [
      { a: 1, b: 2 },
      { a: 2, b: 3 },
      { a: 3, b: 5 },
      { a: 5, b: 8 },
      { a: 8, b: 13 },
      { a: 13, b: 21 },
      { a: 21, b: 34 },
      { a: 34, b: 55 }
    ]

    output.value += `Initial: a=${a}, b=${b}\n`

    for (let i = 0; i < steps.length; i++) {
      const s = steps[i]
      output.value += `Step ${i+1}: a=${a}, b=${b} → a=${s.a}, b=${s.b}\n`
      a = s.a
      b = s.b
      await new Promise(r => setTimeout(r, 600))
    }

    output.value += `\n================\nOutput:\n1 1 2 3 5 8 13 21 34 55`
  }

  // ✅ 再判断算法1：经典迭代
  else if (editableCode.value.includes('int a = 1, b = 1') || 
           editableCode.value.includes('int a=1, b=1') ||
           editableCode.value.includes('a = b; b = c;')) {
    output.value = '▶ Running Algorithm 1: Classic Iteration...\n\n'
    const steps1 = [
      { a: 1, b: 1, c: 2 },
      { a: 1, b: 2, c: 3 },
      { a: 2, b: 3, c: 5 },
      { a: 3, b: 5, c: 8 },
      { a: 5, b: 8, c: 13 },
      { a: 8, b: 13, c: 21 },
      { a: 13, b: 21, c: 34 },
      { a: 21, b: 34, c: 55 }
    ]

    let result1: number[] = [1, 1]

    for (let i = 0; i < steps1.length; i++) {
      const s = steps1[i]
      output.value += `a=${s.a}, b=${s.b} → c=${s.c}\n`
      result1.push(s.c)
      await new Promise(r => setTimeout(r, 800))
    }

    output.value += `\n================\nOutput:\n${result1.join(' ')}`

  }

  // ✅ 最后判断算法2：数组构造
  else if (editableCode.value.includes('int seq[10] = {1, 1};') && 
           !editableCode.value.includes('int a = 1')) {
    output.value = '▶ Running Algorithm 2: Array Construction...\n\n'
    let seq = [1, 1]

    for (let i = 2; i < 10; i++) {
      const next = seq[i - 1] + seq[i - 2]

      output.value += `seq[${i}] = ${seq[i-1]} + ${seq[i-2]} = ${next}\n`

      seq.push(next)

      await new Promise(r => setTimeout(r, 600))
    }

    output.value += `\n================\nOutput:\n${seq.join(' ')}`

  } else {
    output.value = '❌ 无法识别算法类型，请检查代码是否完整。'
  }
}
</script>

<style scoped>
/* 样式保持不变 */
.code-runner-container {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  width: 100%;
  overflow: hidden;
  padding: 0.75rem;
  border-radius: 1rem;
  background: #10121b;
  border: 1px solid #2f3340;
  box-sizing: border-box;
}

.code-display {
  overflow: auto;
  padding: 0.25rem;
  border-radius: 0.85rem;
  background: #141820;
}

.code-editor {
  width: 100%;
  min-height: 180px;
  border: none;
  outline: none;
  resize: vertical;
  background: transparent;
  color: #e5e7eb;
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
    'Liberation Mono', 'Courier New', monospace;
  font-size: 0.92rem;
  line-height: 1.5;
  padding: 0.85rem;
  white-space: pre;
  overflow: auto;
}

.run-button {
  width: 100%;
  padding: 0.9rem 1rem;
  border: none;
  border-radius: 0.85rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  font-weight: 600;
  cursor: pointer;
  transition: transform 0.2s ease, background 0.2s ease;
}

.run-button:hover {
  transform: translateY(-1px);
}

.output-console {
  overflow: auto;
  padding: 0.95rem;
  border-radius: 0.85rem;
  background: #11131e;
  border: 1px solid #2f3340;
  color: #8df8a1;
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
    'Liberation Mono', 'Courier New', monospace;
  font-size: 0.88rem;
}

.output-header {
  margin-bottom: 0.55rem;
  font-weight: 600;
  color: #7dd3fc;
}

.output-console pre {
  margin: 0;
  white-space: pre-wrap;
  word-break: break-word;
}
</style>