import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ArrowLeft } from "lucide-react";

const Apply = () => {
  const navigate = useNavigate();



  return (
    <div className="min-h-screen bg-background">
      {/* Top bar */}
      <div className="border-b border-border">
        <div className="container py-4 flex items-center gap-4">
          <Link to="/" className="text-muted-foreground hover:text-foreground transition-colors">
            <ArrowLeft className="w-5 h-5" />
          </Link>
          <span className="text-xl font-bold gradient-text">AdScale Pro</span>
        </div>
      </div>

      <div className="container max-w-2xl py-12 md:py-20">
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-black mb-3">Apply to Work With Us</h1>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Please answer the questions below so we can determine if we're the right fit for your business. All fields are required.
          </p>
        </div>

        <form
          action="https://api.staticforms.xyz/submit"
          method="POST"
          onSubmit={(e) => {
            e.preventDefault();
            const form = e.currentTarget;
            fetch(form.action, {
              method: "POST",
              body: new FormData(form),
            }).then(() => {
              navigate("/thank-you");
            }).catch(() => {
              navigate("/thank-you");
            });
          }}
          className="space-y-6"
        >
          {/* StaticForms access key — replace with your own */}
          <input type="hidden" name="accessKey" value="YOUR_STATICFORMS_ACCESS_KEY" />
          <input type="hidden" name="redirectTo" value="" />

          {/* Contact Info */}
          <div className="p-6 rounded-xl border border-border space-y-4">
            <h2 className="font-bold text-lg">Contact Information</h2>

            <div className="grid sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <Input id="name" name="name" placeholder="John Doe" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <Input id="email" name="email" type="email" placeholder="john@company.com" required />
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input id="phone" name="phone" type="tel" placeholder="+1 (555) 000-0000" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="company">Company / Brand Name</Label>
                <Input id="company" name="$company" placeholder="Acme Inc." required />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="website">Website URL</Label>
              <Input id="website" name="$website" type="url" placeholder="https://yoursite.com" required />
            </div>
          </div>

          {/* Qualifying Questions */}
          <div className="p-6 rounded-xl border border-border space-y-4">
            <h2 className="font-bold text-lg">Qualifying Questions</h2>

            <div className="space-y-2">
              <Label htmlFor="industry">What industry are you in?</Label>
              <Input id="industry" name="$industry" placeholder="e.g., E-commerce, SaaS, Local Services" required />
            </div>

            <div className="space-y-2">
              <Label htmlFor="budget">What is your monthly ad budget?</Label>
              <Select name="$monthlyBudget" required>
                <SelectTrigger>
                  <SelectValue placeholder="Select your budget range" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Under $1,000">Under $1,000</SelectItem>
                  <SelectItem value="$1,000 - $3,000">$1,000 – $3,000</SelectItem>
                  <SelectItem value="$3,000 - $10,000">$3,000 – $10,000</SelectItem>
                  <SelectItem value="$10,000 - $30,000">$10,000 – $30,000</SelectItem>
                  <SelectItem value="$30,000+">$30,000+</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="currentAds">Are you currently running Facebook/Instagram ads?</Label>
              <Select name="$currentlyRunningAds" required>
                <SelectTrigger>
                  <SelectValue placeholder="Select one" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Yes, in-house">Yes, in-house</SelectItem>
                  <SelectItem value="Yes, with another agency">Yes, with another agency</SelectItem>
                  <SelectItem value="No, but I have in the past">No, but I have in the past</SelectItem>
                  <SelectItem value="No, never">No, I've never run ads</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="monthlyRevenue">What is your approximate monthly revenue?</Label>
              <Select name="$monthlyRevenue" required>
                <SelectTrigger>
                  <SelectValue placeholder="Select your revenue range" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Under $10K">Under $10K</SelectItem>
                  <SelectItem value="$10K - $50K">$10K – $50K</SelectItem>
                  <SelectItem value="$50K - $100K">$50K – $100K</SelectItem>
                  <SelectItem value="$100K - $500K">$100K – $500K</SelectItem>
                  <SelectItem value="$500K+">$500K+</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="goals">What are your primary advertising goals?</Label>
              <Textarea
                id="goals"
                name="$advertisingGoals"
                placeholder="e.g., Generate more leads, increase online sales, build brand awareness..."
                rows={3}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="timeline">How soon are you looking to get started?</Label>
              <Select name="$timeline" required>
                <SelectTrigger>
                  <SelectValue placeholder="Select timeline" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Immediately">Immediately</SelectItem>
                  <SelectItem value="Within 2 weeks">Within 2 weeks</SelectItem>
                  <SelectItem value="Within a month">Within a month</SelectItem>
                  <SelectItem value="Just exploring">Just exploring options</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="hear">How did you hear about us?</Label>
              <Input id="hear" name="$howDidYouHear" placeholder="e.g., Google, referral, social media" required />
            </div>

            <div className="space-y-2">
              <Label htmlFor="additional">Anything else you'd like us to know?</Label>
              <Textarea
                id="additional"
                name="message"
                placeholder="Share any additional details about your business or goals..."
                rows={3}
              />
            </div>
          </div>

          <Button type="submit" size="lg" className="w-full py-6 text-base font-bold">
            Submit Application
          </Button>

          <p className="text-xs text-muted-foreground text-center">
            By submitting, you agree to be contacted regarding our services. We'll never share your information.
          </p>
        </form>
      </div>
    </div>
  );
};

export default Apply;
