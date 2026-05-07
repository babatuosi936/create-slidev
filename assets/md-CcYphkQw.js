import{C as e,L as t,T as n,X as r,Z as i,_ as a,_t as o,b as s,g as c,gt as l,h as u,ht as d,l as f,p,q as m,st as h,v as g,vt as _,x as v,y,yt as b,z as x}from"./modules/shiki-Csu1_Fu6.js";import{et as S,mt as C,tt as w}from"./index-BI_Bs31I.js";import{t as T}from"./right-sidebar-B508FEUa.js";var E={key:0,class:`output-console`},D=C(e({__name:`CodeRunner4`,props:{code:{},height:{default:450}},setup(e){let{$slidev:n,$nav:r,$clicksContext:a,$clicks:o,$page:s,$renderContext:l,$frontmatter:d}=w(),p=e,v=h(p.code),x=h(``),S=h(!1);m(()=>p.code,e=>{v.value=e});let C=u(()=>p.height-200),T=()=>{x.value=``,S.value=!0;let e=v.value,t=/a\[j\]\s*=\s*a\[j\]\s*\+\s*a\[j\s*-\s*1\]/.test(e),n=/for\s*\(.*j\s*=\s*i\s*-\s*1.*j\s*>\s*1/.test(e),r=/a\[[0-9]+\]\s*=\s*1/.test(e);if(t&&n&&r){let e=Array(100).fill(0);x.value+=`1
`,e[1]=e[2]=1,x.value+=`${e[1]} ${e[2]}\n`;for(let t=3;t<=5;t++){e[t]=1;for(let n=t-1;n>1;n--)e[n]=e[n]+e[n-1];let n=``;for(let r=1;r<=t;r++)n+=e[r]+` `;x.value+=n.trim()+`
`}return}x.value=`未识别到特定的杨辉三角特征码，或者是其他类型的代码。
(当前支持C语言/JS语言的杨辉三角递推代码片段)`};return(n,r)=>(t(),y(`div`,{class:`code-runner-container`,style:_({maxHeight:e.height+`px`})},[c(`div`,{class:`code-display`,style:_({maxHeight:C.value+`px`})},[i(c(`textarea`,{"onUpdate:modelValue":r[0]||=e=>v.value=e,class:`code-editor`,spellcheck:`false`},null,512),[[f,v.value]])],4),c(`button`,{type:`button`,onClick:T,class:`run-button`},` ▶ 运行（安全模式） `),S.value?(t(),y(`div`,E,[r[1]||=c(`div`,{class:`output-header`},`📤 模拟运行结果：`,-1),c(`pre`,null,b(x.value),1)])):g(`v-if`,!0)],4))}}),[[`__scopeId`,`data-v-afd826e7`]]),O={class:`flex items-center justify-between gap-2 mt-1`},k={key:0},A={key:1},j={key:0},M={key:1},N={key:0,class:`mt-3`},P={key:1,class:`mt-3`},F={key:2,class:`mt-3 p-4 bg-gray-800 text-white rounded-xl`},I={key:3,class:`mt-3 p-3 bg-slate-800 text-white rounded-lg`},L={class:`flex items-center gap-2 mb-3`},R={class:`text-xs opacity-70`},z={class:`text-xs space-y-1 mb-4`},B={class:`w-full h-64 bg-gray-900 rounded-lg overflow-hidden border border-gray-700 flex items-center justify-center`},V={class:`text-center space-y-2`},H=`
let n = 5;
let a = new Array(100).fill(0);

console.log("1");

a[1] = a[2] = 1;
console.log(a[1], a[2]);

for (let i = 3; i <= n; i++) {
  a[i] = 1;

  // 杨辉三角核心递推逻辑（从后往前，避免数据覆盖）
  for (let j = i - 1; j > 1; j--) {
    a[j] = a[j] + a[j - 1];
  }

  let line = "";
  for (let j = 1; j <= i; j++) {
    line += a[j] + " ";
  }
  console.log(line);
}
`,U=`#include <stdio.h>

int main() {
    int n = 5; // 假设打印5行
    int a[100] = {0}; // 初始化数组为0
    a[1] = 1; // 第一行第一个是1

    printf("1\\n");

    for (int i = 2; i <= n; i++) {
        a[i] = 1; // 每一行的最后一个数设为1

        // 核心：从后往前更新（避免数据覆盖）
        for (int j = i - 1; j > 1; j--) {
            a[j] = a[j] + a[j - 1];
        }

        // 打印当前行
        for (int j = 1; j <= i; j++) {
            printf("%d ", a[j]);
        }
        printf("\\n");
    }
    return 0;
}`,W={__name:`slides.md__slidev_14`,setup(e){let{$slidev:i,$nav:u,$clicksContext:f,$clicks:m,$page:_,$renderContext:C,$frontmatter:E}=w();f.setup();let W=h({js:!1,c:!1,anim:!1}),G=h([[1]]),K=h([1]),q=h(0);function J(){if(q.value>=5)return;let e=G.value[q.value],t=[1];for(let n=1;n<e.length;n++)t.push(e[n-1]+e[n]);t.push(1),G.value.push(t),K.value=t,q.value++}return(e,i)=>{let u=D;return t(),a(T,o(n(d(S)(d(E),13))),{default:r(()=>[g(` ================= 杨辉三角动画演示 ================= `),c(`div`,O,[i[6]||=c(`div`,{class:`font-semibold text-base opacity-80 whitespace-nowrap`},` 杨辉三角（递推生成） `,-1),c(`button`,{onClick:i[0]||=e=>W.value.js=!W.value.js,class:`px-2 py-0.5 bg-slate-700 text-slate-200 rounded-lg hover:bg-slate-600 text-xs`},[i[4]||=s(` 📋 查看代码(JavaScript) `,-1),W.value.js?(t(),y(`span`,k,`▼`)):(t(),y(`span`,A,`▶`))]),c(`button`,{onClick:i[1]||=e=>W.value.c=!W.value.c,class:`px-2 py-0.5 bg-slate-700 text-slate-200 rounded-lg hover:bg-slate-600 text-xs`},[i[5]||=s(` 📋 查看代码(C语言) `,-1),W.value.c?(t(),y(`span`,j,`▼`)):(t(),y(`span`,M,`▶`))]),W.value.anim?(t(),y(`button`,{key:1,onClick:i[3]||=e=>W.value.anim=!1,class:`px-2 py-0.5 bg-red-500 text-white rounded-lg hover:bg-red-600 text-xs`},` ⏹️ 停止演示 `)):(t(),y(`button`,{key:0,onClick:i[2]||=e=>W.value.anim=!0,class:`px-2 py-0.5 bg-blue-500 text-white rounded-lg hover:bg-blue-600 text-xs`},` 🎬 开始动画演示 `))]),g(` ================= 代码区 ================= `),W.value.js?(t(),y(`div`,N,[v(u,{code:H})])):g(`v-if`,!0),W.value.c?(t(),y(`div`,P,[v(u,{code:U})])):g(`v-if`,!0),g(` ================= 动画区 ================= `),W.value.anim?(t(),y(`div`,F,` 📊 动画演示：递推生成杨辉三角 `)):g(`v-if`,!0),W.value.anim?(t(),y(`div`,I,[c(`div`,L,[c(`button`,{onClick:J,class:`px-2 py-0.5 bg-green-600 text-white rounded-lg text-xs`},` ▶ 下一步 `),c(`span`,R,` 第 `+b(q.value)+` 步 `,1)]),g(` 显示当前行 `),c(`div`,z,[c(`div`,null,`🎯 当前行: `+b(K.value.join(` `)),1),i[7]||=c(`div`,null,`💡 计算规则: a[j] = a[j] + a[j-1]`,-1)]),g(` 三角形展示区 `),c(`div`,B,[c(`div`,V,[g(` 每一行单独渲染，并居中 `),(t(!0),y(p,null,x(G.value,(e,n)=>(t(),y(`div`,{key:n,class:`flex justify-center gap-1 mb-1`},[(t(!0),y(p,null,x(e,(e,r)=>(t(),y(`div`,{class:l([`w-8 h-8 flex items-center justify-center text-sm font-mono`,n===q.value-1?`bg-yellow-400 text-black`:`bg-gray-700 text-gray-300`])},b(e),3))),256))]))),128))])])])):g(`v-if`,!0),g(` ✨ 4.3.3 倒推法(例3：穿越沙漠问题) `),g(` ✨ 4.3.3 倒推法(例3：穿越沙漠问题) `),g(` ✨ 4.3.3 倒推法(例3：穿越沙漠问题) `),g(` ✨ 4.3.3 倒推法(例3：穿越沙漠问题) `)]),_:1},16)}}};export{W as default};