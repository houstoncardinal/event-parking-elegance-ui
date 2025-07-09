
"use client";

import { cn } from "@/lib/utils";
import { Sparkles, Car, Users, Building } from "lucide-react";

interface DisplayCardProps {
  className?: string;
  icon?: React.ReactNode;
  title?: string;
  description?: string;
  badge?: string;
  iconClassName?: string;
  titleClassName?: string;
}

function DisplayCard({
  className,
  icon = <Sparkles className="size-4 text-white" />,
  title = "Featured",
  description = "Discover amazing content",
  badge = "Premium",
  iconClassName = "text-white",
  titleClassName = "text-white",
}: DisplayCardProps) {
  const handleRequestQuote = () => {
    const bookingSection = document.getElementById('booking');
    if (bookingSection) {
      bookingSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div
      onClick={handleRequestQuote}
      className={cn(
        "relative flex h-40 w-[24rem] -skew-y-[8deg] select-none flex-col justify-between rounded-2xl backdrop-blur-xl px-6 py-4 transition-all duration-700 after:absolute after:-right-1 after:top-[-5%] after:h-[110%] after:w-[22rem] after:bg-gradient-to-l after:from-black after:to-transparent after:content-[''] hover:shadow-vip-glow [&>*]:flex [&>*]:items-center [&>*]:gap-3 cursor-pointer",
        "card-vip border border-white/10",
        "no-tap-highlight",
        className
      )}
    >
      <div>
        <span className="relative inline-block glass-vip rounded-full p-2">
          <div className="absolute inset-0 bg-white/10 rounded-full"></div>
          <div className="relative z-10">{icon}</div>
        </span>
        <p className={cn("text-xl font-semibold font-orbitron", titleClassName)}>{title}</p>
      </div>
      <p className="whitespace-nowrap text-lg font-medium text-white/80">{description}</p>
      <div className="flex items-center justify-between w-full">
        <span className="text-white/60 font-semibold text-sm bg-white/10 px-2 py-1 rounded-full">
          {badge}
        </span>
        <span className="text-white/80 font-semibold text-sm hover:text-white transition-colors">
          REQUEST QUOTE →
        </span>
      </div>
    </div>
  );
}

interface DisplayCardsProps {
  cards?: DisplayCardProps[];
}

export default function DisplayCards({ cards }: DisplayCardsProps) {
  const defaultCards = [
    {
      className: "[grid-area:stack] hover:-translate-y-12 before:absolute before:w-[100%] before:outline-1 before:rounded-2xl before:outline-border before:h-[100%] before:content-[''] before:bg-blend-overlay before:bg-black/30 hover:before:opacity-0 before:transition-opacity before:duration-700 before:left-0 before:top-0 hover:shadow-vip-glow",
      icon: <Sparkles className="size-5 text-white" />,
      title: "Wedding Valet",
      description: "Premium uniformed service with luxury handling",
      badge: "Most Popular",
      titleClassName: "text-white",
    },
    {
      className: "[grid-area:stack] translate-x-20 translate-y-12 hover:-translate-y-2 before:absolute before:w-[100%] before:outline-1 before:rounded-2xl before:outline-border before:h-[100%] before:content-[''] before:bg-blend-overlay before:bg-black/30 hover:before:opacity-0 before:transition-opacity before:duration-700 before:left-0 before:top-0 hover:shadow-vip",
      icon: <Building className="size-5 text-white" />,
      title: "Corporate Events",
      description: "Executive-grade branded service solutions",
      badge: "Business Grade",
      titleClassName: "text-white/90",
    },
    {
      className: "[grid-area:stack] translate-x-40 translate-y-24 hover:translate-y-12 hover:shadow-vip-glow",
      icon: <Car className="size-5 text-white" />,
      title: "Private Parties",
      description: "Flexible service with satisfaction guarantee",
      badge: "Most Flexible",
      titleClassName: "text-white/80",
    },
  ];

  const displayCards = cards || defaultCards;

  return (
    <div className="grid [grid-template-areas:'stack'] place-items-center opacity-100 animate-in fade-in-0 duration-700">
      {displayCards.map((cardProps, index) => (
        <DisplayCard key={index} {...cardProps} />
      ))}
    </div>
  );
}
