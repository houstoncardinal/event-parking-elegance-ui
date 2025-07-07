import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { 
  FolderOpen, 
  MapPin, 
  Calendar, 
  DollarSign,
  User,
  FileText,
  Clock,
  TrendingUp,
  Users,
  Target
} from "lucide-react";

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
  created_at: string;
  updated_at: string;
}

interface ProjectDetailsDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  project: Project | null;
}

const ProjectDetailsDialog = ({ open, onOpenChange, project }: ProjectDetailsDialogProps) => {
  if (!project) return null;

  const getStatusColor = (status: string) => {
    switch (status) {
      case "active": return "bg-green-100 text-green-800 border-green-300";
      case "planning": return "bg-blue-100 text-blue-800 border-blue-300";
      case "on_hold": return "bg-yellow-100 text-yellow-800 border-yellow-300";
      case "completed": return "bg-purple-100 text-purple-800 border-purple-300";
      case "cancelled": return "bg-red-100 text-red-800 border-red-300";
      default: return "bg-gray-100 text-gray-800 border-gray-300";
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "urgent": return "bg-red-100 text-red-800 border-red-300";
      case "high": return "bg-orange-100 text-orange-800 border-orange-300";
      case "medium": return "bg-yellow-100 text-yellow-800 border-yellow-300";
      case "low": return "bg-green-100 text-green-800 border-green-300";
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
      <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <div className="flex items-center space-x-3">
            <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-gold-100 to-gold-200 border border-gold-300">
              <FolderOpen className="w-6 h-6 text-gold-600" />
            </div>
            <div>
              <DialogTitle className="text-xl font-orbitron font-bold text-gray-900">
                {project.name}
              </DialogTitle>
              <div className="flex items-center space-x-2 mt-1">
                <Badge className={getStatusColor(project.status)}>
                  {project.status.replace('_', ' ')}
                </Badge>
                <Badge className={getPriorityColor(project.priority)}>
                  {project.priority}
                </Badge>
              </div>
            </div>
          </div>
        </DialogHeader>

        {/* Progress Bar */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-gray-700">Project Progress</span>
            <span className="text-sm font-medium text-gray-900">{project.progress}%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-3">
            <div 
              className="bg-gradient-to-r from-gold-500 to-gold-600 h-3 rounded-full transition-all duration-300" 
              style={{ width: `${project.progress}%` }}
            ></div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Project Information */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900 border-b border-gray-200 pb-2">
              Project Information
            </h3>
            
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <User className="w-4 h-4 text-gray-500" />
                <div>
                  <p className="text-sm text-gray-600">Client</p>
                  <p className="font-medium text-gray-900">{project.client_name || 'No client assigned'}</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Target className="w-4 h-4 text-gray-500" />
                <div>
                  <p className="text-sm text-gray-600">Project Type</p>
                  <p className="font-medium text-gray-900">{project.project_type || 'General'}</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <MapPin className="w-4 h-4 text-gray-500" />
                <div>
                  <p className="text-sm text-gray-600">Location</p>
                  <p className="font-medium text-gray-900">{project.location || 'Not specified'}</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <DollarSign className="w-4 h-4 text-gray-500" />
                <div>
                  <p className="text-sm text-gray-600">Project Value</p>
                  <p className="font-semibold text-gold-600 text-lg">
                    {project.project_value ? formatCurrency(project.project_value) : 'Not set'}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Timeline Information */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900 border-b border-gray-200 pb-2">
              Timeline
            </h3>
            
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Calendar className="w-4 h-4 text-gray-500" />
                <div>
                  <p className="text-sm text-gray-600">Start Date</p>
                  <p className="font-medium text-gray-900">{formatDate(project.start_date)}</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Calendar className="w-4 h-4 text-gray-500" />
                <div>
                  <p className="text-sm text-gray-600">End Date</p>
                  <p className="font-medium text-gray-900">{formatDate(project.end_date)}</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Clock className="w-4 h-4 text-gray-500" />
                <div>
                  <p className="text-sm text-gray-600">Estimated Completion</p>
                  <p className="font-medium text-gray-900">{formatDate(project.estimated_completion)}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Description */}
        {project.description && (
          <div className="mt-6">
            <h3 className="text-lg font-semibold text-gray-900 border-b border-gray-200 pb-2 mb-3">
              Description
            </h3>
            <div className="bg-gray-50 rounded-lg p-4">
              <p className="text-gray-900">{project.description}</p>
            </div>
          </div>
        )}

        {/* Team Members */}
        {project.team_members && project.team_members.length > 0 && (
          <div className="mt-6">
            <h3 className="text-lg font-semibold text-gray-900 border-b border-gray-200 pb-2 mb-3">
              <div className="flex items-center space-x-2">
                <Users className="w-5 h-5" />
                <span>Team Members</span>
              </div>
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.team_members.map((member, index) => (
                <Badge 
                  key={index} 
                  variant="secondary" 
                  className="bg-blue-100 text-blue-800 border-blue-300"
                >
                  {member}
                </Badge>
              ))}
            </div>
          </div>
        )}

        {/* Services Required */}
        {project.services_required && project.services_required.length > 0 && (
          <div className="mt-6">
            <h3 className="text-lg font-semibold text-gray-900 border-b border-gray-200 pb-2 mb-3">
              Services Required
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.services_required.map((service, index) => (
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
        {project.notes && (
          <div className="mt-6">
            <h3 className="text-lg font-semibold text-gray-900 border-b border-gray-200 pb-2 mb-3">
              Notes
            </h3>
            <div className="bg-gray-50 rounded-lg p-4">
              <div className="flex items-start space-x-3">
                <FileText className="w-4 h-4 text-gray-500 mt-1" />
                <p className="text-gray-900">{project.notes}</p>
              </div>
            </div>
          </div>
        )}

        {/* Metadata */}
        <div className="mt-6 pt-6 border-t border-gray-200">
          <div className="grid grid-cols-2 gap-4 text-sm text-gray-600">
            <div>
              <span className="font-medium">Created:</span> {formatDate(project.created_at)}
            </div>
            <div>
              <span className="font-medium">Last Updated:</span> {formatDate(project.updated_at)}
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProjectDetailsDialog;