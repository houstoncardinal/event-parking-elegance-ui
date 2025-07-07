import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';

interface ClientStats {
  totalClients: number;
  activeClients: number;
  pendingClients: number;
  totalMonthlyRevenue: number;
}

export const useClients = () => {
  const [stats, setStats] = useState<ClientStats>({
    totalClients: 0,
    activeClients: 0,
    pendingClients: 0,
    totalMonthlyRevenue: 0
  });
  const [loading, setLoading] = useState(true);

  const fetchClientStats = async () => {
    try {
      const { data, error } = await supabase
        .from('clients')
        .select('status, monthly_value');

      if (error) throw error;

      const totalClients = data?.length || 0;
      const activeClients = data?.filter(client => client.status === 'active').length || 0;
      const pendingClients = data?.filter(client => client.status === 'pending').length || 0;
      const totalMonthlyRevenue = data?.reduce((sum, client) => {
        return sum + (client.monthly_value || 0);
      }, 0) || 0;

      setStats({
        totalClients,
        activeClients,
        pendingClients,
        totalMonthlyRevenue
      });
    } catch (error) {
      console.error('Error fetching client stats:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchClientStats();
  }, []);

  return { stats, loading, refetch: fetchClientStats };
};