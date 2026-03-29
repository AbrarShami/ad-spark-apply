import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CTASection = () => (
  <section className="py-20 lg:py-28">
    <div className="container max-w-4xl">
      <div className="gradient-hero rounded-3xl p-10 md:p-16 text-center">
        <h2 className="text-3xl md:text-4xl font-black text-primary-foreground mb-4">
          Ready to Scale Your Business?
        </h2>
        <p className="text-primary-foreground/80 text-lg max-w-xl mx-auto mb-8">
          Apply now to see if you qualify for our done-for-you Facebook ad management service. Spots are limited.
        </p>
        <Link to="/apply">
          <Button
            size="lg"
            className="bg-background text-foreground hover:bg-background/90 gap-2 text-base px-10 py-6 font-bold"
          >
            Apply Now <ArrowRight className="w-4 h-4" />
          </Button>
        </Link>
      </div>
    </div>
  </section>
);

export default CTASection;
