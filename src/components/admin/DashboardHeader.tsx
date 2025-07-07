import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Bell, Search, User, Filter } from "lucide-react";

const DashboardHeader = () => {
  return (
    <header className="h-20 border-b border-white/10 bg-gradient-to-r from-black/90 via-vip-gray-dark/50 to-black/90 backdrop-blur-xl">
      <div className="flex items-center justify-between h-full px-8">
        <div className="flex items-center space-x-6">
          <div>
            <h1 className="text-2xl font-orbitron font-bold text-vip-glow">Dashboard</h1>
            <p className="text-sm text-vip/60">Welcome back, Admin</p>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-vip/50" />
            <Input 
              placeholder="Search..." 
              className="glass-input w-80 pl-10 bg-white/5 border-white/20 text-vip placeholder:text-vip/50"
            />
          </div>

          <Button variant="ghost" size="icon" className="relative text-vip/70 hover:text-vip">
            <Bell className="w-5 h-5" />
            <Badge className="absolute -top-1 -right-1 w-5 h-5 p-0 bg-red-500 hover:bg-red-500 text-white text-xs">
              3
            </Badge>
          </Button>

          <Button variant="ghost" size="icon" className="text-vip/70 hover:text-vip">
            <Filter className="w-5 h-5" />
          </Button>

          <div className="flex items-center space-x-3 pl-4 border-l border-white/10">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gold-400 to-gold-600 flex items-center justify-center">
              <User className="w-5 h-5 text-black" />
            </div>
            <div>
              <p className="text-sm font-medium text-vip">Admin User</p>
              <p className="text-xs text-vip/60">admin@cardinalparking.com</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default DashboardHeader;