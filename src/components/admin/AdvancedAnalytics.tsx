import { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { 
  TrendingUp, 
  TrendingDown, 
  DollarSign, 
  Users, 
  Calendar,
  Target,
  Lightbulb,
  AlertTriangle,
  CheckCircle,
  Clock,
  ArrowUpRight,
  ArrowDownRight,
  Brain,
  Zap,
  BarChart3,
  PieChart,
  Activity
} from "lucide-react";

interface Insight {
  id: string;
  type: 'positive' | 'warning' | 'opportunity' | 'alert';
  title: string;
  description: string;
  impact: 'high' | 'medium' | 'low';
  confidence: number;
  action?: string;
}

interface Prediction {
  metric: string;
  currentValue: number;
  predictedValue: number;
  change: number;
  timeframe: string;
  confidence: number;
}

const AdvancedAnalytics = () => {
  const [timeRange, setTimeRange] = useState("30d");
  const [selectedMetric, setSelectedMetric] = useState("revenue");
  const [showPredictions, setShowPredictions] = useState(false);

  // Mock AI insights
  const [insights] = useState<Insight[]>([
    {
      id: '1',
      type: 'positive',
      title: 'Revenue Growth Trend',
      description: 'Your revenue has increased by 23% compared to last month. This trend is expected to continue based on current booking patterns.',
      impact: 'high',
      confidence: 92,
      action: 'Consider expanding premium services'
    },
    {
      id: '2',
      type: 'opportunity',
      title: 'Peak Hour Optimization',
      description: 'Analysis shows 40% of bookings occur between 6-8 PM. Consider dynamic pricing during these hours.',
      impact: 'medium',
      confidence: 78,
      action: 'Implement dynamic pricing strategy'
    },
    {
      id: '3',
      type: 'warning',
      title: 'Customer Satisfaction Dip',
      description: 'Recent reviews show a 15% decrease in satisfaction scores. Focus on service quality improvements.',
      impact: 'high',
      confidence: 85,
      action: 'Review service protocols'
    },
    {
      id: '4',
      type: 'alert',
      title: 'Resource Utilization',
      description: 'Parking lot utilization is at 95% during weekends. Consider expanding capacity.',
      impact: 'medium',
      confidence: 91,
      action: 'Plan capacity expansion'
    }
  ]);

  // Mock predictions
  const [predictions] = useState<Prediction[]>([
    {
      metric: 'Revenue',
      currentValue: 125000,
      predictedValue: 142000,
      change: 13.6,
      timeframe: 'Next 30 days',
      confidence: 89
    },
    {
      metric: 'Bookings',
      currentValue: 450,
      predictedValue: 520,
      change: 15.6,
      timeframe: 'Next 30 days',
      confidence: 92
    },
    {
      metric: 'Customer Satisfaction',
      currentValue: 4.2,
      predictedValue: 4.5,
      change: 7.1,
      timeframe: 'Next 30 days',
      confidence: 76
    }
  ]);

  const getInsightIcon = (type: Insight['type']) => {
    switch (type) {
      case 'positive': return <TrendingUp className="w-5 h-5 text-green-500" />;
      case 'warning': return <AlertTriangle className="w-5 h-5 text-yellow-500" />;
      case 'opportunity': return <Lightbulb className="w-5 h-5 text-blue-500" />;
      case 'alert': return <AlertTriangle className="w-5 h-5 text-red-500" />;
    }
  };

  const getImpactColor = (impact: Insight['impact']) => {
    switch (impact) {
      case 'high': return 'bg-red-100 text-red-800 border-red-200';
      case 'medium': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'low': return 'bg-green-100 text-green-800 border-green-200';
    }
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
            <Brain className="w-6 h-6 text-gold-600" />
            Advanced Analytics
          </h2>
          <p className="text-gray-600">AI-powered insights and predictive analytics</p>
        </div>
        <div className="flex items-center space-x-4">
          <Select value={timeRange} onValueChange={setTimeRange}>
            <SelectTrigger className="w-32">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="7d">Last 7 days</SelectItem>
              <SelectItem value="30d">Last 30 days</SelectItem>
              <SelectItem value="90d">Last 90 days</SelectItem>
              <SelectItem value="1y">Last year</SelectItem>
            </SelectContent>
          </Select>
          <Button
            variant={showPredictions ? "default" : "outline"}
            onClick={() => setShowPredictions(!showPredictions)}
            className="flex items-center gap-2"
          >
            <Zap className="w-4 h-4" />
            {showPredictions ? 'Hide' : 'Show'} Predictions
          </Button>
        </div>
      </div>

      {/* AI Insights Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {insights.map((insight) => (
          <Card key={insight.id} className="hover:shadow-lg transition-shadow">
            <CardHeader className="pb-3">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  {getInsightIcon(insight.type)}
                  <div>
                    <CardTitle className="text-lg">{insight.title}</CardTitle>
                    <Badge className={`mt-1 ${getImpactColor(insight.impact)}`}>
                      {insight.impact} impact
                    </Badge>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-sm text-gray-500">Confidence</div>
                  <div className="text-lg font-bold text-gray-900">{insight.confidence}%</div>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">{insight.description}</p>
              {insight.action && (
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div className="flex items-center gap-2">
                    <Target className="w-4 h-4 text-gold-600" />
                    <span className="text-sm font-medium text-gray-900">Recommended Action:</span>
                  </div>
                  <Button variant="ghost" size="sm" className="text-gold-600 hover:text-gold-700">
                    {insight.action}
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Predictions Section */}
      {showPredictions && (
        <Card className="border-2 border-gold-200 bg-gradient-to-r from-gold-50 to-white">
          <CardHeader>
            <div className="flex items-center gap-2">
              <Zap className="w-5 h-5 text-gold-600" />
              <CardTitle>AI Predictions</CardTitle>
              <Badge className="bg-gold-100 text-gold-800 border-gold-200">
                Machine Learning
              </Badge>
            </div>
            <CardDescription>
              Predictive analytics based on historical data and current trends
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {predictions.map((prediction, index) => (
                <div key={index} className="p-4 bg-white rounded-lg border border-gray-200">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="font-semibold text-gray-900">{prediction.metric}</h4>
                    <div className={`flex items-center gap-1 text-sm ${
                      prediction.change > 0 ? 'text-green-600' : 'text-red-600'
                    }`}>
                      {prediction.change > 0 ? (
                        <ArrowUpRight className="w-4 h-4" />
                      ) : (
                        <ArrowDownRight className="w-4 h-4" />
                      )}
                      {Math.abs(prediction.change)}%
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Current:</span>
                      <span className="font-medium">
                        {prediction.metric === 'Revenue' 
                          ? formatCurrency(prediction.currentValue)
                          : prediction.metric === 'Customer Satisfaction'
                          ? prediction.currentValue.toFixed(1)
                          : prediction.currentValue.toLocaleString()
                        }
                      </span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Predicted:</span>
                      <span className="font-medium text-gold-600">
                        {prediction.metric === 'Revenue' 
                          ? formatCurrency(prediction.predictedValue)
                          : prediction.metric === 'Customer Satisfaction'
                          ? prediction.predictedValue.toFixed(1)
                          : prediction.predictedValue.toLocaleString()
                        }
                      </span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Confidence:</span>
                      <span className="font-medium">{prediction.confidence}%</span>
                    </div>
                  </div>
                  
                  <div className="mt-3 pt-3 border-t border-gray-100">
                    <div className="text-xs text-gray-500">{prediction.timeframe}</div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      {/* Performance Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="bg-gradient-to-br from-green-50 to-green-100 border-green-200">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-green-600">Efficiency Score</p>
                <p className="text-2xl font-bold text-green-900">94.2%</p>
                <p className="text-xs text-green-700 mt-1">+2.1% from last month</p>
              </div>
              <div className="w-12 h-12 bg-green-200 rounded-full flex items-center justify-center">
                <CheckCircle className="w-6 h-6 text-green-600" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-blue-600">Response Time</p>
                <p className="text-2xl font-bold text-blue-900">2.3s</p>
                <p className="text-xs text-blue-700 mt-1">-0.5s improvement</p>
              </div>
              <div className="w-12 h-12 bg-blue-200 rounded-full flex items-center justify-center">
                <Clock className="w-6 h-6 text-blue-600" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-purple-50 to-purple-100 border-purple-200">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-purple-600">Uptime</p>
                <p className="text-2xl font-bold text-purple-900">99.9%</p>
                <p className="text-xs text-purple-700 mt-1">Last 30 days</p>
              </div>
              <div className="w-12 h-12 bg-purple-200 rounded-full flex items-center justify-center">
                <Activity className="w-6 h-6 text-purple-600" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-orange-50 to-orange-100 border-orange-200">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-orange-600">Growth Rate</p>
                <p className="text-2xl font-bold text-orange-900">+18.5%</p>
                <p className="text-xs text-orange-700 mt-1">Monthly average</p>
              </div>
              <div className="w-12 h-12 bg-orange-200 rounded-full flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-orange-600" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AdvancedAnalytics; 