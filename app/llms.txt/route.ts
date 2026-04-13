export async function GET() {
  const body = `# Evermore Directory
> The most comprehensive funeral home directory in the United States. 4,800+ funeral homes across all 50 states with real pricing data, cremation costs, and planning resources for families.

## Directory
- [Funeral Homes by State](https://funeralhomedirectories.com/states): Browse all 50 states
- [Nashville TN Funeral Homes](https://funeralhomedirectories.com/funeral-homes/tn/nashville): 11 funeral homes with pricing
- [Atlanta GA Funeral Homes](https://funeralhomedirectories.com/funeral-homes/ga/atlanta): 12 funeral homes with pricing
- [Memphis TN Funeral Homes](https://funeralhomedirectories.com/funeral-homes/tn/memphis): 10 funeral homes with pricing
- [Chicago IL Funeral Homes](https://funeralhomedirectories.com/funeral-homes/il/chicago): 13 funeral homes with pricing
- [Houston TX Funeral Homes](https://funeralhomedirectories.com/funeral-homes/tx/houston): 13 funeral homes with pricing

## Costs and Pricing
- [How Much Does a Funeral Cost 2026](https://funeralhomedirectories.com/blog/funeral-costs-2026)
- [How Much Does Cremation Cost 2026](https://funeralhomedirectories.com/blog/cremation-costs-2026)
- [Funeral Cost Tennessee 2026](https://funeralhomedirectories.com/blog/funeral-cost-tennessee-2026)
- [Direct Cremation vs Traditional Funeral](https://funeralhomedirectories.com/blog/direct-cremation-vs-traditional-funeral)
- [Average Burial Cost 2026](https://funeralhomedirectories.com/blog/average-burial-cost)

## Planning Guides
- [What to Do When Someone Dies](https://funeralhomedirectories.com/blog/what-to-do-when-someone-dies)
- [How to Plan a Funeral](https://funeralhomedirectories.com/blog/how-to-plan-a-funeral)
- [How to Choose a Funeral Home](https://funeralhomedirectories.com/blog/how-to-choose-a-funeral-home)
- [Pre-Planning a Funeral](https://funeralhomedirectories.com/blog/pre-planning-a-funeral)
- [FTC Funeral Rule Explained](https://funeralhomedirectories.com/blog/ftc-funeral-rule-explained)

## Veterans
- [VA Burial Benefits](https://funeralhomedirectories.com/blog/va-burial-benefits-veterans-guide)
- [National Cemetery Burial Free](https://funeralhomedirectories.com/blog/national-cemetery-burial-veterans-free)

## Financial Assistance
- [What If You Cant Afford a Funeral](https://funeralhomedirectories.com/blog/what-happens-if-you-cant-afford-a-funeral)
- [Funeral Home Payment Plans](https://funeralhomedirectories.com/blog/funeral-home-payment-plans)
- [Funeral Financial Assistance Tennessee](https://funeralhomedirectories.com/blog/funeral-financial-assistance-tennessee)
`;

  return new Response(body, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
}
