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
  Crown
} from "lucide-react";

interface AdminSidebarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const AdminSidebar = ({ activeTab, setActiveTab }: AdminSidebarProps) => {
  const menuItems = [
    { id: "overview", label: "Overview", icon: BarChart3 },
    { id: "clients", label: "Clients", icon: Users, count: 42 },
    { id: "projects", label: "Projects", icon: FolderOpen, count: 18 },
    { id: "team", label: "Team", icon: Users },
    { id: "forms", label: "Form Submissions", icon: MessageSquare, count: 7 },
    { id: "tickets", label: "Support Tickets", icon: Ticket, count: 3 },
  ];

  return (
    <div className="fixed left-0 top-0 h-full w-64 nav-vip border-r border-white/10 z-20">
      <div className="p-6 border-b border-white/10">
        <div className="flex items-center space-x-3">
          <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-gold-400 to-gold-600 shadow-lg">
            <Crown className="w-5 h-5 text-black" />
          </div>
          <div>
            <h2 className="text-lg font-orbitron font-bold text-vip-glow">Cardinal Parking</h2>
            <p className="text-xs text-vip/60">Admin Dashboard</p>
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
                  ? "bg-gradient-to-r from-white/15 to-white/5 border border-white/20 text-vip-glow shadow-lg" 
                  : "hover:bg-white/5 text-vip/80 hover:text-vip"
              }`}
              onClick={() => setActiveTab(item.id)}
            >
              <Icon className="w-5 h-5 mr-3" />
              <span className="flex-1 text-left font-medium">{item.label}</span>
              {item.count && (
                <Badge variant="secondary" className="ml-2 bg-gold-500/20 text-gold-400 border-gold-500/30">
                  {item.count}
                </Badge>
              )}
            </Button>
          );
        })}
      </nav>

      <div className="absolute bottom-4 left-4 right-4 space-y-2">
        <Button variant="ghost" className="w-full justify-start text-vip/60 hover:text-vip">
          <Settings className="w-5 h-5 mr-3" />
          Settings
        </Button>
        <Button variant="ghost" className="w-full justify-start text-vip/60 hover:text-vip">
          <LogOut className="w-5 h-5 mr-3" />
          Logout
        </Button>
      </div>
    </div>
  );
};

export default AdminSidebar;