// NFDA 2024 Cremation and Burial Report — national medians adjusted for regional cost of living.
// Single source of truth for /funeral-costs pages.

export type StatePricing = {
  directCremation: string;
  cremationWithMemorial: string;
  traditionalBurial: string;
  fullFuneralWithViewing: string;
  note: string;
};

export const statePricing: Record<string, StatePricing> = {
  // High cost states (+20-25%)
  "hawaii": { directCremation: "$2,600-$3,400", cremationWithMemorial: "$7,500-$9,500", traditionalBurial: "$9,800-$12,500", fullFuneralWithViewing: "$12,000-$15,000", note: "Hawaii's funeral costs are among the highest in the nation due to island logistics and cost of living." },
  "california": { directCremation: "$2,400-$3,200", cremationWithMemorial: "$7,200-$9,000", traditionalBurial: "$9,500-$12,000", fullFuneralWithViewing: "$11,500-$14,500", note: "California funeral costs vary significantly by region, with the Bay Area and Los Angeles typically running higher than rural areas." },
  "new-york": { directCremation: "$2,400-$3,200", cremationWithMemorial: "$7,200-$9,000", traditionalBurial: "$9,500-$12,000", fullFuneralWithViewing: "$11,500-$14,500", note: "New York City metro area costs are significantly higher than upstate New York." },
  "alaska": { directCremation: "$2,400-$3,200", cremationWithMemorial: "$7,200-$9,000", traditionalBurial: "$9,500-$12,000", fullFuneralWithViewing: "$11,500-$14,500", note: "Remote location logistics contribute to Alaska's higher funeral costs." },
  // High cost states (+15%)
  "massachusetts": { directCremation: "$2,300-$3,000", cremationWithMemorial: "$6,900-$8,500", traditionalBurial: "$9,000-$11,500", fullFuneralWithViewing: "$11,000-$13,500", note: "" },
  "connecticut": { directCremation: "$2,300-$3,000", cremationWithMemorial: "$6,900-$8,500", traditionalBurial: "$9,000-$11,500", fullFuneralWithViewing: "$11,000-$13,500", note: "" },
  "new-jersey": { directCremation: "$2,300-$3,000", cremationWithMemorial: "$6,900-$8,500", traditionalBurial: "$9,000-$11,500", fullFuneralWithViewing: "$11,000-$13,500", note: "" },
  "washington": { directCremation: "$2,300-$3,000", cremationWithMemorial: "$6,900-$8,500", traditionalBurial: "$9,000-$11,500", fullFuneralWithViewing: "$11,000-$13,500", note: "" },
  "oregon": { directCremation: "$2,300-$3,000", cremationWithMemorial: "$6,900-$8,500", traditionalBurial: "$9,000-$11,500", fullFuneralWithViewing: "$11,000-$13,500", note: "" },
  // Medium-high states (+10%)
  "colorado": { directCremation: "$2,200-$2,800", cremationWithMemorial: "$6,600-$8,000", traditionalBurial: "$8,700-$11,000", fullFuneralWithViewing: "$10,500-$13,000", note: "" },
  "illinois": { directCremation: "$2,200-$2,800", cremationWithMemorial: "$6,600-$8,000", traditionalBurial: "$8,700-$11,000", fullFuneralWithViewing: "$10,500-$13,000", note: "" },
  "maryland": { directCremation: "$2,200-$2,800", cremationWithMemorial: "$6,600-$8,000", traditionalBurial: "$8,700-$11,000", fullFuneralWithViewing: "$10,500-$13,000", note: "" },
  "minnesota": { directCremation: "$2,200-$2,800", cremationWithMemorial: "$6,600-$8,000", traditionalBurial: "$8,700-$11,000", fullFuneralWithViewing: "$10,500-$13,000", note: "" },
  "new-hampshire": { directCremation: "$2,200-$2,800", cremationWithMemorial: "$6,600-$8,000", traditionalBurial: "$8,700-$11,000", fullFuneralWithViewing: "$10,500-$13,000", note: "" },
  "rhode-island": { directCremation: "$2,200-$2,800", cremationWithMemorial: "$6,600-$8,000", traditionalBurial: "$8,700-$11,000", fullFuneralWithViewing: "$10,500-$13,000", note: "" },
  "vermont": { directCremation: "$2,200-$2,800", cremationWithMemorial: "$6,600-$8,000", traditionalBurial: "$8,700-$11,000", fullFuneralWithViewing: "$10,500-$13,000", note: "" },
  "virginia": { directCremation: "$2,200-$2,800", cremationWithMemorial: "$6,600-$8,000", traditionalBurial: "$8,700-$11,000", fullFuneralWithViewing: "$10,500-$13,000", note: "" },
  "delaware": { directCremation: "$2,200-$2,800", cremationWithMemorial: "$6,600-$8,000", traditionalBurial: "$8,700-$11,000", fullFuneralWithViewing: "$10,500-$13,000", note: "" },
  // Medium states (national average)
  "texas": { directCremation: "$1,800-$2,800", cremationWithMemorial: "$5,800-$7,500", traditionalBurial: "$7,500-$10,000", fullFuneralWithViewing: "$9,000-$12,000", note: "" },
  "florida": { directCremation: "$1,800-$2,800", cremationWithMemorial: "$5,800-$7,500", traditionalBurial: "$7,500-$10,000", fullFuneralWithViewing: "$9,000-$12,000", note: "" },
  "georgia": { directCremation: "$1,800-$2,800", cremationWithMemorial: "$5,800-$7,500", traditionalBurial: "$7,500-$10,000", fullFuneralWithViewing: "$9,000-$12,000", note: "" },
  "arizona": { directCremation: "$1,800-$2,800", cremationWithMemorial: "$5,800-$7,500", traditionalBurial: "$7,500-$10,000", fullFuneralWithViewing: "$9,000-$12,000", note: "" },
  "north-carolina": { directCremation: "$1,800-$2,800", cremationWithMemorial: "$5,800-$7,500", traditionalBurial: "$7,500-$10,000", fullFuneralWithViewing: "$9,000-$12,000", note: "" },
  "pennsylvania": { directCremation: "$1,800-$2,800", cremationWithMemorial: "$5,800-$7,500", traditionalBurial: "$7,500-$10,000", fullFuneralWithViewing: "$9,000-$12,000", note: "" },
  "ohio": { directCremation: "$1,800-$2,800", cremationWithMemorial: "$5,800-$7,500", traditionalBurial: "$7,500-$10,000", fullFuneralWithViewing: "$9,000-$12,000", note: "" },
  "michigan": { directCremation: "$1,800-$2,800", cremationWithMemorial: "$5,800-$7,500", traditionalBurial: "$7,500-$10,000", fullFuneralWithViewing: "$9,000-$12,000", note: "" },
  "wisconsin": { directCremation: "$1,800-$2,800", cremationWithMemorial: "$5,800-$7,500", traditionalBurial: "$7,500-$10,000", fullFuneralWithViewing: "$9,000-$12,000", note: "" },
  "missouri": { directCremation: "$1,800-$2,800", cremationWithMemorial: "$5,800-$7,500", traditionalBurial: "$7,500-$10,000", fullFuneralWithViewing: "$9,000-$12,000", note: "" },
  "indiana": { directCremation: "$1,800-$2,800", cremationWithMemorial: "$5,800-$7,500", traditionalBurial: "$7,500-$10,000", fullFuneralWithViewing: "$9,000-$12,000", note: "" },
  "nevada": { directCremation: "$1,800-$2,800", cremationWithMemorial: "$5,800-$7,500", traditionalBurial: "$7,500-$10,000", fullFuneralWithViewing: "$9,000-$12,000", note: "" },
  "new-mexico": { directCremation: "$1,800-$2,800", cremationWithMemorial: "$5,800-$7,500", traditionalBurial: "$7,500-$10,000", fullFuneralWithViewing: "$9,000-$12,000", note: "" },
  // Low-medium states (-10%)
  "tennessee": { directCremation: "$1,500-$2,500", cremationWithMemorial: "$5,000-$6,800", traditionalBurial: "$6,800-$9,000", fullFuneralWithViewing: "$8,000-$11,000", note: "" },
  "kentucky": { directCremation: "$1,500-$2,500", cremationWithMemorial: "$5,000-$6,800", traditionalBurial: "$6,800-$9,000", fullFuneralWithViewing: "$8,000-$11,000", note: "" },
  "south-carolina": { directCremation: "$1,500-$2,500", cremationWithMemorial: "$5,000-$6,800", traditionalBurial: "$6,800-$9,000", fullFuneralWithViewing: "$8,000-$11,000", note: "" },
  "utah": { directCremation: "$1,500-$2,500", cremationWithMemorial: "$5,000-$6,800", traditionalBurial: "$6,800-$9,000", fullFuneralWithViewing: "$8,000-$11,000", note: "" },
  "montana": { directCremation: "$1,500-$2,500", cremationWithMemorial: "$5,000-$6,800", traditionalBurial: "$6,800-$9,000", fullFuneralWithViewing: "$8,000-$11,000", note: "" },
  "wyoming": { directCremation: "$1,500-$2,500", cremationWithMemorial: "$5,000-$6,800", traditionalBurial: "$6,800-$9,000", fullFuneralWithViewing: "$8,000-$11,000", note: "" },
  "north-dakota": { directCremation: "$1,500-$2,500", cremationWithMemorial: "$5,000-$6,800", traditionalBurial: "$6,800-$9,000", fullFuneralWithViewing: "$8,000-$11,000", note: "" },
  "south-dakota": { directCremation: "$1,500-$2,500", cremationWithMemorial: "$5,000-$6,800", traditionalBurial: "$6,800-$9,000", fullFuneralWithViewing: "$8,000-$11,000", note: "" },
  "nebraska": { directCremation: "$1,500-$2,500", cremationWithMemorial: "$5,000-$6,800", traditionalBurial: "$6,800-$9,000", fullFuneralWithViewing: "$8,000-$11,000", note: "" },
  "kansas": { directCremation: "$1,500-$2,500", cremationWithMemorial: "$5,000-$6,800", traditionalBurial: "$6,800-$9,000", fullFuneralWithViewing: "$8,000-$11,000", note: "" },
  // Low cost states (-15-20%)
  "alabama": { directCremation: "$1,200-$2,200", cremationWithMemorial: "$4,500-$6,200", traditionalBurial: "$6,200-$8,500", fullFuneralWithViewing: "$7,500-$10,000", note: "Alabama has some of the most affordable funeral costs in the nation." },
  "mississippi": { directCremation: "$1,200-$2,200", cremationWithMemorial: "$4,500-$6,200", traditionalBurial: "$6,200-$8,500", fullFuneralWithViewing: "$7,500-$10,000", note: "Mississippi has some of the most affordable funeral costs in the nation." },
  "arkansas": { directCremation: "$1,200-$2,200", cremationWithMemorial: "$4,500-$6,200", traditionalBurial: "$6,200-$8,500", fullFuneralWithViewing: "$7,500-$10,000", note: "" },
  "west-virginia": { directCremation: "$1,200-$2,200", cremationWithMemorial: "$4,500-$6,200", traditionalBurial: "$6,200-$8,500", fullFuneralWithViewing: "$7,500-$10,000", note: "" },
  "louisiana": { directCremation: "$1,200-$2,200", cremationWithMemorial: "$4,500-$6,200", traditionalBurial: "$6,200-$8,500", fullFuneralWithViewing: "$7,500-$10,000", note: "" },
  "oklahoma": { directCremation: "$1,200-$2,200", cremationWithMemorial: "$4,500-$6,200", traditionalBurial: "$6,200-$8,500", fullFuneralWithViewing: "$7,500-$10,000", note: "" },
  "idaho": { directCremation: "$1,200-$2,200", cremationWithMemorial: "$4,500-$6,200", traditionalBurial: "$6,200-$8,500", fullFuneralWithViewing: "$7,500-$10,000", note: "" },
  "iowa": { directCremation: "$1,200-$2,200", cremationWithMemorial: "$4,500-$6,200", traditionalBurial: "$6,200-$8,500", fullFuneralWithViewing: "$7,500-$10,000", note: "" },
  "maine": { directCremation: "$1,200-$2,200", cremationWithMemorial: "$4,500-$6,200", traditionalBurial: "$6,200-$8,500", fullFuneralWithViewing: "$7,500-$10,000", note: "" },
};

