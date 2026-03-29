import { TrendingUp } from "lucide-react";

const cases = [
  {
    company: "Bloom Beauty Co.",
    industry: "E-commerce / Beauty",
    challenge: "High CPA and low conversion rates from previous agency.",
    result: "Reduced CPA by 62% and scaled monthly revenue from $18K to $85K in 4 months.",
    metrics: [
      { label: "ROAS", value: "5.3x" },
      { label: "CPA Reduction", value: "62%" },
      { label: "Revenue Growth", value: "372%" },
    ],
  },
  {
    company: "FitLife Supplements",
    industry: "Health & Wellness",
    challenge: "Inconsistent lead flow and no clear funnel strategy.",
    result: "Built a full-funnel system generating 1,200+ qualified leads per month at $4.80 CPL.",
    metrics: [
      { label: "Leads/Month", value: "1,200+" },
      { label: "CPL", value: "$4.80" },
      { label: "Conversion Rate", value: "8.4%" },
    ],
  },
  {
    company: "Park Dental Group",
    industry: "Local Services",
    challenge: "Needed consistent new patient bookings in a competitive market.",
    result: "Generated 45+ new patient appointments per month with a $28 cost per booking.",
    metrics: [
      { label: "Bookings/Month", value: "45+" },
      { label: "Cost/Booking", value: "$28" },
      { label: "ROI", value: "12x" },
    ],
  },
];

const CaseStudies = () => (
  <section className="py-20 lg:py-28 surface-warm">
    <div className="container max-w-6xl">
      <div className="text-center mb-16">
        <span className="text-sm font-semibold text-primary uppercase tracking-wider">Case Studies</span>
        <h2 className="text-3xl md:text-6xl font-black mt-3 mb-4">
          Real Results for <span className="gradient-text">Real Businesses</span>
        </h2>
        <p className="text-muted-foreground max-w-xl mx-auto">
          See how we've helped businesses like yours achieve breakthrough growth.
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {cases.map((c) => (
          <div key={c.company} className="bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-shadow">
            <div className="gradient-hero p-6">
              <TrendingUp className="w-8 h-8 text-primary-foreground mb-2" />
              <h3 className="text-xl font-bold text-primary-foreground">{c.company}</h3>
              <p className="text-primary-foreground/70 text-sm">{c.industry}</p>
            </div>
            <div className="p-6">
              <div className="mb-4">
                <p className="text-xs font-semibold uppercase text-muted-foreground mb-1">Challenge</p>
                <p className="text-sm text-foreground">{c.challenge}</p>
              </div>
              <div className="mb-6">
                <p className="text-xs font-semibold uppercase text-muted-foreground mb-1">Result</p>
                <p className="text-sm text-foreground">{c.result}</p>
              </div>
              <div className="grid grid-cols-3 gap-3">
                {c.metrics.map((m) => (
                  <div key={m.label} className="text-center p-3 rounded-lg bg-accent">
                    <p className="text-lg font-black text-primary">{m.value}</p>
                    <p className="text-[10px] uppercase text-muted-foreground font-medium">{m.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default CaseStudies;
