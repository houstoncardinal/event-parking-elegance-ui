import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Textarea } from '@/components/ui/textarea';
import { 
  Search, 
  Filter, 
  Download, 
  Eye, 
  Edit, 
  Trash2, 
  MessageSquare, 
  Calendar, 
  MapPin, 
  Users, 
  Phone, 
  Mail,
  Clock,
  AlertCircle,
  CheckCircle,
  XCircle,
  Star,
  Crown,
  FileText,
  UserCheck,
  RefreshCw
} from 'lucide-react';
import { useFormSubmissions, FormSubmission, FormSubmissionFilters } from '@/hooks/useFormSubmissions';
import { useToast } from '@/hooks/use-toast';

// Inline FormSubmissionDetails component to avoid import issues
const FormSubmissionDetails = ({ submission, onUpdate, onClose }: {
  submission: FormSubmission;
  onUpdate: (id: string, updates: Partial<FormSubmission>) => Promise<FormSubmission>;
  onClose: () => void;
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedSubmission, setEditedSubmission] = useState<FormSubmission>(submission);
  const [newNotes, setNewNotes] = useState('');
  const { toast } = useToast();

  const getFormTypeIcon = (formType: string) => {
    switch (formType) {
      case 'booking': return <Calendar className="w-5 h-5" />;
      case 'quote': return <Crown className="w-5 h-5" />;
      case 'contact': return <MessageSquare className="w-5 h-5" />;
      case 'review': return <Star className="w-5 h-5" />;
      default: return <FileText className="w-5 h-5" />;
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const handleSave = async () => {
    try {
      const updatedSubmission = await onUpdate(submission.id, editedSubmission);
      setEditedSubmission(updatedSubmission);
      setIsEditing(false);
      toast({
        title: "Submission Updated",
        description: "Changes have been saved successfully",
        variant: "default",
      });
    } catch (error) {
      console.error('Failed to update submission:', error);
      toast({
        title: "Update Failed",
        description: "Failed to save changes",
        variant: "destructive",
      });
    }
  };

  const handleCancel = () => {
    setEditedSubmission(submission);
    setIsEditing(false);
  };

  const handleAddNotes = async () => {
    if (newNotes.trim()) {
      try {
        const updatedNotes = submission.admin_notes 
          ? `${submission.admin_notes}\n\n${new Date().toLocaleString()}: ${newNotes}`
          : `${new Date().toLocaleString()}: ${newNotes}`;
        
        const updatedSubmission = await onUpdate(submission.id, { admin_notes: updatedNotes });
        setEditedSubmission(updatedSubmission);
        setNewNotes('');
        toast({
          title: "Notes Added",
          description: "Admin notes have been added successfully",
          variant: "default",
        });
      } catch (error) {
        console.error('Failed to add notes:', error);
        toast({
          title: "Failed to Add Notes",
          description: "There was an error adding the notes",
          variant: "destructive",
        });
      }
    }
  };

  const currentSubmission = isEditing ? editedSubmission : submission;

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          {getFormTypeIcon(submission.form_type)}
          <div>
            <h2 className="text-xl font-bold text-gray-900">
              {submission.form_type.charAt(0).toUpperCase() + submission.form_type.slice(1)} Submission
            </h2>
            <p className="text-sm text-gray-600">ID: {submission.id}</p>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          {isEditing ? (
            <>
              <Button onClick={handleSave} size="sm">
                <CheckCircle className="w-4 h-4 mr-2" />
                Save
              </Button>
              <Button variant="outline" onClick={handleCancel} size="sm">
                <XCircle className="w-4 h-4 mr-2" />
                Cancel
              </Button>
            </>
          ) : (
            <Button onClick={() => setIsEditing(true)} size="sm">
              <Edit className="w-4 h-4 mr-2" />
              Edit
            </Button>
          )}
          <Button variant="outline" onClick={onClose} size="sm">
            Close
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Contact Information */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <UserCheck className="w-5 h-5" />
              <span>Contact Information</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium text-gray-600">First Name</label>
                {isEditing ? (
                  <input
                    type="text"
                    value={editedSubmission.first_name || ''}
                    onChange={(e) => setEditedSubmission({...editedSubmission, first_name: e.target.value})}
                    className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-gold-500 focus:border-transparent"
                  />
                ) : (
                  <p className="mt-1 text-gray-900">{submission.first_name || 'N/A'}</p>
                )}
              </div>
              <div>
                <label className="text-sm font-medium text-gray-600">Last Name</label>
                {isEditing ? (
                  <input
                    type="text"
                    value={editedSubmission.last_name || ''}
                    onChange={(e) => setEditedSubmission({...editedSubmission, last_name: e.target.value})}
                    className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-gold-500 focus:border-transparent"
                  />
                ) : (
                  <p className="mt-1 text-gray-900">{submission.last_name || 'N/A'}</p>
                )}
              </div>
            </div>
            
            <div>
              <label className="text-sm font-medium text-gray-600 flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <span>Email</span>
              </label>
              {isEditing ? (
                <input
                  type="email"
                  value={editedSubmission.email || ''}
                  onChange={(e) => setEditedSubmission({...editedSubmission, email: e.target.value})}
                  className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-gold-500 focus:border-transparent"
                />
              ) : (
                <p className="mt-1 text-gray-900">{submission.email || 'N/A'}</p>
              )}
            </div>

            <div>
              <label className="text-sm font-medium text-gray-600 flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <span>Phone</span>
              </label>
              {isEditing ? (
                <input
                  type="tel"
                  value={editedSubmission.phone || ''}
                  onChange={(e) => setEditedSubmission({...editedSubmission, phone: e.target.value})}
                  className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-gold-500 focus:border-transparent"
                />
              ) : (
                <p className="mt-1 text-gray-900">{submission.phone || 'N/A'}</p>
              )}
            </div>
          </CardContent>
        </Card>

        {/* Event Details */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Calendar className="w-5 h-5" />
              <span>Event Details</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <label className="text-sm font-medium text-gray-600">Event Type</label>
              {isEditing ? (
                <input
                  type="text"
                  value={editedSubmission.event_type || ''}
                  onChange={(e) => setEditedSubmission({...editedSubmission, event_type: e.target.value})}
                  className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-gold-500 focus:border-transparent"
                />
              ) : (
                <p className="mt-1 text-gray-900 capitalize">{submission.event_type || 'N/A'}</p>
              )}
            </div>

            <div>
              <label className="text-sm font-medium text-gray-600 flex items-center space-x-2">
                <MapPin className="w-4 h-4" />
                <span>Event Location</span>
              </label>
              {isEditing ? (
                <input
                  type="text"
                  value={editedSubmission.event_location || ''}
                  onChange={(e) => setEditedSubmission({...editedSubmission, event_location: e.target.value})}
                  className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-gold-500 focus:border-transparent"
                />
              ) : (
                <p className="mt-1 text-gray-900">{submission.event_location || 'N/A'}</p>
              )}
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium text-gray-600">Event Date</label>
                {isEditing ? (
                  <input
                    type="date"
                    value={editedSubmission.event_date || ''}
                    onChange={(e) => setEditedSubmission({...editedSubmission, event_date: e.target.value})}
                    className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-gold-500 focus:border-transparent"
                  />
                ) : (
                  <p className="mt-1 text-gray-900">
                    {submission.event_date ? new Date(submission.event_date).toLocaleDateString() : 'N/A'}
                  </p>
                )}
              </div>
              <div>
                <label className="text-sm font-medium text-gray-600 flex items-center space-x-2">
                  <Users className="w-4 h-4" />
                  <span>Guest Count</span>
                </label>
                {isEditing ? (
                  <input
                    type="number"
                    value={editedSubmission.guest_count || ''}
                    onChange={(e) => setEditedSubmission({...editedSubmission, guest_count: parseInt(e.target.value) || null})}
                    className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-gold-500 focus:border-transparent"
                  />
                ) : (
                  <p className="mt-1 text-gray-900">{submission.guest_count || 'N/A'}</p>
                )}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Additional Information */}
      <Card>
        <CardHeader>
          <CardTitle>Additional Information</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <label className="text-sm font-medium text-gray-600">Message</label>
            <p className="mt-1 text-gray-900 whitespace-pre-wrap">{submission.message || 'No message provided'}</p>
          </div>
          
          <div>
            <label className="text-sm font-medium text-gray-600">Special Requests</label>
            <p className="mt-1 text-gray-900 whitespace-pre-wrap">{submission.special_requests || 'No special requests'}</p>
          </div>

          <div>
            <label className="text-sm font-medium text-gray-600">Source Page</label>
            <p className="mt-1 text-gray-900">{submission.source_page || 'Unknown'}</p>
          </div>
        </CardContent>
      </Card>

      {/* Admin Notes */}
      <Card>
        <CardHeader>
          <CardTitle>Admin Notes</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {submission.admin_notes && (
            <div className="bg-gray-50 p-4 rounded-lg">
              <label className="text-sm font-medium text-gray-600">Current Notes</label>
              <p className="mt-1 text-gray-900 whitespace-pre-wrap">{submission.admin_notes}</p>
            </div>
          )}
          
          <div>
            <label className="text-sm font-medium text-gray-600">Add New Notes</label>
            <Textarea
              value={newNotes}
              onChange={(e) => setNewNotes(e.target.value)}
              placeholder="Enter additional notes..."
              rows={3}
              className="mt-1"
            />
            <Button 
              onClick={handleAddNotes} 
              disabled={!newNotes.trim()}
              className="mt-2"
            >
              Add Notes
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

// Inline FormSubmissionFiltersPanel component
const FormSubmissionFiltersPanel = ({ 
  filters, 
  onApplyFilters, 
  onClearFilters 
}: {
  filters: FormSubmissionFilters;
  onApplyFilters: (filters: FormSubmissionFilters) => void;
  onClearFilters: () => void;
}) => {
  const [localFilters, setLocalFilters] = useState<FormSubmissionFilters>(filters);

  const handleApply = () => {
    onApplyFilters(localFilters);
  };

  const handleClear = () => {
    setLocalFilters({});
    onClearFilters();
  };

  const handleFilterChange = (key: keyof FormSubmissionFilters, value: string) => {
    setLocalFilters(prev => ({
      ...prev,
      [key]: value || undefined
    }));
  };

  const hasActiveFilters = Object.values(filters).some(value => value !== undefined && value !== '');

  return (
    <Card className="border-gold-200 bg-gold-50/50">
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <Filter className="w-5 h-5 text-gold-600" />
          <span>Filters</span>
          {hasActiveFilters && (
            <Badge variant="secondary" className="bg-gold-200 text-gold-800">
              Active
            </Badge>
          )}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Search */}
          <div>
            <label className="text-sm font-medium text-gray-700 mb-2 block">Search</label>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
              <Input
                placeholder="Name, email, location..."
                value={localFilters.search || ''}
                onChange={(e) => handleFilterChange('search', e.target.value)}
                className="pl-10"
              />
            </div>
          </div>

          {/* Form Type */}
          <div>
            <label className="text-sm font-medium text-gray-700 mb-2 block">Form Type</label>
            <Select
              value={localFilters.form_type || ''}
              onValueChange={(value) => handleFilterChange('form_type', value)}
            >
              <SelectTrigger>
                <SelectValue placeholder="All types" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="">All types</SelectItem>
                <SelectItem value="booking">Booking</SelectItem>
                <SelectItem value="quote">Quote</SelectItem>
                <SelectItem value="contact">Contact</SelectItem>
                <SelectItem value="review">Review</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Status */}
          <div>
            <label className="text-sm font-medium text-gray-700 mb-2 block">Status</label>
            <Select
              value={localFilters.status || ''}
              onValueChange={(value) => handleFilterChange('status', value)}
            >
              <SelectTrigger>
                <SelectValue placeholder="All statuses" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="">All statuses</SelectItem>
                <SelectItem value="new">New</SelectItem>
                <SelectItem value="reviewed">Reviewed</SelectItem>
                <SelectItem value="contacted">Contacted</SelectItem>
                <SelectItem value="booked">Booked</SelectItem>
                <SelectItem value="rejected">Rejected</SelectItem>
                <SelectItem value="archived">Archived</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Priority */}
          <div>
            <label className="text-sm font-medium text-gray-700 mb-2 block">Priority</label>
            <Select
              value={localFilters.priority || ''}
              onValueChange={(value) => handleFilterChange('priority', value)}
            >
              <SelectTrigger>
                <SelectValue placeholder="All priorities" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="">All priorities</SelectItem>
                <SelectItem value="low">Low</SelectItem>
                <SelectItem value="normal">Normal</SelectItem>
                <SelectItem value="high">High</SelectItem>
                <SelectItem value="urgent">Urgent</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center justify-between mt-6 pt-4 border-t border-gray-200">
          <div className="flex items-center space-x-2">
            <Button onClick={handleApply} className="bg-gold-600 hover:bg-gold-700">
              Apply Filters
            </Button>
            {hasActiveFilters && (
              <Button variant="outline" onClick={handleClear}>
                Clear All
              </Button>
            )}
          </div>
          <div className="text-sm text-gray-500">
            {hasActiveFilters ? 'Filters applied' : 'No filters applied'}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

const FormSubmissions = () => {
  const { toast } = useToast();
  const {
    submissions,
    loading,
    error,
    filters,
    updateSubmission,
    updateStatus,
    updatePriority,
    addNotes,
    assignTo,
    getStats,
    applyFilters,
    clearFilters,
    deleteSubmission,
    fetchSubmissions
  } = useFormSubmissions();

  const [selectedSubmission, setSelectedSubmission] = useState<FormSubmission | null>(null);
  const [showFilters, setShowFilters] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [showNotes, setShowNotes] = useState(false);
  const [notesText, setNotesText] = useState('');

  const stats = getStats();

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'new': return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'reviewed': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'contacted': return 'bg-purple-100 text-purple-800 border-purple-200';
      case 'booked': return 'bg-green-100 text-green-800 border-green-200';
      case 'rejected': return 'bg-red-100 text-red-800 border-red-200';
      case 'archived': return 'bg-gray-100 text-gray-800 border-gray-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'urgent': return 'bg-red-100 text-red-800 border-red-200';
      case 'high': return 'bg-orange-100 text-orange-800 border-orange-200';
      case 'normal': return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'low': return 'bg-gray-100 text-gray-800 border-gray-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getFormTypeIcon = (formType: string) => {
    switch (formType) {
      case 'booking': return <Calendar className="w-4 h-4" />;
      case 'quote': return <Crown className="w-4 h-4" />;
      case 'contact': return <MessageSquare className="w-4 h-4" />;
      case 'review': return <Star className="w-4 h-4" />;
      default: return <FileText className="w-4 h-4" />;
    }
  };

  const handleStatusChange = async (id: string, status: string) => {
    try {
      await updateStatus(id, status);
      toast({
        title: "Status Updated",
        description: `Submission status changed to ${status}`,
        variant: "default",
      });
    } catch (error) {
      console.error('Failed to update status:', error);
      toast({
        title: "Update Failed",
        description: "Failed to update submission status",
        variant: "destructive",
      });
    }
  };

  const handlePriorityChange = async (id: string, priority: string) => {
    try {
      await updatePriority(id, priority);
      toast({
        title: "Priority Updated",
        description: `Submission priority changed to ${priority}`,
        variant: "default",
      });
    } catch (error) {
      console.error('Failed to update priority:', error);
      toast({
        title: "Update Failed",
        description: "Failed to update submission priority",
        variant: "destructive",
      });
    }
  };

  const handleAddNotes = async (id: string) => {
    if (notesText.trim()) {
      try {
        await addNotes(id, notesText);
        setNotesText('');
        setShowNotes(false);
        toast({
          title: "Notes Added",
          description: "Admin notes have been added successfully",
          variant: "default",
        });
      } catch (error) {
        console.error('Failed to add notes:', error);
        toast({
          title: "Failed to Add Notes",
          description: "There was an error adding the notes",
          variant: "destructive",
        });
      }
    }
  };

  const handleDelete = async (id: string) => {
    if (confirm('Are you sure you want to delete this submission? This action cannot be undone.')) {
      try {
        await deleteSubmission(id);
        toast({
          title: "Submission Deleted",
          description: "The submission has been deleted successfully",
          variant: "default",
        });
      } catch (error) {
        console.error('Failed to delete submission:', error);
        toast({
          title: "Delete Failed",
          description: "Failed to delete the submission",
          variant: "destructive",
        });
      }
    }
  };

  const handleExport = () => {
    try {
      const csvContent = [
        // CSV Headers
        ['ID', 'Form Type', 'Status', 'Priority', 'First Name', 'Last Name', 'Email', 'Phone', 'Event Type', 'Event Date', 'Event Location', 'Guest Count', 'Created At'],
        // CSV Data
        ...submissions.map(sub => [
          sub.id,
          sub.form_type,
          sub.status,
          sub.priority,
          sub.first_name || '',
          sub.last_name || '',
          sub.email || '',
          sub.phone || '',
          sub.event_type || '',
          sub.event_date || '',
          sub.event_location || '',
          sub.guest_count || '',
          new Date(sub.created_at).toLocaleDateString()
        ])
      ].map(row => row.map(field => `"${field}"`).join(',')).join('\n');

      const blob = new Blob([csvContent], { type: 'text/csv' });
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `form-submissions-${new Date().toISOString().split('T')[0]}.csv`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      window.URL.revokeObjectURL(url);

      toast({
        title: "Export Successful",
        description: "Form submissions have been exported to CSV",
        variant: "default",
      });
    } catch (error) {
      console.error('Export failed:', error);
      toast({
        title: "Export Failed",
        description: "Failed to export form submissions",
        variant: "destructive",
      });
    }
  };

  const handleRefresh = async () => {
    try {
      await fetchSubmissions();
      toast({
        title: "Refreshed",
        description: "Form submissions have been refreshed",
        variant: "default",
      });
    } catch (error) {
      toast({
        title: "Refresh Failed",
        description: "Failed to refresh submissions",
        variant: "destructive",
      });
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  if (loading) {
    return (
      <div className="space-y-8">
        <div className="flex items-center justify-between">
          <div className="h-8 bg-gray-200 rounded w-1/3 animate-pulse"></div>
          <div className="h-10 bg-gray-200 rounded w-32 animate-pulse"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="h-32 bg-gray-200 rounded-lg animate-pulse"></div>
          ))}
        </div>
        <div className="h-96 bg-gray-200 rounded-lg animate-pulse"></div>
      </div>
    );
  }

  if (error) {
    return (
      <Card className="border-red-200 bg-red-50">
        <CardContent className="p-6">
          <div className="flex items-center space-x-3">
            <AlertCircle className="w-6 h-6 text-red-600" />
            <div>
              <h3 className="text-lg font-semibold text-red-800">Error Loading Submissions</h3>
              <p className="text-red-600">{error}</p>
            </div>
          </div>
          <Button onClick={handleRefresh} className="mt-4">
            <RefreshCw className="w-4 h-4 mr-2" />
            Try Again
          </Button>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Form Submissions</h1>
          <p className="text-gray-600 mt-1">Manage and track all website form submissions</p>
        </div>
        <div className="flex items-center space-x-3">
          <Button
            variant="outline"
            onClick={() => setShowFilters(!showFilters)}
            className="flex items-center space-x-2"
          >
            <Filter className="w-4 h-4" />
            <span>Filters</span>
          </Button>
          <Button 
            variant="outline" 
            className="flex items-center space-x-2"
            onClick={handleRefresh}
          >
            <RefreshCw className="w-4 h-4" />
            <span>Refresh</span>
          </Button>
          <Button 
            variant="outline" 
            className="flex items-center space-x-2"
            onClick={handleExport}
            disabled={submissions.length === 0}
          >
            <Download className="w-4 h-4" />
            <span>Export ({submissions.length})</span>
          </Button>
        </div>
      </div>

      {/* Statistics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="border-l-4 border-l-blue-500">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Total Submissions</p>
                <p className="text-2xl font-bold text-gray-900">{stats.total}</p>
              </div>
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <FileText className="w-6 h-6 text-blue-600" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-l-4 border-l-yellow-500">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">New</p>
                <p className="text-2xl font-bold text-gray-900">{stats.newCount}</p>
              </div>
              <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
                <Clock className="w-6 h-6 text-yellow-600" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-l-4 border-l-red-500">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Urgent</p>
                <p className="text-2xl font-bold text-gray-900">{stats.urgentCount}</p>
              </div>
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                <AlertCircle className="w-6 h-6 text-red-600" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-l-4 border-l-green-500">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Booked</p>
                <p className="text-2xl font-bold text-gray-900">{stats.bookedCount}</p>
              </div>
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                <CheckCircle className="w-6 h-6 text-green-600" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Filters Panel */}
      {showFilters && (
        <FormSubmissionFiltersPanel
          filters={filters}
          onApplyFilters={applyFilters}
          onClearFilters={clearFilters}
        />
      )}

      {/* Submissions Table */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            <span>All Submissions ({submissions.length})</span>
            <div className="flex items-center space-x-2">
              <Input
                placeholder="Search submissions..."
                className="w-64"
                onChange={(e) => applyFilters({ ...filters, search: e.target.value })}
              />
            </div>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Type</TableHead>
                  <TableHead>Contact</TableHead>
                  <TableHead>Event Details</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Priority</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {submissions.length === 0 ? (
                  <TableRow>
                    <TableCell colSpan={7} className="text-center py-8">
                      <div className="flex flex-col items-center space-y-2">
                        <FileText className="w-8 h-8 text-gray-400" />
                        <p className="text-gray-500">No form submissions found</p>
                        <p className="text-sm text-gray-400">Try adjusting your filters or check back later</p>
                      </div>
                    </TableCell>
                  </TableRow>
                ) : (
                  submissions.map((submission) => (
                    <TableRow key={submission.id} className="hover:bg-gray-50">
                      <TableCell>
                        <div className="flex items-center space-x-2">
                          {getFormTypeIcon(submission.form_type)}
                          <span className="font-medium capitalize">{submission.form_type}</span>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="space-y-1">
                          <div className="font-medium">
                            {submission.first_name} {submission.last_name}
                          </div>
                          <div className="flex items-center space-x-2 text-sm text-gray-600">
                            <Mail className="w-3 h-3" />
                            <span>{submission.email}</span>
                          </div>
                          {submission.phone && (
                            <div className="flex items-center space-x-2 text-sm text-gray-600">
                              <Phone className="w-3 h-3" />
                              <span>{submission.phone}</span>
                            </div>
                          )}
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="space-y-1">
                          {submission.event_type && (
                            <div className="text-sm font-medium capitalize">{submission.event_type}</div>
                          )}
                          {submission.event_location && (
                            <div className="flex items-center space-x-1 text-sm text-gray-600">
                              <MapPin className="w-3 h-3" />
                              <span className="truncate max-w-32">{submission.event_location}</span>
                            </div>
                          )}
                          {submission.guest_count && (
                            <div className="flex items-center space-x-1 text-sm text-gray-600">
                              <Users className="w-3 h-3" />
                              <span>{submission.guest_count} guests</span>
                            </div>
                          )}
                          {submission.event_date && (
                            <div className="text-sm text-gray-600">
                              {new Date(submission.event_date).toLocaleDateString()}
                            </div>
                          )}
                        </div>
                      </TableCell>
                      <TableCell>
                        <Select
                          value={submission.status}
                          onValueChange={(value) => handleStatusChange(submission.id, value)}
                        >
                          <SelectTrigger className="w-32">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="new">New</SelectItem>
                            <SelectItem value="reviewed">Reviewed</SelectItem>
                            <SelectItem value="contacted">Contacted</SelectItem>
                            <SelectItem value="booked">Booked</SelectItem>
                            <SelectItem value="rejected">Rejected</SelectItem>
                            <SelectItem value="archived">Archived</SelectItem>
                          </SelectContent>
                        </Select>
                      </TableCell>
                      <TableCell>
                        <Select
                          value={submission.priority}
                          onValueChange={(value) => handlePriorityChange(submission.id, value)}
                        >
                          <SelectTrigger className="w-24">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="low">Low</SelectItem>
                            <SelectItem value="normal">Normal</SelectItem>
                            <SelectItem value="high">High</SelectItem>
                            <SelectItem value="urgent">Urgent</SelectItem>
                          </SelectContent>
                        </Select>
                      </TableCell>
                      <TableCell>
                        <div className="text-sm text-gray-600">
                          {formatDate(submission.created_at)}
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center space-x-2">
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => {
                              setSelectedSubmission(submission);
                              setShowDetails(true);
                            }}
                            title="View Details"
                          >
                            <Eye className="w-4 h-4" />
                          </Button>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => {
                              setSelectedSubmission(submission);
                              setShowNotes(true);
                            }}
                            title="Add Notes"
                          >
                            <MessageSquare className="w-4 h-4" />
                          </Button>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => handleDelete(submission.id)}
                            className="text-red-600 hover:text-red-700"
                            title="Delete Submission"
                          >
                            <Trash2 className="w-4 h-4" />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))
                )}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>

      {/* Submission Details Dialog */}
      <Dialog open={showDetails} onOpenChange={setShowDetails}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>Submission Details</DialogTitle>
          </DialogHeader>
          {selectedSubmission && (
            <FormSubmissionDetails
              submission={selectedSubmission}
              onUpdate={updateSubmission}
              onClose={() => setShowDetails(false)}
            />
          )}
        </DialogContent>
      </Dialog>

      {/* Add Notes Dialog */}
      <Dialog open={showNotes} onOpenChange={setShowNotes}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Add Admin Notes</DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <Textarea
              placeholder="Enter admin notes..."
              value={notesText}
              onChange={(e) => setNotesText(e.target.value)}
              rows={4}
            />
            <div className="flex justify-end space-x-2">
              <Button variant="outline" onClick={() => setShowNotes(false)}>
                Cancel
              </Button>
              <Button
                onClick={() => selectedSubmission && handleAddNotes(selectedSubmission.id)}
                disabled={!notesText.trim()}
              >
                Add Notes
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default FormSubmissions; 