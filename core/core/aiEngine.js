import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function generateContent(keyword) {
  const res = await openai.chat.completions.create({
    model: "gpt-4o",
    messages: [
      {
        role: "user",
        content: `Write SEO + AEO optimized content for ${keyword}`,
      },
    ],
  });

  return res.choices[0].message.content;
}
