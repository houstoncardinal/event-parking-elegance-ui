
import { cn } from "@/lib/utils";
import {
  IconClock,
  IconShield,
  IconUsers,
  IconAward,
} from "@tabler/icons-react";

export function FeaturesSectionWithHoverEffects() {
  const features = [
    {
      title: "Professional Valet Staff",
      description:
        "Experienced, uniformed attendants trained in customer service and vehicle handling.",
      icon: <IconUsers />,
    },
    {
      title: "Quick & Efficient",
      description:
        "Fast vehicle retrieval with minimal wait times for your guests.",
      icon: <IconClock />,
    },
    {
      title: "Fully Insured Service",
      description:
        "Complete liability coverage and bonded staff for your peace of mind.",
      icon: <IconShield />,
    },
    {
      title: "All Event Types",
      description: "Weddings, corporate events, galas, parties, and more throughout Houston.",
      icon: <IconAward />,
    },
  ];
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  relative z-10 py-10 max-w-7xl mx-auto">
      {features.map((feature, index) => (
        <Feature key={feature.title} {...feature} index={index} />
      ))}
    </div>
  );
}

const Feature = ({
  title,
  description,
  icon,
  index,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
}) => {
  return (
    <div
      className={cn(
        "flex flex-col lg:border-r py-10 relative group/feature border-slate-200/60",
        index === 0 && "lg:border-l border-slate-200/60"
      )}
    >
      <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-gold-50/80 to-transparent pointer-events-none" />
      <div className="mb-4 relative z-10 px-10 text-slate-600 group-hover/feature:text-gold-600 transition-colors duration-200">
        {icon}
      </div>
      <div className="text-lg font-bold mb-2 relative z-10 px-10">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-slate-300 group-hover/feature:bg-gold-500 transition-all duration-200 origin-center" />
        <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-slate-800 group-hover/feature:text-slate-900">
          {title}
        </span>
      </div>
      <p className="text-sm text-slate-600 group-hover/feature:text-slate-700 max-w-xs relative z-10 px-10">
        {description}
      </p>
    </div>
  );
};
