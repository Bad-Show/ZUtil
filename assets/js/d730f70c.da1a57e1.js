"use strict";(self.webpackChunkzutil_docs=self.webpackChunkzutil_docs||[]).push([[389],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var i=a.createContext({}),s=function(e){var t=a.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=s(e.components);return a.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=s(r),f=n,m=p["".concat(i,".").concat(f)]||p[f]||d[f]||o;return r?a.createElement(m,l(l({ref:t},u),{},{components:r})):a.createElement(m,l({ref:t},u))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,l=new Array(o);l[0]=p;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:n,l[1]=c;for(var s=2;s<o;s++)l[s]=r[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}p.displayName="MDXCreateElement"},8315:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>c,toc:()=>s});var a=r(7462),n=(r(7294),r(3905));const o={},l="DateFeature \u65f6\u95f4\u7279\u6027",c={unversionedId:"reference-doc/date/dateFeature",id:"reference-doc/date/dateFeature",title:"DateFeature \u65f6\u95f4\u7279\u6027",description:"\u53ef\u4ee5\u901a\u8fc7\u4e34\u65f6\u6216\u603b\u662f\uff08Always\uff09\u4fee\u6539\u5176\u9759\u6001\u6210\u5458\u53d8\u91cf\uff0c\u6765\u51b3\u5b9a DateUtils \u4e2d\u65b9\u6cd5\u5bf9\u65f6\u95f4\u7684\u5904\u7406\u65b9\u5f0f\u3002",source:"@site/docs/003-reference-doc/001-date/003-dateFeature.md",sourceDirName:"003-reference-doc/001-date",slug:"/reference-doc/date/dateFeature",permalink:"/ZUtil/docs/reference-doc/date/dateFeature",draft:!1,editUrl:"https://github.com/duanluan/ZUtil/tree/main/docs/docs/003-reference-doc/001-date/003-dateFeature.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"DateUtils \u65f6\u95f4\u5de5\u5177\u7c7b",permalink:"/ZUtil/docs/reference-doc/date/dateUtils"},next:{title:"\u4e0d\u517c\u5bb9\u53d8\u66f4",permalink:"/ZUtil/docs/incompatible-changes"}},i={},s=[{value:"RESOLVER_STYLE - \u89e3\u6790\u5668\u6a21\u5f0f/\u98ce\u683c",id:"resolver_style---\u89e3\u6790\u5668\u6a21\u5f0f\u98ce\u683c",level:2},{value:"LOCALE - \u533a\u57df",id:"locale---\u533a\u57df",level:2},{value:"ZONE_ID - \u65f6\u533a/\u533a\u57df ID",id:"zone_id---\u65f6\u533a\u533a\u57df-id",level:2}],u={toc:s};function d(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"datefeature-\u65f6\u95f4\u7279\u6027"},"DateFeature \u65f6\u95f4\u7279\u6027"),(0,n.kt)("p",null,"\u53ef\u4ee5\u901a\u8fc7\u4e34\u65f6\u6216\u603b\u662f\uff08Always\uff09\u4fee\u6539\u5176\u9759\u6001\u6210\u5458\u53d8\u91cf\uff0c\u6765\u51b3\u5b9a DateUtils \u4e2d\u65b9\u6cd5\u5bf9\u65f6\u95f4\u7684\u5904\u7406\u65b9\u5f0f\u3002"),(0,n.kt)("h2",{id:"resolver_style---\u89e3\u6790\u5668\u6a21\u5f0f\u98ce\u683c"},"RESOLVER_STYLE - \u89e3\u6790\u5668\u6a21\u5f0f/\u98ce\u683c"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},"// \u4e34\u65f6\u8bbe\u7f6e\u89e3\u6790\u5668\u6a21\u5f0f\u4e3a\u5bbd\u5bb9\nDateFeature.set(ResolverStyle.LENIENT);\n// \u9ed8\u8ba4\u4e3a\u4e25\u683c\u6a21\u5f0f\uff0c\u6b64\u65b9\u6cd5\u8d85\u51fa\u65f6\u95f4\u8303\u56f4\u4f1a\u62a5\u9519\uff0c\u6bcf\u4e2a\u6708\u6700\u591a 6 \u5468\uff0c\u6b64\u5904\u5374\u9700\u8981\u83b7\u53d6\u7b2c 7 \u5468\u7684\u5468\u4e00\n// \u4f46\u5982\u679c\u5728\u8c03\u7528\u65b9\u6cd5\u524d\u5c06\u6a21\u5f0f\u4fee\u6539\u4e3a\u5bbd\u5bb9\uff0c\u5219\u4e0d\u4f1a\u62a5\u9519\uff0c\u6b63\u5e38\u8fd4\u56de\uff0c\u5982\u679c\u4fee\u6539\u4e3a\u667a\u80fd\uff0c\u7ed3\u679c\u8d85\u51fa\u672c\u6708\u65f6\u4f1a\u8fd4\u56de\u672c\u6708\u7684\u6700\u540e\u4e00\u5929\nDateUtils.getStartDayOfWeekOfMonth(LocalDate.now(), 7);\n")),(0,n.kt)("h2",{id:"locale---\u533a\u57df"},"LOCALE - \u533a\u57df"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},'// \u603b\u662f\u8bbe\u7f6e\u89e3\u6790\u5668\u6a21\u5f0f\u4e3a\u4e2d\u6587 \nDateFeature.set(Locale.SIMPLIFIED_CHINESE);\n// \u8f93\u51fa\u5468\u65f6\u7ed3\u679c\u4e3a\u4e2d\u6587\nDateUtils.format(LocalDate.now(), "E")\n// \u8f93\u51fa\u6708\u65f6\u7ed3\u679c\u4ecd\u4e3a\u4e2d\u6587\nDateUtils.format(LocalDate.now(), "MMM")\n')),(0,n.kt)("h2",{id:"zone_id---\u65f6\u533a\u533a\u57df-id"},"ZONE_ID - \u65f6\u533a/\u533a\u57df ID"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},"// \u4e34\u65f6\u8bbe\u7f6e\u65f6\u533a\nDateFeature.set(ZoneId.from(ZoneOffset.UTC));\n// \u5047\u8bbe\u7cfb\u7edf\u65f6\u533a\u4e3a UTC+8\uff0c\u56e0\u4e3a\u4e0a\u4e00\u884c\u8bbe\u7f6e\u4e86\u65f6\u533a\uff0c\u6240\u4ee5\u5b9e\u9645\u7ed3\u679c\u4f1a\u6bd4\u7cfb\u7edf\u65f6\u95f4\u5c11 8 \u5c0f\u65f6\nDateUtils.format(LocalDateTime.now());\n")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},"// \u4e34\u65f6\u8bbe\u7f6e\u6700\u5c0f Date \u5e74\nDateFeature.setMinDateYear(1L);\n// Date \u7684\u5e74\u4efd\u4e3a 1\uff0c\u800c\u4e0d\u662f\u9ed8\u8ba4\u7684 1970\nDateUtils.toDate(LocalTime.now());\n\n")))}d.isMDXComponent=!0}}]);