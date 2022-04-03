"use strict";(self.webpackChunktfcmt=self.webpackChunktfcmt||[]).push([[162],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),s=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=s(e.components);return a.createElement(i.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),c=s(n),d=r,f=c["".concat(i,".").concat(d)]||c[d]||m[d]||o;return n?a.createElement(f,l(l({ref:t},p),{},{components:n})):a.createElement(f,l({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=c;var u={};for(var i in t)hasOwnProperty.call(t,i)&&(u[i]=t[i]);u.originalType=e,u.mdxType="string"==typeof e?e:r,l[1]=u;for(var s=2;s<o;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},9390:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return i},default:function(){return d},frontMatter:function(){return u},metadata:function(){return s},toc:function(){return m}});var a=n(7462),r=n(3366),o=(n(7294),n(3905)),l=["components"],u={sidebar_position:150},i="Getting Started",s={unversionedId:"getting-started",id:"getting-started",title:"Getting Started",description:"In this getting started, you can understand tfcmt's primary feature.",source:"@site/docs/getting-started.md",sourceDirName:".",slug:"/getting-started",permalink:"/tfcmt/getting-started",editUrl:"https://github.com/suzuki-shunsuke/tfcmt-docs/edit/main/docs/getting-started.md",tags:[],version:"current",sidebarPosition:150,frontMatter:{sidebar_position:150},sidebar:"tutorialSidebar",previous:{title:"Install",permalink:"/tfcmt/install"},next:{title:"Configuration",permalink:"/tfcmt/config"}},p={},m=[{value:"Requirements",id:"requirements",level:2},{value:"Setup",id:"setup",level:2},{value:"tfcmt plan",id:"tfcmt-plan",level:2},{value:"Pull Request label",id:"pull-request-label",level:3},{value:"Configuration file is optional",id:"configuration-file-is-optional",level:3},{value:"List of changed resources",id:"list-of-changed-resources",level:3},{value:"tfcmt apply",id:"tfcmt-apply",level:2},{value:"Deletion warning",id:"deletion-warning",level:2},{value:"Support of CI platforms",id:"support-of-ci-platforms",level:2},{value:"Hide old comments with github-comment",id:"hide-old-comments-with-github-comment",level:2},{value:"Monorepo support: target variable",id:"monorepo-support-target-variable",level:2}],c={toc:m};function d(e){var t=e.components,n=(0,r.Z)(e,l);return(0,o.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"getting-started"},"Getting Started"),(0,o.kt)("p",null,"In this getting started, you can understand tfcmt's primary feature."),(0,o.kt)("h2",{id:"requirements"},"Requirements"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Terraform"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"install"},"tfcmt")),(0,o.kt)("li",{parentName:"ul"},"GitHub Access Token")),(0,o.kt)("h2",{id:"setup"},"Setup"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},"$ git clone https://github.com/suzuki-shunsuke/tfcmt\n$ cd tfcmt/examples/getting-started\n$ terraform init\n$ terraform validate\n$ terraform plan\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},"$ export GITHUB_TOKEN=xxx # your personal access token\n")),(0,o.kt)("p",null,"Open an issue or pull request at your repository to post comments with tfcmt.\n",(0,o.kt)("strong",{parentName:"p"},"Please change values properly"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},"$ PR_NUMBER=70\n$ OWNER=suzuki-shunsuke\n$ REPO=tfcmt\n")),(0,o.kt)("h2",{id:"tfcmt-plan"},"tfcmt plan"),(0,o.kt)("p",null,"By ",(0,o.kt)("inlineCode",{parentName:"p"},"tfcmt plan")," command, you can post the result of ",(0,o.kt)("inlineCode",{parentName:"p"},"terraform plan")," as a comment."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},'$ tfcmt -owner "$OWNER" -repo "$REPO" -pr "$PR_NUMBER" plan -- terraform plan\n\nAn execution plan has been generated and is shown below.\nResource actions are indicated with the following symbols:\n  + create\n\nTerraform will perform the following actions:\n\n  # null_resource.foo will be created\n  + resource "null_resource" "foo" {\n      + id = (known after apply)\n    }\n\nPlan: 1 to add, 0 to change, 0 to destroy.\n\n------------------------------------------------------------------------\n\nNote: You didn\'t specify an "-out" parameter to save this plan, so Terraform\ncan\'t guarantee that exactly these actions will be performed if\n"terraform apply" is subsequently run.\n')),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/suzuki-shunsuke/tfcmt/pull/70#issuecomment-797854184"},"https://github.com/suzuki-shunsuke/tfcmt/pull/70#issuecomment-797854184")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/13323303/111016701-b6f89200-83f2-11eb-9fed-35d8249c9ba0.png",alt:"image"})),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"By the following message, you can know the number of added, changed, and destroyed resources.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Plan: 1 to add, 0 to change, 0 to destroy.\n")),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"By the following message, you can know which resources are added, changed, and destroyed, and recreated.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-markdown"},"* Create\n  * null_resource.foo\n")),(0,o.kt)("p",null,"Please see ",(0,o.kt)("a",{parentName:"p",href:"#list-of-changed-resources"},"List of changed resources")," too."),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},"By opening ",(0,o.kt)("inlineCode",{parentName:"li"},"Details"),", you can confirm the full output of ",(0,o.kt)("inlineCode",{parentName:"li"},"terraform plan"),".")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/13323303/111022026-7fe6a880-8413-11eb-84db-3159402d42f3.png",alt:"image"})),(0,o.kt)("h3",{id:"pull-request-label"},"Pull Request label"),(0,o.kt)("p",null,"By ",(0,o.kt)("inlineCode",{parentName:"p"},"tfcmt plan"),", pull request labels are set.\nIt makes easy to understand the result of ",(0,o.kt)("inlineCode",{parentName:"p"},"terraform plan"),"."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/13323303/111016806-31291680-83f3-11eb-94f0-be22585aae64.png",alt:"image"})),(0,o.kt)("p",null,"The following labels are set according to the result of ",(0,o.kt)("inlineCode",{parentName:"p"},"terraform plan")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"no-changes: there is no resoruce to be changed"),(0,o.kt)("li",{parentName:"ul"},"add-or-update: there are resources to be created or updated but there is no resource to be destroyed or recreated"),(0,o.kt)("li",{parentName:"ul"},"destroy: there are resources to be destroyed or recreated")),(0,o.kt)("p",null,"The label color is configured automatically."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"no-changes: green"),(0,o.kt)("li",{parentName:"ul"},"add-or-update: blue"),(0,o.kt)("li",{parentName:"ul"},"destroy: red")),(0,o.kt)("h3",{id:"configuration-file-is-optional"},"Configuration file is optional"),(0,o.kt)("p",null,"You don't have to prepare the configuration file for tfcmt.\nThe configuration file is optional.\ntfcmt provides the good default configuration.\nYou can also customize the configuration with configuration file if needed."),(0,o.kt)("p",null,"Please see ",(0,o.kt)("a",{parentName:"p",href:"config"},"Configuration")," too."),(0,o.kt)("h3",{id:"list-of-changed-resources"},"List of changed resources"),(0,o.kt)("p",null,"You can know which resources are changed without looking the output of ",(0,o.kt)("inlineCode",{parentName:"p"},"terraform plan"),"."),(0,o.kt)("p",null,"Please look at the comment closer."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/suzuki-shunsuke/tfcmt/pull/70#issuecomment-797854184"},"https://github.com/suzuki-shunsuke/tfcmt/pull/70#issuecomment-797854184")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/13323303/111016959-1014f580-83f4-11eb-8a6f-2f5ee7bd9607.png",alt:"image"})),(0,o.kt)("p",null,"The following resources are listed."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Create",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"created resource 1"),(0,o.kt)("li",{parentName:"ul"},"..."))),(0,o.kt)("li",{parentName:"ul"},"Update",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"updated resource 1"),(0,o.kt)("li",{parentName:"ul"},"..."))),(0,o.kt)("li",{parentName:"ul"},"Delete",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"deleted resource 1"),(0,o.kt)("li",{parentName:"ul"},"..."))),(0,o.kt)("li",{parentName:"ul"},"Replace",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"recreated resource 1"),(0,o.kt)("li",{parentName:"ul"},"...")))),(0,o.kt)("h2",{id:"tfcmt-apply"},"tfcmt apply"),(0,o.kt)("p",null,"By ",(0,o.kt)("inlineCode",{parentName:"p"},"tfcmt apply")," command, you can post the result of ",(0,o.kt)("inlineCode",{parentName:"p"},"terraform apply")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},'# -auto-approve is required. Otherwise, tfcmt apply doesn\'t work well.\n$ tfcmt -owner "$OWNER" -repo "$REPO" -pr "$PR_NUMBER" apply -- terraform apply -auto-approve\nnull_resource.foo: Creating...\nnull_resource.foo: Creation complete after 0s [id=459501600381334523]\n\nApply complete! Resources: 1 added, 0 changed, 0 destroyed.\n')),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/suzuki-shunsuke/tfcmt/pull/70#issuecomment-797856135"},"https://github.com/suzuki-shunsuke/tfcmt/pull/70#issuecomment-797856135")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/13323303/111017196-3c7d4180-83f5-11eb-9e4b-ba350e07adf8.png",alt:"image"})),(0,o.kt)("h2",{id:"deletion-warning"},"Deletion warning"),(0,o.kt)("p",null,"Let's remove the resource ",(0,o.kt)("inlineCode",{parentName:"p"},"null_resource.foo")," and run ",(0,o.kt)("inlineCode",{parentName:"p"},"terraform plan"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},"$ vi main.tf\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tf"},'# comment out\n# resource "null_resource" "foo" {}\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},'$ tfcmt -owner "$OWNER" -repo "$REPO" -pr "$PR_NUMBER" plan -- terraform plan\nnull_resource.foo: Refreshing state... [id=459501600381334523]\n\nAn execution plan has been generated and is shown below.\nResource actions are indicated with the following symbols:\n  - destroy\n\nTerraform will perform the following actions:\n\n  # null_resource.foo will be destroyed\n  - resource "null_resource" "foo" {\n      - id = "459501600381334523" -> null\n    }\n\nPlan: 0 to add, 0 to change, 1 to destroy.\n\n------------------------------------------------------------------------\n\nNote: You didn\'t specify an "-out" parameter to save this plan, so Terraform\ncan\'t guarantee that exactly these actions will be performed if\n"terraform apply" is subsequently run.\n')),(0,o.kt)("p",null,"Then in the comment of ",(0,o.kt)("inlineCode",{parentName:"p"},"tfcmt plan"),", the deletion warning is included."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/suzuki-shunsuke/tfcmt/pull/70#issuecomment-797856650"},"https://github.com/suzuki-shunsuke/tfcmt/pull/70#issuecomment-797856650")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/13323303/111017250-97169d80-83f5-11eb-9144-039dc4b62b37.png",alt:"image"})),(0,o.kt)("p",null,"You can also find the pull request label is changed from ",(0,o.kt)("inlineCode",{parentName:"p"},"add-or-update")," to ",(0,o.kt)("inlineCode",{parentName:"p"},"destroy"),"."),(0,o.kt)("p",null,"It is helpful to prevent unexpected resource deletion."),(0,o.kt)("h2",{id:"support-of-ci-platforms"},"Support of CI platforms"),(0,o.kt)("p",null,"In the above commands, you specify the repository owner, name, and pull request number as the command line arguments."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},'$ tfcmt -owner "$OWNER" -repo "$REPO" -pr "$PR_NUMBER"\n')),(0,o.kt)("p",null,"But on the following CI platform, tfcmt gets these parameters from the built in environment variables so you don't have to specify these arguments."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"AWS CodeBuild"),(0,o.kt)("li",{parentName:"ul"},"CircleCI"),(0,o.kt)("li",{parentName:"ul"},"Drone"),(0,o.kt)("li",{parentName:"ul"},"GitHub Actions")),(0,o.kt)("p",null,"AS IS"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},'$ tfcmt -owner "$OWNER" -repo "$REPO" -pr "$PR_NUMBER" plan -- terraform plan\n')),(0,o.kt)("p",null,"TO BE"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},"$ tfcmt plan -- terraform plan\n")),(0,o.kt)("p",null,"Note that if tfcmt can't get the pull request number from environment variables you have to complement it."),(0,o.kt)("h2",{id:"hide-old-comments-with-github-comment"},"Hide old comments with github-comment"),(0,o.kt)("p",null,"When running CI of the same pull request at many times,\nit is convenient to hide old comments posted by tfcmt."),(0,o.kt)("p",null,"tfcmt itself doesn't support to hide old comments, but you can hide old comments with ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/suzuki-shunsuke/github-comment"},"github-comment"),".\ntfcmt embeds metadata in a comment as HTML comment.\nPlease check comments posted by tfcmt."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/13323303/111018042-20c86a00-83fa-11eb-9f85-491649411005.png",alt:"image"})),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/13323303/111018071-40f82900-83fa-11eb-8583-1601ea3af484.png",alt:"image"})),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},'\x3c!-- github-comment: {"Command":"plan","PRNumber":70,"Program":"tfcmt","SHA1":"","Vars":{}} --\x3e\n')),(0,o.kt)("p",null,"So you can hide comments with ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/suzuki-shunsuke/github-comment#hide"},"github-comment hide")," command."),(0,o.kt)("h2",{id:"monorepo-support-target-variable"},"Monorepo support: target variable"),(0,o.kt)("p",null,"Let's assume that the repository is Monorepo and there are multiple Terraform states in the repository."),(0,o.kt)("p",null,"For example,"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"foo/\n  main.tf\n  ...\nbar/\n  main.tf\n  ...\n")),(0,o.kt)("p",null,"In the above case, you have to distinguish comments for the state ",(0,o.kt)("inlineCode",{parentName:"p"},"foo")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"bar"),".\nBy specifying the special variable ",(0,o.kt)("inlineCode",{parentName:"p"},"target")," by ",(0,o.kt)("inlineCode",{parentName:"p"},"-var")," argument, you can do it."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},"$ vi main.tf\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tf"},'resource "null_resource" "foo" {}\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},'$ tfcmt -owner "$OWNER" -repo "$REPO" -pr "$PR_NUMBER" -var "target:foo" plan -- terraform plan\nnull_resource.foo: Refreshing state... [id=459501600381334523]\n\nNo changes. Infrastructure is up-to-date.\n\nThis means that Terraform did not detect any differences between your\nconfiguration and real physical resources that exist. As a result, no\nactions need to be performed.\n')),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/suzuki-shunsuke/tfcmt/pull/70#issuecomment-797861332"},"https://github.com/suzuki-shunsuke/tfcmt/pull/70#issuecomment-797861332")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/13323303/111018399-ea8bea00-83fb-11eb-8efe-205ab8c996b7.png",alt:"image"})),(0,o.kt)("p",null,"We can find"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"the target name is included in the comment title ",(0,o.kt)("inlineCode",{parentName:"li"},"Plan Result (foo)")),(0,o.kt)("li",{parentName:"ul"},"the target name is included in the pull request label ",(0,o.kt)("inlineCode",{parentName:"li"},"foo/no-changes"))))}d.isMDXComponent=!0}}]);