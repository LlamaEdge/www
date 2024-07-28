"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[784],{8326:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>h,frontMatter:()=>a,metadata:()=>r,toc:()=>c});var o=t(4848),i=t(8453);const a={sidebar_position:30},s="Use LlamaEdge in Docker",r={id:"user-guide/llamaedge-docker",title:"Use LlamaEdge in Docker",description:"You can run all the commands in this document without any change on any machine with the latest Docker and at least 8GB of RAM available to the container.",source:"@site/docs/user-guide/llamaedge-docker.md",sourceDirName:"user-guide",slug:"/user-guide/llamaedge-docker",permalink:"/docs/user-guide/llamaedge-docker",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/user-guide/llamaedge-docker.md",tags:[],version:"current",sidebarPosition:30,frontMatter:{sidebar_position:30},sidebar:"tutorialSidebar",previous:{title:"Use the API server",permalink:"/docs/user-guide/server-side-rag/rag-service"},next:{title:"Use LlamaEdge in Kubernetes",permalink:"/docs/user-guide/llamaedge-kubernetes"}},l={},c=[{value:"Quick start",id:"quick-start",level:2},{value:"Specify context window sizes",id:"specify-context-window-sizes",level:2},{value:"Build your own image",id:"build-your-own-image",level:2},{value:"What&#39;s next",id:"whats-next",level:2}];function d(e){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"use-llamaedge-in-docker",children:"Use LlamaEdge in Docker"}),"\n",(0,o.jsx)(n.p,{children:"You can run all the commands in this document without any change on any machine with the latest Docker and at least 8GB of RAM available to the container.\nBy default, the container uses the CPU to peform computations, which could be slow for large LLMs. For GPUs,"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["Mac: Everything here works on ",(0,o.jsx)(n.a,{href:"https://docs.docker.com/desktop/install/mac-install/",children:"Docker Desktop for Mac"}),". However, the Apple GPU cores will not be available inside Docker containers."]}),"\n",(0,o.jsxs)(n.li,{children:["Windows and Linux with Nvidia GPU: You will need to install ",(0,o.jsx)(n.a,{href:"https://docs.nvidia.com/datacenter/cloud-native/container-toolkit/latest/install-guide.html#installation",children:"NVIDIA Container Toolkit"})," for Docker. In the instructions below, replace the ",(0,o.jsx)(n.code,{children:"latest"})," tag with ",(0,o.jsx)(n.code,{children:"cuda12"})," or ",(0,o.jsx)(n.code,{children:"cuda11"}),", and add the ",(0,o.jsx)(n.code,{children:"--device nvidia.com/gpu=all"})," flag, to use take advantage of the GPU. If you need to build the images yourself, replace ",(0,o.jsx)(n.code,{children:"Dockerfile"})," with ",(0,o.jsx)(n.code,{children:"Dockerfile.cuda12"})," or ",(0,o.jsx)(n.code,{children:"Dockerfile.cuda11"}),"."]}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"quick-start",children:"Quick start"}),"\n",(0,o.jsx)(n.p,{children:"Run the following Docker command to start an OpenAI-compatible LLM API server on your own device."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"docker run --rm -p 8080:8080 --name api-server secondstate/qwen-2-0.5b-allminilm-2:latest\n"})}),"\n",(0,o.jsxs)(n.p,{children:["Go to ",(0,o.jsx)(n.a,{href:"http://localhost:8080",children:"http://localhost:8080"})," from your browser to chat with the model!"]}),"\n",(0,o.jsxs)(n.p,{children:["This container starts two models Qwen-2-0.5B is a very small but highly capable LLM chat model, and all-miniLM is\na widely used embedding model.\nThat allows the API server to support both ",(0,o.jsx)(n.code,{children:"/chat/completions"})," and ",(0,o.jsx)(n.code,{children:"/embeddings"})," endpoints, which are crucial for most\nLLM agent apps and frameworks based on OpenAI."]}),"\n",(0,o.jsx)(n.p,{children:"Alternatively, you can use the command below to start a server on an Nvidia CUDA 12 machine."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"docker run --rm -p 8080:8080 --device nvidia.com/gpu=all --name api-server secondstate/qwen-2-0.5b-allminilm-2:cuda12\n"})}),"\n",(0,o.jsx)(n.p,{children:"You can make an OpenAI style API request as follows."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:'curl -X POST http://localhost:8080/v1/chat/completions \\\n  -H \'accept: application/json\' \\\n  -H \'Content-Type: application/json\' \\\n  -d \'{"messages":[{"role":"system", "content": "You are a helpful assistant."}, {"role":"user", "content": "Where is Paris?"}]}\'\n'})}),"\n",(0,o.jsx)(n.p,{children:"Or, make an embedding request to turn a collection of text paragraphs into vectors. It is required for many RAG apps."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:'curl -X POST http://localhost:8080/v1/embeddings \\\n    -H \'accept:application/json\' \\\n    -H \'Content-Type: application/json\' \\\n    -d \'{"model":"all-MiniLM-L6-v2-ggml-model-f16.gguf", "input":["Paris is the capital of France.","Paris occupies a central position in the rich agricultural region of 890 square miles (2,300 square km).","The population of Paris is 2,145,906"]}\'\n'})}),"\n",(0,o.jsx)(n.p,{children:"Stop and remove the container once you are done."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"docker stop api-server\n"})}),"\n",(0,o.jsx)(n.h2,{id:"specify-context-window-sizes",children:"Specify context window sizes"}),"\n",(0,o.jsx)(n.p,{children:"The memory consumption of the container is dependent on the context size you give to the model. You can specify the context size by appending two arguments at the end of the command. The following command starts the container with a context window of 1024 tokens for the chat LLM and a context window of 256 tokens for the embedding model."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"docker run --rm -p 8080:8080 --name api-server secondstate/qwen-2-0.5b-allminilm-2:latest ctx-size 1024 256\n"})}),"\n",(0,o.jsx)(n.p,{children:"Each model comes with a maximum context size it can support. Your custom context size should not exceed that. Please refer to model documentation for this information."}),"\n",(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsx)(n.p,{children:"If you set the embedding context size (i.e., the last argument in the above command) to 0, the container would load the chat LLM only."}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"build-your-own-image",children:"Build your own image"}),"\n",(0,o.jsx)(n.p,{children:"You can build nad publish a Docker image to use any models you like. First, download the model files (must be in GGUF format) you want from Huggingface.\nOf course, you could also your private finetuned model files here."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"curl -LO https://huggingface.co/second-state/Qwen2-0.5B-Instruct-GGUF/resolve/main/Qwen2-0.5B-Instruct-Q5_K_M.gguf\ncurl -LO https://huggingface.co/second-state/All-MiniLM-L6-v2-Embedding-GGUF/resolve/main/all-MiniLM-L6-v2-ggml-model-f16.gguf\n"})}),"\n",(0,o.jsxs)(n.p,{children:["Build a multi-platform image by passing the model files as ",(0,o.jsx)(n.code,{children:"--build-arg"}),". The ",(0,o.jsx)(n.code,{children:"PROMPT_TEMPLATE"})," is the specific text format the chat model is trained on to follow conversations. It differs for each model, and you will need to special attention. For all models published by the second-state organization, you can find the prompt-template in the model card."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"docker buildx build . --platform linux/arm64,linux/amd64 \\\n  --tag secondstate/qwen-2-0.5b-allminilm-2:latest -f Dockerfile \\\n  --build-arg CHAT_MODEL_FILE=Qwen2-0.5B-Instruct-Q5_K_M.gguf \\\n  --build-arg EMBEDDING_MODEL_FILE=all-MiniLM-L6-v2-ggml-model-f16.gguf \\\n  --build-arg PROMPT_TEMPLATE=chatml\n"})}),"\n",(0,o.jsx)(n.p,{children:"Once it is built, you can publish it to Docker Hub."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"docker login\ndocker push secondstate/qwen-2-0.5b-allminilm-2:latest\n"})}),"\n",(0,o.jsx)(n.h2,{id:"whats-next",children:"What's next"}),"\n",(0,o.jsxs)(n.p,{children:["Use the container as a drop-in replacement for the OpenAI API for your favorite agent app or framework! ",(0,o.jsx)(n.a,{href:"/docs/user-guide/openai-api/intro",children:"See some examples here"}),"."]})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>r});var o=t(6540);const i={},a=o.createContext(i);function s(e){const n=o.useContext(a);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),o.createElement(a.Provider,{value:n},e.children)}}}]);