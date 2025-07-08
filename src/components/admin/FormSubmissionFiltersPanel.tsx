import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Filter, X, Search, Calendar, Tag } from 'lucide-react';
import { FormSubmissionFilters } from '@/hooks/useFormSubmissions';

interface FormSubmissionFiltersPanelProps {
  filters: FormSubmissionFilters;
  onApplyFilters: (filters: FormSubmissionFilters) => void;
  onClearFilters: () => void;
}

const FormSubmissionFiltersPanel = ({ 
  filters, 
  onApplyFilters, 
  onClearFilters 
}: FormSubmissionFiltersPanelProps) => {
  const [localFilters, setLocalFilters] = useState<FormSubmissionFilters>(filters);

  const handleApply = () => {
    onApplyFilters(localFilters);
  };

  const handleClear = () => {
    setLocalFilters({});
    onClearFilters();
  };

  const handleFilterChange = (key: keyof FormSubmissionFilters, value: string) => {
    setLocalFilters(prev => ({
      ...prev,
      [key]: value || undefined
    }));
  };

  const hasActiveFilters = Object.values(filters).some(value => value !== undefined && value !== '');

  return (
    <Card className="border-gold-200 bg-gold-50/50">
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <Filter className="w-5 h-5 text-gold-600" />
          <span>Filters</span>
          {hasActiveFilters && (
            <Badge variant="secondary" className="bg-gold-200 text-gold-800">
              Active
            </Badge>
          )}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Search */}
          <div>
            <label className="text-sm font-medium text-gray-700 mb-2 block">Search</label>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
              <Input
                placeholder="Name, email, location..."
                value={localFilters.search || ''}
                onChange={(e) => handleFilterChange('search', e.target.value)}
                className="pl-10"
              />
            </div>
          </div>

          {/* Form Type */}
          <div>
            <label className="text-sm font-medium text-gray-700 mb-2 block">Form Type</label>
            <Select
              value={localFilters.form_type || ''}
              onValueChange={(value) => handleFilterChange('form_type', value)}
            >
              <SelectTrigger>
                <SelectValue placeholder="All types" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="">All types</SelectItem>
                <SelectItem value="booking">Booking</SelectItem>
                <SelectItem value="quote">Quote</SelectItem>
                <SelectItem value="contact">Contact</SelectItem>
                <SelectItem value="review">Review</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Status */}
          <div>
            <label className="text-sm font-medium text-gray-700 mb-2 block">Status</label>
            <Select
              value={localFilters.status || ''}
              onValueChange={(value) => handleFilterChange('status', value)}
            >
              <SelectTrigger>
                <SelectValue placeholder="All statuses" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="">All statuses</SelectItem>
                <SelectItem value="new">New</SelectItem>
                <SelectItem value="reviewed">Reviewed</SelectItem>
                <SelectItem value="contacted">Contacted</SelectItem>
                <SelectItem value="booked">Booked</SelectItem>
                <SelectItem value="rejected">Rejected</SelectItem>
                <SelectItem value="archived">Archived</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Priority */}
          <div>
            <label className="text-sm font-medium text-gray-700 mb-2 block">Priority</label>
            <Select
              value={localFilters.priority || ''}
              onValueChange={(value) => handleFilterChange('priority', value)}
            >
              <SelectTrigger>
                <SelectValue placeholder="All priorities" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="">All priorities</SelectItem>
                <SelectItem value="low">Low</SelectItem>
                <SelectItem value="normal">Normal</SelectItem>
                <SelectItem value="high">High</SelectItem>
                <SelectItem value="urgent">Urgent</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Date From */}
          <div>
            <label className="text-sm font-medium text-gray-700 mb-2 block flex items-center space-x-1">
              <Calendar className="w-4 h-4" />
              <span>Date From</span>
            </label>
            <Input
              type="date"
              value={localFilters.date_from || ''}
              onChange={(e) => handleFilterChange('date_from', e.target.value)}
            />
          </div>

          {/* Date To */}
          <div>
            <label className="text-sm font-medium text-gray-700 mb-2 block flex items-center space-x-1">
              <Calendar className="w-4 h-4" />
              <span>Date To</span>
            </label>
            <Input
              type="date"
              value={localFilters.date_to || ''}
              onChange={(e) => handleFilterChange('date_to', e.target.value)}
            />
          </div>
        </div>

        {/* Active Filters Display */}
        {hasActiveFilters && (
          <div className="mt-4 pt-4 border-t border-gray-200">
            <div className="flex items-center space-x-2 mb-3">
              <Tag className="w-4 h-4 text-gray-500" />
              <span className="text-sm font-medium text-gray-700">Active Filters:</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {filters.form_type && (
                <Badge variant="secondary" className="bg-blue-100 text-blue-800">
                  Type: {filters.form_type}
                  <button
                    onClick={() => handleFilterChange('form_type', '')}
                    className="ml-1 hover:text-blue-600"
                  >
                    <X className="w-3 h-3" />
                  </button>
                </Badge>
              )}
              {filters.status && (
                <Badge variant="secondary" className="bg-green-100 text-green-800">
                  Status: {filters.status}
                  <button
                    onClick={() => handleFilterChange('status', '')}
                    className="ml-1 hover:text-green-600"
                  >
                    <X className="w-3 h-3" />
                  </button>
                </Badge>
              )}
              {filters.priority && (
                <Badge variant="secondary" className="bg-orange-100 text-orange-800">
                  Priority: {filters.priority}
                  <button
                    onClick={() => handleFilterChange('priority', '')}
                    className="ml-1 hover:text-orange-600"
                  >
                    <X className="w-3 h-3" />
                  </button>
                </Badge>
              )}
              {filters.search && (
                <Badge variant="secondary" className="bg-purple-100 text-purple-800">
                  Search: {filters.search}
                  <button
                    onClick={() => handleFilterChange('search', '')}
                    className="ml-1 hover:text-purple-600"
                  >
                    <X className="w-3 h-3" />
                  </button>
                </Badge>
              )}
              {filters.date_from && (
                <Badge variant="secondary" className="bg-gray-100 text-gray-800">
                  From: {filters.date_from}
                  <button
                    onClick={() => handleFilterChange('date_from', '')}
                    className="ml-1 hover:text-gray-600"
                  >
                    <X className="w-3 h-3" />
                  </button>
                </Badge>
              )}
              {filters.date_to && (
                <Badge variant="secondary" className="bg-gray-100 text-gray-800">
                  To: {filters.date_to}
                  <button
                    onClick={() => handleFilterChange('date_to', '')}
                    className="ml-1 hover:text-gray-600"
                  >
                    <X className="w-3 h-3" />
                  </button>
                </Badge>
              )}
            </div>
          </div>
        )}

        {/* Action Buttons */}
        <div className="flex items-center justify-between mt-6 pt-4 border-t border-gray-200">
          <div className="flex items-center space-x-2">
            <Button onClick={handleApply} className="bg-gold-600 hover:bg-gold-700">
              Apply Filters
            </Button>
            {hasActiveFilters && (
              <Button variant="outline" onClick={handleClear}>
                Clear All
              </Button>
            )}
          </div>
          <div className="text-sm text-gray-500">
            {hasActiveFilters ? 'Filters applied' : 'No filters applied'}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default FormSubmissionFiltersPanel; 