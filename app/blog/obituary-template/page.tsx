import Link from 'next/link';
import { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import CopyTemplateButton from '@/components/CopyTemplateButton';

export const metadata: Metadata = {
  title: 'Free Obituary Template: Fill in the Blank (Word, PDF, and Plain Text)',
  description: 'Free obituary templates you can fill in and use today. Short, standard, full-length, veteran, and celebration of life formats. Copy, edit, and publish in minutes.',
  alternates: { canonical: 'https://funeralhomedirectories.com/blog/obituary-template' },
};

const faqs = [
  { q: 'What is the standard obituary format?', a: 'A standard obituary opens with the death announcement, followed by biographical details, a personal tribute, a list of survivors, and service information. Most run 150 to 250 words for newspaper publication.' },
  { q: 'How long should an obituary be?', a: 'Newspaper obituaries average 150 to 250 words due to per word pricing. Online obituaries have no word limit. A short death notice can be as brief as 50 words.' },
  { q: 'Can I use a Microsoft Word obituary template?', a: 'Yes. Copy any of the templates above into Word, fill in the bracketed fields, and format as needed. Most funeral homes and newspapers accept plain text or Word documents.' },
  { q: 'What should I not include in an obituary?', a: 'Avoid the home address of surviving family members as published obituaries can alert burglars. Also avoid contentious family details and cause of death if the family prefers privacy.' },
  { q: 'How do I list survivors in an obituary?', a: 'List survivors in this order: spouse, children (with spouses), grandchildren, great grandchildren, parents if living, siblings. Use is survived by for living relatives and was preceded in death by for those who have passed.' },
  { q: 'Is a free obituary template good enough?', a: 'Yes. A well filled template produces a complete, dignified obituary. The personal details you add matter far more than the format you start with.' },
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
  name: 'How to Use a Free Obituary Template',
  description: 'How to fill in a free obituary template and create a complete obituary in minutes.',
  step: [
    { '@type': 'HowToStep', position: 1, name: 'Choose the right template length', text: 'Choose short (50 to 75 words) for a death notice, standard (150 to 200 words) for newspaper publication, or full length (300+ words) for an online tribute with no word limit.' },
    { '@type': 'HowToStep', position: 2, name: 'Gather the basic facts', text: 'Before filling in the template collect full legal name, dates of birth and death, birthplace, survivors names in order, and service details including address and time.' },
    { '@type': 'HowToStep', position: 3, name: 'Fill in every bracketed field', text: 'Replace every bracketed placeholder with the actual information. Do not leave any brackets in the final version.' },
    { '@type': 'HowToStep', position: 4, name: 'Add one personal touch', text: 'Add one sentence that captures who the person actually was. A hobby, a phrase they used, or something they were known for. This is what people will remember.' },
    { '@type': 'HowToStep', position: 5, name: 'Have a family member review the survivor list', text: 'The survivor list is where mistakes cause lasting pain. Have at least one other family member confirm every name and relationship before submitting.' },
    { '@type': 'HowToStep', position: 6, name: 'Submit to newspaper and online', text: 'Call the local newspaper obituary desk or submit via their website. Also post on Legacy.com or the funeral home website for free online access.' },
  ],
};

const speakableSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Free Obituary Template',
  speakable: { '@type': 'SpeakableSpecification', cssSelector: ['article > section:first-of-type'] },
};

const schemas = [faqSchema, howToSchema, speakableSchema];

