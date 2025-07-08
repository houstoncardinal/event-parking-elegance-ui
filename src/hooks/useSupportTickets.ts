import { useState, useEffect, useCallback } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { Tables, TablesInsert, TablesUpdate } from '@/integrations/supabase/types';

export type SupportTicket = Tables<'support_tickets'>;
export type TicketComment = Tables<'ticket_comments'>;
export type TicketActivity = Tables<'ticket_activities'>;

export type TicketStatus = 'open' | 'in_progress' | 'waiting_for_customer' | 'resolved' | 'closed';
export type TicketPriority = 'low' | 'normal' | 'high' | 'urgent' | 'critical';
export type TicketSource = 'web' | 'email' | 'phone' | 'chat' | 'social';

export interface TicketFilters {
  search?: string;
  status?: TicketStatus;
  priority?: TicketPriority;
  category?: string;
  assigned_to?: string;
  source?: TicketSource;
  tags?: string[];
  date_from?: string;
  date_to?: string;
}

export interface TicketStats {
  total: number;
  open: number;
  inProgress: number;
  resolved: number;
  closed: number;
  urgent: number;
  critical: number;
  unassigned: number;
  avgResolutionTime: number;
  customerSatisfaction: number;
}

export interface CreateTicketData {
  title: string;
  description: string;
  category: string;
  customer_name: string;
  customer_email: string;
  customer_phone?: string;
  priority?: TicketPriority;
  source?: TicketSource;
  tags?: string[];
  assigned_to_name?: string;
  internal_notes?: string;
}

