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
      setLoading(true);
      const { data, error } = await supabase
        .from('team_members')
        .select('employment_status, department')
        .limit(100); // Limit for faster loading

      if (error) throw error;

      const teamData = data || [];
      const totalMembers = teamData.length;
      const activeMembers = teamData.filter(member => member.employment_status === 'active').length;
      const onLeaveMembers = teamData.filter(member => member.employment_status === 'on_leave').length;
      const inactiveMembers = teamData.filter(member => member.employment_status === 'inactive').length;
      const departments = [...new Set(teamData.map(member => member.department).filter(Boolean))];

      setStats({
        totalMembers,
        activeMembers,
        onLeaveMembers,
        inactiveMembers,
        departments
      });
    } catch (error) {
      console.error('Error fetching team stats:', error);
      setStats({
        totalMembers: 0,
        activeMembers: 0,
        onLeaveMembers: 0,
        inactiveMembers: 0,
        departments: []
      });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTeamStats();
  }, []);

  return { stats, loading, refetch: fetchTeamStats };
};