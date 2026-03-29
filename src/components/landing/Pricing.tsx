import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: "$997",
    period: "/month",
    desc: "Perfect for small businesses just getting started with Facebook ads.",
    features: ["Up to $3K/mo ad spend", "1 campaign", "Bi-weekly reports", "Email support", "Basic audience targeting"],
    popular: false,
  },
  {
    name: "Growth",
    price: "$1,997",
    period: "/month",
    desc: "Ideal for growing brands ready to scale their advertising.",
    features: ["Up to $10K/mo ad spend", "3 campaigns", "Weekly reports", "Priority support", "Advanced audience research", "A/B creative testing"],
    popular: true,
  },
  {
    name: "Scale",
    price: "$3,497",
    period: "/month",
    desc: "For established businesses with aggressive growth targets.",
    features: ["Up to $30K/mo ad spend", "Unlimited campaigns", "Weekly reports & calls", "Dedicated strategist", "Full-funnel strategy", "Custom creative briefs"],
    popular: false,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    desc: "Tailored solutions for high-volume advertisers.",
    features: ["$30K+ ad spend", "Unlimited campaigns", "Daily monitoring", "Dedicated team", "Custom dashboards", "SLA guarantee", "Multi-platform support"],
    popular: false,
  },
];

const Pricing = () => (
  <section id="pricing" className="py-20 lg:py-28 surface-cool">
    <div className="container max-w-7xl">
      <div className="text-center mb-16">
        <span className="text-sm font-semibold text-primary uppercase tracking-wider">Pricing</span>
        <h2 className="text-3xl md:text-6xl font-black mt-3 mb-4">
          Plans That <span className="gradient-text">Fit Your Growth</span>
        </h2>
        <p className="text-muted-foreground max-w-xl mx-auto">
          Transparent pricing. No hidden fees. Cancel anytime.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {plans.map((p) => (
          <div
            key={p.name}
            className={`relative flex flex-col rounded-2xl p-6 bg-card ${p.popular ? "border-2 border-primary shadow-card-hover" : "border border-border shadow-card"
              }`}
          >
            {p.popular && (
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full gradient-hero text-xs font-bold text-primary-foreground">
                Most Popular
              </span>
            )}
            <h3 className="font-bold text-xl mb-1">{p.name}</h3>
            <div className="flex items-baseline gap-1 mb-2">
              <span className="text-3xl font-black">{p.price}</span>
              <span className="text-muted-foreground text-sm">{p.period}</span>
            </div>
            <p className="text-sm text-muted-foreground mb-6">{p.desc}</p>

            <ul className="space-y-3 mb-8 flex-1">
              {p.features.map((f) => (
                <li key={f} className="flex items-start gap-2 text-sm">
                  <Check className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
                  {f}
                </li>
              ))}
            </ul>

            <Link to="/apply">
              <Button className="w-full" variant={p.popular ? "default" : "outline"}>
                Get Started
              </Button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Pricing;
