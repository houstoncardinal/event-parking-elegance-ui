import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';

interface ProjectStats {
  totalProjects: number;
  activeProjects: number;
  planningProjects: number;
  completedProjects: number;
  totalProjectValue: number;
}

export const useProjects = () => {
  const [stats, setStats] = useState<ProjectStats>({
    totalProjects: 0,
    activeProjects: 0,
    planningProjects: 0,
    completedProjects: 0,
    totalProjectValue: 0
  });
  const [loading, setLoading] = useState(true);

  const fetchProjectStats = async () => {
    try {
      const { data, error } = await supabase
        .from('projects')
        .select('status, project_value');

      if (error) throw error;

      const totalProjects = data?.length || 0;
      const activeProjects = data?.filter(project => project.status === 'active').length || 0;
      const planningProjects = data?.filter(project => project.status === 'planning').length || 0;
      const completedProjects = data?.filter(project => project.status === 'completed').length || 0;
      const totalProjectValue = data?.reduce((sum, project) => {
        return sum + (project.project_value || 0);
      }, 0) || 0;

      setStats({
        totalProjects,
        activeProjects,
        planningProjects,
        completedProjects,
        totalProjectValue
      });
    } catch (error) {
      console.error('Error fetching project stats:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProjectStats();
  }, []);

  return { stats, loading, refetch: fetchProjectStats };
};