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
  RefreshCw,
  Plus,
  Tag,
  User,
  Activity,
  Settings,
  Archive,
  AlertTriangle,
  Zap,
  Target,
  TrendingUp,
  Award
} from 'lucide-react';
import { useSupportTickets, SupportTicket, TicketFilters, CreateTicketData } from '@/hooks/useSupportTickets';
import { useToast } from '@/hooks/use-toast';

// Ticket Creation Dialog Component
const CreateTicketDialog = ({ open, onClose, onCreate }: {
  open: boolean;
  onClose: () => void;
  onCreate: (data: CreateTicketData) => Promise<void>;
}) => {
  const [formData, setFormData] = useState<CreateTicketData>({
    title: '',
    description: '',
    category: '',
    customer_name: '',
    customer_email: '',
    customer_phone: '',
    priority: 'normal',
    source: 'web',
    tags: [],
    assigned_to_name: '',
    internal_notes: ''
  });
  const [loading, setLoading] = useState(false);
  const [newTag, setNewTag] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      await onCreate(formData);
      setFormData({
        title: '',
        description: '',
        category: '',
        customer_name: '',
        customer_email: '',
        customer_phone: '',
        priority: 'normal',
        source: 'web',
        tags: [],
        assigned_to_name: '',
        internal_notes: ''
      });
      onClose();
    } catch (error) {
      console.error('Failed to create ticket:', error);
    } finally {
      setLoading(false);
    }
  };

  const addTag = () => {
    if (newTag.trim() && !formData.tags?.includes(newTag.trim())) {
      setFormData(prev => ({
        ...prev,
        tags: [...(prev.tags || []), newTag.trim()]
      }));
      setNewTag('');
    }
  };

  const removeTag = (tagToRemove: string) => {
    setFormData(prev => ({
      ...prev,
      tags: prev.tags?.filter(tag => tag !== tagToRemove) || []
    }));
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center space-x-2">
            <Plus className="w-5 h-5" />
            <span>Create New Support Ticket</span>
          </DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-medium text-gray-700 mb-2 block">Title *</label>
              <Input
                value={formData.title}
                onChange={(e) => setFormData({...formData, title: e.target.value})}
                placeholder="Brief description of the issue"
                required
              />
            </div>
            <div>
              <label className="text-sm font-medium text-gray-700 mb-2 block">Category *</label>
              <Select
                value={formData.category}
                onValueChange={(value) => setFormData({...formData, category: value})}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Technical Issue">Technical Issue</SelectItem>
                  <SelectItem value="Service Request">Service Request</SelectItem>
                  <SelectItem value="Billing Issue">Billing Issue</SelectItem>
                  <SelectItem value="Maintenance">Maintenance</SelectItem>
                  <SelectItem value="Staffing">Staffing</SelectItem>
                  <SelectItem value="Customer Service">Customer Service</SelectItem>
                  <SelectItem value="Administrative">Administrative</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div>
            <label className="text-sm font-medium text-gray-700 mb-2 block">Description *</label>
            <Textarea
              value={formData.description}
              onChange={(e) => setFormData({...formData, description: e.target.value})}
              placeholder="Detailed description of the issue or request"
              rows={4}
              required
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="text-sm font-medium text-gray-700 mb-2 block">Priority</label>
              <Select
                value={formData.priority}
                onValueChange={(value: any) => setFormData({...formData, priority: value})}
              >
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="low">Low</SelectItem>
                  <SelectItem value="normal">Normal</SelectItem>
                  <SelectItem value="high">High</SelectItem>
                  <SelectItem value="urgent">Urgent</SelectItem>
                  <SelectItem value="critical">Critical</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <label className="text-sm font-medium text-gray-700 mb-2 block">Source</label>
              <Select
                value={formData.source}
                onValueChange={(value: any) => setFormData({...formData, source: value})}
              >
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="web">Web</SelectItem>
                  <SelectItem value="email">Email</SelectItem>
                  <SelectItem value="phone">Phone</SelectItem>
                  <SelectItem value="chat">Chat</SelectItem>
                  <SelectItem value="social">Social</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <label className="text-sm font-medium text-gray-700 mb-2 block">Assign To</label>
              <Input
                value={formData.assigned_to_name}
                onChange={(e) => setFormData({...formData, assigned_to_name: e.target.value})}
                placeholder="Team member name"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-medium text-gray-700 mb-2 block">Customer Name *</label>
              <Input
                value={formData.customer_name}
                onChange={(e) => setFormData({...formData, customer_name: e.target.value})}
                placeholder="Customer's full name"
                required
              />
            </div>
            <div>
              <label className="text-sm font-medium text-gray-700 mb-2 block">Customer Email *</label>
              <Input
                type="email"
                value={formData.customer_email}
                onChange={(e) => setFormData({...formData, customer_email: e.target.value})}
                placeholder="customer@email.com"
                required
              />
            </div>
          </div>

          <div>
            <label className="text-sm font-medium text-gray-700 mb-2 block">Customer Phone</label>
            <Input
              value={formData.customer_phone}
              onChange={(e) => setFormData({...formData, customer_phone: e.target.value})}
              placeholder="+1-555-0123"
            />
          </div>

          <div>
            <label className="text-sm font-medium text-gray-700 mb-2 block">Tags</label>
            <div className="flex items-center space-x-2 mb-2">
              <Input
                value={newTag}
                onChange={(e) => setNewTag(e.target.value)}
                placeholder="Add a tag"
                onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), addTag())}
              />
              <Button type="button" onClick={addTag} size="sm">
                <Plus className="w-4 h-4" />
              </Button>
            </div>
            <div className="flex flex-wrap gap-2">
              {formData.tags?.map((tag) => (
                <Badge key={tag} variant="secondary" className="flex items-center space-x-1">
                  <span>{tag}</span>
                  <button
                    type="button"
                    onClick={() => removeTag(tag)}
                    className="ml-1 hover:text-red-600"
                  >
                    <XCircle className="w-3 h-3" />
                  </button>
                </Badge>
              ))}
            </div>
          </div>

          <div>
            <label className="text-sm font-medium text-gray-700 mb-2 block">Internal Notes</label>
            <Textarea
              value={formData.internal_notes}
              onChange={(e) => setFormData({...formData, internal_notes: e.target.value})}
              placeholder="Internal notes (not visible to customer)"
              rows={3}
            />
          </div>

          <div className="flex justify-end space-x-2">
            <Button type="button" variant="outline" onClick={onClose} className="border-gray-300 hover:bg-gray-50">
              Cancel
            </Button>
            <Button type="submit" disabled={loading} className="bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-600 hover:to-gold-700 text-white shadow-lg">
              {loading ? 'Creating...' : 'Create Ticket'}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

