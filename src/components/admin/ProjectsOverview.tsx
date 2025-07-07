import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  FolderOpen, 
  MapPin, 
  DollarSign, 
  Calendar,
  Users,
  MoreVertical,
  Plus,
  TrendingUp
} from "lucide-react";
import { supabase } from "@/integrations/supabase/client";

interface Project {
  id: string;
  name: string;
  client_name: string;
  status: string;
  priority: string;
  project_value: number;
  estimated_completion: string;
  progress: number;
  team_members: string[];
}

const ProjectsOverview = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchProjects = async () => {
    try {
      const { data, error } = await supabase
        .from('projects')
        .select('*')
        .in('status', ['active', 'planning'])
        .order('priority', { ascending: false })
        .order('project_value', { ascending: false })
        .limit(4);

      if (error) throw error;
      setProjects(data || []);
    } catch (error) {
      console.error('Error fetching projects:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProjects();
  }, []);

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

  return (
    <Card className="bg-white border border-gray-200 shadow-lg p-8">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h3 className="text-xl font-orbitron font-bold text-gray-900 mb-2">Active Projects</h3>
          <p className="text-gray-600">Overview of your current project portfolio</p>
        </div>
        
        <Button className="bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-600 hover:to-gold-700 text-white shadow-lg">
          <Plus className="w-4 h-4 mr-2" />
          Add Project
        </Button>
      </div>

      {loading ? (
        <div className="text-center py-8">
          <p className="text-gray-600">Loading projects...</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <div key={project.id} className="p-6 rounded-xl bg-gray-50 border border-gray-200 hover:bg-gray-100 transition-all duration-300 shadow-sm hover:shadow-md">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-start space-x-4">
                  <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-gold-100 to-gold-200 border border-gold-300">
                    <FolderOpen className="w-6 h-6 text-gold-600" />
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-orbitron font-semibold text-gray-900">{project.name}</h4>
                    <div className="flex items-center space-x-1 text-sm text-gray-600 mt-1">
                      <span>{project.client_name || 'No client assigned'}</span>
                    </div>
                  </div>
                </div>
                
                <Button variant="ghost" size="icon" className="w-8 h-8 text-gray-500 hover:text-gray-900">
                  <MoreVertical className="w-4 h-4" />
                </Button>
              </div>

              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Status & Priority</span>
                  <div className="flex space-x-2">
                    <Badge className={getStatusColor(project.status)}>
                      {project.status}
                    </Badge>
                    <Badge className={getPriorityColor(project.priority)}>
                      {project.priority}
                    </Badge>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Project Value</span>
                  <span className="text-lg font-semibold text-gold-600">${project.project_value?.toLocaleString()}</span>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Progress</span>
                  <div className="flex items-center space-x-2">
                    <div className="w-16 bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-gold-500 h-2 rounded-full transition-all duration-300" 
                        style={{ width: `${project.progress}%` }}
                      ></div>
                    </div>
                    <span className="text-sm font-medium text-gray-900">{project.progress}%</span>
                  </div>
                </div>
                
                {project.estimated_completion && (
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Due Date</span>
                    <div className="flex items-center space-x-1 text-sm text-gray-900">
                      <Calendar className="w-3 h-3" />
                      <span>{project.estimated_completion ? new Date(project.estimated_completion).toLocaleDateString() : 'Not scheduled'}</span>
                    </div>
                  </div>
                )}

                {project.team_members && project.team_members.length > 0 && (
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Team</span>
                    <div className="flex items-center space-x-1 text-sm text-gray-900">
                      <Users className="w-3 h-3" />
                      <span>{project.team_members.length} members</span>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </Card>
  );
};

export default ProjectsOverview;