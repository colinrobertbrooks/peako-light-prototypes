(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{235:function(e,t,a){e.exports=a(530)},242:function(e,t,a){},530:function(e,t,a){"use strict";a.r(t);a(236);var r=a(0),n=a.n(r),c=a(73),l=a.n(c),o=(a(242),a(34)),i=a(3),u=a(12),s=a(532),d=a(533),m=a(534),E=a(541),b=a(535),g=a(536),f=a(531),h=function(e){var t=e.to,a=e.children;return n.a.createElement(f.a,{to:t,activeClassName:"active",tag:o.b},a)},O=function(){var e=Object(r.useState)(!1),t=Object(u.a)(e,2),a=t[0],c=t[1];return n.a.createElement(s.a,{color:"light",light:!0,expand:"md"},n.a.createElement(d.a,null,"Peako Light Prototypes"),n.a.createElement(m.a,{onClick:function(){return c(!a)}}),n.a.createElement(E.a,{isOpen:a,navbar:!0},n.a.createElement(b.a,{navbar:!0,className:"ml-auto"},n.a.createElement(g.a,null,n.a.createElement(h,{to:"/relays"},"Relays")),n.a.createElement(g.a,null,n.a.createElement(h,{to:"/triacs"},"Triacs")))))},p=a(538),v=a(204),j=a(537),k=function(e){var t=e.children,a=Object(v.a)(e,["children"]);return n.a.createElement(j.a,Object.assign({},a,{tag:o.b}),t)},w=function(e){Object(r.useEffect)(function(){document.title=e},[e])},y=function(e){var t=e.tickMs,a=e.tickCount,n=a-1,c=Object(r.useState)(0),l=Object(u.a)(c,2),o=l[0],i=l[1];return Object(r.useEffect)(function(){var e=window.setInterval(function(){o<n?i(o+1):o===n&&i(0)},t);return function(){window.clearInterval(e)}}),{position:o}},x=a(189),F=a(203),P=window.ResizeObserver||F.a,C=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ref,a=e.onResize,n=Object(r.useRef)(null);t=t||n;var c=Object(r.useState)({width:void 0,height:void 0}),l=Object(u.a)(c,2),o=l[0],i=l[1],s=Object(r.useRef)({width:void 0,height:void 0});return Object(r.useEffect)(function(){if("object"===typeof t&&null!==t&&t.current instanceof Element){var e=t.current,r=new P(function(e){if(Array.isArray(e)&&e.length){var t=e[0],r=Math.round(t.contentRect.width),n=Math.round(t.contentRect.height);if(s.current.width!==r||s.current.height!==n){var c={width:r,height:n};a?a(c):(s.current.width=r,s.current.height=n,i(c))}}});return r.observe(e),function(){return r.unobserve(e)}}},[t,a]),Object(r.useMemo)(function(){return Object(x.a)({ref:t},o)},[t,o?o.width:null,o?o.height:null])},R=function(){return w("Peako Light Prototypes"),n.a.createElement(p.a,null,n.a.createElement("h1",null,"Select Prototype"),n.a.createElement(k,{to:"/relays",className:"mr-2"},"Relays"),n.a.createElement(k,{to:"/triacs"},"Triacs"))},M=a(539),N=a(540),I=a(42),L=a(43),K="red";function S(){var e=Object(I.a)(["\n  background-color: ",";\n  border: 1px solid black;\n  border-radius: 50%;\n  display: inline-block;\n  height: 50px;\n  width: 50px;\n"]);return S=function(){return e},e}var T=L.a.div(S(),function(e){var t=e.r,a=e.g,r=e.b,n=e.a;return"rgba(".concat(t,", ").concat(a,", ").concat(r,", ").concat(n,")")}),A=function(e){var t=e.title,a=e.color,r=e.brightness,c=function(e){switch(e){case K:return 255;default:return 0}}(a),l=function(e){switch(e){case"green":return 255;default:return 0}}(a),o=function(e){switch(e){case"blue":return 255;default:return 0}}(a),i=function(e){return 0===e?.05:e}(r);return n.a.createElement(T,{title:t,r:c,g:l,b:o,a:i})};function z(){var e=Object(I.a)(["\n  display: flex;\n  justify-content: space-between;\n"]);return z=function(){return e},e}var J,B,D=L.a.div(z()),G=function(e,t,a){var r=e.start,n=r+e.duration;return!(!(n>a)||!(t>=0&&t<n-a||t>=r))||r<=t&&n>t},H=function(e){return e?1:0},q=function(e){var t=e.tickMs,a=e.tickCount,r=e.lights,c=y({tickMs:t,tickCount:a}).position,l=r.red2,o=r.green2,i=r.blue,u=r.green1,s=r.red1;return n.a.createElement(M.a,null,n.a.createElement(N.a,{sm:2}),n.a.createElement(N.a,{sm:8},n.a.createElement(D,null,n.a.createElement(A,{title:l.id,color:l.color,brightness:H(G(l,c,a))}),n.a.createElement(A,{title:o.id,color:o.color,brightness:H(G(o,c,a))}),n.a.createElement(A,{title:i.id,color:i.color,brightness:H(G(i,c,a))}),n.a.createElement(A,{title:u.id,color:u.color,brightness:H(G(u,c,a))}),n.a.createElement(A,{title:s.id,color:s.color,brightness:H(G(s,c,a))}))),n.a.createElement(N.a,{sm:2}),n.a.createElement(N.a,{xs:12},n.a.createElement("hr",null)),n.a.createElement(N.a,{xs:12},n.a.createElement("p",{className:"small text-muted"},"Loop Position: ",c)))},Q=a(10),U=(J={},Object(Q.a)(J,"red2",{id:"red2",color:K,start:32,duration:8}),Object(Q.a)(J,"green2",{id:"green2",color:"green",start:20,duration:17}),Object(Q.a)(J,"blue",{id:"blue",color:"blue",start:0,duration:60}),Object(Q.a)(J,"green1",{id:["green1"],color:"green",start:5,duration:17}),Object(Q.a)(J,"red1",{id:"red1",color:K,start:0,duration:8}),J),V=function(){return w("Relays | Peako Light Prototype"),n.a.createElement(M.a,null,n.a.createElement(N.a,{xs:12},n.a.createElement("h1",null,"Relays"),n.a.createElement("hr",null)),n.a.createElement(N.a,{xs:12},n.a.createElement(q,{tickMs:1e3,tickCount:60,lights:U})))},W=a(18),X=a(76),Y=(B={},Object(Q.a)(B,"red2",{id:"red2",color:K,startFadeIn:160,startFadeOut:205,fadeFor:10}),Object(Q.a)(B,"green2",{id:"green2",color:"green",startFadeIn:100,startFadeOut:180,fadeFor:10}),Object(Q.a)(B,"blue",{id:"blue",color:"blue"}),Object(Q.a)(B,"green1",{id:["green1"],color:"green",startFadeIn:25,startFadeOut:105,fadeFor:10}),Object(Q.a)(B,"red1",{id:"red1",color:K,startFadeIn:0,startFadeOut:45,fadeFor:10}),B),Z=20,$=[26,28,29,30,31,32,33,34,35,36],_=function(e,t){for(var a=e.startFadeIn,r=e.startFadeOut,n=e.fadeFor,c=[],l=0;l<t;){var o=l>=r&&l<r+n,i=l>a+n&&l<=r;if(l>a&&l<=a+n){var u=l-a-1;c.push($[u])}else if(o){var s=l-r;c.push(Object(X.a)($).reverse()[s])}else i?c.push(37):c.push(Z);l++}return c},ee=function(e){var t=[Z].concat(Object(X.a)($),[37]);return t.indexOf(e)/(t.length-1)};function te(){var e=Object(I.a)(["\n  height: 200px;\n"]);return te=function(){return e},e}var ae,re=function(e){for(var t=e.tickCount,a=e.powerPositions,r=[],n=0;n<t;){var c;r.push((c={position:n},Object(Q.a)(c,"red2",ee(a.red2[n])),Object(Q.a)(c,"green2",ee(a.green2[n])),Object(Q.a)(c,"green1",ee(a.green1[n])),Object(Q.a)(c,"red1",ee(a.red1[n])),c)),n++}return r},ne=function(e){return"".concat(parseFloat(100*e).toFixed(1),"%")},ce=function(e){var t=e.x,a=e.y,r=e.payload;return n.a.createElement("g",{transform:"translate(".concat(t,",").concat(a,")")},n.a.createElement("text",{dy:16,textAnchor:"middle",fill:"#666"},r.value))},le=L.a.div(te()),oe=function(e){var t=e.tickCount,a=e.powerPositions,c=Object(r.useRef)(null),l=C({ref:c}).width,o={type:"monotone",dot:!1};return n.a.createElement(le,{ref:c},n.a.createElement(W.c,{width:l,height:300,margin:{top:20,right:20,left:0,bottom:40},data:re({tickCount:t,powerPositions:a})},n.a.createElement(W.a,{strokeDasharray:"3 3"}),n.a.createElement(W.e,{dataKey:"position",ticks:[0,49,99,149,199,249,299],tick:n.a.createElement(ce,null)}),n.a.createElement(W.f,{tickCount:6,tickFormatter:ne}),n.a.createElement(W.d,{formatter:ne}),n.a.createElement(W.b,Object.assign({dataKey:"red2",stroke:K},o)),n.a.createElement(W.b,Object.assign({dataKey:"green2",stroke:"green"},o)),n.a.createElement(W.b,Object.assign({dataKey:"green1",stroke:"green"},o)),n.a.createElement(W.b,Object.assign({dataKey:"red1",stroke:K},o))))},ie=function(e){var t=e.tickMs,a=e.tickCount,r=e.lights,c=e.powerPositions,l=y({tickMs:t,tickCount:a}).position,o=r.red2,i=r.green2,u=r.blue,s=r.green1,d=r.red1;return n.a.createElement(M.a,null,n.a.createElement(N.a,{sm:2}),n.a.createElement(N.a,{sm:8},n.a.createElement(D,null,n.a.createElement(A,{title:o.id,color:o.color,brightness:ee(c.red2[l])}),n.a.createElement(A,{title:i.id,color:i.color,brightness:ee(c.green2[l])}),n.a.createElement(A,{title:u.id,color:u.color,brightness:1}),n.a.createElement(A,{title:s.id,color:s.color,brightness:ee(c.green1[l])}),n.a.createElement(A,{title:d.id,color:d.color,brightness:ee(c.red1[l])}))),n.a.createElement(N.a,{sm:2}),n.a.createElement(N.a,{xs:12},n.a.createElement("hr",null)),n.a.createElement(N.a,{xs:12},n.a.createElement("p",{className:"small text-muted"},"Loop Position: ",l)))},ue=Y.green2,se=Y.green1,de=Y.red1,me=_(Y.red2,300),Ee=_(ue,300),be=_(se,300),ge=_(de,300),fe=(ae={},Object(Q.a)(ae,"red2",me),Object(Q.a)(ae,"green2",Ee),Object(Q.a)(ae,"green1",be),Object(Q.a)(ae,"red1",ge),ae),he=function(){return w("Triacs | Peako Light Prototype"),n.a.createElement(M.a,null,n.a.createElement(N.a,{xs:12},n.a.createElement("h1",null,"Triacs"),n.a.createElement("hr",null)),n.a.createElement(N.a,{xs:12},n.a.createElement(ie,{tickMs:200,tickCount:300,lights:Y,powerPositions:fe})),n.a.createElement(N.a,{xs:12},n.a.createElement(oe,{tickCount:300,powerPositions:fe})))},Oe=function(){return w("Page Not Found | Peako Light Prototype"),n.a.createElement(n.a.Fragment,null,n.a.createElement("h1",{className:"text-danger"},"Page Not Found"),n.a.createElement(k,{to:"/",outline:!0},"Go Home"))},pe=function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement(O,null),n.a.createElement("main",{className:"container text-center"},n.a.createElement(i.c,null,n.a.createElement(i.a,{path:"/",element:n.a.createElement(R,null)}),n.a.createElement(i.a,{path:"relays",element:n.a.createElement(V,null)}),n.a.createElement(i.a,{path:"triacs",element:n.a.createElement(he,null)}),n.a.createElement(i.a,{path:"*",element:n.a.createElement(Oe,null)}))))},ve=function(){return n.a.createElement(o.a,null,n.a.createElement(pe,null))};l.a.render(n.a.createElement(ve,null),document.getElementById("root"))}},[[235,2,1]]]);
//# sourceMappingURL=main.f3fc6476.chunk.js.map