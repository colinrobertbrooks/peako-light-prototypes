(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,t,r){},12:function(e,t,r){"use strict";r.r(t);var n=r(0),a=r.n(n),c=r(2),o=r.n(c),l=(r(10),function(e){var t=e.color,r=e.isOn,n=e.bsClassName,c=void 0===n?"col-2":n,o=function(e){switch(e){case"red":return 255;default:return 0}}(t),l=function(e){switch(e){case"green":return 255;default:return 0}}(t),i=function(e){switch(e){case"blue":return 255;default:return 0}}(t),s=function(e){return e?1:.1}(r);return a.a.createElement("div",{className:c},a.a.createElement("div",{className:"light",style:{backgroundColor:"rgba(".concat(o,", ").concat(l,", ").concat(i,", ").concat(s,")")}}))}),i=r(3),s=function(e){var t=e.end,r=t-1,a=Object(n.useState)(0),c=Object(i.a)(a,2),o=c[0],l=c[1];return Object(n.useEffect)(function(){var e=window.setInterval(function(){o<r?l(o+1):o===r&&l(0)},1e3);return function(){window.clearInterval(e)}}),{position:o}},u=function(e,t,r){var n=e.start,a=e.duration,c=n+a;return!(!(n+a>r)||!(t>=0&&t<c-r||t>=n))||n<=t&&c>t},d={redTwo:{id:"redTwo",color:"red",start:32,duration:8},green2:{id:"green2",color:"green",start:20,duration:17},blue:{id:"blue",color:"blue",start:26,duration:50},green1:{id:"green1",color:"green",start:5,duration:17},red1:{id:"red1",color:"red",start:0,duration:8}},m=function(){var e=s({end:60}).position;return a.a.createElement("div",{className:"container text-center"},a.a.createElement("div",{className:"row"},a.a.createElement("div",{className:"col-12"},a.a.createElement("hr",null)),a.a.createElement("div",{className:"col-1"}),a.a.createElement(l,{color:d.redTwo.color,isOn:u(d.redTwo,e,60)}),a.a.createElement(l,{color:d.green2.color,isOn:u(d.green2,e,60)}),a.a.createElement(l,{color:d.blue.color,isOn:u(d.blue,e,60)}),a.a.createElement(l,{color:d.green1.color,isOn:u(d.green1,e,60)}),a.a.createElement(l,{color:d.red1.color,isOn:u(d.red1,e,60)}),a.a.createElement("div",{className:"col-1"}),a.a.createElement("div",{className:"col-12"},a.a.createElement("hr",null))),a.a.createElement("div",{className:"row"},a.a.createElement("div",{className:"col-12"},a.a.createElement("p",{className:"small text-muted"},"Loop: ",e))))};o.a.render(a.a.createElement(m,null),document.getElementById("root"))},4:function(e,t,r){e.exports=r(12)}},[[4,2,1]]]);
//# sourceMappingURL=main.f538baab.chunk.js.map