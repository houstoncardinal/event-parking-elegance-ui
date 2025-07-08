import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { 
  BarChart3, 
  Users, 
  FolderOpen, 
  MessageSquare, 
  Ticket, 
  Brain,
  Menu,
  X,
  Settings,
  LogOut,
  Crown
} from "lucide-react";

interface MobileNavigationProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const MobileNavigation = ({ activeTab, setActiveTab }: MobileNavigationProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { id: "overview", label: "Overview", icon: BarChart3 },
    { id: "analytics", label: "Analytics", icon: Brain, count: 4 },
    { id: "clients", label: "Clients", icon: Users, count: 42 },
    { id: "projects", label: "Projects", icon: FolderOpen, count: 18 },
    { id: "team", label: "Team", icon: Users },
    { id: "forms", label: "Forms", icon: MessageSquare, count: 7 },
    { id: "tickets", label: "Tickets", icon: Ticket, count: 3 },
    { id: "settings", label: "Settings", icon: Settings },
  ];

  const bottomNavItems = [
    { id: "overview", label: "Home", icon: BarChart3 },
    { id: "analytics", label: "Analytics", icon: Brain },
    { id: "clients", label: "Clients", icon: Users },
    { id: "settings", label: "Settings", icon: Settings },
  ];

  return (
    <>
      {/* Mobile Header */}
      <div className="lg:hidden fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200 shadow-sm">
        <div className="flex items-center justify-between h-16 px-4">
          <div className="flex items-center space-x-3">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="lg:hidden">
                  <Menu className="w-5 h-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-80 p-0">
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
                        onClick={() => {
                          setActiveTab(item.id);
                          setIsOpen(false);
                        }}
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
              </SheetContent>
            </Sheet>
            
            <div>
              <h1 className="text-lg font-orbitron font-bold text-gray-900">Dashboard</h1>
              <p className="text-xs text-gray-600">Mobile View</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-2">
            <Badge className="bg-gold-100 text-gold-800 border-gold-200">
              Mobile
            </Badge>
          </div>
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 shadow-lg">
        <div className="flex items-center justify-around h-16 px-2">
          {bottomNavItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            
            return (
              <Button
                key={item.id}
                variant="ghost"
                size="sm"
                className={`flex flex-col items-center justify-center h-12 w-16 p-2 transition-all duration-200 ${
                  isActive 
                    ? "text-gold-600 bg-gold-50" 
                    : "text-gray-600 hover:text-gray-900"
                }`}
                onClick={() => setActiveTab(item.id)}
              >
                <Icon className={`w-5 h-5 mb-1 ${isActive ? 'text-gold-600' : 'text-gray-600'}`} />
                <span className="text-xs font-medium">{item.label}</span>
              </Button>
            );
          })}
        </div>
      </div>

      {/* Mobile Content Padding */}
      <div className="lg:hidden pt-16 pb-20"></div>
    </>
  );
};

export default MobileNavigation; 