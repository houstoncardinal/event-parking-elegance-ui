
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
  icon = <Sparkles className="size-4 text-blue-300" />,
  title = "Featured",
  description = "Discover amazing content",
  date = "Just now",
  iconClassName = "text-blue-500",
  titleClassName = "text-blue-500",
}: DisplayCardProps) {
  return (
    <div
      className={cn(
        "relative flex h-48 w-80 -skew-y-[8deg] select-none flex-col justify-between rounded-xl border-2 bg-white/80 backdrop-blur-sm px-6 py-4 transition-all duration-700 shadow-lg hover:shadow-xl hover:border-white/40 hover:bg-white/90 [&>*]:flex [&>*]:items-center [&>*]:gap-2",
        className
      )}
    >
      <div>
        <span className="relative inline-block rounded-full bg-blue-800 p-1">
          {icon}
        </span>
        <p className={cn("text-xl font-medium", titleClassName)}>{title}</p>
      </div>
      <p className="whitespace-nowrap text-lg opacity-100">{description}</p>
      <p className="text-muted-foreground text-base">{date}</p>
    </div>
  );
}

interface DisplayCardsProps {
  cards?: DisplayCardProps[];
}

export default function DisplayCards({ cards }: DisplayCardsProps) {
  const defaultCards = [
    {
      className: "hover:-translate-y-2 hover:scale-105 z-30",
      icon: <Sparkles className="size-5 text-champagne-300" />,
      title: "Wedding Valet",
      description: "Perfect for your special day",
      date: "Starting at $15/hour",
      titleClassName: "text-champagne-600",
    },
    {
      className: "translate-x-4 translate-y-4 hover:-translate-y-0 hover:scale-105 z-20",
      icon: <Building className="size-5 text-navy-300" />,
      title: "Corporate Events",
      description: "Professional business solutions",
      date: "Starting at $18/hour",
      titleClassName: "text-navy-600",
    },
    {
      className: "translate-x-8 translate-y-8 hover:translate-y-4 hover:scale-105 z-10",
      icon: <Car className="size-5 text-blue-300" />,
      title: "Private Parties",
      description: "Elegant service for any occasion",
      date: "Starting at $12/hour",
      titleClassName: "text-blue-600",
    },
  ];

  const displayCards = cards || defaultCards;

  return (
    <div className="relative flex items-center justify-center opacity-100 animate-in fade-in-0 duration-700">
      {displayCards.map((cardProps, index) => (
        <div key={index} className="absolute">
          <DisplayCard {...cardProps} />
        </div>
      ))}
    </div>
  );
}
