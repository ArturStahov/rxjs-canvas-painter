(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"Dv/5":function(e,t,o){},QfWi:function(e,t,o){"use strict";o.r(t);o("1UZS"),o("Dv/5");var n=o("7lOU"),c=o("Exmb"),i=o("xJz4"),u=o("shEE"),a=o("9uph"),r=o("+Cq2"),b=o("M7nz"),l=document.querySelector("#canvas"),s=document.querySelector("#range"),p=document.querySelector("#color"),O=l.getContext("2d"),j=l.getBoundingClientRect(),d=window.devicePixelRatio;l.width=j.width*d,l.height=j.height*d,O.scale(d,d);var f=Object(n.a)(l,"mousemove"),h=Object(n.a)(l,"mousedown"),v=Object(n.a)(l,"mouseup"),w=Object(n.a)(l,"mouseout"),g=Object(n.a)(s,"input").pipe(Object(c.a)((function(e){return e.target.value})),Object(i.a)(s.value)),m=Object(n.a)(p,"input").pipe(Object(c.a)((function(e){return e.target.value})),Object(i.a)(p.value));h.pipe(Object(u.a)(g,m,(function(e,t,o){return{lineWidth:t,color:o}})),Object(a.a)((function(e){return f.pipe(Object(c.a)((function(t){return{x:t.offsetX,y:t.offsetY,options:e}})),Object(r.a)(),Object(b.a)(v),Object(b.a)(w))}))).subscribe((function(e){var t=e[0],o=e[1],n=t.options,c=n.lineWidth,i=n.color;O.lineWidth=c,O.strokeStyle=i,console.log(t),O.beginPath(),O.moveTo(t.x,t.y),O.lineTo(o.x,o.y),O.stroke()}))}},[["QfWi",1,2]]]);
//# sourceMappingURL=main.dcb1f1a61222b5d095f3.js.map