import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  { q: "How long before I see results?", a: "Most clients see meaningful improvements within 14–30 days. Full optimization typically occurs within 60–90 days as we gather data and refine targeting." },
  { q: "Do I need to provide creative assets?", a: "Not necessarily. We can work with your existing assets or provide creative direction and briefs for your team. Some plans include creative support." },
  { q: "What's the minimum ad spend required?", a: "We recommend a minimum of $1,500/month in ad spend to give campaigns enough data to optimize effectively. Our Starter plan supports up to $3K/month." },
  { q: "Can I cancel anytime?", a: "Yes. All our plans are month-to-month with no long-term contracts. We believe in earning your business every single month." },
  { q: "Do you work with any industry?", a: "We work with most industries, but we specialize in e-commerce, local services, health & wellness, and SaaS. During our qualification process, we'll determine if we're the right fit." },
  { q: "What platforms do you manage?", a: "We primarily manage Facebook and Instagram ads through Meta's ad platform. Our Enterprise plan supports additional platforms like Google and TikTok." },
  { q: "How do I track my campaign performance?", a: "You'll receive detailed weekly reports and have access to a live dashboard. Your dedicated account manager is also available for strategy calls." },
  { q: "What makes you different from other agencies?", a: "We're selective about who we work with, which means we can give each client the attention they deserve. Our qualification process ensures a mutual fit for long-term success." },
];
const leftFaqs = faqs.slice(0, 4);
const rightFaqs = faqs.slice(4);
const FAQ = () => (
  <>
    <section id="faq" className="py-20 lg:py-28 bg-gradient-sky">
      <div className="container max-w-4xl">
        <div className="text-center mb-16">
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">FAQ</span>
          <h2 className="text-3xl md:text-6xl font-black mt-3 mb-4">
            Got <span className="gradient-text">Questions?</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Everything you need to know about working with us.
          </p>
        </div>
        <div className="flex flex-wrap mx-[-15px]">
          <Accordion type="single" collapsible className="xl:w-6/12 lg:w-6/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mb-0">
            {leftFaqs.map((f, i) => (
              <AccordionItem
                key={i}
                value={`faq-${i}`}
                className="border self-start  mb-5 border-border bg-white rounded-xl px-6 data-[state=open]:shadow-card transition-shadow"
              >
                <AccordionTrigger className="text-left font-semibold hover:no-underline py-5">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
          <Accordion type="single" collapsible className="xl:w-6/12 lg:w-6/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mb-0">
            {rightFaqs.map((f, i) => (
              <AccordionItem
                key={i}
                value={`faq-${i}`}
                className="border mb-5 self-start border-border bg-white rounded-xl px-6 data-[state=open]:shadow-card transition-shadow"
              >
                <AccordionTrigger className="text-left font-semibold hover:no-underline py-5">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

      </div>
    </section>


  </>

);

export default FAQ;
