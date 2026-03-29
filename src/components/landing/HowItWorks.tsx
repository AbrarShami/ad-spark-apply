import { ClipboardCheck, Search, Rocket, BarChart3 } from "lucide-react";

const steps = [
  {
    icon: ClipboardCheck,
    title: "Apply & Qualify",
    desc: "Fill out our quick application form so we can understand your business and goals.",
  },
  {
    icon: Search,
    title: "Strategy Session",
    desc: "We conduct a deep-dive audit of your current ads and build a custom strategy.",
  },
  {
    icon: Rocket,
    title: "Launch & Scale",
    desc: "Our team launches optimized campaigns designed to generate leads and sales.",
  },
  {
    icon: BarChart3,
    title: "Optimize & Report",
    desc: "We continuously refine your campaigns and provide transparent weekly reports.",
  },
];

const HowItWorks = () => (
  <section id="how-it-works" className="py-20 lg:py-28 surface-cool">
    <div className="container max-w-6xl">
      <div className="text-center mb-16">
        <span className="text-sm font-semibold text-primary uppercase tracking-wider">How It Works</span>
        <h2 className="text-3xl md:text-6xl font-black mt-3 mb-4">
          Four Simple Steps to <span className="gradient-text">Better Ads</span>
        </h2>
        <p className="text-muted-foreground max-w-xl mx-auto">
          Our proven process takes the guesswork out of Facebook advertising.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {steps.map((s, i) => (
          <div key={s.title} className="relative  bg-card rounded-xl p-6 shadow-card text-center group hover:shadow-card-hover transition-shadow">
            <div className="absolute -top-3 -left-2 w-8 h-8 rounded-full gradient-hero flex items-center justify-center text-sm font-bold text-primary-foreground">
              {i + 1}
            </div>
            <div className="w-14 h-14 rounded-xl bg-accent flex items-center justify-center mx-auto mb-4">
              <s.icon className="w-7 h-7 text-primary" />
            </div>
            <h3 className="font-bold text-lg mb-2">{s.title}</h3>
            <p className="text-sm text-muted-foreground">{s.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default HowItWorks;
