import { PromptTemplate } from "langchain";

const template = `Translate the text \
that is delimited by triple single quotes \
into a style that is {style}. \
text: '''{text}'''`;

const prompt = new PromptTemplate({
  template,
  inputVariables: ["style", "text"],
});

const customerEmail = `Arrr, I be fuming that me blender lid \
flew off and splattered me kitchen walls \
with smoothie! And to make matters worse, \
the warranty don't cover the cost of \
cleaning up me kitchen. I need yer help \
right now, matey!`;

const serviceReply = `Hey there customer, \
the warranty does not cover \
cleaning expenses for your kitchen \
because it's your fault that \
you misused your blender \
by forgetting to put the lid on before \
starting the blender. \
Tough luck! See ya!`;

const serviceStylePirate = `a polite tone \
that speaks in English Pirate`;

export const example = async () =>
  prompt.format({
    style: "American English in a calm and respectful tone",
    text: customerEmail,
  });

export const example2 = async () =>
  prompt.format({
    style: serviceStylePirate,
    text: serviceReply,
  });
