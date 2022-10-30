"use strict";(self.webpackChunkzutil_docs=self.webpackChunkzutil_docs||[]).push([[284],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>y});var r=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=r.createContext({}),u=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},p=function(e){var n=u(e.components);return r.createElement(l.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=u(t),y=i,f=d["".concat(l,".").concat(y)]||d[y]||s[y]||a;return t?r.createElement(f,o(o({ref:n},p),{},{components:t})):r.createElement(f,o({ref:n},p))}));function y(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,o=new Array(a);o[0]=d;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:i,o[1]=c;for(var u=2;u<a;u++)o[u]=t[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},3474:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>s,frontMatter:()=>a,metadata:()=>c,toc:()=>u});var r=t(7462),i=(t(7294),t(3905));const a={},o="PinyinFeature \u62fc\u97f3\u7279\u6027",c={unversionedId:"reference-doc/pinyin/pinyinFeature",id:"reference-doc/pinyin/pinyinFeature",title:"PinyinFeature \u62fc\u97f3\u7279\u6027",description:"\u53ef\u4ee5\u901a\u8fc7\u4e34\u65f6\u6216\u603b\u662f\uff08Always\uff09\u4fee\u6539\u5176\u9759\u6001\u6210\u5458\u53d8\u91cf\uff0c\u6765\u51b3\u5b9a PinyinUtils \u4e2d\u65b9\u6cd5\u5bf9\u62fc\u97f3\u7684\u5904\u7406\u65b9\u5f0f\u3002",source:"@site/docs/003-reference-doc/pinyin/001-pinyinFeature.md",sourceDirName:"003-reference-doc/pinyin",slug:"/reference-doc/pinyin/pinyinFeature",permalink:"/ZUtil/docs/reference-doc/pinyin/pinyinFeature",draft:!1,editUrl:"https://github.com/duanluan/ZUtil/tree/main/docs/docs/003-reference-doc/pinyin/001-pinyinFeature.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"DateFeature \u65f6\u95f4\u7279\u6027",permalink:"/ZUtil/docs/reference-doc/date/dateFeature"},next:{title:"\u4e0d\u517c\u5bb9\u53d8\u66f4",permalink:"/ZUtil/docs/incompatible-changes"}},l={},u=[{value:"FIRST_WORD_INITIAL_CAP - \u7b2c\u4e00\u4e2a\u5355\u8bcd\u9996\u5b57\u6bcd\u662f\u5426\u5927\u5199",id:"first_word_initial_cap---\u7b2c\u4e00\u4e2a\u5355\u8bcd\u9996\u5b57\u6bcd\u662f\u5426\u5927\u5199",level:2},{value:"SECOND_WORD_INITIAL_CAP - \u7b2c\u4e8c\u4e2a\u5355\u8bcd\u9996\u5b57\u6bcd\u662f\u5426\u5927\u5199",id:"second_word_initial_cap---\u7b2c\u4e8c\u4e2a\u5355\u8bcd\u9996\u5b57\u6bcd\u662f\u5426\u5927\u5199",level:2},{value:"HAS_SEPARATOR_BY_NOT_PINYIN_AROUND - \u975e\u62fc\u97f3\u524d\u540e\u662f\u5426\u9700\u8981\u5206\u9694\u7b26",id:"has_separator_by_not_pinyin_around---\u975e\u62fc\u97f3\u524d\u540e\u662f\u5426\u9700\u8981\u5206\u9694\u7b26",level:2}],p={toc:u};function s(e){let{components:n,...t}=e;return(0,i.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"pinyinfeature-\u62fc\u97f3\u7279\u6027"},"PinyinFeature \u62fc\u97f3\u7279\u6027"),(0,i.kt)("p",null,"\u53ef\u4ee5\u901a\u8fc7\u4e34\u65f6\u6216\u603b\u662f\uff08Always\uff09\u4fee\u6539\u5176\u9759\u6001\u6210\u5458\u53d8\u91cf\uff0c\u6765\u51b3\u5b9a PinyinUtils \u4e2d\u65b9\u6cd5\u5bf9\u62fc\u97f3\u7684\u5904\u7406\u65b9\u5f0f\u3002"),(0,i.kt)("h2",{id:"first_word_initial_cap---\u7b2c\u4e00\u4e2a\u5355\u8bcd\u9996\u5b57\u6bcd\u662f\u5426\u5927\u5199"},"FIRST_WORD_INITIAL_CAP - \u7b2c\u4e00\u4e2a\u5355\u8bcd\u9996\u5b57\u6bcd\u662f\u5426\u5927\u5199"),(0,i.kt)("p",null,"\u7b2c\u4e00\u4e2a\u6c49\u5b57\u7684\u62fc\u97f3\u9996\u5b57\u6bcd\u662f\u5426\u5927\u5199\uff0c\u9ed8\u8ba4\u4e3a false\u3002"),(0,i.kt)("h2",{id:"second_word_initial_cap---\u7b2c\u4e8c\u4e2a\u5355\u8bcd\u9996\u5b57\u6bcd\u662f\u5426\u5927\u5199"},"SECOND_WORD_INITIAL_CAP - \u7b2c\u4e8c\u4e2a\u5355\u8bcd\u9996\u5b57\u6bcd\u662f\u5426\u5927\u5199"),(0,i.kt)("p",null,"\u540e\u7eed\u6c49\u5b57\u7684\u62fc\u97f3\u9996\u5b57\u6bcd\u662f\u5426\u5927\u5199\uff0c\u9ed8\u8ba4\u4e3a false\u3002"),(0,i.kt)("h2",{id:"has_separator_by_not_pinyin_around---\u975e\u62fc\u97f3\u524d\u540e\u662f\u5426\u9700\u8981\u5206\u9694\u7b26"},"HAS_SEPARATOR_BY_NOT_PINYIN_AROUND - \u975e\u62fc\u97f3\u524d\u540e\u662f\u5426\u9700\u8981\u5206\u9694\u7b26"),(0,i.kt)("p",null,"\u5982\u679c\u9047\u5230\u975e\u6c49\u5b57\uff0c\u4f20\u53c2\u4e86\u5206\u9694\u7b26\u65f6\uff0c\u975e\u6c49\u5b57\u7684\u4e24\u4fa7\u662f\u5426\u9700\u8981\u6b64\u5206\u9694\u7b26\uff0c\u9ed8\u8ba4\u4e3a false\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'// \u8f93\u51fa\u7ed3\u679c\u4e3a h\u01ceo h\u01ceo xu\xe9 x\xed\uff0cti\u0101n ti\u0101n xi\xe0ng sh\xe0ng\uff0c\u53ef\u4ee5\u770b\u5230\u201c\uff0c\u201d\u7684\u4e24\u8fb9\u6ca1\u6709\u7a7a\u683c\nSystem.out.println(PinyinUtils.get("\u597d\u597d\u5b66\u4e60\uff0c\u5929\u5929\u5411\u4e0a", true, true, " "));\n\n// \u4e34\u65f6\u8bbe\u7f6e\u975e\u62fc\u97f3\u524d\u540e\u9700\u8981\u5206\u9694\u7b26\nPinyinFeature.setHasSeparatorByNotPinyinAround(true);\n// \u8f93\u51fa\u7ed3\u679c\u4e3a h\u01ceo h\u01ceo xu\xe9 x\xed \uff0c ti\u0101n ti\u0101n xi\xe0ng sh\xe0ng\nSystem.out.println(PinyinUtils.get("\u597d\u597d\u5b66\u4e60\uff0c\u5929\u5929\u5411\u4e0a", true, true, " "));\n')))}s.isMDXComponent=!0}}]);