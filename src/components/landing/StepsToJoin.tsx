const steps = [
  { num: "01", title: "Submit Your Application", desc: "Fill out our quick qualifying form so we can learn about your business and advertising goals." },
  { num: "02", title: "Discovery Call", desc: "If you're a good fit, we'll schedule a free strategy call to discuss your needs in detail." },
  { num: "03", title: "Onboarding & Setup", desc: "We set up tracking, audiences, creatives, and launch your first optimized campaigns." },
  { num: "04", title: "Growth & Scaling", desc: "Watch your campaigns perform while we continuously optimize for maximum ROI." },
];

const StepsToJoin = () => (
  <section className="py-20 lg:py-28">
    <div className="container max-w-4xl">
      <div className="text-center mb-16">
        <span className="text-sm font-semibold text-primary uppercase tracking-wider">Get Started</span>
        <h2 className="text-3xl md:text-6xl font-black mt-3 mb-4">
          Steps to <span className="gradient-text">Join Us</span>
        </h2>
        <p className="text-muted-foreground max-w-xl mx-auto">
          Getting started is easy. Here's your roadmap to better ads.
        </p>
      </div>

      <div className="space-y-6">
        {steps.map((s, i) => (
          <div key={s.num} className="flex shadow-card hover:shadow-card-hover gap-6 items-start p-6 rounded-xl border border-border hover:border-primary/30 transition-colors">
            <span className="text-4xl font-black gradient-text leading-none">{s.num}</span>
            <div>
              <h3 className="font-bold text-lg mb-1">{s.title}</h3>
              <p className="text-sm text-muted-foreground">{s.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default StepsToJoin;
