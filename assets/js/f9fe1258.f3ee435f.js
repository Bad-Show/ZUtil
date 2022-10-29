"use strict";(self.webpackChunkzutil_docs=self.webpackChunkzutil_docs||[]).push([[953],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>h});var n=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function r(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=n.createContext({}),m=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=m(e.components);return n.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,p=r(e,["components","mdxType","originalType","parentName"]),c=m(a),h=o,u=c["".concat(s,".").concat(h)]||c[h]||d[h]||i;return a?n.createElement(u,l(l({ref:t},p),{},{components:a})):n.createElement(u,l({ref:t},p))}));function h(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=a.length,l=new Array(i);l[0]=c;var r={};for(var s in t)hasOwnProperty.call(t,s)&&(r[s]=t[s]);r.originalType=e,r.mdxType="string"==typeof e?e:o,l[1]=r;for(var m=2;m<i;m++)l[m]=a[m];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},4244:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>r,toc:()=>m});var n=a(7462),o=(a(7294),a(3905));const i={slug:"javaTimeZone",title:"java.time \u65f6\u533a\u8be6\u89e3",authors:["duanluan"],tags:["time","zone","\u65f6\u533a","\u65f6\u95f4"]},l=void 0,r={permalink:"/ZUtil/blog/javaTimeZone",editUrl:"https://github.com/duanluan/ZUtil/tree/main/docs/blog/2022-07-29-java.time-zone/001-java.time_\u65f6\u533a\u8be6\u89e3.md",source:"@site/blog/2022-07-29-java.time-zone/001-java.time_\u65f6\u533a\u8be6\u89e3.md",title:"java.time \u65f6\u533a\u8be6\u89e3",description:"LocalDateTime\u7c7b\u662f\u4e0d\u5305\u542b\u65f6\u533a\u4fe1\u606f\u7684\uff0c\u53ef\u4ee5\u901a\u8fc7atZone\u65b9\u6cd5\u6765\u8bbe\u7f6eZoneId\uff0c\u8fd4\u56deZonedDateTime\u7c7b\u5b9e\u4f8b\uff0c\u901a\u8fc7atOffset\u65b9\u6cd5\u6765\u8bbe\u7f6eZoneOffset\uff0c\u8fd4\u56deOffsetDateTime\u7c7b\u5b9e\u4f8b\u3002",date:"2022-07-29T00:00:00.000Z",formattedDate:"2022\u5e747\u670829\u65e5",tags:[{label:"time",permalink:"/ZUtil/blog/tags/time"},{label:"zone",permalink:"/ZUtil/blog/tags/zone"},{label:"\u65f6\u533a",permalink:"/ZUtil/blog/tags/\u65f6\u533a"},{label:"\u65f6\u95f4",permalink:"/ZUtil/blog/tags/\u65f6\u95f4"}],readingTime:15.1,hasTruncateMarker:!1,authors:[{name:"ZhongJianhao",title:"Maintainer of ZUtil",url:"https://github.com/duanluan",imageURL:"https://github.com/duanluan.png",key:"duanluan"}],frontMatter:{slug:"javaTimeZone",title:"java.time \u65f6\u533a\u8be6\u89e3",authors:["duanluan"],tags:["time","zone","\u65f6\u533a","\u65f6\u95f4"]},nextItem:{title:"\u6b22\u8fce",permalink:"/ZUtil/blog/welcome"}},s={authorsImageUrls:[void 0]},m=[{value:"ZonedDateTime",id:"zoneddatetime",level:2},{value:"withZoneSameLocal \u548c withZoneSameInstant \u7684\u4f7f\u7528\u4e0e\u533a\u522b",id:"withzonesamelocal-\u548c-withzonesameinstant-\u7684\u4f7f\u7528\u4e0e\u533a\u522b",level:2},{value:"withZoneSameLocal \u7b80\u4ecb",id:"withzonesamelocal-\u7b80\u4ecb",level:3},{value:"withZoneSameInstant \u7b80\u4ecb",id:"withzonesameinstant-\u7b80\u4ecb",level:3},{value:"\u2026\u2026",id:"",level:2},{value:"\u7591\u95ee",id:"\u7591\u95ee",level:2},{value:"\u53c2\u8003",id:"\u53c2\u8003",level:2}],p={toc:m};function d(e){let{components:t,...i}=e;return(0,o.kt)("wrapper",(0,n.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"LocalDateTime"),"\u7c7b\u662f\u4e0d\u5305\u542b\u65f6\u533a\u4fe1\u606f\u7684\uff0c\u53ef\u4ee5\u901a\u8fc7",(0,o.kt)("inlineCode",{parentName:"p"},"atZone"),"\u65b9\u6cd5\u6765\u8bbe\u7f6e",(0,o.kt)("inlineCode",{parentName:"p"},"ZoneId"),"\uff0c\u8fd4\u56de",(0,o.kt)("inlineCode",{parentName:"p"},"ZonedDateTime"),"\u7c7b\u5b9e\u4f8b\uff0c\u901a\u8fc7",(0,o.kt)("inlineCode",{parentName:"p"},"atOffset"),"\u65b9\u6cd5\u6765\u8bbe\u7f6e",(0,o.kt)("inlineCode",{parentName:"p"},"ZoneOffset"),"\uff0c\u8fd4\u56de",(0,o.kt)("inlineCode",{parentName:"p"},"OffsetDateTime"),"\u7c7b\u5b9e\u4f8b\u3002"),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(996).Z,width:"506",height:"232"})),(0,o.kt)("h2",{id:"zoneddatetime"},"ZonedDateTime"),(0,o.kt)("p",null,"\u6211\u4eec\u6765\u9010\u6bb5\u89e3\u8bfb\u4e00\u4e0b ZonedDateTime \u7c7b\u7684\u6ce8\u91ca\u3002"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"A date-time with a time-zone in the ISO-8601 calendar system, such as ",(0,o.kt)("inlineCode",{parentName:"p"},"2007-12-03T10:15:30+01:00 Europe/Paris"),"."),(0,o.kt)("p",{parentName:"blockquote"},"ISO-8601 \u65e5\u5386\u7cfb\u7edf\u4e2d\u5e26\u65f6\u533a\u7684\u65e5\u671f\u65f6\u95f4\uff0c\u4f8b\u5982",(0,o.kt)("inlineCode",{parentName:"p"},"2007-12-03T10:15:30+01:00 Europe/Paris"),"\u3002")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://zh.wikipedia.org/wiki/ISO_8601"},"ISO-8601")," \u6211\u4eec\u7b80\u5355\u7406\u89e3\u4e3a\u662f\u89c4\u5b9a\u65e5\u671f\u548c\u65f6\u95f4\u5982\u4f55\u8868\u793a\u7684\u6807\u51c6\u5373\u53ef\uff0c\u6b64\u5904\u4e0d\u6df1\u5165\u7814\u7a76\u3002"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"2007-12-03T10:15:30+01:00 Europe/Paris"),"\u4e2d\uff0c",(0,o.kt)("inlineCode",{parentName:"p"},"2007-12-03"),"\u4e3a\u5e74\u6708\u65e5\uff1b",(0,o.kt)("inlineCode",{parentName:"p"},"T"),"\u662f\u65e5\u671f\u548c\u65f6\u95f4\u7ec4\u5408\u8868\u793a\u65f6\u7684\u56fa\u5b9a\u5199\u6cd5\uff0c\u7528\u4e8e\u5206\u9694\uff1b",(0,o.kt)("inlineCode",{parentName:"p"},"10:15:30"),"\u662f\u5c0f\u65f6\u5206\u949f\u79d2\uff1b",(0,o.kt)("inlineCode",{parentName:"p"},"+01:00"),"\u662f\u6b64\u65e5\u671f\u65f6\u95f4\u4e0e UTC \u7684\u65f6\u5dee\u4e3a +1 \u5c0f\u65f6\uff0c\u5373",(0,o.kt)("strong",{parentName:"p"},"\u65f6\u533a\u504f\u79fb\uff08ZoneOffset\uff09"),"\uff1b",(0,o.kt)("inlineCode",{parentName:"p"},"Europe/Paris"),"\u662f\u6307\u6b64\u65e5\u671f\u65f6\u95f4\u7684\u6240\u5728\u533a\u57df\u4e3a\u6b27\u6d32/\u5df4\u9ece\uff0c\u5373",(0,o.kt)("strong",{parentName:"p"},"\u65f6\u533a ID\uff08ZoneId\uff09"),"\uff0ctime-zone ID \u8bf7\u67e5\u770b\uff1a",(0,o.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/List_of_tz_database_time_zones"},"List of tz database time zones"),"\u3002"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},'ZonedDateTime is an immutable representation of a date-time with a time-zone. This class stores all date and time fields, to a precision of nanoseconds, and a time-zone, with a zone offset used to handle ambiguous local date-times. For example, the value "2nd October 2007 at 13:45.30.123456789 +02:00 in the Europe/Paris time-zone" can be stored in a ',(0,o.kt)("inlineCode",{parentName:"p"},"ZonedDateTime"),"."),(0,o.kt)("p",{parentName:"blockquote"},"ZonedDateTime \u662f\u5e26\u65f6\u533a\u7684\u65e5\u671f\u65f6\u95f4\u7684\u5e38\u91cf\u8868\u793a\u3002\u6b64\u7c7b\u5b58\u50a8\u6240\u6709\u7684\u65e5\u671f\u65f6\u95f4\uff08\u7cbe\u786e\u5230\u7eb3\u79d2\uff09\u548c\u65f6\u533a\uff0c\u5176\u4e2d\u65f6\u533a\u504f\u79fb\u7528\u4e8e\u5904\u7406\u4e0d\u660e\u786e\u7684\u672c\u5730\u65e5\u671f\u65f6\u95f4\u3002 \u4f8b\u5982\uff0c\u503c\u201c2nd October 2007 at 13:45.30.123456789 +02:00 in the Europe/Paris time-zone\u201d \u53ef\u4ee5\u88ab\u5b58\u50a8\u5728",(0,o.kt)("inlineCode",{parentName:"p"},"ZonedDateTime"),"\u4e2d\u3002")),(0,o.kt)("p",null,"\u8bf4\u5b83\u662f\u5e38\u91cf\u662f\u56e0\u4e3a\u6b64\u7c7b\u662f\u88ab",(0,o.kt)("inlineCode",{parentName:"p"},"final"),"\u4fee\u9970\u7684\uff0c\u8c03\u7528\u5b83\u7684\u65b9\u6cd5\u65f6\uff0c",(0,o.kt)("strong",{parentName:"p"},"\u8fd4\u56de"),"\u7684\u90fd\u662f",(0,o.kt)("strong",{parentName:"p"},"\u65b0\u5b9e\u4f8b"),"\u3002"),(0,o.kt)("p",null,"\u201c\u65f6\u533a\u504f\u79fb\u7528\u4e8e\u5904\u7406\u4e0d\u660e\u786e\u7684\u672c\u5730\u65e5\u671f\u65f6\u95f4\u201d\uff0c\u4e4b\u6240\u4ee5\u4e0d\u660e\u786e\uff0c\u662f\u56e0\u4e3a",(0,o.kt)("a",{parentName:"p",href:"https://zh.wikipedia.org/wiki/%E5%A4%8F%E4%BB%A4%E6%97%B6"},"\u590f\u4ee4\u65f6"),"\u7684\u5b58\u5728\uff0c\u540c\u4e00\u5730\u533a\uff0c\u4e0d\u540c\u6708\u4efd\uff0c\u751a\u81f3\u4e0d\u540c\u5e74\u4efd\u7684 ZoneOffset \u53ef\u80fd\u4e0d\u4e00\u6837\u3002\u8be6\u89c1",(0,o.kt)("a",{parentName:"p",href:"https://zh.wikipedia.org/wiki/%E6%97%B6%E5%8C%BA%E4%BF%A1%E6%81%AF%E6%95%B0%E6%8D%AE%E5%BA%93"},"\u65f6\u533a\u4fe1\u606f\u6570\u636e\u5e93"),"\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'LocalDateTime localDateTime = LocalDateTime.of(2022, 1, 1, 0, 0);\n// \u8bbe\u7f6e\u65f6\u533a ID \u4e3a \u7f8e\u56fd/\u7ebd\u7ea6\nZonedDateTime zonedDateTime = localDateTime.atZone(ZoneId.of("America/New_York"));\n// \u8f93\u51fa\u4e3a -05:00\nSystem.out.println(zonedDateTime.getOffset());\n\n// \u8bbe\u7f6e\u6708\u4efd\u4e3a 4 \u6708\uff0c\u5373\u590f\u4ee4\u65f6\nzonedDateTime = zonedDateTime.withMonth(4);\n// \u8f93\u51fa\u4e3a -04:00\nSystem.out.println(zonedDateTime.getOffset());\n\n')),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"This class handles conversion from the local time-line of ",(0,o.kt)("inlineCode",{parentName:"p"},"LocalDateTime")," to the instant time-line of ",(0,o.kt)("inlineCode",{parentName:"p"},"Instant"),". The difference between the two time-lines is the offset from UTC/Greenwich, represented by a ",(0,o.kt)("inlineCode",{parentName:"p"},"ZoneOffset"),"."),(0,o.kt)("p",{parentName:"blockquote"},"\u6b64\u7c7b\u5904\u7406",(0,o.kt)("inlineCode",{parentName:"p"},"LocalDateTime"),"\u7684\u672c\u5730\u65f6\u95f4\u7ebf\u5230",(0,o.kt)("inlineCode",{parentName:"p"},"Instant"),"\u7684\u77ac\u65f6\u65f6\u95f4\u7ebf\u3002\u4e24\u6761\u65f6\u95f4\u7ebf\u7684\u5dee\u5f02\u662f\u4e0e UTC/Greenwich \u7684\u504f\u79fb\u91cf\uff0c\u7531",(0,o.kt)("inlineCode",{parentName:"p"},"ZoneOffset"),"\u8868\u793a\u3002")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Instant\uff08\u77ac\u65f6\uff09"),"\u7b80\u5355\u6765\u8bf4\u5c31\u662f java.time \u4e2d\u7684\u65f6\u95f4\u6233\uff08\u7cbe\u5ea6\u4e3a\u7eb3\u79d2\uff09\uff0c\u4e0d\u5305\u542b\u65f6\u533a\u4fe1\u606f\u3002"),(0,o.kt)("p",null,"\u6b64\u5904\u8bf4\u201c\u4e24\u6761\u65f6\u95f4\u7ebf\u7684\u5dee\u5f02\u662f\u4e0e UTC/Greenwich \u7684\u504f\u79fb\u91cf\u201d\u662f\u6307 Instant \u52a0\u4e0a ZoneOffset \u5c31\u53ef\u4ee5\u83b7\u53d6 LocalDateTime\u3002\u4f46\u5982\u679c\u662f\u8981\u5c06 Instant \u8f6c\u6362\u4e3a ZonedDateTime \u7684\u8bdd\uff0c\u9700\u8981\u8bbe\u7f6e ZoneId\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"Instant instant = Instant.now();\nLocalDateTime localDateTime = instant.atOffset(ZoneOffset.ofHours(8)).toLocalDateTime();\nZonedDateTime zonedDateTime = instant.atZone(ZoneId.systemDefault());\n")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Converting between the two time-lines involves calculating the offset using the ",(0,o.kt)("a",{parentName:"p",href:"https://docs.oracle.com/en/java/javase/17/docs/api/java.base/java/time/zone/ZoneRules.html"},"rules")," accessed from the ",(0,o.kt)("inlineCode",{parentName:"p"},"ZoneId"),". Obtaining the offset for an instant is simple, as there is exactly one valid offset for each instant. By contrast, obtaining the offset for a local date-time is not straightforward. There are three cases:"),(0,o.kt)("ul",{parentName:"blockquote"},(0,o.kt)("li",{parentName:"ul"},"Normal, with one valid offset. For the vast majority of the year, the normal case applies, where there is a single valid offset for the local date-time."),(0,o.kt)("li",{parentName:"ul"},'Gap, with zero valid offsets. This is when clocks jump forward typically due to the spring daylight savings change from "winter" to "summer". In a gap there are local date-time values with no valid offset.'),(0,o.kt)("li",{parentName:"ul"},'Overlap, with two valid offsets. This is when clocks are set back typically due to the autumn daylight savings change from "summer" to "winter". In an overlap there are local date-time values with two valid offsets.')),(0,o.kt)("p",{parentName:"blockquote"},"\u4e24\u6761\u65f6\u95f4\u7ebf\u4e4b\u95f4\u7684\u8f6c\u6362\u6d89\u53ca\u5230\u4f7f\u7528",(0,o.kt)("inlineCode",{parentName:"p"},"ZoneId"),"\u8bbf\u95ee",(0,o.kt)("a",{parentName:"p",href:"https://docs.oracle.com/en/java/javase/17/docs/api/java.base/java/time/zone/ZoneRules.html"},"\u89c4\u5219"),"\uff08ZoneRules\uff09\u8ba1\u7b97\u504f\u79fb\u91cf\u3002\u83b7\u53d6\u4e00\u4e2a instant \u7684\u504f\u79fb\u91cf\u5f88\u7b80\u5355\uff0c\u56e0\u4e3a\u6bcf\u4e2a instant \u6b63\u597d\u6709\u4e00\u4e2a\u6709\u6548\u504f\u79fb\u91cf\u3002\u76f8\u6bd4\u4e4b\u4e0b\uff0c\u83b7\u53d6\u4e00\u4e2a local date-time \u7684\u6709\u6548\u504f\u79fb\u91cf\n\u5e76\u4e0d\u7b80\u5355\u3002\u6709\u4e09\u79cd\u60c5\u51b5\uff1a"),(0,o.kt)("ul",{parentName:"blockquote"},(0,o.kt)("li",{parentName:"ul"},"\u6b63\u5e38\uff1a\u6709\u4e00\u4e2a\u6709\u6548\u7684\u504f\u79fb\u91cf\u3002\u5728\u4e00\u5e74\u4e2d\u7684\u7edd\u5927\u591a\u6570\u65f6\u95f4\u91cc\uff0clocal date-time \u6709\u4e00\u4e2a\u6709\u6548\u7684\u504f\u79fb\u91cf\u3002"),(0,o.kt)("li",{parentName:"ul"},"\u95f4\u9699\uff1a\u6ca1\u6709\u6709\u6548\u7684\u504f\u79fb\u91cf\u3002\u8fd9\u662f\u7531\u4e8e\u6625\u5b63\u590f\u4ee4\u65f6\u4ece\u201c\u51ac\u5b63\u201d\u5230\u201c\u590f\u5b63\u201d\uff0c\u65f6\u949f\u88ab\u8c03\u5feb\u4e86\uff0c\u8df3\u8fc7\u4e86\u4e00\u6bb5\u65f6\u95f4\u3002\u5728\u8df3\u8fc7\u7684\u95f4\u9699\u4e2d\uff0c\u6709 local date-time\uff0c\u4f46\u6ca1\u6709\u6709\u6548\u7684\u504f\u79fb\u91cf\u3002"),(0,o.kt)("li",{parentName:"ul"},"\u91cd\u53e0\uff1a\u6709\u4e24\u4e2a\u6709\u6548\u7684\u504f\u79fb\u91cf\u3002\u8fd9\u662f\u7531\u4e8e\u79cb\u5b63\u590f\u4ee4\u65f6\u4ece\u201c\u590f\u5b63\u201d\u5230\u201c\u51ac\u5b63\u201d\uff0c\u65f6\u949f\u5f80\u56de\u8c03\u4e86\u4e00\u6bb5\u65f6\u95f4\u3002\u5728\u91cd\u53e0\u7684\u60c5\u51b5\u4e0b\uff0c\u6709\u4e24\u4e2a\u6709\u6548\u7684\u504f\u79fb\u91cf\u7684 local date-time\u3002")),(0,o.kt)("p",{parentName:"blockquote"},"Any method that converts directly or implicitly from a local date-time to an instant by obtaining the offset has the potential to be complicated."),(0,o.kt)("p",{parentName:"blockquote"},'For Gaps, the general strategy is that if the local date-time falls in the middle of a Gap, then the resulting zoned date-time will have a local date-time shifted forwards by the length of the Gap, resulting in a date-time in the later offset, typically "summer" time.'),(0,o.kt)("p",{parentName:"blockquote"},'For Overlaps, the general strategy is that if the local date-time falls in the middle of an Overlap, then the previous offset will be retained. If there is no previous offset, or the previous offset is invalid, then the earlier offset is used, typically "summer" time.. Two additional methods, ',(0,o.kt)("a",{parentName:"p",href:"https://docs.oracle.com/en/java/javase/17/docs/api/java.base/java/time/ZonedDateTime.html#withEarlierOffsetAtOverlap()"},"withEarlierOffsetAtOverlap()")," and ",(0,o.kt)("a",{parentName:"p",href:"https://docs.oracle.com/en/java/javase/17/docs/api/java.base/java/time/ZonedDateTime.html#withLaterOffsetAtOverlap()"},"withLaterOffsetAtOverlap()"),", help manage the case of an overlap."),(0,o.kt)("p",{parentName:"blockquote"},"\u4efb\u4f55\u901a\u8fc7\u83b7\u53d6\u504f\u79fb\u91cf\u663e\u5f0f\u6216\u9690\u5f0f\u5730\u5c06 local date-time \u8f6c\u6362\u4e3a instant \u5730\u65b9\u90fd\u6709\u53ef\u80fd\u53d8\u5f97\u590d\u6742\u3002"),(0,o.kt)("p",{parentName:"blockquote"},"\u5bf9\u4e8e\u95f4\u9699\uff0c\u4e00\u822c\u7b56\u7565\u662f\uff0c\u5982\u679c local date-time \u843d\u5728\u95f4\u9699\u4e2d\u95f4\uff0c\u90a3\u4e48\u4ea7\u751f\u7684 zoned date-time \u662f local date-time \u5411\u524d\u79fb\u52a8\u95f4\u6b47\u7684\u957f\u5ea6\u540e\u7684\uff0c\u5bfc\u81f4\u65e5\u671f\u5728\u8f83\u665a\u7684\u504f\u79fb\u91cf\uff0c\u901a\u5e38\u662f\u201c\u590f\u5b63\u201d\u65f6\u95f4\u3002"),(0,o.kt)("p",{parentName:"blockquote"},"\u5bf9\u4e8e\u91cd\u53e0\uff0c\u4e00\u822c\u7b56\u7565\u662f\uff0c\u5982\u679c local date-time \u843d\u5728\u91cd\u53e0\u4e2d\u95f4\uff0c\u90a3\u4e48\u4ee5\u524d\u7684\u504f\u79fb\u91cf\u5c06\u88ab\u4fdd\u7559\u3002\u5982\u679c\u4ee5\u524d\u6ca1\u6709\u504f\u79fb\u91cf\uff0c\u6216\u8005\u4ee5\u524d\u7684\u504f\u79fb\u91cf\u65e0\u6548\uff0c\u90a3\u4e48\u5c31\u4f7f\u7528\u8f83\u65e9\u7684\u504f\u79fb\u91cf\uff0c\u901a\u5e38\u662f\u201c\u590f\u5b63\u201d\u65f6\u95f4\u3002\u4e24\u4e2a\u989d\u5916\u7684\u65b9\u6cd5\uff0c",(0,o.kt)("a",{parentName:"p",href:"https://docs.oracle.com/en/java/javase/17/docs/api/java.base/java/time/ZonedDateTime.html#withEarlierOffsetAtOverlap()"},"withEarlierOffsetAtOverlap()")," and ",(0,o.kt)("a",{parentName:"p",href:"https://docs.oracle.com/en/java/javase/17/docs/api/java.base/java/time/ZonedDateTime.html#withLaterOffsetAtOverlap()"},"withLaterOffsetAtOverlap()"),"\uff0c\u53ef\u4ee5\u5e2e\u52a9\u7ba1\u7406\u91cd\u5408\u7684\u60c5\u51b5\u3002"),(0,o.kt)("p",{parentName:"blockquote"},"In terms of design, this class should be viewed primarily as the combination of a ",(0,o.kt)("inlineCode",{parentName:"p"},"LocalDateTime")," and a ",(0,o.kt)("inlineCode",{parentName:"p"},"ZoneId"),". The ",(0,o.kt)("inlineCode",{parentName:"p"},"ZoneOffset")," is a vital, but secondary, piece of information, used to ensure that the class represents an instant, especially during a daylight savings overlap."),(0,o.kt)("p",{parentName:"blockquote"},"\u5c31\u8bbe\u8ba1\u800c\u8a00\uff0c\u8fd9\u4e2a\u7c7b\u5e94\u8be5\u4e3b\u8981\u88ab\u770b\u4f5c\u662f",(0,o.kt)("inlineCode",{parentName:"p"},"LocalDateTime"),"\u548c",(0,o.kt)("inlineCode",{parentName:"p"},"ZoneId"),"\u7684\u7ec4\u5408\u3002",(0,o.kt)("inlineCode",{parentName:"p"},"ZoneOffset"),"\u662f\u4e00\u4e2a\u91cd\u8981\u4f46\u6b21\u8981\u7684\u4fe1\u606f\uff0c\u7528\u6765\u786e\u4fdd\u8fd9\u4e2a\u7c7b\u4ee3\u8868\u4e00\u4e2a\u77ac\u95f4\uff0c\u7279\u522b\u662f\u5728\u590f\u4ee4\u65f6\u91cd\u53e0\u7684\u65f6\u5019\u3002")),(0,o.kt)("p",null,"\u6b64\u5904\u4e3e\u4f8b\uff0c\u7f8e\u56fd\u590f\u4ee4\u65f6\u4e00\u822c\u5728 ",(0,o.kt)("strong",{parentName:"p"},"3 \u6708\u7b2c\u4e8c\u4e2a\u5468\u65e5 2AM")," \u5f00\u59cb\uff0c\u5c06\u65f6\u949f\u62e8\u5feb 1 \u5c0f\u65f6\uff0c\u8c03\u5230 3 \u70b9\uff0c\u90a3\u8fd9\u4e00\u5c0f\u65f6\u5c31\u662f\u201c\u51ac\u5b63\u201d\u5230\u201c\u590f\u5b63\u201d\u7684",(0,o.kt)("strong",{parentName:"p"},"\u95f4\u9699\uff08Gap\uff09"),"\uff1b\u5728 ",(0,o.kt)("strong",{parentName:"p"},"11 \u6708\u7b2c\u4e00\u4e2a\u5468\u65e5 2AM"),"\uff0c\u53c8\u4f1a\u5c06\u65f6\u949f\u62e8\u6162 1 \u5c0f\u65f6\uff0c\u8c03\u56de\u5230 1 \u70b9\uff0c\u90a3\u8fd9\u4e00\u5c0f\u65f6\u5c31\u662f\u201c\u590f\u5b63\u201d\u5230\u201c\u51ac\u5b63\u201d\u7684",(0,o.kt)("strong",{parentName:"p"},"\u91cd\u53e0\uff08Overlap\uff09"),"\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'ZoneId zoneId = ZoneId.of("America/New_York");\nZoneRules zoneRules = zoneId.getRules();\n// \u7f8e\u56fd/\u7ebd\u7ea6 2022 \u5e74\u7684\u590f\u4ee4\u65f6\u95f4\u6b47\u65f6\u95f4\u4e3a 03-13 02:00 ~ 03:00\uff08\u4e0d\u5305\u542b 03:00\uff09\nLocalDateTime localDateTime = LocalDateTime.of(2022, 3, 13, 2, 30);\nZoneOffsetTransition zoneRulesTransition = zoneRules.getTransition(localDateTime);\nSystem.out.println(zoneRulesTransition);\nSystem.out.println(zoneRules.getTransition(localDateTime.plusMinutes(30)));\n// \u5982\u679c\u65f6\u95f4\u843d\u5728\u95f4\u6b47\u4e2d\u95f4\uff0c\u90a3\u5bf9\u5e94\u7684 zoned date-time \u4f1a\u52a0\u4e0a\u95f4\u6b47\u957f\u5ea6\uff08\u6b64\u5904\u4e3a 1 \u5c0f\u65f6\uff09\uff0c\u540c\u65f6\u65f6\u533a\u504f\u79fb\u91cf\u4e3a\u590f\u4ee4\u65f6\u504f\u79fb\u91cf\u3002\nSystem.out.println(localDateTime.atZone(zoneId));\n\n// \u8f93\u51fa\u7ed3\u679c\u4e3a\uff1a\nTransition[Gap at 2022-03-13T02:00-05:00 to -04:00]\nnull\n2022-03-13T03:30-04:00[America/New_York]\n')),(0,o.kt)("p",null,"\u8bf4\u201c\u95f4\u6b47\u6ca1\u6709\u6709\u6548\u7684\u504f\u79fb\u91cf\u201d\uff0c\u662f\u56e0\u4e3a\u843d\u5728\u95f4\u6b47\u518d\u8f6c\u6362\u4e3a zoned date-time \u540e\uff0c\u4f1a\u81ea\u52a8\u52a0\u4e0a\u95f4\u6b47\u957f\u5ea6\uff0c\u6240\u4ee5\u90a3\u6bb5\u65f6\u95f4\u53ea\u6709 local date-time\uff0c\u6ca1\u6709\u504f\u79fb\u91cf\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'ZoneId zoneId = ZoneId.of("America/New_York");\nZoneRules zoneRules = zoneId.getRules();\n// \u7f8e\u56fd/\u7ebd\u7ea6 2022 \u5e74\u7684\u590f\u4ee4\u65f6\u91cd\u53e0\u65f6\u95f4\u4e3a 11-06 01:00 ~ 02:00\uff08\u4e0d\u5305\u542b 02:00\uff09\nLocalDateTime localDateTime = LocalDateTime.of(2022, 11, 6, 1, 30);\nZoneOffsetTransition zoneRulesTransition = zoneRules.getTransition(localDateTime);\nSystem.out.println(zoneRulesTransition);\nSystem.out.println(zoneRules.getTransition(localDateTime.plusMinutes(30)));\n// \u5982\u679c\u65f6\u95f4\u843d\u5728\u91cd\u53e0\u4e2d\u95f4\uff0c\u4ee5\u524d\u6ca1\u6709\u504f\u79fb\u91cf\u6216\u8005\u4ee5\u524d\u7684\u504f\u79fb\u91cf\u65e0\u6548\u65f6\uff0c\u4f1a\u4f7f\u7528\u8f83\u65e9\u7684\u504f\u79fb\u91cf\uff0c\u5373\u590f\u4ee4\u65f6\u504f\u79fb\u91cf -04:00\nSystem.out.println(localDateTime.atZone(zoneId));\n// \u5982\u679c\u65f6\u95f4\u843d\u5728\u91cd\u53e0\u4e2d\u95f4\uff0c\u4ee5\u524d\u6709\u504f\u79fb\u91cf\u4e14\u66f4\u665a\u65f6\uff0c\u4f1a\u4f7f\u7528\u8f83\u665a\u7684\u504f\u79fb\u91cf\uff0c\u5373\u975e\u590f\u4ee4\u65f6\u504f\u79fb\u91cf -05:00\nSystem.out.println(localDateTime.atOffset(ZoneOffset.ofHours(-6)).atZoneSameInstant(zoneId));\n\n// \u8f93\u51fa\u7ed3\u679c\u4e3a\uff1a\nTransition[Overlap at 2022-11-06T02:00-04:00 to -05:00]\nnull\n2022-11-06T01:30-04:00[America/New_York]\n2022-11-06T02:30-05:00[America/New_York]\n')),(0,o.kt)("p",null,"\u8bf4\u201c\u91cd\u53e0\u6709\u4e24\u4e2a\u6709\u6548\u7684\u504f\u79fb\u91cf\u201d\uff0c\u662f\u56e0\u4e3a\u843d\u5728\u91cd\u53e0\u65f6\uff0c\u5982\u679c\u4ee5\u524d\u6ca1\u6709\u504f\u79fb\u91cf\u6216\u8005\u4ee5\u524d\u7684\u504f\u79fb\u91cf\u65e0\u6548\u65f6\uff0c\u4f1a\u4f7f\u7528\u8f83\u65e9\u7684\u504f\u79fb\u91cf\uff1b\u5982\u679c\u4ee5\u524d\u6709\u504f\u79fb\u91cf\u4e14\u66f4\u665a\u65f6\uff0c\u4f1a\u4f7f\u7528\u8f83\u665a\u7684\u504f\u79fb\u91cf\u3002"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"This is a ",(0,o.kt)("a",{parentName:"p",href:"https://docs.oracle.com/en/java/javase/17/docs/api/java.base/java/lang/doc-files/ValueBased.html"},"value-based")," class; use of identity-sensitive operations (including reference equality (",(0,o.kt)("inlineCode",{parentName:"p"},"=="),"), identity hash code, or synchronization) on instances of ",(0,o.kt)("inlineCode",{parentName:"p"},"ZonedDateTime")," may have unpredictable results and should be avoided. The ",(0,o.kt)("inlineCode",{parentName:"p"},"equals")," method should be used for comparisons."),(0,o.kt)("p",{parentName:"blockquote"},"\u8fd9\u662f\u4e00\u4e2a ",(0,o.kt)("a",{parentName:"p",href:"https://docs.oracle.com/en/java/javase/17/docs/api/java.base/java/lang/doc-files/ValueBased.html"},"value-based")," \u7c7b\uff1b\u5728",(0,o.kt)("inlineCode",{parentName:"p"},"ZonedDateTime"),"\u7684\u5b9e\u4f8b\u4e0a\u4f7f\u7528 identity-sensitive \u7684\u64cd\u4f5c\uff08\u5305\u62ec\u5f15\u7528\u76f8\u7b49",(0,o.kt)("inlineCode",{parentName:"p"},"=="),"\u3001identity hash code \u6216\u540c\u6b65 synchronization\uff09\u53ef\u80fd\u4f1a\u4ea7\u751f\u4e0d\u53ef\u9884\u6d4b\u7684\u7ed3\u679c\uff0c\u6240\u4ee5\u8981\u907f\u514d\u3002\u5e94\u8be5\u4f7f\u7528 equals \u65b9\u6cd5\u6765\u8fdb\u884c\u6bd4\u8f83\u3002"),(0,o.kt)("p",{parentName:"blockquote"},"A ",(0,o.kt)("inlineCode",{parentName:"p"},"ZonedDateTime")," holds state equivalent to three separate objects, a ",(0,o.kt)("inlineCode",{parentName:"p"},"LocalDateTime"),", a ",(0,o.kt)("inlineCode",{parentName:"p"},"ZoneId")," and the resolved ",(0,o.kt)("inlineCode",{parentName:"p"},"ZoneOffset"),". The offset and local date-time are used to define an instant when necessary. The zone ID is used to obtain the rules for how and when the offset changes. The offset cannot be freely set, as the zone controls which offsets are valid."),(0,o.kt)("p",{parentName:"blockquote"},"\u4e00\u4e2a",(0,o.kt)("inlineCode",{parentName:"p"},"ZonedDateTime"),"\u76f8\u5f53\u4e8e\u6301\u6709\u4e09\u4e2a\u72ec\u7acb\u5bf9\u8c61\u7684\u72b6\u6001\uff0c\u4e00\u4e2a",(0,o.kt)("inlineCode",{parentName:"p"},"LocalDateTime"),"\uff0c\u4e00\u4e2a",(0,o.kt)("inlineCode",{parentName:"p"},"ZoneId"),"\u548c\u5df2\u89e3\u51b3\u7684",(0,o.kt)("inlineCode",{parentName:"p"},"ZoneOffset"),"\u3002\u5fc5\u8981\u65f6\uff0c\u504f\u79fb\u91cf\u548c local date-time \u88ab\u7528\u6765\u5b9a\u4e49\u4e00\u4e2a\u77ac\u95f4\u3002zone ID \u88ab\u7528\u6765\u83b7\u53d6\u504f\u79fb\u91cf\u53ca\u4f55\u65f6\u53d8\u5316\u7684\u89c4\u5219\u3002\u504f\u79fb\u91cf\u4e0d\u80fd\u81ea\u7531\u8bbe\u7f6e\uff0c\u56e0\u4e3a\u65f6\u533a\u63a7\u5236\u7740\u54ea\u4e9b\u504f\u79fb\u91cf\u65f6\u6709\u6548\u7684\u3002"),(0,o.kt)("p",{parentName:"blockquote"},"This class is immutable and thread-safe."),(0,o.kt)("p",{parentName:"blockquote"},"\u8fd9\u4e2a\u7c7b\u662f\u4e0d\u53ef\u53d8\u7684\uff0c\u5e76\u4e14\u662f\u7ebf\u7a0b\u5b89\u5168\u7684\u3002")),(0,o.kt)("h2",{id:"withzonesamelocal-\u548c-withzonesameinstant-\u7684\u4f7f\u7528\u4e0e\u533a\u522b"},"withZoneSameLocal \u548c withZoneSameInstant \u7684\u4f7f\u7528\u4e0e\u533a\u522b"),(0,o.kt)("h3",{id:"withzonesamelocal-\u7b80\u4ecb"},"withZoneSameLocal \u7b80\u4ecb"),(0,o.kt)("p",null,"\u5148\u770b ",(0,o.kt)("inlineCode",{parentName:"p"},"withZoneSameLocal")," \u65b9\u6cd5\u7684\u6ce8\u91ca\uff1a"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Returns a copy of this date-time with a different time-zone, retaining the local date-time if possible."),(0,o.kt)("p",{parentName:"blockquote"},"This method changes the time-zone and retains the local date-time. The local date-time is only changed if it is invalid for the new zone, determined using the same approach as ",(0,o.kt)("a",{parentName:"p",href:"https://docs.oracle.com/en/java/javase/17/docs/api/java.base/java/time/ZonedDateTime.html#ofLocal(java.time.LocalDateTime,java.time.ZoneId,java.time.ZoneOffset)"},"ofLocal(LocalDateTime, ZoneId, ZoneOffset)"),"."),(0,o.kt)("p",{parentName:"blockquote"},"To change the zone and adjust the local date-time, use ",(0,o.kt)("a",{parentName:"p",href:"https://docs.oracle.com/en/java/javase/17/docs/api/java.base/java/time/ZonedDateTime.html#withZoneSameInstant(java.time.ZoneId)"},"withZoneSameInstant(ZoneId)"),"."),(0,o.kt)("p",{parentName:"blockquote"},"This instance is immutable and unaffected by this method call."),(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("inlineCode",{parentName:"p"},"@param")," ",(0,o.kt)("inlineCode",{parentName:"p"},"zone")," \u2013 the time-zone to change to, not null"),(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("inlineCode",{parentName:"p"},"@return")," a ",(0,o.kt)("inlineCode",{parentName:"p"},"ZonedDateTime")," based on this date-time with the requested zone, not null"),(0,o.kt)("p",{parentName:"blockquote"},"\u8fd4\u56de\u4e00\u4e2a\u5177\u6709\u4e0d\u540c\u65f6\u533a\u7684 date-time \u7684\u526f\u672c\uff0c\u5982\u679c\u53ef\u80fd\u7684\u8bdd\uff0c\u4fdd\u7559 local date-time\u3002"),(0,o.kt)("p",{parentName:"blockquote"},"\u8fd9\u4e2a\u65b9\u6cd5\u6539\u53d8\u4e86\u65f6\u533a\u5e76\u4fdd\u7559\u4e86 local date-time\u3002\u5728\u65b0\u7684\u65f6\u533a\u65e0\u6548\u65f6\uff0clocal date-time \u624d\u4f1a\u88ab\u6539\u53d8\uff0c\u4e0e\u4f7f\u7528 ",(0,o.kt)("a",{parentName:"p",href:"https://docs.oracle.com/en/java/javase/17/docs/api/java.base/java/time/ZonedDateTime.html#ofLocal(java.time.LocalDateTime,java.time.ZoneId,java.time.ZoneOffset)"},"ofLocal(LocalDateTime, ZoneId, ZoneOffset)")," \u65b9\u6cd5\u76f8\u540c\u3002"),(0,o.kt)("p",{parentName:"blockquote"},"\u8981\u6539\u53d8\u533a\u57df\u5e76\u8c03\u6574 local date-time\uff0c\u8bf7\u4f7f\u7528 ",(0,o.kt)("a",{parentName:"p",href:"https://docs.oracle.com/en/java/javase/17/docs/api/java.base/java/time/ZonedDateTime.html#withZoneSameInstant(java.time.ZoneId)"},"withZoneSameInstant(ZoneId)"),"\u3002"),(0,o.kt)("p",{parentName:"blockquote"},"\u88ab\u8c03\u7528\u5b9e\u4f8b\u662f\u4e0d\u53ef\u53d8\u7684\uff0c\u4e0d\u53d7\u6b64\u65b9\u6cd5\u8c03\u7528\u7684\u5f71\u54cd\u3002"),(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("inlineCode",{parentName:"p"},"\u5f62\u53c2"),"\uff1azone - \u8981\u6539\u53d8\u7684\u65f6\u533a\uff0c\u4e0d\u4e3a null\u3002"),(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("inlineCode",{parentName:"p"},"\u8fd4\u56de\u503c"),"\uff1aa ZonedDateTime - \u57fa\u4e8e\u8be5 date-time \u7684\u8bf7\u6c42\u65f6\u533a\uff0c\u4e0d\u4e3a null\u3002")),(0,o.kt)("p",null,"\u7b80\u5355\u6765\u8bf4\u5c31\u662f\u4fee\u6539\u65f6\u533a\u4f46\u662f\u4fdd\u6301 local date-time \u4e0d\u53d8\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'LocalDateTime localDateTime = LocalDateTime.now();\nZonedDateTime zonedDateTime = localDateTime.atZone(ZoneId.of("Asia/Shanghai"));\nSystem.out.println(zonedDateTime);\nSystem.out.println(zonedDateTime.withZoneSameLocal(ZoneId.of("Europe/Moscow")));\n\n// \u8f93\u51fa\u7ed3\u679c\u4e3a\n2022-08-08T18:45:22.711+08:00[Asia/Shanghai]\n2022-08-08T18:45:22.711+03:00[Europe/Moscow]\n')),(0,o.kt)("h3",{id:"withzonesameinstant-\u7b80\u4ecb"},"withZoneSameInstant \u7b80\u4ecb"),(0,o.kt)("p",null,"\u518d\u770b ",(0,o.kt)("inlineCode",{parentName:"p"},"withZoneSameInstant")," \u65b9\u6cd5\u6ce8\u91ca\uff1a"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Returns a copy of this date-time with a different time-zone, retaining the instant."),(0,o.kt)("p",{parentName:"blockquote"},"This method changes the time-zone and retains the instant. This normally results in a change to the local date-time."),(0,o.kt)("p",{parentName:"blockquote"},"This method is based on retaining the same instant, thus gaps and overlaps in the local time-line have no effect on the result."),(0,o.kt)("p",{parentName:"blockquote"},"To change the offset while keeping the local time, use ",(0,o.kt)("a",{parentName:"p",href:"https://docs.oracle.com/en/java/javase/17/docs/api/java.base/java/time/ZonedDateTime.html#withZoneSameLocal(java.time.ZoneId)"},"withZoneSameLocal(ZoneId)"),"."),(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("inlineCode",{parentName:"p"},"@param")," ",(0,o.kt)("inlineCode",{parentName:"p"},"zone")," \u2013 the time-zone to change to, not null"),(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("inlineCode",{parentName:"p"},"@return")," a ",(0,o.kt)("inlineCode",{parentName:"p"},"ZonedDateTime")," based on this date-time with the requested zone, not null"),(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("inlineCode",{parentName:"p"},"@throws")," ",(0,o.kt)("a",{parentName:"p",href:"https://docs.oracle.com/en/java/javase/17/docs/api/java.base/java/time/DateTimeException.html"},"DateTimeException")," \u2013 if the result exceeds the supported date range"),(0,o.kt)("p",{parentName:"blockquote"},"\u8fd4\u56de\u4e00\u4e2a\u5177\u6709\u4e0d\u540c\u65f6\u533a\u7684 date-time \u7684\u526f\u672c\uff0c\u4fdd\u7559 instant\u3002"),(0,o.kt)("p",{parentName:"blockquote"},"\u8fd9\u4e2a\u65b9\u6cd5\u6539\u53d8\u4e86\u65f6\u533a\u5e76\u4fdd\u7559\u4e86 instant\u3002\u8fd9\u901a\u5e38\u4f1a\u5bfc\u81f4 local date-time \u7684\u6539\u53d8\u3002"),(0,o.kt)("p",{parentName:"blockquote"},"\u8fd9\u4e2a\u65b9\u6cd5\u662f\u57fa\u4e8e\u4fdd\u7559\u76f8\u540c\u7684 instant\uff0c\u56e0\u6b64\u672c\u5730\u65f6\u95f4\u7ebf\u7684\u95f4\u6b47\u548c\u91cd\u53e0\u5bf9\u7ed3\u679c\u6ca1\u6709\u5f71\u54cd\u3002"),(0,o.kt)("p",{parentName:"blockquote"},"\u8981\u4fdd\u6301 local date-time \u7684\u540c\u65f6\u6539\u53d8\u504f\u79fb\u91cf\uff0c\u8bf7\u4f7f\u7528 ",(0,o.kt)("a",{parentName:"p",href:"https://docs.oracle.com/en/java/javase/17/docs/api/java.base/java/time/ZonedDateTime.html#withZoneSameLocal(java.time.ZoneId)"},"withZoneSameLocal(ZoneId)"),"\u3002"),(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("inlineCode",{parentName:"p"},"\u5f62\u53c2"),"\uff1a",(0,o.kt)("inlineCode",{parentName:"p"},"zone")," - \u8981\u6539\u53d8\u7684\u65f6\u533a\uff0c\u4e0d\u4e3a null\u3002"),(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("inlineCode",{parentName:"p"},"\u8fd4\u56de\u503c"),"\uff1aa ",(0,o.kt)("inlineCode",{parentName:"p"},"ZonedDateTime")," - \u57fa\u4e8e\u8be5 date-time \u7684\u8bf7\u6c42\u65f6\u533a\uff0c\u4e0d\u4e3a null\u3002"),(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("inlineCode",{parentName:"p"},"\u629b\u51fa"),"\uff1a",(0,o.kt)("a",{parentName:"p",href:"https://docs.oracle.com/en/java/javase/17/docs/api/java.base/java/time/DateTimeException.html"},"DateTimeException")," \u2013 \u5982\u679c\u7ed3\u679c\u8d85\u51fa\u4e86\u652f\u6301\u7684\u65e5\u671f\u8303\u56f4\u3002")),(0,o.kt)("p",null,"\u7b80\u5355\u6765\u8bf4\u5c31\u662f\u4fee\u6539\u65f6\u533a\u4f46\u662f\u4fdd\u6301 instant \u4e0d\u53d8\u3002\u56e0\u4e3a\u65f6\u533a\u53d8\u4e86\uff0c\u504f\u79fb\u91cf\u80af\u5b9a\u53d8\u4e86\uff0c\u6240\u4ee5 local date-time \u4e5f\u4f1a\u6539\u53d8\u4ee5\u4fdd\u6301 instant \u4e0d\u53d8\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'LocalDateTime localDateTime = LocalDateTime.now();\nZonedDateTime zonedDateTime = localDateTime.atZone(ZoneId.of("Asia/Shanghai"));\nSystem.out.println(zonedDateTime);\nSystem.out.println(zonedDateTime.withZoneSameInstant(ZoneId.of("Europe/Moscow")));\n\n// \u8f93\u51fa\u7ed3\u679c\u4e3a\n2022-08-09T20:06:35.753+08:00[Asia/Shanghai]\n2022-08-09T15:06:35.753+03:00[Europe/Moscow]\n')),(0,o.kt)("h2",{id:""},"\u2026\u2026"),(0,o.kt)("h2",{id:"\u7591\u95ee"},"\u7591\u95ee"),(0,o.kt)("p",null,"\u6211\u4e86\u89e3\u7684\u5e76\u4e0d\u5168\u9762\uff0c\u6216\u8005\u662f\u56e0\u4e3a\u82f1\u8bed\u80fd\u529b\u6709\u9650\uff0c\u539f\u672c\u8981\u548c\u4e0a\u4e0b\u6587\u5173\u8054\u7406\u89e3\u7684\u5730\u65b9\u6ca1\u7ffb\u8bd1\u597d\uff0c\u5bfc\u81f4\u6211\u6709\u4ee5\u4e0b\u7591\u95ee\u3002\u5982\u679c\u4f60\u77e5\u9053\uff0c\u6b22\u8fce\u8054\u7cfb\u6211\uff01"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u6587\u4e2d\u201cor the previous offset is invalid\u201d\u3001\u201cThe local date-time is only changed if it is invalid for the new zone\u201d\u8fd9\u4e24\u6bb5\u8bdd\u7684\u65e0\u6548\u504f\u79fb\u91cf\u3001\u65f6\u533a\u5177\u4f53\u6307\u7684\u662f\u4ec0\u4e48\uff1f")),(0,o.kt)("h2",{id:"\u53c2\u8003"},"\u53c2\u8003"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://zh.wikipedia.org/wiki/%E6%97%B6%E5%8C%BA%E4%BF%A1%E6%81%AF%E6%95%B0%E6%8D%AE%E5%BA%93"},"\u65f6\u533a\u4fe1\u606f\u6570\u636e\u5e93 - \u7ef4\u57fa\u767e\u79d1\uff0c\u81ea\u7531\u7684\u767e\u79d1\u5168\u4e66")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/List_of_tz_database_time_zones"},"List of tz database time zones - Wikipedia")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://zh.wikipedia.org/wiki/%E5%A4%8F%E4%BB%A4%E6%97%B6"},"\u590f\u4ee4\u65f6 - \u7ef4\u57fa\u767e\u79d1\uff0c\u81ea\u7531\u7684\u767e\u79d1\u5168\u4e66"))))}d.isMDXComponent=!0},996:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/java.time.drawio-f8bd73a2d32a84f8214ddba9bbc988d5.png"}}]);