import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Building, 
  MapPin, 
  DollarSign, 
  Calendar,
  Star,
  MoreVertical,
  Plus
} from "lucide-react";

const ClientsOverview = () => {
  const clients = [
    {
      id: 1,
      name: "Downtown Plaza",
      location: "Downtown District",
      monthlyValue: "$2,500",
      status: "active",
      rating: 5,
      nextService: "Dec 28, 2024",
      services: ["Valet Parking", "Security"]
    },
    {
      id: 2,
      name: "Metro Shopping Center",
      location: "Westside",
      monthlyValue: "$3,200",
      status: "active",
      rating: 5,
      nextService: "Dec 30, 2024",
      services: ["Event Parking", "Traffic Management"]
    },
    {
      id: 3,
      name: "City Center Complex",
      location: "Central Business District",
      monthlyValue: "$1,800",
      status: "pending",
      rating: 4,
      nextService: "Jan 2, 2025",
      services: ["Valet Parking"]
    },
    {
      id: 4,
      name: "Riverside Mall",
      location: "East Side",
      monthlyValue: "$2,100",
      status: "active",
      rating: 5,
      nextService: "Jan 5, 2025",
      services: ["Security", "Traffic Management"]
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "active": return "bg-green-500/20 text-green-400 border-green-500/30";
      case "pending": return "bg-yellow-500/20 text-yellow-400 border-yellow-500/30";
      case "inactive": return "bg-red-500/20 text-red-400 border-red-500/30";
      default: return "bg-white/20 text-white border-white/30";
    }
  };

  return (
    <Card className="card-vip p-8">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h3 className="text-xl font-orbitron font-bold text-vip-glow mb-2">Active Clients</h3>
          <p className="text-vip/70">Overview of your current client portfolio</p>
        </div>
        
        <Button className="btn-vip">
          <Plus className="w-4 h-4 mr-2" />
          Add Client
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {clients.map((client) => (
          <div key={client.id} className="p-6 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300">
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-start space-x-4">
                <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-gold-400/20 to-gold-600/20 border border-gold-500/30">
                  <Building className="w-6 h-6 text-gold-400" />
                </div>
                
                <div>
                  <h4 className="text-lg font-orbitron font-semibold text-vip-glow">{client.name}</h4>
                  <div className="flex items-center space-x-1 text-sm text-vip/70 mt-1">
                    <MapPin className="w-3 h-3" />
                    <span>{client.location}</span>
                  </div>
                </div>
              </div>
              
              <Button variant="ghost" size="icon" className="w-8 h-8 text-vip/50 hover:text-vip">
                <MoreVertical className="w-4 h-4" />
              </Button>
            </div>

            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm text-vip/70">Monthly Value</span>
                <span className="text-lg font-semibold text-gold-400">{client.monthlyValue}</span>
              </div>
              
              <div className="flex items-center justify-between">
                <span className="text-sm text-vip/70">Status</span>
                <Badge variant="secondary" className={getStatusColor(client.status)}>
                  {client.status}
                </Badge>
              </div>
              
              <div className="flex items-center justify-between">
                <span className="text-sm text-vip/70">Rating</span>
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className={`w-3 h-3 ${i < client.rating ? 'text-yellow-400 fill-current' : 'text-vip/30'}`} 
                    />
                  ))}
                </div>
              </div>
              
              <div className="flex items-center justify-between">
                <span className="text-sm text-vip/70">Next Service</span>
                <div className="flex items-center space-x-1 text-sm text-vip">
                  <Calendar className="w-3 h-3" />
                  <span>{client.nextService}</span>
                </div>
              </div>
            </div>

            <div className="mt-4 pt-4 border-t border-white/10">
              <p className="text-xs text-vip/60 mb-2">Services</p>
              <div className="flex flex-wrap gap-2">
                {client.services.map((service, index) => (
                  <Badge key={index} variant="secondary" className="bg-white/10 text-vip/80 border-white/20 text-xs">
                    {service}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
};

export default ClientsOverview;