import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  Shield, 
  User, 
  Mail, 
  Phone, 
  Car,
  Calendar,
  Clock,
  AlertTriangle,
  MapPin,
  FileText,
  DollarSign,
  Eye,
  CheckCircle,
  XCircle
} from 'lucide-react';
import { useInsuranceClaims } from '@/hooks/useContactData';

const InsuranceClaimsManagement = () => {
  const { data: claims, isLoading, error } = useInsuranceClaims();

  const getStatusColor = (status: string) => {
    const colors = {
      new: 'bg-blue-100 text-blue-800',
      under_review: 'bg-yellow-100 text-yellow-800',
      investigating: 'bg-orange-100 text-orange-800',
      approved: 'bg-green-100 text-green-800',
      denied: 'bg-red-100 text-red-800',
      closed: 'bg-gray-100 text-gray-600'
    };
    return colors[status as keyof typeof colors] || 'bg-gray-100 text-gray-600';
  };

  const getIncidentTypeColor = (type: string) => {
    const colors = {
      vehicle_damage: 'bg-red-100 text-red-800',
      vehicle_theft: 'bg-purple-100 text-purple-800',
      personal_property: 'bg-blue-100 text-blue-800',
      personal_injury: 'bg-orange-100 text-orange-800',
      service_issue: 'bg-yellow-100 text-yellow-800',
      other: 'bg-gray-100 text-gray-800'
    };
    return colors[type as keyof typeof colors] || 'bg-gray-100 text-gray-600';
  };

  const getUrgencyIcon = (urgency: string) => {
    if (urgency === 'emergency') return <AlertTriangle className="w-4 h-4 text-red-600" />;
    if (urgency === 'high') return <AlertTriangle className="w-4 h-4 text-orange-600" />;
    return <Shield className="w-4 h-4 text-blue-600" />;
  };

  if (isLoading) {
    return <div className="p-6">Loading insurance claims...</div>;
  }

  if (error) {
    return <div className="p-6 text-red-600">Error loading insurance claims</div>;
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-900">Insurance Claims</h2>
        <Badge variant="outline" className="text-sm">
          {claims?.length || 0} Total Claims
        </Badge>
      </div>

      {claims && claims.length > 0 ? (
        <div className="grid gap-6">
          {claims.map((claim: any) => (
            <Card key={claim.id} className="hover:shadow-md transition-shadow">
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between">
                  <div className="space-y-2">
                    <div className="flex items-center gap-3">
                      <CardTitle className="text-lg">
                        Claim #{claim.claim_number}
                      </CardTitle>
                      {getUrgencyIcon(claim.urgency_level)}
                    </div>
                    <div className="flex flex-wrap gap-2">
                      <Badge className={getStatusColor(claim.status)}>
                        {claim.status.replace('_', ' ').toUpperCase()}
                      </Badge>
                      <Badge className={getIncidentTypeColor(claim.incident_type)}>
                        {claim.incident_type.replace('_', ' ').toUpperCase()}
                      </Badge>
                      {claim.urgency_level !== 'normal' && (
                        <Badge variant="outline" className={
                          claim.urgency_level === 'emergency' ? 'text-red-600 border-red-600' :
                          claim.urgency_level === 'high' ? 'text-orange-600 border-orange-600' :
                          'text-blue-600 border-blue-600'
                        }>
                          {claim.urgency_level.toUpperCase()}
                        </Badge>
                      )}
                    </div>
                  </div>
                  <div className="text-right text-sm text-gray-500">
                    <div className="flex items-center gap-1 mb-1">
                      <Calendar className="w-4 h-4" />
                      {new Date(claim.created_at).toLocaleDateString()}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {new Date(claim.created_at).toLocaleTimeString()}
                    </div>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  {/* Claimant Information */}
                  <div className="space-y-3">
                    <h4 className="font-semibold text-gray-900 flex items-center gap-2">
                      <User className="w-4 h-4" />
                      Claimant Information
                    </h4>
                    <div className="space-y-2 text-sm">
                      <div className="font-medium">
                        {claim.first_name} {claim.last_name}
                      </div>
                      <div className="flex items-center gap-2">
                        <Mail className="w-4 h-4 text-gray-400" />
                        <a href={`mailto:${claim.email}`} className="text-blue-600 hover:underline">
                          {claim.email}
                        </a>
                      </div>
                      <div className="flex items-center gap-2">
                        <Phone className="w-4 h-4 text-gray-400" />
                        <a href={`tel:${claim.phone}`} className="text-blue-600 hover:underline">
                          {claim.phone}
                        </a>
                      </div>
                      {claim.address && (
                        <div className="flex items-start gap-2">
                          <MapPin className="w-4 h-4 text-gray-400 mt-0.5" />
                          <span>{claim.address}</span>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Vehicle Information */}
                  {(claim.vehicle_make || claim.vehicle_model) && (
                    <div className="space-y-3">
                      <h4 className="font-semibold text-gray-900 flex items-center gap-2">
                        <Car className="w-4 h-4" />
                        Vehicle Information
                      </h4>
                      <div className="space-y-2 text-sm">
                        <div className="font-medium">
                          {claim.vehicle_year} {claim.vehicle_make} {claim.vehicle_model}
                        </div>
                        {claim.vehicle_color && (
                          <div>Color: {claim.vehicle_color}</div>
                        )}
                        {claim.vehicle_license && (
                          <div>License: {claim.vehicle_license}</div>
                        )}
                        {claim.vehicle_vin && (
                          <div className="text-xs text-gray-600 break-all">
                            VIN: {claim.vehicle_vin}
                          </div>
                        )}
                      </div>
                    </div>
                  )}
                </div>

                {/* Incident Details */}
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                    <AlertTriangle className="w-4 h-4" />
                    Incident Details
                  </h4>
                  <div className="grid md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <span className="text-gray-600">Date:</span>
                      <span className="ml-2 font-medium">
                        {new Date(claim.incident_date).toLocaleDateString()}
                        {claim.incident_time && ` at ${claim.incident_time}`}
                      </span>
                    </div>
                    <div>
                      <span className="text-gray-600">Location:</span>
                      <span className="ml-2 font-medium">{claim.event_location}</span>
                    </div>
                    {claim.event_name && (
                      <div>
                        <span className="text-gray-600">Event:</span>
                        <span className="ml-2 font-medium">{claim.event_name}</span>
                      </div>
                    )}
                    {claim.estimated_value && (
                      <div className="flex items-center gap-1">
                        <DollarSign className="w-4 h-4 text-gray-400" />
                        <span className="text-gray-600">Estimated Value:</span>
                        <span className="ml-2 font-medium">${claim.estimated_value}</span>
                      </div>
                    )}
                  </div>
                  <div className="space-y-3">
                    <div>
                      <span className="text-gray-600 font-medium">Damage Description:</span>
                      <p className="mt-1 text-gray-800">{claim.damage_description}</p>
                    </div>
                    <div>
                      <span className="text-gray-600 font-medium">Circumstances:</span>
                      <p className="mt-1 text-gray-800">{claim.circumstances}</p>
                    </div>
                  </div>
                </div>

                {/* Insurance Information */}
                {claim.has_insurance === 'yes' && (
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                    <h4 className="font-semibold text-blue-900 mb-2 flex items-center gap-2">
                      <Shield className="w-4 h-4" />
                      Insurance Information
                    </h4>
                    <div className="grid md:grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="text-blue-700">Company:</span>
                        <span className="ml-2 font-medium">{claim.insurance_company}</span>
                      </div>
                      <div>
                        <span className="text-blue-700">Policy #:</span>
                        <span className="ml-2 font-medium">{claim.insurance_policy_number}</span>
                      </div>
                      <div className="md:col-span-2">
                        <span className="text-blue-700">Claim Filed:</span>
                        <span className="ml-2 font-medium">
                          {claim.insurance_claim_filed === 'yes' ? 'Yes' : 
                           claim.insurance_claim_filed === 'no' ? 'No' : 'Planning to file'}
                        </span>
                      </div>
                    </div>
                  </div>
                )}

                {/* Witness Information */}
                {claim.witness_name && (
                  <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                    <h4 className="font-semibold text-yellow-900 mb-2 flex items-center gap-2">
                      <Eye className="w-4 h-4" />
                      Witness Information
                    </h4>
                    <div className="text-sm space-y-1">
                      <div>
                        <span className="text-yellow-700">Name:</span>
                        <span className="ml-2 font-medium">{claim.witness_name}</span>
                      </div>
                      {claim.witness_phone && (
                        <div>
                          <span className="text-yellow-700">Phone:</span>
                          <span className="ml-2 font-medium">{claim.witness_phone}</span>
                        </div>
                      )}
                      {claim.witness_email && (
                        <div>
                          <span className="text-yellow-700">Email:</span>
                          <span className="ml-2 font-medium">{claim.witness_email}</span>
                        </div>
                      )}
                    </div>
                  </div>
                )}

                {/* Police Report */}
                {claim.police_report && (
                  <div className="bg-indigo-50 border border-indigo-200 rounded-lg p-4">
                    <h4 className="font-semibold text-indigo-900 mb-2 flex items-center gap-2">
                      <FileText className="w-4 h-4" />
                      Police Report
                    </h4>
                    <div className="text-sm">
                      <span className="text-indigo-700">Report Number:</span>
                      <span className="ml-2 font-medium">{claim.police_report_number || 'Not provided'}</span>
                    </div>
                  </div>
                )}

                {/* Consent Indicators */}
                <div className="flex flex-wrap gap-4 text-sm">
                  <div className="flex items-center gap-2">
                    {claim.consent_to_investigate ? 
                      <CheckCircle className="w-4 h-4 text-green-600" /> : 
                      <XCircle className="w-4 h-4 text-red-600" />
                    }
                    <span>Investigation Consent</span>
                  </div>
                  <div className="flex items-center gap-2">
                    {claim.consent_to_contact ? 
                      <CheckCircle className="w-4 h-4 text-green-600" /> : 
                      <XCircle className="w-4 h-4 text-red-600" />
                    }
                    <span>Contact Consent</span>
                  </div>
                  <div className="flex items-center gap-2">
                    {claim.acknowledge_truth ? 
                      <CheckCircle className="w-4 h-4 text-green-600" /> : 
                      <XCircle className="w-4 h-4 text-red-600" />
                    }
                    <span>Truth Acknowledgment</span>
                  </div>
                </div>

                {claim.admin_notes && (
                  <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
                    <h4 className="font-semibold text-purple-900 mb-2">Admin Notes</h4>
                    <p className="text-purple-800 whitespace-pre-wrap">{claim.admin_notes}</p>
                  </div>
                )}

                <div className="flex justify-between items-center pt-4 border-t">
                  <div className="text-sm text-gray-500">
                    ID: {claim.id.slice(0, 8)}...
                    {claim.updated_at !== claim.created_at && (
                      <span className="ml-4">
                        Updated: {new Date(claim.updated_at).toLocaleDateString()}
                      </span>
                    )}
                  </div>
                  <div className="flex gap-2">
                    <Button size="sm" variant="outline">
                      View Full Details
                    </Button>
                    <Button size="sm">
                      Process Claim
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      ) : (
        <Card>
          <CardContent className="p-8 text-center">
            <Shield className="w-12 h-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">No Insurance Claims</h3>
            <p className="text-gray-600">No insurance claims have been filed yet.</p>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default InsuranceClaimsManagement;