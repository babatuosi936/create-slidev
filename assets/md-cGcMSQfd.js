import{C as e,F as t,L as n,T as r,X as i,Z as a,_ as o,_t as s,b as c,g as l,h as u,ht as d,l as f,q as p,st as m,v as h,vt as g,x as _,y as v,yt as y}from"./modules/shiki-Csu1_Fu6.js";import{et as b,mt as x,tt as S}from"./index-BI_Bs31I.js";import{t as C}from"./right-sidebar-B508FEUa.js";var w={key:0,class:`output-console`},T=x(e({__name:`CodeRunner8`,props:{code:{},height:{default:450},outputHeight:{default:140}},setup(e){let{$slidev:t,$nav:r,$clicksContext:i,$clicks:o,$page:s,$renderContext:c,$frontmatter:d}=S(),_=e,b=m(_.code),x=m(``),C=m(!1);p(()=>_.code,e=>{b.value=e});let T=u(()=>Math.max(120,_.height-_.outputHeight-120)),E=()=>{x.value=``,C.value=!0;let e=b.value.replace(/\s+/g,``);if(!(/a\s*=\s*0/.test(e)&&/b\s*=\s*2/.test(e)&&(/c\s*=\s*\(a\+b\)\/2/.test(e)||/c=\(a\+b\)\/2/.test(e))&&(/fa\*fc<0/.test(e)||/f\(a\)\*f\(c\)/.test(e))&&(e.includes(`math.pow`)||e.includes(`pow`)||e.includes(`^`)||e.includes(`x`)))){x.value=`❌ 未识别到二分法特征代码`;return}let t=0,n=2,r=1e-6;x.value+=`📌 二分法迭代过程：
`,x.value+=`k	 a	 f(a)	 b	 f(b)	 c	 f(c)
`;for(let e=0;e<50;e++){let i=t**3/2+2*t**2-8,a=n**3/2+2*n**2-8,o=(t+n)/2,s=o**3/2+2*o**2-8;if(x.value+=`${e}\t${t.toFixed(4)}\t${i.toFixed(4)}\t${n.toFixed(4)}\t${a.toFixed(4)}\t${o.toFixed(4)}\t${s.toFixed(4)}\n`,Math.abs(s)<r||Math.abs(n-t)<r){x.value+=`\n✅ 收敛：x ≈ ${o.toFixed(8)}`;return}i*s<0?n=o:t=o}x.value+=`
❌ 未收敛（达到最大迭代次数）`};return(t,r)=>(n(),v(`div`,{class:`code-runner-container`,style:g({maxHeight:e.height+`px`})},[l(`div`,{class:`code-display`,style:g({maxHeight:T.value+`px`})},[a(l(`textarea`,{"onUpdate:modelValue":r[0]||=e=>b.value=e,class:`code-editor`,spellcheck:`false`},null,512),[[f,b.value]])],4),l(`button`,{type:`button`,onClick:E,class:`run-button`},` ▶ 运行（安全模式） `),C.value?(n(),v(`div`,w,[r[1]||=l(`div`,{class:`output-header`},`📤 模拟运行结果：`,-1),l(`pre`,null,y(x.value),1)])):h(`v-if`,!0)],4))}}),[[`__scopeId`,`data-v-56e11982`]]),E={class:`flex items-center justify-between gap-2 mt-1`},D={key:0},O={key:1},k={key:0},A={key:1},j={key:0,class:`mt-3`},M={key:1,class:`mt-3`},N={key:2,class:`mt-3 p-4 bg-gray-800 text-white rounded-xl`},P={key:3,class:`mt-3 p-3 bg-slate-800 text-white rounded-lg`},F={class:`flex items-center gap-2 mb-3`},I={class:`text-xs opacity-70`},L={class:`text-xs space-y-1`},R={class:`mt-1 pt-1 border-t border-slate-600`},z={class:`mt-4 w-full h-48 bg-gray-900 rounded-lg overflow-hidden border border-gray-700`},B=`// 二分法求方程根
function f(x) {
  return x*x*x/2 + 2*x*x - 8;
}

let a = 0, b = 2;

while (Math.abs(b - a) > 1e-6) {
  let c = (a + b) / 2;
  if (f(a) * f(c) < 0) {
    b = c;
  } else {
    a = c;
  }
  console.log(\`区间: [\${a.toFixed(4)}, \${b.toFixed(4)}]\`);
}

console.log(\`根约为: \${((a + b) / 2).toFixed(6)}\`);`,V=`#include <stdio.h>
#include <math.h>

double f(double x) {
  return x*x*x/2 + 2*x*x - 8;
}

int main() {
  double a = 0, b = 2;
  double eps = 1e-6;

  while (fabs(b - a) > eps) {
    double c = (a + b) / 2;
    if (f(a) * f(c) < 0) {
      b = c;
    } else {
      a = c;
    }
    printf("区间: [%.4f, %.4f]\\n", a, b);
  }

  printf("根约为: %.6f\\n", (a + b) / 2);
  return 0;
}`,H={__name:`slides.md__slidev_23`,setup(e){let{$slidev:a,$nav:u,$clicksContext:f,$clicks:p,$page:g,$renderContext:x,$frontmatter:w}=S();f.setup();let H=m({js:!1,c:!1,anim:!1}),U=m(0),W=m(0),G=m(2),K=m(0);function q(e){return e**3/2+2*e**2-8}function J(){let e=q(W.value),t=(W.value+G.value)/2,n=q(t);K.value=t,e*n<0?G.value=t:W.value=t,U.value++,X()}let Y=m(null);function X(){let e=Y.value;if(!e)return;let t=e.getContext(`2d`),n=e.width,r=e.height;t.clearRect(0,0,n,r);let i=n/2;r/20,t.beginPath(),t.strokeStyle=`#ffffff`,t.lineWidth=1;let a=r-10/20*r;t.moveTo(0,a),t.lineTo(n,a);let o=0*i;t.moveTo(o,0),t.lineTo(o,r),t.stroke(),t.fillStyle=`#ffffff`,t.font=`10px Arial`;for(let e=0;e<=2;e+=.5){let n=(e-0)*i;t.beginPath(),t.moveTo(n,a-5),t.lineTo(n,a+5),t.stroke(),t.fillText(e.toFixed(1),n-10,a+15)}for(let e=-10;e<=10;e+=2){let n=r-(e- -10)/20*r;t.beginPath(),t.moveTo(o-5,n),t.lineTo(o+5,n),t.stroke(),t.fillText(e.toFixed(0),o-25,n+4)}t.beginPath(),t.strokeStyle=`#60a5fa`,t.lineWidth=2;for(let e=0;e<=2;e+=.01){let n=q(e),a=(e-0)*i,o=r-(n- -10)/20*r;e===0?t.moveTo(a,o):t.lineTo(a,o)}t.stroke();let s=(W.value-0)*i,c=(G.value-0)*i;r-(q(W.value)- -10)/20*r,r-(q(G.value)- -10)/20*r,t.beginPath(),t.strokeStyle=`#ef4444`,t.lineWidth=3,t.moveTo(s,0),t.lineTo(s,r),t.moveTo(c,0),t.lineTo(c,r),t.stroke();let l=(K.value-0)*i;t.beginPath(),t.fillStyle=`#10b981`,t.arc(l,r-(q(K.value)- -10)/20*r,5,0,Math.PI*2),t.fill();let u=r-(q(K.value)- -10)/20*r;t.beginPath(),t.strokeStyle=`#f59e0b`,t.lineWidth=2,t.moveTo(l,r/2),t.lineTo(l,u),t.stroke(),t.beginPath(),t.strokeStyle=`#9ca3af`,t.setLineDash([5,3]),t.moveTo(0,a),t.lineTo(n,a),t.stroke(),t.setLineDash([])}return t(()=>{let e=Y.value;e&&(e.width=e.offsetWidth,e.height=e.offsetHeight,X())}),(e,t)=>{let a=T;return n(),o(C,s(r(d(b)(d(w),22))),{default:i(()=>[l(`div`,E,[t[6]||=l(`div`,{class:`font-semibold text-base opacity-80 whitespace-nowrap`},` 二分法求方程根 `,-1),l(`button`,{onClick:t[0]||=e=>H.value.js=!H.value.js,class:`px-2 py-0.5 bg-slate-700 text-slate-200 rounded-lg hover:bg-slate-600 text-xs`},[t[4]||=c(` 📋 查看代码(JavaScript) `,-1),H.value.js?(n(),v(`span`,D,`▼`)):(n(),v(`span`,O,`▶`))]),l(`button`,{onClick:t[1]||=e=>H.value.c=!H.value.c,class:`px-2 py-0.5 bg-slate-700 text-slate-200 rounded-lg hover:bg-slate-600 text-xs`},[t[5]||=c(` 📋 查看代码(C语言) `,-1),H.value.c?(n(),v(`span`,k,`▼`)):(n(),v(`span`,A,`▶`))]),H.value.anim?(n(),v(`button`,{key:1,onClick:t[3]||=e=>H.value.anim=!1,class:`px-2 py-0.5 bg-red-500 text-white rounded-lg hover:bg-red-600 text-xs`},` ⏹️ 停止演示 `)):(n(),v(`button`,{key:0,onClick:t[2]||=e=>H.value.anim=!0,class:`px-2 py-0.5 bg-blue-500 text-white rounded-lg hover:bg-blue-600 text-xs`},` 🎬 开始动画演示 `))]),h(` ================= 代码区 ================= `),H.value.js?(n(),v(`div`,j,[_(a,{code:B})])):h(`v-if`,!0),H.value.c?(n(),v(`div`,M,[_(a,{code:V})])):h(`v-if`,!0),h(` ================= 动画区 ================= `),H.value.anim?(n(),v(`div`,N,` 📊 动画演示：二分法求解方程 `)):h(`v-if`,!0),H.value.anim?(n(),v(`div`,P,[l(`div`,F,[l(`button`,{onClick:J,class:`px-2 py-0.5 bg-green-600 text-white rounded-lg text-xs`},` ▶ 下一步 `),l(`span`,I,` 第 `+y(U.value)+` 步 `,1)]),l(`div`,L,[l(`div`,null,`📌 a = `+y(W.value.toFixed(6)),1),l(`div`,null,`📌 b = `+y(G.value.toFixed(6)),1),l(`div`,R,` 🎯 c = `+y(K.value.toFixed(6)),1),l(`div`,null,` f(c) = `+y(q(K.value).toFixed(6)),1)]),h(` 新增：图表容器 `),l(`div`,z,[l(`canvas`,{ref_key:`chartCanvas`,ref:Y,class:`w-full h-full`},null,512)])])):h(`v-if`,!0),h(` ✨ 总结页面 `),h(` ✨ 总结页面 `),h(` ✨ 总结页面 `),h(` ✨ 总结页面 `)]),_:1},16)}}};export{H as default};