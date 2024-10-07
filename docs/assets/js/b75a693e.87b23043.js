"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[643],{6267:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>a,metadata:()=>r,toc:()=>d});var i=t(4848),s=t(8453);const a={sidebar_position:1},o="Quick Start",r={id:"user-guide/quick-start-command",title:"Quick Start",description:"LlamaEdge is a suite of component libraries and command line tools for developers to embed and run LLMs in their own apps. The best way to quickly experience LlamaEdge is to use easy-to-use utilities built on top of it.",source:"@site/docs/user-guide/quick-start-command.md",sourceDirName:"user-guide",slug:"/user-guide/quick-start-command",permalink:"/docs/user-guide/quick-start-command",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/user-guide/quick-start-command.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"User Guide",permalink:"/docs/category/user-guide"},next:{title:"LlamaEdge step-by-step",permalink:"/docs/user-guide/get-started-with-llamaedge"}},c={},d=[{value:"Quick Start with Gaia",id:"quick-start-with-gaia",level:2},{value:"Quick start with Moxin",id:"quick-start-with-moxin",level:2}];function l(e){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"quick-start",children:"Quick Start"}),"\n",(0,i.jsx)(n.p,{children:"LlamaEdge is a suite of component libraries and command line tools for developers to embed and run LLMs in their own apps. The best way to quickly experience LlamaEdge is to use easy-to-use utilities built on top of it."}),"\n",(0,i.jsx)(n.h2,{id:"quick-start-with-gaia",children:"Quick Start with Gaia"}),"\n",(0,i.jsx)(n.p,{children:"Gaia is an integrated tool for running open-source LLMs. It is built on LlamaEdge. Following these simple commands, you will be able to get an Internet-accessible chatbot and an OpenAI-compatible API server running on your devices using any open-source model you choose in a few minutes."}),"\n",(0,i.jsx)(n.p,{children:"Install the Gaia software with a single command on Mac, Linux, or Windows WSL."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"curl -sSfL 'https://github.com/GaiaNet-AI/gaianet-node/releases/latest/download/install.sh' | bash\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Then, follow the prompt on your screen to set up the environment path. The command line will begin with ",(0,i.jsx)(n.code,{children:"source"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["Use ",(0,i.jsx)(n.code,{children:"gaianet init"})," to download the model files and vector database files specified in the ",(0,i.jsx)(n.code,{children:"$HOME/gaianet/config.json"})," file, and it could take a few minutes since the files are large."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"gaianet init\n"})}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:["The default ",(0,i.jsx)(n.code,{children:"$HOME/gaianet/config.json"})," runs a Phi 3.5 LLM and a nomic-embed embedding model. You can easily ",(0,i.jsx)(n.a,{href:"https://github.com/GaiaNet-AI/node-configs/tree/main/llama-3.1-8b-instruct",children:"switch to a Llama 3.1 8b LLM by giving a different configuration"})," to ",(0,i.jsx)(n.code,{children:"gaianet init"}),". Configurations for many more LLMs are ",(0,i.jsx)(n.a,{href:"https://github.com/GaiaNet-AI/node-configs",children:"available here"}),"."]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Start running the Gaia node."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"gaianet start\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Once it starts on your machine, you can simply go to ",(0,i.jsx)(n.code,{children:"http://localhost:8080"}),". You can open a browser to that URL to see the node information and then chat with the LLM. This node API server also supports ",(0,i.jsx)(n.code,{children:"v1/chat/completions"})," and ",(0,i.jsx)(n.code,{children:"v1/embeddings"})," endpoints, fully compatible with OpenAI APIs."]}),"\n",(0,i.jsx)(n.p,{children:"If you are running it on a server or need to access the LLM sevices from the Internet, the Gaia node has automatically set up connection tunneling for you. The script prints the Internet address for the LLM service on the console as follows."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"... ... https://0xf63939431ee11267f4855a166e11cc44d24960c0.us.gaianet.network\n"})}),"\n",(0,i.jsx)(n.p,{children:"To stop running the LLM services, you can run the following script."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"gaianet stop\n"})}),"\n",(0,i.jsxs)(n.p,{children:["If you're looking to configure LLMs further, explore the details ",(0,i.jsx)(n.a,{href:"https://docs.gaianet.ai/category/node-operator-guide",children:"here"}),"."]}),"\n",(0,i.jsx)(n.h2,{id:"quick-start-with-moxin",children:"Quick start with Moxin"}),"\n",(0,i.jsx)(n.p,{children:"Moxin is a cross-platform LLM client written in Rust, and built on LlamaEdge components. It offers an intuitive UI for running LLMs with just a few clicks."}),"\n",(0,i.jsxs)(n.p,{children:["Download the Moxin app install package for your device from the ",(0,i.jsx)(n.a,{href:"https://www.moxin.app/",children:"Moxin website"}),". Here's how to get started on macOS:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Download and install the ",(0,i.jsx)(n.code,{children:"dmg"})," file from ",(0,i.jsx)(n.a,{href:"https://www.moxin.app/",children:"https://www.moxin.app/"})," on your Macbook."]}),"\n",(0,i.jsx)(n.li,{children:"Browse model cards and choose one model to download after open the Moxin app. As models are quite large, this may take several minutes."}),"\n",(0,i.jsx)(n.li,{children:"Engage with the model via a simple and interactive chat interface."}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:t(8257).A+"",width:"2864",height:"1642"})})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},8257:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/quick-start-command-01-20c48519ba3f473a912fb265f0847618.png"},8453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>r});var i=t(6540);const s={},a=i.createContext(s);function o(e){const n=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),i.createElement(a.Provider,{value:n},e.children)}}}]);