import * as dotenv from "dotenv";
import { OpenAI } from "langchain";

import { example, example2 } from "./templates";

dotenv.config();

const model = new OpenAI({
  modelName: "gpt-3.5-turbo",
  openAIApiKey: process.env.OPENAI_API_KEY,
  temperature: 0.0,
});

(async () => {
  const exampleStr = await example();
  const exampleStr2 = await example2();
  const res1 = await model.call(exampleStr);
  console.log("Pirate English to polite English:");
  console.log(res1);
  console.log("Rude English to Polite Pirate English:");
  const res2 = await model.call(exampleStr2);
  console.log(res2);
})();
