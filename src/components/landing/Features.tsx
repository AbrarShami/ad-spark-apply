import { Target, TrendingUp, Users, Layers, PieChart, Shield } from "lucide-react";

const features = [
  { icon: Target, title: "Precision Targeting", desc: "We leverage advanced audience research and lookalike modeling to reach your ideal customers." },
  { icon: TrendingUp, title: "Conversion Optimization", desc: "Every campaign is optimized for conversions, not vanity metrics—real results that matter." },
  { icon: Users, title: "Dedicated Account Manager", desc: "You get a personal strategist who knows your brand inside and out." },
  { icon: Layers, title: "Full-Funnel Strategy", desc: "From awareness to retargeting to conversion—we cover every stage of the buyer journey." },
  { icon: PieChart, title: "Transparent Reporting", desc: "Weekly performance reports with clear insights and actionable recommendations." },
  { icon: Shield, title: "Ad Account Safety", desc: "We follow Facebook's best practices to keep your account compliant and protected." },
];

const Features = () => (
  <section id="features" className="py-20 bg-gradient lg:py-28">
    <div className="container max-w-6xl">
      <div className="text-center mb-16">
        <span className="text-sm font-semibold text-primary uppercase tracking-wider">Features</span>
        <h2 className="text-3xl md:text-6xl font-black mt-3 mb-4">
          Everything You Need to <span className="gradient-text">Win with Ads</span>
        </h2>
        <p className="text-muted-foreground max-w-xl mx-auto">
          Our comprehensive service handles every aspect of your Facebook advertising.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((f) => (
          <div key={f.title} className="group shadow-2xl p-6 rounded-xl border border-border hover:border-primary/30 bg-card hover:shadow-card-hover transition-all">
            <div className="w-12 h-12 rounded-lg bg-accent flex items-center justify-center mb-4 group-hover:gradient-hero group-hover:text-primary-foreground transition-all">
              <f.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground" />
            </div>
            <h3 className="font-bold text-lg mb-2">{f.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Features;
