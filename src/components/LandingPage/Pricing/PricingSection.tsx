import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import Link from "next/link"


interface PricingProps {
  Name: string;
  TagLine: string;
  Pricing: string;
  Description: string;
  Features: string[];
  ButtonText: string;
  ButtonLink: string;
  Popular?: boolean;
  IdealFor: string[];
}

const Pricings = [
  {
    Name: "AI Spark",
    TagLine: "Starter Package",
    Pricing: "$19 - $99/month",
    Description: "For startups, students, and small businesses",
    Features: [
      "Access to pre-built AI tools",
      "Integration with third-party platforms",
      "Limited API access (monthly caps)",
      "Self-serve onboarding and tutorials",
      "Community forum & monthly webinars"
    ],
    ButtonText: "Start Free Trial",
    ButtonLink: "/",
    IdealFor: [
      "Entrepreneurs",
      "Student teams / hackathons",
      "Early-stage B2B SaaS",
      "Pilot testers in new markets"
    ]
  },
  {
    Name: "AI Engine",
    TagLine: "Basic Package",
    Pricing: "$499 - $2,000/month",
    Description: "For mid-sized businesses scaling with AI",
    Features: [
      "Advanced AI tools (vision, NLP, prediction)",
      "Custom workflows and automation setup",
      "Mid-tier API quota + sandbox",
      "AI use case playbooks for 10+ industries",
      "Dedicated account manager"
    ],
    ButtonText: "Talk to Sales",
    ButtonLink: "/",
    Popular: true,
    IdealFor: [
      "Marketing & eCommerce platforms",
      "Logistics and supply chain businesses",
      "Education & healthcare platforms",
      "Medium-sized enterprise solutions"
    ]
  },
  {
    Name: "AI Galaxy",
    TagLine: "Enterprise Package",
    Pricing: "Custom Pricing",
    Description: "For Fortune 500 companies and governments",
    Features: [
      "Custom model development (LLMs, CV, RPA)",
      "Private cloud / on-prem deployment",
      "Enterprise-level API with SLA guarantees",
      "Full AI audit & legal compliance",
      "VIP support & AI strategy consulting"
    ],
    ButtonText: "Contact Enterprise Sales",
    ButtonLink: "/",
    IdealFor: [
      "Large-scale banks, governments, telecoms",
      "Industry 4.0 adopters (manufacturing)",
      "Tech unicorns seeking AI infrastructure",
      "Digital transformation leaders"
    ]
  }
];

function PricingCard({ Name, TagLine, Pricing, Description, Features, ButtonText, ButtonLink, Popular = false, IdealFor }: PricingProps) {
  return (
    <>
      <div className={'gradient-card rounded-xl overflow-hidden'}>
        {Popular && (
          <div className="bg-gradient-to-r from-purple-700 to-purple-500 text-sm font-bold py-1.5 px-4 text-center">
            Most Popular
          </div>
        )}

        <div className="p-6 md:p-8">
          <div className="text-center mb-8">
            <div className="text-xl font-bold mb-2">{Name}</div>
            <div className="dark:text-purple-400 text-purple-600 font-semibold mb-4 ">{TagLine}</div>
            <div className="text-3xl font-bold mb-2">
              {Pricing}
            </div>
            <p className="dark:text-gray-300 light:text-gray-700 text-md">{Description}</p>
          </div>

          <ul className="space-y-3 mb-8">
            {Features.map((Feature: string, Index: number) => (
              <li key={Index} className="flex items-start">
                <Check size={18} className="mr-2 mt-0.5 flex-shrink-0" />
                <span className="dark:text-gray-300 light:text-gray-700 text-md">{Feature}</span>
              </li>
            ))}
          </ul>

          <Button
            asChild
            variant="outline"
            className={`w-full ${Popular
              ? "gradient-button hover:opacity-90 text-white font-semibold text-md"
              : ""
              }`}
          >
            <Link href={ButtonLink}>{ButtonText}</Link>
          </Button>

          <div className="mt-6 pt-6 border-t border-gray-100">
            <p className="dark:text-gray-100 light:text-gray-700 font-semibold text-md mb-2">Ideal for:</p>
            <ul className="space-y-1">
              {IdealFor.map((item: string, index: number) => (
                <li key={index} className="dark:text-gray-300 light:text-gray-700 text-smd">• {item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

function PricingSection() {
  return (
    <section id="pricing" className="py-20 md:py-28 ">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="gradient-text">Pricing Plans</span> for Every Stage
          </h2>
          <p className="dark:text-gray-300 light:text-gray-700 text-lg">
            From startups to enterprise, our flexible pricing ensures you only pay for what you need as your business grows.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-24 max-w-6xl mx-auto ">
          {Pricings.map((card, index: number) => (
            <PricingCard key={index} {...card} />
          ))}
        </div>

        <div className="text-center mt-12 dark:text-gray-300 light:text-gray-700">
          Need a custom plan? <a href="#contact" className="text-[#006DC4] font-medium">Contact us</a> for a tailored solution.
        </div>
      </div>
    </section>
  );
}

export default PricingSection;