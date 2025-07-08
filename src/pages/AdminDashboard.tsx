import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  BarChart3, 
  Users, 
  FolderOpen, 
  MessageSquare, 
  Ticket, 
  DollarSign,
  TrendingUp,
  Calendar,
  Settings,
  Bell,
  Search,
  Filter,
  Brain,
  Zap
} from "lucide-react";
import AdminSidebar from "@/components/admin/AdminSidebar";
import DashboardHeader from "@/components/admin/DashboardHeader";
import MobileNavigation from "@/components/admin/MobileNavigation";
import MetricsCards from "@/components/admin/MetricsCards";
import RevenueChart from "@/components/admin/RevenueChart";
import RecentActivity from "@/components/admin/RecentActivity";
import ClientsOverview from "@/components/admin/ClientsOverview";
import ClientManagement from "@/components/admin/ClientManagement";
import ProjectManagement from "@/components/admin/ProjectManagement";
import ProjectsOverview from "@/components/admin/ProjectsOverview";
import TeamManagement from "@/components/admin/TeamManagement";
import FormSubmissions from "@/components/admin/FormSubmissions";
import SupportTickets from "@/components/admin/SupportTickets";
import AdvancedAnalytics from "@/components/admin/AdvancedAnalytics";
import QuickActions from "@/components/admin/QuickActions";
import SettingsPanel from "@/components/admin/SettingsPanel";

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <div className="min-h-screen bg-background text-foreground font-inter">
      {/* Premium background with subtle patterns */}
      <div className="fixed inset-0 bg-gradient-to-br from-white via-gray-50 to-white"></div>
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-gold-100/30 via-transparent to-transparent"></div>
      
      {/* Mobile Navigation */}
      <MobileNavigation activeTab={activeTab} setActiveTab={setActiveTab} />
      
      <div className="relative z-10 flex">
        {/* Desktop Sidebar */}
        <div className="hidden lg:block">
          <AdminSidebar activeTab={activeTab} setActiveTab={setActiveTab} />
        </div>
        
        <main className="flex-1 lg:ml-64">
          {/* Desktop Header */}
          <div className="hidden lg:block">
            <DashboardHeader />
          </div>
          
          <div className="p-4 lg:p-8 space-y-6 lg:space-y-8">
            {activeTab === "overview" && (
              <>
                <MetricsCards setActiveTab={setActiveTab} />
                
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
                  <div className="lg:col-span-2">
                    <RevenueChart setActiveTab={setActiveTab} />
                  </div>
                  <div>
                    <RecentActivity setActiveTab={setActiveTab} />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
                  <ClientsOverview setActiveTab={setActiveTab} />
                  <ProjectsOverview setActiveTab={setActiveTab} />
                </div>

                <QuickActions setActiveTab={setActiveTab} />
              </>
            )}
            
            {activeTab === "analytics" && (
              <AdvancedAnalytics />
            )}
            
            {activeTab === "clients" && (
              <ClientManagement />
            )}
            
            {activeTab === "projects" && (
              <ProjectManagement />
            )}
            
            {activeTab === "team" && (
              <TeamManagement />
            )}
            
            {activeTab === "forms" && (
              <FormSubmissions />
            )}
            
            {activeTab === "tickets" && (
              <SupportTickets />
            )}

            {activeTab === "settings" && (
              <SettingsPanel />
            )}
          </div>
        </main>
      </div>
    </div>
  );
};

export default AdminDashboard;