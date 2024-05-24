"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[550],{5246:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>i,toc:()=>l});var a=n(4848),s=n(8453);const r={sidebar_position:1},o="Server-side RAG with LlamaEdge",i={id:"user-guide/server-side-rag/quick-start",title:"Server-side RAG with LlamaEdge",description:"RAG is an important technique to inject new and updated knowledge into an LLM application. It improves accuracy and reduces the hallucination of LLMs, especially in specific domains covered by the RAG knowledge base. In the past, most RAG setups are very complex requiring the orchestration of multiple services and components in heavyweight frameworks in Python.",source:"@site/docs/user-guide/server-side-rag/quick-start.md",sourceDirName:"user-guide/server-side-rag",slug:"/user-guide/server-side-rag/quick-start",permalink:"/docs/user-guide/server-side-rag/quick-start",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/user-guide/server-side-rag/quick-start.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Server-side RAG",permalink:"/docs/category/server-side-rag"},next:{title:"Knowledge base from a plain text file",permalink:"/docs/user-guide/server-side-rag/text"}},d={},l=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Prepare a vector database",id:"prepare-a-vector-database",level:2},{value:"Start the API server",id:"start-the-api-server",level:2},{value:"Chat with supplemental RAG knowledge",id:"chat-with-supplemental-rag-knowledge",level:2},{value:"Under the hood",id:"under-the-hood",level:2},{value:"Next steps",id:"next-steps",level:2}];function c(e){const t={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h1,{id:"server-side-rag-with-llamaedge",children:"Server-side RAG with LlamaEdge"}),"\n",(0,a.jsx)(t.p,{children:"RAG is an important technique to inject new and updated knowledge into an LLM application. It improves accuracy and reduces the hallucination of LLMs, especially in specific domains covered by the RAG knowledge base. In the past, most RAG setups are very complex requiring the orchestration of multiple services and components in heavyweight frameworks in Python."}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.a,{href:"https://github.com/LlamaEdge/LlamaEdge",children:"LlamaEdge"}),", on the other hand, provides a Rust-based development platform that enables developers to combine RAG logic into the chat API server! The compact and efficient single-binary API server is cross-platform and runs on any GPU or AI accelerator device, which allows it to be easily deployed across the cloud and the edge."]}),"\n",(0,a.jsxs)(t.blockquote,{children:["\n",(0,a.jsx)(t.p,{children:"Since the LlamaEdge API server encapsulates the RAG logic behind the OpenAI-compatible web service API, you can use any OpenAI-compatible frontend to interact with it. When you ask a question through the API, the answer is already RAG-enhanced. No client-side RAG (i.e., to index and search the RAG vector store in the client) is needed."}),"\n"]}),"\n",(0,a.jsx)(t.p,{children:"The LlamaEdge API server is a powerful demo of the LlamaEdge development platform. It showcases how to use the LlamaEdge SDK to build a generic RAG application. You can, of course, implement your own RAG logic using the LlamaEdge SDK and build your own RAG API server! In this tutorial, we will explain how to use the default RAG features built into our standard API server."}),"\n",(0,a.jsx)(t.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,a.jsxs)(t.p,{children:["Install the ",(0,a.jsx)(t.a,{href:"https://github.com/WasmEdge/WasmEdge",children:"WasmEdge Runtime"}),", our cross-platform LLM runtime."]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{children:"curl -sSf https://raw.githubusercontent.com/WasmEdge/WasmEdge/master/utils/install_v2.sh | bash -s\n"})}),"\n",(0,a.jsx)(t.p,{children:"Download the pre-built binary for the LlamaEdge API server with RAG support."}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{children:"curl -LO https://github.com/LlamaEdge/rag-api-server/releases/latest/download/rag-api-server.wasm\n"})}),"\n",(0,a.jsx)(t.p,{children:"And the chatbot web UI for the API server."}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{children:"curl -LO https://github.com/second-state/chatbot-ui/releases/latest/download/chatbot-ui.tar.gz\ntar xzf chatbot-ui.tar.gz\nrm chatbot-ui.tar.gz\n"})}),"\n",(0,a.jsx)(t.p,{children:"Download a chat model and an embedding model."}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{children:"# The chat model is Llama3 8b chat\ncurl -LO https://huggingface.co/second-state/Llama-3-8B-Instruct-GGUF/resolve/main/Meta-Llama-3-8B-Instruct-Q5_K_M.gguf\n\n# The embedding model is all-MiniLM-L6-v2\ncurl -LO https://huggingface.co/second-state/All-MiniLM-L6-v2-Embedding-GGUF/resolve/main/all-MiniLM-L6-v2-ggml-model-f16.gguf\n"})}),"\n",(0,a.jsx)(t.p,{children:"The embedding model is a special kind of LLM that turns sentences into vectors. The vectors can then be stored in a vector database and searched later. When the sentences are from a body of text that represents a knowledge domain, that vector database becomes our RAG knowledge base."}),"\n",(0,a.jsx)(t.h2,{id:"prepare-a-vector-database",children:"Prepare a vector database"}),"\n",(0,a.jsx)(t.p,{children:"By default, we use Qdrant as the vector database. You can start a Qdrant instance on your server using Docker. The following command starts it in the background."}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{children:"mkdir qdrant_storage\nmkdir qdrant_snapshots\n\nnohup docker run -d -p 6333:6333 -p 6334:6334 \\\n    -v $(pwd)/qdrant_storage:/qdrant/storage:z \\\n    -v $(pwd)/qdrant_snapshots:/qdrant/snapshots:z \\\n    qdrant/qdrant\n"})}),"\n",(0,a.jsxs)(t.p,{children:["Delete the ",(0,a.jsx)(t.code,{children:"default"})," collection if it exists."]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{children:"curl -X DELETE 'http://localhost:6333/collections/default'\n"})}),"\n",(0,a.jsxs)(t.p,{children:["Next, download a knowledge base, which is in the form of a vector snapshot. For example, here is an vector snapshot\ncreated from a guidebook for Paris. It is a 384-dimension vector collection created by the embedding model ",(0,a.jsx)(t.a,{href:"https://huggingface.co/second-state/All-MiniLM-L6-v2-Embedding-GGUF",children:"all-minilm-l6-v2"}),", which you have already downloaded."]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{children:"curl -LO https://huggingface.co/datasets/gaianet/paris/resolve/main/paris_384_all-minilm-l6-v2_f16.snapshot\n"})}),"\n",(0,a.jsxs)(t.blockquote,{children:["\n",(0,a.jsx)(t.p,{children:"You can create your own vector snapshots using tools discussed in the next several chapters."}),"\n"]}),"\n",(0,a.jsxs)(t.p,{children:["Import the vector snapshot file into the local Qdrant database server's ",(0,a.jsx)(t.code,{children:"default"})," collection."]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{children:"curl -s -X POST http://localhost:6333/collections/default/snapshots/upload?priority=snapshot \\\n    -H 'Content-Type:multipart/form-data' \\\n    -F 'snapshot=@paris_384_all-minilm-l6-v2_f16.snapshot'\n"})}),"\n",(0,a.jsx)(t.h2,{id:"start-the-api-server",children:"Start the API server"}),"\n",(0,a.jsx)(t.p,{children:"Let's start the LlamaEdge RAG API server on port 8080. By default, it connects to the local Qdrant server."}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{children:'wasmedge --dir .:. \\\n   --nn-preload default:GGML:AUTO:Meta-Llama-3-8B-Instruct-Q5_K_M.gguf \\\n   --nn-preload embedding:GGML:AUTO:all-MiniLM-L6-v2-ggml-model-f16.gguf \\\n   rag-api-server.wasm -p llama-2-chat --web-ui ./chatbot-ui \\\n     --model-name Meta-Llama-3-8B-Instruct-Q5_K_M,all-MiniLM-L6-v2-ggml-model-f16 \\\n     --ctx-size 4096,384 \\\n     --rag-prompt "Use the following context to answer the question.\\n----------------\\n" \\\n     --log-prompts --log-stat\n'})}),"\n",(0,a.jsxs)(t.p,{children:["The CLI arguments are self-explanatory.\nNotice that those arguments are different from the ",(0,a.jsx)(t.a,{href:"https://github.com/LlamaEdge/LlamaEdge/tree/main/api-server",children:"llama-api-server.wasm"})," app."]}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:["The ",(0,a.jsx)(t.code,{children:"--nn-proload"})," loads two models we just downloaded. The chat model is named ",(0,a.jsx)(t.code,{children:"default"})," and the embedding model is named ",(0,a.jsx)(t.code,{children:"embedding"})," ."]}),"\n",(0,a.jsxs)(t.li,{children:["The ",(0,a.jsx)(t.code,{children:"rag-api-server.wasm"})," is the API server app. It is written in Rust using LlamaEdge SDK, and is already compiled to cross-platform Wasm binary."]}),"\n",(0,a.jsxs)(t.li,{children:["The ",(0,a.jsx)(t.code,{children:"--model-name"})," specifies the names of those two models so that API calls can be routed to specific models."]}),"\n",(0,a.jsxs)(t.li,{children:["The ",(0,a.jsx)(t.code,{children:"--ctx-size"})," specifies the max input size for each of those two models listed in ",(0,a.jsx)(t.code,{children:"--model-name"}),"."]}),"\n",(0,a.jsxs)(t.li,{children:["The ",(0,a.jsx)(t.code,{children:"--rag-prompt"})," specifies the system prompt that introduces the context of the vector search and returns relevant context from qdrant."]}),"\n"]}),"\n",(0,a.jsxs)(t.p,{children:["There are a few optional ",(0,a.jsx)(t.code,{children:"--qdrant-*"})," arguments you could use."]}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:["The ",(0,a.jsx)(t.code,{children:"--qdrant-url"})," is the API URL to the Qdrant server that contains the vector collection. It defaults to ",(0,a.jsx)(t.code,{children:"http://localhost:6333"}),"."]}),"\n",(0,a.jsxs)(t.li,{children:["The ",(0,a.jsx)(t.code,{children:"--qdrant-collection-name"})," is the name of the vector collection that contains our knowledge base. It defaults to ",(0,a.jsx)(t.code,{children:"default"}),"."]}),"\n",(0,a.jsxs)(t.li,{children:["The ",(0,a.jsx)(t.code,{children:"--qdrant-limit"})," is the maximum number of text chunks (search results) we could add to the prompt as the RAG context. It defaults to ",(0,a.jsx)(t.code,{children:"3"}),"."]}),"\n",(0,a.jsxs)(t.li,{children:["The ",(0,a.jsx)(t.code,{children:"--qdrant-score-threshold"})," is the minimum score a search result must reach for its corresponding text chunk to be added to the RAG context. It defaults to ",(0,a.jsx)(t.code,{children:"0.4"}),"."]}),"\n"]}),"\n",(0,a.jsx)(t.h2,{id:"chat-with-supplemental-rag-knowledge",children:"Chat with supplemental RAG knowledge"}),"\n",(0,a.jsxs)(t.p,{children:["Just go to ",(0,a.jsx)(t.code,{children:"http://localhost:8080/"})," from your web browser, and you will see a chatbot UI web page. You can now\nask any question about Paris and it will answer based on the Paris guidebook in the Qdrant database!"]}),"\n",(0,a.jsx)(t.p,{children:"This is a local web server serving a local LLM with knowledge from a local vector database. Nothing leaves your computer!"}),"\n",(0,a.jsx)(t.h2,{id:"under-the-hood",children:"Under the hood"}),"\n",(0,a.jsx)(t.p,{children:"The LlamaEdge RAG API server takes every new user request, searches relevant embeddings based on the request, and then adds search results to the prompt."}),"\n",(0,a.jsx)(t.p,{children:'For example, if you ask the question "Where is Paris?", the actual prompt to the LLM will contain 3 paragraphs of text that are relevant to the question.'}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{children:'<s>[INST] <<SYS>>\nYou are a helpful assistant.\nUse the following pieces of context to answer the user\'s question.\nIf you don\'t know the answer, just say that you don\'t know, don\'t try to make up an answer.\n----------------\n"For centuries Paris has been one of the world\u2019s most important and attractive cities. It is appreciated for the opportunities it offers for business and commerce, for study, for culture, and for entertainment; its gastronomy, haute couture, painting, literature, and intellectual community especially enjoy an enviable reputation. Its sobriquet \u201cthe City of Light\u201d (\u201cla Ville Lumi\xe8re\u201d), earned during the Enlightenment, remains appropriate, for Paris has retained its importance as a center for education and intellectual pursuits."\n\n"Under Hugh Capet (ruled 987\u2013996) and the Capetian dynasty the preeminence of Paris was firmly established, and Paris became the political and cultural hub as modern France took shape. France has long been a highly centralized country, and Paris has come to be identified with a powerful central state, drawing to itself much of the talent and vitality of the provinces."\n\n"Paris, city and capital of France, situated in the north-central part of the country. People were living on the site of the present-day city, located along the Seine River some 233 miles (375 km) upstream from the river\u2019s mouth on the English Channel (La Manche), by about 7600 BCE. The modern city has spread from the island (the \xcele de la Cit\xe9) and far beyond both banks of the Seine." <</SYS>>\n\nWhere is Paris? [/INST]\n'})}),"\n",(0,a.jsx)(t.p,{children:"You can try the application from its web UI."}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.a,{href:"http://localhost:8080/",children:"http://localhost:8080/"})}),"\n",(0,a.jsx)(t.p,{children:"Or, you can access it via the API."}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{children:'curl -X POST http://localhost:8080/v1/chat/completions \\\n  -H \'accept: application/json\' \\\n  -H \'Content-Type: application/json\' \\\n  -d \'{"messages":[{"role":"system", "content": "You are a helpful assistant."}, {"role":"user", "content": "Where is Paris?"}], "model":"Llama-2-7b-chat-hf-Q5_K_M"}\'\n\n{\n  "id":"18511d0f-b760-437f-a87f-8e95645822a0",\n  "object":"chat.completion",\n  "created":1711519741,\n  "model":"Llama-2-7b-chat-hf-Q5_K_M",\n  "choices":[{"index":0,\n    "message":{"role":"assistant","content":"Based on the provided context, Paris is located in the north-central part of France, situated along the Seine River. According to the text, people were living on the site of the present-day city by around 7600 BCE, and the modern city has spread from the island (the \xcele de la Cit\xe9) and far beyond both banks of the Seine."},\n  "finish_reason":"stop"}],"usage":{"prompt_tokens":387,"completion_tokens":80,"total_tokens":467}\n}\n'})}),"\n",(0,a.jsx)(t.h2,{id:"next-steps",children:"Next steps"}),"\n",(0,a.jsx)(t.p,{children:"Now it is time to build your own RAG-enabled API server! You can start by using the same embedding model but with a different document. Make sure that you segment the document into chucks of less than 200 words each, and separate each chunk with an empty line. You can experiment with different chucking strategies to evaluate how to come up with the best search results when the user asks new questions."}),"\n",(0,a.jsx)(t.p,{children:"Next, you can experiment with a different embedding model. Notice that each embedding model has a different context length (ie max length for each chunk) and vector size. You must also use the same embedding model to generate embeddings and perform RAG search/chat."}),"\n",(0,a.jsx)(t.p,{children:"Good luck!"})]})}function h(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>i});var a=n(6540);const s={},r=a.createContext(s);function o(e){const t=a.useContext(r);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),a.createElement(r.Provider,{value:t},e.children)}}}]);