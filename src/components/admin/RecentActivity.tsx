import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  User, 
  FileText, 
  DollarSign, 
  MessageSquare,
  MoreVertical,
  Clock
} from "lucide-react";

const RecentActivity = () => {
  const activities = [
    {
      id: 1,
      type: "payment",
      title: "Payment Received",
      description: "Downtown Plaza project - Monthly service",
      amount: "$2,500",
      time: "2 hours ago",
      status: "completed",
      icon: DollarSign
    },
    {
      id: 2,
      type: "client",
      title: "New Client Onboarded",
      description: "Metro Shopping Center signed contract",
      time: "4 hours ago",
      status: "new",
      icon: User
    },
    {
      id: 3,
      type: "form",
      title: "Quote Request",
      description: "Riverside Mall - Event parking services",
      time: "6 hours ago",
      status: "pending",
      icon: FileText
    },
    {
      id: 4,
      type: "message",
      title: "Support Ticket",
      description: "Equipment maintenance request",
      time: "8 hours ago",
      status: "urgent",
      icon: MessageSquare
    },
    {
      id: 5,
      type: "payment",
      title: "Invoice Sent",
      description: "City Center project - Weekly service",
      amount: "$1,200",
      time: "1 day ago",
      status: "sent",
      icon: DollarSign
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

  return (
    <Card className="bg-white border border-gray-200 shadow-lg p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-orbitron font-bold text-gray-900">Recent Activity</h3>
        <Button variant="ghost" size="sm" className="text-gray-600 hover:text-gray-900 hover:bg-gray-100">
          View All
        </Button>
      </div>

      <div className="space-y-4">
        {activities.map((activity) => {
          const Icon = activity.icon;
          
          return (
            <div key={activity.id} className="flex items-start space-x-4 p-4 rounded-xl bg-gray-50 border border-gray-200 hover:bg-gray-100 transition-all duration-300">
              <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-to-br from-gold-100 to-gold-200 border border-gold-300">
                <Icon className="w-5 h-5 text-gold-600" />
              </div>
              
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between mb-1">
                  <h4 className="text-sm font-medium text-gray-900 truncate">{activity.title}</h4>
                  <Button variant="ghost" size="icon" className="w-6 h-6 text-gray-500 hover:text-gray-900">
                    <MoreVertical className="w-4 h-4" />
                  </Button>
                </div>
                
                <p className="text-sm text-gray-600 mb-2">{activity.description}</p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <Badge variant="secondary" className={getStatusColor(activity.status)}>
                      {activity.status}
                    </Badge>
                    {activity.amount && (
                      <span className="text-sm font-medium text-gold-400">{activity.amount}</span>
                    )}
                  </div>
                  
                  <div className="flex items-center space-x-1 text-xs text-gray-500">
                    <Clock className="w-3 h-3" />
                    <span>{activity.time}</span>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </Card>
  );
};

export default RecentActivity;