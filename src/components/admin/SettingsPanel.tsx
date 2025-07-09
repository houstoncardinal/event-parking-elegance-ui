import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { 
  Settings, 
  Bell, 
  Palette, 
  Monitor, 
  Smartphone,
  Save,
  RotateCcw,
  Eye,
  EyeOff,
  Shield,
  User,
  Globe,
  Clock,
  Zap,
  CheckCircle,
  AlertCircle
} from "lucide-react";

const SettingsPanel = () => {
  type SettingsType = {
    theme: string;
    notifications: {
      email: boolean;
      push: boolean;
      sms: boolean;
      sound: boolean;
    };
    dashboard: {
      autoRefresh: boolean;
      refreshInterval: string;
      showQuickActions: boolean;
      showRecentActivity: boolean;
      compactMode: boolean;
    };
    privacy: {
      showOnlineStatus: boolean;
      allowAnalytics: boolean;
      dataRetention: string;
    };
    accessibility: {
      highContrast: boolean;
      largeText: boolean;
      reduceMotion: boolean;
    };
  };

  const [settings, setSettings] = useState<SettingsType>({
    theme: 'light',
    notifications: {
      email: true,
      push: true,
      sms: false,
      sound: true
    },
    dashboard: {
      autoRefresh: true,
      refreshInterval: '5m',
      showQuickActions: true,
      showRecentActivity: true,
      compactMode: false
    },
    privacy: {
      showOnlineStatus: true,
      allowAnalytics: true,
      dataRetention: '1y'
    },
    accessibility: {
      highContrast: false,
      largeText: false,
      reduceMotion: false
    }
  });

  const [isSaving, setIsSaving] = useState(false);
  const [lastSaved, setLastSaved] = useState<Date | null>(null);

  const handleSave = async () => {
    setIsSaving(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    setLastSaved(new Date());
    setIsSaving(false);
  };

  const handleReset = () => {
    setSettings({
      theme: 'light',
      notifications: {
        email: true,
        push: true,
        sms: false,
        sound: true
      },
      dashboard: {
        autoRefresh: true,
        refreshInterval: '5m',
        showQuickActions: true,
        showRecentActivity: true,
        compactMode: false
      },
      privacy: {
        showOnlineStatus: true,
        allowAnalytics: true,
        dataRetention: '1y'
      },
      accessibility: {
        highContrast: false,
        largeText: false,
        reduceMotion: false
      }
    });
  };

  const updateSetting = (category: keyof Omit<SettingsType, 'theme'>, key: string, value: any) => {
    setSettings(prev => ({
      ...prev,
      [category]: {
        ...prev[category],
        [key]: value
      }
    }));
  };

  const updateTheme = (value: string) => {
    setSettings(prev => ({ ...prev, theme: value }));
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
            <Settings className="w-6 h-6 text-gold-600" />
            Settings
          </h2>
          <p className="text-gray-600">Customize your dashboard experience</p>
        </div>
        <div className="flex items-center space-x-3">
          {lastSaved && (
            <div className="flex items-center space-x-2 text-sm text-green-600">
              <CheckCircle className="w-4 h-4" />
              <span>Saved {lastSaved.toLocaleTimeString()}</span>
            </div>
          )}
          <Button
            variant="outline"
            onClick={handleReset}
            className="flex items-center gap-2"
          >
            <RotateCcw className="w-4 h-4" />
            Reset
          </Button>
          <Button
            onClick={handleSave}
            disabled={isSaving}
            className="flex items-center gap-2 bg-gold-600 hover:bg-gold-700"
          >
            <Save className="w-4 h-4" />
            {isSaving ? 'Saving...' : 'Save Changes'}
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Appearance */}
        <Card className="border-gray-200">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Palette className="w-5 h-5 text-gold-600" />
              Appearance
            </CardTitle>
            <CardDescription>
              Customize the look and feel of your dashboard
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="theme">Theme</Label>
              <Select 
                value={settings.theme} 
                onValueChange={(value) => updateTheme(value)}
              >
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="light">Light</SelectItem>
                  <SelectItem value="dark">Dark</SelectItem>
                  <SelectItem value="auto">Auto (System)</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label>High Contrast</Label>
                <p className="text-sm text-gray-500">Enhanced visibility for better readability</p>
              </div>
              <Switch
                checked={settings.accessibility.highContrast}
                onCheckedChange={(checked) => updateSetting('accessibility', 'highContrast', checked)}
              />
            </div>

            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label>Large Text</Label>
                <p className="text-sm text-gray-500">Increase text size for better readability</p>
              </div>
              <Switch
                checked={settings.accessibility.largeText}
                onCheckedChange={(checked) => updateSetting('accessibility', 'largeText', checked)}
              />
            </div>

            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label>Reduce Motion</Label>
                <p className="text-sm text-gray-500">Minimize animations and transitions</p>
              </div>
              <Switch
                checked={settings.accessibility.reduceMotion}
                onCheckedChange={(checked) => updateSetting('accessibility', 'reduceMotion', checked)}
              />
            </div>
          </CardContent>
        </Card>

        {/* Notifications */}
        <Card className="border-gray-200">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Bell className="w-5 h-5 text-gold-600" />
              Notifications
            </CardTitle>
            <CardDescription>
              Manage how you receive notifications
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label>Email Notifications</Label>
                <p className="text-sm text-gray-500">Receive updates via email</p>
              </div>
              <Switch
                checked={settings.notifications.email}
                onCheckedChange={(checked) => updateSetting('notifications', 'email', checked)}
              />
            </div>

            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label>Push Notifications</Label>
                <p className="text-sm text-gray-500">Browser push notifications</p>
              </div>
              <Switch
                checked={settings.notifications.push}
                onCheckedChange={(checked) => updateSetting('notifications', 'push', checked)}
              />
            </div>

            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label>SMS Notifications</Label>
                <p className="text-sm text-gray-500">Text message alerts</p>
              </div>
              <Switch
                checked={settings.notifications.sms}
                onCheckedChange={(checked) => updateSetting('notifications', 'sms', checked)}
              />
            </div>

            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label>Sound Alerts</Label>
                <p className="text-sm text-gray-500">Play sounds for notifications</p>
              </div>
              <Switch
                checked={settings.notifications.sound}
                onCheckedChange={(checked) => updateSetting('notifications', 'sound', checked)}
              />
            </div>
          </CardContent>
        </Card>

        {/* Dashboard */}
        <Card className="border-gray-200">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Monitor className="w-5 h-5 text-gold-600" />
              Dashboard
            </CardTitle>
            <CardDescription>
              Configure your dashboard behavior
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label>Auto Refresh</Label>
                <p className="text-sm text-gray-500">Automatically update data</p>
              </div>
              <Switch
                checked={settings.dashboard.autoRefresh}
                onCheckedChange={(checked) => updateSetting('dashboard', 'autoRefresh', checked)}
              />
            </div>

            {settings.dashboard.autoRefresh && (
              <div className="space-y-2">
                <Label htmlFor="refreshInterval">Refresh Interval</Label>
                <Select 
                  value={settings.dashboard.refreshInterval} 
                  onValueChange={(value) => updateSetting('dashboard', 'refreshInterval', value)}
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1m">1 minute</SelectItem>
                    <SelectItem value="5m">5 minutes</SelectItem>
                    <SelectItem value="15m">15 minutes</SelectItem>
                    <SelectItem value="30m">30 minutes</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            )}

            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label>Quick Actions</Label>
                <p className="text-sm text-gray-500">Show quick action buttons</p>
              </div>
              <Switch
                checked={settings.dashboard.showQuickActions}
                onCheckedChange={(checked) => updateSetting('dashboard', 'showQuickActions', checked)}
              />
            </div>

            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label>Recent Activity</Label>
                <p className="text-sm text-gray-500">Display recent activity feed</p>
              </div>
              <Switch
                checked={settings.dashboard.showRecentActivity}
                onCheckedChange={(checked) => updateSetting('dashboard', 'showRecentActivity', checked)}
              />
            </div>

            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label>Compact Mode</Label>
                <p className="text-sm text-gray-500">Reduce spacing for more content</p>
              </div>
              <Switch
                checked={settings.dashboard.compactMode}
                onCheckedChange={(checked) => updateSetting('dashboard', 'compactMode', checked)}
              />
            </div>
          </CardContent>
        </Card>

        {/* Privacy & Security */}
        <Card className="border-gray-200">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-gold-600" />
              Privacy & Security
            </CardTitle>
            <CardDescription>
              Manage your privacy and security settings
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label>Online Status</Label>
                <p className="text-sm text-gray-500">Show when you're online</p>
              </div>
              <Switch
                checked={settings.privacy.showOnlineStatus}
                onCheckedChange={(checked) => updateSetting('privacy', 'showOnlineStatus', checked)}
              />
            </div>

            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label>Analytics</Label>
                <p className="text-sm text-gray-500">Allow usage analytics collection</p>
              </div>
              <Switch
                checked={settings.privacy.allowAnalytics}
                onCheckedChange={(checked) => updateSetting('privacy', 'allowAnalytics', checked)}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="dataRetention">Data Retention</Label>
              <Select 
                value={settings.privacy.dataRetention} 
                onValueChange={(value) => updateSetting('privacy', 'dataRetention', value)}
              >
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="30d">30 days</SelectItem>
                  <SelectItem value="90d">90 days</SelectItem>
                  <SelectItem value="6m">6 months</SelectItem>
                  <SelectItem value="1y">1 year</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Advanced Settings */}
      <Card className="border-gray-200">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Zap className="w-5 h-5 text-gold-600" />
            Advanced Settings
          </CardTitle>
          <CardDescription>
            Advanced configuration options for power users
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h4 className="font-medium text-gray-900">Performance</h4>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <Label className="text-sm">Enable Caching</Label>
                  <Switch defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <Label className="text-sm">Lazy Loading</Label>
                  <Switch defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <Label className="text-sm">Image Optimization</Label>
                  <Switch defaultChecked />
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-medium text-gray-900">Developer Options</h4>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <Label className="text-sm">Debug Mode</Label>
                  <Switch />
                </div>
                <div className="flex items-center justify-between">
                  <Label className="text-sm">Performance Monitoring</Label>
                  <Switch defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <Label className="text-sm">Error Reporting</Label>
                  <Switch defaultChecked />
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SettingsPanel; 