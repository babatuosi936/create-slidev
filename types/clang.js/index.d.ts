// types/clang.js/index.d.ts
declare module 'clang.js' {
  export interface Compiler {
    compileToWasm(code: string): Promise<{
      wasm: ArrayBuffer;
    }>;
    createCompiler(): Promise<Compiler>;
  }

  export function createCompiler(): Promise<Compiler>;
}