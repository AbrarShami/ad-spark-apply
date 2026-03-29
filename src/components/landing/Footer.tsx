const Footer = () => (
  <footer className="border-t border-border py-12">
    <div className="container max-w-6xl">
      <div className="grid md:grid-cols-4 gap-8">
        <div className="md:col-span-2">
          <span className="text-xl font-bold gradient-text">AdScale Pro</span>
          <p className="text-sm text-muted-foreground mt-3 max-w-sm">
            Professional Facebook ad management for businesses ready to scale. Placeholder footer content—final version coming soon.
          </p>
        </div>
        <div>
          <h4 className="font-bold text-sm mb-3">Quick Links</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><a href="#features" className="hover:text-foreground transition-colors">Features</a></li>
            <li><a href="#pricing" className="hover:text-foreground transition-colors">Pricing</a></li>
            <li><a href="#testimonials" className="hover:text-foreground transition-colors">Testimonials</a></li>
            <li><a href="#faq" className="hover:text-foreground transition-colors">FAQ</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-sm mb-3">Contact</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>hello@adscalepro.com</li>
            <li>Placeholder address</li>
            <li>Placeholder phone</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border mt-10 pt-6 text-center text-xs text-muted-foreground">
        © 2026 AdScale Pro. All rights reserved. (Placeholder)
      </div>
    </div>
  </footer>
);

export default Footer;
