"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[431],{8035:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>h,frontMatter:()=>i,metadata:()=>r,toc:()=>o});var s=t(4848),a=t(8453);const i={sidebar_position:1},l="Start an LlamaEdge API service",r={id:"user-guide/openai-api/intro",title:"Start an LlamaEdge API service",description:"Since LlamaEdge provides an OpenAI-compatible API service, it can be a drop-in replacement for OpenAI in almost all LLM applications and frameworks.",source:"@site/docs/user-guide/openai-api/intro.md",sourceDirName:"user-guide/openai-api",slug:"/user-guide/openai-api/intro",permalink:"/docs/user-guide/openai-api/intro",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/user-guide/openai-api/intro.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Ecosystem apps",permalink:"/docs/category/ecosystem-apps"},next:{title:"LobeChat",permalink:"/docs/user-guide/openai-api/lobechat"}},d={},o=[{value:"Step 1: Install WasmEdge",id:"step-1-install-wasmedge",level:2},{value:"Step 2: Download an LLM model",id:"step-2-download-an-llm-model",level:2},{value:"Step 3: Download an embedding model",id:"step-3-download-an-embedding-model",level:2},{value:"Step 4: Start the API server!",id:"step-4-start-the-api-server",level:2},{value:"OpenAI replacement",id:"openai-replacement",level:2},{value:"The OpenAI Python library",id:"the-openai-python-library",level:2}];function c(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"start-an-llamaedge-api-service",children:"Start an LlamaEdge API service"}),"\n",(0,s.jsx)(n.p,{children:"Since LlamaEdge provides an OpenAI-compatible API service, it can be a drop-in replacement for OpenAI in almost all LLM applications and frameworks.\nCheckout the articles in this section for instructions and examples for how to use locally hosted LlamaEdge API services in popular LLM apps."}),"\n",(0,s.jsxs)(n.p,{children:["But first, you will need to start an ",(0,s.jsx)(n.a,{href:"https://github.com/LlamaEdge/LlamaEdge/tree/main/api-server",children:"LlamaEdge API server"}),". But the steps are a little different from just a chatbot."]}),"\n",(0,s.jsx)(n.h2,{id:"step-1-install-wasmedge",children:"Step 1: Install WasmEdge"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"curl -sSf https://raw.githubusercontent.com/WasmEdge/WasmEdge/master/utils/install_v2.sh | bash -s\n"})}),"\n",(0,s.jsx)(n.h2,{id:"step-2-download-an-llm-model",children:"Step 2: Download an LLM model"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"curl -LO https://huggingface.co/second-state/Meta-Llama-3.1-8B-Instruct-GGUF/resolve/main/Meta-Llama-3.1-8B-Instruct-Q5_K_M.gguf\n"})}),"\n",(0,s.jsx)(n.h2,{id:"step-3-download-an-embedding-model",children:"Step 3: Download an embedding model"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"curl -LO https://huggingface.co/gaianet/Nomic-embed-text-v1.5-Embedding-GGUF/resolve/main/nomic-embed-text-v1.5.f16.gguf\n"})}),"\n",(0,s.jsx)(n.p,{children:"It is used by many agent and RAG apps to convert text-based knowledge into vectors for easy search and retrieval."}),"\n",(0,s.jsx)(n.h2,{id:"step-4-start-the-api-server",children:"Step 4: Start the API server!"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"wasmedge --dir .:. \\\n    --nn-preload default:GGML:AUTO:Meta-Llama-3.1-8B-Instruct-Q5_K_M.gguf \\\n    --nn-preload embedding:GGML:AUTO:nomic-embed-text-v1.5.f16.gguf \\\n    llama-api-server.wasm \\\n    --model-alias default,embedding \\\n    --model-name llama-3-8b-chat,nomic-embed \\\n    --prompt-template llama-3-chat,embedding \\\n    --batch-size 128,8192 \\\n    --ctx-size 8192,8192\n"})}),"\n",(0,s.jsxs)(n.p,{children:["You can learn more about these CLI options ",(0,s.jsx)(n.a,{href:"https://github.com/LlamaEdge/LlamaEdge/tree/main/api-server",children:"here"}),"."]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["The ",(0,s.jsx)(n.code,{children:"--model-alias"})," specifies which of the preloaded models is for chat and embedding respectively. In this case","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["The alias ",(0,s.jsx)(n.code,{children:"default"})," corresponds to ",(0,s.jsx)(n.code,{children:"Meta-Llama-3.1-8B-Instruct-Q5_K_M.gguf"})]}),"\n",(0,s.jsxs)(n.li,{children:["The alias ",(0,s.jsx)(n.code,{children:"embedding"})," corresponds to ",(0,s.jsx)(n.code,{children:"nomic-embed-text-v1.5.f16.gguf"})]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["The ",(0,s.jsx)(n.code,{children:"--model-name"})," can be any string, and you will need it in API calls when the client wants to select a model to interact with. The two values correspond to the ",(0,s.jsx)(n.code,{children:"default"})," and ",(0,s.jsx)(n.code,{children:"embedding"})," model respectively."]}),"\n",(0,s.jsxs)(n.li,{children:["The ",(0,s.jsx)(n.code,{children:"--prompt-template"})," specifies the prompt template name for the chat model, and it uses ",(0,s.jsx)(n.code,{children:"embedding"})," for the prompt template name for the embedding model."]}),"\n",(0,s.jsxs)(n.li,{children:["The ",(0,s.jsx)(n.code,{children:"--ctx-size"})," specifies the context window size for the ",(0,s.jsx)(n.code,{children:"default"})," and ",(0,s.jsx)(n.code,{children:"embedding"})," model respectively."]}),"\n",(0,s.jsxs)(n.li,{children:["The ",(0,s.jsx)(n.code,{children:"--batch-size"})," specifies the batch job size for the ",(0,s.jsx)(n.code,{children:"default"})," and ",(0,s.jsx)(n.code,{children:"embedding"})," model respectively."]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["That's it. You can now test the API server by sending it a request.\nNotice that model name ",(0,s.jsx)(n.code,{children:"llama-3-8b-chat"})," matches what you specified in the ",(0,s.jsx)(n.code,{children:"llama-api-server.wasm"})," command."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'curl -X POST http://0.0.0.0:8080/v1/chat/completions -H \'accept:application/json\' -H \'Content-Type: application/json\' -d \'{"messages":[{"role":"system", "content":"You are a helpful AI assistant"}, {"role":"user", "content":"What is the capital of France?"}], "model":"llama-3-8b-chat"}\'\n'})}),"\n",(0,s.jsx)(n.p,{children:"You should receive a JSON message that contains a reply to the question in the response."}),"\n",(0,s.jsx)(n.h2,{id:"openai-replacement",children:"OpenAI replacement"}),"\n",(0,s.jsx)(n.p,{children:"Now, you can ready to use this API server in OpenAI ecosystem apps as a drop-in replacement for the OpenAI API!\nIn general, for any OpenAI tool, you could just replace the following."}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Config option"}),(0,s.jsx)(n.th,{children:"Value"}),(0,s.jsx)(n.th,{children:"Note"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"API endpoint URL"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"http://localhost:8080/v1"})}),(0,s.jsx)(n.td,{children:"If the server is accessible from the web, you could use the public IP and port"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Model Name (for LLM)"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"llama-3-8b-chat"})}),(0,s.jsxs)(n.td,{children:["The first value specified in the ",(0,s.jsx)(n.code,{children:"--model-name"})," option"]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Model Name (for Text embedding)"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"nomic-embed"})}),(0,s.jsxs)(n.td,{children:["The second value specified in the ",(0,s.jsx)(n.code,{children:"--model-name"})," option"]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"API key"}),(0,s.jsx)(n.td,{children:"Empty"}),(0,s.jsx)(n.td,{children:"Or any value if the app does not permit empty string"})]})]})]}),"\n",(0,s.jsx)(n.h2,{id:"the-openai-python-library",children:"The OpenAI Python library"}),"\n",(0,s.jsxs)(n.p,{children:["You can install the ",(0,s.jsx)(n.a,{href:"https://pypi.org/project/openai/",children:"official OpenAI Python library"})," as follows."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"pip install openai\n"})}),"\n",(0,s.jsxs)(n.p,{children:["When you create an OpenAI client using the library, you can pass in the API endpoint point as the ",(0,s.jsx)(n.code,{children:"base_url"}),"."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'import openai\n\nclient = openai.OpenAI(base_url="http://localhost:8080/v1", api_key="")\n'})}),"\n",(0,s.jsx)(n.p,{children:"Alternatively, you could set an environment variable at the OS level."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"export OPENAI_API_BASE=http://localhost:8080/v1\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Then, when you make API calls from the ",(0,s.jsx)(n.code,{children:"client"}),", make sure that the ",(0,s.jsx)(n.code,{children:"model"})," is set to the model name\navailable on your node."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'response = client.chat.completions.create(\n    model="llama-3-8b-chat",\n    messages=[\n        {"role": "system", "content": "You are a strategic reasoner."},\n            {"role": "user", "content": "What is the purpose of life?"}\n        ],\n        temperature=0.7,\n        max_tokens=500\n    ]\n)\n'})}),"\n",(0,s.jsx)(n.p,{children:"That's it! You can now take any application built with the official OpenAI Python library and use your own\nLlamaEdge device as its backend!"})]})}function h(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>l,x:()=>r});var s=t(6540);const a={},i=s.createContext(a);function l(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:l(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);