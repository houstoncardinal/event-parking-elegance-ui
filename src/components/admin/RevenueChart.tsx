import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  TrendingUp, 
  Calendar, 
  Download, 
  BarChart3, 
  LineChart, 
  PieChart,
  Target,
  DollarSign,
  Activity,
  Zap,
  ChevronDown,
  ChevronUp,
  Users
} from "lucide-react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
  Filler,
  RadialLinearScale,
} from 'chart.js';
import { Line, Bar, Doughnut } from 'react-chartjs-2';

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
  Filler,
  RadialLinearScale
);

interface RevenueChartProps {
  setActiveTab: (tab: string) => void;
}

const RevenueChart = ({ setActiveTab }: RevenueChartProps) => {
  const [chartType, setChartType] = useState<'line' | 'bar' | 'doughnut'>('line');
  const [timeRange, setTimeRange] = useState<'6m' | '12m' | '24m'>('12m');
  const [showDetails, setShowDetails] = useState(false);

  // Enhanced data with more months and additional metrics
  const generateData = (months: number) => {
    const data = [];
    const currentDate = new Date();
    
    for (let i = months - 1; i >= 0; i--) {
      const date = new Date(currentDate.getFullYear(), currentDate.getMonth() - i, 1);
      const month = date.toLocaleString('default', { month: 'short' });
      
      // Generate realistic revenue data with some variation
      const baseRevenue = 45000 + Math.random() * 30000;
      const revenue = Math.round(baseRevenue + (Math.sin(i * 0.5) * 10000));
      const projects = Math.round(8 + Math.random() * 12);
      const profit = Math.round(revenue * (0.6 + Math.random() * 0.2));
      const expenses = revenue - profit;
      
      data.push({
        month,
        revenue,
        projects,
        profit,
        expenses,
        profitMargin: Math.round((profit / revenue) * 100)
      });
    }
    
    return data;
  };

  const data = generateData(timeRange === '6m' ? 6 : timeRange === '12m' ? 12 : 24);
  
  // Calculate statistics
  const totalRevenue = data.reduce((sum, item) => sum + item.revenue, 0);
  const avgRevenue = Math.round(totalRevenue / data.length);
  const totalProjects = data.reduce((sum, item) => sum + item.projects, 0);
  const avgProfitMargin = Math.round(data.reduce((sum, item) => sum + item.profitMargin, 0) / data.length);
  const growthRate = ((data[data.length - 1].revenue - data[0].revenue) / data[0].revenue * 100).toFixed(1);

  // Chart configuration
  const chartData = {
    labels: data.map(item => item.month),
    datasets: [
      {
        label: 'Revenue',
        data: data.map(item => item.revenue),
        borderColor: '#D97706',
        backgroundColor: 'rgba(217, 119, 6, 0.1)',
        fill: true,
        tension: 0.4,
        pointBackgroundColor: '#D97706',
        pointBorderColor: '#ffffff',
        pointBorderWidth: 2,
        pointRadius: 6,
        pointHoverRadius: 8,
      },
      {
        label: 'Profit',
        data: data.map(item => item.profit),
        borderColor: '#059669',
        backgroundColor: 'rgba(5, 150, 105, 0.1)',
        fill: false,
        tension: 0.4,
        pointBackgroundColor: '#059669',
        pointBorderColor: '#ffffff',
        pointBorderWidth: 2,
        pointRadius: 4,
        pointHoverRadius: 6,
      },
      {
        label: 'Projects',
        data: data.map(item => item.projects * 2000), // Scale for visibility
        borderColor: '#7C3AED',
        backgroundColor: 'rgba(124, 58, 237, 0.1)',
        fill: false,
        tension: 0.4,
        pointBackgroundColor: '#7C3AED',
        pointBorderColor: '#ffffff',
        pointBorderWidth: 2,
        pointRadius: 4,
        pointHoverRadius: 6,
        yAxisID: 'y1',
      }
    ]
  };

  const barData = {
    labels: data.map(item => item.month),
    datasets: [
      {
        label: 'Revenue',
        data: data.map(item => item.revenue),
        backgroundColor: 'rgba(217, 119, 6, 0.8)',
        borderColor: '#D97706',
        borderWidth: 2,
        borderRadius: 8,
        borderSkipped: false,
      },
      {
        label: 'Profit',
        data: data.map(item => item.profit),
        backgroundColor: 'rgba(5, 150, 105, 0.8)',
        borderColor: '#059669',
        borderWidth: 2,
        borderRadius: 8,
        borderSkipped: false,
      }
    ]
  };

  const doughnutData = {
    labels: ['Revenue', 'Profit', 'Expenses'],
    datasets: [{
      data: [
        data[data.length - 1].revenue,
        data[data.length - 1].profit,
        data[data.length - 1].expenses
      ],
      backgroundColor: [
        'rgba(217, 119, 6, 0.8)',
        'rgba(5, 150, 105, 0.8)',
        'rgba(239, 68, 68, 0.8)'
      ],
      borderColor: [
        '#D97706',
        '#059669',
        '#EF4444'
      ],
      borderWidth: 3,
      hoverOffset: 4,
    }]
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    interaction: {
      mode: 'index' as const,
      intersect: false,
    },
    plugins: {
      legend: {
        position: 'top' as const,
        labels: {
          usePointStyle: true,
          padding: 20,
          font: {
            family: 'Inter',
            size: 12,
            weight: 'bold' as const
          }
        }
      },
      tooltip: {
        backgroundColor: 'rgba(255, 255, 255, 0.95)',
        titleColor: '#1F2937',
        bodyColor: '#374151',
        borderColor: '#E5E7EB',
        borderWidth: 1,
        cornerRadius: 8,
        displayColors: true,
        titleFont: {
          family: 'Inter',
          size: 14,
          weight: 'bold' as const
        },
        bodyFont: {
          family: 'Inter',
          size: 12
        },
        callbacks: {
          label: function(context: any) {
            let label = context.dataset.label || '';
            if (label) {
              label += ': ';
            }
            if (context.dataset.label === 'Projects') {
              label += context.parsed.y / 2000 + ' projects';
            } else {
              label += '$' + context.parsed.y.toLocaleString();
            }
            return label;
          }
        }
      }
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
        ticks: {
          font: {
            family: 'Inter',
            size: 11
          }
        }
      },
      y: {
        type: 'linear' as const,
        display: true,
        position: 'left' as const,
        grid: {
          color: 'rgba(0, 0, 0, 0.05)',
        },
        ticks: {
          callback: function(value: any) {
            return '$' + (value / 1000) + 'k';
          },
          font: {
            family: 'Inter',
            size: 11
          }
        }
      },
      y1: {
        type: 'linear' as const,
        display: false,
        position: 'right' as const,
        grid: {
          drawOnChartArea: false,
        },
      },
    },
    animation: {
      duration: 2000,
      easing: 'easeInOutQuart' as const
    }
  };

  const barOptions = {
    ...chartOptions,
    scales: {
      ...chartOptions.scales,
      y: {
        ...chartOptions.scales.y,
        beginAtZero: true,
      }
    }
  };

  const doughnutOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'bottom' as const,
        labels: {
          usePointStyle: true,
          padding: 20,
          font: {
            family: 'Inter',
            size: 12,
            weight: 'bold' as const
          }
        }
      },
      tooltip: {
        backgroundColor: 'rgba(255, 255, 255, 0.95)',
        titleColor: '#1F2937',
        bodyColor: '#374151',
        borderColor: '#E5E7EB',
        borderWidth: 1,
        cornerRadius: 8,
        callbacks: {
          label: function(context: any) {
            const total = context.dataset.data.reduce((a: number, b: number) => a + b, 0);
            const percentage = ((context.parsed / total) * 100).toFixed(1);
            return context.label + ': $' + context.parsed.toLocaleString() + ' (' + percentage + '%)';
          }
        }
      }
    }
  };

  const renderChart = () => {
    switch (chartType) {
      case 'line':
        return <Line data={chartData} options={chartOptions} height={300} />;
      case 'bar':
        return <Bar data={barData} options={barOptions} height={300} />;
      case 'doughnut':
        return <Doughnut data={doughnutData} options={doughnutOptions} height={300} />;
      default:
        return <Line data={chartData} options={chartOptions} height={300} />;
    }
  };

  return (
    <Card className="bg-white border border-gray-200 shadow-lg p-6" data-revenue-chart>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-xl font-orbitron font-bold text-gray-900 mb-2">Revenue Overview</h3>
          <p className="text-gray-600">Monthly revenue and project tracking</p>
        </div>
        
        <div className="flex items-center space-x-3">
          <Badge 
            variant="secondary" 
            className={`${
              parseFloat(growthRate) >= 0 
                ? 'bg-green-500/20 text-green-600 border-green-500/30' 
                : 'bg-red-500/20 text-red-600 border-red-500/30'
            }`}
          >
            <TrendingUp className="w-3 h-3 mr-1" />
            {parseFloat(growthRate) >= 0 ? '+' : ''}{growthRate}%
          </Badge>
          
          <div className="flex items-center space-x-1 bg-gray-100 rounded-lg p-1">
            <Button
              variant={chartType === 'line' ? 'default' : 'ghost'}
              size="sm"
              onClick={() => setChartType('line')}
              className={`${
                chartType === 'line' 
                  ? 'bg-white shadow-sm text-gray-900' 
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              <LineChart className="w-4 h-4" />
            </Button>
            <Button
              variant={chartType === 'bar' ? 'default' : 'ghost'}
              size="sm"
              onClick={() => setChartType('bar')}
              className={`${
                chartType === 'bar' 
                  ? 'bg-white shadow-sm text-gray-900' 
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              <BarChart3 className="w-4 h-4" />
            </Button>
            <Button
              variant={chartType === 'doughnut' ? 'default' : 'ghost'}
              size="sm"
              onClick={() => setChartType('doughnut')}
              className={`${
                chartType === 'doughnut' 
                  ? 'bg-white shadow-sm text-gray-900' 
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              <PieChart className="w-4 h-4" />
            </Button>
          </div>
          
          <div className="flex items-center space-x-1 bg-gray-100 rounded-lg p-1">
            <Button
              variant={timeRange === '6m' ? 'default' : 'ghost'}
              size="sm"
              onClick={() => setTimeRange('6m')}
              className={`${
                timeRange === '6m' 
                  ? 'bg-white shadow-sm text-gray-900' 
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              6M
            </Button>
            <Button
              variant={timeRange === '12m' ? 'default' : 'ghost'}
              size="sm"
              onClick={() => setTimeRange('12m')}
              className={`${
                timeRange === '12m' 
                  ? 'bg-white shadow-sm text-gray-900' 
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              12M
            </Button>
            <Button
              variant={timeRange === '24m' ? 'default' : 'ghost'}
              size="sm"
              onClick={() => setTimeRange('24m')}
              className={`${
                timeRange === '24m' 
                  ? 'bg-white shadow-sm text-gray-900' 
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              24M
            </Button>
          </div>
          
          <div className="flex items-center space-x-2">
            <Button 
              variant="outline" 
              size="sm" 
              className="border-gray-300 text-gray-700 hover:text-gray-900 hover:bg-gray-50"
              onClick={() => setActiveTab("clients")}
            >
              <Users className="w-4 h-4 mr-2" />
              View Clients
            </Button>
            <Button 
              variant="outline" 
              size="sm" 
              className="border-gray-300 text-gray-700 hover:text-gray-900 hover:bg-gray-50"
            >
              <Download className="w-4 h-4 mr-2" />
              Export
            </Button>
          </div>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        <div className="bg-gradient-to-br from-gold-50 to-gold-100 border border-gold-200 rounded-lg p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gold-700">Total Revenue</p>
              <p className="text-xl font-orbitron font-bold text-gold-900">
                ${(totalRevenue / 1000).toFixed(0)}k
              </p>
            </div>
            <DollarSign className="w-8 h-8 text-gold-600" />
          </div>
        </div>
        
        <div className="bg-gradient-to-br from-green-50 to-green-100 border border-green-200 rounded-lg p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-green-700">Avg Revenue</p>
              <p className="text-xl font-orbitron font-bold text-green-900">
                ${(avgRevenue / 1000).toFixed(0)}k
              </p>
            </div>
            <Target className="w-8 h-8 text-green-600" />
          </div>
        </div>
        
        <div className="bg-gradient-to-br from-purple-50 to-purple-100 border border-purple-200 rounded-lg p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-purple-700">Total Projects</p>
              <p className="text-xl font-orbitron font-bold text-purple-900">
                {totalProjects}
              </p>
            </div>
            <Activity className="w-8 h-8 text-purple-600" />
          </div>
        </div>
        
        <div className="bg-gradient-to-br from-blue-50 to-blue-100 border border-blue-200 rounded-lg p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-blue-700">Profit Margin</p>
              <p className="text-xl font-orbitron font-bold text-blue-900">
                {avgProfitMargin}%
              </p>
            </div>
            <Zap className="w-8 h-8 text-blue-600" />
          </div>
        </div>
      </div>

      {/* Chart Container */}
      <div className="relative">
        <div className="h-80">
          {renderChart()}
        </div>
        
        {/* Chart Overlay Controls */}
        <div className="absolute top-4 right-4">
          <Button
            variant="outline"
            size="sm"
            onClick={() => setShowDetails(!showDetails)}
            className={`bg-white/90 backdrop-blur-sm border-gray-300 text-gray-700 hover:text-gray-900 transition-all duration-200 ${
              showDetails ? 'bg-gold-50 border-gold-300 text-gold-700 shadow-md' : ''
            }`}
          >
            {showDetails ? (
              <>
                <ChevronUp className="w-4 h-4 mr-2" />
                Hide Details
              </>
            ) : (
              <>
                <ChevronDown className="w-4 h-4 mr-2" />
                Show Details
              </>
            )}
          </Button>
        </div>
      </div>

      {/* Detailed Statistics */}
      {showDetails && (
        <div className="mt-6 pt-6 border-t border-gray-200 animate-in slide-in-from-bottom-4 duration-300">
          {/* Details Header */}
          <div className="mb-6">
            <div className="flex items-center space-x-3 mb-3">
              <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-gradient-to-br from-gold-100 to-gold-200 border border-gold-300">
                <Activity className="w-4 h-4 text-gold-600" />
              </div>
              <div>
                <h4 className="text-lg font-orbitron font-semibold text-gray-900">Detailed Analytics</h4>
                <p className="text-sm text-gray-600">Comprehensive breakdown of revenue performance and insights</p>
              </div>
            </div>
            <div className="h-px bg-gradient-to-r from-transparent via-gold-200 to-transparent"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 border border-blue-200 rounded-lg p-4">
              <div className="flex items-center space-x-2 mb-3">
                <DollarSign className="w-4 h-4 text-blue-600" />
                <h4 className="text-sm font-semibold text-blue-900">Revenue Breakdown</h4>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Highest Month:</span>
                  <span className="font-medium text-gray-900">
                    {data.reduce((max, item) => item.revenue > max.revenue ? item : max).month} 
                    (${Math.max(...data.map(d => d.revenue)).toLocaleString()})
                  </span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Lowest Month:</span>
                  <span className="font-medium text-gray-900">
                    {data.reduce((min, item) => item.revenue < min.revenue ? item : min).month} 
                    (${Math.min(...data.map(d => d.revenue)).toLocaleString()})
                  </span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Growth Rate:</span>
                  <span className={`font-medium ${parseFloat(growthRate) >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                    {parseFloat(growthRate) >= 0 ? '+' : ''}{growthRate}%
                  </span>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 border border-purple-200 rounded-lg p-4">
              <div className="flex items-center space-x-2 mb-3">
                <Activity className="w-4 h-4 text-purple-600" />
                <h4 className="text-sm font-semibold text-purple-900">Project Metrics</h4>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Avg Projects/Month:</span>
                  <span className="font-medium text-gray-900">
                    {(totalProjects / data.length).toFixed(1)}
                  </span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Revenue per Project:</span>
                  <span className="font-medium text-gray-900">
                    ${(totalRevenue / totalProjects).toLocaleString()}
                  </span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Peak Month:</span>
                  <span className="font-medium text-gray-900">
                    {data.reduce((max, item) => item.projects > max.projects ? item : max).month} 
                    ({Math.max(...data.map(d => d.projects))} projects)
                  </span>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-green-50 to-green-100 border border-green-200 rounded-lg p-4">
              <div className="flex items-center space-x-2 mb-3">
                <Target className="w-4 h-4 text-green-600" />
                <h4 className="text-sm font-semibold text-green-900">Performance Insights</h4>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Profit Trend:</span>
                  <span className="font-medium text-green-600">↗️ Increasing</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Efficiency:</span>
                  <span className="font-medium text-blue-600">High</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Market Position:</span>
                  <span className="font-medium text-purple-600">Strong</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </Card>
  );
};

export default RevenueChart;