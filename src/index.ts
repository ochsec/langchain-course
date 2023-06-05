import * as dotenv from "dotenv";
import { OpenAI } from "langchain";

import { memory, createChainWithModel } from "./memory";

dotenv.config();

const model = new OpenAI({
  modelName: "gpt-3.5-turbo",
  openAIApiKey: process.env.OPENAI_API_KEY,
  temperature: 0.0,
});

(async () => {
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
})();
