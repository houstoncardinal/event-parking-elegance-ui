import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  DollarSign, 
  TrendingUp, 
  Users, 
  FolderOpen,
  ArrowUp,
  ArrowDown
} from "lucide-react";

const MetricsCards = () => {
  const metrics = [
    {
      title: "Total Revenue",
      value: "$124,750",
      change: "+12.5%",
      trend: "up",
      icon: DollarSign,
      description: "vs last month"
    },
    {
      title: "Active Clients",
      value: "42",
      change: "+8",
      trend: "up",
      icon: Users,
      description: "new this month"
    },
    {
      title: "Active Projects",
      value: "18",
      change: "+3",
      trend: "up",
      icon: FolderOpen,
      description: "in progress"
    },
    {
      title: "Monthly Growth",
      value: "23.8%",
      change: "-2.1%",
      trend: "down",
      icon: TrendingUp,
      description: "vs last month"
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {metrics.map((metric, index) => {
        const Icon = metric.icon;
        const isPositive = metric.trend === "up";
        
        return (
          <Card key={index} className="card-vip p-6 hover:scale-105 transition-all duration-300">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-gold-400/20 to-gold-600/20 border border-gold-500/30">
                <Icon className="w-6 h-6 text-gold-400" />
              </div>
              <Badge 
                variant="secondary" 
                className={`${
                  isPositive 
                    ? "bg-green-500/20 text-green-400 border-green-500/30" 
                    : "bg-red-500/20 text-red-400 border-red-500/30"
                }`}
              >
                {isPositive ? <ArrowUp className="w-3 h-3 mr-1" /> : <ArrowDown className="w-3 h-3 mr-1" />}
                {metric.change}
              </Badge>
            </div>
            
            <div>
              <h3 className="text-2xl font-orbitron font-bold text-vip-glow mb-1">{metric.value}</h3>
              <p className="text-sm text-vip/80 font-medium">{metric.title}</p>
              <p className="text-xs text-vip/60 mt-1">{metric.description}</p>
            </div>
          </Card>
        );
      })}
    </div>
  );
};

export default MetricsCards;