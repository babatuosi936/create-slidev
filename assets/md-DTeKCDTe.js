import{C as e,L as t,T as n,X as r,Z as i,_ as a,_t as o,b as s,g as c,h as l,ht as u,l as d,q as f,st as p,v as m,vt as h,x as g,y as _,yt as v}from"./modules/shiki-Csu1_Fu6.js";import{et as y,mt as b,tt as x}from"./index-A6RQAZeu.js";import{t as S}from"./right-sidebar-CGwP7pdO.js";var C={key:0,class:`output-console`},w=b(e({__name:`CodeRunner5`,props:{code:{},height:{default:450}},setup(e){let{$slidev:n,$nav:r,$clicksContext:a,$clicks:o,$page:s,$renderContext:u,$frontmatter:g}=x(),y=e,b=p(y.code),S=p(``),w=p(!1);f(()=>y.code,e=>{b.value=e});let T=l(()=>y.height-200),E=()=>{S.value=``,w.value=!0;let e=b.value,t=e.includes(`cos`)||e.includes(`sin`),n=e.includes(`while`),r=e.includes(`x_new`)||e.includes(`y_new`);if(t&&n&&r){let e=.5,t=.5,n=0,r=1e-6;for(S.value+=`迭代过程：
`;n<100;){let i=Math.cos(e),a=Math.sin(t);if(S.value+=`第${n+1}次迭代: x=${e.toFixed(6)}, y=${t.toFixed(6)} → x'=${i.toFixed(6)}, y'=${a.toFixed(6)}\n`,Math.abs(i-e)<r&&Math.abs(a-t)<r){S.value+=`
✅ 收敛！最终结果：
`,S.value+=`x ≈ ${i.toFixed(6)}, y ≈ ${a.toFixed(6)}\n`;return}e=i,t=a,n++}S.value+=`
❌ 达到最大迭代次数，未收敛
`;return}S.value=`未识别到特定的简单迭代法特征码`};return(n,r)=>(t(),_(`div`,{class:`code-runner-container`,style:h({maxHeight:e.height+`px`})},[c(`div`,{class:`code-display`,style:h({maxHeight:T.value+`px`})},[i(c(`textarea`,{"onUpdate:modelValue":r[0]||=e=>b.value=e,class:`code-editor`,spellcheck:`false`},null,512),[[d,b.value]])],4),c(`button`,{type:`button`,onClick:E,class:`run-button`},` ▶ 运行（安全模式） `),w.value?(t(),_(`div`,C,[r[1]||=c(`div`,{class:`output-header`},`📤 模拟运行结果：`,-1),c(`pre`,null,v(S.value),1)])):m(`v-if`,!0)],4))}}),[[`__scopeId`,`data-v-48d193e5`]]),T={class:`flex items-center justify-between gap-2 mt-1`},E={key:0},D={key:1},O={key:0},k={key:1},A={key:0,class:`mt-3`},j={key:1,class:`mt-3`},M={key:2,class:`mt-3 p-4 bg-gray-800 text-white rounded-xl`},N=`
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
`,P=`#include <stdio.h>
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
}`,F={__name:`slides.md__slidev_19`,setup(e){let{$slidev:i,$nav:l,$clicksContext:d,$clicks:f,$page:h,$renderContext:v,$frontmatter:b}=x();d.setup();let C=p({js:!1,c:!1,anim:!1});return(e,i)=>{let l=w;return t(),a(S,o(n(u(y)(u(b),18))),{default:r(()=>[c(`div`,T,[i[4]||=c(`div`,{class:`font-semibold text-base opacity-80 whitespace-nowrap`},` 简单迭代法求方程组根 `,-1),c(`button`,{onClick:i[0]||=e=>C.value.js=!C.value.js,class:`px-2 py-0.5 bg-slate-700 text-slate-200 rounded-lg hover:bg-slate-600 text-xs`},[i[2]||=s(` 📋 查看代码(JavaScript) `,-1),C.value.js?(t(),_(`span`,E,`▼`)):(t(),_(`span`,D,`▶`))]),c(`button`,{onClick:i[1]||=e=>C.value.c=!C.value.c,class:`px-2 py-0.5 bg-slate-700 text-slate-200 rounded-lg hover:bg-slate-600 text-xs`},[i[3]||=s(` 📋 查看代码(C语言) `,-1),C.value.c?(t(),_(`span`,O,`▼`)):(t(),_(`span`,k,`▶`))]),m(`<button
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
  </button>`)]),C.value.js?(t(),_(`div`,A,[g(l,{code:N})])):m(`v-if`,!0),C.value.c?(t(),_(`div`,j,[g(l,{code:P})])):m(`v-if`,!0),C.value.anim?(t(),_(`div`,M,` 🔄 动画演示：简单迭代法求解过程（逐步逼近） `)):m(`v-if`,!0),m(` ✨ 4.4.2 迭代法解方程(牛顿-拉夫逊方法) `),m(` ✨ 4.4.2 迭代法解方程(牛顿-拉夫逊方法) `),m(` ✨ 4.4.2 迭代法解方程(牛顿-拉夫逊方法) `),m(` ✨ 4.4.2 迭代法解方程(牛顿-拉夫逊方法) `)]),_:1},16)}}};export{F as default};