export default function ObituaryTemplatePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas) }} />
      <Navigation />
      <main className="min-h-screen bg-white">
        <div className="max-w-4xl mx-auto px-4 py-12">
          <article>
            <header className="mb-10">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">Free Obituary Template</h1>
              <p className="text-xl text-gray-600 mb-4">Fill in the blank obituary templates you can copy, customize, and publish in minutes.</p>
              <div className="flex items-center gap-3 text-sm text-gray-500">
                <span className="font-medium text-gray-700">By Terry Feely</span><span>|</span><span>Former Firefighter and Paramedic</span><span>|</span><span>April 2026</span>
              </div>
            </header>

            <section className="mb-10">
              <p className="text-gray-700 leading-relaxed text-lg">A free obituary template gives grieving families a starting point so they are not facing a blank page. Fill in the name, dates, survivors, and a few personal details, then personalize it with your own words. Most obituaries are 150 to 250 words for newspaper publication. Online obituaries have no word limit.</p>
            </section>
            <div className="mb-10 bg-gray-50 border border-gray-200 rounded-xl p-6">
              <p className="text-base font-bold text-gray-900 mb-3">How to use these templates:</p>
              <ol className="list-decimal list-inside space-y-2 text-sm text-gray-700">
                <li>Pick the template that fits your situation (short, standard, full length, or veteran)</li>
                <li>Click the <strong>Copy This Template</strong> button below the template</li>
                <li>Paste it into a Word document, Google Doc, or Notes app</li>
                <li>Replace every word in [brackets] with the real information</li>
                <li>Add one or two sentences about who the person actually was</li>
                <li>Have a family member check the survivor list before you submit</li>
              </ol>
            </div>

            <div className="mb-10 bg-slate-50 border border-slate-200 rounded-lg p-5">
              <p className="text-gray-700">Prefer to skip the blank page entirely? Our <Link href="/obituary-maker" className="text-slate-700 font-semibold hover:text-slate-900 underline">Free AI Obituary Maker</Link> writes a complete personalized obituary in minutes based on details you provide. No templates to fill in.</p>
            </div>

            {/* Short Obituary Template */}
            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Short Obituary Template (50 to 75 Words)</h2>
              <p className="text-gray-600 leading-relaxed mb-4">Use this template for a brief death notice or newspaper announcement where space is limited. It covers the essential facts in as few words as possible while still giving readers a sense of who the person was.</p>
              <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                <p className="text-gray-700 leading-relaxed">[Full Name], [age], of [City, State], passed away on [date of death]. [He/She] was born on [date of birth] in [birthplace] and spent [his/her] life [one sentence about who they were]. [He/She] is survived by [list survivors]. A [service type] will be held on [date] at [location].</p>
              </div>
              <CopyTemplateButton text="[Full Name], [age], of [City, State], passed away on [date of death]. [He/She] was born on [date of birth] in [birthplace] and spent [his/her] life [one sentence about who they were]. [He/She] is survived by [list survivors]. A [service type] will be held on [date] at [location]." />
              <p className="text-xs text-gray-500 mt-2 mb-6">Best for: a brief death notice in a local newspaper or a quick announcement when time is short.</p>
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Completed Example</h3>
              <div className="bg-slate-50 border border-slate-200 rounded-lg p-6">
                <p className="text-gray-700 leading-relaxed">Margaret Ann Wilson, 82, of Nashville, Tennessee, passed away on April 8, 2026. She was born on September 14, 1943, in Knoxville, Tennessee, and spent her life as a devoted nurse and grandmother. She is survived by her daughter, Susan Wilson Clark, and four grandchildren. A graveside service will be held on April 12, 2026, at Woodlawn Memorial Park.</p>
              </div>
            </section>

            {/* Standard Obituary Template */}
            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Standard Obituary Template (150 to 200 Words)</h2>
              <p className="text-gray-600 leading-relaxed mb-4">This is the most widely used format for newspaper obituaries. It provides enough space to cover the person&apos;s life, family, and service details without exceeding typical newspaper word limits.</p>
              <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-6">
                <p className="text-gray-700 leading-relaxed mb-4">[Full Name], [age], of [City, State], passed away [peacefully/suddenly/after a long illness] on [date of death] at [location of death].</p>
                <p className="text-gray-700 leading-relaxed mb-4">Born on [date of birth] in [birthplace] to [parents&apos; names], [First Name] graduated from [high school/college] and went on to [career or life&apos;s work]. [He/She] worked as a [occupation] for [number] years at [employer or in what field].</p>
                <p className="text-gray-700 leading-relaxed mb-4">[First Name] was known for [personal description: a quality, a hobby, or what they loved most]. [He/She] enjoyed [hobbies or interests] and was a devoted [role: parent, grandparent, volunteer, church member].</p>
                <p className="text-gray-700 leading-relaxed mb-4">[He/She] is survived by [his/her] [spouse, Full Name]; children, [Name] ([Spouse]) of [City], [Name] ([Spouse]) of [City]; [number] grandchildren; [siblings, Name of City]; and [parents if living, Name of City]. [He/She] was preceded in death by [names and relationships].</p>
                <p className="text-gray-700 leading-relaxed mb-4">A [funeral service/memorial service/celebration of life] will be held on [date] at [time] at [location with address]. Visitation will take place on [date] from [time] to [time] at [location].</p>
                <p className="text-gray-700 leading-relaxed">In lieu of flowers, the family requests donations to [charity name and address or website].</p>
              </div>
              <CopyTemplateButton text={"[Full Name], [age], of [City, State], passed away [peacefully/suddenly/after a long illness] on [date of death] at [location of death].\n\nBorn on [date of birth] in [birthplace] to [parents' names], [First Name] graduated from [high school/college] and went on to [career or life's work]. [He/She] worked as a [occupation] for [number] years at [employer or in what field].\n\n[First Name] was known for [personal description]. [He/She] enjoyed [hobbies or interests] and was a devoted [role].\n\n[He/She] is survived by [his/her] [spouse, Full Name]; children, [Name] ([Spouse]) of [City], [Name] ([Spouse]) of [City]; [number] grandchildren; [siblings]; and [parents if living]. [He/She] was preceded in death by [names and relationships].\n\nA [service type] will be held on [date] at [time] at [location with address]. Visitation will take place on [date] from [time] to [time] at [location].\n\nIn lieu of flowers, the family requests donations to [charity name and address or website]."} />
              <p className="text-xs text-gray-500 mt-2 mb-6">Best for: most newspaper obituaries. Covers all the essentials in 150 to 200 words.</p>
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Completed Example</h3>
              <div className="bg-slate-50 border border-slate-200 rounded-lg p-6">
                <p className="text-gray-700 leading-relaxed mb-4">Robert James Mitchell, 74, of Memphis, Tennessee, passed away peacefully on April 5, 2026, at Baptist Memorial Hospital surrounded by his family.</p>
                <p className="text-gray-700 leading-relaxed mb-4">Born on March 22, 1952, in Jackson, Tennessee, to Harold and Betty Mitchell, Robert graduated from Jackson Central High School and began his career with the United States Postal Service. He worked as a mail carrier for 34 years, retiring in 2014. His customers knew him by name and he knew every dog on his route.</p>
                <p className="text-gray-700 leading-relaxed mb-4">Robert was known for his patience and his quiet generosity. He spent his weekends fishing at Pickwick Lake and building furniture in his workshop. He made a bookshelf for every grandchild and a cutting board for every neighbor who moved onto his street.</p>
                <p className="text-gray-700 leading-relaxed mb-4">He is survived by his wife of 48 years, Patricia Ann Mitchell; his son, David Mitchell (Jennifer) of Memphis; his daughter, Sarah Mitchell Adams (Brian) of Collierville; six grandchildren, Tyler, Hannah, Emma, Jake, Lily, and Nolan; and his sister, Carol Mitchell Davis of Jackson. He was preceded in death by his parents and his brother, William Mitchell.</p>
                <p className="text-gray-700 leading-relaxed mb-4">A funeral service will be held on April 10, 2026, at 2:00 PM at Riverside Baptist Church, 4500 Poplar Avenue, Memphis. Visitation will take place on April 9, 2026, from 5:00 PM to 8:00 PM at Memphis Funeral Home.</p>
                <p className="text-gray-700 leading-relaxed">In lieu of flowers, the family requests donations to the Mid-South Food Bank.</p>
              </div>
            </section>

            {/* Full Length Obituary Template */}
            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Full Length Obituary Template (300+ Words)</h2>
              <p className="text-gray-600 leading-relaxed mb-4">Use this format for an online obituary or tribute page where word count is not a factor. A full length obituary gives you the space to tell the person&apos;s complete story, from childhood through the legacy they leave behind.</p>
              <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-6">
                <p className="text-gray-700 leading-relaxed mb-4">Anyone who knew [Full Name] will tell you that [he/she] was [a defining quality or characteristic]. [First Name] [one memory or image that captures who they were].</p>
                <p className="text-gray-700 leading-relaxed mb-4">[Full Name], [age], of [City, State], passed away on [date of death] at [location]. [He/She] was born on [date of birth] in [birthplace] to [parents&apos; names].</p>
                <p className="text-gray-700 leading-relaxed mb-4">[First Name] grew up in [city/town] where [he/she] [childhood detail]. [He/She] attended [schools] and [graduated/earned a degree in]. [He/She] met [spouse&apos;s name] in [year or context] and they married on [wedding date] in [location].</p>
                <p className="text-gray-700 leading-relaxed mb-4">[First Name] built [his/her] career in [field/industry], working as a [job title] at [employer] for [number] years. [He/She] was known professionally for [professional accomplishment or reputation]. [One anecdote or detail about their work that shows character].</p>
                <p className="text-gray-700 leading-relaxed mb-4">Outside of work, [First Name] was [personal passions and hobbies]. [He/She] was an active member of [church, club, organization] and volunteered with [organization]. [He/She] loved [specific interests]. [One or two sentences with a personal detail or story that captures their personality].</p>
                <p className="text-gray-700 leading-relaxed mb-4">As a [parent/grandparent/friend], [First Name] was [description]. [He/She] [specific thing they did for family]. [Personal tribute from a family perspective].</p>
                <p className="text-gray-700 leading-relaxed mb-4">[He/She] is survived by [his/her] [spouse, Full Name] of [City]; children, [Name] ([Spouse]) of [City], [Name] ([Spouse]) of [City]; [number] grandchildren, [list names]; [number] great grandchildren; [siblings, Name of City]; and numerous nieces, nephews, and dear friends. [He/She] was preceded in death by [names and relationships].</p>
                <p className="text-gray-700 leading-relaxed mb-4">A [service type] will be held on [date] at [time] at [location, full address]. [Burial/interment] will follow at [cemetery name and address]. The family will receive friends on [date] from [time] to [time] at [location].</p>
                <p className="text-gray-700 leading-relaxed">In lieu of flowers, memorials may be made to [charity name, address, and/or website]. The family wishes to thank [hospice, hospital staff, caregivers] for their compassionate care.</p>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Completed Example</h3>
              <div className="bg-slate-50 border border-slate-200 rounded-lg p-6">
                <p className="text-gray-700 leading-relaxed mb-4">Anyone who knew Eleanor Rose Hartfield will tell you that she was the kind of teacher who changed lives. Eleanor had a way of seeing potential in every student who walked through her classroom door, especially the ones who had stopped believing in themselves.</p>
                <p className="text-gray-700 leading-relaxed mb-4">Eleanor Rose Hartfield, 91, of Chattanooga, Tennessee, passed away on April 3, 2026, at her home surrounded by family. She was born on November 8, 1934, in Dalton, Georgia, to William and Frances Rose.</p>
                <p className="text-gray-700 leading-relaxed mb-4">Eleanor grew up in Dalton where she spent her summers reading on the porch of her grandparents&apos; farmhouse. She attended the University of Tennessee at Chattanooga and earned her degree in English Education in 1956. She met her husband, Richard Hartfield, at a church social that same year, and they married on June 15, 1957, at First Presbyterian Church in Chattanooga.</p>
                <p className="text-gray-700 leading-relaxed mb-4">Eleanor taught English at Brainerd High School for 38 years, retiring in 1994. Generations of students remember her red pen, her refusal to accept sloppy grammar, and the way she read Shakespeare aloud with the passion of a stage actress. Former students still quote her favorite instruction: &quot;Say what you mean and mean what you say.&quot;</p>
                <p className="text-gray-700 leading-relaxed mb-4">Outside of school, Eleanor was known for her rose garden, which she tended daily and which won the Chattanooga Garden Club&apos;s annual prize four times. She sang in the choir at First Presbyterian Church for over 50 years and never missed a Sunday unless she was in the hospital. She loved crossword puzzles, sweet tea on the porch, and spoiling her grandchildren with homemade peach cobbler every summer.</p>
                <p className="text-gray-700 leading-relaxed mb-4">As a mother and grandmother, Eleanor was steady, warm, and always available. She attended every recital, every ballgame, and every graduation. She wrote handwritten letters to each grandchild on their birthdays, a tradition she kept until her final year.</p>
                <p className="text-gray-700 leading-relaxed mb-4">She is survived by her children, Katherine Hartfield Bryant (James) of Nashville, William Richard Hartfield (Ann) of Chattanooga, and Margaret Hartfield Owens of Atlanta; eight grandchildren, Elizabeth, Thomas, Sarah, Andrew, Claire, David, Emily, and Grace; four great grandchildren; and her sister, Virginia Rose Patterson of Dalton. She was preceded in death by her husband, Richard, in 2018, and her brother, James Rose.</p>
                <p className="text-gray-700 leading-relaxed mb-4">A memorial service will be held on April 8, 2026, at 11:00 AM at First Presbyterian Church, 554 McCallie Avenue, Chattanooga. Burial will follow at Forest Hills Cemetery. The family will receive friends on April 7, 2026, from 4:00 PM to 7:00 PM at the church.</p>
                <p className="text-gray-700 leading-relaxed">In lieu of flowers, memorials may be made to the Brainerd High School Scholarship Fund or the Chattanooga Public Library. The family wishes to thank Kindred Hospice for their gentle and compassionate care.</p>
              </div>
            </section>

            {/* Celebration of Life Template */}
            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Celebration of Life Obituary Template</h2>
              <p className="text-gray-600 leading-relaxed mb-4">A celebration of life obituary uses a warmer, more personal tone. It leads with personality rather than facts and focuses on how the person lived rather than how they died. This style works well for online obituaries and memorial programs.</p>
              <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-6">
                <p className="text-gray-700 leading-relaxed mb-4">If you ever [characteristic or experience that defined them], then you knew [Full Name]. [First Name] was [the kind of person who...].</p>
                <p className="text-gray-700 leading-relaxed mb-4">[Full Name], [age], of [City, State], passed away on [date of death]. [He/She] was born on [date of birth] in [birthplace] and lived a life full of [what defined their life: love, laughter, adventure, service, faith].</p>
                <p className="text-gray-700 leading-relaxed mb-4">[First Name] spent [his/her] career as a [occupation], but what [he/she] really was, was [a description that goes beyond the job title]. [He/She] was the person who [specific thing they did that showed who they were]. [He/She] never met a [stranger/challenge/adventure] [he/she] did not [embrace/welcome/take on].</p>
                <p className="text-gray-700 leading-relaxed mb-4">[He/She] loved [list of things they loved: people, hobbies, places, foods, traditions]. [One or two sentences capturing a specific memory or habit that everyone who knew them would recognize].</p>
                <p className="text-gray-700 leading-relaxed mb-4">[First Name] is survived by [list of survivors in order]. [He/She] was preceded in death by [names and relationships].</p>
                <p className="text-gray-700 leading-relaxed mb-4">A celebration of life will be held on [date] at [time] at [location]. [Optional personal touch about the service: what to wear, what to bring, the tone the family wants].</p>
                <p className="text-gray-700 leading-relaxed">In lieu of flowers, [First Name] would have wanted you to [something that reflects who they were: hug someone, go fishing, donate to a cause they cared about].</p>
              </div>
              <CopyTemplateButton text={"If you ever [characteristic], then you knew [Full Name]. [First Name] was [the kind of person who...].\n\n[Full Name], [age], of [City, State], passed away on [date of death]. [He/She] was born on [date of birth] in [birthplace] and lived a life full of [what defined their life].\n\n[First Name] spent [his/her] career as a [occupation], but what [he/she] really was, was [a description beyond the job title]. [He/She] never met a [stranger/challenge] [he/she] did not [embrace/welcome].\n\n[He/She] loved [list of things they loved]. [One or two sentences capturing a specific memory].\n\n[First Name] is survived by [list of survivors]. [He/She] was preceded in death by [names].\n\nA celebration of life will be held on [date] at [time] at [location].\n\nIn lieu of flowers, [First Name] would have wanted you to [something that reflects who they were]."} />
              <p className="text-xs text-gray-500 mt-2 mb-6">Best for: when you want to focus on how they lived rather than when they died. Works well for memorial services and online tributes.</p>
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Completed Example</h3>
              <div className="bg-slate-50 border border-slate-200 rounded-lg p-6">
                <p className="text-gray-700 leading-relaxed mb-4">If you ever heard a booming laugh from across a crowded room, followed by someone yelling &quot;That reminds me of a story,&quot; then you knew James &quot;Jimmy&quot; Cooper. Jimmy was the kind of person who made every room louder, warmer, and better just by walking in.</p>
                <p className="text-gray-700 leading-relaxed mb-4">James &quot;Jimmy&quot; Cooper, 58, of Clarksville, Tennessee, passed away on April 4, 2026. He was born on July 19, 1967, in Hopkinsville, Kentucky, and lived a life full of laughter, service, and people he loved.</p>
                <p className="text-gray-700 leading-relaxed mb-4">Jimmy spent 30 years as a firefighter with the Clarksville Fire Department, retiring as a Captain in 2022. But what he really was, was a protector. He was the person who showed up first and left last, whether it was a house fire, a neighbor&apos;s broken fence, or a friend who just needed someone to sit with. He never met a stranger he did not welcome or a problem he did not try to solve, usually with duct tape and a bad joke.</p>
                <p className="text-gray-700 leading-relaxed mb-4">He loved softball, smoked ribs, fishing on the Cumberland River, and coaching his daughters&apos; travel ball teams for 14 years straight. He was famous for his pregame pep talks, none of which made any tactical sense but all of which made the girls feel like they could win the World Series.</p>
                <p className="text-gray-700 leading-relaxed mb-4">Jimmy is survived by his wife, Laura Cooper; his daughters, Madison Cooper and Brianna Cooper; his mother, Dorothy Cooper of Hopkinsville; his brother, Mark Cooper (Lisa) of Nashville; and more friends than anyone could count. He was preceded in death by his father, Harold Cooper.</p>
                <p className="text-gray-700 leading-relaxed mb-4">A celebration of life will be held on April 11, 2026, at 3:00 PM at Clarksville Fire Station No. 1, 802 Main Street. Wear your favorite ball cap. Bring a story. There will be ribs.</p>
                <p className="text-gray-700 leading-relaxed">In lieu of flowers, Jimmy would have wanted you to take someone fishing, coach a kid&apos;s team, or donate to the Tennessee Professional Firefighters Association.</p>
              </div>
            </section>

            {/* Veteran Obituary Template */}
            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Veteran Obituary Template</h2>
              <p className="text-gray-600 leading-relaxed mb-4">A veteran obituary includes military branch, rank, years of service, deployments, awards, and VA burial information. Military service is typically placed immediately after the biographical introduction to honor the veteran&apos;s commitment.</p>
              <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-6">
                <p className="text-gray-700 leading-relaxed mb-4">[Rank] [Full Name], [branch of service] ([Ret./Honorably Discharged]), [age], of [City, State], passed away on [date of death] at [location].</p>
                <p className="text-gray-700 leading-relaxed mb-4">Born on [date of birth] in [birthplace] to [parents&apos; names], [First Name] enlisted in the [branch] in [year] at the age of [age]. [He/She] served for [number] years, achieving the rank of [final rank]. [His/Her] service included deployments to [locations/conflicts]. [He/She] received [medals, awards, commendations including specific names]. [He/She] was honorably discharged in [year].</p>
                <p className="text-gray-700 leading-relaxed mb-4">After [his/her] military service, [First Name] [career or life after service]. [He/She] was a member of [VFW, American Legion, or other veterans&apos; organization]. [He/She] remained proud of [his/her] service and [specific way they stayed connected to the military community].</p>
                <p className="text-gray-700 leading-relaxed mb-4">[First Name] was known for [personal qualities, hobbies, and what they loved]. [Personal details about family life, community involvement, or interests].</p>
                <p className="text-gray-700 leading-relaxed mb-4">[He/She] is survived by [list survivors]. [He/She] was preceded in death by [names and relationships].</p>
                <p className="text-gray-700 leading-relaxed mb-4">A [funeral service with full military honors/memorial service] will be held on [date] at [time] at [location]. [Burial/interment] will follow at [VA national cemetery or other cemetery] with military honors including [flag folding, rifle salute, taps].</p>
                <p className="text-gray-700 leading-relaxed">In lieu of flowers, donations may be made to [veterans&apos; charity or organization].</p>
              </div>
              <CopyTemplateButton text={"[Rank] [Full Name], [branch of service] ([Ret./Honorably Discharged]), [age], of [City, State], passed away on [date of death] at [location].\n\nBorn on [date of birth] in [birthplace] to [parents' names], [First Name] enlisted in the [branch] in [year]. [He/She] served for [number] years, achieving the rank of [final rank]. [His/Her] service included deployments to [locations/conflicts]. [He/She] received [medals and awards]. [He/She] was honorably discharged in [year].\n\nAfter [his/her] military service, [First Name] [career or life after service]. [He/She] was a member of [VFW, American Legion].\n\n[First Name] was known for [personal qualities]. [Personal details about family life].\n\n[He/She] is survived by [list survivors]. [He/She] was preceded in death by [names].\n\nA [funeral service with full military honors] will be held on [date] at [time] at [location]. [Burial] will follow at [cemetery] with military honors.\n\nIn lieu of flowers, donations may be made to [veterans' charity]."} />
              <p className="text-xs text-gray-500 mt-2 mb-6">Best for: honoring military service. Includes branch, rank, and service years alongside personal details.</p>
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Completed Example</h3>
              <div className="bg-slate-50 border border-slate-200 rounded-lg p-6">
                <p className="text-gray-700 leading-relaxed mb-4">Sergeant First Class Thomas Edward Brooks, United States Army (Ret.), 88, of Nashville, Tennessee, passed away on April 2, 2026, at the Tennessee Valley VA Medical Center.</p>
                <p className="text-gray-700 leading-relaxed mb-4">Born on February 14, 1938, in Rural Retreat, Virginia, to Edward and Mary Brooks, Thomas enlisted in the United States Army in 1956 at the age of 18. He served for 24 years, achieving the rank of Sergeant First Class. His service included two tours in Korea and one tour in Vietnam with the 101st Airborne Division. He received the Purple Heart, the Bronze Star Medal, the Army Commendation Medal, and the Combat Infantryman Badge. He was honorably discharged in 1980.</p>
                <p className="text-gray-700 leading-relaxed mb-4">After his military service, Thomas worked as a maintenance supervisor at Vanderbilt University for 18 years. He was a proud lifetime member of VFW Post 1970 in Nashville and served as Post Commander from 1992 to 1995. He attended every Veterans Day ceremony at the War Memorial Building and spent years mentoring younger veterans transitioning to civilian life.</p>
                <p className="text-gray-700 leading-relaxed mb-4">Thomas was known for his discipline, his dry humor, and his devotion to his family. He tended a vegetable garden every summer, watched every Tennessee Titans game with his grandsons, and polished his dress shoes every Sunday morning before church at Calvary Baptist, a habit he picked up in basic training and never gave up.</p>
                <p className="text-gray-700 leading-relaxed mb-4">He is survived by his wife of 62 years, Helen Brooks; his children, Thomas Brooks Jr. (Catherine) of Murfreesboro, Linda Brooks Haynes (Robert) of Nashville, and Michael Brooks of Knoxville; nine grandchildren; seven great grandchildren; and his sister, Betty Brooks O&apos;Brien of Rural Retreat, Virginia. He was preceded in death by his parents, his brother James Brooks, and his grandson, Corporal Daniel Haynes, USMC, who was killed in action in Afghanistan in 2011.</p>
                <p className="text-gray-700 leading-relaxed mb-4">A funeral service with full military honors will be held on April 7, 2026, at 10:00 AM at Calvary Baptist Church, 3200 Gallatin Pike, Nashville. Burial will follow at Nashville National Cemetery with military honors including a rifle salute, the playing of Taps, and the presentation of the American flag.</p>
                <p className="text-gray-700 leading-relaxed">In lieu of flowers, donations may be made to the Wounded Warrior Project or the VFW Post 1970 Scholarship Fund.</p>
              </div>
            </section>

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
                    <tr className="border-t border-gray-100"><td className="px-4 py-2 font-mono text-sm">[Full Name]</td><td className="px-4 py-2 text-gray-600">Legal first, middle, last name. Include maiden name if applicable.</td></tr>
                    <tr className="border-t border-gray-100 bg-slate-50/40"><td className="px-4 py-2 font-mono text-sm">[age]</td><td className="px-4 py-2 text-gray-600">Age at time of death.</td></tr>
                    <tr className="border-t border-gray-100"><td className="px-4 py-2 font-mono text-sm">[City, State]</td><td className="px-4 py-2 text-gray-600">Where they lived, not necessarily where they died.</td></tr>
                    <tr className="border-t border-gray-100 bg-slate-50/40"><td className="px-4 py-2 font-mono text-sm">[date]</td><td className="px-4 py-2 text-gray-600">Month, day, and year written out (April 10, 2026).</td></tr>
                    <tr className="border-t border-gray-100"><td className="px-4 py-2 font-mono text-sm">[birth date]</td><td className="px-4 py-2 text-gray-600">Month, day, and year of birth.</td></tr>
                    <tr className="border-t border-gray-100 bg-slate-50/40"><td className="px-4 py-2 font-mono text-sm">[birthplace]</td><td className="px-4 py-2 text-gray-600">City and state where they were born.</td></tr>
                    <tr className="border-t border-gray-100"><td className="px-4 py-2 font-mono text-sm">[He/She]</td><td className="px-4 py-2 text-gray-600">Choose based on their pronouns.</td></tr>
                    <tr className="border-t border-gray-100 bg-slate-50/40"><td className="px-4 py-2 font-mono text-sm">[family members]</td><td className="px-4 py-2 text-gray-600">Spouse first, then children, then grandchildren, then siblings.</td></tr>
                    <tr className="border-t border-gray-100"><td className="px-4 py-2 font-mono text-sm">[service type]</td><td className="px-4 py-2 text-gray-600">Funeral service, memorial service, celebration of life, or graveside service.</td></tr>
                    <tr className="border-t border-gray-100 bg-slate-50/40"><td className="px-4 py-2 font-mono text-sm">[location]</td><td className="px-4 py-2 text-gray-600">Full address including street, city, and state.</td></tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Obituary Format Guide */}
            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Obituary Format: What Goes Where and Why</h2>
              <p className="text-gray-600 leading-relaxed mb-4">Every obituary follows the same basic structure regardless of length. Understanding this structure makes it easier to fill in any template. Here is the standard order with typical word counts for each section.</p>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-1">1. Death Announcement (15 to 25 words)</h3>
                  <p className="text-gray-600 leading-relaxed">Full name, age, city and state of residence, date of death, and optionally the place or circumstances. This is the first sentence of every obituary.</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-1">2. Biographical Information (30 to 80 words)</h3>
                  <p className="text-gray-600 leading-relaxed">Date and place of birth, parents&apos; names, education, marriage, and career. This section establishes the factual timeline of the person&apos;s life.</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-1">3. Personal Tribute (30 to 100 words)</h3>
                  <p className="text-gray-600 leading-relaxed">Hobbies, interests, personality traits, community involvement, and what the person was known for. This is where the obituary becomes personal. One specific detail is worth more than ten generic adjectives.</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-1">4. Survivors and Preceded in Death (30 to 60 words)</h3>
                  <p className="text-gray-600 leading-relaxed">List surviving family members in standard order: spouse, children with spouses, grandchildren, great grandchildren, parents if living, then siblings. Follow with anyone who preceded them in death.</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-1">5. Service Information (20 to 40 words)</h3>
                  <p className="text-gray-600 leading-relaxed">Type of service, date, time, location with full address, visitation details, and burial or interment information. Include the funeral home name if applicable.</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-1">6. Memorial Donations (10 to 20 words)</h3>
                  <p className="text-gray-600 leading-relaxed">The &quot;in lieu of flowers&quot; line with the charity name and how to donate. Optional but common.</p>
                </div>
              </div>
            </section>

            {/* How to Use These Templates */}
            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">How to Use These Templates</h2>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                <li>Copy the template that matches the length you need</li>
                <li>Paste it into a Word document, Google Doc, or plain text editor</li>
                <li>Replace every bracketed field with the actual information</li>
                <li>Read it out loud once to catch awkward phrasing or missing details</li>
                <li>Add at least one personal detail that only someone who knew this person would include</li>
                <li>Have another family member review the survivor list before submitting</li>
                <li>Remove all remaining brackets before sending to the newspaper or funeral home</li>
                <li>Save a copy for your own records before publication</li>
              </ul>
            </section>

            {/* Where to Submit */}
            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Where to Submit Your Obituary</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-1">Local Newspaper ($200 to $1,500)</h3>
                  <p className="text-gray-600 leading-relaxed">Most newspapers charge by the word or by the line. Call the obituary desk directly or submit through the newspaper&apos;s website. Costs vary widely depending on the publication and the length of the obituary. A short death notice may cost $200 while a full length obituary with a photo can exceed $1,000.</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-1">Legacy.com (Free)</h3>
                  <p className="text-gray-600 leading-relaxed">Legacy.com hosts obituaries from thousands of newspapers and also allows families to post free guest book entries. Many funeral homes automatically submit obituaries to Legacy.com on behalf of the family.</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-1">Funeral Home Website (Free)</h3>
                  <p className="text-gray-600 leading-relaxed">Most funeral homes will post the obituary on their website at no additional charge. This is often the first place people look when searching for service details. Ask the funeral director about this when making arrangements.</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-1">Social Media (Free)</h3>
                  <p className="text-gray-600 leading-relaxed">Sharing the obituary on Facebook or other social media platforms is free and reaches a wide audience quickly. Many families create a post with the obituary text and service details so friends and extended family can share it.</p>
                </div>
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

            <div className="mb-6 bg-gray-50 border border-gray-200 rounded-xl p-6 md:p-8 text-center">
              <p className="text-lg font-semibold text-gray-900 mb-2">Need to write an obituary?</p>
              <p className="text-sm text-gray-600 mb-5">Our free AI Obituary Maker generates a complete personalized tribute in minutes.</p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link href="/obituary-maker" className="inline-block bg-slate-700 hover:bg-slate-800 text-white font-semibold px-5 py-2.5 rounded-lg text-sm transition-colors">Use the Free AI Obituary Maker</Link>
                <Link href="/blog/obituary-template" className="inline-block bg-white hover:bg-gray-50 text-slate-700 font-semibold px-5 py-2.5 rounded-lg text-sm border border-slate-300 transition-colors">Browse Free Templates</Link>
              </div>
            </div>

            <div className="mb-10 bg-gray-50 border border-gray-200 rounded-xl p-6 md:p-8 text-center">
              <p className="text-lg font-semibold text-gray-900 mb-2">Need to write a eulogy?</p>
              <p className="text-sm text-gray-600 mb-5">Our free AI Eulogy Writer helps you honor your loved one with the right words.</p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link href="/eulogy-writer" className="inline-block bg-slate-700 hover:bg-slate-800 text-white font-semibold px-5 py-2.5 rounded-lg text-sm transition-colors">Use the Free AI Eulogy Writer</Link>
                <Link href="/blog/eulogy-examples" className="inline-block bg-white hover:bg-gray-50 text-slate-700 font-semibold px-5 py-2.5 rounded-lg text-sm border border-slate-300 transition-colors">Browse Eulogy Examples</Link>
              </div>
            </div>

            {/* Related Reading */}
            <section className="mb-10 bg-slate-50 rounded-lg p-6">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Related Reading</h2>
              <ul className="space-y-2">
                <li><Link href="/obituary-maker" className="text-slate-600 hover:text-slate-800 font-medium">Free Obituary Maker</Link></li>
                <li><Link href="/blog/how-to-write-an-obituary" className="text-slate-600 hover:text-slate-800 font-medium">How to Write an Obituary</Link></li>
                <li><Link href="/blog/obituary-examples" className="text-slate-600 hover:text-slate-800 font-medium">Obituary Examples: Good, Simple, and Meaningful</Link></li>
                <li><Link href="/blog/obituary-vs-death-notice" className="text-slate-600 hover:text-slate-800 font-medium">Obituary vs Death Notice: What Is the Difference?</Link></li>
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
