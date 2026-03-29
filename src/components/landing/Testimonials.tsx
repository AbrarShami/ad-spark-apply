import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Mitchell",
    role: "CEO, Bloom Beauty Co.",
    quote: "AdScale Pro transformed our Facebook advertising. We went from burning money to generating a consistent 5x ROAS within 60 days.",
    rating: 5,
  },
  {
    name: "James Rodriguez",
    role: "Founder, FitLife Supplements",
    quote: "Their team is incredibly responsive and strategic. They don't just run ads—they genuinely care about our growth.",
    rating: 5,
  },
  {
    name: "Emily Chen",
    role: "Marketing Director, HomeStyle Decor",
    quote: "We've worked with 3 agencies before. AdScale Pro is the first one that actually delivered on their promises. Highly recommend.",
    rating: 5,
  },
  {
    name: "David Park",
    role: "Owner, Park Dental Group",
    quote: "As a local business, I was skeptical about Facebook ads. They built campaigns that filled my appointment calendar in weeks.",
    rating: 5,
  },
];

const Testimonials = () => (
  <section id="testimonials" className="py-20 lg:py-28 bg-gradient-sky">
    <div className="container max-w-6xl">
      <div className="text-center mb-16">
        <span className="text-sm font-semibold text-primary uppercase tracking-wider">Testimonials</span>
        <h2 className="text-3xl md:text-6xl font-black mt-3 mb-4">
          Trusted by <span className="gradient-text">Growing Brands</span>
        </h2>
        <p className="text-muted-foreground max-w-xl mx-auto">
          Don't take our word for it—hear from the businesses we've helped scale.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 gap-6">
        {testimonials.map((t) => (
          <div key={t.name} className="p-6 rounded-xl border border-border bg-card shadow-card">
            <div className="flex gap-1 mb-4">
              {Array.from({ length: t.rating }).map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <p className="text-foreground mb-6 leading-relaxed italic">"{t.quote}"</p>
            <div>
              <p className="font-bold text-sm">{t.name}</p>
              <p className="text-xs text-muted-foreground">{t.role}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Testimonials;
