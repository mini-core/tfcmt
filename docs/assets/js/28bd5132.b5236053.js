"use strict";(self.webpackChunktfcmt=self.webpackChunktfcmt||[]).push([[574],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return l}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function m(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),c=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,d=m(e,["components","mdxType","originalType","parentName"]),p=c(n),l=a,f=p["".concat(u,".").concat(l)]||p[l]||s[l]||o;return n?r.createElement(f,i(i({ref:t},d),{},{components:n})):r.createElement(f,i({ref:t},d))}));function l(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=p;var m={};for(var u in t)hasOwnProperty.call(t,u)&&(m[u]=t[u]);m.originalType=e,m.mdxType="string"==typeof e?e:a,i[1]=m;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},157:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return u},default:function(){return l},frontMatter:function(){return m},metadata:function(){return c},toc:function(){return s}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=["components"],m={sidebar_position:400},u="Embed metadata in comments",c={unversionedId:"embedded-metadata",id:"embedded-metadata",title:"Embed metadata in comments",description:"#67",source:"@site/docs/embedded-metadata.md",sourceDirName:".",slug:"/embedded-metadata",permalink:"/tfcmt/embedded-metadata",draft:!1,editUrl:"https://github.com/suzuki-shunsuke/tfcmt-docs/edit/main/docs/embedded-metadata.md",tags:[],version:"current",sidebarPosition:400,frontMatter:{sidebar_position:400},sidebar:"tutorialSidebar",previous:{title:"Environment variable",permalink:"/tfcmt/environment-variable"},next:{title:"Compared with tfnotify v0.7.0",permalink:"/tfcmt/compared-with-tfnotify"}},d={},s=[{value:"embedded_var_names",id:"embedded_var_names",level:2}],p={toc:s};function l(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"embed-metadata-in-comments"},"Embed metadata in comments"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/suzuki-shunsuke/tfcmt/pull/67"},"#67")),(0,o.kt)("p",null,"tfcmt embeds metadata into comment with ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/suzuki-shunsuke/github-comment-metadata"},"github-comment-metadata"),".\ntfcmt itself doesn't support hiding old comments, but you can hide comments with ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/suzuki-shunsuke/github-comment#hide"},"github-comment's hide command"),"."),(0,o.kt)("h2",{id:"embedded_var_names"},"embedded_var_names"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/suzuki-shunsuke/tfcmt/issues/108"},"#108")," ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/suzuki-shunsuke/tfcmt/pull/115"},"#115")),(0,o.kt)("p",null,"If you want to embed variables passed by ",(0,o.kt)("inlineCode",{parentName:"p"},"-var")," option, you have to specify variable names by ",(0,o.kt)("inlineCode",{parentName:"p"},"embedded_var_names")," in the configuration."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"embedded_var_names:\n- name\n")))}l.isMDXComponent=!0}}]);