// Ticket Details Dialog Component
const TicketDetailsDialog = ({ ticket, onUpdate, onClose }: {
  ticket: SupportTicket;
  onUpdate: (id: string, updates: any) => Promise<SupportTicket>;
  onClose: () => void;
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTicket, setEditedTicket] = useState<SupportTicket>(ticket);
  const [newComment, setNewComment] = useState('');
  const [comments, setComments] = useState<any[]>([]);
  const [activities, setActivities] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'open': return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'in_progress': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'waiting_for_customer': return 'bg-purple-100 text-purple-800 border-purple-200';
      case 'resolved': return 'bg-green-100 text-green-800 border-green-200';
      case 'closed': return 'bg-gray-100 text-gray-800 border-gray-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'critical': return 'bg-red-100 text-red-800 border-red-200';
      case 'urgent': return 'bg-orange-100 text-orange-800 border-orange-200';
      case 'high': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'normal': return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'low': return 'bg-gray-100 text-gray-800 border-gray-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
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
      await onUpdate(ticket.id, editedTicket);
      setIsEditing(false);
      toast({
        title: "Ticket Updated",
        description: "Changes have been saved successfully",
        variant: "default",
      });
    } catch (error) {
      console.error('Failed to update ticket:', error);
      toast({
        title: "Update Failed",
        description: "Failed to save changes",
        variant: "destructive",
      });
    }
  };

  const handleCancel = () => {
    setEditedTicket(ticket);
    setIsEditing(false);
  };

  const handleAddComment = async () => {
    if (newComment.trim()) {
      setLoading(true);
      try {
        // This would need to be implemented in the hook
        // await addComment(ticket.id, newComment);
        setNewComment('');
        toast({
          title: "Comment Added",
          description: "Comment has been added successfully",
          variant: "default",
        });
      } catch (error) {
        toast({
          title: "Failed to Add Comment",
          description: "There was an error adding the comment",
          variant: "destructive",
        });
      } finally {
        setLoading(false);
      }
    }
  };

  const currentTicket = isEditing ? editedTicket : ticket;

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
                        <div className="flex items-center space-x-2">
                <Badge className={`${getStatusColor(currentTicket.status)} border`}>
                  {currentTicket.status.replace('_', ' ')}
                </Badge>
                <Badge className={`${getPriorityColor(currentTicket.priority)} border`}>
                  {currentTicket.priority}
                </Badge>
              </div>
          <div>
            <h2 className="text-xl font-bold text-gray-900">{currentTicket.title}</h2>
            <p className="text-sm text-gray-600">#{currentTicket.ticket_number}</p>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          {isEditing ? (
            <>
              <Button onClick={handleSave} size="sm" className="bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-600 hover:to-gold-700 text-white shadow-lg">
                <CheckCircle className="w-4 h-4 mr-2" />
                Save
              </Button>
              <Button variant="outline" onClick={handleCancel} size="sm" className="border-gray-300 hover:bg-gray-50">
                <XCircle className="w-4 h-4 mr-2" />
                Cancel
              </Button>
            </>
          ) : (
            <Button onClick={() => setIsEditing(true)} size="sm" className="bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-600 hover:to-gold-700 text-white shadow-lg">
              <Edit className="w-4 h-4 mr-2" />
              Edit
            </Button>
          )}
          <Button variant="outline" onClick={onClose} size="sm" className="border-gray-300 hover:bg-gray-50">
            Close
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Ticket Information */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <FileText className="w-5 h-5" />
              <span>Ticket Information</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <label className="text-sm font-medium text-gray-600">Title</label>
              {isEditing ? (
                <Input
                  value={editedTicket.title}
                  onChange={(e) => setEditedTicket({...editedTicket, title: e.target.value})}
                  className="mt-1"
                />
              ) : (
                <p className="mt-1 text-gray-900">{ticket.title}</p>
              )}
            </div>

            <div>
              <label className="text-sm font-medium text-gray-600">Description</label>
              {isEditing ? (
                <Textarea
                  value={editedTicket.description}
                  onChange={(e) => setEditedTicket({...editedTicket, description: e.target.value})}
                  rows={4}
                  className="mt-1"
                />
              ) : (
                <p className="mt-1 text-gray-900 whitespace-pre-wrap">{ticket.description}</p>
              )}
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium text-gray-600">Category</label>
                {isEditing ? (
                  <Select
                    value={editedTicket.category}
                    onValueChange={(value) => setEditedTicket({...editedTicket, category: value})}
                  >
                    <SelectTrigger className="mt-1">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Technical Issue">Technical Issue</SelectItem>
                      <SelectItem value="Service Request">Service Request</SelectItem>
                      <SelectItem value="Billing Issue">Billing Issue</SelectItem>
                      <SelectItem value="Maintenance">Maintenance</SelectItem>
                      <SelectItem value="Staffing">Staffing</SelectItem>
                      <SelectItem value="Customer Service">Customer Service</SelectItem>
                      <SelectItem value="Administrative">Administrative</SelectItem>
                    </SelectContent>
                  </Select>
                ) : (
                  <p className="mt-1 text-gray-900">{ticket.category}</p>
                )}
              </div>
              <div>
                <label className="text-sm font-medium text-gray-600">Source</label>
                <p className="mt-1 text-gray-900 capitalize">{ticket.source}</p>
              </div>
            </div>

            <div>
              <label className="text-sm font-medium text-gray-600">Tags</label>
              <div className="flex flex-wrap gap-2 mt-1">
                {ticket.tags?.map((tag) => (
                  <Badge key={tag} variant="secondary">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Customer Information */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <UserCheck className="w-5 h-5" />
              <span>Customer Information</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <label className="text-sm font-medium text-gray-600">Name</label>
              {isEditing ? (
                <Input
                  value={editedTicket.customer_name}
                  onChange={(e) => setEditedTicket({...editedTicket, customer_name: e.target.value})}
                  className="mt-1"
                />
              ) : (
                <p className="mt-1 text-gray-900">{ticket.customer_name}</p>
              )}
            </div>

            <div>
              <label className="text-sm font-medium text-gray-600 flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <span>Email</span>
              </label>
              {isEditing ? (
                <Input
                  type="email"
                  value={editedTicket.customer_email}
                  onChange={(e) => setEditedTicket({...editedTicket, customer_email: e.target.value})}
                  className="mt-1"
                />
              ) : (
                <p className="mt-1 text-gray-900">{ticket.customer_email}</p>
              )}
            </div>

            <div>
              <label className="text-sm font-medium text-gray-600 flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <span>Phone</span>
              </label>
              {isEditing ? (
                <Input
                  value={editedTicket.customer_phone || ''}
                  onChange={(e) => setEditedTicket({...editedTicket, customer_phone: e.target.value})}
                  className="mt-1"
                />
              ) : (
                <p className="mt-1 text-gray-900">{ticket.customer_phone || 'N/A'}</p>
              )}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Assignment and Status */}
      <Card>
        <CardHeader>
          <CardTitle>Assignment & Status</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="text-sm font-medium text-gray-600">Assigned To</label>
              {isEditing ? (
                <Input
                  value={editedTicket.assigned_to_name || ''}
                  onChange={(e) => setEditedTicket({...editedTicket, assigned_to_name: e.target.value})}
                  className="mt-1"
                  placeholder="Team member name"
                />
              ) : (
                <p className="mt-1 text-gray-900">{ticket.assigned_to_name || 'Unassigned'}</p>
              )}
            </div>
            <div>
              <label className="text-sm font-medium text-gray-600">Status</label>
              {isEditing ? (
                <Select
                  value={editedTicket.status}
                  onValueChange={(value) => setEditedTicket({...editedTicket, status: value})}
                >
                  <SelectTrigger className="mt-1">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="open">Open</SelectItem>
                    <SelectItem value="in_progress">In Progress</SelectItem>
                    <SelectItem value="waiting_for_customer">Waiting for Customer</SelectItem>
                    <SelectItem value="resolved">Resolved</SelectItem>
                    <SelectItem value="closed">Closed</SelectItem>
                  </SelectContent>
                </Select>
              ) : (
                <p className="mt-1 text-gray-900 capitalize">{ticket.status.replace('_', ' ')}</p>
              )}
            </div>
            <div>
              <label className="text-sm font-medium text-gray-600">Priority</label>
              {isEditing ? (
                <Select
                  value={editedTicket.priority}
                  onValueChange={(value) => setEditedTicket({...editedTicket, priority: value})}
                >
                  <SelectTrigger className="mt-1">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="low">Low</SelectItem>
                    <SelectItem value="normal">Normal</SelectItem>
                    <SelectItem value="high">High</SelectItem>
                    <SelectItem value="urgent">Urgent</SelectItem>
                    <SelectItem value="critical">Critical</SelectItem>
                  </SelectContent>
                </Select>
              ) : (
                <p className="mt-1 text-gray-900 capitalize">{ticket.priority}</p>
              )}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Comments */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <MessageSquare className="w-5 h-5" />
            <span>Comments</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <label className="text-sm font-medium text-gray-600">Add Comment</label>
            <div className="flex space-x-2 mt-1">
              <Textarea
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
                placeholder="Add a comment..."
                rows={3}
                className="flex-1"
              />
              <Button 
                onClick={handleAddComment} 
                disabled={!newComment.trim() || loading}
              >
                {loading ? 'Adding...' : 'Add'}
              </Button>
            </div>
          </div>
          
          <div className="space-y-3">
            {comments.map((comment) => (
              <div key={comment.id} className="bg-gray-50 p-3 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-medium text-sm">{comment.author_name}</span>
                  <span className="text-xs text-gray-500">{formatDate(comment.created_at)}</span>
                </div>
                <p className="text-sm text-gray-700">{comment.content}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

// Main SupportTickets Component
const SupportTickets = () => {
  const { toast } = useToast();
  const {
    tickets,
    loading,
    error,
    filters,
    stats,
    createTicket,
    updateTicket,
    updateStatus,
    updatePriority,
    assignTicket,
    deleteTicket,
    applyFilters,
    clearFilters,
    getCategories,
    getTeamMembers,
    getTags,
    exportTickets,
    fetchTickets
  } = useSupportTickets();

  const [selectedTicket, setSelectedTicket] = useState<SupportTicket | null>(null);
  const [showFilters, setShowFilters] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [showCreate, setShowCreate] = useState(false);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'open': return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'in_progress': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'waiting_for_customer': return 'bg-purple-100 text-purple-800 border-purple-200';
      case 'resolved': return 'bg-green-100 text-green-800 border-green-200';
      case 'closed': return 'bg-gray-100 text-gray-800 border-gray-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'critical': return 'bg-red-100 text-red-800 border-red-200';
      case 'urgent': return 'bg-orange-100 text-orange-800 border-orange-200';
      case 'high': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'normal': return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'low': return 'bg-gray-100 text-gray-800 border-gray-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getPriorityIcon = (priority: string) => {
    switch (priority) {
      case 'critical': return <AlertTriangle className="w-4 h-4" />;
      case 'urgent': return <Zap className="w-4 h-4" />;
      case 'high': return <Target className="w-4 h-4" />;
      case 'normal': return <CheckCircle className="w-4 h-4" />;
      case 'low': return <Clock className="w-4 h-4" />;
      default: return <Clock className="w-4 h-4" />;
    }
  };

  const handleStatusChange = async (id: string, status: string) => {
    try {
      await updateStatus(id, status as any);
      toast({
        title: "Status Updated",
        description: `Ticket status changed to ${status}`,
        variant: "default",
      });
    } catch (error) {
      console.error('Failed to update status:', error);
      toast({
        title: "Update Failed",
        description: "Failed to update ticket status",
        variant: "destructive",
      });
    }
  };

  const handlePriorityChange = async (id: string, priority: string) => {
    try {
      await updatePriority(id, priority as any);
      toast({
        title: "Priority Updated",
        description: `Ticket priority changed to ${priority}`,
        variant: "default",
      });
    } catch (error) {
      console.error('Failed to update priority:', error);
      toast({
        title: "Update Failed",
        description: "Failed to update ticket priority",
        variant: "destructive",
      });
    }
  };

  const handleDelete = async (id: string) => {
    if (confirm('Are you sure you want to delete this ticket? This action cannot be undone.')) {
      try {
        await deleteTicket(id);
        toast({
          title: "Ticket Deleted",
          description: "The ticket has been deleted successfully",
          variant: "default",
        });
      } catch (error) {
        console.error('Failed to delete ticket:', error);
        toast({
          title: "Delete Failed",
          description: "Failed to delete the ticket",
          variant: "destructive",
        });
      }
    }
  };

  const handleCreateTicket = async (ticketData: CreateTicketData) => {
    try {
      await createTicket(ticketData);
      toast({
        title: "Ticket Created",
        description: "New support ticket has been created successfully",
        variant: "default",
      });
    } catch (error) {
      console.error('Failed to create ticket:', error);
      toast({
        title: "Creation Failed",
        description: "Failed to create the ticket",
        variant: "destructive",
      });
    }
  };

  const handleExport = () => {
    try {
      const csvContent = exportTickets();
      const blob = new Blob([csvContent], { type: 'text/csv' });
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `support-tickets-${new Date().toISOString().split('T')[0]}.csv`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      window.URL.revokeObjectURL(url);

      toast({
        title: "Export Successful",
        description: "Support tickets have been exported to CSV",
        variant: "default",
      });
    } catch (error) {
      console.error('Export failed:', error);
      toast({
        title: "Export Failed",
        description: "Failed to export support tickets",
        variant: "destructive",
      });
    }
  };

  const handleRefresh = async () => {
    try {
      await fetchTickets();
      toast({
        title: "Refreshed",
        description: "Support tickets have been refreshed",
        variant: "default",
      });
    } catch (error) {
      toast({
        title: "Refresh Failed",
        description: "Failed to refresh tickets",
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
      <Card className="bg-white border border-red-200 shadow-sm">
        <CardContent className="p-6">
          <div className="flex items-center space-x-4">
            <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-red-100 to-red-200 border border-red-300">
              <AlertCircle className="w-6 h-6 text-red-600" />
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-orbitron font-semibold text-red-800">Error Loading Tickets</h3>
              <p className="text-red-600 mt-1">{error}</p>
            </div>
          </div>
          <Button onClick={handleRefresh} className="mt-4 bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-600 hover:to-gold-700 text-white shadow-lg">
            <RefreshCw className="w-4 h-4 mr-2" />
            Try Again
          </Button>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header with Actions */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h2 className="text-2xl font-orbitron font-bold text-gray-900">Support Tickets</h2>
          <p className="text-gray-600">Manage and track customer support requests</p>
        </div>
        
        <div className="flex items-center space-x-3">
          <Button
            variant="outline"
            onClick={() => setShowFilters(!showFilters)}
            className="flex items-center space-x-2 border-gray-300 hover:bg-gray-50"
          >
            <Filter className="w-4 h-4" />
            <span>Filters</span>
          </Button>
          <Button 
            variant="outline" 
            className="flex items-center space-x-2 border-gray-300 hover:bg-gray-50"
            onClick={handleRefresh}
          >
            <RefreshCw className="w-4 h-4" />
            <span>Refresh</span>
          </Button>
          <Button 
            variant="outline" 
            className="flex items-center space-x-2 border-gray-300 hover:bg-gray-50"
            onClick={handleExport}
            disabled={tickets.length === 0}
          >
            <Download className="w-4 h-4" />
            <span>Export ({tickets.length})</span>
          </Button>
          <Button 
            onClick={() => setShowCreate(true)}
            className="bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-600 hover:to-gold-700 text-white shadow-lg"
          >
            <Plus className="w-4 h-4 mr-2" />
            Create Ticket
          </Button>
        </div>
      </div>

      {/* Statistics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="bg-white border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Total Tickets</p>
                <p className="text-2xl font-orbitron font-bold text-gray-900">{stats.total}</p>
              </div>
              <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-blue-100 to-blue-200 border border-blue-300">
                <FileText className="w-6 h-6 text-blue-600" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-white border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Open</p>
                <p className="text-2xl font-orbitron font-bold text-gray-900">{stats.open}</p>
              </div>
              <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-yellow-100 to-yellow-200 border border-yellow-300">
                <Clock className="w-6 h-6 text-yellow-600" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-white border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Urgent</p>
                <p className="text-2xl font-orbitron font-bold text-gray-900">{stats.urgent + stats.critical}</p>
              </div>
              <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-red-100 to-red-200 border border-red-300">
                <AlertTriangle className="w-6 h-6 text-red-600" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-white border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Resolved</p>
                <p className="text-2xl font-orbitron font-bold text-gray-900">{stats.resolved}</p>
              </div>
              <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-green-100 to-green-200 border border-green-300">
                <CheckCircle className="w-6 h-6 text-green-600" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Search and Filters */}
      <Card className="p-6 bg-white border border-gray-200 shadow-sm">
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-500" />
            <Input
              placeholder="Search tickets..."
              value={filters.search || ''}
              onChange={(e) => applyFilters({ ...filters, search: e.target.value })}
              className="pl-10"
            />
          </div>
          
          <div className="flex items-center space-x-2">
            <Filter className="w-4 h-4 text-gray-500" />
            <select
              value={filters.status || 'all'}
              onChange={(e) => applyFilters({ ...filters, status: e.target.value === 'all' ? undefined : e.target.value as any })}
              className="border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-gold-500"
            >
              <option value="all">All Status</option>
              <option value="open">Open</option>
              <option value="in_progress">In Progress</option>
              <option value="waiting_for_customer">Waiting</option>
              <option value="resolved">Resolved</option>
              <option value="closed">Closed</option>
            </select>
          </div>
        </div>
      </Card>

      {/* Tickets Table */}
      <Card className="bg-white border border-gray-200 shadow-sm">
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            <span className="text-lg font-orbitron font-semibold">All Tickets ({tickets.length})</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Ticket</TableHead>
                  <TableHead>Customer</TableHead>
                  <TableHead>Category</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Priority</TableHead>
                  <TableHead>Assigned To</TableHead>
                  <TableHead>Created</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {tickets.length === 0 ? (
                  <TableRow>
                    <TableCell colSpan={8} className="text-center py-12">
                      <div className="flex flex-col items-center space-y-3">
                        <div className="flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br from-gray-100 to-gray-200 border border-gray-300">
                          <FileText className="w-8 h-8 text-gray-400" />
                        </div>
                        <div className="text-center">
                          <p className="text-lg font-medium text-gray-900">No support tickets found</p>
                          <p className="text-sm text-gray-500 mt-1">Try adjusting your filters or create a new ticket</p>
                        </div>
                      </div>
                    </TableCell>
                  </TableRow>
                ) : (
                  tickets.map((ticket) => (
                    <TableRow key={ticket.id} className="hover:bg-gray-50">
                      <TableCell>
                        <div className="space-y-1">
                          <div className="font-medium">{ticket.title}</div>
                          <div className="text-sm text-gray-600">#{ticket.ticket_number}</div>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="space-y-1">
                          <div className="font-medium">{ticket.customer_name}</div>
                          <div className="flex items-center space-x-2 text-sm text-gray-600">
                            <Mail className="w-3 h-3" />
                            <span>{ticket.customer_email}</span>
                          </div>
                          {ticket.customer_phone && (
                            <div className="flex items-center space-x-2 text-sm text-gray-600">
                              <Phone className="w-3 h-3" />
                              <span>{ticket.customer_phone}</span>
                            </div>
                          )}
                        </div>
                      </TableCell>
                      <TableCell>
                        <Badge variant="outline" className="border-gray-300 bg-gray-50 text-gray-700">{ticket.category}</Badge>
                      </TableCell>
                      <TableCell>
                        <Select
                          value={ticket.status}
                          onValueChange={(value) => handleStatusChange(ticket.id, value)}
                        >
                          <SelectTrigger className="w-32">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="open">Open</SelectItem>
                            <SelectItem value="in_progress">In Progress</SelectItem>
                            <SelectItem value="waiting_for_customer">Waiting</SelectItem>
                            <SelectItem value="resolved">Resolved</SelectItem>
                            <SelectItem value="closed">Closed</SelectItem>
                          </SelectContent>
                        </Select>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center space-x-2">
                          {getPriorityIcon(ticket.priority)}
                          <Select
                            value={ticket.priority}
                            onValueChange={(value) => handlePriorityChange(ticket.id, value)}
                          >
                            <SelectTrigger className="w-24">
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="low">Low</SelectItem>
                              <SelectItem value="normal">Normal</SelectItem>
                              <SelectItem value="high">High</SelectItem>
                              <SelectItem value="urgent">Urgent</SelectItem>
                              <SelectItem value="critical">Critical</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="text-sm text-gray-900">
                          {ticket.assigned_to_name || 'Unassigned'}
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="text-sm text-gray-600">
                          {formatDate(ticket.created_at)}
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center space-x-2">
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => {
                              setSelectedTicket(ticket);
                              setShowDetails(true);
                            }}
                            title="View Details"
                            className="hover:bg-gray-100"
                          >
                            <Eye className="w-4 h-4 text-gray-600" />
                          </Button>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => handleDelete(ticket.id)}
                            className="text-red-600 hover:text-red-700 hover:bg-red-50"
                            title="Delete Ticket"
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

      {/* Create Ticket Dialog */}
      <CreateTicketDialog
        open={showCreate}
        onClose={() => setShowCreate(false)}
        onCreate={handleCreateTicket}
      />

      {/* Ticket Details Dialog */}
      <Dialog open={showDetails} onOpenChange={setShowDetails}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>Ticket Details</DialogTitle>
          </DialogHeader>
          {selectedTicket && (
            <TicketDetailsDialog
              ticket={selectedTicket}
              onUpdate={updateTicket}
              onClose={() => setShowDetails(false)}
            />
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default SupportTickets; 