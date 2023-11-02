import * as dotenv from "dotenv";
import { OpenAI } from "langchain";

import {
  memory,
  mementoMemory,
  createChainWithModel,
  createMementoWithModel,
} from "./memory";

dotenv.config();

const model = new OpenAI({
  modelName: "gpt-3.5-turbo",
  openAIApiKey: process.env.OPENAI_API_KEY,
  temperature: 0.0,
});

(async () => {
  // Conversation with memory buffer
  const chain = createChainWithModel(model, memory);
  const res1 = await chain.call({
    input: "Hi, my name is Chris",
  });
  console.log(res1);
  const res2 = await chain.call({
    input: "What is 1+1?",
  });
  console.log(res2);
  const res3 = await chain.call({
    input: "What is my name?",
  });
  console.log(res3);
  console.log(memory);

  // Conversation with memory buffer of k=3
  const memento = createMementoWithModel(model, mementoMemory);
  const res4 = await memento.call({
    input: "Have I told you about my condition?",
  });
  console.log(res4);
  const res5 = await memento.call({
    input: "I have no memory.",
  });
  console.log(res5);
  const res6 = await memento.call({
    input: `I have no short-term memory. I know who I am\
    and all about myself, but since my injury I can't make\
    any new memories.`,
  });
  console.log(res6);
  const res7 = await memento.call({
    input: "I've told you this before, haven't I?",
  });
  console.log(res7);
  const res8 = await memento.call({
    input: "What's the last thing you remember?",
  });
  console.log(res8);
  const res9 = await memento.call({
    input: "My name is Leonard",
  });
  console.log(res9);
  const res10 = await memento.call({
    input: "What is 1+1?",
  });
  console.log(res10);
  const res11 = await memento.call({
    input: "Have I told you about my condition?",
  });
  console.log(res11);
})();
