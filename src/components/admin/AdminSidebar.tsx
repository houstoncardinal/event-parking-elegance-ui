import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  BarChart3, 
  Users, 
  FolderOpen, 
  MessageSquare, 
  Ticket, 
  Settings,
  LogOut,
  Crown,
  Brain
} from "lucide-react";

interface AdminSidebarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const AdminSidebar = ({ activeTab, setActiveTab }: AdminSidebarProps) => {
  const menuItems = [
    { id: "overview", label: "Overview", icon: BarChart3 },
    { id: "analytics", label: "Analytics", icon: Brain, count: 4 },
    { id: "clients", label: "Clients", icon: Users, count: 42 },
    { id: "projects", label: "Projects", icon: FolderOpen, count: 18 },
    { id: "team", label: "Team", icon: Users },
    { id: "forms", label: "Form Submissions", icon: MessageSquare, count: 7 },
    { id: "tickets", label: "Support Tickets", icon: Ticket, count: 3 },
    { id: "settings", label: "Settings", icon: Settings },
  ];

  return (
    <div className="fixed left-0 top-0 h-full w-64 bg-white border-r border-gray-200 shadow-xl z-20">
      <div className="p-6 border-b border-gray-200 bg-gradient-to-r from-gold-50 to-gold-100">
        <div className="flex items-center space-x-3">
          <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-gold-400 to-gold-600 shadow-lg">
            <Crown className="w-5 h-5 text-black" />
          </div>
          <div>
            <h2 className="text-lg font-orbitron font-bold text-gray-900">Cardinal Parking</h2>
            <p className="text-xs text-gray-600">Admin Dashboard</p>
          </div>
        </div>
      </div>

      <nav className="p-4 space-y-2">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.id;
          
          return (
            <Button
              key={item.id}
              variant="ghost"
              className={`w-full justify-start p-3 h-auto transition-all duration-300 ${
                isActive 
                  ? "bg-gradient-to-r from-gold-100 to-gold-50 border border-gold-300 text-gray-900 shadow-md" 
                  : "hover:bg-gray-50 text-gray-700 hover:text-gray-900"
              }`}
              onClick={() => setActiveTab(item.id)}
            >
              <Icon className="w-5 h-5 mr-3" />
              <span className="flex-1 text-left font-medium">{item.label}</span>
              {item.count && (
                <Badge variant="secondary" className="ml-2 bg-gold-200 text-gold-800 border-gold-300">
                  {item.count}
                </Badge>
              )}
            </Button>
          );
        })}
      </nav>

      <div className="absolute bottom-4 left-4 right-4 space-y-2">
        <Button variant="ghost" className="w-full justify-start text-gray-600 hover:text-gray-900 hover:bg-gray-100">
          <LogOut className="w-5 h-5 mr-3" />
          Logout
        </Button>
      </div>
    </div>
  );
};

export default AdminSidebar;