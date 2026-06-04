import Link from 'next/link';
import { Metadata } from 'next';
import Navigation from '@/components/Navigation';

export const metadata: Metadata = {
  title: 'Funeral Financial Assistance: Federal, State, and Local Programs (2026 National Guide)',
  description: 'Families who cannot afford a funeral have options. This guide covers FEMA funeral assistance, Social Security death benefits, VA burial benefits, Medicaid provisions, county indigent burial programs, low cost cremation, and charitable resources available nationwide.',
  alternates: { canonical: 'https://funeralhomedirectories.com/blog/funeral-financial-assistance' },
};

const faqs = [
  {
    q: 'What happens if you cannot afford a funeral?',
    a: 'If you cannot afford a funeral, you have several options. You can contact your county social services department to apply for indigent burial or cremation assistance. You can choose direct cremation, which is the lowest cost option at most funeral homes, typically ranging from $500 to $3,500. You may also qualify for FEMA assistance, VA burial benefits, or Social Security death benefits depending on your circumstances. Local churches, nonprofits, and crowdfunding are additional resources. No family is turned away entirely. There is always a path forward.'
  },
  {
    q: 'Does Medicaid pay for funerals?',
    a: 'Medicaid does not directly pay for funeral services in most states. However, many states allow Medicaid recipients to set aside up to $1,500 in a designated burial fund without affecting eligibility. Some states allow irrevocable prepaid funeral trusts of any amount. A small number of states, including Colorado, Indiana, Wisconsin, and Wyoming, offer modest direct burial benefits through their Medicaid programs. Medicaid enrollment documentation can also help families qualify for county indigent burial programs.'
  },
  {
    q: 'What charities help with funeral costs?',
    a: 'Several charities help families with funeral costs. Modest Needs Foundation provides emergency grants for families above the poverty line but still struggling financially. Children\'s Burial Assistance helps families who have lost a child. The Funeral Consumers Alliance connects families with affordable options. Local churches, synagogues, and mosques often maintain benevolence funds for funeral expenses. Dialing 2-1-1 connects you to a local helpline that can identify charitable resources in your area.'
  },
  {
    q: 'How much does a low income cremation cost?',
    a: 'Direct cremation, which is the most affordable cremation option, typically costs between $500 and $3,500 nationally. The price varies by region and provider. Some funeral homes in rural areas offer direct cremation for under $1,000. Urban areas tend to be higher, often $1,500 to $3,500. Families who qualify for county indigent burial assistance may receive cremation at no cost. Body donation to a medical school is another option that costs the family nothing.'
  },
  {
    q: 'Does FEMA pay for funerals?',
    a: 'FEMA provides funeral assistance for deaths caused by federally declared disasters, including COVID-19. The program reimburses up to $9,000 per funeral for qualifying expenses including transportation, cremation or burial, a casket or urn, clergy fees, and use of a funeral home. To apply, call FEMA at 1-844-684-6333 or visit DisasterAssistance.gov. You will need a death certificate linking the death to a qualifying disaster, itemized funeral receipts, and proof that no other source covered the costs.'
  },
  {
    q: 'What is indigent burial?',
    a: 'Indigent burial is a program provided by counties and municipalities to cover the basic cost of disposition for people who die without financial resources to pay for a funeral. Most counties provide either a direct cremation or a simple burial in a county cemetery. The family typically must demonstrate financial hardship and apply through the county social services office within 24 to 48 hours of the death. Eligibility is usually based on the deceased person\'s financial situation, not the family\'s income.'
  },
  {
    q: 'Can I get free cremation if I have no money?',
    a: 'Yes. If you have no money, you may qualify for free cremation through your county\'s indigent burial program. Contact your county social services department within 24 to 48 hours of the death. You will need to provide documentation of financial hardship. Body donation to a medical school is another option that provides cremation at no cost to the family, with remains typically returned within one to two years. Some nonprofits and churches may also cover cremation costs for families in extreme hardship.'
  },
  {
    q: 'What government programs help with funeral costs?',
    a: 'Government programs that help with funeral costs include FEMA funeral assistance (up to $9,000 for disaster-related deaths), the Social Security lump-sum death benefit ($255 for surviving spouse or dependent child), VA burial benefits (up to $2,000 for service-connected deaths, free burial at national cemeteries for eligible veterans), county indigent burial programs (free basic cremation or burial for qualifying residents), and some state Medicaid programs that offer small burial benefits.'
  },
  {
    q: 'How do I apply for funeral financial assistance?',
    a: 'To apply for funeral financial assistance, start by contacting your county social services department within 24 to 48 hours of the death to ask about indigent burial assistance. Gather documentation including the death certificate, proof of income or financial hardship, and asset information for the deceased. If the death was disaster-related, contact FEMA at 1-844-684-6333. For veterans, contact the VA at 1-800-827-1000. For Social Security benefits, call 1-800-772-1213. Also contact local nonprofits, churches, and dial 2-1-1 for local referrals.'
  },
  {
    q: 'Does the VA pay for funeral expenses?',
    a: 'The VA provides burial benefits for eligible veterans. For service-connected deaths, the VA pays up to $2,000 toward burial expenses. For non-service-connected deaths, the VA pays up to $948 for burial and funeral expenses plus up to $948 for a plot. All eligible veterans can receive free burial at a national cemetery, which includes the gravesite, opening and closing of the grave, a headstone or marker, and a burial flag. Contact the VA at 1-800-827-1000 to apply.'
  }
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map(f => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a }
  }))
};

