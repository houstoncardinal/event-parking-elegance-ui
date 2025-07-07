import { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { X } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

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
}

interface ClientFormDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  client: Client | null;
  editMode: boolean;
  onSuccess: () => void;
}

const serviceOptions = [
  "Valet Parking",
  "Security",
  "Traffic Management",
  "Event Parking",
  "Shuttle Service",
  "Maintenance",
  "Consulting"
];

const ClientFormDialog = ({ open, onOpenChange, client, editMode, onSuccess }: ClientFormDialogProps) => {
  const [formData, setFormData] = useState({
    name: "",
    location: "",
    contact_person: "",
    email: "",
    phone: "",
    monthly_value: "",
    status: "active",
    rating: 5,
    next_service: "",
    services: [] as string[],
    address: "",
    contract_start_date: "",
    contract_end_date: "",
    notes: ""
  });
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    if (editMode && client) {
      setFormData({
        name: client.name || "",
        location: client.location || "",
        contact_person: client.contact_person || "",
        email: client.email || "",
        phone: client.phone || "",
        monthly_value: client.monthly_value?.toString() || "",
        status: client.status || "active",
        rating: client.rating || 5,
        next_service: client.next_service ? client.next_service.split('T')[0] : "",
        services: client.services || [],
        address: client.address || "",
        contract_start_date: client.contract_start_date ? client.contract_start_date.split('T')[0] : "",
        contract_end_date: client.contract_end_date ? client.contract_end_date.split('T')[0] : "",
        notes: client.notes || ""
      });
    } else {
      setFormData({
        name: "",
        location: "",
        contact_person: "",
        email: "",
        phone: "",
        monthly_value: "",
        status: "active",
        rating: 5,
        next_service: "",
        services: [],
        address: "",
        contract_start_date: "",
        contract_end_date: "",
        notes: ""
      });
    }
  }, [editMode, client, open]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const clientData = {
        ...formData,
        monthly_value: parseFloat(formData.monthly_value) || 0,
        next_service: formData.next_service || null,
        contract_start_date: formData.contract_start_date || null,
        contract_end_date: formData.contract_end_date || null,
      };

      if (editMode && client) {
        const { error } = await supabase
          .from('clients')
          .update(clientData)
          .eq('id', client.id);

        if (error) throw error;

        toast({
          title: "Success",
          description: "Client updated successfully",
        });
      } else {
        const { error } = await supabase
          .from('clients')
          .insert([clientData]);

        if (error) throw error;

        toast({
          title: "Success",
          description: "Client created successfully",
        });
      }

      onSuccess();
    } catch (error) {
      console.error('Error saving client:', error);
      toast({
        title: "Error",
        description: `Failed to ${editMode ? 'update' : 'create'} client`,
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleServiceToggle = (service: string) => {
    const updatedServices = formData.services.includes(service)
      ? formData.services.filter(s => s !== service)
      : [...formData.services, service];
    
    setFormData({ ...formData, services: updatedServices });
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-xl font-orbitron font-bold text-gray-900">
            {editMode ? 'Edit Client' : 'Add New Client'}
          </DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Basic Information */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="name" className="text-gray-700 font-medium">Client Name *</Label>
              <Input
                id="name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
                className="mt-1"
              />
            </div>
            
            <div>
              <Label htmlFor="location" className="text-gray-700 font-medium">Location</Label>
              <Input
                id="location"
                value={formData.location}
                onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                className="mt-1"
              />
            </div>
          </div>

          {/* Contact Information */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="contact_person" className="text-gray-700 font-medium">Contact Person</Label>
              <Input
                id="contact_person"
                value={formData.contact_person}
                onChange={(e) => setFormData({ ...formData, contact_person: e.target.value })}
                className="mt-1"
              />
            </div>
            
            <div>
              <Label htmlFor="email" className="text-gray-700 font-medium">Email</Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="mt-1"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="phone" className="text-gray-700 font-medium">Phone</Label>
              <Input
                id="phone"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="mt-1"
              />
            </div>
            
            <div>
              <Label htmlFor="monthly_value" className="text-gray-700 font-medium">Monthly Value ($)</Label>
              <Input
                id="monthly_value"
                type="number"
                step="0.01"
                value={formData.monthly_value}
                onChange={(e) => setFormData({ ...formData, monthly_value: e.target.value })}
                className="mt-1"
              />
            </div>
          </div>

          {/* Status and Rating */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="status" className="text-gray-700 font-medium">Status</Label>
              <select
                id="status"
                value={formData.status}
                onChange={(e) => setFormData({ ...formData, status: e.target.value })}
                className="mt-1 w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gold-500"
              >
                <option value="active">Active</option>
                <option value="pending">Pending</option>
                <option value="inactive">Inactive</option>
              </select>
            </div>
            
            <div>
              <Label htmlFor="rating" className="text-gray-700 font-medium">Rating (1-5)</Label>
              <Input
                id="rating"
                type="number"
                min="1"
                max="5"
                value={formData.rating}
                onChange={(e) => setFormData({ ...formData, rating: parseInt(e.target.value) || 1 })}
                className="mt-1"
              />
            </div>
          </div>

          {/* Services */}
          <div>
            <Label className="text-gray-700 font-medium">Services</Label>
            <div className="mt-2 flex flex-wrap gap-2">
              {serviceOptions.map((service) => (
                <Badge
                  key={service}
                  variant={formData.services.includes(service) ? "default" : "outline"}
                  className={`cursor-pointer transition-colors ${
                    formData.services.includes(service)
                      ? "bg-gold-500 text-white hover:bg-gold-600"
                      : "border-gray-300 text-gray-700 hover:bg-gray-100"
                  }`}
                  onClick={() => handleServiceToggle(service)}
                >
                  {service}
                  {formData.services.includes(service) && (
                    <X className="w-3 h-3 ml-1" />
                  )}
                </Badge>
              ))}
            </div>
          </div>

          {/* Address */}
          <div>
            <Label htmlFor="address" className="text-gray-700 font-medium">Address</Label>
            <Textarea
              id="address"
              value={formData.address}
              onChange={(e) => setFormData({ ...formData, address: e.target.value })}
              className="mt-1"
              rows={2}
            />
          </div>

          {/* Dates */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <Label htmlFor="contract_start_date" className="text-gray-700 font-medium">Contract Start</Label>
              <Input
                id="contract_start_date"
                type="date"
                value={formData.contract_start_date}
                onChange={(e) => setFormData({ ...formData, contract_start_date: e.target.value })}
                className="mt-1"
              />
            </div>
            
            <div>
              <Label htmlFor="contract_end_date" className="text-gray-700 font-medium">Contract End</Label>
              <Input
                id="contract_end_date"
                type="date"
                value={formData.contract_end_date}
                onChange={(e) => setFormData({ ...formData, contract_end_date: e.target.value })}
                className="mt-1"
              />
            </div>
            
            <div>
              <Label htmlFor="next_service" className="text-gray-700 font-medium">Next Service</Label>
              <Input
                id="next_service"
                type="date"
                value={formData.next_service}
                onChange={(e) => setFormData({ ...formData, next_service: e.target.value })}
                className="mt-1"
              />
            </div>
          </div>

          {/* Notes */}
          <div>
            <Label htmlFor="notes" className="text-gray-700 font-medium">Notes</Label>
            <Textarea
              id="notes"
              value={formData.notes}
              onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
              className="mt-1"
              rows={3}
              placeholder="Any additional notes about this client..."
            />
          </div>

          {/* Form Actions */}
          <div className="flex justify-end space-x-3 pt-6 border-t border-gray-200">
            <Button
              type="button"
              variant="outline"
              onClick={() => onOpenChange(false)}
              disabled={loading}
            >
              Cancel
            </Button>
            <Button
              type="submit"
              disabled={loading}
              className="bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-600 hover:to-gold-700 text-white"
            >
              {loading ? 'Saving...' : (editMode ? 'Update Client' : 'Create Client')}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default ClientFormDialog;