// State slug → { name, abbr }
export const stateMeta: Record<string, { name: string; abbr: string }> = {
  "alabama": { name: "Alabama", abbr: "al" },
  "alaska": { name: "Alaska", abbr: "ak" },
  "arizona": { name: "Arizona", abbr: "az" },
  "arkansas": { name: "Arkansas", abbr: "ar" },
  "california": { name: "California", abbr: "ca" },
  "colorado": { name: "Colorado", abbr: "co" },
  "connecticut": { name: "Connecticut", abbr: "ct" },
  "delaware": { name: "Delaware", abbr: "de" },
  "florida": { name: "Florida", abbr: "fl" },
  "georgia": { name: "Georgia", abbr: "ga" },
  "hawaii": { name: "Hawaii", abbr: "hi" },
  "idaho": { name: "Idaho", abbr: "id" },
  "illinois": { name: "Illinois", abbr: "il" },
  "indiana": { name: "Indiana", abbr: "in" },
  "iowa": { name: "Iowa", abbr: "ia" },
  "kansas": { name: "Kansas", abbr: "ks" },
  "kentucky": { name: "Kentucky", abbr: "ky" },
  "louisiana": { name: "Louisiana", abbr: "la" },
  "maine": { name: "Maine", abbr: "me" },
  "maryland": { name: "Maryland", abbr: "md" },
  "massachusetts": { name: "Massachusetts", abbr: "ma" },
  "michigan": { name: "Michigan", abbr: "mi" },
  "minnesota": { name: "Minnesota", abbr: "mn" },
  "mississippi": { name: "Mississippi", abbr: "ms" },
  "missouri": { name: "Missouri", abbr: "mo" },
  "montana": { name: "Montana", abbr: "mt" },
  "nebraska": { name: "Nebraska", abbr: "ne" },
  "nevada": { name: "Nevada", abbr: "nv" },
  "new-hampshire": { name: "New Hampshire", abbr: "nh" },
  "new-jersey": { name: "New Jersey", abbr: "nj" },
  "new-mexico": { name: "New Mexico", abbr: "nm" },
  "new-york": { name: "New York", abbr: "ny" },
  "north-carolina": { name: "North Carolina", abbr: "nc" },
  "north-dakota": { name: "North Dakota", abbr: "nd" },
  "ohio": { name: "Ohio", abbr: "oh" },
  "oklahoma": { name: "Oklahoma", abbr: "ok" },
  "oregon": { name: "Oregon", abbr: "or" },
  "pennsylvania": { name: "Pennsylvania", abbr: "pa" },
  "rhode-island": { name: "Rhode Island", abbr: "ri" },
  "south-carolina": { name: "South Carolina", abbr: "sc" },
  "south-dakota": { name: "South Dakota", abbr: "sd" },
  "tennessee": { name: "Tennessee", abbr: "tn" },
  "texas": { name: "Texas", abbr: "tx" },
  "utah": { name: "Utah", abbr: "ut" },
  "vermont": { name: "Vermont", abbr: "vt" },
  "virginia": { name: "Virginia", abbr: "va" },
  "washington": { name: "Washington", abbr: "wa" },
  "west-virginia": { name: "West Virginia", abbr: "wv" },
  "wisconsin": { name: "Wisconsin", abbr: "wi" },
  "wyoming": { name: "Wyoming", abbr: "wy" },
};

export const allStateSlugs = Object.keys(stateMeta);
