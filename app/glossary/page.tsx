import { Metadata } from 'next';
import Link from 'next/link';
import Navigation from '@/components/Navigation';

export const metadata: Metadata = {
  title: 'Funeral Industry Glossary: 115 Terms Explained in Plain Language (2026)',
  description: 'A comprehensive glossary of 115 funeral, cremation, and burial terms defined in plain language. From direct cremation to green burial, every term families need to know.',
  alternates: { canonical: 'https://funeralhomedirectories.com/glossary' },
  openGraph: {
    title: 'Funeral Industry Glossary: 115 Terms Explained in Plain Language (2026)',
    description: 'A comprehensive glossary of 115 funeral, cremation, and burial terms defined in plain language.',
    url: 'https://funeralhomedirectories.com/glossary',
    siteName: 'Evermore Directory',
    type: 'website',
  },
};

interface Term {
  name: string;
  definition: string;
  id: string;
}

interface Category {
  title: string;
  id: string;
  terms: Term[];
}

const categories: Category[] = [
  {
    title: 'Cremation Terms',
    id: 'cremation',
    terms: [
      { name: 'Direct Cremation', id: 'direct-cremation', definition: 'The cremation of a deceased person without a preceding funeral service, viewing, or visitation. Direct cremation is the most affordable disposition option in the United States, typically costing between $695 and $3,500 depending on the state and provider. The process includes transportation of the deceased, the cremation itself, and return of the cremated remains to the family.' },
      { name: 'Cremation', id: 'cremation-term', definition: 'The process of reducing a deceased person\'s body to bone fragments through high-heat combustion, typically at temperatures between 1,400 and 1,800 degrees Fahrenheit. The process takes two to three hours. Cremation now accounts for over 60 percent of all dispositions in the United States, surpassing burial for the first time in 2015.' },
      { name: 'Cremation Society', id: 'cremation-society', definition: 'A funeral service provider that specializes exclusively in cremation services rather than offering the full range of funeral, burial, and cremation options. Cremation societies typically operate with lower overhead than traditional funeral homes and pass those savings to families, with direct cremation prices often 30 to 50 percent below the local average.' },
      { name: 'Aquamation (Alkaline Hydrolysis)', id: 'aquamation', definition: 'A water-based alternative to flame cremation that uses an alkaline solution and gentle water flow to accelerate natural decomposition. Also called alkaline hydrolysis, bio-cremation, or water cremation. The process uses approximately one-tenth the energy of traditional cremation and produces no direct emissions. Aquamation is legal in about 28 states as of 2026.' },
      { name: 'Cremains', id: 'cremains', definition: 'An informal term for cremated remains, which are the bone fragments left after the cremation process. Cremated remains are processed into a fine, pale gray powder that typically weighs between three and seven pounds for an adult. The term "cremains" is widely used by families, though funeral professionals often prefer "cremated remains."' },
      { name: 'Cremation Container', id: 'cremation-container', definition: 'The enclosure in which a body is placed for cremation. A cremation container can be a simple cardboard box, a pressed-wood container, or a combustible casket. Under the FTC Funeral Rule, funeral homes cannot require families to purchase a casket for cremation. Most direct cremation providers include a basic container in their standard package.' },
      { name: 'Cremation Casket', id: 'cremation-casket', definition: 'A casket designed specifically for cremation, typically made from combustible materials such as wood, wicker, or cardboard. Cremation caskets are generally less expensive than traditional burial caskets because they do not require metal hardware or sealed construction. Prices typically range from $500 to $3,000.' },
      { name: 'Cremation Permit', id: 'cremation-permit', definition: 'A legal authorization required before cremation can take place. Most states require a cremation permit issued by a medical examiner, coroner, or local health department. The permit confirms the cause of death has been determined and there is no reason to delay cremation for further investigation. Processing time varies from a few hours to several days depending on the jurisdiction.' },
      { name: 'Crematory', id: 'crematory', definition: 'The building or facility that houses cremation equipment and where the cremation process takes place. A crematory may be operated independently, within a funeral home, or on the grounds of a cemetery. Some funeral homes own their own crematory, while others contract with a third-party crematory for cremation services.' },
      { name: 'Crematorium', id: 'crematorium', definition: 'A term used interchangeably with crematory in many regions, referring to a facility where cremation is performed. In some usage, crematorium refers specifically to the building, while crematory refers to the retort (furnace) itself. Both terms are acceptable in standard American English.' },
      { name: 'Witness Cremation', id: 'witness-cremation', definition: 'A cremation in which family members are present to observe the body being placed into the cremation chamber. Some families request a brief ceremony or prayer before the cremation begins. Witness cremation is offered by many crematories and typically adds $100 to $400 to the cost of a standard cremation. Not all facilities are equipped to accommodate witnesses.' },
      { name: 'Pet-Free Crematory', id: 'pet-free-crematory', definition: 'A crematory that exclusively handles human remains and does not offer pet cremation services in the same facility. Some families specifically seek pet-free crematories for religious, cultural, or personal reasons. This distinction is not regulated in most states, so families should ask the provider directly about their facility policies.' },
      { name: 'Urn', id: 'urn', definition: 'A container designed to hold cremated remains. Urns are made from a wide range of materials including ceramic, metal, wood, stone, and biodegradable compounds. Prices range from under $50 for a simple container to several thousand dollars for handcrafted or custom designs. Funeral homes are required under the FTC Funeral Rule to allow families to provide their own urn.' },
      { name: 'Memorial Urn', id: 'memorial-urn', definition: 'A decorative urn intended for display in a home, columbarium niche, or other permanent location. Memorial urns are distinguished from temporary containers (which are typically plastic or cardboard) and scattering urns (which are designed to release ashes). Many families choose a memorial urn that reflects the personality or interests of the deceased.' },
      { name: 'Scattering', id: 'scattering', definition: 'The practice of dispersing cremated remains in a meaningful location such as a body of water, mountainside, garden, or designated scattering area within a cemetery. Laws governing scattering vary by state and locality. Most states permit scattering on private property with the owner\'s permission. Scattering at sea is regulated by the EPA, which requires remains to be scattered at least three nautical miles from shore.' },
    ],
  },
  {
    title: 'Burial Terms',
    id: 'burial',
    terms: [
      { name: 'Burial', id: 'burial-term', definition: 'The act of placing a deceased person\'s body or cremated remains in the ground, a mausoleum, or other final resting place. Traditional in-ground burial remains the second most common form of disposition in the United States. The national median cost of a burial with a full funeral service is approximately $7,848, according to the National Funeral Directors Association.' },
      { name: 'Traditional Burial', id: 'traditional-burial', definition: 'A burial that follows the conventional sequence of embalming, a visitation or viewing, a funeral service (often in a funeral home chapel or house of worship), and interment in a cemetery. Traditional burial typically involves a casket, a burial vault or grave liner, a cemetery plot, and a grave marker. The total cost including all services and merchandise typically ranges from $7,000 to $15,000.' },
      { name: 'Green Burial', id: 'green-burial', definition: 'An environmentally focused burial practice that avoids embalming chemicals, uses a biodegradable casket or shroud, and skips the concrete burial vault. The body is returned to the earth in a way that allows natural decomposition. Green burial typically costs $1,000 to $4,000, significantly less than traditional burial. The Green Burial Council certifies cemeteries and providers that meet specific environmental standards.' },
      { name: 'Natural Burial', id: 'natural-burial', definition: 'A term often used interchangeably with green burial, referring to burial methods that minimize environmental impact. Natural burial emphasizes the use of non-toxic, biodegradable materials and the conservation of natural landscapes. Some natural burial grounds function as nature preserves, with graves marked by native plantings or GPS coordinates rather than traditional headstones.' },
      { name: 'Casket', id: 'casket', definition: 'A rectangular container, typically with a hinged lid, used to hold a deceased person\'s body for viewing, funeral services, and burial. Modern caskets are most commonly made from steel, hardwood, or composite materials. Casket prices range widely from $1,000 for a basic model to $10,000 or more for premium hardwood or copper designs. The FTC Funeral Rule requires funeral homes to accept caskets purchased from third parties.' },
      { name: 'Coffin', id: 'coffin', definition: 'A tapered, six-sided or eight-sided container for a deceased person that is wider at the shoulders and narrower at the head and feet. While "casket" and "coffin" are often used interchangeably in everyday language, a coffin is technically a different shape than a rectangular casket. Coffins are more commonly used in Europe, the United Kingdom, and in some religious traditions.' },
      { name: 'Burial Vault', id: 'burial-vault', definition: 'A lined and sealed outer container placed in a grave to enclose the casket. Burial vaults prevent the ground above from settling as the casket deteriorates over time, protecting the cemetery landscape. Most cemeteries in the United States require either a vault or a grave liner. Vaults typically cost between $1,000 and $10,000, with concrete being the most common material.' },
      { name: 'Grave Liner', id: 'grave-liner', definition: 'An unlined outer burial container that covers the top and sides of a casket in the grave. Unlike a burial vault, a grave liner is not sealed and does not protect the casket from water or soil. Grave liners satisfy most cemetery requirements for an outer container at a lower cost than vaults, typically ranging from $700 to $1,500.' },
      { name: 'Plot', id: 'plot', definition: 'A specific piece of land in a cemetery purchased for the purpose of burying one or more persons. Cemetery plot prices vary dramatically by location, from under $500 in rural areas to $10,000 or more in major metropolitan cemeteries. A single plot typically accommodates one casket burial or multiple cremation urns. Families may also purchase companion plots (side by side) or family plots (multiple adjacent spaces).' },
      { name: 'Crypt', id: 'crypt', definition: 'An above-ground chamber within a mausoleum used for entombment of a casket or cremation urn. Crypts are sealed after placement to protect the remains. A single crypt in a community mausoleum typically costs between $4,000 and $15,000 depending on location and placement level. Crypts at eye level (called "heart level") are generally the most expensive.' },
      { name: 'Mausoleum', id: 'mausoleum', definition: 'A building or structure designed to house the remains of one or more deceased persons above ground. Community mausoleums contain many crypts and are maintained by the cemetery. Private or family mausoleums are standalone structures built for a single family. Community mausoleum spaces are more affordable than private structures, which can cost $25,000 to $100,000 or more to construct.' },
      { name: 'Niche', id: 'niche', definition: 'A small recessed compartment in a columbarium wall designed to hold a cremation urn. Niches are typically 12 inches by 12 inches, though sizes vary. Niche prices range from $500 to $5,000 depending on the location, position, and whether the niche is indoor or outdoor. A single niche can often accommodate two standard-sized urns for couples.' },
      { name: 'Columbarium', id: 'columbarium', definition: 'A structure containing niches for the permanent storage of cremation urns. Columbariums can be freestanding walls, rooms within a building, or sections of a mausoleum. They offer families a permanent, accessible place to visit their loved one\'s remains as an alternative to scattering or home storage.' },
      { name: 'Cemetery', id: 'cemetery', definition: 'A designated area of land set aside for the burial of the dead. Cemeteries in the United States may be publicly owned (municipal), privately owned, religious, or operated by the Department of Veterans Affairs (national cemeteries). Perpetual care cemeteries include long-term grounds maintenance in the cost of the plot, funded by a trust.' },
      { name: 'Interment', id: 'interment', definition: 'The formal act of placing a body or cremated remains in a final resting place, whether in a grave, crypt, or niche. The interment fee, charged by the cemetery for opening and closing the grave and overseeing the placement, typically ranges from $300 to $1,500. The term encompasses both burial in the ground and placement in a mausoleum or columbarium.' },
    ],
  },
  {
    title: 'Legal and Financial Terms',
    id: 'legal-financial',
    terms: [
      { name: 'General Price List (GPL)', id: 'general-price-list', definition: 'An itemized list of all goods and services offered by a funeral home along with their individual prices. The FTC Funeral Rule requires every funeral provider in the United States to give consumers a General Price List at the beginning of any in-person arrangement discussion, free of charge. Families can use GPLs to compare prices between providers and to select only the specific services they want.' },
      { name: 'FTC Funeral Rule', id: 'ftc-funeral-rule', definition: 'A federal regulation enforced by the Federal Trade Commission that protects consumers purchasing funeral goods and services. The rule, first enacted in 1984 and updated in 1994, requires funeral homes to provide itemized pricing, prohibits bundling requirements (families can buy individual items), and bans providers from requiring a casket for cremation. Violations can result in penalties up to $50,120 per incident.' },
      { name: 'Pre-Need Contract', id: 'pre-need-contract', definition: 'A legally binding agreement to purchase funeral goods and services in advance of death. Pre-need contracts allow individuals to plan and sometimes pay for their own funeral while still living. Funds may be held in a trust or used to purchase a funeral insurance policy. State laws governing pre-need contracts vary significantly, particularly regarding refund rights and portability between providers.' },
      { name: 'At-Need Arrangement', id: 'at-need-arrangement', definition: 'The process of arranging funeral services at the time of death, as opposed to pre-need planning done in advance. Most funeral arrangements in the United States are still made at-need, typically within 24 to 48 hours of death. At-need families are often under significant emotional and time pressure, which is why consumer advocates recommend pre-planning when possible.' },
      { name: 'Funeral Insurance', id: 'funeral-insurance', definition: 'A life insurance policy specifically designed to cover funeral and burial costs. Funeral insurance policies are typically small whole life policies with face values between $5,000 and $25,000. Some policies guarantee acceptance regardless of health. Premiums depend on age, health, and coverage amount. Funeral insurance is different from a pre-need contract, as the payout goes to the beneficiary rather than directly to a funeral home.' },
      { name: 'Burial Insurance', id: 'burial-insurance', definition: 'An informal term for final expense insurance or funeral insurance, referring to a small whole life insurance policy intended to cover the cost of a funeral, burial, or cremation. Burial insurance typically has simplified underwriting and is marketed to adults over age 50, though policies are available at any age.' },
      { name: 'Final Expense Insurance', id: 'final-expense-insurance', definition: 'A type of whole life insurance policy with a relatively small death benefit, typically $5,000 to $50,000, intended to cover funeral costs, medical bills, and other end of life expenses. Unlike term life insurance, final expense policies do not expire as long as premiums are paid. Some guaranteed acceptance policies include a graded benefit period of two to three years.' },
      { name: 'Death Certificate', id: 'death-certificate', definition: 'An official government document recording the fact, date, location, and cause of a person\'s death. Death certificates are issued by the state vital records office and are required for nearly all legal and financial transactions after death, including filing insurance claims, closing bank accounts, transferring property, and claiming benefits. Most families need 10 to 15 certified copies. Each copy typically costs $10 to $30 depending on the state.' },
      { name: 'Authorization to Cremate', id: 'authorization-to-cremate', definition: 'A legal form signed by the next of kin or authorized representative giving permission for cremation to proceed. Because cremation is irreversible, most states require written authorization before a crematory will accept remains. Some states require authorization from multiple next of kin or impose a mandatory waiting period (typically 24 to 48 hours) between death and cremation.' },
      { name: 'Power of Attorney', id: 'power-of-attorney', definition: 'A legal document that designates another person to make decisions on your behalf. In the context of funeral planning, a durable power of attorney or a specific funeral planning designation allows a trusted person to make disposition and service decisions if you become incapacitated. This is separate from a healthcare power of attorney, though both are important end of life planning documents.' },
      { name: 'Funeral Trust', id: 'funeral-trust', definition: 'A financial arrangement in which funds designated for future funeral expenses are placed in a trust account. Funeral trusts are commonly used in pre-need planning and may be revocable (allowing the owner to withdraw funds) or irrevocable (which can help with Medicaid eligibility by removing the funds from countable assets). State laws govern how funeral trust funds must be managed and reported.' },
      { name: 'Death Benefit', id: 'death-benefit', definition: 'A payment made to a beneficiary upon the death of an insured person or qualifying individual. Death benefits may come from life insurance policies, employer benefits, Social Security (a one-time $255 payment to surviving spouses), or veterans benefits. The term is distinct from a life insurance policy\'s face value, as some policies include additional accidental death or other riders.' },
      { name: 'Veteran Burial Benefits', id: 'veteran-burial-benefits', definition: 'Federal benefits available to eligible veterans that help cover burial and funeral costs. Benefits include a burial allowance (up to $2,000 for service-related deaths), a plot allowance, a government headstone or marker at no cost, a burial flag, and eligibility for interment in a national cemetery at no charge. Surviving spouses and dependents may also qualify for certain benefits.' },
      { name: 'Social Security Death Benefit', id: 'social-security-death-benefit', definition: 'A one-time lump sum payment of $255 made by the Social Security Administration to the surviving spouse or eligible child of a deceased worker who had sufficient Social Security credits. The payment amount has not changed since 1954. Survivors must apply for the benefit, typically through a funeral home or directly with the SSA, within two years of the death.' },
      { name: 'Funeral Bond', id: 'funeral-bond', definition: 'A financial product, more common in Australia and some other countries than in the United States, that allows a person to set aside money for funeral expenses in a tax-advantaged investment. In the US, similar goals are typically achieved through funeral trusts, pre-need contracts, or final expense insurance policies rather than funeral bonds specifically.' },
    ],
  },
  {
    title: 'Ceremony Types',
    id: 'ceremony-types',
    terms: [
      { name: 'Funeral Service', id: 'funeral-service', definition: 'A ceremony held in the presence of the deceased person\'s body, typically before burial or cremation. A funeral service may take place in a funeral home chapel, house of worship, or other venue. The service usually includes readings, prayers or reflections, a eulogy, music, and a formal structure led by clergy or a celebrant. The body may be present in an open or closed casket.' },
      { name: 'Memorial Service', id: 'memorial-service', definition: 'A ceremony honoring a deceased person held without the body present. Memorial services may take place days, weeks, or months after death, giving families more flexibility in planning. They follow a similar format to funeral services but can also be held in non-traditional venues such as parks, restaurants, or family homes. Memorial services are common after cremation or when the deceased has donated their body to science.' },
      { name: 'Celebration of Life', id: 'celebration-of-life', definition: 'An informal, personalized gathering that focuses on remembering and celebrating the life of the deceased rather than mourning the death. Celebrations of life are typically less structured than traditional funeral or memorial services and may include shared meals, storytelling, music, photo displays, and activities that reflect the interests of the person who died. There is no set format or religious requirement.' },
      { name: 'Wake', id: 'wake', definition: 'A gathering, traditionally held the evening before a funeral, where family and friends come together in the presence of the deceased. Wakes have roots in Irish Catholic tradition and historically involved watching over the body through the night. In modern practice, a wake is typically a two to four hour event at a funeral home or family residence that includes an open casket viewing, prayers (often a rosary in Catholic tradition), and social gathering.' },
      { name: 'Visitation', id: 'visitation', definition: 'A scheduled time, typically one to three hours before a funeral service or on the preceding evening, when friends and community members can pay their respects to the deceased and offer condolences to the family. A visitation may or may not include an open casket. Unlike a formal service, a visitation is generally unstructured, allowing visitors to come and go during the designated hours.' },
      { name: 'Viewing', id: 'viewing', definition: 'A period, usually at a funeral home, during which the body of the deceased is displayed in an open casket for family and friends to see. The body is typically embalmed and cosmetically prepared for viewing. A viewing may be a standalone event, part of a visitation, or held immediately before a funeral service. Viewing is a personal and cultural choice, and families can choose a closed casket or no viewing at all.' },
      { name: 'Graveside Service', id: 'graveside-service', definition: 'A funeral or committal ceremony held at the cemetery beside the open grave. A graveside service may serve as the only ceremony, or it may follow a separate funeral service held at another location. The service typically includes brief readings, prayers, and the lowering of the casket. Graveside services are generally shorter than chapel services, lasting 15 to 30 minutes. They are common in Jewish tradition and in military funerals.' },
      { name: 'Committal Service', id: 'committal-service', definition: 'A brief ceremony held at the final resting place, whether a grave, mausoleum, or columbarium, during which the remains are formally committed to their final disposition. A committal service usually follows a funeral or memorial service and includes final prayers, the lowering of the casket, or the placement of an urn. It provides a formal conclusion to the funeral proceedings.' },
      { name: 'Religious Funeral', id: 'religious-funeral', definition: 'A funeral service conducted according to the rites and traditions of a specific religious faith. The format, prayers, readings, and customs vary by denomination and tradition. For example, a Catholic funeral Mass includes specific liturgical elements, a Jewish funeral follows halacha (religious law) which typically requires burial within 24 hours, and a Muslim janazah prayer follows specific Islamic guidelines.' },
      { name: 'Civil Funeral', id: 'civil-funeral', definition: 'A non-religious funeral ceremony that does not include prayers, hymns, or references to a specific faith tradition. Civil funerals are led by a celebrant, justice of the peace, or family member rather than clergy. They may include readings from literature, personal tributes, music, and moments of silence. Civil funerals have become increasingly common as more Americans identify as non-religious.' },
      { name: 'Military Funeral', id: 'military-funeral', definition: 'A funeral ceremony that includes military honors for a deceased veteran or active-duty service member. Standard military funeral honors include the folding and presentation of the American flag to the next of kin and the playing of Taps. Full military honors, available for higher-ranking personnel, may include a rifle volley, a caisson-drawn casket, and an honor guard. Families can request military honors through their funeral home or directly through the local military installation.' },
      { name: 'Private Service', id: 'private-service', definition: 'A funeral or memorial service restricted to family members and specifically invited guests. Private services give families greater control over the size and intimacy of the gathering. Families who choose a private service sometimes hold a separate public memorial or celebration of life at a later date to allow the broader community to pay their respects.' },
      { name: 'Public Service', id: 'public-service', definition: 'A funeral or memorial service open to anyone who wishes to attend. Public services are the most common format and allow friends, colleagues, neighbors, and community members to pay their respects without a formal invitation. The funeral home or family typically publishes the service details in an obituary or death notice.' },
      { name: 'Direct Burial', id: 'direct-burial', definition: 'The burial of a deceased person shortly after death without a preceding funeral service, viewing, or visitation. Direct burial is the burial equivalent of direct cremation. The body is placed in a casket and buried in a cemetery, usually within 24 to 48 hours. Embalming is not required for direct burial. It is the most affordable burial option, typically costing $2,000 to $5,000.' },
      { name: 'Direct Cremation Service', id: 'direct-cremation-service', definition: 'A cremation arrangement that includes no viewing, no embalming, and no formal ceremony before the cremation takes place. The funeral provider handles transportation, required paperwork, and the cremation process. Direct cremation service is the most commonly selected cremation arrangement in the United States, chosen for its simplicity, cost savings, and flexibility to hold a memorial on the family\'s own schedule.' },
    ],
  },
  {
    title: 'Service Components',
    id: 'service-components',
    terms: [
      { name: 'Embalming', id: 'embalming', definition: 'The process of chemically preserving a deceased person\'s body to delay decomposition, typically for the purpose of a public viewing or extended time before burial or cremation. Embalming involves replacing blood with a formaldehyde-based solution. It is not required by law in any US state for most circumstances, though some states require it if the body is not refrigerated within a specific time period. Embalming typically costs $500 to $800.' },
      { name: 'Refrigeration', id: 'refrigeration', definition: 'The temporary cooling of a deceased person\'s body to slow decomposition as an alternative to embalming. Refrigeration is accepted in all 50 states and is a standard option when a family declines embalming. Most funeral homes and crematories have refrigeration facilities. A daily refrigeration fee, typically $50 to $100 per day, may apply.' },
      { name: 'Preparation of Body', id: 'preparation-of-body', definition: 'The physical preparation of a deceased person for viewing, funeral services, or disposition. Preparation may include bathing, dressing, grooming, cosmetic application, and positioning the body in the casket. When embalming is performed, it is part of the preparation process. When no embalming is requested, preparation is limited to bathing, dressing, and cosmetic application.' },
      { name: 'Restorative Art', id: 'restorative-art', definition: 'Specialized techniques used by funeral professionals to restore a natural appearance to a deceased person who has experienced trauma, surgery, or the effects of prolonged illness. Restorative art may involve wax modeling, cosmetic reconstruction, and tissue building. It is an optional service typically requested when the family wants an open casket viewing after circumstances that altered the person\'s appearance.' },
      { name: 'Dressing and Casketing', id: 'dressing-and-casketing', definition: 'The process of dressing the deceased in clothing chosen by the family and placing the body in the casket for viewing or services. Funeral home staff handle this with care and attention to the family\'s wishes, including personal items the family may want placed with the deceased. This service is typically included in the funeral home\'s basic services fee.' },
      { name: 'Transportation', id: 'transportation', definition: 'The transfer of a deceased person from the place of death (hospital, residence, nursing home) to the funeral home, crematory, or other facility. Most funeral homes charge a basic transportation fee that covers a transfer within a set radius, typically 25 to 50 miles. Additional mileage fees apply for longer distances. A standard transfer fee ranges from $200 to $500.' },
      { name: 'Removal', id: 'removal', definition: 'The initial transfer of a deceased person from the place of death. Removal is typically the first service a funeral home provides after being contacted by the family or authorities. The funeral home dispatches a vehicle and trained staff to transport the body. After-hours removals may incur an additional fee. Some funeral homes include the removal fee in their overall services charge, while others itemize it separately.' },
      { name: 'Forwarding Remains', id: 'forwarding-remains', definition: 'The process of preparing and shipping a deceased person\'s body to another funeral home in a different city or state. This is necessary when a person dies away from home and the family wants the funeral and burial to take place in their home community. Forwarding typically includes embalming (or refrigeration), a shipping container, and coordination with an airline or ground transportation provider. Costs typically range from $1,500 to $3,000.' },
      { name: 'Receiving Remains', id: 'receiving-remains', definition: 'The process of accepting a deceased person\'s body from another funeral provider who has shipped the remains from a different location. The receiving funeral home takes custody of the body, verifies documentation, and prepares for local services and disposition. Receiving fees typically range from $800 to $2,000.' },
      { name: 'Funeral Procession', id: 'funeral-procession', definition: 'An organized, formal movement of vehicles from the location of the funeral service to the cemetery or other place of disposition. The procession is typically led by the hearse, followed by the family\'s vehicles and then other mourners. In many states, vehicles in a funeral procession have the legal right of way and may proceed through red lights and stop signs as a group. A police escort may be arranged in some jurisdictions.' },
      { name: 'Use of Facilities', id: 'use-of-facilities', definition: 'A charge on the funeral home\'s General Price List for the use of the funeral home\'s building and equipment for a viewing, visitation, ceremony, or other event. This may include the chapel, visitation rooms, and common areas. Use of facilities fees vary widely, from $300 to $1,500 or more depending on the funeral home and the specific spaces used.' },
      { name: 'Staff Services', id: 'staff-services', definition: 'The professional services provided by funeral home personnel, including coordination with the cemetery, clergy, and other parties, preparation of legal documents, planning the service, and supervising all events. Most funeral homes charge a "basic services of funeral director and staff" fee that is non-declinable, meaning it is added to every arrangement. This fee typically ranges from $1,500 to $3,000.' },
      { name: 'Memorial Folder', id: 'memorial-folder', definition: 'A printed program distributed to attendees at a funeral or memorial service, typically containing the order of service, biographical information about the deceased, photographs, readings, and acknowledgments. Also called a funeral program, service folder, or memorial program. Funeral homes may charge $100 to $300 for design and printing, though families can create their own.' },
      { name: 'Register Book', id: 'register-book', definition: 'A guest book placed at the entrance of a visitation or funeral service for attendees to sign their names and offer brief condolences. The register book provides the family with a record of who attended the service. It is a standard merchandise item offered by funeral homes, typically priced between $25 and $75.' },
      { name: 'Acknowledgment Cards', id: 'acknowledgment-cards', definition: 'Pre-printed or personalized cards sent by the bereaved family to thank those who sent flowers, made donations, provided food, or offered support during the funeral period. Acknowledgment cards, sometimes called thank you cards, are traditionally sent within two to four weeks of the funeral. Funeral homes typically offer them as part of their stationery package.' },
    ],
  },
  {
    title: 'People and Roles',
    id: 'people-roles',
    terms: [
      { name: 'Funeral Director', id: 'funeral-director', definition: 'A licensed professional who oversees the planning and execution of funeral services, including coordinating with families, preparing legal documents, arranging transportation, and managing all logistics. Funeral directors must complete mortuary science education and pass a national board exam (in most states) plus a state licensing exam. They serve as the primary point of contact for families throughout the arrangement process.' },
      { name: 'Mortician', id: 'mortician', definition: 'A term used interchangeably with funeral director or undertaker, referring to a professional who prepares the deceased and manages funeral arrangements. The term originated in the early 20th century as a more professional-sounding alternative to "undertaker." In practice, morticians and funeral directors perform the same duties and hold the same licenses.' },
      { name: 'Embalmer', id: 'embalmer', definition: 'A licensed professional who performs the chemical preservation of a deceased person\'s body. In many states, the embalmer\'s license is separate from the funeral director\'s license, though many professionals hold both. Embalmers must complete coursework in anatomy, chemistry, and restorative art, and they must pass a licensing exam. Some funeral directors are also licensed embalmers, while others employ separate embalming staff.' },
      { name: 'Cemetery Director', id: 'cemetery-director', definition: 'The administrator responsible for managing a cemetery\'s operations, including plot sales, interment scheduling, grounds maintenance, record keeping, and customer service. Cemetery directors may work for private, municipal, or religious cemeteries. Licensing requirements vary by state, with some requiring specific credentials and others having no formal licensing for cemetery management.' },
      { name: 'Pallbearer', id: 'pallbearer', definition: 'A person selected by the family to carry or escort the casket during a funeral service and from the hearse to the gravesite. Traditionally, six pallbearers carry the casket, though the number may vary. Pallbearers are usually close friends, family members, or colleagues of the deceased. It is considered an honor to be asked to serve as a pallbearer.' },
      { name: 'Honorary Pallbearer', id: 'honorary-pallbearer', definition: 'A person designated by the family to be recognized at the funeral but who does not physically carry the casket. Honorary pallbearers may walk alongside the casket, sit in a reserved section, or be listed in the funeral program. This designation is often given to elderly individuals, close friends who are unable to carry the weight, or as a way to honor additional people beyond the six active pallbearers.' },
      { name: 'Officiant', id: 'officiant', definition: 'The person who leads a funeral or memorial service. An officiant may be a member of the clergy, a certified funeral celebrant, a justice of the peace, or a family member or friend chosen by the family. The officiant guides the structure of the service, delivers readings or reflections, and may offer a eulogy or invite others to speak.' },
      { name: 'Clergy', id: 'clergy', definition: 'Ordained religious leaders such as priests, pastors, ministers, rabbis, imams, or other faith leaders who may conduct funeral services according to their religious tradition. Many families request clergy to officiate the funeral, even if the family is not actively practicing. Clergy fees for funeral services (called honoraria or stipends) typically range from $100 to $300.' },
      { name: 'Celebrant', id: 'celebrant', definition: 'A trained, non-denominational officiant who creates and leads personalized funeral or memorial ceremonies. Certified funeral celebrants work with families to craft services that reflect the unique life of the deceased without adhering to a specific religious tradition. Celebrants are an increasingly popular choice for families who want a meaningful ceremony without a religious framework.' },
      { name: 'Next of Kin', id: 'next-of-kin', definition: 'The closest living relative of the deceased, who typically has legal authority to make funeral arrangements and disposition decisions. The order of next of kin priority generally follows: surviving spouse, adult children, parents, siblings. State laws define the specific hierarchy and may include provisions for designated agents or other authorized persons. In cases of disagreement among family members, state law determines who has final authority.' },
    ],
  },
  {
    title: 'Documents and Records',
    id: 'documents-records',
    terms: [
      { name: 'Obituary', id: 'obituary', definition: 'A published notice announcing a person\'s death, providing biographical information, and listing funeral service details. Obituaries are published in newspapers, online obituary platforms, and on the funeral home\'s website. Newspaper obituary costs vary widely, from $100 to over $1,000 depending on length and the publication. Many funeral homes now publish obituaries on their websites at no additional cost.' },
      { name: 'Eulogy', id: 'eulogy', definition: 'A speech delivered during a funeral or memorial service that pays tribute to the deceased, sharing memories, accomplishments, and the impact of their life on others. Eulogies may be given by family members, close friends, clergy, or a professional celebrant. There is no required format, and a service may include one eulogy or several. The word comes from the Greek "eulogia," meaning praise.' },
      { name: 'Death Notice', id: 'death-notice', definition: 'A brief announcement of a person\'s death that typically includes only the essential facts: name, age, date of death, and funeral service information. Unlike a full obituary, a death notice does not include a detailed biography. Death notices are less expensive to publish than obituaries and are sometimes used in addition to a full obituary in a different publication.' },
      { name: 'Memorial Program', id: 'memorial-program', definition: 'A printed document given to attendees at a funeral or memorial service containing the order of events, biographical information, photographs, readings, and musical selections. Also called a funeral program, order of service, or memorial folder. Programs range from simple single-page handouts to elaborate multi-page booklets. Many families now create custom programs using online templates.' },
      { name: 'Order of Service', id: 'order-of-service', definition: 'The planned sequence of events for a funeral or memorial ceremony. A typical order of service includes a processional, opening words, readings, musical selections, eulogy or tributes, closing words, and a recessional. The order of service is usually printed in the memorial program so attendees can follow along. Families work with the funeral director and officiant to customize the sequence.' },
      { name: 'Casket Flag', id: 'casket-flag', definition: 'A United States flag draped over the casket of an eligible veteran during a funeral service. The flag is provided at no cost by the Department of Veterans Affairs. At a military funeral, the flag is ceremonially folded into a triangle and presented to the next of kin with the words, "On behalf of the President of the United States, the Department of Defense, and a grateful nation." Families may request a casket flag through their funeral home.' },
      { name: 'Honor Guard Certificate', id: 'honor-guard-certificate', definition: 'A document presented to the family of a veteran acknowledging that military funeral honors were rendered. The certificate accompanies the folded flag presentation and serves as a formal record that the veteran received military honors at their funeral. It is provided by the branch of service or the honor guard detail that performed the ceremony.' },
      { name: 'Cremation Certificate', id: 'cremation-certificate', definition: 'A document issued by the crematory confirming that a specific individual\'s remains were cremated at their facility on a given date. The cremation certificate identifies the deceased, the date and location of cremation, and the disposition of the cremated remains. This document is kept by the family and may be required for certain legal or insurance purposes.' },
      { name: 'Burial Permit', id: 'burial-permit', definition: 'An official authorization issued by a local or state government agency that must be obtained before a burial can take place. The burial permit, sometimes called a disposition permit, confirms that the death has been properly registered and that all legal requirements have been met. The funeral home typically handles the application process. Requirements and fees vary by jurisdiction.' },
      { name: 'Disinterment Permit', id: 'disinterment-permit', definition: 'A legal authorization required to remove previously buried remains from a grave. Disinterment (also called exhumation) may be necessary for relocation to a different cemetery, legal investigation, or family wishes. The process requires permits from local health authorities and often the consent of the next of kin. Disinterment is regulated by state and local laws and can cost $3,000 to $10,000 or more depending on complexity.' },
    ],
  },
  {
    title: 'Cultural and Religious Terms',
    id: 'cultural-religious',
    terms: [
      { name: 'Shiva (Jewish)', id: 'shiva', definition: 'A seven-day mourning period observed in Judaism following the burial of a close family member (parent, sibling, child, or spouse). During shiva, the bereaved family stays home, sits on low chairs, and receives visitors who come to offer comfort and share meals. Mirrors are traditionally covered and normal daily activities are suspended. The word "shiva" comes from the Hebrew word for "seven."' },
      { name: 'Wake (Catholic and Irish)', id: 'wake-catholic', definition: 'In Catholic and Irish tradition, a wake is a gathering held in the presence of the deceased, usually the evening before the funeral. The wake often includes an open casket viewing, the recitation of the rosary, personal storytelling, and communal gathering with food and drink. Modern wakes are most commonly held at funeral homes, though the tradition of holding wakes in the family home continues in some communities.' },
      { name: 'Janazah (Islamic)', id: 'janazah', definition: 'The Islamic funeral prayer performed as a communal obligation for every deceased Muslim. The janazah prayer is typically performed at a mosque or outdoor prayer area, with the congregation standing in rows behind the imam. Islamic tradition calls for burial as soon as possible after death, ideally within 24 hours. The body is washed (ghusl), wrapped in white cloth (kafan), and buried without a casket in many traditions, facing Mecca.' },
      { name: 'Antyesti (Hindu)', id: 'antyesti', definition: 'The Hindu funeral rite, also known as the last sacrifice, traditionally involves cremation of the deceased. The eldest son or closest male relative traditionally lights the funeral pyre. In the United States, Hindu families use modern crematories and may adapt traditional rituals accordingly. The ashes are often scattered in a sacred body of water, such as the Ganges River for families who travel to India, or in a local river or ocean.' },
      { name: 'Funeral Mass', id: 'funeral-mass', definition: 'A Catholic liturgical service celebrated for a deceased person, typically in a Catholic church. The funeral Mass includes specific prayers, readings from Scripture, the celebration of the Eucharist (communion), and the final commendation and farewell. A funeral Mass is distinct from a memorial Mass in that the body or cremated remains are present. A priest must preside over the Mass.' },
      { name: 'Memorial Mass', id: 'memorial-mass', definition: 'A Catholic Mass offered for the repose of the soul of a deceased person, celebrated without the body or cremated remains present. A memorial Mass may be held days, weeks, or even years after the death and is often requested on anniversaries or other significant dates. Families typically make a stipend offering (donation) to the parish when requesting a memorial Mass.' },
      { name: 'Rosary Service', id: 'rosary-service', definition: 'A prayer service common in Catholic funeral traditions in which the rosary is recited in the presence of the deceased, usually during a wake or vigil the evening before the funeral Mass. The rosary service is led by a deacon, lay minister, or family member and includes the recitation of prayers on rosary beads, interspersed with readings and hymns. It provides a structured opportunity for communal prayer.' },
      { name: 'Repast', id: 'repast', definition: 'A meal served to family and guests after a funeral or memorial service. The repast, sometimes called a mercy meal, reception, or funeral luncheon, provides an opportunity for mourners to gather, share memories, and support one another in a less formal setting. Repasts may be held at the family\'s home, a church hall, restaurant, or community center. Some funeral homes offer on-site reception facilities.' },
      { name: 'Reception', id: 'reception', definition: 'A social gathering held after a funeral or memorial service where attendees share food, conversation, and memories. Similar to a repast but often used in non-religious or secular contexts. Receptions may be casual or formal and can include catered food, beverages, photo displays, and personal mementos of the deceased. Some families prefer to call this gathering a celebration rather than a reception.' },
      { name: 'Bereavement', id: 'bereavement', definition: 'The state of having lost a close person to death. Bereavement encompasses the period of mourning and adjustment that follows a death. In workplace contexts, bereavement leave refers to paid or unpaid time off granted to employees after the death of a family member, typically three to five days for immediate family. There is no federal bereavement leave law in the United States, and policies vary by employer.' },
    ],
  },
  {
    title: 'Timeline and Process',
    id: 'timeline-process',
    terms: [
      { name: 'Pre-Planning', id: 'pre-planning', definition: 'The process of making funeral arrangements in advance of death, while a person is still living and able to express their wishes. Pre-planning can range from simply documenting preferences (type of service, burial vs. cremation, songs, readings) to signing a pre-need contract and prepaying for services. Pre-planning reduces the burden on family members, ensures personal wishes are known, and can lock in current prices at some funeral homes.' },
      { name: 'At-Need', id: 'at-need', definition: 'A term used in the funeral industry to describe the period immediately following a death, when funeral arrangements must be made. At-need arrangements are made under time pressure, typically within 24 to 72 hours. This contrasts with pre-need planning, which is done in advance. Families making at-need arrangements benefit from requesting General Price Lists from multiple providers and having a support person present during the arrangement conference.' },
      { name: 'Time of Death', id: 'time-of-death', definition: 'The specific date and time at which a person is officially pronounced dead by a qualified individual, typically a physician, registered nurse, coroner, or paramedic. The time of death is recorded on the death certificate. If a person dies at home under hospice care, the hospice nurse is usually called to pronounce death and begin the documentation process.' },
      { name: 'Death Pronouncement', id: 'death-pronouncement', definition: 'The formal declaration by a licensed medical professional that a person has died. The pronouncement establishes the legal time of death and must occur before a funeral home can take custody of the body. In a hospital, a physician typically makes the pronouncement. For deaths at home, families should call hospice (if enrolled) or 911. The pronouncing professional completes the relevant section of the death certificate.' },
      { name: 'Body Donation', id: 'body-donation', definition: 'The donation of a deceased person\'s entire body to a medical school, research institution, or body donation program for the purpose of medical education, surgical training, or scientific research. Body donation is arranged in advance through a specific program and typically covers all transportation and cremation costs (the remains are cremated and returned to the family after use, usually within one to three years). This can eliminate or significantly reduce funeral costs for the family.' },
      { name: 'Anatomical Donation', id: 'anatomical-donation', definition: 'A broader term encompassing the donation of a body, organs, or tissues for medical purposes. Anatomical donation includes whole body donation to medical schools as well as organ donation (heart, lungs, kidneys) and tissue donation (corneas, skin, bone). Organ and tissue donation occurs shortly after death and does not prevent a traditional funeral, while whole body donation means the body is not available for a funeral service.' },
      { name: 'Whole Body Burial', id: 'whole-body-burial', definition: 'A term emphasizing that the entire, intact body is buried in the ground, as distinguished from cremation or partial body donation. Whole body burial is the traditional form of burial practiced for centuries. The term has become more common as alternatives to traditional burial (cremation, aquamation, body donation) have increased in popularity and families want to clearly specify their preference for full burial.' },
      { name: 'Repatriation', id: 'repatriation', definition: 'The process of returning a deceased person\'s remains to their home country or home state from the location where death occurred. Repatriation involves significant coordination between funeral providers, government agencies, airlines, and possibly consular offices. International repatriation costs typically range from $5,000 to $20,000 depending on the distance and countries involved. Embalming is usually required for international transport.' },
      { name: 'Disposition', id: 'disposition', definition: 'The final handling of a deceased person\'s remains. The major forms of disposition are burial (in-ground or above-ground), cremation, aquamation, and body donation. The choice of disposition is typically made by the next of kin or as specified in the deceased person\'s pre-arranged plans. State laws may impose requirements on the timing and method of disposition.' },
      { name: 'Final Disposition', id: 'final-disposition', definition: 'The ultimate placement or dispersal of a deceased person\'s remains. For burial, final disposition is interment in a cemetery plot, crypt, or mausoleum. For cremation, final disposition may be placement in a columbarium niche, burial of the urn, scattering, or retention by the family. The funeral home or crematory records the method and location of final disposition on official documents.' },
    ],
  },
];

