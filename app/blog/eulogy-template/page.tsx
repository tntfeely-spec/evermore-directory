import Link from 'next/link';
import { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import CopyTemplateButton from '@/components/CopyTemplateButton';

export const metadata: Metadata = {
  title: 'Free Eulogy Template: Fill in the Blank for Any Service',
  description: 'Free eulogy templates you can fill in and use today. Short, standard, and celebration of life formats with copy buttons and a bracket guide.',
  alternates: { canonical: 'https://funeralhomedirectories.com/blog/eulogy-template' },
};

const faqs = [
  { q: 'How long should a eulogy be?', a: 'Most eulogies run 3 to 5 minutes, which is 400 to 600 words. Shorter is usually better than longer.' },
  { q: 'Can I use a template for a eulogy?', a: 'Yes. A template gives you structure so you can focus on the memories and personal details that make the eulogy meaningful.' },
  { q: 'What should a eulogy include?', a: 'A eulogy should include the person\u0027s name, your relationship to them, one or two specific stories or memories, what they meant to you and others, and a brief closing.' },
  { q: 'Should I memorize a eulogy or read it?', a: 'Read it. Print it in large font, double spaced. Practice out loud 2 to 3 times so you can make occasional eye contact, but reading is expected and appropriate.' },
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map(f => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
};

const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'How to Use a Eulogy Template',
  description: 'Fill in a eulogy template and deliver a meaningful tribute.',
  step: [
    { '@type': 'HowToStep', position: 1, name: 'Choose the template that fits your situation', text: 'Pick short for under 3 minutes, standard for a typical service, celebration of life for an upbeat tone, or religious for a faith-based service.' },
    { '@type': 'HowToStep', position: 2, name: 'Copy the template', text: 'Click the Copy This Template button below the template you chose. Paste it into Word, Google Docs, or Notes on your phone.' },
    { '@type': 'HowToStep', position: 3, name: 'Fill in every bracket', text: 'Replace every word in brackets with the real information about your loved one. Do not leave any brackets in the final version.' },
    { '@type': 'HowToStep', position: 4, name: 'Add one specific memory', text: 'The template gives you structure. What makes it yours is one real story or memory that captures who they were. Add it where the template prompts you.' },
    { '@type': 'HowToStep', position: 5, name: 'Practice out loud', text: 'Read the completed eulogy out loud at least twice. Time yourself. Mark spots where you might get emotional and practice pausing through them.' },
  ],
};

const schemas = [faqSchema, howToSchema];

const shortTemplate = `[Full Name] was [one word that captures them]. I have known [him/her] for [number] years, and in that time [he/she] taught me [what they taught you].

[Share one specific memory in 2 to 3 sentences. Be specific. Use a real moment, not a general description.]

[He/She] is survived by [family members] who meant everything to [him/her]. [His/Her] legacy lives on in [what they leave behind: a value, a tradition, a way of treating people].

[Full Name], thank you for [what they gave you]. We will carry you with us.`;

const standardTemplate = `I want to thank everyone for being here today. [Full Name] would have been [moved/grateful/surprised] to see how many lives [he/she] touched.

I knew [Full Name] as [your relationship]. For [number] years, [he/she] was [what they were to you]. And if you asked anyone in this room, they would each have their own version of who [Full Name] was, because [he/she] showed up differently for everyone, but always with [a defining quality].

[Full Name] was born on [date of birth] in [birthplace] to [parents' names]. [He/She] grew up [brief childhood detail] and went on to [career or life path]. [He/She] worked as a [occupation] for [number] years, and the people [he/she] worked with will tell you [he/she] was [what coworkers would say about them].

But what I will remember most is [one specific memory in 3 to 4 sentences. A real moment. Something only someone who knew them would know].

[He/She] was the kind of person who [a habit or trait that defined them]. [He/She] never [something they never did] and always [something they always did].

[He/She] is survived by [family members], each of whom carries a piece of [him/her].

[Full Name], we are better for having known you. Rest now. We will take it from here.`;

const celebrationTemplate = `I am not going to stand up here and be sad. [Full Name] would not want that, and frankly, [he/she] would probably make fun of me for it. So instead, I want to tell you about the [Full Name] I knew.

[Full Name] was the kind of person who [a defining habit or quality]. If you were having a bad day, [he/she] would [what they would do]. If you were having a good day, [he/she] would [what they would do to make it better].

[He/She] was born on [date of birth] in [birthplace], and from the very beginning, [he/she] was [what they were like from the start]. [He/She] spent [his/her] life [how they spent their life], and [he/she] did it all with [a quality: humor, grace, stubbornness, heart].

[Share one specific story in 3 to 5 sentences. Something funny, warm, or perfectly them. This is the part people will remember.]

[He/She] loved [list 3 to 4 things they loved]. [He/She] could not stand [something they disliked, ideally something light]. And [he/she] believed that [something they believed in].

[He/She] is survived by [family members] who will spend the rest of our lives telling stories just like this one.

[Full Name], you made this world louder, warmer, and better. We will miss you every day. But we will also laugh every time we think of you, and that is exactly how you would want it.`;

const religiousTemplate = `We gather here today in the presence of God to celebrate the life of [Full Name] and to commit [him/her] into the arms of our Lord.

[Scripture reference]

[Full Name] was a person of deep faith. [He/She] believed that [what their faith meant to them], and [he/she] lived that belief every day through [how they showed their faith: service, kindness, prayer, community].

[He/She] was born on [date of birth] in [birthplace] to [parents' names]. [He/She] was a devoted [spouse/parent/grandparent] and spent [his/her] life [how they lived]. [He/She] was a faithful member of [church or faith community] for [number] years, where [he/she] [what they did in the church: sang in the choir, taught Sunday school, served on committees, volunteered].

[Share one specific memory in 3 to 4 sentences. A moment that showed their character and their faith.]

[He/She] is survived by [family members]. While we grieve [his/her] absence, we find comfort in the promise of [scripture reference or faith belief about reunion and eternal life].

[Full Name] has gone home. [He/She] fought the good fight, finished the race, and kept the faith. And we who remain carry [his/her] love, [his/her] example, and the assurance that we will see [him/her] again.

May God bless and keep [Full Name]. And may God comfort all of us who love [him/her].`;

export default function EulogyTemplatePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas) }} />
      <Navigation />
      <main className="min-h-screen bg-white">
        <div className="max-w-4xl mx-auto px-4 py-12">
          <article>
            <header className="mb-10">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">Free Eulogy Template</h1>
              <p className="text-xl text-gray-600 mb-4">Fill in the blank eulogy templates you can copy, customize, and deliver at any service.</p>
              <div className="flex items-center gap-3 text-sm text-gray-500">
                <span className="font-medium text-gray-700">By Terry Feely</span><span>|</span><span>Former Firefighter and Paramedic</span><span>|</span><span>April 2026</span>
              </div>
            </header>

            <section className="mb-10">
              <p className="text-gray-700 leading-relaxed text-lg">A eulogy template gives you structure when your mind is overwhelmed with grief. Fill in the name, your relationship, a memory or two, and the words that matter most. Most eulogies run 3 to 5 minutes, which is about 400 to 600 words. These templates cover short, standard, celebration of life, and religious formats.</p>
            </section>

            <div className="mb-10 bg-gray-50 border border-gray-200 rounded-xl p-6">
              <p className="text-base font-bold text-gray-900 mb-3">How to use these templates:</p>
              <ol className="list-decimal list-inside space-y-2 text-sm text-gray-700">
                <li>Pick the template that fits your situation below</li>
                <li>Click the <strong>Copy</strong> button under that template</li>
                <li>Paste it into Word, Google Docs, or Notes on your phone</li>
                <li>Replace every word in [brackets] with real information</li>
                <li>Add one or two specific memories that capture who they were</li>
                <li>Practice reading it out loud at least twice before the service</li>
              </ol>
            </div>

            <div className="mb-10 bg-slate-50 border border-slate-200 rounded-lg p-5">
              <p className="text-gray-700">Need help getting started? See our <Link href="/blog/eulogy-examples" className="text-slate-700 font-semibold hover:text-slate-900 underline">eulogy examples</Link> for real samples you can adapt, or try our step by step guide on <Link href="/blog/how-to-write-a-eulogy" className="text-slate-700 font-semibold hover:text-slate-900 underline">how to write a eulogy</Link>.</p>
            </div>

            {/* Short Eulogy Template */}
            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Short Eulogy Template (200 to 300 Words)</h2>
              <p className="text-gray-600 leading-relaxed mb-4">Use this template when you need something brief, or when you are opening for other speakers. It covers your relationship, one memory, and a closing tribute in under three minutes.</p>
              <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                <p className="text-gray-700 leading-relaxed mb-4">[Full Name] was [one word that captures them]. I have known [him/her] for [number] years, and in that time [he/she] taught me [what they taught you].</p>
                <p className="text-gray-700 leading-relaxed mb-4">[Share one specific memory in 2 to 3 sentences. Be specific. Use a real moment, not a general description.]</p>
                <p className="text-gray-700 leading-relaxed mb-4">[He/She] is survived by [family members] who meant everything to [him/her]. [His/Her] legacy lives on in [what they leave behind: a value, a tradition, a way of treating people].</p>
                <p className="text-gray-700 leading-relaxed">[Full Name], thank you for [what they gave you]. We will carry you with us.</p>
              </div>
              <CopyTemplateButton text={shortTemplate} />
              <p className="text-xs text-gray-500 mt-2 mb-6">Best for when you need something brief, or as an opening before others speak.</p>
            </section>

            {/* Standard Eulogy Template */}
            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Standard Eulogy Template (400 to 500 Words)</h2>
              <p className="text-gray-600 leading-relaxed mb-4">This is the most common eulogy format. It covers your relationship, the person&apos;s background, a defining quality, one specific memory, and a closing tribute. Plan for 4 to 5 minutes of speaking time.</p>
              <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                <p className="text-gray-700 leading-relaxed mb-4">I want to thank everyone for being here today. [Full Name] would have been [moved/grateful/surprised] to see how many lives [he/she] touched.</p>
                <p className="text-gray-700 leading-relaxed mb-4">I knew [Full Name] as [your relationship]. For [number] years, [he/she] was [what they were to you]. And if you asked anyone in this room, they would each have their own version of who [Full Name] was, because [he/she] showed up differently for everyone, but always with [a defining quality].</p>
                <p className="text-gray-700 leading-relaxed mb-4">[Full Name] was born on [date of birth] in [birthplace] to [parents&apos; names]. [He/She] grew up [brief childhood detail] and went on to [career or life path]. [He/She] worked as a [occupation] for [number] years, and the people [he/she] worked with will tell you [he/she] was [what coworkers would say about them].</p>
                <p className="text-gray-700 leading-relaxed mb-4">But what I will remember most is [one specific memory in 3 to 4 sentences. A real moment. Something only someone who knew them would know].</p>
                <p className="text-gray-700 leading-relaxed mb-4">[He/She] was the kind of person who [a habit or trait that defined them]. [He/She] never [something they never did] and always [something they always did].</p>
                <p className="text-gray-700 leading-relaxed mb-4">[He/She] is survived by [family members], each of whom carries a piece of [him/her].</p>
                <p className="text-gray-700 leading-relaxed">[Full Name], we are better for having known you. Rest now. We will take it from here.</p>
              </div>
              <CopyTemplateButton text={standardTemplate} />
              <p className="text-xs text-gray-500 mt-2 mb-6">Best for most funeral and memorial services. Covers everything expected.</p>
            </section>

            {/* Celebration of Life Eulogy Template */}
            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Celebration of Life Eulogy Template (400 to 500 Words)</h2>
              <p className="text-gray-600 leading-relaxed mb-4">This template opens with a story or a laugh. The tone is warmer and more personal, focused on how the person lived rather than the fact that they are gone. It works well for memorial services and celebrations of life.</p>
              <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                <p className="text-gray-700 leading-relaxed mb-4">I am not going to stand up here and be sad. [Full Name] would not want that, and frankly, [he/she] would probably make fun of me for it. So instead, I want to tell you about the [Full Name] I knew.</p>
                <p className="text-gray-700 leading-relaxed mb-4">[Full Name] was the kind of person who [a defining habit or quality]. If you were having a bad day, [he/she] would [what they would do]. If you were having a good day, [he/she] would [what they would do to make it better].</p>
                <p className="text-gray-700 leading-relaxed mb-4">[He/She] was born on [date of birth] in [birthplace], and from the very beginning, [he/she] was [what they were like from the start]. [He/She] spent [his/her] life [how they spent their life], and [he/she] did it all with [a quality: humor, grace, stubbornness, heart].</p>
                <p className="text-gray-700 leading-relaxed mb-4">[Share one specific story in 3 to 5 sentences. Something funny, warm, or perfectly them. This is the part people will remember.]</p>
                <p className="text-gray-700 leading-relaxed mb-4">[He/She] loved [list 3 to 4 things they loved]. [He/She] could not stand [something they disliked, ideally something light]. And [he/she] believed that [something they believed in].</p>
                <p className="text-gray-700 leading-relaxed mb-4">[He/She] is survived by [family members] who will spend the rest of our lives telling stories just like this one.</p>
                <p className="text-gray-700 leading-relaxed">[Full Name], you made this world louder, warmer, and better. We will miss you every day. But we will also laugh every time we think of you, and that is exactly how you would want it.</p>
              </div>
              <CopyTemplateButton text={celebrationTemplate} />
              <p className="text-xs text-gray-500 mt-2 mb-6">Best for services focused on celebrating a life rather than mourning a loss.</p>
            </section>

            {/* Religious Eulogy Template */}
            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Religious Eulogy Template (400 to 500 Words)</h2>
              <p className="text-gray-600 leading-relaxed mb-4">This template weaves faith throughout the eulogy. It includes a placeholder for scripture, references to God and heaven, and a tone of comfort grounded in religious belief. Replace the scripture placeholder with a passage that was meaningful to the person or family.</p>
              <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                <p className="text-gray-700 leading-relaxed mb-4">We gather here today in the presence of God to celebrate the life of [Full Name] and to commit [him/her] into the arms of our Lord.</p>
                <p className="text-gray-700 leading-relaxed mb-4">[Scripture reference]</p>
                <p className="text-gray-700 leading-relaxed mb-4">[Full Name] was a person of deep faith. [He/She] believed that [what their faith meant to them], and [he/she] lived that belief every day through [how they showed their faith: service, kindness, prayer, community].</p>
                <p className="text-gray-700 leading-relaxed mb-4">[He/She] was born on [date of birth] in [birthplace] to [parents&apos; names]. [He/She] was a devoted [spouse/parent/grandparent] and spent [his/her] life [how they lived]. [He/She] was a faithful member of [church or faith community] for [number] years, where [he/she] [what they did in the church: sang in the choir, taught Sunday school, served on committees, volunteered].</p>
                <p className="text-gray-700 leading-relaxed mb-4">[Share one specific memory in 3 to 4 sentences. A moment that showed their character and their faith.]</p>
                <p className="text-gray-700 leading-relaxed mb-4">[He/She] is survived by [family members]. While we grieve [his/her] absence, we find comfort in the promise of [scripture reference or faith belief about reunion and eternal life].</p>
                <p className="text-gray-700 leading-relaxed mb-4">[Full Name] has gone home. [He/She] fought the good fight, finished the race, and kept the faith. And we who remain carry [his/her] love, [his/her] example, and the assurance that we will see [him/her] again.</p>
                <p className="text-gray-700 leading-relaxed">May God bless and keep [Full Name]. And may God comfort all of us who love [him/her].</p>
              </div>
              <CopyTemplateButton text={religiousTemplate} />
              <p className="text-xs text-gray-500 mt-2 mb-6">Best for faith based services. Replace the scripture placeholder with a meaningful passage.</p>
            </section>

            {/* Bracket Reference */}
            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">What to Put in Each Bracket</h2>
              <p className="text-gray-600 leading-relaxed mb-4">Here is a quick reference for every bracketed field in the templates above.</p>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border border-gray-200 rounded-lg overflow-hidden">
                  <thead className="bg-slate-100">
                    <tr>
                      <th className="text-left px-4 py-2 font-semibold text-gray-700 w-1/3">Bracket</th>
                      <th className="text-left px-4 py-2 font-semibold text-gray-700">What to write</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-t border-gray-100"><td className="px-4 py-2 font-mono text-sm">[Full Name]</td><td className="px-4 py-2 text-gray-600">Legal first, middle, and last name.</td></tr>
                    <tr className="border-t border-gray-100 bg-slate-50/40"><td className="px-4 py-2 font-mono text-sm">[He/She/They]</td><td className="px-4 py-2 text-gray-600">Choose based on the person&apos;s pronouns.</td></tr>
                    <tr className="border-t border-gray-100"><td className="px-4 py-2 font-mono text-sm">[him/her/them]</td><td className="px-4 py-2 text-gray-600">Object pronoun matching the one above.</td></tr>
                    <tr className="border-t border-gray-100 bg-slate-50/40"><td className="px-4 py-2 font-mono text-sm">[number] years</td><td className="px-4 py-2 text-gray-600">How long you knew or were related to the person.</td></tr>
                    <tr className="border-t border-gray-100"><td className="px-4 py-2 font-mono text-sm">[family members]</td><td className="px-4 py-2 text-gray-600">Spouse first, then children, then grandchildren, then siblings.</td></tr>
                    <tr className="border-t border-gray-100 bg-slate-50/40"><td className="px-4 py-2 font-mono text-sm">[one specific memory]</td><td className="px-4 py-2 text-gray-600">A real moment, not a general description. Be specific about the setting, what happened, and why it mattered.</td></tr>
                    <tr className="border-t border-gray-100"><td className="px-4 py-2 font-mono text-sm">[what they taught you]</td><td className="px-4 py-2 text-gray-600">A lesson, a value, or a way of seeing the world that you learned from them.</td></tr>
                    <tr className="border-t border-gray-100 bg-slate-50/40"><td className="px-4 py-2 font-mono text-sm">[what they leave behind]</td><td className="px-4 py-2 text-gray-600">A value, a tradition, a way of treating people, or something tangible they built.</td></tr>
                    <tr className="border-t border-gray-100"><td className="px-4 py-2 font-mono text-sm">[scripture reference]</td><td className="px-4 py-2 text-gray-600">A Bible verse or passage meaningful to the person or family. Common choices include Psalm 23, John 14:1-3, and Romans 8:38-39.</td></tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* FAQ */}
            <section className="mb-10 bg-white rounded-xl shadow-md p-8 border border-gray-200">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
              <div className="space-y-6">
                {faqs.map(f => (
                  <div key={f.q}>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{f.q}</h3>
                    <p className="text-gray-600 leading-relaxed">{f.a}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Related Reading */}
            <section className="mb-10 bg-slate-50 rounded-lg p-6">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Related Reading</h2>
              <ul className="space-y-2">
                <li><Link href="/blog/eulogy-examples" className="text-slate-600 hover:text-slate-800 font-medium">Eulogy Examples</Link></li>
                <li><Link href="/blog/how-to-write-a-eulogy" className="text-slate-600 hover:text-slate-800 font-medium">How to Write a Eulogy</Link></li>
                <li><Link href="/blog/sample-eulogy-for-mother-from-daughter" className="text-slate-600 hover:text-slate-800 font-medium">Sample Eulogy for Mother from Daughter</Link></li>
              </ul>
            </section>

            {/* CTA */}
            <section className="mt-16 bg-slate-50 border-t border-slate-100 py-10 -mx-4 px-4 text-center">
              <p className="text-lg font-semibold text-slate-700 mb-2">Find funeral homes in your area</p>
              <p className="text-slate-600 text-sm mb-5">Search 4,800+ funeral homes across all 50 states. Compare prices, services, and locations. Free for families.</p>
              <Link href="/states" className="inline-block bg-slate-700 text-white px-6 py-3 rounded hover:bg-slate-800 transition-colors font-medium">Browse Funeral Homes Near You</Link>
            </section>
          </article>
        </div>
      </main>
    </>
  );
}
