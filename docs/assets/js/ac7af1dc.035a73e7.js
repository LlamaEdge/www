"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[511],{2960:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>o,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>d,toc:()=>c});var r=t(4848),n=t(8453);const i={sidebar_position:4},a="Use the API server",d={id:"user-guide/server-side-rag/rag-service",title:"Use the API server",description:"The LlamaEdge RAG API server provides an API endpoint /create/rag that takes a text file, segments it into small chunks, turns the chunks into embeddings (i.e., vectors), and then stores the embeddings into the Qdrant database.",source:"@site/docs/user-guide/server-side-rag/rag-service.md",sourceDirName:"user-guide/server-side-rag",slug:"/user-guide/server-side-rag/rag-service",permalink:"/docs/user-guide/server-side-rag/rag-service",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/user-guide/server-side-rag/rag-service.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Knowledge base from a markdown file",permalink:"/docs/user-guide/server-side-rag/markdown"},next:{title:"Use LlamaEdge in Docker",permalink:"/docs/user-guide/llamaedge-docker"}},o={},c=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Step by step example",id:"step-by-step-example",level:2}];function l(e){const s={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,n.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.h1,{id:"use-the-api-server",children:"Use the API server"}),"\n",(0,r.jsxs)(s.p,{children:["The LlamaEdge RAG API server provides an API endpoint ",(0,r.jsx)(s.code,{children:"/create/rag"})," that takes a text file, segments it into small chunks, turns the chunks into embeddings (i.e., vectors), and then stores the embeddings into the Qdrant database.\nIt provides an easy way to quick generate embeddings from a body text into a Qdrant database collection."]}),"\n",(0,r.jsx)(s.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,r.jsxs)(s.p,{children:["You will need to follow ",(0,r.jsx)(s.a,{href:"quick-start",children:"this guide"})," to start a Qdrant database instance and a local ",(0,r.jsx)(s.code,{children:"llama-api-server.wasm"})," server."]}),"\n",(0,r.jsxs)(s.p,{children:["Delete the ",(0,r.jsx)(s.code,{children:"default"})," collection if it exists."]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{children:"curl -X DELETE 'http://localhost:6333/collections/default'\n"})}),"\n",(0,r.jsx)(s.h2,{id:"step-by-step-example",children:"Step by step example"}),"\n",(0,r.jsxs)(s.p,{children:["In this example, we will use a text document ",(0,r.jsx)(s.code,{children:"paris.txt"}),", and simply submit it to the LlamaEdge API server."]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{children:'curl -LO https://huggingface.co/datasets/gaianet/paris/raw/main/paris.txt\n\ncurl -X POST http://127.0.0.1:8080/v1/create/rag -F "file=@paris.txt"\n'})}),"\n",(0,r.jsxs)(s.p,{children:["Now, the Qdrant database has a vector collection called ",(0,r.jsx)(s.code,{children:"default"})," which contains embeddings from the Paris guide. You can see the stats of the vector collection as follows."]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{children:"curl 'http://localhost:6333/collections/default'\n"})}),"\n",(0,r.jsxs)(s.p,{children:["Of course, the ",(0,r.jsx)(s.code,{children:"/create/rag"})," API is rather primitive in chunking documents and creating embeddings. For many use cases, you should ",(0,r.jsx)(s.a,{href:"text",children:"create your own embedding vectors"}),"."]}),"\n",(0,r.jsxs)(s.blockquote,{children:["\n",(0,r.jsxs)(s.p,{children:["The ",(0,r.jsx)(s.code,{children:"/create/rag"})," is a simple combination of ",(0,r.jsx)(s.a,{href:"/docs/developer-guide/create-embeddings-collection",children:"several more basic API endpoints"})," provided by the API server. You can learn more about them in the developer guide."]}),"\n"]}),"\n",(0,r.jsx)(s.p,{children:"Have fun!"})]})}function u(e={}){const{wrapper:s}={...(0,n.R)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},8453:(e,s,t)=>{t.d(s,{R:()=>a,x:()=>d});var r=t(6540);const n={},i=r.createContext(n);function a(e){const s=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function d(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:a(e.components),r.createElement(i.Provider,{value:s},e.children)}}}]);