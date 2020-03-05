(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{234:function(e,t,a){e.exports=a(529)},241:function(e,t,a){},529:function(e,t,a){"use strict";a.r(t);a(235);var r=a(0),n=a.n(r),c=a(71),l=a.n(c),o=(a(241),a(34)),i=a(3),s=a(12),u=a(531),m=a(532),d=a(533),E=a(540),g=a(534),h=a(535),b=a(530),f=function(e){var t=e.to,a=e.children;return n.a.createElement(b.a,{to:t,activeClassName:"active",tag:o.b},a)},O=function(){var e=Object(r.useState)(!1),t=Object(s.a)(e,2),a=t[0],c=t[1];return n.a.createElement(u.a,{color:"light",light:!0,expand:"md"},n.a.createElement(m.a,null,"Peako Light Prototypes"),n.a.createElement(d.a,{onClick:function(){return c(!a)}}),n.a.createElement(E.a,{isOpen:a,navbar:!0},n.a.createElement(g.a,{navbar:!0,className:"ml-auto"},n.a.createElement(h.a,null,n.a.createElement(f,{to:"/relays"},"Relays")),n.a.createElement(h.a,null,n.a.createElement(f,{to:"/triacs"},"Triacs")))))},p=a(537),j=a(203),v=a(536),k=function(e){var t=e.children,a=Object(j.a)(e,["children"]);return n.a.createElement(v.a,Object.assign({},a,{tag:o.b}),t)},w=function(e){Object(r.useEffect)(function(){document.title=e},[e])},y=function(e){var t=e.tickMs,a=e.tickCount,n=a-1,c=Object(r.useState)(0),l=Object(s.a)(c,2),o=l[0],i=l[1];return Object(r.useEffect)(function(){var e=window.setInterval(function(){o<n?i(o+1):o===n&&i(0)},t);return function(){window.clearInterval(e)}}),{position:o}},P=a(187),x=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ref,a=e.onResize,n=Object(r.useRef)(null);t=t||n;var c=Object(r.useState)({width:void 0,height:void 0}),l=Object(s.a)(c,2),o=l[0],i=l[1],u=Object(r.useRef)({width:void 0,height:void 0});return Object(r.useEffect)(function(){if("object"===typeof t&&null!==t&&t.current instanceof Element){var e=t.current,r=new ResizeObserver(function(e){if(Array.isArray(e)&&e.length){var t=e[0],r=Math.round(t.contentRect.width),n=Math.round(t.contentRect.height);if(u.current.width!==r||u.current.height!==n){var c={width:r,height:n};a?a(c):(u.current.width=r,u.current.height=n,i(c))}}});return r.observe(e),function(){return r.unobserve(e)}}},[t,a]),Object(r.useMemo)(function(){return Object(P.a)({ref:t},o)},[t,o?o.width:null,o?o.height:null])},F=function(){return w("Peako Light Prototypes"),n.a.createElement(p.a,null,n.a.createElement("h1",null,"Select Prototype"),n.a.createElement(k,{to:"/relays",className:"mr-2"},"Relays"),n.a.createElement(k,{to:"/triacs"},"Triacs"))},C=a(538),R=a(539),M="red",N=function(e){var t=e.title,a=e.color,r=e.brightness,c=function(e){switch(e){case M:return 255;default:return 0}}(a),l=function(e){switch(e){case"green":return 255;default:return 0}}(a),o=function(e){switch(e){case"blue":return 255;default:return 0}}(a),i=function(e){return 0===e?.07:e}(r);return n.a.createElement("div",{className:"light",title:t,style:{backgroundColor:"rgba(".concat(c,", ").concat(l,", ").concat(o,", ").concat(i,")")}})},I=a(188);function L(){var e=Object(I.a)(["\n  display: flex;\n  justify-content: space-between;\n"]);return L=function(){return e},e}var K,S,T,z=a(189).a.div(L()),A=function(e,t,a){var r=e.start,n=r+e.duration;return!(!(n>a)||!(t>=0&&t<n-a||t>=r))||r<=t&&n>t},J=function(e){return e?1:0},B=function(e){var t=e.tickMs,a=e.tickCount,r=e.lights,c=y({tickMs:t,tickCount:a}).position,l=r.red2,o=r.green2,i=r.blue,s=r.green1,u=r.red1;return n.a.createElement(C.a,null,n.a.createElement(R.a,{sm:2}),n.a.createElement(R.a,{sm:8},n.a.createElement(z,null,n.a.createElement(N,{title:l.id,color:l.color,brightness:J(A(l,c,a))}),n.a.createElement(N,{title:o.id,color:o.color,brightness:J(A(o,c,a))}),n.a.createElement(N,{title:i.id,color:i.color,brightness:J(A(i,c,a))}),n.a.createElement(N,{title:s.id,color:s.color,brightness:J(A(s,c,a))}),n.a.createElement(N,{title:u.id,color:u.color,brightness:J(A(u,c,a))}))),n.a.createElement(R.a,{sm:2}),n.a.createElement(R.a,{xs:12},n.a.createElement("hr",null)),n.a.createElement(R.a,{xs:12},n.a.createElement("p",{className:"small text-muted"},"Loop Position: ",c)))},D=a(10),G=(K={},Object(D.a)(K,"red2",{id:"red2",color:M,start:32,duration:8}),Object(D.a)(K,"green2",{id:"green2",color:"green",start:20,duration:17}),Object(D.a)(K,"blue",{id:"blue",color:"blue",start:0,duration:60}),Object(D.a)(K,"green1",{id:["green1"],color:"green",start:5,duration:17}),Object(D.a)(K,"red1",{id:"red1",color:M,start:0,duration:8}),K),H=function(){return w("Relays | Peako Light Prototype"),n.a.createElement(C.a,null,n.a.createElement(R.a,{xs:12},n.a.createElement("h1",null,"Relays"),n.a.createElement("hr",null)),n.a.createElement(R.a,{xs:12},n.a.createElement(B,{tickMs:1e3,tickCount:60,lights:G})))},q=a(18),Q=a(74),U=(S={},Object(D.a)(S,"red2",{id:"red2",color:M,startFadeIn:160,startFadeOut:205,fadeFor:10}),Object(D.a)(S,"green2",{id:"green2",color:"green",startFadeIn:100,startFadeOut:180,fadeFor:10}),Object(D.a)(S,"blue",{id:"blue",color:"blue"}),Object(D.a)(S,"green1",{id:["green1"],color:"green",startFadeIn:25,startFadeOut:105,fadeFor:10}),Object(D.a)(S,"red1",{id:"red1",color:M,startFadeIn:0,startFadeOut:45,fadeFor:10}),S),V=20,W=[26,28,29,30,31,32,33,34,35,36],X=function(e,t){for(var a=e.startFadeIn,r=e.startFadeOut,n=e.fadeFor,c=[],l=0;l<t;){var o=l>=r&&l<r+n,i=l>a+n&&l<=r;if(l>a&&l<=a+n){var s=l-a-1;c.push(W[s])}else if(o){var u=l-r;c.push(Object(Q.a)(W).reverse()[u])}else i?c.push(37):c.push(V);l++}return c},Y=function(e){var t=[V].concat(Object(Q.a)(W),[37]);return t.indexOf(e)/(t.length-1)},Z=function(e){for(var t=e.tickCount,a=e.powerPositions,r=[],n=0;n<t;){var c;r.push((c={position:n},Object(D.a)(c,"red2",Y(a.red2[n])),Object(D.a)(c,"green2",Y(a.green2[n])),Object(D.a)(c,"green1",Y(a.green1[n])),Object(D.a)(c,"red1",Y(a.red1[n])),c)),n++}return r},$=function(e){var t=e.tickCount,a=e.powerPositions,c=Object(r.useRef)(null),l=x({ref:c}).width,o={type:"monotone",dot:!1};return n.a.createElement("div",{ref:c,style:{height:"200px"}},n.a.createElement(q.c,{width:l,height:300,data:Z({tickCount:t,powerPositions:a})},n.a.createElement(q.a,{strokeDasharray:"3 3"}),n.a.createElement(q.e,{dataKey:"position"}),n.a.createElement(q.f,null),n.a.createElement(q.d,null),n.a.createElement(q.b,Object.assign({dataKey:"red2",stroke:M},o)),n.a.createElement(q.b,Object.assign({dataKey:"green2",stroke:"green"},o)),n.a.createElement(q.b,Object.assign({dataKey:"green1",stroke:"green"},o)),n.a.createElement(q.b,Object.assign({dataKey:"red1",stroke:M},o))))},_=function(e){var t=e.tickMs,a=e.tickCount,r=e.lights,c=e.powerPositions,l=y({tickMs:t,tickCount:a}).position,o=r.red2,i=r.green2,s=r.blue,u=r.green1,m=r.red1;return n.a.createElement(C.a,null,n.a.createElement(R.a,{sm:2}),n.a.createElement(R.a,{sm:8},n.a.createElement("div",{style:{display:"flex",justifyContent:"space-between"}},n.a.createElement(N,{title:o.id,color:o.color,brightness:Y(c.red2[l])}),n.a.createElement(N,{title:i.id,color:i.color,brightness:Y(c.green2[l])}),n.a.createElement(N,{title:s.id,color:s.color,brightness:1}),n.a.createElement(N,{title:u.id,color:u.color,brightness:Y(c.green1[l])}),n.a.createElement(N,{title:m.id,color:m.color,brightness:Y(c.red1[l])}))),n.a.createElement(R.a,{sm:2}),n.a.createElement(R.a,{xs:12},n.a.createElement("hr",null)),n.a.createElement(R.a,{xs:12},n.a.createElement("p",{className:"small text-muted"},"Loop Position: ",l)))},ee=U.green2,te=U.green1,ae=U.red1,re=X(U.red2,300),ne=X(ee,300),ce=X(te,300),le=X(ae,300),oe=(T={},Object(D.a)(T,"red2",re),Object(D.a)(T,"green2",ne),Object(D.a)(T,"green1",ce),Object(D.a)(T,"red1",le),T),ie=function(){return w("Triacs | Peako Light Prototype"),n.a.createElement(C.a,null,n.a.createElement(R.a,{xs:12},n.a.createElement("h1",null,"Triacs"),n.a.createElement("hr",null)),n.a.createElement(R.a,{xs:12},n.a.createElement(_,{tickMs:200,tickCount:300,lights:U,powerPositions:oe})),n.a.createElement(R.a,{xs:12},n.a.createElement("hr",null)),n.a.createElement(R.a,{xs:12},n.a.createElement($,{tickCount:300,powerPositions:oe})))},se=function(){return w("Page Not Found | Peako Light Prototype"),n.a.createElement(n.a.Fragment,null,n.a.createElement("h1",{className:"text-danger"},"Page Not Found"),n.a.createElement(k,{to:"/",outline:!0},"Go Home"))},ue=function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement(O,null),n.a.createElement("main",{className:"container text-center"},n.a.createElement(i.c,null,n.a.createElement(i.a,{path:"/",element:n.a.createElement(F,null)}),n.a.createElement(i.a,{path:"relays",element:n.a.createElement(H,null)}),n.a.createElement(i.a,{path:"triacs",element:n.a.createElement(ie,null)}),n.a.createElement(i.a,{path:"*",element:n.a.createElement(se,null)}))))},me=function(){return n.a.createElement(o.a,null,n.a.createElement(ue,null))};l.a.render(n.a.createElement(me,null),document.getElementById("root"))}},[[234,2,1]]]);
//# sourceMappingURL=main.c24d35f3.chunk.js.map