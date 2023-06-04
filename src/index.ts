import * as dotenv from "dotenv";
import { OpenAI } from "langchain";

import { example } from "./templates.ts";

dotenv.config();

const model = new OpenAI({
  modelName: "gpt-3.5-turbo",
  openAIApiKey: process.env.OPENAI_API_KEY,
  temperature: 0.0,
});

(async () => {
  const exampleStr = await example();
  const res = await model.call(exampleStr);

  console.log(res);
})();
