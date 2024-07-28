"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[918],{3792:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>u,frontMatter:()=>s,metadata:()=>d,toc:()=>r});var o=t(4848),i=t(8453);const s={sidebar_position:3},a="AI coding assistant: Continue",d={id:"user-guide/openai-api/continue",title:"AI coding assistant: Continue",description:"Continue is the leading open-source AI code assistant.",source:"@site/docs/user-guide/openai-api/continue.md",sourceDirName:"user-guide/openai-api",slug:"/user-guide/openai-api/continue",permalink:"/docs/user-guide/openai-api/continue",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/user-guide/openai-api/continue.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"LobeChat",permalink:"/docs/user-guide/openai-api/lobechat"},next:{title:"Obsidian",permalink:"/docs/user-guide/openai-api/obsidian"}},c={},r=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Install Continue",id:"install-continue",level:2},{value:"Configure Continue",id:"configure-continue",level:2},{value:"Use the plugin",id:"use-the-plugin",level:2}];function l(e){const n={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"ai-coding-assistant-continue",children:"AI coding assistant: Continue"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.a,{href:"https://github.com/continuedev/continue",children:"Continue"})," is the leading open-source AI code assistant.\nIt is a copilot-like plugin for VSCode and JetBrains to provide custom autocomplete and chat experiences inside\nthose IDEs. You can easily configure it to use a local LlamaEdge LLM as backends. In fact, you can choose different models for"]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"the autocomplete model for coding tasks"}),"\n",(0,o.jsx)(n.li,{children:"the chat model for understanding and discussing code"}),"\n",(0,o.jsx)(n.li,{children:"the embedding model to provide chat context based on local files"}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,o.jsxs)(n.p,{children:["Follow ",(0,o.jsx)(n.a,{href:"intro",children:"this guide"})," to run an open-source LLM locally.\nSince we have a coding application here, you should download a coding LLM like the Codestral."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"curl -LO https://huggingface.co/second-state/Codestral-22B-v0.1-GGUF/resolve/main/Codestral-22B-v0.1-hf-Q5_K_M.gguf\n"})}),"\n",(0,o.jsxs)(n.p,{children:["Then start the LlamaEdge API server with the Codestral model and name it ",(0,o.jsx)(n.code,{children:"Codestral-22B-v0.1-hf-Q5_K_M"}),"."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"wasmedge --dir .:. \\\n    --nn-preload default:GGML:AUTO:Codestral-22B-v0.1-hf-Q5_K_M.gguf \\\n    --nn-preload embedding:GGML:AUTO:nomic-embed-text-v1.5.f16.gguf \\\n    llama-api-server.wasm \\\n    --model-alias default,embedding \\\n    --model-name Codestral-22B-v0.1-hf-Q5_K_M,nomic-embed-text-v1.5.f16 \\\n    --prompt-template llama-3-chat,embedding \\\n    --batch-size 128,8192 \\\n    --ctx-size 32768,8192\n"})}),"\n",(0,o.jsx)(n.h2,{id:"install-continue",children:"Install Continue"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.a,{href:"https://marketplace.visualstudio.com/items?itemName=Continue.continue",children:"Load this link"})," to install the Continue IDE plugin.",(0,o.jsx)(n.br,{}),"\n","It will open up your VSCode when you click on the ",(0,o.jsx)(n.strong,{children:"Install"})," button on the web page. When you are\nasked to configure Continue, just click on ",(0,o.jsx)(n.strong,{children:"Skip"})," and finish the installation without selecting a local model."]}),"\n",(0,o.jsx)(n.h2,{id:"configure-continue",children:"Configure Continue"}),"\n",(0,o.jsxs)(n.p,{children:["Click on the gear icon on the toolbar to load the ",(0,o.jsx)(n.code,{children:"config.json"})," file for the Continue plugin. The file is located\nin your own home directory ",(0,o.jsx)(n.code,{children:"$HOME/.continue/config.json"}),".\nYou can now change the ",(0,o.jsx)(n.code,{children:"config.json"})," file as follows.\nIt asks the Continue plugin to use different models for\nchat, code autocomplete and embeddings."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:'{\n  "models": [\n    {\n      "model": "Codestral-22B-v0.1-hf-Q5_K_M",\n      "title": "LlamaEdge",\n      "apiBase": "http://localhost:8080/v1/",\n      "provider": "openai"\n    }\n  ],\n  "tabAutocompleteModel": {\n      "title": "Autocomplete",\n      "apiBase": "http://localhost:8080/v1/",\n      "model": "Codestral-22B-v0.1-hf-Q5_K_M",\n      "provider": "openai"\n  },\n  "embeddingsProvider": {\n    "provider": "openai",\n    "model": "nomic-embed-text-v1.5.f16",\n    "apiBase": "http://localhost:8080/v1/"\n  },\n  "customCommands": [\n    {\n      "name": "test",\n      "prompt": "{{{ input }}}\\n\\nWrite a comprehensive set of unit tests for the selected code. It should setup, run tests that check for correctness including important edge cases, and teardown. Ensure that the tests are complete and sophisticated. Give the tests just as chat output, don\'t edit any file.",\n      "description": "Write unit tests for highlighted code"\n    }\n  ],\n  "allowAnonymousTelemetry": true\n}\n'})}),"\n",(0,o.jsxs)(n.p,{children:["Save the ",(0,o.jsx)(n.code,{children:"config.json"})," file and you are done!"]}),"\n",(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsxs)(n.p,{children:["It is important to note that Continue requires the API endpoint to include a ",(0,o.jsx)(n.code,{children:"/"})," at the end."]}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"use-the-plugin",children:"Use the plugin"}),"\n",(0,o.jsx)(n.p,{children:"The following screenshot shows how you can chat with an error message\ninside the IDE."}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{src:t(7122).A+"",width:"1609",height:"1051"})})]})}function u(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},7122:(e,n,t)=>{t.d(n,{A:()=>o});const o=t.p+"assets/images/continue-01-e2a5bd512068829ed1debacc682accc7.png"},8453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>d});var o=t(6540);const i={},s=o.createContext(i);function a(e){const n=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),o.createElement(s.Provider,{value:n},e.children)}}}]);