const allTerms = categories.flatMap(c => c.terms);

export default function GlossaryPage() {
  const definedTermSetSchema = {
    "@context": "https://schema.org",
    "@type": "DefinedTermSet",
    "name": "Funeral Industry Glossary",
    "description": "A comprehensive glossary of 115 funeral, cremation, and burial terms defined in plain language by Evermore Directory.",
    "url": "https://funeralhomedirectories.com/glossary",
    "hasDefinedTerm": allTerms.map(term => ({
      "@type": "DefinedTerm",
      "name": term.name,
      "description": term.definition,
      "inDefinedTermSet": "https://funeralhomedirectories.com/glossary",
      "url": `https://funeralhomedirectories.com/glossary#${term.id}`
    }))
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Funeral Industry Glossary: 115 Terms Explained in Plain Language",
    "author": { "@type": "Person", "name": "Terry Feely", "url": "https://funeralhomedirectories.com/about" },
    "publisher": { "@type": "Organization", "name": "Evermore Directory", "url": "https://funeralhomedirectories.com" },
    "datePublished": "2026-05-15",
    "dateModified": "2026-05-15",
    "url": "https://funeralhomedirectories.com/glossary"
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://funeralhomedirectories.com" },
      { "@type": "ListItem", "position": 2, "name": "Glossary" }
    ]
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(definedTermSetSchema) }} />
      <Navigation />

      <main className="min-h-screen bg-white">
        <div className="max-w-5xl mx-auto px-4 py-12">
          <nav className="mb-6 text-sm">
            <Link href="/" className="text-slate-600 hover:text-slate-800">Home</Link>
            <span className="mx-2 text-gray-400">/</span>
            <span className="text-gray-600">Glossary</span>
          </nav>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-3">
            Funeral Industry Glossary: 115 Terms Explained
          </h1>
          <p className="text-sm text-gray-500 mb-8">
            By <Link href="/about" className="text-slate-600 hover:text-slate-800">Terry Feely</Link>, Former Firefighter and Paramedic &middot; Last Updated May 2026
          </p>

          <section className="mb-10">
            <p className="text-gray-700 text-lg leading-relaxed mb-4">
              This glossary defines 115 funeral industry terms in plain language, covering cremation, burial, legal requirements, ceremony types, service components, professional roles, important documents, cultural traditions, and the funeral planning timeline. Each definition includes real-world context such as typical costs, legal requirements, and practical guidance to help families make informed decisions. Published by Evermore Directory, the most comprehensive funeral home directory in the United States with over 5,100 verified providers.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Whether you are pre-planning your own arrangements, helping a family member, or making decisions after a recent loss, understanding these terms will help you communicate with funeral professionals, compare pricing, and exercise your rights under the FTC Funeral Rule.
            </p>
          </section>

          {/* Table of Contents */}
          <section className="mb-12 bg-slate-50 rounded-lg p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Categories</h2>
            <div className="grid md:grid-cols-3 gap-2">
              {categories.map((cat, i) => (
                <a key={cat.id} href={`#${cat.id}`} className="text-slate-600 hover:text-slate-800 text-sm py-1">
                  {i + 1}. {cat.title} ({cat.terms.length})
                </a>
              ))}
            </div>
            <p className="text-xs text-gray-400 mt-4">{allTerms.length} terms total</p>
          </section>

          {/* Term Categories */}
          {categories.map((category, catIndex) => (
            <section key={category.id} id={category.id} className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-3 border-b border-gray-200">
                {catIndex + 1}. {category.title}
              </h2>
              <div className="space-y-6">
                {category.terms.map(term => (
                  <div key={term.id} id={term.id} className="scroll-mt-8">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{term.name}</h3>
                    <p className="text-gray-600 leading-relaxed">{term.definition}</p>
                  </div>
                ))}
              </div>
            </section>
          ))}

          {/* Related Reading */}
          <section className="mb-10 bg-slate-50 rounded-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Related Resources</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <Link href="/direct-cremation" className="block p-4 bg-white border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
                <h3 className="text-lg font-semibold text-slate-600 mb-1">Direct Cremation Guide</h3>
                <p className="text-sm text-gray-600">State-by-state pricing from 5,100+ providers.</p>
              </Link>
              <Link href="/funeral-costs" className="block p-4 bg-white border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
                <h3 className="text-lg font-semibold text-slate-600 mb-1">Funeral Costs by State</h3>
                <p className="text-sm text-gray-600">Compare funeral and cremation costs across all 50 states.</p>
              </Link>
              <Link href="/about" className="block p-4 bg-white border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
                <h3 className="text-lg font-semibold text-slate-600 mb-1">About Evermore Directory</h3>
                <p className="text-sm text-gray-600">Learn about our mission and methodology.</p>
              </Link>
              <Link href="/contact" className="block p-4 bg-white border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
                <h3 className="text-lg font-semibold text-slate-600 mb-1">Contact Us</h3>
                <p className="text-sm text-gray-600">Questions, corrections, or listing inquiries.</p>
              </Link>
            </div>
          </section>

          <div className="text-center text-sm text-gray-400 mb-4">
            <p>No popups. No pressure. Built for families.</p>
          </div>
          <div className="text-center text-sm text-gray-400">
            <p>Written by <strong className="text-gray-500">Terry Feely</strong>, former firefighter and paramedic with firsthand experience helping families navigate end of life decisions.</p>
          </div>
        </div>
      </main>
    </>
  );
}
