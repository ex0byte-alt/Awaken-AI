"use client"

import { BadgePercent, Handshake, LineChart, CheckCircle } from "lucide-react";
import React from "react";
import { useRouter } from "next/navigation";

interface BusinessCardProps {
  icon: React.ReactNode;
  title: string;
  points: string[];
}

const BusinessCard: React.FC<BusinessCardProps> = ({ icon, title, points }) => {
  const router = useRouter();

  return (
    <div className="p-[2px] rounded-xl gradient-card w-full max-w-sm h-[30rem]">
      <div className="p-4 rounded-[10px] text-white shadow-xl h-full flex flex-col justify-between">
        <div>
          <div className="p-2 w-10 h-10 flex items-center justify-center bg-white/20 rounded-md mb-2">
            {icon}
          </div>
          <h3 className="text-lg font-semibold mb-2 leading-tight min-h-[3rem]">{title}</h3>
          <ul className="space-y-2 text-lg text-white/80">
            {points.map((point, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <CheckCircle size={16} className="text-white mt-0.5" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>
        <button
          onClick={() => router.push("/")}
          className="mt-4 gradient-button-bg text-sm py-2 px-4 rounded-md w-full"
        >
          Learn More
        </button>
      </div>
    </div>
  );
};

const solutions = [
  {
    icon: <LineChart size={20} />,
    title: "Sales Optimization",
    points: [
      "Predict customer behavior and buying patterns",
      "Personalize sales approaches automatically",
      "Identify cross-selling and upselling opportunities",
      "Optimize pricing strategies in real-time"
    ]
  },
  {
    icon: <Handshake size={20} />,
    title: "Customer Experience",
    points: [
      "AI-powered chatbots available 24/7",
      "Personalized customer journey mapping",
      "Sentiment analysis for customer feedback",
      "Automated issue resolution and escalation"
    ]
  },
  {
    icon: <BadgePercent size={20} />,
    title: "Cost Reduction",
    points: [
      "Automate repetitive administrative tasks",
      "Reduce human error in critical processes",
      "Optimize resource allocation across departments",
      "Predictive maintenance to prevent costly downtime"
    ]
  }
];

export default function BusinessOutcomes() {
  return (
    <div className="min-h-screen text-white px-6 py-12 flex flex-col items-center">
      <div className="text-3xl font-semibold text-center">
        <span className="gradient-text font-bold">AI Solutions</span>
        <span> for Real Business </span>
        <div>Outcomes</div>
      </div>
      <p className="mt-4 text-center text-white/80 max-w-2xl">
        Our AI-powered tools deliver measurable results across key business areas, helping you achieve your goals faster and more efficiently.
      </p>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
        {solutions.map((sol, idx) => (
          <BusinessCard
            key={idx}
            icon={sol.icon}
            title={sol.title}
            points={sol.points}
          />
        ))}
      </div>
    </div>
  );
}
