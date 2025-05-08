import { OpenAI } from 'openai';

export async function POST(req) {

  const { message } = await req.json();

  if (!message) {
    return new Response(JSON.stringify({ error: 'No message provided' }), { status: 400 });
  }

  const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
  });
  console.log(process.env.OPENAI_API_KEY)

  const response = await openai.chat.completions.create({
    model: 'gpt-3.5-turbo',
    messages: [{ role: 'user', content: message }],
  });

  const reply = response.choices?.[0]?.message?.content || 'No reply generated.';
  return new Response(JSON.stringify({ reply }), {
    headers: { 'Content-Type': 'application/json' },
  });

}
