import{C as e,L as t,T as n,X as r,Z as i,_ as a,_t as o,b as s,g as c,h as l,ht as u,l as d,q as f,st as p,v as m,vt as h,x as g,y as _,yt as v}from"./modules/shiki-Csu1_Fu6.js";import{et as y,mt as b,tt as x}from"./index-A6RQAZeu.js";import{t as S}from"./right-sidebar-CGwP7pdO.js";var C={key:0,class:`output-console`},w=b(e({__name:`CodeRunner6`,props:{code:{},height:{default:450},outputHeight:{default:140}},setup(e){let{$slidev:n,$nav:r,$clicksContext:a,$clicks:o,$page:s,$renderContext:u,$frontmatter:g}=x(),y=e,b=p(y.code),S=p(``),w=p(!1);f(()=>y.code,e=>{b.value=e});let T=l(()=>Math.max(120,y.height-y.outputHeight-120)),E=()=>{S.value=``,w.value=!0;let e=b.value.replace(/\s/g,``);if((e.includes(`dis=500`)||e.includes(`dis=500.0`))&&e.includes(`while(dis<1000`)&&(e.includes(`500/(2*k-1)`)||e.includes(`500.0/(2*k-1)`))){let e=500,t=1,n=500;for(S.value+=`start:
`,S.value+=`----------------------------------------
`;e<1e3;)S.value+=`storepoint: ${t}, length: ${1e3-e}, oil: ${n}\n`,t++,e+=500/(2*t-1),n=500*t;n=500*(t-1)+(1e3-e)*(2*t-1),S.value+=`storepoint: ${t}, length: 0, oil: ${n}\n`,S.value+=`----------------------------------------
`;return}S.value=`unsupported code`};return(n,r)=>(t(),_(`div`,{class:`code-runner-container`,style:h({maxHeight:e.height+`px`})},[c(`div`,{class:`code-display`,style:h({maxHeight:T.value+`px`})},[i(c(`textarea`,{"onUpdate:modelValue":r[0]||=e=>b.value=e,class:`code-editor`,spellcheck:`false`},null,512),[[d,b.value]])],4),c(`button`,{type:`button`,onClick:E,class:`run-button`},` ▶ 运行（安全模式） `),w.value?(t(),_(`div`,C,[r[1]||=c(`div`,{class:`output-header`},`📤 模拟运行结果：`,-1),c(`pre`,null,v(S.value),1)])):m(`v-if`,!0)],4))}}),[[`__scopeId`,`data-v-57c81d43`]]),T={class:`flex items-center justify-between gap-2 mt-1`},E={key:0},D={key:1},O={key:0},k={key:1},A={key:0,class:`mt-3`},j={key:1,class:`mt-3`},M={key:2,class:`mt-3 p-4 bg-gray-800 text-white rounded-xl`},N=`
let dis = 500, k = 1, oil = 500;

console.log("storepoint: 1, length: " + (1000 - dis) + ", oil: " + oil);

while (dis < 1000) {
  k++;
  dis += 500 / (2 * k - 1);
  oil = 500 * k;
  console.log("storepoint: " + k + ", length: " + Math.round(1000 - dis) + ", oil: " + oil);
}

// 最后一段
let finalOil = 500 * (k - 1) + (1000 - dis) * (2 * k - 1);
console.log("storepoint: " + k + ", length: 0, oil: " + finalOil);
`,P=`#include <stdio.h>

int main() {
    int k = 1;
    double dis = 500.0, oil = 500.0;

    printf("storepoint: %d, length: %.0f, oil: %.0f\\n", k, 1000 - dis, oil);

    while (dis < 1000) {
        k++;
        dis += 500.0 / (2 * k - 1);
        oil = 500.0 * k;
        printf("storepoint: %d, length: %.0f, oil: %.0f\\n", k, 1000 - dis, oil);
    }

    // 最后一段
    double finalOil = 500.0 * (k - 1) + (1000 - dis) * (2 * k - 1);
    printf("storepoint: %d, length: 0, oil: %.0f\\n", k, finalOil);

    return 0;
}`,F={__name:`slides.md__slidev_16`,setup(e){let{$slidev:i,$nav:l,$clicksContext:d,$clicks:f,$page:h,$renderContext:v,$frontmatter:b}=x();d.setup();let C=p({js:!1,c:!1,anim:!1});return(e,i)=>{let l=w;return t(),a(S,o(n(u(y)(u(b),15))),{default:r(()=>[c(`div`,T,[i[4]||=c(`div`,{class:`font-semibold text-base opacity-80 whitespace-nowrap`},` 沙漠运油问题（倒推法） `,-1),c(`button`,{onClick:i[0]||=e=>C.value.js=!C.value.js,class:`px-2 py-0.5 bg-slate-700 text-slate-200 rounded-lg hover:bg-slate-600 text-xs`},[i[2]||=s(` 📋 查看代码(JavaScript) `,-1),C.value.js?(t(),_(`span`,E,`▼`)):(t(),_(`span`,D,`▶`))]),c(`button`,{onClick:i[1]||=e=>C.value.c=!C.value.c,class:`px-2 py-0.5 bg-slate-700 text-slate-200 rounded-lg hover:bg-slate-600 text-xs`},[i[3]||=s(` 📋 查看代码(C语言) `,-1),C.value.c?(t(),_(`span`,O,`▼`)):(t(),_(`span`,k,`▶`))]),m(`<button
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
  </button>`)]),C.value.js?(t(),_(`div`,A,[g(l,{code:N})])):m(`v-if`,!0),C.value.c?(t(),_(`div`,j,[g(l,{code:P})])):m(`v-if`,!0),C.value.anim?(t(),_(`div`,M,` 🚗 动画演示：倒推建立油库过程（从终点到起点） `)):m(`v-if`,!0),m(` ✨ 4.4 迭代法解方程 `),m(` ✨ 4.4 迭代法解方程 `),m(` ✨ 4.4 迭代法解方程 `),m(` ✨ 4.4 迭代法解方程 `)]),_:1},16)}}};export{F as default};