import Anthropic from "@anthropic-ai/sdk";

const client = new Anthropic({
  apiKey: process.env.CLAUDE_API_KEY
});

export async function runPARA(text) {
  const prompt = `
You are PARA-AI, a legal clarity engine. Break down the following text using:

P — Purpose  
A — Actions  
R — Risks  
A — Alternatives  

Text:
${text}
`;

  const response = await client.messages.create({
    model: "claude-3-5-sonnet-20240620",
    max_tokens: 600,
    messages: [{ role: "user", content: prompt }]
  });

  return response.content[0].text;
}
