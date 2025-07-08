import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  User, 
  FileText, 
  DollarSign, 
  MessageSquare,
  MoreVertical,
  Clock,
  Eye,
  ExternalLink
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface RecentActivityProps {
  setActiveTab: (tab: string) => void;
}

const RecentActivity = ({ setActiveTab }: RecentActivityProps) => {
  const activities = [
    {
      id: 1,
      type: "payment",
      title: "Payment Received",
      description: "Downtown Plaza project - Monthly service",
      amount: "$2,500",
      time: "2 hours ago",
      status: "completed",
      icon: DollarSign,
      destination: "overview", // Revenue chart
      action: () => {
        // Scroll to revenue chart
        const revenueChart = document.querySelector('[data-revenue-chart]');
        if (revenueChart) {
          revenueChart.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      }
    },
    {
      id: 2,
      type: "client",
      title: "New Client Onboarded",
      description: "Metro Shopping Center signed contract",
      time: "4 hours ago",
      status: "new",
      icon: User,
      destination: "clients",
      action: () => setActiveTab("clients")
    },
    {
      id: 3,
      type: "form",
      title: "Quote Request",
      description: "Riverside Mall - Event parking services",
      time: "6 hours ago",
      status: "pending",
      icon: FileText,
      destination: "forms",
      action: () => setActiveTab("forms")
    },
    {
      id: 4,
      type: "message",
      title: "Support Ticket",
      description: "Equipment maintenance request",
      time: "8 hours ago",
      status: "urgent",
      icon: MessageSquare,
      destination: "tickets",
      action: () => setActiveTab("tickets")
    },
    {
      id: 5,
      type: "payment",
      title: "Invoice Sent",
      description: "City Center project - Weekly service",
      amount: "$1,200",
      time: "1 day ago",
      status: "sent",
      icon: DollarSign,
      destination: "overview", // Revenue chart
      action: () => {
        // Scroll to revenue chart
        const revenueChart = document.querySelector('[data-revenue-chart]');
        if (revenueChart) {
          revenueChart.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      }
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed": return "bg-green-500/20 text-green-400 border-green-500/30";
      case "new": return "bg-blue-500/20 text-blue-400 border-blue-500/30";
      case "pending": return "bg-yellow-500/20 text-yellow-400 border-yellow-500/30";
      case "urgent": return "bg-red-500/20 text-red-400 border-red-500/30";
      case "sent": return "bg-purple-500/20 text-purple-400 border-purple-500/30";
      default: return "bg-white/20 text-white border-white/30";
    }
  };

  const getDestinationLabel = (destination: string) => {
    switch (destination) {
      case "clients": return "View Clients";
      case "forms": return "View Forms";
      case "tickets": return "View Tickets";
      case "overview": return "View Revenue";
      default: return "View Details";
    }
  };

  return (
    <Card className="bg-white border border-gray-200 shadow-lg p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-orbitron font-bold text-gray-900">Recent Activity</h3>
        <Button 
          variant="ghost" 
          size="sm" 
          className="text-gray-600 hover:text-gray-900 hover:bg-gray-100"
          onClick={() => {
            // Could open a full activity log or refresh
            window.location.reload();
          }}
        >
          Refresh
          <ExternalLink className="w-4 h-4 ml-2" />
        </Button>
      </div>

      <div className="space-y-4">
        {activities.map((activity) => {
          const Icon = activity.icon;
          
          return (
            <div 
              key={activity.id} 
              className="flex items-start space-x-4 p-4 rounded-xl bg-gray-50 border border-gray-200 hover:bg-gray-100 transition-all duration-300 cursor-pointer group"
              onClick={activity.action}
            >
              <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-to-br from-gold-100 to-gold-200 border border-gold-300 group-hover:from-gold-200 group-hover:to-gold-300 transition-all duration-300">
                <Icon className="w-5 h-5 text-gold-600 group-hover:text-gold-700 transition-colors duration-300" />
              </div>
              
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between mb-1">
                  <h4 className="text-sm font-medium text-gray-900 truncate group-hover:text-gold-600 transition-colors duration-300">
                    {activity.title}
                  </h4>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button 
                        variant="ghost" 
                        size="icon" 
                        className="w-6 h-6 text-gray-500 hover:text-gray-900 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <MoreVertical className="w-4 h-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem onClick={(e) => {
                        e.stopPropagation();
                        activity.action();
                      }}>
                        <Eye className="w-4 h-4 mr-2" />
                        {getDestinationLabel(activity.destination)}
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
                
                <p className="text-sm text-gray-600 mb-2 group-hover:text-gray-700 transition-colors duration-300">
                  {activity.description}
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <Badge variant="secondary" className={getStatusColor(activity.status)}>
                      {activity.status}
                    </Badge>
                    {activity.amount && (
                      <span className="text-sm font-medium text-gold-400 group-hover:text-gold-500 transition-colors duration-300">
                        {activity.amount}
                      </span>
                    )}
                  </div>
                  
                  <div className="flex items-center space-x-1 text-xs text-gray-500">
                    <Clock className="w-3 h-3" />
                    <span>{activity.time}</span>
                  </div>
                </div>

                {/* Navigation hint */}
                <div className="mt-3 pt-2 border-t border-gray-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-xs text-gold-600 font-medium flex items-center">
                    <Eye className="w-3 h-3 mr-1" />
                    Click to {getDestinationLabel(activity.destination).toLowerCase()} →
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* View All Activities Button */}
      <div className="mt-6 pt-4 border-t border-gray-200">
        <Button 
          variant="outline" 
          className="w-full border-gray-300 text-gray-700 hover:text-gray-900 hover:bg-gray-50"
          onClick={() => {
            // Could open a full activity log modal or page
            alert("Full activity log would open here");
          }}
        >
          View All Activities
          <ExternalLink className="w-4 h-4 ml-2" />
        </Button>
      </div>
    </Card>
  );
};

export default RecentActivity;