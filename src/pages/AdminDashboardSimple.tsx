import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  BarChart3, 
  Users, 
  FolderOpen, 
  MessageSquare, 
  Ticket, 
  DollarSign,
  Settings
} from "lucide-react";
import ErrorBoundary from "@/components/ErrorBoundary";

const AdminDashboardSimple = () => {
  const [activeTab, setActiveTab] = useState("overview");

  const tabs = [
    { id: "overview", label: "Overview", icon: BarChart3 },
    { id: "clients", label: "Clients", icon: Users },
    { id: "projects", label: "Projects", icon: FolderOpen },
    { id: "forms", label: "Forms", icon: MessageSquare },
    { id: "tickets", label: "Tickets", icon: Ticket },
    { id: "settings", label: "Settings", icon: Settings },
  ];

  return (
    <ErrorBoundary>
      <div className="min-h-screen bg-background text-foreground">
        {/* Header */}
        <div className="bg-card border-b border-border p-4">
          <h1 className="text-2xl font-bold text-foreground">Admin Dashboard</h1>
          <p className="text-muted-foreground">Simplified version for testing</p>
        </div>

        {/* Navigation */}
        <div className="bg-card border-b border-border p-4">
          <div className="flex flex-wrap gap-2">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <Button
                  key={tab.id}
                  variant={activeTab === tab.id ? "default" : "outline"}
                  onClick={() => setActiveTab(tab.id)}
                  className="flex items-center gap-2"
                >
                  <Icon className="w-4 h-4" />
                  {tab.label}
                </Button>
              );
            })}
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          <ErrorBoundary>
            {activeTab === "overview" && (
              <div className="space-y-6">
                <h2 className="text-xl font-semibold">Overview</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <DollarSign className="w-5 h-5 text-green-500" />
                        Revenue
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">$125,000</div>
                      <p className="text-sm text-muted-foreground">This month</p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Users className="w-5 h-5 text-blue-500" />
                        Clients
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">45</div>
                      <p className="text-sm text-muted-foreground">Active clients</p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <FolderOpen className="w-5 h-5 text-purple-500" />
                        Projects
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">12</div>
                      <p className="text-sm text-muted-foreground">Active projects</p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            )}

            {activeTab === "clients" && (
              <div className="space-y-6">
                <h2 className="text-xl font-semibold">Clients</h2>
                <Card>
                  <CardContent className="p-6">
                    <p className="text-muted-foreground">Client management will be loaded here.</p>
                  </CardContent>
                </Card>
              </div>
            )}

            {activeTab === "projects" && (
              <div className="space-y-6">
                <h2 className="text-xl font-semibold">Projects</h2>
                <Card>
                  <CardContent className="p-6">
                    <p className="text-muted-foreground">Project management will be loaded here.</p>
                  </CardContent>
                </Card>
              </div>
            )}

            {activeTab === "forms" && (
              <div className="space-y-6">
                <h2 className="text-xl font-semibold">Form Submissions</h2>
                <Card>
                  <CardContent className="p-6">
                    <p className="text-muted-foreground">Form submissions will be loaded here.</p>
                  </CardContent>
                </Card>
              </div>
            )}

            {activeTab === "tickets" && (
              <div className="space-y-6">
                <h2 className="text-xl font-semibold">Support Tickets</h2>
                <Card>
                  <CardContent className="p-6">
                    <p className="text-muted-foreground">Support tickets will be loaded here.</p>
                  </CardContent>
                </Card>
              </div>
            )}

            {activeTab === "settings" && (
              <div className="space-y-6">
                <h2 className="text-xl font-semibold">Settings</h2>
                <Card>
                  <CardContent className="p-6">
                    <p className="text-muted-foreground">Settings will be loaded here.</p>
                  </CardContent>
                </Card>
              </div>
            )}
          </ErrorBoundary>
        </div>
      </div>
    </ErrorBoundary>
  );
};

export default AdminDashboardSimple; 