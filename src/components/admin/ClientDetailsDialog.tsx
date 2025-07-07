import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { 
  Building, 
  MapPin, 
  Phone, 
  Mail, 
  Calendar, 
  Star, 
  DollarSign,
  User,
  FileText,
  Clock
} from "lucide-react";

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

interface ClientDetailsDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  client: Client | null;
}

const ClientDetailsDialog = ({ open, onOpenChange, client }: ClientDetailsDialogProps) => {
  if (!client) return null;

  const getStatusColor = (status: string) => {
    switch (status) {
      case "active": return "bg-green-100 text-green-800 border-green-300";
      case "pending": return "bg-yellow-100 text-yellow-800 border-yellow-300";
      case "inactive": return "bg-red-100 text-red-800 border-red-300";
      default: return "bg-gray-100 text-gray-800 border-gray-300";
    }
  };

  const formatDate = (dateString: string) => {
    if (!dateString) return 'Not set';
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(amount);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <div className="flex items-center space-x-3">
            <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-gold-100 to-gold-200 border border-gold-300">
              <Building className="w-6 h-6 text-gold-600" />
            </div>
            <div>
              <DialogTitle className="text-xl font-orbitron font-bold text-gray-900">
                {client.name}
              </DialogTitle>
              <div className="flex items-center space-x-2 mt-1">
                <Badge className={getStatusColor(client.status)}>
                  {client.status}
                </Badge>
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className={`w-3 h-3 ${i < client.rating ? 'text-yellow-500 fill-current' : 'text-gray-300'}`} 
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </DialogHeader>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          {/* Contact Information */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900 border-b border-gray-200 pb-2">
              Contact Information
            </h3>
            
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <User className="w-4 h-4 text-gray-500" />
                <div>
                  <p className="text-sm text-gray-600">Contact Person</p>
                  <p className="font-medium text-gray-900">{client.contact_person || 'Not specified'}</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-gray-500" />
                <div>
                  <p className="text-sm text-gray-600">Email</p>
                  <p className="font-medium text-gray-900">{client.email || 'Not provided'}</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-gray-500" />
                <div>
                  <p className="text-sm text-gray-600">Phone</p>
                  <p className="font-medium text-gray-900">{client.phone || 'Not provided'}</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <MapPin className="w-4 h-4 text-gray-500" />
                <div>
                  <p className="text-sm text-gray-600">Location</p>
                  <p className="font-medium text-gray-900">{client.location || 'Not specified'}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Financial Information */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900 border-b border-gray-200 pb-2">
              Financial Details
            </h3>
            
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <DollarSign className="w-4 h-4 text-gray-500" />
                <div>
                  <p className="text-sm text-gray-600">Monthly Value</p>
                  <p className="font-semibold text-gold-600 text-lg">
                    {client.monthly_value ? formatCurrency(client.monthly_value) : 'Not set'}
                  </p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Calendar className="w-4 h-4 text-gray-500" />
                <div>
                  <p className="text-sm text-gray-600">Contract Start</p>
                  <p className="font-medium text-gray-900">{formatDate(client.contract_start_date)}</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Calendar className="w-4 h-4 text-gray-500" />
                <div>
                  <p className="text-sm text-gray-600">Contract End</p>
                  <p className="font-medium text-gray-900">{formatDate(client.contract_end_date)}</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Clock className="w-4 h-4 text-gray-500" />
                <div>
                  <p className="text-sm text-gray-600">Next Service</p>
                  <p className="font-medium text-gray-900">{formatDate(client.next_service)}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Address */}
        {client.address && (
          <div className="mt-6">
            <h3 className="text-lg font-semibold text-gray-900 border-b border-gray-200 pb-2 mb-3">
              Address
            </h3>
            <div className="bg-gray-50 rounded-lg p-4">
              <p className="text-gray-900">{client.address}</p>
            </div>
          </div>
        )}

        {/* Services */}
        {client.services && client.services.length > 0 && (
          <div className="mt-6">
            <h3 className="text-lg font-semibold text-gray-900 border-b border-gray-200 pb-2 mb-3">
              Services
            </h3>
            <div className="flex flex-wrap gap-2">
              {client.services.map((service, index) => (
                <Badge 
                  key={index} 
                  variant="secondary" 
                  className="bg-gold-100 text-gold-800 border-gold-300"
                >
                  {service}
                </Badge>
              ))}
            </div>
          </div>
        )}

        {/* Notes */}
        {client.notes && (
          <div className="mt-6">
            <h3 className="text-lg font-semibold text-gray-900 border-b border-gray-200 pb-2 mb-3">
              Notes
            </h3>
            <div className="bg-gray-50 rounded-lg p-4">
              <div className="flex items-start space-x-3">
                <FileText className="w-4 h-4 text-gray-500 mt-1" />
                <p className="text-gray-900">{client.notes}</p>
              </div>
            </div>
          </div>
        )}

        {/* Metadata */}
        <div className="mt-6 pt-6 border-t border-gray-200">
          <div className="grid grid-cols-2 gap-4 text-sm text-gray-600">
            <div>
              <span className="font-medium">Created:</span> {formatDate(client.created_at)}
            </div>
            <div>
              <span className="font-medium">Last Updated:</span> {formatDate(client.updated_at)}
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ClientDetailsDialog;