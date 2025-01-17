"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6130],{8614:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>r,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>d});var s=t(4848),a=t(8453);const i={sidebar_position:4},l="Run FLUX models with LlamaEdge",o={id:"user-guide/text-to-image/flux",title:"Run FLUX models with LlamaEdge",description:"FLUX.1 is an open-source image generation model developed by Black Forest Labs, the creators of Stable Diffusion. With the LlamaEdge stable-diffusion-api-server, you can build an OpenAI-compatible API server for FLUX models.",source:"@site/docs/user-guide/text-to-image/flux.md",sourceDirName:"user-guide/text-to-image",slug:"/user-guide/text-to-image/flux",permalink:"/docs/user-guide/text-to-image/flux",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/user-guide/text-to-image/flux.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Quick Start with Stable Diffusion models",permalink:"/docs/user-guide/text-to-image/quick-start-sd"},next:{title:"Text to Speech",permalink:"/docs/category/text-to-speech"}},r={},d=[{value:"Install WasmEdge",id:"install-wasmedge",level:3},{value:"Download the portable API server app",id:"download-the-portable-api-server-app",level:3},{value:"Download the FLUX.1-dev model",id:"download-the-flux1-dev-model",level:3},{value:"Run the FLUX.1-dev model",id:"run-the-flux1-dev-model",level:3},{value:"Use the API",id:"use-the-api",level:3}];function c(e){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h3:"h3",p:"p",pre:"pre",strong:"strong",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"run-flux-models-with-llamaedge",children:"Run FLUX models with LlamaEdge"}),"\n",(0,s.jsxs)(n.p,{children:["FLUX.1 is an open-source image generation model developed by Black Forest Labs, the creators of Stable Diffusion. With the ",(0,s.jsx)(n.a,{href:"https://github.com/LlamaEdge/sd-api-server",children:"LlamaEdge stable-diffusion-api-server"}),", you can build an OpenAI-compatible API server for FLUX models."]}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:"To run the FLUX models, make sure your machine has 1GGB RAM."}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"install-wasmedge",children:"Install WasmEdge"}),"\n",(0,s.jsx)(n.p,{children:"Start by installing WasmEdge version 0.14.1."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"curl -sSf https://raw.githubusercontent.com/WasmEdge/WasmEdge/master/utils/install_v2.sh | bash -s -- -v 0.14.1\n"})}),"\n",(0,s.jsx)(n.p,{children:"Choose the appropriate installation command based on your system:"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"For Mac Apple Silicon"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"# Download the stable diffusion plugin for Mac Apple Silicon\ncurl -LO https://github.com/WasmEdge/WasmEdge/releases/download/0.14.1/WasmEdge-plugin-wasmedge_stablediffusion-0.14.1-darwin_arm64.tar.gz\n\n# Unzip the plugin to $HOME/.wasmedge/plugin\ntar -xzf WasmEdge-plugin-wasmedge_stablediffusion-0.14.1-darwin_arm64.tar.gz -C $HOME/.wasmedge/plugin\n\nrm $HOME/.wasmedge/plugin/libwasmedgePluginWasiNN.dylib\n"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"For CUDA 12.0 (Ubuntu)."})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"# Download the stable diffusion plugin for cuda 12.0\ncurl -LO https://github.com/WasmEdge/WasmEdge/releases/download/0.14.1/WasmEdge-plugin-wasmedge_stablediffusion-cuda-12.0-0.14.1-ubuntu20.04_x86_64.tar.gz\n\n# Unzip the plugin to $HOME/.wasmedge/plugin\ntar -xzf WasmEdge-plugin-wasmedge_stablediffusion-cuda-12.0-0.14.1-ubuntu20.04_x86_64.tar.gz -C $HOME/.wasmedge/plugin\n"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"For CUDA 11.0 (Ubuntu)."})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"# Download the stable diffusion plugin for cuda 11.0\ncurl -LO https://github.com/WasmEdge/WasmEdge/releases/download/0.14.1/WasmEdge-plugin-wasmedge_stablediffusion-cuda-11.3-0.14.1-ubuntu20.04_x86_64.tar.gz\n\n# Unzip the plugin to $HOME/.wasmedge/plugin\ntar -xzf WasmEdge-plugin-wasmedge_stablediffusion-cuda-11.3-0.14.1-ubuntu20.04_x86_64.tar.gz -C $HOME/.wasmedge/plugin\n"})}),"\n",(0,s.jsx)(n.h3,{id:"download-the-portable-api-server-app",children:"Download the portable API server app"}),"\n",(0,s.jsx)(n.p,{children:"Download the API server application. It's a Wasm file, which is lightweight (the size of the server is 2.5 MB) and cross-platform."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"curl -LO https://github.com/LlamaEdge/sd-api-server/releases/latest/download/sd-api-server.wasm\n"})}),"\n",(0,s.jsx)(n.h3,{id:"download-the-flux1-dev-model",children:"Download the FLUX.1-dev model"}),"\n",(0,s.jsxs)(n.p,{children:["We wil use FLUX.1-dev as an example in this tutorial. You can browse ",(0,s.jsx)(n.a,{href:"https://huggingface.co/collections/second-state/flux1-gguf-models-66f49625512c24f4b5b36cce",children:"the FLUX model collection"})," for more versiond of the FLUX model."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"# Main model\ncurl -LO https://huggingface.co/second-state/FLUX.1-dev-GGUF/resolve/main/flux1-dev-Q4_0.gguf\n\n# VAE file\ncurl -LO https://huggingface.co/second-state/FLUX.1-dev-GGUF/resolve/main/ae.safetensors\n\n# clip_l encoder\ncurl -LO https://huggingface.co/second-state/FLUX.1-dev-GGUF/resolve/main/clip_l-Q8_0.gguf\n\n# t5xxl encoder\ncurl -LO https://huggingface.co/second-state/FLUX.1-dev-GGUF/resolve/main/t5xxl-Q2_K.gguf\n"})}),"\n",(0,s.jsx)(n.h3,{id:"run-the-flux1-dev-model",children:"Run the FLUX.1-dev model"}),"\n",(0,s.jsx)(n.p,{children:"Start the FLUX.1-dev API server with the following command line."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"wasmedge --dir .:. sd-api-server.wasm \\\n  --model-name flux1-dev \\\n  --diffusion-model flux1-dev-Q4_0.gguf \\\n  --vae ae.safetensors \\\n  --clip-l clip_l-Q8_0.gguf \\\n  --t5xxl t5xxl-Q2_K.gguf\n"})}),"\n",(0,s.jsx)(n.p,{children:"When you see [2024-01-01 16:48:45.462] [info] sd_api_server in src/main.rs:168: Listening on 0.0.0.0:8080 printed on the screen, the API server is ready."}),"\n",(0,s.jsx)(n.h3,{id:"use-the-api",children:"Use the API"}),"\n",(0,s.jsx)(n.p,{children:"Now, you can send an API request to generate images:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'curl -X POST \'http://localhost:8080/v1/images/generations\' \\\n  --header \'Content-Type: application/json\' \\\n  --data \'{\n      "model": "flux1-dev",\n      "prompt": "Astronaut, wearing futuristic astonaut outfit with space helmet, beautiful body and face, very breathtaking beautiful image, cinematic, 4k, epic Steven Spielberg movie still, sharp focus, emitting diodes, smoke, artillery, sparks, racks, system unit, motherboard, by pascal blanche rutkowski repin artstation hyperrealism painting concept art of detailed character design matte painting, 4 k resolution blade runner",\n      "cfg_scale": 1.0,\n      "sample_method": "euler",\n      "steps": 20\n  }\'\n'})}),"\n",(0,s.jsx)(n.p,{children:"If everything is set up correctly, a few minutes later the terminal will output the following"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'{"created":1736740551,"data":[{"url":"http://localhost:8080/v1/files/download/file_a17e7276-8202-4017-b433-e21b8c0a29c6","prompt":"Astronaut, wearing futuristic astonaut outfit with space helmet, beautiful body and face, very breathtaking beautiful image, cinematic, 4k, epic Steven Spielberg movie still, sharp focus, emitting diodes, smoke, artillery, sparks, racks, system unit, motherboard, by pascal blanche rutkowski repin artstation hyperrealism painting concept art of detailed character design matte painting, 4 k resolution blade runner"}]\n'})}),"\n",(0,s.jsxs)(n.p,{children:["Open ",(0,s.jsx)(n.code,{children:"http://localhost:8080/v1/files/download/file_a17e7276-8202-4017-b433-e21b8c0a29c6"})," in your browser, and you wil see the generated image."]})]})}function u(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>l,x:()=>o});var s=t(6540);const a={},i=s.createContext(a);function l(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:l(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);