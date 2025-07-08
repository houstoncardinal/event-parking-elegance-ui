import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AlertTriangle, RefreshCw, Home } from "lucide-react";

const AdminDashboardFallback = () => {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <Card className="max-w-md w-full">
        <CardHeader className="text-center">
          <div className="mx-auto w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mb-4">
            <AlertTriangle className="w-6 h-6 text-yellow-600" />
          </div>
          <CardTitle className="text-xl">Admin Dashboard Unavailable</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-muted-foreground text-center">
            The admin dashboard is currently experiencing issues. This might be due to:
          </p>
          <ul className="text-sm text-muted-foreground space-y-1">
            <li>• Missing dependencies</li>
            <li>• Build configuration issues</li>
            <li>• Environment compatibility problems</li>
          </ul>
          <div className="flex flex-col space-y-2 pt-4">
            <Button 
              onClick={() => window.location.reload()} 
              className="w-full"
            >
              <RefreshCw className="w-4 h-4 mr-2" />
              Try Again
            </Button>
            <Button 
              variant="outline" 
              onClick={() => window.location.href = '/'}
              className="w-full"
            >
              <Home className="w-4 h-4 mr-2" />
              Go to Homepage
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AdminDashboardFallback; 