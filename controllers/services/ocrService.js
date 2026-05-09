import Anthropic from "@anthropic-ai/sdk";

const client = new Anthropic({
  apiKey: process.env.CLAUDE_API_KEY
});

export async function runOCR(buffer) {
  const base64 = buffer.toString("base64");

  const response = await client.messages.create({
    model: "claude-3-5-sonnet-20240620",
    max_tokens: 800,
    messages: [
      {
        role: "user",
        content: [
          { type: "input_image", source: { type: "base64", media_type: "image/png", data: base64 } },
          { type: "text", text: "Extract all readable text from this image." }
        ]
      }
    ]
  });

  return response.content[0].text;
}
