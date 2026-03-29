import { Zap, HeartHandshake, Clock, Award } from "lucide-react";

const specials = [
  { icon: Zap, title: "Speed to Results", desc: "Most clients see measurable improvements within the first 14 days of working with us." },
  { icon: HeartHandshake, title: "Partnership Approach", desc: "We don't just manage your ads—we become an extension of your marketing team." },
  { icon: Clock, title: "24/7 Monitoring", desc: "Your campaigns are monitored around the clock to catch opportunities and prevent wasted spend." },
  { icon: Award, title: "Proven Track Record", desc: "Over $10M+ in managed ad spend with a 4.2x average ROAS across our client portfolio." },
];

const WhatMakesUsSpecial = () => (
  <section className="py-20 lg:py-28 surface-cool">
    <div className="container max-w-6xl">
      <div className="text-center mb-16">
        <span className="text-sm font-semibold text-primary uppercase tracking-wider">Why Choose Us</span>
        <h2 className="text-3xl md:text-6xl font-black mt-3 mb-4">
          What Makes Us <span className="gradient-text">Different</span>
        </h2>
        <p className="text-muted-foreground max-w-xl mx-auto">
          We're not your average agency. Here's what sets us apart.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {specials.map((s) => (
          <div key={s.title} className="flex hover:shadow-card-hover  gap-5 p-6 rounded-xl bg-card shadow-card">
            <div className="flex-shrink-0 w-14 h-14 rounded-xl gradient-hero flex items-center justify-center">
              <s.icon className="w-7 h-7 text-primary-foreground" />
            </div>
            <div>
              <h3 className="font-bold text-lg mb-1">{s.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default WhatMakesUsSpecial;
