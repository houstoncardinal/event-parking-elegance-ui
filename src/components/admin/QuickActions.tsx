import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { 
  Plus, 
  Download, 
  Upload, 
  Settings, 
  Users, 
  Calendar,
  MessageSquare,
  FileText,
  BarChart3,
  Zap,
  Clock,
  Star,
  Filter,
  Search,
  ArrowRight,
  CheckCircle,
  AlertCircle,
  Info
} from "lucide-react";

interface QuickAction {
  id: string;
  title: string;
  description: string;
  icon: any;
  color: string;
  shortcut?: string;
  action: () => void;
}

interface RecentAction {
  id: string;
  type: 'create' | 'update' | 'delete' | 'export';
  title: string;
  timestamp: Date;
  status: 'completed' | 'pending' | 'failed';
}

const QuickActions = ({ setActiveTab }: { setActiveTab: (tab: string) => void }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const quickActions: QuickAction[] = [
    {
      id: 'new-client',
      title: 'Add New Client',
      description: 'Create a new client profile',
      icon: Users,
      color: 'bg-blue-500',
      shortcut: 'Ctrl+Shift+C',
      action: () => setActiveTab('clients')
    },
    {
      id: 'new-project',
      title: 'Create Project',
      description: 'Start a new parking project',
      icon: Calendar,
      color: 'bg-green-500',
      shortcut: 'Ctrl+Shift+P',
      action: () => setActiveTab('projects')
    },
    {
      id: 'export-data',
      title: 'Export Data',
      description: 'Export reports and analytics',
      icon: Download,
      color: 'bg-purple-500',
      shortcut: 'Ctrl+E',
      action: () => console.log('Export data')
    },
    {
      id: 'bulk-actions',
      title: 'Bulk Actions',
      description: 'Manage multiple items at once',
      icon: Filter,
      color: 'bg-orange-500',
      shortcut: 'Ctrl+B',
      action: () => console.log('Bulk actions')
    },
    {
      id: 'system-settings',
      title: 'System Settings',
      description: 'Configure dashboard preferences',
      icon: Settings,
      color: 'bg-gray-500',
      shortcut: 'Ctrl+,',
      action: () => console.log('Settings')
    },
    {
      id: 'view-reports',
      title: 'View Reports',
      description: 'Access detailed analytics',
      icon: BarChart3,
      color: 'bg-gold-500',
      shortcut: 'Ctrl+R',
      action: () => console.log('Reports')
    }
  ];

  const recentActions: RecentAction[] = [
    {
      id: '1',
      type: 'create',
      title: 'Added new client: John Smith',
      timestamp: new Date(Date.now() - 5 * 60 * 1000),
      status: 'completed'
    },
    {
      id: '2',
      type: 'update',
      title: 'Updated project: Downtown Event',
      timestamp: new Date(Date.now() - 15 * 60 * 1000),
      status: 'completed'
    },
    {
      id: '3',
      type: 'export',
      title: 'Exported monthly report',
      timestamp: new Date(Date.now() - 30 * 60 * 1000),
      status: 'completed'
    },
    {
      id: '4',
      type: 'delete',
      title: 'Deleted old form submission',
      timestamp: new Date(Date.now() - 45 * 60 * 1000),
      status: 'completed'
    }
  ];

  const getStatusIcon = (status: RecentAction['status']) => {
    switch (status) {
      case 'completed': return <CheckCircle className="w-4 h-4 text-green-500" />;
      case 'pending': return <Clock className="w-4 h-4 text-yellow-500" />;
      case 'failed': return <AlertCircle className="w-4 h-4 text-red-500" />;
    }
  };

  const getTypeIcon = (type: RecentAction['type']) => {
    switch (type) {
      case 'create': return <Plus className="w-4 h-4 text-green-600" />;
      case 'update': return <Settings className="w-4 h-4 text-blue-600" />;
      case 'delete': return <AlertCircle className="w-4 h-4 text-red-600" />;
      case 'export': return <Download className="w-4 h-4 text-purple-600" />;
    }
  };

  const formatTimeAgo = (date: Date) => {
    const now = new Date();
    const diff = now.getTime() - date.getTime();
    const minutes = Math.floor(diff / 60000);
    const hours = Math.floor(diff / 3600000);
    const days = Math.floor(diff / 86400000);

    if (days > 0) return `${days}d ago`;
    if (hours > 0) return `${hours}h ago`;
    if (minutes > 0) return `${minutes}m ago`;
    return 'Just now';
  };

  const filteredActions = quickActions.filter(action =>
    action.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    action.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
            <Zap className="w-6 h-6 text-gold-600" />
            Quick Actions
          </h2>
          <p className="text-gray-600">Fast access to common tasks and recent activities</p>
        </div>
        <div className="flex items-center space-x-2">
          <Badge className="bg-gold-100 text-gold-800 border-gold-200">
            <Star className="w-3 h-3 mr-1" />
            Productivity
          </Badge>
        </div>
      </div>

      {/* Search */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-500" />
        <Input
          placeholder="Search quick actions..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="pl-10 bg-white border-gray-300 focus:border-gold-400 focus:ring-gold-400"
        />
      </div>

      {/* Quick Actions Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredActions.map((action) => {
          const Icon = action.icon;
          return (
            <Card 
              key={action.id} 
              className="hover:shadow-lg transition-all duration-200 cursor-pointer group border-gray-200 hover:border-gold-300"
              onClick={action.action}
            >
              <CardContent className="p-6">
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-4">
                    <div className={`w-12 h-12 ${action.color} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900 group-hover:text-gold-700 transition-colors">
                        {action.title}
                      </h3>
                      <p className="text-sm text-gray-600 mt-1">{action.description}</p>
                      {action.shortcut && (
                        <div className="flex items-center mt-2">
                          <kbd className="px-2 py-1 bg-gray-100 rounded text-xs text-gray-600">
                            {action.shortcut}
                          </kbd>
                        </div>
                      )}
                    </div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-gold-600 group-hover:translate-x-1 transition-all" />
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Recent Actions */}
      <Card className="border-gray-200">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Clock className="w-5 h-5 text-gray-600" />
            Recent Actions
          </CardTitle>
          <CardDescription>
            Your latest activities and changes
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {recentActions.map((action) => (
              <div key={action.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                <div className="flex items-center space-x-3">
                  {getTypeIcon(action.type)}
                  <div>
                    <p className="text-sm font-medium text-gray-900">{action.title}</p>
                    <p className="text-xs text-gray-500">{formatTimeAgo(action.timestamp)}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  {getStatusIcon(action.status)}
                  <Badge 
                    variant="secondary" 
                    className={`text-xs ${
                      action.status === 'completed' ? 'bg-green-100 text-green-800' :
                      action.status === 'pending' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-red-100 text-red-800'
                    }`}
                  >
                    {action.status}
                  </Badge>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Productivity Tips */}
      <Card className="bg-gradient-to-r from-gold-50 to-white border-gold-200">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-gold-800">
            <Star className="w-5 h-5" />
            Productivity Tips
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-start space-x-3">
              <div className="w-8 h-8 bg-gold-100 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-gold-600 font-bold text-sm">1</span>
              </div>
              <div>
                <h4 className="font-medium text-gray-900">Use Keyboard Shortcuts</h4>
                <p className="text-sm text-gray-600">Press Ctrl+? to see all available shortcuts</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-8 h-8 bg-gold-100 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-gold-600 font-bold text-sm">2</span>
              </div>
              <div>
                <h4 className="font-medium text-gray-900">Bulk Operations</h4>
                <p className="text-sm text-gray-600">Select multiple items for efficient management</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-8 h-8 bg-gold-100 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-gold-600 font-bold text-sm">3</span>
              </div>
              <div>
                <h4 className="font-medium text-gray-900">Quick Search</h4>
                <p className="text-sm text-gray-600">Use Ctrl+K to search across all modules</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-8 h-8 bg-gold-100 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-gold-600 font-bold text-sm">4</span>
              </div>
              <div>
                <h4 className="font-medium text-gray-900">Stay Updated</h4>
                <p className="text-sm text-gray-600">Check notifications regularly for important updates</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default QuickActions; 