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
  Filter
} from "lucide-react";
import AdminSidebar from "@/components/admin/AdminSidebar";
import DashboardHeader from "@/components/admin/DashboardHeader";
import MetricsCards from "@/components/admin/MetricsCards";
import RevenueChart from "@/components/admin/RevenueChart";
import RecentActivity from "@/components/admin/RecentActivity";
import ClientsOverview from "@/components/admin/ClientsOverview";
import ClientManagement from "@/components/admin/ClientManagement";
import ProjectManagement from "@/components/admin/ProjectManagement";
import ProjectsOverview from "@/components/admin/ProjectsOverview";

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <div className="min-h-screen bg-background text-foreground font-inter">
      {/* Premium background with subtle patterns */}
      <div className="fixed inset-0 bg-gradient-to-br from-white via-gray-50 to-white"></div>
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-gold-100/30 via-transparent to-transparent"></div>
      
      <div className="relative z-10 flex">
        <AdminSidebar activeTab={activeTab} setActiveTab={setActiveTab} />
        
        <main className="flex-1 ml-64">
          <DashboardHeader />
          
          <div className="p-8 space-y-8">
            {activeTab === "overview" && (
              <>
                <MetricsCards />
                
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  <div className="lg:col-span-2">
                    <RevenueChart />
                  </div>
                  <div>
                    <RecentActivity />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <ClientsOverview />
                  <ProjectsOverview />
                </div>
              </>
            )}
            
            {activeTab === "clients" && (
              <ClientManagement />
            )}
            
            {activeTab === "projects" && (
              <ProjectManagement />
            )}
            
            {activeTab === "team" && (
              <div className="card-vip p-8">
                <h2 className="text-2xl font-orbitron font-bold text-vip-glow mb-6">Team Management</h2>
                <p className="text-vip/80">Team collaboration and management features coming soon...</p>
              </div>
            )}
            
            {activeTab === "forms" && (
              <div className="card-vip p-8">
                <h2 className="text-2xl font-orbitron font-bold text-vip-glow mb-6">Form Submissions</h2>
                <p className="text-vip/80">Form submission tracking and management coming soon...</p>
              </div>
            )}
            
            {activeTab === "tickets" && (
              <div className="card-vip p-8">
                <h2 className="text-2xl font-orbitron font-bold text-vip-glow mb-6">Support Tickets</h2>
                <p className="text-vip/80">Advanced ticketing system coming soon...</p>
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  );
};

export default AdminDashboard;