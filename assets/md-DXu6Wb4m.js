import{C as e,L as t,T as n,X as r,Z as i,_ as a,_t as o,b as s,g as c,h as l,ht as u,l as d,q as f,st as p,v as m,vt as h,x as g,y as _,yt as v}from"./modules/shiki-Csu1_Fu6.js";import{et as y,mt as b,tt as x}from"./index-A6RQAZeu.js";import{t as S}from"./CodeRunner-RdIzpqD7.js";import{t as C}from"./right-sidebar-CGwP7pdO.js";var w={key:0,class:`output-console`},T=b(e({__name:`CodeRunner2`,props:{code:{},height:{default:450},outputHeight:{default:140}},setup(e){let{$slidev:n,$nav:r,$clicksContext:a,$clicks:o,$page:s,$renderContext:u,$frontmatter:g}=x(),y=e,b=p(y.code),S=p(``),C=p(!1);f(()=>y.code,e=>{b.value=e});let T=l(()=>Math.max(120,y.height-y.outputHeight-120)),E=()=>{S.value=``,C.value=!0;let e=b.value;if(e.includes(`%`)&&e.includes(`while`)){let e=48,t=18;for(S.value+=`start: a=${e}, b=${t}\n`;t!==0;){let n=e%t;S.value+=`a=${e}, b=${t}, c=${n}\n`,e=t,t=n}S.value+=`\nresult: gcd = ${e}`;return}S.value=`unsupported code`};return(n,r)=>(t(),_(`div`,{class:`code-runner-container`,style:h({maxHeight:e.height+`px`})},[c(`div`,{class:`code-display`,style:h({maxHeight:T.value+`px`})},[i(c(`textarea`,{"onUpdate:modelValue":r[0]||=e=>b.value=e,class:`code-editor`,spellcheck:`false`},null,512),[[d,b.value]])],4),c(`button`,{type:`button`,onClick:E,class:`run-button`},` ▶ 运行（安全模式） `),C.value?(t(),_(`div`,w,[r[1]||=c(`div`,{class:`output-header`},`📤 模拟运行结果：`,-1),c(`pre`,null,v(S.value),1)])):m(`v-if`,!0)],4))}}),[[`__scopeId`,`data-v-6efe8f12`]]),E={class:`flex items-center justify-between gap-2 mt-1`},D={class:`flex gap-1`},O={key:0,class:`text-green-400`},k={key:1,class:`text-blue-400`},A={key:0,class:`text-green-400`},j={key:1,class:`text-blue-400`},M={key:0,class:`mt-3`},N={key:1,class:`mt-3`},P={key:2,class:`mt-3 p-4 bg-gray-800 text-white rounded-xl`},F=`
const gcd = (a, b) => {
  while (b !== 0) {
    const c = a % b;
    console.log(a, b, c);
    a = b;
    b = c;
  }
  console.log('gcd =', a);
};

gcd(48, 18);
`,I=`#include <stdio.h>

int main() {
    int a = 48, b = 18, c;

    while (b != 0) {
        c = a % b;
        a = b;
        b = c;
    }

    printf("gcd = %d\\n", a);
    return 0;
}`,L={__name:`slides.md__slidev_10`,setup(e){let{$slidev:i,$nav:l,$clicksContext:d,$clicks:f,$page:h,$renderContext:v,$frontmatter:b}=x();d.setup();let w=p({js:!1,c:!1}),L=p(!1),R=e=>{w.value[e]=!w.value[e]};return(e,i)=>{let l=S,d=T;return t(),a(C,o(n(u(y)(u(b),9))),{default:r(()=>[c(`div`,E,[m(` 标题 `),i[4]||=c(`div`,{class:`font-semibold text-base opacity-80 whitespace-nowrap`},` 递推法求最大公约数 `,-1),m(` 按钮组 `),c(`div`,D,[m(` JS代码 `),c(`button`,{onClick:i[0]||=e=>R(`js`),class:`px-2 py-0.5 bg-slate-700 text-slate-200 rounded-lg hover:bg-slate-600 text-xs`},[i[2]||=s(` 📋 查看代码(JavaScript) `,-1),w.value.js?(t(),_(`span`,O,`▼`)):(t(),_(`span`,k,`▶`))]),m(` C代码 `),c(`button`,{onClick:i[1]||=e=>R(`c`),class:`px-2 py-0.5 bg-slate-700 text-slate-200 rounded-lg hover:bg-slate-600 text-xs`},[i[3]||=s(` 📋 查看代码(C语言) `,-1),w.value.c?(t(),_(`span`,A,`▼`)):(t(),_(`span`,j,`▶`))]),m(` 动画 `),m(`<button
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
  </button>`)])]),m(` JS代码 `),w.value.js?(t(),_(`div`,M,[g(l,{code:F})])):m(`v-if`,!0),m(` C代码 `),w.value.c?(t(),_(`div`,N,[g(d,{code:I})])):m(`v-if`,!0),m(` 动画 `),L.value?(t(),_(`div`,P,` 📊 动画演示区域（后续你可以接递推步骤） `)):m(`v-if`,!0),m(` ✨ 4.3.1 倒推法(例1：猴子吃桃问题) `),m(` ✨ 4.3.1 倒推法(例1：猴子吃桃问题) `),m(` ✨ 4.3.1 倒推法(例1：猴子吃桃问题) `),m(` ✨ 4.3.1 倒推法(例1：猴子吃桃问题) `)]),_:1},16)}}};export{L as default};