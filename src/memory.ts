import { OpenAI } from "langchain";
import { BufferMemory } from "langchain/memory";
import { ConversationChain } from "langchain/chains";

export const memory = new BufferMemory();

export const createChainWithModel = (model, memory) =>
  new ConversationChain({
    llm: model,
    memory,
  });
