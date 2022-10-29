"use strict";(self.webpackChunktfcmt=self.webpackChunktfcmt||[]).push([[963],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return f}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),p=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=p(e.components);return r.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),c=p(n),f=a,v=c["".concat(u,".").concat(f)]||c[f]||s[f]||i;return n?r.createElement(v,l(l({ref:t},m),{},{components:n})):r.createElement(v,l({ref:t},m))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=c;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var p=2;p<i;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},2319:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return u},default:function(){return f},frontMatter:function(){return o},metadata:function(){return p},toc:function(){return s}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),l=["components"],o={sidebar_position:300},u="Environment variable",p={unversionedId:"environment-variable",id:"environment-variable",title:"Environment variable",description:"* GITHUB_TOKEN",source:"@site/docs/environment-variable.md",sourceDirName:".",slug:"/environment-variable",permalink:"/tfcmt/environment-variable",draft:!1,editUrl:"https://github.com/suzuki-shunsuke/tfcmt-docs/edit/main/docs/environment-variable.md",tags:[],version:"current",sidebarPosition:300,frontMatter:{sidebar_position:300},sidebar:"tutorialSidebar",previous:{title:"Configuration",permalink:"/tfcmt/config"},next:{title:"Embed metadata in comments",permalink:"/tfcmt/embedded-metadata"}},m={},s=[{value:"Native support of some CI platforms",id:"native-support-of-some-ci-platforms",level:2},{value:"Google Cloud Build Support",id:"google-cloud-build-support",level:2},{value:"Custom Environment Variable Definition",id:"custom-environment-variable-definition",level:2}],c={toc:s};function f(e){var t=e.components,n=(0,a.Z)(e,l);return(0,i.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"environment-variable"},"Environment variable"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"GITHUB_TOKEN"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#native-support-of-some-ci-platforms"},"Native support of some CI platforms")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#custom-environment-variable-definition"},"Custom Environment Variable Definition"))),(0,i.kt)("h2",{id:"native-support-of-some-ci-platforms"},"Native support of some CI platforms"),(0,i.kt)("p",null,"Currently, supported CI are here:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"CircleCI"),(0,i.kt)("li",{parentName:"ul"},"Drone"),(0,i.kt)("li",{parentName:"ul"},"AWS CodeBuild"),(0,i.kt)("li",{parentName:"ul"},"GitHub Actions"),(0,i.kt)("li",{parentName:"ul"},"Google Cloud Build")),(0,i.kt)("p",null,"On the supported CI platform, the following parameters are complemented by the built-in environment variables."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"-owner")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"-repo")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"-pr")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"-sha")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"-build-url"))),(0,i.kt)("p",null,"This feature is implemented by ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/suzuki-shunsuke/go-ci-env"},"go-ci-env"),"."),(0,i.kt)("p",null,"\u26a0\ufe0f You can also use tfcmt on other platform with CLI flags or Custom Environment Variable Definition."),(0,i.kt)("h2",{id:"google-cloud-build-support"},"Google Cloud Build Support"),(0,i.kt)("p",null,"tfcmt >= ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/suzuki-shunsuke/tfcmt/releases/tag/v3.3.0"},"v3.3.0")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/suzuki-shunsuke/tfcmt/pull/376"},"#376")),(0,i.kt)("p",null,"Set the environment variable ",(0,i.kt)("inlineCode",{parentName:"p"},"GOOGLE_CLOUD_BUILD"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"GOOGLE_CLOUD_BUILD=true\n")),(0,i.kt)("p",null,"Set the following environment variables using ",(0,i.kt)("a",{parentName:"p",href:"https://cloud.google.com/cloud-build/docs/configuring-builds/substitute-variable-values"},"substitutions"),"."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"COMMIT_SHA")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"BUILD_ID")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"PROJECT_ID")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"_PR_NUMBER")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"_REGION"))),(0,i.kt)("p",null,"Specify the repository owner and name in ",(0,i.kt)("inlineCode",{parentName:"p"},"tfcmt.yaml"),"."),(0,i.kt)("p",null,"e.g."),(0,i.kt)("p",null,"tfcmt.yaml"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"repo_owner: suzuki-shunsuke\nrepo_name: tfcmt\n")),(0,i.kt)("h2",{id:"custom-environment-variable-definition"},"Custom Environment Variable Definition"),(0,i.kt)("p",null,"You can complement the above parameters on the other platform like Travis CI and Jenkins with Custom Environment Variable Definition."),(0,i.kt)("p",null,"tfcmt.yaml"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'ci:\n  pr:\n  - type: envsubst\n    value: "${PR_NUMBER}"\n  sha:\n  - type: envsubst\n    value: "${SHA}"\n  link:\n  - type: envsubst\n    value: "${LINK}"\n  owner:\n  - type: envsubst\n    value: "${REPO_OWNER}"\n  repo:\n  - type: envsubst\n    value: "${REPO_NAME}"\n  vars:\n    yoo: # the variable "yoo" is added to ".Vars"\n    - type: template\n      value: \'{{env "YOO"}}\'\n')),(0,i.kt)("p",null,"The following types are supported."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"envsubst"),": ",(0,i.kt)("a",{parentName:"li",href:"https://pkg.go.dev/github.com/drone/envsubst#EvalEnv"},"drone/envsubst#EvalEnv")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"template"),": Go's ",(0,i.kt)("a",{parentName:"li",href:"https://golang.org/pkg/text/template/"},"text/template")," with ",(0,i.kt)("a",{parentName:"li",href:"http://masterminds.github.io/sprig/"},"sprig functions"))))}f.isMDXComponent=!0}}]);