export const useSupportTickets = () => {
  const [tickets, setTickets] = useState<SupportTicket[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [filters, setFilters] = useState<TicketFilters>({});
  const [stats, setStats] = useState<TicketStats>({
    total: 0,
    open: 0,
    inProgress: 0,
    resolved: 0,
    closed: 0,
    urgent: 0,
    critical: 0,
    unassigned: 0,
    avgResolutionTime: 0,
    customerSatisfaction: 0
  });

  // Fetch tickets with filters
  const fetchTickets = useCallback(async (customFilters?: TicketFilters) => {
    try {
      setLoading(true);
      setError(null);

      let query = supabase
        .from('support_tickets')
        .select('*')
        .order('created_at', { ascending: false });

      const appliedFilters = customFilters || filters;

      // Apply filters
      if (appliedFilters.search) {
        query = query.or(`title.ilike.%${appliedFilters.search}%,description.ilike.%${appliedFilters.search}%,customer_name.ilike.%${appliedFilters.search}%,customer_email.ilike.%${appliedFilters.search}%`);
      }

      if (appliedFilters.status) {
        query = query.eq('status', appliedFilters.status);
      }

      if (appliedFilters.priority) {
        query = query.eq('priority', appliedFilters.priority);
      }

      if (appliedFilters.category) {
        query = query.eq('category', appliedFilters.category);
      }

      if (appliedFilters.assigned_to) {
        query = query.eq('assigned_to', appliedFilters.assigned_to);
      }

      if (appliedFilters.source) {
        query = query.eq('source', appliedFilters.source);
      }

      if (appliedFilters.tags && appliedFilters.tags.length > 0) {
        query = query.overlaps('tags', appliedFilters.tags);
      }

      if (appliedFilters.date_from) {
        query = query.gte('created_at', appliedFilters.date_from);
      }

      if (appliedFilters.date_to) {
        query = query.lte('created_at', appliedFilters.date_to);
      }

      const { data, error: fetchError } = await query;

      if (fetchError) {
        throw fetchError;
      }

      setTickets(data || []);
    } catch (err) {
      console.error('Error fetching tickets:', err);
      setError(err instanceof Error ? err.message : 'Failed to fetch tickets');
    } finally {
      setLoading(false);
    }
  }, [filters]);

  // Calculate statistics
  const calculateStats = useCallback((ticketData: SupportTicket[]) => {
    const total = ticketData.length;
    const open = ticketData.filter(t => t.status === 'open').length;
    const inProgress = ticketData.filter(t => t.status === 'in_progress').length;
    const resolved = ticketData.filter(t => t.status === 'resolved').length;
    const closed = ticketData.filter(t => t.status === 'closed').length;
    const urgent = ticketData.filter(t => t.priority === 'urgent').length;
    const critical = ticketData.filter(t => t.priority === 'critical').length;
    const unassigned = ticketData.filter(t => !t.assigned_to).length;

    // Calculate average resolution time
    const resolvedTickets = ticketData.filter(t => t.resolved_at && t.created_at);
    const avgResolutionTime = resolvedTickets.length > 0 
      ? resolvedTickets.reduce((acc, ticket) => {
          const created = new Date(ticket.created_at).getTime();
          const resolved = new Date(ticket.resolved_at!).getTime();
          return acc + (resolved - created);
        }, 0) / resolvedTickets.length / (1000 * 60 * 60 * 24) // Convert to days
      : 0;

    // Calculate average customer satisfaction
    const ratedTickets = ticketData.filter(t => t.customer_satisfaction_rating);
    const customerSatisfaction = ratedTickets.length > 0
      ? ratedTickets.reduce((acc, ticket) => acc + (ticket.customer_satisfaction_rating || 0), 0) / ratedTickets.length
      : 0;

    setStats({
      total,
      open,
      inProgress,
      resolved,
      closed,
      urgent,
      critical,
      unassigned,
      avgResolutionTime,
      customerSatisfaction
    });
  }, []);

  // Create new ticket
  const createTicket = async (ticketData: CreateTicketData): Promise<SupportTicket> => {
    try {
      const { data: { user } } = await supabase.auth.getUser();
      
      const newTicket: TablesInsert<'support_tickets'> = {
        title: ticketData.title,
        description: ticketData.description,
        category: ticketData.category,
        customer_name: ticketData.customer_name,
        customer_email: ticketData.customer_email,
        customer_phone: ticketData.customer_phone,
        priority: ticketData.priority || 'normal',
        source: ticketData.source || 'web',
        tags: ticketData.tags || [],
        assigned_to_name: ticketData.assigned_to_name,
        internal_notes: ticketData.internal_notes,
        created_by: user?.id,
        created_by_name: user?.user_metadata?.full_name || 'Admin User'
      };

      const { data, error } = await supabase
        .from('support_tickets')
        .insert(newTicket)
        .select()
        .single();

      if (error) throw error;

      // Refresh tickets list
      await fetchTickets();
      return data;
    } catch (err) {
      console.error('Error creating ticket:', err);
      throw err;
    }
  };

  // Update ticket
  const updateTicket = async (id: string, updates: Partial<TablesUpdate<'support_tickets'>>): Promise<SupportTicket> => {
    try {
      const { data, error } = await supabase
        .from('support_tickets')
        .update(updates)
        .eq('id', id)
        .select()
        .single();

      if (error) throw error;

      // Update local state
      setTickets(prev => prev.map(ticket => 
        ticket.id === id ? { ...ticket, ...data } : ticket
      ));

      return data;
    } catch (err) {
      console.error('Error updating ticket:', err);
      throw err;
    }
  };

  // Update ticket status
  const updateStatus = async (id: string, status: TicketStatus): Promise<SupportTicket> => {
    const updates: Partial<TablesUpdate<'support_tickets'>> = { status };
    
    if (status === 'resolved') {
      updates.resolved_at = new Date().toISOString();
    } else if (status === 'closed') {
      updates.closed_at = new Date().toISOString();
    }

    return updateTicket(id, updates);
  };

  // Update ticket priority
  const updatePriority = async (id: string, priority: TicketPriority): Promise<SupportTicket> => {
    return updateTicket(id, { priority });
  };

  // Assign ticket
  const assignTicket = async (id: string, assignedTo: string, assignedToName: string): Promise<SupportTicket> => {
    return updateTicket(id, { 
      assigned_to: assignedTo,
      assigned_to_name: assignedToName 
    });
  };

  // Add comment to ticket
  const addComment = async (ticketId: string, content: string, isInternal: boolean = false): Promise<TicketComment> => {
    try {
      const { data: { user } } = await supabase.auth.getUser();
      
      const newComment: TablesInsert<'ticket_comments'> = {
        ticket_id: ticketId,
        author_id: user?.id,
        author_name: user?.user_metadata?.full_name || 'Admin User',
        author_type: 'agent',
        content,
        is_internal: isInternal
      };

      const { data, error } = await supabase
        .from('ticket_comments')
        .insert(newComment)
        .select()
        .single();

      if (error) throw error;

      return data;
    } catch (err) {
      console.error('Error adding comment:', err);
      throw err;
    }
  };

  // Get ticket comments
  const getTicketComments = async (ticketId: string): Promise<TicketComment[]> => {
    try {
      const { data, error } = await supabase
        .from('ticket_comments')
        .select('*')
        .eq('ticket_id', ticketId)
        .order('created_at', { ascending: true });

      if (error) throw error;
      return data || [];
    } catch (err) {
      console.error('Error fetching comments:', err);
      throw err;
    }
  };

  // Get ticket activities
  const getTicketActivities = async (ticketId: string): Promise<TicketActivity[]> => {
    try {
      const { data, error } = await supabase
        .from('ticket_activities')
        .select('*')
        .eq('ticket_id', ticketId)
        .order('created_at', { ascending: false });

      if (error) throw error;
      return data || [];
    } catch (err) {
      console.error('Error fetching activities:', err);
      throw err;
    }
  };

  // Delete ticket
  const deleteTicket = async (id: string): Promise<void> => {
    try {
      const { error } = await supabase
        .from('support_tickets')
        .delete()
        .eq('id', id);

      if (error) throw error;

      // Update local state
      setTickets(prev => prev.filter(ticket => ticket.id !== id));
    } catch (err) {
      console.error('Error deleting ticket:', err);
      throw err;
    }
  };

  // Apply filters
  const applyFilters = useCallback((newFilters: TicketFilters) => {
    setFilters(newFilters);
    fetchTickets(newFilters);
  }, [fetchTickets]);

  // Clear filters
  const clearFilters = useCallback(() => {
    setFilters({});
    fetchTickets({});
  }, [fetchTickets]);

  // Get categories
  const getCategories = useCallback(() => {
    const categories = [...new Set(tickets.map(ticket => ticket.category))];
    return categories.sort();
  }, [tickets]);

  // Get team members (for assignment)
  const getTeamMembers = useCallback(() => {
    const members = [...new Set(tickets.map(ticket => ticket.assigned_to_name).filter(Boolean))];
    return members.sort();
  }, [tickets]);

  // Get tags
  const getTags = useCallback(() => {
    const allTags = tickets.flatMap(ticket => ticket.tags || []);
    const uniqueTags = [...new Set(allTags)];
    return uniqueTags.sort();
  }, [tickets]);

  // Export tickets to CSV
  const exportTickets = (): string => {
    const headers = [
      'Ticket Number',
      'Title',
      'Status',
      'Priority',
      'Category',
      'Customer Name',
      'Customer Email',
      'Customer Phone',
      'Assigned To',
      'Source',
      'Tags',
      'Created At',
      'Updated At',
      'Resolved At'
    ];

    const csvData = tickets.map(ticket => [
      ticket.ticket_number,
      ticket.title,
      ticket.status,
      ticket.priority,
      ticket.category,
      ticket.customer_name,
      ticket.customer_email,
      ticket.customer_phone || '',
      ticket.assigned_to_name || '',
      ticket.source,
      (ticket.tags || []).join('; '),
      new Date(ticket.created_at).toLocaleDateString(),
      new Date(ticket.updated_at).toLocaleDateString(),
      ticket.resolved_at ? new Date(ticket.resolved_at).toLocaleDateString() : ''
    ]);

    const csvContent = [headers, ...csvData]
      .map(row => row.map(field => `"${field}"`).join(','))
      .join('\n');

    return csvContent;
  };

  // Initialize
  useEffect(() => {
    fetchTickets();
  }, [fetchTickets]);

  // Update stats when tickets change
  useEffect(() => {
    calculateStats(tickets);
  }, [tickets, calculateStats]);

  return {
    tickets,
    loading,
    error,
    filters,
    stats,
    fetchTickets,
    createTicket,
    updateTicket,
    updateStatus,
    updatePriority,
    assignTicket,
    addComment,
    getTicketComments,
    getTicketActivities,
    deleteTicket,
    applyFilters,
    clearFilters,
    getCategories,
    getTeamMembers,
    getTags,
    exportTickets
  };
}; 