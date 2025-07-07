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
  FolderOpen,
  MapPin,
  Calendar,
  Users,
  DollarSign,
  TrendingUp
} from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import ProjectFormDialog from "./ProjectFormDialog";
import ProjectDetailsDialog from "./ProjectDetailsDialog";

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

const ProjectManagement = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [priorityFilter, setPriorityFilter] = useState("all");
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [editMode, setEditMode] = useState(false);
  const { toast } = useToast();

  const fetchProjects = async () => {
    try {
      const { data, error } = await supabase
        .from('projects')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setProjects(data || []);
    } catch (error) {
      console.error('Error fetching projects:', error);
      toast({
        title: "Error",
        description: "Failed to fetch projects",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteProject = async (projectId: string) => {
    if (!confirm('Are you sure you want to delete this project?')) return;

    try {
      const { error } = await supabase
        .from('projects')
        .delete()
        .eq('id', projectId);

      if (error) throw error;

      setProjects(projects.filter(project => project.id !== projectId));
      toast({
        title: "Success",
        description: "Project deleted successfully",
      });
    } catch (error) {
      console.error('Error deleting project:', error);
      toast({
        title: "Error",
        description: "Failed to delete project",
        variant: "destructive",
      });
    }
  };

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

  const filteredProjects = projects.filter(project => {
    const matchesSearch = project.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.client_name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.location?.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === "all" || project.status === statusFilter;
    const matchesPriority = priorityFilter === "all" || project.priority === priorityFilter;
    return matchesSearch && matchesStatus && matchesPriority;
  });

  useEffect(() => {
    fetchProjects();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="text-lg text-gray-600">Loading projects...</div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header with Actions */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h2 className="text-2xl font-orbitron font-bold text-gray-900">Project Management</h2>
          <p className="text-gray-600">Manage your projects and track progress</p>
        </div>
        
        <Button 
          onClick={() => {
            setSelectedProject(null);
            setEditMode(false);
            setIsFormOpen(true);
          }}
          className="bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-600 hover:to-gold-700 text-white shadow-lg"
        >
          <Plus className="w-4 h-4 mr-2" />
          Add Project
        </Button>
      </div>

      {/* Search and Filters */}
      <Card className="p-6 bg-white border border-gray-200 shadow-sm">
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-500" />
            <Input
              placeholder="Search projects..."
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
              <option value="planning">Planning</option>
              <option value="active">Active</option>
              <option value="on_hold">On Hold</option>
              <option value="completed">Completed</option>
              <option value="cancelled">Cancelled</option>
            </select>
            
            <select
              value={priorityFilter}
              onChange={(e) => setPriorityFilter(e.target.value)}
              className="border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-gold-500"
            >
              <option value="all">All Priority</option>
              <option value="urgent">Urgent</option>
              <option value="high">High</option>
              <option value="medium">Medium</option>
              <option value="low">Low</option>
            </select>
          </div>
        </div>
      </Card>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project) => (
          <Card key={project.id} className="bg-white border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300">
            <div className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-start space-x-3">
                  <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-gold-100 to-gold-200 border border-gold-300">
                    <FolderOpen className="w-6 h-6 text-gold-600" />
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-lg font-orbitron font-semibold text-gray-900">{project.name}</h3>
                    <div className="flex items-center space-x-1 text-sm text-gray-600 mt-1">
                      <span>{project.client_name || 'No client assigned'}</span>
                    </div>
                  </div>
                </div>
                
                <div className="flex flex-col space-y-1">
                  <Badge className={getStatusColor(project.status)}>
                    {project.status.replace('_', ' ')}
                  </Badge>
                  <Badge className={getPriorityColor(project.priority)}>
                    {project.priority}
                  </Badge>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">Progress</span>
                  <div className="flex items-center space-x-2">
                    <div className="w-16 bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-gold-500 h-2 rounded-full transition-all duration-300" 
                        style={{ width: `${project.progress}%` }}
                      ></div>
                    </div>
                    <span className="text-gray-900 font-medium text-xs">{project.progress}%</span>
                  </div>
                </div>
                
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">Value</span>
                  <span className="text-gold-600 font-semibold">${project.project_value?.toLocaleString()}</span>
                </div>
                
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">Type</span>
                  <span className="text-gray-900 font-medium">{project.project_type || 'General'}</span>
                </div>

                {project.estimated_completion && (
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">Due Date</span>
                    <div className="flex items-center space-x-1 text-gray-900">
                      <Calendar className="w-3 h-3" />
                      <span>{new Date(project.estimated_completion).toLocaleDateString()}</span>
                    </div>
                  </div>
                )}

                {project.team_members && project.team_members.length > 0 && (
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">Team</span>
                    <div className="flex items-center space-x-1 text-gray-900">
                      <Users className="w-3 h-3" />
                      <span>{project.team_members.length} members</span>
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
                        setSelectedProject(project);
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
                        setSelectedProject(project);
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
                    onClick={() => handleDeleteProject(project.id)}
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

      {filteredProjects.length === 0 && (
        <Card className="p-12 text-center bg-white border border-gray-200">
          <FolderOpen className="w-12 h-12 text-gray-400 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-900 mb-2">No projects found</h3>
          <p className="text-gray-600 mb-6">
            {searchTerm || statusFilter !== "all" || priorityFilter !== "all"
              ? "No projects match your current filters." 
              : "Get started by adding your first project."}
          </p>
          {(!searchTerm && statusFilter === "all" && priorityFilter === "all") && (
            <Button 
              onClick={() => {
                setSelectedProject(null);
                setEditMode(false);
                setIsFormOpen(true);
              }}
              className="bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-600 hover:to-gold-700 text-white"
            >
              <Plus className="w-4 h-4 mr-2" />
              Add First Project
            </Button>
          )}
        </Card>
      )}

      {/* Dialogs */}
      <ProjectFormDialog
        open={isFormOpen}
        onOpenChange={setIsFormOpen}
        project={selectedProject}
        editMode={editMode}
        onSuccess={() => {
          fetchProjects();
          setIsFormOpen(false);
          setSelectedProject(null);
          setEditMode(false);
        }}
      />

      <ProjectDetailsDialog
        open={isDetailsOpen}
        onOpenChange={setIsDetailsOpen}
        project={selectedProject}
      />
    </div>
  );
};

export default ProjectManagement;