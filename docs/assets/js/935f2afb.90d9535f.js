"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[581],{5610:e=>{e.exports=JSON.parse('{"pluginId":"default","version":"current","label":"Next","banner":null,"badge":false,"noIndex":false,"className":"docs-version-current","isLast":true,"docsSidebars":{"tutorialSidebar":[{"type":"link","label":"LlamaEdge","href":"/docs/intro","docId":"intro","unlisted":false},{"type":"category","label":"User Guide","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Quickstart with one line of command","href":"/docs/user-guide/quick-start-command","docId":"user-guide/quick-start-command","unlisted":false},{"type":"link","label":"Getting started with LlamaEdge","href":"/docs/user-guide/get-started-with-llamaedge","docId":"user-guide/get-started-with-llamaedge","unlisted":false},{"type":"link","label":"Server-side RAG with LlamaEdge","href":"/docs/user-guide/server-side-rag","docId":"user-guide/server-side-rag","unlisted":false},{"type":"link","label":"Client-side RAG with LlamaEdge","href":"/docs/user-guide/client-side-rag","docId":"user-guide/client-side-rag","unlisted":false},{"type":"link","label":"Use LlamaEdge in Docker","href":"/docs/user-guide/llamaedge-docker","docId":"user-guide/llamaedge-docker","unlisted":false},{"type":"link","label":"Use LlamaEdge in Kubernetes","href":"/docs/user-guide/llamaedge-kubernetes","docId":"user-guide/llamaedge-kubernetes","unlisted":false}],"href":"/docs/category/user-guide"},{"type":"category","label":"Developer Guide","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Create a basic LLM app","href":"/docs/developer-guide/basic-llm-app","docId":"developer-guide/basic-llm-app","unlisted":false},{"type":"link","label":"Create a chatbot LLM app","href":"/docs/developer-guide/chatbot-llm-app","docId":"developer-guide/chatbot-llm-app","unlisted":false},{"type":"link","label":"Create a multimodal app","href":"/docs/developer-guide/multimodal-app","docId":"developer-guide/multimodal-app","unlisted":false},{"type":"link","label":"Create an embedding app","href":"/docs/developer-guide/embedding-app","docId":"developer-guide/embedding-app","unlisted":false},{"type":"link","label":"Create knowledge embeddings using the API server","href":"/docs/developer-guide/create-embeddings-collection","docId":"developer-guide/create-embeddings-collection","unlisted":false},{"type":"link","label":"Implement your own RAG API server","href":"/docs/developer-guide/rag-api-server","docId":"developer-guide/rag-api-server","unlisted":false}],"href":"/docs/category/developer-guide"}]},"docs":{"developer-guide/basic-llm-app":{"id":"developer-guide/basic-llm-app","title":"Create a basic LLM app","description":"At the most basic level, the LLM completes text. That is why the input text is called a \\"prompt\\". The base model simply comes up with the next words that are likely to follow the prompt. In this example, we will demonstrate this basic use case.","sidebar":"tutorialSidebar"},"developer-guide/chatbot-llm-app":{"id":"developer-guide/chatbot-llm-app","title":"Create a chatbot LLM app","description":"The most common LLM app has to be the chatbot. For that, the base LLM is finetuned with a lot of back and forth conversation examples. The base LLM \\"learns\\" how to follow conversations and becomes a chat LLM. Since the conversation examples are fed into the LLM using certain formats, the chat LLM will expect the input prompt to follow the same format. This is called the prompt template. Let\'s see how that works.","sidebar":"tutorialSidebar"},"developer-guide/create-embeddings-collection":{"id":"developer-guide/create-embeddings-collection","title":"Create knowledge embeddings using the API server","description":"The LlamaEdge API server project demonstrates how to support OpenAI style APIs to upload, chunck, and create embeddings for a text document. In this guide, I will show you how to use those API endpoints as a developer.","sidebar":"tutorialSidebar"},"developer-guide/embedding-app":{"id":"developer-guide/embedding-app","title":"Create an embedding app","description":"An important LLM task is to generate embeddings for natural language sentences. It converts a sentence to a vector of numbers called an \\"embedding\\". The embedding vectors can then be stored in a vector database. You can search it later to find similiar sentences.","sidebar":"tutorialSidebar"},"developer-guide/multimodal-app":{"id":"developer-guide/multimodal-app","title":"Create a multimodal app","description":"Coming soon.","sidebar":"tutorialSidebar"},"developer-guide/rag-api-server":{"id":"developer-guide/rag-api-server","title":"Implement your own RAG API server","description":"Coming soon.","sidebar":"tutorialSidebar"},"intro":{"id":"intro","title":"LlamaEdge","description":"LlamaEdge is the easiest & fastest way to run customized and fine-tuned LLMs locally or on the edge.","sidebar":"tutorialSidebar"},"user-guide/client-side-rag":{"id":"user-guide/client-side-rag","title":"Client-side RAG with LlamaEdge","description":"In this tutorial, I will introduce you how to build a client-side RAG using Llama2-7b-chat model, based on LlamaEdge and Langchain.","sidebar":"tutorialSidebar"},"user-guide/get-started-with-llamaedge":{"id":"user-guide/get-started-with-llamaedge","title":"Getting started with LlamaEdge","description":"Let\'s dive into a simple and practical tutorial on getting started with LlamaEdge, focusing on how to use a Command Line Interface (CLI) installer to run a model, along with some useful WasmEdge commands. This guide can be adjusted and applied to run Llama 2 series of models, tailored to give you a hands-on approach to running your large language model with LlamaEdge.","sidebar":"tutorialSidebar"},"user-guide/llamaedge-docker":{"id":"user-guide/llamaedge-docker","title":"Use LlamaEdge in Docker","description":"Coming soon!","sidebar":"tutorialSidebar"},"user-guide/llamaedge-kubernetes":{"id":"user-guide/llamaedge-kubernetes","title":"Use LlamaEdge in Kubernetes","description":"Coming soon.","sidebar":"tutorialSidebar"},"user-guide/quick-start-command":{"id":"user-guide/quick-start-command","title":"Quickstart with one line of command","description":"Enhance your onboarding experience and quickly get started with LlamaEdge using the following scripts.","sidebar":"tutorialSidebar"},"user-guide/server-side-rag":{"id":"user-guide/server-side-rag","title":"Server-side RAG with LlamaEdge","description":"RAG is an important technique to inject new and updated knowledge into an LLM application. It improves accuracy and reduces the hallucination of LLMs, especially in specific domains covered by the RAG knowledge base. In the past, most RAG setups are very complex requiring the orchestration of multiple services and components in heavyweight frameworks in Python.","sidebar":"tutorialSidebar"}}}')}}]);