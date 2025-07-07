import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, Calendar, Download } from "lucide-react";

const RevenueChart = () => {
  const data = [
    { month: "Jan", revenue: 45000, projects: 12 },
    { month: "Feb", revenue: 52000, projects: 14 },
    { month: "Mar", revenue: 48000, projects: 11 },
    { month: "Apr", revenue: 61000, projects: 16 },
    { month: "May", revenue: 55000, projects: 13 },
    { month: "Jun", revenue: 67000, projects: 18 },
  ];

  const maxRevenue = Math.max(...data.map(d => d.revenue));

  return (
    <Card className="bg-white border border-gray-200 shadow-lg p-8">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h3 className="text-xl font-orbitron font-bold text-gray-900 mb-2">Revenue Overview</h3>
          <p className="text-gray-600">Monthly revenue and project tracking</p>
        </div>
        
        <div className="flex items-center space-x-3">
          <Badge variant="secondary" className="bg-green-500/20 text-green-400 border-green-500/30">
            <TrendingUp className="w-3 h-3 mr-1" />
            +12.5%
          </Badge>
          <Button variant="outline" size="sm" className="border-gray-300 text-gray-700 hover:text-gray-900 hover:bg-gray-50">
            <Calendar className="w-4 h-4 mr-2" />
            Last 6 months
          </Button>
          <Button variant="outline" size="sm" className="border-gray-300 text-gray-700 hover:text-gray-900 hover:bg-gray-50">
            <Download className="w-4 h-4 mr-2" />
            Export
          </Button>
        </div>
      </div>

      {/* Custom Chart Visualization */}
      <div className="space-y-6">
        <div className="grid grid-cols-6 gap-4 h-64">
          {data.map((item, index) => {
            const height = (item.revenue / maxRevenue) * 100;
            
            return (
              <div key={index} className="flex flex-col items-center">
                <div className="flex-1 flex items-end w-full">
                  <div className="w-full relative">
                    <div 
                      className="w-full bg-gradient-to-t from-gold-600 to-gold-400 rounded-t-lg transition-all duration-1000 ease-out"
                      style={{ height: `${height}%` }}
                    >
                      <div className="absolute -top-8 left-1/2 transform -translate-x-1/2">
                        <span className="text-xs font-medium text-gray-900 bg-white shadow-md border border-gray-200 px-2 py-1 rounded">
                          ${(item.revenue / 1000).toFixed(0)}k
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-4 text-center">
                  <p className="text-sm font-medium text-gray-900">{item.month}</p>
                  <p className="text-xs text-gray-600">{item.projects} projects</p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="flex items-center justify-between pt-6 border-t border-gray-200">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 rounded-full bg-gradient-to-r from-gold-600 to-gold-400"></div>
              <span className="text-sm text-gray-600">Revenue</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 rounded-full bg-gray-300"></div>
              <span className="text-sm text-gray-600">Projects</span>
            </div>
          </div>
          
          <div className="text-right">
            <p className="text-sm text-gray-600">Average monthly revenue</p>
            <p className="text-lg font-orbitron font-bold text-gray-900">$54,667</p>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default RevenueChart;