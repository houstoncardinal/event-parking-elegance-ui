import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { 
  Plus, 
  Search, 
  Filter, 
  Edit, 
  Trash2, 
  Eye,
  Building,
  MapPin,
  Phone,
  Mail,
  Calendar,
  Star,
  DollarSign
} from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import ClientFormDialog from "./ClientFormDialog";
import ClientDetailsDialog from "./ClientDetailsDialog";

interface Client {
  id: string;
  name: string;
  location: string;
  contact_person: string;
  email: string;
  phone: string;
  monthly_value: number;
  status: string;
  rating: number;
  next_service: string;
  services: string[];
  address: string;
  contract_start_date: string;
  contract_end_date: string;
  notes: string;
  created_at: string;
  updated_at: string;
}

const ClientManagement = () => {
  const [clients, setClients] = useState<Client[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);
  const [selectedClient, setSelectedClient] = useState<Client | null>(null);
  const [editMode, setEditMode] = useState(false);
  const { toast } = useToast();

  const fetchClients = async () => {
    try {
      const { data, error } = await supabase
        .from('clients')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setClients(data || []);
    } catch (error) {
      console.error('Error fetching clients:', error);
      toast({
        title: "Error",
        description: "Failed to fetch clients",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteClient = async (clientId: string) => {
    if (!confirm('Are you sure you want to delete this client?')) return;

    try {
      const { error } = await supabase
        .from('clients')
        .delete()
        .eq('id', clientId);

      if (error) throw error;

      setClients(clients.filter(client => client.id !== clientId));
      toast({
        title: "Success",
        description: "Client deleted successfully",
      });
    } catch (error) {
      console.error('Error deleting client:', error);
      toast({
        title: "Error",
        description: "Failed to delete client",
        variant: "destructive",
      });
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "active": return "bg-green-100 text-green-800 border-green-300";
      case "pending": return "bg-yellow-100 text-yellow-800 border-yellow-300";
      case "inactive": return "bg-red-100 text-red-800 border-red-300";
      default: return "bg-gray-100 text-gray-800 border-gray-300";
    }
  };

  const filteredClients = clients.filter(client => {
    const matchesSearch = client.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         client.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         client.contact_person.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === "all" || client.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  useEffect(() => {
    fetchClients();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="text-lg text-gray-600">Loading clients...</div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header with Actions */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h2 className="text-2xl font-orbitron font-bold text-gray-900">Client Management</h2>
          <p className="text-gray-600">Manage your client portfolio and relationships</p>
        </div>
        
        <Button 
          onClick={() => {
            setSelectedClient(null);
            setEditMode(false);
            setIsFormOpen(true);
          }}
          className="bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-600 hover:to-gold-700 text-white shadow-lg"
        >
          <Plus className="w-4 h-4 mr-2" />
          Add Client
        </Button>
      </div>

      {/* Search and Filters */}
      <Card className="p-6 bg-white border border-gray-200 shadow-sm">
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-500" />
            <Input
              placeholder="Search clients..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
          
          <div className="flex items-center space-x-2">
            <Filter className="w-4 h-4 text-gray-500" />
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-gold-500"
            >
              <option value="all">All Status</option>
              <option value="active">Active</option>
              <option value="pending">Pending</option>
              <option value="inactive">Inactive</option>
            </select>
          </div>
        </div>
      </Card>

      {/* Clients Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredClients.map((client) => (
          <Card key={client.id} className="bg-white border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300">
            <div className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-start space-x-3">
                  <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-gold-100 to-gold-200 border border-gold-300">
                    <Building className="w-6 h-6 text-gold-600" />
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-lg font-orbitron font-semibold text-gray-900">{client.name}</h3>
                    <div className="flex items-center space-x-1 text-sm text-gray-600 mt-1">
                      <MapPin className="w-3 h-3" />
                      <span>{client.location}</span>
                    </div>
                  </div>
                </div>
                
                <Badge className={getStatusColor(client.status)}>
                  {client.status}
                </Badge>
              </div>

              <div className="space-y-3">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">Contact</span>
                  <span className="text-gray-900 font-medium">{client.contact_person}</span>
                </div>
                
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">Monthly Value</span>
                  <span className="text-gold-600 font-semibold">${client.monthly_value?.toLocaleString()}</span>
                </div>
                
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">Rating</span>
                  <div className="flex items-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className={`w-3 h-3 ${i < client.rating ? 'text-yellow-500 fill-current' : 'text-gray-300'}`} 
                      />
                    ))}
                  </div>
                </div>

                {client.next_service && (
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">Next Service</span>
                    <div className="flex items-center space-x-1 text-gray-900">
                      <Calendar className="w-3 h-3" />
                      <span>{new Date(client.next_service).toLocaleDateString()}</span>
                    </div>
                  </div>
                )}
              </div>

              <div className="mt-4 pt-4 border-t border-gray-200">
                <div className="flex items-center justify-between">
                  <div className="flex space-x-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => {
                        setSelectedClient(client);
                        setIsDetailsOpen(true);
                      }}
                      className="border-gray-300 text-gray-700 hover:bg-gray-50"
                    >
                      <Eye className="w-3 h-3 mr-1" />
                      View
                    </Button>
                    
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => {
                        setSelectedClient(client);
                        setEditMode(true);
                        setIsFormOpen(true);
                      }}
                      className="border-gold-300 text-gold-700 hover:bg-gold-50"
                    >
                      <Edit className="w-3 h-3 mr-1" />
                      Edit
                    </Button>
                  </div>
                  
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleDeleteClient(client.id)}
                    className="border-red-300 text-red-700 hover:bg-red-50"
                  >
                    <Trash2 className="w-3 h-3" />
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {filteredClients.length === 0 && (
        <Card className="p-12 text-center bg-white border border-gray-200">
          <Building className="w-12 h-12 text-gray-400 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-900 mb-2">No clients found</h3>
          <p className="text-gray-600 mb-6">
            {searchTerm || statusFilter !== "all" 
              ? "No clients match your current filters." 
              : "Get started by adding your first client."}
          </p>
          {(!searchTerm && statusFilter === "all") && (
            <Button 
              onClick={() => {
                setSelectedClient(null);
                setEditMode(false);
                setIsFormOpen(true);
              }}
              className="bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-600 hover:to-gold-700 text-white"
            >
              <Plus className="w-4 h-4 mr-2" />
              Add First Client
            </Button>
          )}
        </Card>
      )}

      {/* Dialogs */}
      <ClientFormDialog
        open={isFormOpen}
        onOpenChange={setIsFormOpen}
        client={selectedClient}
        editMode={editMode}
        onSuccess={() => {
          fetchClients();
          setIsFormOpen(false);
          setSelectedClient(null);
          setEditMode(false);
        }}
      />

      <ClientDetailsDialog
        open={isDetailsOpen}
        onOpenChange={setIsDetailsOpen}
        client={selectedClient}
      />
    </div>
  );
};

export default ClientManagement;