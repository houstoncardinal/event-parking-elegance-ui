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

interface Project {
  id: string;
  name: string;
  client_id: string;
  client_name: string;
  description: string;
  status: string;
  priority: string;
  project_value: number;
  start_date: string;
  end_date: string;
  estimated_completion: string;
  progress: number;
  project_type: string;
  location: string;
  team_members: string[];
  services_required: string[];
  notes: string;
}

interface Client {
  id: string;
  name: string;
}

interface ProjectFormDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  project: Project | null;
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

const ProjectFormDialog = ({ open, onOpenChange, project, editMode, onSuccess }: ProjectFormDialogProps) => {
  const [formData, setFormData] = useState({
    name: "",
    client_id: "",
    client_name: "",
    description: "",
    status: "planning",
    priority: "medium",
    project_value: "",
    start_date: "",
    end_date: "",
    estimated_completion: "",
    progress: 0,
    project_type: "",
    location: "",
    team_members: [] as string[],
    services_required: [] as string[],
    notes: ""
  });
  const [clients, setClients] = useState<Client[]>([]);
  const [newTeamMember, setNewTeamMember] = useState("");
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const fetchClients = async () => {
    try {
      const { data, error } = await supabase
        .from('clients')
        .select('id, name')
        .order('name');

      if (error) throw error;
      setClients(data || []);
    } catch (error) {
      console.error('Error fetching clients:', error);
    }
  };

  useEffect(() => {
    if (open) {
      fetchClients();
    }
  }, [open]);

  useEffect(() => {
    if (editMode && project) {
      setFormData({
        name: project.name || "",
        client_id: project.client_id || "",
        client_name: project.client_name || "",
        description: project.description || "",
        status: project.status || "planning",
        priority: project.priority || "medium",
        project_value: project.project_value?.toString() || "",
        start_date: project.start_date ? project.start_date.split('T')[0] : "",
        end_date: project.end_date ? project.end_date.split('T')[0] : "",
        estimated_completion: project.estimated_completion ? project.estimated_completion.split('T')[0] : "",
        progress: project.progress || 0,
        project_type: project.project_type || "",
        location: project.location || "",
        team_members: project.team_members || [],
        services_required: project.services_required || [],
        notes: project.notes || ""
      });
    } else {
      setFormData({
        name: "",
        client_id: "",
        client_name: "",
        description: "",
        status: "planning",
        priority: "medium",
        project_value: "",
        start_date: "",
        end_date: "",
        estimated_completion: "",
        progress: 0,
        project_type: "",
        location: "",
        team_members: [],
        services_required: [],
        notes: ""
      });
    }
  }, [editMode, project, open]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const selectedClient = clients.find(c => c.id === formData.client_id);
      
      const projectData = {
        ...formData,
        project_value: parseFloat(formData.project_value) || 0,
        client_name: selectedClient?.name || formData.client_name,
        start_date: formData.start_date || null,
        end_date: formData.end_date || null,
        estimated_completion: formData.estimated_completion || null,
      };

      if (editMode && project) {
        const { error } = await supabase
          .from('projects')
          .update(projectData)
          .eq('id', project.id);

        if (error) throw error;

        toast({
          title: "Success",
          description: "Project updated successfully",
        });
      } else {
        const { error } = await supabase
          .from('projects')
          .insert([projectData]);

        if (error) throw error;

        toast({
          title: "Success",
          description: "Project created successfully",
        });
      }

      onSuccess();
    } catch (error) {
      console.error('Error saving project:', error);
      toast({
        title: "Error",
        description: `Failed to ${editMode ? 'update' : 'create'} project`,
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleServiceToggle = (service: string) => {
    const updatedServices = formData.services_required.includes(service)
      ? formData.services_required.filter(s => s !== service)
      : [...formData.services_required, service];
    
    setFormData({ ...formData, services_required: updatedServices });
  };

  const addTeamMember = () => {
    if (newTeamMember.trim() && !formData.team_members.includes(newTeamMember.trim())) {
      setFormData({ 
        ...formData, 
        team_members: [...formData.team_members, newTeamMember.trim()] 
      });
      setNewTeamMember("");
    }
  };

  const removeTeamMember = (member: string) => {
    setFormData({
      ...formData,
      team_members: formData.team_members.filter(m => m !== member)
    });
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-xl font-orbitron font-bold text-gray-900">
            {editMode ? 'Edit Project' : 'Add New Project'}
          </DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Basic Information */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="name" className="text-gray-700 font-medium">Project Name *</Label>
              <Input
                id="name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
                className="mt-1"
              />
            </div>
            
            <div>
              <Label htmlFor="client_id" className="text-gray-700 font-medium">Client</Label>
              <select
                id="client_id"
                value={formData.client_id}
                onChange={(e) => setFormData({ ...formData, client_id: e.target.value })}
                className="mt-1 w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gold-500"
              >
                <option value="">Select a client</option>
                {clients.map((client) => (
                  <option key={client.id} value={client.id}>
                    {client.name}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div>
            <Label htmlFor="description" className="text-gray-700 font-medium">Description</Label>
            <Textarea
              id="description"
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              className="mt-1"
              rows={3}
            />
          </div>

          {/* Status, Priority, and Value */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <Label htmlFor="status" className="text-gray-700 font-medium">Status</Label>
              <select
                id="status"
                value={formData.status}
                onChange={(e) => setFormData({ ...formData, status: e.target.value })}
                className="mt-1 w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gold-500"
              >
                <option value="planning">Planning</option>
                <option value="active">Active</option>
                <option value="on_hold">On Hold</option>
                <option value="completed">Completed</option>
                <option value="cancelled">Cancelled</option>
              </select>
            </div>
            
            <div>
              <Label htmlFor="priority" className="text-gray-700 font-medium">Priority</Label>
              <select
                id="priority"
                value={formData.priority}
                onChange={(e) => setFormData({ ...formData, priority: e.target.value })}
                className="mt-1 w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gold-500"
              >
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
                <option value="urgent">Urgent</option>
              </select>
            </div>
            
            <div>
              <Label htmlFor="project_value" className="text-gray-700 font-medium">Project Value ($)</Label>
              <Input
                id="project_value"
                type="number"
                step="0.01"
                value={formData.project_value}
                onChange={(e) => setFormData({ ...formData, project_value: e.target.value })}
                className="mt-1"
              />
            </div>
          </div>

          {/* Project Details */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="project_type" className="text-gray-700 font-medium">Project Type</Label>
              <Input
                id="project_type"
                value={formData.project_type}
                onChange={(e) => setFormData({ ...formData, project_type: e.target.value })}
                className="mt-1"
                placeholder="e.g., Event Parking, Corporate Event"
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

          {/* Progress */}
          <div>
            <Label htmlFor="progress" className="text-gray-700 font-medium">Progress (%)</Label>
            <div className="mt-1 flex items-center space-x-4">
              <Input
                id="progress"
                type="range"
                min="0"
                max="100"
                value={formData.progress}
                onChange={(e) => setFormData({ ...formData, progress: parseInt(e.target.value) })}
                className="flex-1"
              />
              <span className="text-sm font-medium text-gray-900 w-12">{formData.progress}%</span>
            </div>
          </div>

          {/* Dates */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <Label htmlFor="start_date" className="text-gray-700 font-medium">Start Date</Label>
              <Input
                id="start_date"
                type="date"
                value={formData.start_date}
                onChange={(e) => setFormData({ ...formData, start_date: e.target.value })}
                className="mt-1"
              />
            </div>
            
            <div>
              <Label htmlFor="end_date" className="text-gray-700 font-medium">End Date</Label>
              <Input
                id="end_date"
                type="date"
                value={formData.end_date}
                onChange={(e) => setFormData({ ...formData, end_date: e.target.value })}
                className="mt-1"
              />
            </div>
            
            <div>
              <Label htmlFor="estimated_completion" className="text-gray-700 font-medium">Estimated Completion</Label>
              <Input
                id="estimated_completion"
                type="date"
                value={formData.estimated_completion}
                onChange={(e) => setFormData({ ...formData, estimated_completion: e.target.value })}
                className="mt-1"
              />
            </div>
          </div>

          {/* Services Required */}
          <div>
            <Label className="text-gray-700 font-medium">Services Required</Label>
            <div className="mt-2 flex flex-wrap gap-2">
              {serviceOptions.map((service) => (
                <Badge
                  key={service}
                  variant={formData.services_required.includes(service) ? "default" : "outline"}
                  className={`cursor-pointer transition-colors ${
                    formData.services_required.includes(service)
                      ? "bg-gold-500 text-white hover:bg-gold-600"
                      : "border-gray-300 text-gray-700 hover:bg-gray-100"
                  }`}
                  onClick={() => handleServiceToggle(service)}
                >
                  {service}
                  {formData.services_required.includes(service) && (
                    <X className="w-3 h-3 ml-1" />
                  )}
                </Badge>
              ))}
            </div>
          </div>

          {/* Team Members */}
          <div>
            <Label className="text-gray-700 font-medium">Team Members</Label>
            <div className="mt-2 space-y-3">
              <div className="flex space-x-2">
                <Input
                  value={newTeamMember}
                  onChange={(e) => setNewTeamMember(e.target.value)}
                  placeholder="Add team member"
                  onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), addTeamMember())}
                />
                <Button type="button" onClick={addTeamMember} variant="outline">
                  Add
                </Button>
              </div>
              <div className="flex flex-wrap gap-2">
                {formData.team_members.map((member, index) => (
                  <Badge key={index} variant="secondary" className="bg-blue-100 text-blue-800">
                    {member}
                    <X 
                      className="w-3 h-3 ml-1 cursor-pointer" 
                      onClick={() => removeTeamMember(member)}
                    />
                  </Badge>
                ))}
              </div>
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
              placeholder="Any additional notes about this project..."
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
              {loading ? 'Saving...' : (editMode ? 'Update Project' : 'Create Project')}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default ProjectFormDialog;