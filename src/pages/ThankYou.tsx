import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, CheckCircle2 } from "lucide-react";

const ThankYou = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center max-w-md mx-auto p-8">
        <div className="w-16 h-16 rounded-full gradient-hero flex items-center justify-center mx-auto mb-6">
          <CheckCircle2 className="w-8 h-8 text-primary-foreground" />
        </div>
        <h1 className="text-3xl font-black mb-3">Application Submitted!</h1>
        <p className="text-muted-foreground mb-8">
          Thank you for applying. We'll review your information and get back to you within 24–48 hours.
        </p>
        <Link to="/">
          <Button variant="outline" className="gap-2">
            <ArrowLeft className="w-4 h-4" /> Back to Home
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default ThankYou;
