import * as dotenv from "dotenv";
import { OpenAI } from "langchain";

import { example } from "./parsers";

dotenv.config();

const model = new OpenAI({
  modelName: "gpt-3.5-turbo",
  openAIApiKey: process.env.OPENAI_API_KEY,
  temperature: 0.0,
});

(async () => {
  const prompt = await example();
  const res1 = await model.call(prompt);
  console.log(res1);
})();
