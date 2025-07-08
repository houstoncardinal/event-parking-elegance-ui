import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { 
  Calendar, 
  MapPin, 
  Users, 
  Phone, 
  Mail, 
  Clock, 
  Building,
  MessageSquare,
  FileText,
  Crown,
  Star,
  AlertCircle,
  CheckCircle,
  XCircle,
  UserCheck,
  Edit,
  Save,
  X
} from 'lucide-react';
import { FormSubmission } from '@/hooks/useFormSubmissions';

interface FormSubmissionDetailsProps {
  submission: FormSubmission;
  onUpdate: (id: string, updates: Partial<FormSubmission>) => Promise<void>;
  onClose: () => void;
}

const FormSubmissionDetails = ({ submission, onUpdate, onClose }: FormSubmissionDetailsProps) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedSubmission, setEditedSubmission] = useState<FormSubmission>(submission);
  const [newNotes, setNewNotes] = useState('');

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
      await onUpdate(submission.id, editedSubmission);
      setIsEditing(false);
    } catch (error) {
      console.error('Failed to update submission:', error);
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
        
        await onUpdate(submission.id, { admin_notes: updatedNotes });
        setNewNotes('');
      } catch (error) {
        console.error('Failed to add notes:', error);
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
                <Save className="w-4 h-4 mr-2" />
                Save
              </Button>
              <Button variant="outline" onClick={handleCancel} size="sm">
                <X className="w-4 h-4 mr-2" />
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

            <div>
              <label className="text-sm font-medium text-gray-600 flex items-center space-x-2">
                <Building className="w-4 h-4" />
                <span>Company</span>
              </label>
              {isEditing ? (
                <input
                  type="text"
                  value={editedSubmission.company || ''}
                  onChange={(e) => setEditedSubmission({...editedSubmission, company: e.target.value})}
                  className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-gold-500 focus:border-transparent"
                />
              ) : (
                <p className="mt-1 text-gray-900">{submission.company || 'N/A'}</p>
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

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium text-gray-600">Start Time</label>
                {isEditing ? (
                  <input
                    type="time"
                    value={editedSubmission.start_time || ''}
                    onChange={(e) => setEditedSubmission({...editedSubmission, start_time: e.target.value})}
                    className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-gold-500 focus:border-transparent"
                  />
                ) : (
                  <p className="mt-1 text-gray-900">{submission.start_time || 'N/A'}</p>
                )}
              </div>
              <div>
                <label className="text-sm font-medium text-gray-600">End Time</label>
                {isEditing ? (
                  <input
                    type="time"
                    value={editedSubmission.end_time || ''}
                    onChange={(e) => setEditedSubmission({...editedSubmission, end_time: e.target.value})}
                    className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-gold-500 focus:border-transparent"
                  />
                ) : (
                  <p className="mt-1 text-gray-900">{submission.end_time || 'N/A'}</p>
                )}
              </div>
            </div>

            <div>
              <label className="text-sm font-medium text-gray-600">Attendants Needed</label>
              {isEditing ? (
                <input
                  type="number"
                  value={editedSubmission.attendants_needed || ''}
                  onChange={(e) => setEditedSubmission({...editedSubmission, attendants_needed: parseInt(e.target.value) || null})}
                  className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-gold-500 focus:border-transparent"
                />
              ) : (
                <p className="mt-1 text-gray-900">{submission.attendants_needed || 'N/A'}</p>
              )}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Status and Priority */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Status & Priority</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <label className="text-sm font-medium text-gray-600">Status</label>
              <div className="mt-2">
                <Badge className={getStatusColor(currentSubmission.status)}>
                  {currentSubmission.status.charAt(0).toUpperCase() + currentSubmission.status.slice(1)}
                </Badge>
              </div>
            </div>
            <div>
              <label className="text-sm font-medium text-gray-600">Priority</label>
              <div className="mt-2">
                <Badge className={getPriorityColor(currentSubmission.priority)}>
                  {currentSubmission.priority.charAt(0).toUpperCase() + currentSubmission.priority.slice(1)}
                </Badge>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Timestamps</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div>
              <label className="text-sm font-medium text-gray-600">Created</label>
              <p className="mt-1 text-sm text-gray-900">{formatDate(submission.created_at)}</p>
            </div>
            <div>
              <label className="text-sm font-medium text-gray-600">Last Updated</label>
              <p className="mt-1 text-sm text-gray-900">{formatDate(submission.updated_at)}</p>
            </div>
            {submission.contacted_at && (
              <div>
                <label className="text-sm font-medium text-gray-600">Contacted</label>
                <p className="mt-1 text-sm text-gray-900">{formatDate(submission.contacted_at)}</p>
              </div>
            )}
            {submission.responded_at && (
              <div>
                <label className="text-sm font-medium text-gray-600">Responded</label>
                <p className="mt-1 text-sm text-gray-900">{formatDate(submission.responded_at)}</p>
              </div>
            )}
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
            <label className="text-sm font-medium text-gray-600">Budget Range</label>
            <p className="mt-1 text-gray-900">{submission.budget_range || 'Not specified'}</p>
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

export default FormSubmissionDetails; 