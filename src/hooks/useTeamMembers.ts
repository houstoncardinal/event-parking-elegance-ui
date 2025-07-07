import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';

interface TeamMemberStats {
  totalMembers: number;
  activeMembers: number;
  onLeaveMembers: number;
  inactiveMembers: number;
  departments: string[];
}

export const useTeamMembers = () => {
  const [stats, setStats] = useState<TeamMemberStats>({
    totalMembers: 0,
    activeMembers: 0,
    onLeaveMembers: 0,
    inactiveMembers: 0,
    departments: []
  });
  const [loading, setLoading] = useState(true);

  const fetchTeamStats = async () => {
    try {
      const { data, error } = await supabase
        .from('team_members' as any)
        .select('employment_status, department');

      if (error) throw error;

      const teamData = data as unknown as any[];
      const totalMembers = teamData?.length || 0;
      const activeMembers = teamData?.filter(member => member.employment_status === 'active').length || 0;
      const onLeaveMembers = teamData?.filter(member => member.employment_status === 'on_leave').length || 0;
      const inactiveMembers = teamData?.filter(member => member.employment_status === 'inactive').length || 0;
      const departments = teamData ? [...new Set(teamData.map(member => member.department).filter(Boolean))] : [];

      setStats({
        totalMembers,
        activeMembers,
        onLeaveMembers,
        inactiveMembers,
        departments
      });
    } catch (error) {
      console.error('Error fetching team stats:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTeamStats();
  }, []);

  return { stats, loading, refetch: fetchTeamStats };
};