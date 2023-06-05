import { OpenAI } from "langchain";
import { BufferMemory, BufferWindowMemory } from "langchain/memory";
import { ConversationChain } from "langchain/chains";

export const memory = new BufferMemory();
export const mementoMemory = new BufferWindowMemory({ k: 3 });

export const createChainWithModel = (
  model: OpenAI,
  memory: BufferMemory
): ConversationChain =>
  new ConversationChain({
    llm: model,
    memory,
  });

export const createMementoWithModel = (
  model: OpenAI,
  memory: BufferWindowMemory
): ConversationChain =>
  new ConversationChain({
    llm: model,
    memory,
  });
