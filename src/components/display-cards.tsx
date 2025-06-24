
"use client";

import { cn } from "@/lib/utils";
import { Sparkles, Car, Users, Building } from "lucide-react";

interface DisplayCardProps {
  className?: string;
  icon?: React.ReactNode;
  title?: string;
  description?: string;
  date?: string;
  iconClassName?: string;
  titleClassName?: string;
}

function DisplayCard({
  className,
  icon = <Sparkles className="size-4 text-gold-300" />,
  title = "Featured",
  description = "Discover amazing content",
  date = "Just now",
  iconClassName = "text-gold-500",
  titleClassName = "text-gold-600",
}: DisplayCardProps) {
  return (
    <div
      className={cn(
        "relative flex h-40 w-[24rem] -skew-y-[8deg] select-none flex-col justify-between rounded-2xl border-2 backdrop-blur-xl px-6 py-4 transition-all duration-700 after:absolute after:-right-1 after:top-[-5%] after:h-[110%] after:w-[22rem] after:bg-gradient-to-l after:from-background after:to-transparent after:content-[''] hover:border-gold-300/40 [&>*]:flex [&>*]:items-center [&>*]:gap-3 shadow-luxury hover:shadow-xl",
        "bg-gradient-to-br from-white/95 via-gold-50/30 to-white/90 border-white/30",
        className
      )}
    >
      <div>
        <span className="relative inline-block rounded-full bg-gradient-to-br from-gold-400 via-gold-500 to-gold-600 p-2 shadow-gold-glow">
          <div className="absolute inset-0 bg-gradient-to-br from-gold-300/50 to-transparent rounded-full"></div>
          <div className="relative z-10">{icon}</div>
        </span>
        <p className={cn("text-xl font-semibold font-playfair drop-shadow-sm", titleClassName)}>{title}</p>
      </div>
      <p className="whitespace-nowrap text-lg font-medium text-slate-700 drop-shadow-sm">{description}</p>
      <p className="text-slate-600 font-semibold text-sm">{date}</p>
    </div>
  );
}

interface DisplayCardsProps {
  cards?: DisplayCardProps[];
}

export default function DisplayCards({ cards }: DisplayCardsProps) {
  const defaultCards = [
    {
      className: "[grid-area:stack] hover:-translate-y-12 before:absolute before:w-[100%] before:outline-1 before:rounded-2xl before:outline-border before:h-[100%] before:content-[''] before:bg-blend-overlay before:bg-background/30 hover:before:opacity-0 before:transition-opacity before:duration-700 before:left-0 before:top-0 hover:shadow-gold-glow",
      icon: <Sparkles className="size-5 text-white" />,
      title: "Wedding Valet",
      description: "Perfect for your special day",
      date: "Starting at $15/hour",
      titleClassName: "text-gold-600",
    },
    {
      className: "[grid-area:stack] translate-x-20 translate-y-12 hover:-translate-y-2 before:absolute before:w-[100%] before:outline-1 before:rounded-2xl before:outline-border before:h-[100%] before:content-[''] before:bg-blend-overlay before:bg-background/30 hover:before:opacity-0 before:transition-opacity before:duration-700 before:left-0 before:top-0 hover:shadow-luxury",
      icon: <Building className="size-5 text-white" />,
      title: "Corporate Events",
      description: "Professional business solutions",
      date: "Starting at $18/hour",
      titleClassName: "text-slate-700",
    },
    {
      className: "[grid-area:stack] translate-x-40 translate-y-24 hover:translate-y-12 hover:shadow-platinum-glow",
      icon: <Car className="size-5 text-white" />,
      title: "Private Parties",
      description: "Elegant service for any occasion",
      date: "Starting at $12/hour",
      titleClassName: "text-slate-600",
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
