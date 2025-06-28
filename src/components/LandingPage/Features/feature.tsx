import { BarChart3, Settings, Code2, Globe2, FileText, Search } from "lucide-react";
import React from "react";

interface FeatureCardProps {
  icon: React.ReactNode;
  heading: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, heading, description }) => {
  return (
    <div className="p-[2px] rounded-xl gradient-card w-full max-w-sm h-48">
      <div className="p-4 rounded-[10px] text-white shadow-xl transition-transform hover:scale-[1.05] duration-300 h-full flex flex-col justify-between">
        <div className="flex items-start gap-3">
          <div>
            <div className="p-2 w-10 h-10 flex items-center justify-center bg-white/20 rounded-md">
              {icon}
            </div>
            <h3 className="text-base pt-3 font-semibold leading-tight min-h-[2rem]">{heading}</h3>
            <p className="text-sm text-white/80 mt-1 leading-snug min-h-[3.5rem]">{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const features = [
  {
    icon: <BarChart3 size={20} />,
    title: "AI-Powered Analytics",
    description:
      "Transform your data into actionable insights with predictive analytics and automated reporting.",
  },
  {
    icon: <Settings size={20} />,
    title: "Custom AI Solutions",
    description:
      "Tailored AI tools designed specifically for your business needs and industry requirements.",
  },
  {
    icon: <Code2 size={20} />,
    title: "API Integration",
    description:
      "Seamlessly connect with your existing software stack through our robust API ecosystem.",
  },
  {
    icon: <Globe2 size={20} />,
    title: "Global Deployment",
    description:
      "Deploy AI solutions across multiple regions with localized optimization and compliance.",
  },
  {
    icon: <FileText size={20} />,
    title: "AI Content Generator",
    description:
      "Create high-quality marketing content, reports, and documentation automatically.",
  },
  {
    icon: <Search size={20} />,
    title: "Intelligent Search",
    description:
      "Enhance discovery across your internal knowledge base and customer-facing platforms.",
  },
];

export default function FeaturesPage() {
  return (
    <div id="features" className="min-h-screen text-white px-6 py-12 flex flex-col items-center">
      <div className="text-3xl font-semibold text-center">
        <div><span className="gradient-text font-bold">Powerful Features</span><span> to Transform Your</span></div>
        <div> Business</div>
      </div>
      <p className="mt-4 text-center text-white/80 max-w-2xl">
        Our comprehensive suite of AI tools and services designed to streamline operations, boost efficiency, and
        drive growth for businesses of all sizes.
      </p>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
        {features.map((feature, idx) => (
          <FeatureCard
            key={idx}
            icon={feature.icon}
            heading={feature.title}
            description={feature.description}
          />
        ))}
      </div>
    </div>
  );
}
