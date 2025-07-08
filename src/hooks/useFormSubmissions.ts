import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { Tables } from '@/integrations/supabase/types';

export type FormSubmission = Tables<'form_submissions'>;

export type FormSubmissionFilters = {
  form_type?: string;
  status?: string;
  priority?: string;
  date_from?: string;
  date_to?: string;
  search?: string;
};

export const useFormSubmissions = () => {
  const [submissions, setSubmissions] = useState<FormSubmission[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [filters, setFilters] = useState<FormSubmissionFilters>({});

  // Fetch all form submissions
  const fetchSubmissions = async (filters: FormSubmissionFilters = {}) => {
    try {
      setLoading(true);
      setError(null);

      let query = supabase
        .from('form_submissions')
        .select('*')
        .order('created_at', { ascending: false });

      // Apply filters
      if (filters.form_type) {
        query = query.eq('form_type', filters.form_type);
      }
      if (filters.status) {
        query = query.eq('status', filters.status);
      }
      if (filters.priority) {
        query = query.eq('priority', filters.priority);
      }
      if (filters.date_from) {
        query = query.gte('created_at', filters.date_from);
      }
      if (filters.date_to) {
        query = query.lte('created_at', filters.date_to);
      }
      if (filters.search) {
        query = query.or(
          `first_name.ilike.%${filters.search}%,last_name.ilike.%${filters.search}%,email.ilike.%${filters.search}%,event_location.ilike.%${filters.search}%`
        );
      }

      const { data, error } = await query;

      if (error) {
        throw error;
      }

      setSubmissions(data || []);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  // Create new form submission
  const createSubmission = async (submission: Omit<FormSubmission, 'id' | 'created_at' | 'updated_at'>) => {
    try {
      const { data, error } = await supabase
        .from('form_submissions')
        .insert(submission)
        .select()
        .single();

      if (error) {
        throw error;
      }

      setSubmissions(prev => [data, ...prev]);
      return data;
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to create submission');
      throw err;
    }
  };

  // Update form submission
  const updateSubmission = async (id: string, updates: Partial<FormSubmission>) => {
    try {
      const { data, error } = await supabase
        .from('form_submissions')
        .update(updates)
        .eq('id', id)
        .select()
        .single();

      if (error) {
        throw error;
      }

      setSubmissions(prev => 
        prev.map(submission => 
          submission.id === id ? data : submission
        )
      );
      return data;
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to update submission');
      throw err;
    }
  };

  // Delete form submission
  const deleteSubmission = async (id: string) => {
    try {
      const { error } = await supabase
        .from('form_submissions')
        .delete()
        .eq('id', id);

      if (error) {
        throw error;
      }

      setSubmissions(prev => prev.filter(submission => submission.id !== id));
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to delete submission');
      throw err;
    }
  };

  // Update submission status
  const updateStatus = async (id: string, status: string) => {
    const updates: Partial<FormSubmission> = { status };
    
    if (status === 'contacted') {
      updates.contacted_at = new Date().toISOString();
    } else if (status === 'booked') {
      updates.responded_at = new Date().toISOString();
    }

    return updateSubmission(id, updates);
  };

  // Update submission priority
  const updatePriority = async (id: string, priority: string) => {
    return updateSubmission(id, { priority });
  };

  // Add admin notes
  const addNotes = async (id: string, notes: string) => {
    return updateSubmission(id, { admin_notes: notes });
  };

  // Assign submission to team member
  const assignTo = async (id: string, teamMemberId: string | null) => {
    return updateSubmission(id, { assigned_to: teamMemberId });
  };

  // Get submission statistics
  const getStats = () => {
    const total = submissions.length;
    const newCount = submissions.filter(s => s.status === 'new').length;
    const reviewedCount = submissions.filter(s => s.status === 'reviewed').length;
    const contactedCount = submissions.filter(s => s.status === 'contacted').length;
    const bookedCount = submissions.filter(s => s.status === 'booked').length;
    
    const urgentCount = submissions.filter(s => s.priority === 'urgent').length;
    const highCount = submissions.filter(s => s.priority === 'high').length;

    const formTypeStats = submissions.reduce((acc, submission) => {
      acc[submission.form_type] = (acc[submission.form_type] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);

    return {
      total,
      newCount,
      reviewedCount,
      contactedCount,
      bookedCount,
      urgentCount,
      highCount,
      formTypeStats
    };
  };

  // Apply filters and refetch
  const applyFilters = (newFilters: FormSubmissionFilters) => {
    setFilters(newFilters);
    fetchSubmissions(newFilters);
  };

  // Clear filters
  const clearFilters = () => {
    setFilters({});
    fetchSubmissions();
  };

  // Initial fetch
  useEffect(() => {
    fetchSubmissions();
  }, []);

  return {
    submissions,
    loading,
    error,
    filters,
    fetchSubmissions,
    createSubmission,
    updateSubmission,
    deleteSubmission,
    updateStatus,
    updatePriority,
    addNotes,
    assignTo,
    getStats,
    applyFilters,
    clearFilters
  };
}; 