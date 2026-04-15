import Anthropic from '@anthropic-ai/sdk';

const SYSTEM_PROMPT =
  'You are a compassionate eulogy writer. Write a heartfelt, dignified eulogy based on the information provided. The eulogy should be written in first person from the perspective of the person delivering it. Match the tone requested: Warm and Personal means conversational and intimate. Traditional and Formal means professional and dignified. Celebration of Life means uplifting and focused on joy. With Gentle Humor means warm with appropriate lighthearted moments that honor who the person was. Adjust length based on the requested duration: Short is 250 to 350 words, Standard is 450 to 600 words, Full is 700 to 900 words.';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, relationship, age, city, state, career, traits, memory, meaning, tone, length } = body || {};

    if (!name || !relationship) {
      return Response.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const apiKey = process.env.ANTHROPIC_API_KEY;
    if (!apiKey) return Response.json({ error: 'Server not configured' }, { status: 500 });

    const client = new Anthropic({ apiKey });

    const userPrompt = `Write a eulogy using these details:

Full name of the deceased: ${name}
My relationship to them: ${relationship}
Age at passing: ${age || 'not specified'}
City and state: ${city || ''}, ${state || ''}
Career or what they were known for: ${career || 'not specified'}
Three words that describe them: ${traits || 'not specified'}
A favorite memory or story: ${memory || 'not specified'}
What they meant to me: ${meaning || 'not specified'}
Tone: ${tone || 'Warm and Personal'}
Desired length: ${length || 'Standard 4-5 minutes'}`;

    const msg = await client.messages.create({
      model: 'claude-sonnet-4-20250514',
      max_tokens: 2000,
      system: SYSTEM_PROMPT,
      messages: [{ role: 'user', content: userPrompt }],
    });

    const text = msg.content
      .filter((b): b is Anthropic.TextBlock => b.type === 'text')
      .map((b) => b.text)
      .join('\n')
      .trim();

    return Response.json({ eulogy: text });
  } catch (err) {
    console.error('eulogy error', err);
    return Response.json({ error: 'Failed to generate eulogy' }, { status: 500 });
  }
}
