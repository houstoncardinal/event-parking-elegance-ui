import { useState, useEffect } from "react";
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
  Plus,
  Eye,
  Edit,
  ExternalLink
} from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface Client {
  id: string;
  name: string;
  location: string;
  monthly_value: number;
  status: string;
  rating: number;
  next_service: string;
  services: string[];
}

interface ClientsOverviewProps {
  setActiveTab: (tab: string) => void;
}

const ClientsOverview = ({ setActiveTab }: ClientsOverviewProps) => {
  const [clients, setClients] = useState<Client[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchClients = async () => {
    try {
      const { data, error } = await supabase
        .from('clients')
        .select('*')
        .eq('status', 'active')
        .order('monthly_value', { ascending: false })
        .limit(4);

      if (error) throw error;
      setClients(data || []);
    } catch (error) {
      console.error('Error fetching clients:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchClients();
  }, []);

  const getStatusColor = (status: string) => {
    switch (status) {
      case "active": return "bg-green-500/20 text-green-400 border-green-500/30";
      case "pending": return "bg-yellow-500/20 text-yellow-400 border-yellow-500/30";
      case "inactive": return "bg-red-500/20 text-red-400 border-red-500/30";
      default: return "bg-white/20 text-white border-white/30";
    }
  };

  const handleViewClient = (client: Client) => {
    // Navigate to client management and highlight this client
    setActiveTab("clients");
    // You could also store the selected client ID in context/state for highlighting
  };

  const handleAddClient = () => {
    setActiveTab("clients");
    // Trigger add client dialog in client management
  };

  const handleViewAllClients = () => {
    setActiveTab("clients");
  };

  return (
    <Card className="bg-white border border-gray-200 shadow-lg p-8">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h3 className="text-xl font-orbitron font-bold text-gray-900 mb-2">Active Clients</h3>
          <p className="text-gray-600">Overview of your current client portfolio</p>
        </div>
        
        <div className="flex items-center space-x-3">
          <Button 
            variant="outline" 
            size="sm" 
            onClick={handleViewAllClients}
            className="border-gray-300 text-gray-700 hover:text-gray-900 hover:bg-gray-50"
          >
            View All
            <ExternalLink className="w-4 h-4 ml-2" />
          </Button>
          <Button 
            className="bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-600 hover:to-gold-700 text-white shadow-lg"
            onClick={handleAddClient}
          >
            <Plus className="w-4 h-4 mr-2" />
            Add Client
          </Button>
        </div>
      </div>

      {loading ? (
        <div className="text-center py-8">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gold-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading clients...</p>
        </div>
      ) : clients.length === 0 ? (
        <div className="text-center py-12">
          <Building className="w-12 h-12 text-gray-400 mx-auto mb-4" />
          <p className="text-gray-600 mb-4">No active clients found</p>
          <Button 
            onClick={handleAddClient}
            className="bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-600 hover:to-gold-700 text-white"
          >
            <Plus className="w-4 h-4 mr-2" />
            Add Your First Client
          </Button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {clients.map((client) => (
          <div 
            key={client.id} 
            className="p-6 rounded-xl bg-gray-50 border border-gray-200 hover:bg-gray-100 transition-all duration-300 shadow-sm hover:shadow-md cursor-pointer group"
            onClick={() => handleViewClient(client)}
          >
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-start space-x-4">
                <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-gold-100 to-gold-200 border border-gold-300 group-hover:from-gold-200 group-hover:to-gold-300 transition-all duration-300">
                  <Building className="w-6 h-6 text-gold-600 group-hover:text-gold-700 transition-colors duration-300" />
                </div>
                
                <div>
                  <h4 className="text-lg font-orbitron font-semibold text-gray-900 group-hover:text-gold-600 transition-colors duration-300">
                    {client.name}
                  </h4>
                  <div className="flex items-center space-x-1 text-sm text-gray-600 mt-1">
                    <MapPin className="w-3 h-3" />
                    <span>{client.location}</span>
                  </div>
                </div>
              </div>
              
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    className="w-8 h-8 text-gray-500 hover:text-gray-900 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <MoreVertical className="w-4 h-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem onClick={(e) => {
                    e.stopPropagation();
                    handleViewClient(client);
                  }}>
                    <Eye className="w-4 h-4 mr-2" />
                    View Details
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={(e) => {
                    e.stopPropagation();
                    // Handle edit client
                  }}>
                    <Edit className="w-4 h-4 mr-2" />
                    Edit Client
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>

            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Monthly Value</span>
                <span className="text-lg font-semibold text-gold-600 group-hover:text-gold-700 transition-colors duration-300">
                  ${client.monthly_value?.toLocaleString()}
                </span>
              </div>
              
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Status</span>
                <Badge variant="secondary" className={getStatusColor(client.status)}>
                  {client.status}
                </Badge>
              </div>
              
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Rating</span>
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className={`w-3 h-3 ${i < client.rating ? 'text-yellow-500 fill-current' : 'text-gray-300'}`} 
                    />
                  ))}
                </div>
              </div>
              
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Next Service</span>
                <div className="flex items-center space-x-1 text-sm text-gray-900">
                  <Calendar className="w-3 h-3" />
                  <span>{client.next_service ? new Date(client.next_service).toLocaleDateString() : 'Not scheduled'}</span>
                </div>
              </div>
            </div>

            <div className="mt-4 pt-4 border-t border-gray-200">
              <p className="text-xs text-gray-500 mb-2">Services</p>
              <div className="flex flex-wrap gap-2">
                {client.services?.map((service, index) => (
                  <Badge key={index} variant="secondary" className="bg-gray-200 text-gray-700 border-gray-300 text-xs">
                    {service}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Navigation hint */}
            <div className="mt-4 pt-3 border-t border-gray-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <p className="text-xs text-gold-600 font-medium flex items-center">
                <Eye className="w-3 h-3 mr-1" />
                Click to view client details →
              </p>
            </div>
          </div>
        ))}
        </div>
      )}
    </Card>
  );
};

export default ClientsOverview;