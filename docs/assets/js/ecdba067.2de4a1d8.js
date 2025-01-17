"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4087],{3491:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>r,contentTitle:()=>o,default:()=>m,frontMatter:()=>l,metadata:()=>d,toc:()=>i});var a=n(4848),s=n(8453);const l={sidebar_position:2},o="Start",d={id:"user-guide/llm/full-openai",title:"Start",description:"LlamaEdge support running LLMs along with embbedding models, allowing you to start a drop-in replacement for OpenAI API.",source:"@site/docs/user-guide/llm/full-openai.md",sourceDirName:"user-guide/llm",slug:"/user-guide/llm/full-openai",permalink:"/docs/user-guide/llm/full-openai",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/user-guide/llm/full-openai.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"LLM",permalink:"/docs/category/llm"},next:{title:"Quick start with LLM models",permalink:"/docs/user-guide/llm/get-started-with-llamaedge"}},r={},i=[{value:"Step 1: Install WasmEdge",id:"step-1-install-wasmedge",level:3},{value:"Step 2: Download the LLM Model and Embedding Model",id:"step-2-download-the-llm-model-and-embedding-model",level:3},{value:"Step 3: Download a Portable OpenAI Compatible Server",id:"step-3-download-a-portable-openai-compatible-server",level:3},{value:"Step 4: Start the API Server",id:"step-4-start-the-api-server",level:3},{value:"Step 5: Send an API Request",id:"step-5-send-an-api-request",level:3}];function c(e){const t={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h3:"h3",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h1,{id:"start",children:"Start"}),"\n",(0,a.jsx)(t.p,{children:"LlamaEdge support running LLMs along with embbedding models, allowing you to start a drop-in replacement for OpenAI API."}),"\n",(0,a.jsx)(t.h3,{id:"step-1-install-wasmedge",children:"Step 1: Install WasmEdge"}),"\n",(0,a.jsx)(t.p,{children:"First off, you'll need WasmEdge. To install WasmEdge along with the necessary plugin for AI inference, open your terminal and execute the following command:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{children:"curl -sSf https://raw.githubusercontent.com/WasmEdge/WasmEdge/master/utils/install_v2.sh | bash -s\n"})}),"\n",(0,a.jsx)(t.p,{children:"This command fetches and runs the WasmEdge installation script, which automatically installs WasmEdge and the WASI-NN plugin, essential for running LLM models like Llama 3.1 and Nomix-embed models."}),"\n",(0,a.jsx)(t.h3,{id:"step-2-download-the-llm-model-and-embedding-model",children:"Step 2: Download the LLM Model and Embedding Model"}),"\n",(0,a.jsxs)(t.p,{children:["Next, you'll need to obtain a model file. For this tutorial, we're focusing on the ",(0,a.jsx)(t.strong,{children:"Llama 3.2 1B model finetuned for instruction following and Nomic embed model"}),", but the steps are generally applicable to other models too. Use the following command to download the model files."]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{children:"# The chat model is Llama 3.2 1b chat\ncurl -LO https://huggingface.co/second-state/Llama-3.2-1B-Instruct-GGUF/resolve/main/Llama-3.2-1B-Instruct-Q5_K_M.gguf\n\n# The embedding model is nomic-embed-text-v1.5\ncurl -LO https://huggingface.co/second-state/Nomic-embed-text-v1.5-Embedding-GGUF/resolve/main/nomic-embed-text-v1.5-f16.gguf\n"})}),"\n",(0,a.jsx)(t.p,{children:"This command downloads the Llama-3.2-1B-Instruct model and nomic-embed-text-v1.5 model from Huggingface, an AI model hosting platform."}),"\n",(0,a.jsx)(t.h3,{id:"step-3-download-a-portable-openai-compatible-server",children:"Step 3: Download a Portable OpenAI Compatible Server"}),"\n",(0,a.jsxs)(t.p,{children:["To start an OpenAI-compatible API server, you need the ",(0,a.jsx)(t.a,{href:"https://github.com/LlamaEdge/LlamaEdge/tree/main/api-server",children:"LlamaEdge API server"})," app."]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{children:"curl -LO https://github.com/second-state/LlamaEdge/releases/latest/download/llama-api-server.wasm\n"})}),"\n",(0,a.jsxs)(t.p,{children:["The ",(0,a.jsx)(t.code,{children:"llama-api-server.wasm"})," is a web server with an OpenAI-compatible API."]}),"\n",(0,a.jsxs)(t.blockquote,{children:["\n",(0,a.jsx)(t.p,{children:"The LlamaEdge apps are written in Rust and compiled to portable Wasm. That means they can run across devices and OSes without any change to the binary apps. You can simply download and run the compiled wasm apps regardless of your platform."}),"\n"]}),"\n",(0,a.jsx)(t.h3,{id:"step-4-start-the-api-server",children:"Step 4: Start the API Server"}),"\n",(0,a.jsx)(t.p,{children:"With everything set up, it's time to run the models as follows."}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{children:"wasmedge --dir .:. \\\n   --nn-preload default:GGML:AUTO:Llama-3.2-1B-Instruct-Q5_K_M.gguf \\\n   --nn-preload embedding:GGML:AUTO:nomic-embed-text-v1.5-f16.gguf \\\n   llama-api-server.wasm -p llama-3-chat,embedding \\\n     --model-name Llama-3.2-1B-Instruct-Q5_K_M,nomic-embed-text-v1.5-f16 \\\n     --ctx-size 8192,8192 \\\n     --batch-size 128,8192 \\\n     --log-prompts --log-stat\n"})}),"\n",(0,a.jsxs)(t.p,{children:["This command executes the chat application, allowing you to start interacting with the Llama 3 8B model. Here, ",(0,a.jsx)(t.code,{children:"wasmedge"})," is the command to run the WasmEdge runtime, ",(0,a.jsx)(t.code,{children:"--nn-preload"})," specifies the model to use with the WASI-NN plugin, and ",(0,a.jsx)(t.code,{children:"-p"})," sets the prompt template for the chat."]}),"\n",(0,a.jsx)(t.h3,{id:"step-5-send-an-api-request",children:"Step 5: Send an API Request"}),"\n",(0,a.jsx)(t.p,{children:"Now you have a drop-in replacement for OpenAI API. You can integrate it with any agents/frameworks based on OpenAI."}),"\n",(0,a.jsxs)(t.table,{children:[(0,a.jsx)(t.thead,{children:(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.th,{children:"Config option"}),(0,a.jsx)(t.th,{children:"Value"})]})}),(0,a.jsxs)(t.tbody,{children:[(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"API endpoint URL"}),(0,a.jsx)(t.td,{children:(0,a.jsx)(t.a,{href:"http://localhost:8080/v1",children:"http://localhost:8080/v1"})})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"Model Name (for LLM)"}),(0,a.jsx)(t.td,{children:"Llama-3.2-1B-Instruct-Q5_K_M"})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"Model Name (for Text embedding)"}),(0,a.jsx)(t.td,{children:"nomic-embed-text-v1.5-f16"})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"API key"}),(0,a.jsx)(t.td,{children:"Empty or any value"})]})]})]}),"\n",(0,a.jsxs)(t.p,{children:["Congratulations! Next, you can integrate your APT server with ",(0,a.jsx)(t.a,{href:"/docs/category/ecosystem-apps",children:"OpenAI ecosystem apps"}),"."]})]})}function m(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>d});var a=n(6540);const s={},l=a.createContext(s);function o(e){const t=a.useContext(l);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),a.createElement(l.Provider,{value:t},e.children)}}}]);