import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  MessageSquare, 
  User, 
  Mail, 
  Phone, 
  Building, 
  Calendar,
  Clock,
  Globe,
  ExternalLink,
  CheckCircle,
  AlertCircle,
  MessageCircle
} from 'lucide-react';
import { useContactSubmissions } from '@/hooks/useContactData';

const ContactSubmissionsManagement = () => {
  const { data: submissions, isLoading, error } = useContactSubmissions();

  const getStatusColor = (status: string) => {
    const colors = {
      new: 'bg-blue-100 text-blue-800',
      in_progress: 'bg-yellow-100 text-yellow-800',
      responded: 'bg-green-100 text-green-800',
      resolved: 'bg-gray-100 text-gray-800',
      closed: 'bg-gray-100 text-gray-600'
    };
    return colors[status as keyof typeof colors] || 'bg-gray-100 text-gray-600';
  };

  const getContactTypeColor = (type: string) => {
    const colors = {
      general: 'bg-blue-100 text-blue-800',
      support: 'bg-orange-100 text-orange-800',
      quote: 'bg-green-100 text-green-800',
      complaint: 'bg-red-100 text-red-800',
      partnership: 'bg-purple-100 text-purple-800',
      media: 'bg-indigo-100 text-indigo-800'
    };
    return colors[type as keyof typeof colors] || 'bg-gray-100 text-gray-600';
  };

  const getPriorityIcon = (priority: string) => {
    if (priority === 'urgent') return <AlertCircle className="w-4 h-4 text-red-600" />;
    if (priority === 'high') return <AlertCircle className="w-4 h-4 text-orange-600" />;
    return <MessageCircle className="w-4 h-4 text-blue-600" />;
  };

  if (isLoading) {
    return <div className="p-6">Loading contact submissions...</div>;
  }

  if (error) {
    return <div className="p-6 text-red-600">Error loading contact submissions</div>;
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-900">Contact Submissions</h2>
        <Badge variant="outline" className="text-sm">
          {submissions?.length || 0} Total Submissions
        </Badge>
      </div>

      {submissions && submissions.length > 0 ? (
        <div className="grid gap-6">
          {submissions.map((submission: any) => (
            <Card key={submission.id} className="hover:shadow-md transition-shadow">
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between">
                  <div className="space-y-2">
                    <div className="flex items-center gap-3">
                      <CardTitle className="text-lg">
                        {submission.first_name} {submission.last_name}
                      </CardTitle>
                      {getPriorityIcon(submission.priority)}
                    </div>
                    <div className="flex flex-wrap gap-2">
                      <Badge className={getStatusColor(submission.status)}>
                        {submission.status.replace('_', ' ').toUpperCase()}
                      </Badge>
                      <Badge className={getContactTypeColor(submission.contact_type)}>
                        {submission.contact_type.replace('_', ' ').toUpperCase()}
                      </Badge>
                      {submission.priority !== 'normal' && (
                        <Badge variant="outline" className={
                          submission.priority === 'urgent' ? 'text-red-600 border-red-600' :
                          submission.priority === 'high' ? 'text-orange-600 border-orange-600' :
                          'text-blue-600 border-blue-600'
                        }>
                          {submission.priority.toUpperCase()}
                        </Badge>
                      )}
                    </div>
                  </div>
                  <div className="text-right text-sm text-gray-500">
                    <div className="flex items-center gap-1 mb-1">
                      <Calendar className="w-4 h-4" />
                      {new Date(submission.created_at).toLocaleDateString()}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {new Date(submission.created_at).toLocaleTimeString()}
                    </div>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Subject: {submission.subject}</h4>
                  <p className="text-gray-700 whitespace-pre-wrap">{submission.message}</p>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-3">
                    <h4 className="font-semibold text-gray-900 flex items-center gap-2">
                      <User className="w-4 h-4" />
                      Contact Information
                    </h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center gap-2">
                        <Mail className="w-4 h-4 text-gray-400" />
                        <a href={`mailto:${submission.email}`} className="text-blue-600 hover:underline">
                          {submission.email}
                        </a>
                      </div>
                      {submission.phone && (
                        <div className="flex items-center gap-2">
                          <Phone className="w-4 h-4 text-gray-400" />
                          <a href={`tel:${submission.phone}`} className="text-blue-600 hover:underline">
                            {submission.phone}
                          </a>
                        </div>
                      )}
                      {submission.company && (
                        <div className="flex items-center gap-2">
                          <Building className="w-4 h-4 text-gray-400" />
                          <span>{submission.company}</span>
                        </div>
                      )}
                      {submission.website && (
                        <div className="flex items-center gap-2">
                          <Globe className="w-4 h-4 text-gray-400" />
                          <a 
                            href={submission.website} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:underline flex items-center gap-1"
                          >
                            {submission.website}
                            <ExternalLink className="w-3 h-3" />
                          </a>
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="space-y-3">
                    <h4 className="font-semibold text-gray-900 flex items-center gap-2">
                      <MessageSquare className="w-4 h-4" />
                      Preferences
                    </h4>
                    <div className="space-y-2 text-sm">
                      <div>
                        <span className="text-gray-600">Preferred Contact:</span>
                        <span className="ml-2 font-medium">
                          {submission.preferred_contact_method?.replace('_', ' ').toUpperCase() || 'Email'}
                        </span>
                      </div>
                      {submission.best_time_to_contact && (
                        <div>
                          <span className="text-gray-600">Best Time:</span>
                          <span className="ml-2 font-medium">
                            {submission.best_time_to_contact.replace('_', ' ').toUpperCase()}
                          </span>
                        </div>
                      )}
                      <div>
                        <span className="text-gray-600">Source Page:</span>
                        <span className="ml-2 font-medium">{submission.source_page || 'Unknown'}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {submission.admin_notes && (
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                    <h4 className="font-semibold text-blue-900 mb-2">Admin Notes</h4>
                    <p className="text-blue-800 whitespace-pre-wrap">{submission.admin_notes}</p>
                  </div>
                )}

                <div className="flex justify-between items-center pt-4 border-t">
                  <div className="text-sm text-gray-500">
                    ID: {submission.id.slice(0, 8)}...
                    {submission.updated_at !== submission.created_at && (
                      <span className="ml-4">
                        Updated: {new Date(submission.updated_at).toLocaleDateString()}
                      </span>
                    )}
                  </div>
                  <div className="flex gap-2">
                    <Button size="sm" variant="outline">
                      View Details
                    </Button>
                    <Button size="sm">
                      Respond
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      ) : (
        <Card>
          <CardContent className="p-8 text-center">
            <MessageSquare className="w-12 h-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">No Contact Submissions</h3>
            <p className="text-gray-600">No contact form submissions have been received yet.</p>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default ContactSubmissionsManagement;