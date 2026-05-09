import Anthropic from "@anthropic-ai/sdk";

const client = new Anthropic({
  apiKey: process.env.CLAUDE_API_KEY
});

export async function runDictionary(term) {
  const prompt = `
Explain the following legal term in simple, everyday English:

Term: ${term}
`;

  const response = await client.messages.create({
    model: "claude-3-5-sonnet-20240620",
    max_tokens: 300,
    messages: [{ role: "user", content: prompt }]
  });

  return response.content[0].text;
}
