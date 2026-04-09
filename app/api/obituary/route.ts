import Anthropic from '@anthropic-ai/sdk';

const SYSTEM_PROMPT =
  'You are a compassionate obituary writer. Write a heartfelt, dignified obituary based on the information provided. The obituary should be 3 to 5 paragraphs, written in third person, past tense. Match the tone requested by the user.';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, age, city, state, dateOfPassing, survivors, careerHighlights, hobbies, tone } = body || {};

    if (!name || !age || !city || !state || !dateOfPassing || !survivors || !careerHighlights || !hobbies || !tone) {
      return Response.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const apiKey = process.env.ANTHROPIC_API_KEY;
    if (!apiKey) return Response.json({ error: 'Server not configured' }, { status: 500 });

    const client = new Anthropic({ apiKey });

    const userPrompt = `Write an obituary using these details:

Full name: ${name}
Age: ${age}
City and state: ${city}, ${state}
Date of passing: ${dateOfPassing}
Survivors: ${survivors}
Career and life highlights: ${careerHighlights}
Hobbies and interests: ${hobbies}
Tone: ${tone}`;

    const msg = await client.messages.create({
      model: 'claude-sonnet-4-6',
      max_tokens: 1500,
      system: SYSTEM_PROMPT,
      messages: [{ role: 'user', content: userPrompt }],
    });

    const text = msg.content
      .filter((b): b is Anthropic.TextBlock => b.type === 'text')
      .map((b) => b.text)
      .join('\n')
      .trim();

    return Response.json({ obituary: text });
  } catch (err) {
    console.error('obituary error', err);
    return Response.json({ error: 'Failed to generate obituary' }, { status: 500 });
  }
}
