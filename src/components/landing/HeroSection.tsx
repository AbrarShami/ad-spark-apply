import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const highlights = [
  "Done-for-you Facebook ad management",
  "Proven strategies that scale revenue",
  "Dedicated ad strategist for your account",
];

const HeroSection = () => (
  <section className="hero-section relative pt-32 pb-20 lg:pt-40 lg:pb-28 xl:pb-28 overflow-hidden">
    {/* Background gradient blob */}
    <div className="absolute inset-0 -z-10">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[600px] rounded-full gradient-hero opacity-[0.07] blur-3xl" />
    </div>

    <div className="container text-center max-w-4xl mx-auto">
      <span className="inline-block px-4 py-1.5 rounded-full bg-accent text-accent-foreground text-sm font-medium mb-6">
        🚀 Facebook Ad Management — Done Right
      </span>

      <h1 className="text-4xl md:text-5xl lg:text-6xl font-white leading-[1.1] mb-6">
        Scale Your Business with{" "}
        <span className="">Expert Facebook Ads</span>
      </h1>

      <p className="text-lg md:text-xl font-white text-muted-foreground max-w-2xl mx-auto mb-8">
        We manage your Facebook & Instagram ad campaigns end-to-end so you can focus on what you do best—running your business.
      </p>

      <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
        <Link to="/apply">
          <Button size="lg" className="gap-2 hover:bg-white hover:text-foreground text-base px-8 py-6 background-none border-2 border-white bg-color-none text-primary font-white">
            Apply to Work With Us <ArrowRight className="w-4 h-4" />
          </Button>
        </Link>
        <a href="#how-it-works">
          <Button size="lg" variant="outline" className="text-base px-8 py-6">
            See How It Works
          </Button>
        </a>
      </div>

      <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
        {highlights.map((h) => (
          <div key={h} className="flex items-center  font-white gap-2 text-sm text-muted-foreground">
            <CheckCircle2 className="w-4 h-4 text-success font-white" />
            {h}
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default HeroSection;
