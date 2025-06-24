
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
        "relative flex h-48 w-80 -skew-y-[8deg] select-none flex-col justify-between rounded-xl border-2 bg-muted/70 backdrop-blur-sm px-6 py-4 transition-all duration-700 after:absolute after:-right-1 after:top-[-5%] after:h-[110%] after:w-72 after:bg-gradient-to-l after:from-background after:to-transparent after:content-[''] hover:border-white/20 hover:bg-muted [&>*]:flex [&>*]:items-center [&>*]:gap-2",
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
      className: "[grid-area:stack] hover:-translate-y-10 before:absolute before:w-[100%] before:outline-1 before:rounded-xl before:outline-border before:h-[100%] before:content-[''] before:bg-blend-overlay before:bg-background/50 grayscale-[100%] hover:before:opacity-0 before:transition-opacity before:duration-700 hover:grayscale-0 before:left-0 before:top-0 z-30",
      icon: <Sparkles className="size-5 text-champagne-300" />,
      title: "Wedding Valet",
      description: "Perfect for your special day",
      date: "Starting at $15/hour",
      titleClassName: "text-champagne-600",
    },
    {
      className: "[grid-area:stack] translate-x-8 translate-y-8 hover:-translate-y-1 before:absolute before:w-[100%] before:outline-1 before:rounded-xl before:outline-border before:h-[100%] before:content-[''] before:bg-blend-overlay before:bg-background/50 grayscale-[100%] hover:before:opacity-0 before:transition-opacity before:duration-700 hover:grayscale-0 before:left-0 before:top-0 z-20 [&>p:nth-child(2)]:opacity-0 hover:[&>p:nth-child(2)]:opacity-100 [&>p:nth-child(3)]:opacity-0 hover:[&>p:nth-child(3)]:opacity-100",
      icon: <Building className="size-5 text-navy-300" />,
      title: "Corporate Events",
      description: "Professional business solutions",
      date: "Starting at $18/hour",
      titleClassName: "text-navy-600",
    },
    {
      className: "[grid-area:stack] translate-x-16 translate-y-16 hover:translate-y-6 z-10 [&>p:nth-child(2)]:opacity-0 hover:[&>p:nth-child(2)]:opacity-100 [&>p:nth-child(3)]:opacity-0 hover:[&>p:nth-child(3)]:opacity-100",
      icon: <Car className="size-5 text-blue-300" />,
      title: "Private Parties",
      description: "Elegant service for any occasion",
      date: "Starting at $12/hour",
      titleClassName: "text-blue-600",
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
