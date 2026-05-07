import{C as e,F as t,L as n,T as r,X as i,Z as a,_ as o,_t as s,b as c,g as l,h as u,ht as d,l as f,q as p,st as m,v as h,vt as g,x as _,y as v,yt as y}from"./modules/shiki-Csu1_Fu6.js";import{et as b,mt as S,tt as C}from"./index-A6RQAZeu.js";import{t as w}from"./right-sidebar-CGwP7pdO.js";var T={key:0,class:`output-console`},E=S(e({__name:`CodeRunner7`,props:{code:{},height:{default:450}},setup(e){let{$slidev:t,$nav:r,$clicksContext:i,$clicks:o,$page:s,$renderContext:c,$frontmatter:d}=C(),_=e,b=m(_.code),S=m(``),w=m(!1);p(()=>_.code,e=>{b.value=e});let E=u(()=>_.height-200),D=()=>{S.value=``,w.value=!0;let e=b.value.replace(/\s/g,``);if(e.includes(`x0`)&&(e.includes(`fx`)||e.includes(`f(`))&&(e.includes(`dfx`)||e.includes(`df(`))&&e.includes(`x1`)&&e.includes(`x0-`)&&e.includes(`/`)){let e=-1;S.value+=`迭代过程：
`,S.value+=`k	 x_k	 f(x_k)	 f'(x_k)	 x_{k+1}
`;for(let t=0;t<100;t++){let n=e**3+2*e**2+3*e+4,r=3*e**2+4*e+3;if(Math.abs(r)<1e-10){S.value+=`
❌ 导数接近零，无法继续迭代
`;return}let i=e-n/r;if(S.value+=`${t}\t ${e.toFixed(6)}\t ${n.toFixed(6)}\t ${r.toFixed(6)}\t ${i.toFixed(6)}\n`,Math.abs(i-e)<1e-6){S.value+=`
✅ 收敛！最终结果：
`,S.value+=`x ≈ ${i.toFixed(8)}\n`;return}e=i}S.value+=`
❌ 达到最大迭代次数，未收敛
`;return}S.value=`未识别到牛顿迭代法特征码`};return(t,r)=>(n(),v(`div`,{class:`code-runner-container`,style:g({maxHeight:e.height+`px`})},[l(`div`,{class:`code-display`,style:g({maxHeight:E.value+`px`})},[a(l(`textarea`,{"onUpdate:modelValue":r[0]||=e=>b.value=e,class:`code-editor`,spellcheck:`false`},null,512),[[f,b.value]])],4),l(`button`,{type:`button`,onClick:D,class:`run-button`},` ▶ 运行（安全模式） `),w.value?(n(),v(`div`,T,[r[1]||=l(`div`,{class:`output-header`},`📤 模拟运行结果：`,-1),l(`pre`,null,y(S.value),1)])):h(`v-if`,!0)],4))}}),[[`__scopeId`,`data-v-7a13fd93`]]),D={class:`flex items-center justify-between gap-2 mt-1`},O={key:0},k={key:1},A={key:0},j={key:1},M={key:0,class:`mt-3`},N={key:1,class:`mt-3`},P={key:2,class:`mt-3 p-4 bg-gray-800 text-white rounded-xl`},F={key:3,class:`mt-3 p-3 bg-slate-800 text-white rounded-lg`},I={class:`flex items-center gap-2 mb-3`},L={class:`text-xs opacity-70`},R={class:`text-xs space-y-1`},z={class:`mt-1 pt-1 border-t border-slate-600`},B={class:`mt-4 w-full h-64 bg-gray-900 rounded-lg overflow-hidden border border-gray-700`},V=`// 牛顿迭代法求解方程 f(x) = x^3 + 2x^2 + 3x + 4 = 0
function newtonMethod() {
  let x0 = -1.0;
  const tolerance = 1e-6;
  const maxIterations = 100;

  console.log("迭代过程：");
  console.log("k\\t\\t x_k\\t\\t f(x_k)\\t f'(x_k)\\t x_{k+1}");

  for (let k = 0; k < maxIterations; k++) {
    const fx = Math.pow(x0, 3) + 2 * Math.pow(x0, 2) + 3 * x0 + 4;
    const dfx = 3 * Math.pow(x0, 2) + 4 * x0 + 3;

    if (Math.abs(dfx) < 1e-10) {
      console.log("❌ 导数接近零，无法继续迭代");
      return;
    }

    const x1 = x0 - fx / dfx;

    console.log(k + "\\t " + x0.toFixed(6) + "\\t " + fx.toFixed(6) + "\\t " + dfx.toFixed(6) + "\\t " + x1.toFixed(6));

    if (Math.abs(x1 - x0) < tolerance) {
      console.log("\\n✅ 收敛！最终结果：");
      console.log("x ≈ " + x1.toFixed(8));
      return;
    }

    x0 = x1;
  }

  console.log("\\n❌ 达到最大迭代次数，未收敛");
}
newtonMethod();
`,H=`#include <stdio.h>
#include <math.h>

double f(double x) {
    return pow(x, 3) + 2 * pow(x, 2) + 3 * x + 4;
}

double df(double x) {
    return 3 * pow(x, 2) + 4 * x + 3;
}

int main() {
    double x0 = -1.0;
    double tolerance = 1e-6;
    int maxIterations = 100;

    printf("迭代过程：\\n");
    printf("k\\t x_k\\t f(x_k)\\t f'(x_k)\\t x_{k+1}\\n");

    for (int k = 0; k < maxIterations; k++) {
        double fx = f(x0);
        double dfx = df(x0);

        if (fabs(dfx) < 1e-10) {
            printf("❌ 导数接近零，无法继续迭代\\n");
            return 1;
        }

        double x1 = x0 - fx / dfx;

        printf("%d\\t %.6f\\t %.6f\\t %.6f\\t %.6f\\n", k, x0, fx, dfx, x1);

        if (fabs(x1 - x0) < tolerance) {
            printf("\\n✅ 收敛！最终结果：\\n");
            printf("x ≈ %.8f\\n", x1);
            return 0;
        }

        x0 = x1;
    }

    printf("\\n❌ 达到最大迭代次数，未收敛\\n");
    return 0;
}`,U={__name:`slides.md__slidev_21`,setup(e){let{$slidev:a,$nav:u,$clicksContext:f,$clicks:p,$page:g,$renderContext:S,$frontmatter:T}=C();f.setup();let U=m({js:!1,c:!1,anim:!1}),W=m(0),G=m(-1),K=m(0);function q(e){return e**3+2*e**2+3*e+4}function J(e){return 3*e**2+4*e+3}function Y(){let e=q(G.value),t=J(G.value);if(Math.abs(t)<1e-10){console.log(`❌ 导数接近零，无法继续迭代`);return}K.value=G.value-e/t,G.value=K.value,W.value++,Z()}let X=m(null);function Z(){let e=X.value;if(!e)return;let t=e.getContext(`2d`),n=e.width,r=e.height;t.clearRect(0,0,n,r);let i=n/8,a=r/12;t.beginPath(),t.strokeStyle=`#ffffff`,t.lineWidth=1;let o=r-5/12*r;t.moveTo(0,o),t.lineTo(n,o);let s=4*i;t.moveTo(s,0),t.lineTo(s,r),t.stroke(),t.fillStyle=`#ffffff`,t.font=`10px Arial`;for(let e=-4;e<=4;e+=.5){let n=(e- -4)*i;t.beginPath(),t.moveTo(n,o-5),t.lineTo(n,o+5),t.stroke(),t.fillText(e.toFixed(1),n-10,o+15)}for(let e=-5;e<=7;e+=1){let n=r-(e- -5)/12*r;t.beginPath(),t.moveTo(s-5,n),t.lineTo(s+5,n),t.stroke(),t.fillText(e.toFixed(0),s-25,n+4)}t.beginPath(),t.strokeStyle=`#60a5fa`,t.lineWidth=2;for(let e=-4;e<=4;e+=.01){let n=q(e),a=(e- -4)*i,o=r-(n- -5)/12*r;e===-4&&n>=-5&&n<=7?t.moveTo(a,o):n>=-5&&n<=7&&t.lineTo(a,o)}t.stroke();let c=(G.value- -4)*i,l=r-(q(G.value)- -5)/12*r,u=J(G.value);t.beginPath(),t.fillStyle=`#10b981`,t.arc(c,l,5,0,Math.PI*2),t.fill(),t.beginPath(),t.strokeStyle=`#f59e0b`,t.lineWidth=1.5;let d=l-u*(c-0)/i*a,f=n,p=l-u*(c-f)/i*a;if(t.moveTo(0,d),t.lineTo(f,p),t.stroke(),W.value>0){let e=(K.value- -4)*i,n=r-5/12*r;t.beginPath(),t.fillStyle=`#ef4444`,t.arc(e,n,5,0,Math.PI*2),t.fill(),t.beginPath(),t.strokeStyle=`#ef4444`,t.lineWidth=1,t.setLineDash([3,2]),t.moveTo(e,l),t.lineTo(e,n),t.stroke(),t.setLineDash([])}t.beginPath(),t.strokeStyle=`#9ca3af`,t.setLineDash([5,3]),t.moveTo(0,o),t.lineTo(n,o),t.stroke(),t.setLineDash([]),t.fillStyle=`white`,t.font=`12px Arial`,t.fillText(`f(x) = ${fx.toFixed(6)}`,10,20),t.fillText(`xNaN = ${xNext.toFixed(6)}`,10,40);let m=(x- -4)*i,h=r-(fx- -5)/12*r;t.beginPath(),t.moveTo(90,25),t.lineTo(m,h),t.strokeStyle=`#60a5fa`,t.lineWidth=1,t.setLineDash([3,2]),t.stroke(),t.setLineDash([]);let g=(xNext- -4)*i,_=r-(q(xNext)- -5)/12*r;t.beginPath(),t.moveTo(90,45),t.lineTo(g,_),t.strokeStyle=`#f59e0b`,t.lineWidth=1,t.setLineDash([3,2]),t.stroke(),t.setLineDash([]),t.beginPath(),t.arc(m,h,3,0,Math.PI*2),t.fillStyle=`#60a5fa`,t.fill()}return t(()=>{let e=X.value;e&&(e.width=e.offsetWidth,e.height=e.offsetHeight,Z())}),(e,t)=>{let a=E;return n(),o(w,s(r(d(b)(d(T),20))),{default:i(()=>[l(`div`,D,[t[6]||=l(`div`,{class:`font-semibold text-base opacity-80 whitespace-nowrap`},` 牛顿迭代法解方程 `,-1),l(`button`,{onClick:t[0]||=e=>U.value.js=!U.value.js,class:`px-2 py-0.5 bg-slate-700 text-slate-200 rounded-lg hover:bg-slate-600 text-xs`},[t[4]||=c(` 📋 查看代码(JavaScript) `,-1),U.value.js?(n(),v(`span`,O,`▼`)):(n(),v(`span`,k,`▶`))]),l(`button`,{onClick:t[1]||=e=>U.value.c=!U.value.c,class:`px-2 py-0.5 bg-slate-700 text-slate-200 rounded-lg hover:bg-slate-600 text-xs`},[t[5]||=c(` 📋 查看代码(C语言) `,-1),U.value.c?(n(),v(`span`,A,`▼`)):(n(),v(`span`,j,`▶`))]),U.value.anim?(n(),v(`button`,{key:1,onClick:t[3]||=e=>U.value.anim=!1,class:`px-2 py-0.5 bg-red-500 text-white rounded-lg hover:bg-red-600 text-xs`},` ⏹️ 停止演示 `)):(n(),v(`button`,{key:0,onClick:t[2]||=e=>U.value.anim=!0,class:`px-2 py-0.5 bg-blue-500 text-white rounded-lg hover:bg-blue-600 text-xs`},` 🎬 开始动画演示 `))]),h(` ================= 代码区 ================= `),U.value.js?(n(),v(`div`,M,[_(a,{code:V})])):h(`v-if`,!0),U.value.c?(n(),v(`div`,N,[_(a,{code:H})])):h(`v-if`,!0),h(` ================= 动画区 ================= `),U.value.anim?(n(),v(`div`,P,` 📊 动画演示：牛顿迭代法逼近方程根 `)):h(`v-if`,!0),U.value.anim?(n(),v(`div`,F,[l(`div`,I,[l(`button`,{onClick:Y,class:`px-2 py-0.5 bg-green-600 text-white rounded-lg text-xs`},` ▶ 下一步 `),l(`span`,L,` 第 `+y(W.value)+` 步 `,1)]),l(`div`,R,[l(`div`,null,[t[7]||=c(`📍 x`,-1),l(`sub`,null,y(W.value.value),1),c(` = `+y(G.value.toFixed(6)),1)]),l(`div`,null,[t[8]||=c(`📍 f(x`,-1),l(`sub`,null,y(W.value.value),1),c(`) = `+y(q(G.value).toFixed(6)),1)]),l(`div`,z,[t[9]||=c(` 📍 f'(x`,-1),l(`sub`,null,y(W.value.value),1),c(`) = `+y(J(G.value).toFixed(6)),1)]),l(`div`,null,[t[10]||=c(` 📍 x`,-1),l(`sub`,null,y(W.value.value+1),1),t[11]||=c(` = x`,-1),l(`sub`,null,y(W.value.value),1),t[12]||=c(` - f(x`,-1),l(`sub`,null,y(W.value.value),1),t[13]||=c(`)/f'(x`,-1),l(`sub`,null,y(W.value.value),1),c(`) = `+y(K.value.toFixed(6)),1)])]),h(` 示例：调整 canvas 大小 `),l(`div`,B,[l(`canvas`,{ref_key:`chartCanvas`,ref:X,class:`w-full h-full`},null,512)])])):h(`v-if`,!0),h(` ✨ 4.4.3 迭代法解方程(区间二分法) `),h(` ✨ 4.4.3 迭代法解方程(区间二分法) `),h(` ✨ 4.4.3 迭代法解方程(区间二分法) `),h(` ✨ 4.4.3 迭代法解方程(区间二分法) `)]),_:1},16)}}};export{U as default};