import { PromptTemplate } from "langchain";
import { StructuredOutputParser } from "langchain/output_parsers";

const customerReview = `\
This leaf blower is pretty amazing.  It has four settings:\
candle blower, gentle breeze, windy city, and tornado. \
It arrived in two days, just in time for my wife's \
anniversary present. \
I think my wife liked it so much she was speechless. \
So far I've been the only one using it, and I've been \
using it every other morning to clear the leaves on our lawn. \
It's slightly more expensive than the other leaf blowers \
out there, but I think it's worth it for the extra features.`;

const reviewTemplate = `\
For the following text, extract the following information:

gift: Was the item purchased as a gift for someone else? \
Answer True if yes, False if not or unknown.

delivery_days: How many days did it take for the product \
to arrive? If this information is not found, output -1.

price_value: Extract any sentences about the value or price,\
and output them as a comma separated Python list.

Format the output as JSON with the following keys:
gift
delivery_days
price_value

text: {text}`;

const schema = StructuredOutputParser.fromNamesAndDescriptions({
  gift: `Was the item purchased\
      as a gift for someone else? \
      Answer True if yes,\
      False if not or unknown.`,
  delivery_days: `How many days\
      did it take for the product\
      to arrive? If this \
      information is not found,\
      output -1.`,
  price_value: `Extract any\
      sentences about the value or \
      price, and output them as a \
      comma separated Python list.`,
});

const formatInstructions = schema.getFormatInstructions();

const prompt = new PromptTemplate({
  template: reviewTemplate,
  inputVariables: ["text"],
  partialVariables: { format_instructions: formatInstructions },
});

export const example = async () =>
  prompt.format({
    style: "American English in a calm and respectful tone",
    text: customerReview,
  });