const schemas = [
  faqSchema,
  {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Funeral Financial Assistance: Federal, State, and Local Programs (2026 National Guide)',
    speakable: {
      '@type': 'SpeakableSpecification',
      cssSelector: ['article > section:first-of-type']
    }
  }
];

export default function FuneralFinancialAssistancePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas) }} />
      <Navigation />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"Article","headline":"Funeral Financial Assistance: Federal, State, and Local Programs (2026 National Guide)","author":{"@type":"Person","name":"Terry Feely","url":"https://funeralhomedirectories.com/about"},"publisher":{"@type":"Organization","name":"Evermore Directory","url":"https://funeralhomedirectories.com"},"datePublished":"2026-04-13","dateModified":"2026-06-04","url":"https://funeralhomedirectories.com/blog/funeral-financial-assistance"}) }} />

      <main className="min-h-screen bg-white">
        <div className="max-w-4xl mx-auto px-4 py-12">
          <article>
            <header className="mb-10">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">Funeral Financial Assistance: Federal, State, and Local Programs (2026 National Guide)</h1>
              <p className="text-xl text-gray-600 mb-4">The complete national guide to government programs, county assistance, nonprofits, and low cost alternatives for families who need help paying for a funeral.</p>
              <div className="flex items-center gap-3 text-sm text-gray-500">
                <span className="font-medium text-gray-700">By Terry Feely</span>
                <span>|</span>
                <span>Former Firefighter and Paramedic</span>
                <span>|</span>
                <span>June 2026</span>
              </div>
            </header>

            <p className="text-xs text-gray-400 italic mb-8">This article contains affiliate links. We may earn a commission if you make a purchase through these links, at no additional cost to you. We only recommend products and services we believe genuinely help families.</p>

            {/* AI-citable opening */}
            <section className="mb-10">
              <p className="text-gray-700 leading-relaxed text-lg">Families who cannot afford a funeral have more options than most people realize. Federal programs like FEMA funeral assistance, Social Security death benefits, and VA burial benefits provide direct financial help. Every state has some form of county-level indigent burial program that covers basic cremation or burial at no cost. Nonprofits, religious organizations, and community crowdfunding fill additional gaps. This guide covers every major funeral assistance program available in the United States, with eligibility requirements, phone numbers, and step-by-step instructions for applying.</p>
            </section>

            {/* Federal Programs */}
            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Federal Programs Available Nationwide</h2>
              <p className="text-gray-600 leading-relaxed mb-4">Three federal programs provide financial help with funeral costs regardless of which state you live in. Each has different eligibility requirements, and families may qualify for more than one.</p>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">FEMA Funeral Assistance</h3>
              <p className="text-gray-600 leading-relaxed mb-4">The Federal Emergency Management Agency reimburses families up to $9,000 per funeral for deaths caused by federally declared disasters, including COVID-19. Qualifying expenses include transportation of the body, cremation or burial, a casket or urn, clergy fees, and use of a funeral home facility. FEMA will not duplicate benefits already received from insurance or other programs.</p>
              <p className="text-gray-600 leading-relaxed mb-4">To apply, call the FEMA helpline at <strong>1-844-684-6333</strong> or visit <strong>DisasterAssistance.gov</strong>. You will need a certified death certificate that links the death to a qualifying disaster, itemized funeral receipts, and proof that no other source covered the costs. Processing typically takes a few weeks, and you can appeal if denied.</p>
              <p className="text-gray-600 leading-relaxed mb-6">For a detailed breakdown of the FEMA application process, required documents, and tips for approval, see our <Link href="/blog/fema-funeral-assistance" className="text-slate-600 hover:text-slate-800 font-medium">FEMA Funeral Assistance guide</Link>.</p>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">Social Security Lump-Sum Death Benefit</h3>
              <p className="text-gray-600 leading-relaxed mb-4">The Social Security Administration pays a one-time lump-sum death benefit of <strong>$255</strong> to a surviving spouse who was living with the deceased at the time of death, or to a dependent child if there is no qualifying spouse. The deceased must have earned enough Social Security credits to be eligible. While the amount is modest, it can help offset a small portion of funeral costs.</p>
              <p className="text-gray-600 leading-relaxed mb-6">To apply, call Social Security at <strong>1-800-772-1213</strong>. Applications must be filed within two years of the death.</p>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">VA Burial Benefits</h3>
              <p className="text-gray-600 leading-relaxed mb-4">The Department of Veterans Affairs provides burial benefits for eligible veterans, service members, and some dependents. For service-connected deaths, the VA pays up to <strong>$2,000</strong> toward burial expenses. For non-service-connected deaths, the VA pays up to <strong>$948</strong> for burial and funeral expenses plus up to <strong>$948</strong> for a plot in a private cemetery.</p>
              <p className="text-gray-600 leading-relaxed mb-4">All eligible veterans can receive free burial at a national cemetery. This includes the gravesite, opening and closing of the grave, a government headstone or marker, a Presidential Memorial Certificate, and a burial flag. Spouses and dependents may also be eligible for burial in a national cemetery.</p>
              <p className="text-gray-600 leading-relaxed">To apply for VA burial benefits, call <strong>1-800-827-1000</strong> or visit your local VA regional office. You will need the veteran&apos;s DD-214 discharge papers, a certified death certificate, and itemized funeral receipts.</p>
            </section>

            {/* Medicaid and Burial Assistance */}
            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Medicaid and Burial Assistance</h2>
              <p className="text-gray-600 leading-relaxed mb-4">Medicaid does not directly pay for funeral services in most states. This is one of the most common misconceptions families encounter when searching for help. However, Medicaid interacts with burial planning in several important ways.</p>
              <p className="text-gray-600 leading-relaxed mb-4">Most states allow Medicaid recipients to designate up to <strong>$1,500</strong> in a burial fund without it counting against the asset limit for Medicaid eligibility. Some states also allow irrevocable prepaid funeral trusts of any amount. These provisions allow families to set money aside for funeral expenses before a death occurs while maintaining Medicaid benefits.</p>
              <p className="text-gray-600 leading-relaxed mb-4">A small number of states offer direct burial benefits through their Medicaid programs. Colorado, Indiana, Wisconsin, and Wyoming are among the states that provide modest payments toward funeral costs for Medicaid recipients. The amounts and eligibility requirements vary by state.</p>
              <p className="text-gray-600 leading-relaxed mb-4">Medicaid enrollment documentation can also strengthen a family&apos;s application for county indigent burial assistance. Many counties accept Medicaid enrollment as proof of financial hardship, which simplifies the application process.</p>
              <p className="text-gray-600 leading-relaxed">For a detailed breakdown of Medicaid funeral provisions by state, see our <Link href="/blog/medicaid-funeral-assistance" className="text-slate-600 hover:text-slate-800 font-medium">Medicaid Funeral Assistance guide</Link>.</p>
            </section>

            {/* State and County Indigent Burial */}
            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">State and County Indigent Burial Programs</h2>
              <p className="text-gray-600 leading-relaxed mb-4">Every state in the United States has some form of county-level indigent burial program. These programs provide a basic disposition, usually direct cremation or a simple burial in a county cemetery, for people who die without the financial resources to pay for funeral services. The programs exist to ensure that every person receives a dignified final arrangement regardless of financial circumstances.</p>
              <p className="text-gray-600 leading-relaxed mb-4">The specifics vary widely by county. Some counties provide direct cremation as the default. Others offer a simple burial. A few give families a choice. Services are minimal by design. There is typically no viewing, no embalming, and no formal service. The goal is respectful disposition at no cost to the family.</p>
              <p className="text-gray-600 leading-relaxed mb-4">To access county indigent burial assistance, contact your <strong>county social services or human services department within 24 to 48 hours</strong> of the death. Most programs have a short application window. The funeral home may also be able to connect you with the correct county office. You will need to provide documentation of the deceased person&apos;s financial hardship, a certified death certificate, and identification information.</p>
              <p className="text-gray-600 leading-relaxed mb-4">Eligibility is typically based on the deceased person&apos;s financial situation, not the family&apos;s. If the deceased had no assets, no insurance, and no resources to cover funeral costs, the county program may apply even if surviving family members have income.</p>
              <p className="text-gray-600 leading-relaxed">We have published detailed state-specific guides with county contacts, eligibility rules, and local resources. See the <Link href="#state-guides" className="text-slate-600 hover:text-slate-800 font-medium">state-specific guides section</Link> below.</p>
            </section>

            {/* Charitable and Nonprofit Resources */}
            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Charitable and Nonprofit Resources</h2>
              <p className="text-gray-600 leading-relaxed mb-4">When government programs do not fully cover funeral costs, or when families fall just outside eligibility, charitable organizations can fill the gap. The following resources are available nationwide.</p>

              <p className="text-gray-600 leading-relaxed mb-4"><strong>Modest Needs Foundation</strong> (modestneeds.org) provides emergency self-sufficiency grants to families who are above the poverty line but still struggling financially. Grants can be used for funeral expenses and are typically processed quickly.</p>

              <p className="text-gray-600 leading-relaxed mb-4"><strong>Children&apos;s Burial Assistance</strong> (childrensburialassistance.org) specifically helps families who have lost a child and cannot afford burial or cremation costs. The organization provides direct financial assistance and connects families with funeral homes willing to reduce fees.</p>

              <p className="text-gray-600 leading-relaxed mb-4"><strong>National Funeral Directors Association</strong> maintains a list of hardship resources and can connect families with funeral homes that offer reduced-fee services or pro bono work for families in extreme financial distress.</p>

              <p className="text-gray-600 leading-relaxed mb-4"><strong>Funeral Consumers Alliance</strong> (funerals.org) is a nonprofit that helps families find affordable funeral options and understand their legal rights. Local affiliate chapters can provide guidance on the most affordable providers in your area.</p>

              <p className="text-gray-600 leading-relaxed mb-4"><strong>Local churches, synagogues, and mosques</strong> often maintain benevolence funds for funeral expenses. Even if you are not a member of a specific congregation, many religious organizations will assist families in their community. Contact clergy directly to ask about available support.</p>

              <p className="text-gray-600 leading-relaxed mb-4"><strong>GoFundMe and crowdfunding</strong> has become a common way for families to raise money for funeral expenses. If you choose this route, be specific about costs, share the campaign widely, and update donors on the outcome. Funeral campaigns are among the most successful categories on crowdfunding platforms.</p>

              <p className="text-gray-600 leading-relaxed"><strong>211 Helpline</strong>: Dialing <strong>2-1-1</strong> from any phone connects you to a local information and referral service that can identify funeral assistance resources in your area. Operators are trained to connect callers with emergency financial assistance, including help with funeral costs.</p>
            </section>

            {/* Low Cost Alternatives */}
            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Low Cost Alternatives</h2>
              <p className="text-gray-600 leading-relaxed mb-4">When financial assistance programs do not cover the full cost, or when families prefer to handle arrangements independently, several low cost alternatives can bring expenses down significantly.</p>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">Direct Cremation</h3>
              <p className="text-gray-600 leading-relaxed mb-4">Direct cremation is the most affordable option at most funeral homes, typically costing between <strong>$500 and $3,500</strong> nationally. The price varies by region and provider. Rural areas tend to be less expensive, while urban areas are higher. Direct cremation includes the cremation itself, basic transportation of the body, and a simple container. There is no viewing, no embalming, and no formal service at the funeral home. The family receives the cremated remains and can hold a memorial service on their own schedule, in any location they choose.</p>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">Body Donation to Medical Schools</h3>
              <p className="text-gray-600 leading-relaxed mb-4">Donating a body to a medical school or research institution costs the family nothing. The institution covers all transportation and handling. Cremated remains are typically returned to the family within one to two years. Not everyone qualifies. The institution may decline donations due to certain medical conditions, prior surgeries, or other factors. The process should ideally be arranged before death, though some programs accept donations shortly after. Contact local medical schools directly to learn about their programs and requirements.</p>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">Home Funerals</h3>
              <p className="text-gray-600 leading-relaxed">Home funerals, where the family cares for the body themselves, are legal in most states and can significantly reduce costs. The family handles washing, dressing, and caring for the body at home, and may only need to hire a funeral home for transportation and filing the death certificate. Some states require a funeral director to be involved in certain steps. This option is not for every family, but for those who are comfortable with it, home funerals can be deeply personal and far less expensive than traditional arrangements.</p>
            </section>

            {/* How to Apply */}
            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">How to Apply for Funeral Assistance</h2>
              <p className="text-gray-600 leading-relaxed mb-4">Applying for funeral financial assistance can feel overwhelming during a difficult time. The following steps provide a general framework that applies to most programs.</p>

              <div className="space-y-4">
                <div>
                  <p className="text-gray-700 font-semibold mb-1">Step 1: Act within 24 to 48 hours.</p>
                  <p className="text-gray-600 leading-relaxed">Many county indigent burial programs have short application windows. Contact your county social services department as soon as possible after the death. The funeral home can often help you identify the correct office and phone number.</p>
                </div>
                <div>
                  <p className="text-gray-700 font-semibold mb-1">Step 2: Gather required documents.</p>
                  <p className="text-gray-600 leading-relaxed">Most programs require a certified death certificate, proof of the deceased person&apos;s income or financial hardship (Medicaid enrollment, SSI documentation, tax returns, or bank statements), asset documentation showing the deceased had no life insurance or savings, and identification for both the deceased and the applicant.</p>
                </div>
                <div>
                  <p className="text-gray-700 font-semibold mb-1">Step 3: Contact all applicable programs simultaneously.</p>
                  <p className="text-gray-600 leading-relaxed">Do not wait for one program to respond before applying to others. Contact county social services, the Social Security Administration (1-800-772-1213), the VA if the deceased was a veteran (1-800-827-1000), and FEMA if the death was disaster-related (1-844-684-6333). Also reach out to local churches, nonprofits, and dial 2-1-1 for referrals.</p>
                </div>
                <div>
                  <p className="text-gray-700 font-semibold mb-1">Step 4: Talk to the funeral home about your budget.</p>
                  <p className="text-gray-600 leading-relaxed">Funeral directors work with families in financial distress every day. Be honest about your budget and ask specifically about the lowest cost options, payment plans, and community resources they know about. Many funeral homes will customize a package to fit your budget.</p>
                </div>
                <div>
                  <p className="text-gray-700 font-semibold mb-1">Step 5: Keep records of everything.</p>
                  <p className="text-gray-600 leading-relaxed">Save copies of all applications, receipts, correspondence, and phone call notes. If you are applying for FEMA assistance, you will need itemized funeral receipts. If any application is denied, records help you file an appeal with supporting documentation.</p>
                </div>
              </div>
            </section>

            {/* LawDepot Affiliate CTA */}
            <section className="mb-10">
              <div className="bg-amber-50 border border-amber-200 rounded-lg p-5">
                <p className="text-gray-800 font-semibold mb-2">Protect Your Family from Future Financial Burden</p>
                <p className="text-gray-600 leading-relaxed mb-3">Having your own estate plan in place protects your family from additional financial burden after a death. LawDepot offers wills, living trusts, and estate planning documents you can create online.</p>
                <a href="https://www.dpbolvw.net/click-101760659-15906211" target="_blank" rel="sponsored nofollow noopener" className="inline-block bg-amber-600 text-white px-5 py-2 rounded hover:bg-amber-700 transition-colors font-medium text-sm">Create Your Estate Plan</a>
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

            {/* State-Specific Guides */}
            <section id="state-guides" className="mb-10 bg-slate-50 rounded-lg p-6">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">State-Specific Funeral Assistance Guides</h2>
              <p className="text-sm text-gray-600 mb-3">Each state has different programs, eligibility rules, and contacts. Select your state for a detailed guide with county-level information.</p>
              <ul className="space-y-2">
                <li><Link href="/blog/funeral-financial-assistance-california" className="text-slate-600 hover:text-slate-800 font-medium">California Funeral Financial Assistance</Link></li>
                <li><Link href="/blog/funeral-financial-assistance-florida" className="text-slate-600 hover:text-slate-800 font-medium">Florida Funeral Financial Assistance</Link></li>
                <li><Link href="/blog/funeral-financial-assistance-georgia" className="text-slate-600 hover:text-slate-800 font-medium">Georgia Funeral Financial Assistance</Link></li>
                <li><Link href="/blog/funeral-financial-assistance-ohio" className="text-slate-600 hover:text-slate-800 font-medium">Ohio Funeral Financial Assistance</Link></li>
                <li><Link href="/blog/funeral-financial-assistance-tennessee" className="text-slate-600 hover:text-slate-800 font-medium">Tennessee Funeral Financial Assistance</Link></li>
                <li><Link href="/blog/funeral-financial-assistance-texas" className="text-slate-600 hover:text-slate-800 font-medium">Texas Funeral Financial Assistance</Link></li>
              </ul>
            </section>

            {/* Related Reading */}
            <section className="mb-10 bg-slate-50 rounded-lg p-6">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Related Reading</h2>
              <ul className="space-y-2">
                <li><Link href="/blog/medicaid-funeral-assistance" className="text-slate-600 hover:text-slate-800 font-medium">Medicaid Funeral Assistance</Link></li>
                <li><Link href="/blog/fema-funeral-assistance" className="text-slate-600 hover:text-slate-800 font-medium">FEMA Funeral Assistance</Link></li>
                <li><Link href="/blog/funeral-costs-2026" className="text-slate-600 hover:text-slate-800 font-medium">Funeral Costs in 2026: What to Expect</Link></li>
                <li><Link href="/blog/what-happens-if-you-cant-afford-a-funeral" className="text-slate-600 hover:text-slate-800 font-medium">What Happens If You Cannot Afford a Funeral?</Link></li>
              </ul>
            </section>

            {/* CTA Footer */}
            <section className="mt-16 bg-slate-50 border-t border-slate-100 py-10 -mx-4 px-4 text-center">
              <p className="text-lg font-semibold text-slate-700 mb-2">Find funeral homes in your area</p>
              <p className="text-slate-600 text-sm mb-5">Search 7,395+ funeral homes and cremation providers across all 50 states. Compare prices, services, and locations. Free for families.</p>
              <Link href="/states" className="inline-block bg-slate-700 text-white px-6 py-3 rounded hover:bg-slate-800 transition-colors font-medium">Browse Funeral Homes Near You</Link>
            </section>
          </article>
        </div>
      </main>
    </>
  );
}
