import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Calendar, 
  Briefcase, 
  DollarSign,
  User,
  Shield,
  Clock,
  Award,
  AlertCircle
} from "lucide-react";

interface TeamMember {
  id: string;
  employee_id: string;
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  position: string;
  department: string;
  employment_status: string;
  employment_type: string;
  hire_date: string;
  termination_date?: string;
  salary?: number;
  hourly_rate?: number;
  location: string;
  skills: string[];
  certifications: string[];
  emergency_contact_name?: string;
  emergency_contact_phone?: string;
  address?: string;
  date_of_birth?: string;
  notes?: string;
  created_at: string;
}

interface TeamDetailsDialogProps {
  isOpen: boolean;
  onClose: () => void;
  member: TeamMember | null;
}

const TeamDetailsDialog = ({ isOpen, onClose, member }: TeamDetailsDialogProps) => {
  if (!member) return null;

  const getStatusBadge = (status: string) => {
    const statusConfig = {
      active: { color: "bg-green-100 text-green-800 border-green-200", label: "Active" },
      inactive: { color: "bg-gray-100 text-gray-800 border-gray-200", label: "Inactive" },
      on_leave: { color: "bg-yellow-100 text-yellow-800 border-yellow-200", label: "On Leave" },
      terminated: { color: "bg-red-100 text-red-800 border-red-200", label: "Terminated" }
    };

    const config = statusConfig[status as keyof typeof statusConfig] || statusConfig.active;
    return <Badge className={config.color}>{config.label}</Badge>;
  };

  const getEmploymentTypeBadge = (type: string) => {
    const typeConfig = {
      full_time: { color: "bg-blue-100 text-blue-800 border-blue-200", label: "Full Time" },
      part_time: { color: "bg-purple-100 text-purple-800 border-purple-200", label: "Part Time" },
      contractor: { color: "bg-orange-100 text-orange-800 border-orange-200", label: "Contractor" },
      intern: { color: "bg-pink-100 text-pink-800 border-pink-200", label: "Intern" }
    };

    const config = typeConfig[type as keyof typeof typeConfig] || typeConfig.full_time;
    return <Badge className={config.color}>{config.label}</Badge>;
  };

  const formatDate = (dateString: string) => {
    if (!dateString) return 'Not specified';
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(amount);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto bg-dark border-vip/20">
        <DialogHeader>
          <DialogTitle className="text-vip-glow font-orbitron text-2xl">
            {member.first_name} {member.last_name}
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          {/* Header Section */}
          <div className="bg-white/5 p-4 rounded-lg border border-vip/20">
            <div className="flex flex-col sm:flex-row justify-between items-start gap-4">
              <div>
                <h3 className="text-xl font-semibold text-vip mb-2">{member.position}</h3>
                <p className="text-vip/70">{member.department}</p>
                <p className="text-sm text-vip/60 mt-1">Employee ID: {member.employee_id}</p>
              </div>
              <div className="flex gap-2">
                {getStatusBadge(member.employment_status)}
                {getEmploymentTypeBadge(member.employment_type)}
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white/5 p-4 rounded-lg border border-vip/20">
              <h4 className="text-lg font-semibold text-vip mb-4 flex items-center">
                <User className="w-5 h-5 mr-2" />
                Contact Information
              </h4>
              <div className="space-y-3">
                <div className="flex items-center text-vip/80">
                  <Mail className="w-4 h-4 mr-3" />
                  <span>{member.email || 'Not provided'}</span>
                </div>
                <div className="flex items-center text-vip/80">
                  <Phone className="w-4 h-4 mr-3" />
                  <span>{member.phone || 'Not provided'}</span>
                </div>
                <div className="flex items-center text-vip/80">
                  <MapPin className="w-4 h-4 mr-3" />
                  <span>{member.location || 'Not specified'}</span>
                </div>
                {member.address && (
                  <div className="flex items-start text-vip/80">
                    <MapPin className="w-4 h-4 mr-3 mt-0.5" />
                    <span>{member.address}</span>
                  </div>
                )}
              </div>
            </div>

            {/* Employment Details */}
            <div className="bg-white/5 p-4 rounded-lg border border-vip/20">
              <h4 className="text-lg font-semibold text-vip mb-4 flex items-center">
                <Briefcase className="w-5 h-5 mr-2" />
                Employment Details
              </h4>
              <div className="space-y-3">
                <div className="flex items-center text-vip/80">
                  <Calendar className="w-4 h-4 mr-3" />
                  <span>Hired: {formatDate(member.hire_date)}</span>
                </div>
                {member.date_of_birth && (
                  <div className="flex items-center text-vip/80">
                    <Calendar className="w-4 h-4 mr-3" />
                    <span>DOB: {formatDate(member.date_of_birth)}</span>
                  </div>
                )}
                {member.salary && (
                  <div className="flex items-center text-vip/80">
                    <DollarSign className="w-4 h-4 mr-3" />
                    <span>Salary: {formatCurrency(member.salary)}</span>
                  </div>
                )}
                {member.hourly_rate && (
                  <div className="flex items-center text-vip/80">
                    <Clock className="w-4 h-4 mr-3" />
                    <span>Hourly Rate: {formatCurrency(member.hourly_rate)}</span>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Skills and Certifications */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {member.skills && member.skills.length > 0 && (
              <div className="bg-white/5 p-4 rounded-lg border border-vip/20">
                <h4 className="text-lg font-semibold text-vip mb-4 flex items-center">
                  <Award className="w-5 h-5 mr-2" />
                  Skills
                </h4>
                <div className="flex flex-wrap gap-2">
                  {member.skills.map((skill, index) => (
                    <Badge key={index} className="bg-blue-100 text-blue-800 border-blue-200">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            )}

            {member.certifications && member.certifications.length > 0 && (
              <div className="bg-white/5 p-4 rounded-lg border border-vip/20">
                <h4 className="text-lg font-semibold text-vip mb-4 flex items-center">
                  <Shield className="w-5 h-5 mr-2" />
                  Certifications
                </h4>
                <div className="flex flex-wrap gap-2">
                  {member.certifications.map((cert, index) => (
                    <Badge key={index} className="bg-green-100 text-green-800 border-green-200">
                      {cert}
                    </Badge>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Emergency Contact */}
          {(member.emergency_contact_name || member.emergency_contact_phone) && (
            <div className="bg-white/5 p-4 rounded-lg border border-vip/20">
              <h4 className="text-lg font-semibold text-vip mb-4 flex items-center">
                <AlertCircle className="w-5 h-5 mr-2" />
                Emergency Contact
              </h4>
              <div className="space-y-2">
                {member.emergency_contact_name && (
                  <p className="text-vip/80">
                    <span className="font-medium">Name:</span> {member.emergency_contact_name}
                  </p>
                )}
                {member.emergency_contact_phone && (
                  <p className="text-vip/80">
                    <span className="font-medium">Phone:</span> {member.emergency_contact_phone}
                  </p>
                )}
              </div>
            </div>
          )}

          {/* Notes */}
          {member.notes && (
            <div className="bg-white/5 p-4 rounded-lg border border-vip/20">
              <h4 className="text-lg font-semibold text-vip mb-4">Notes</h4>
              <p className="text-vip/80 whitespace-pre-wrap">{member.notes}</p>
            </div>
          )}

          {/* Footer */}
          <div className="flex justify-between items-center pt-4 border-t border-vip/20">
            <p className="text-sm text-vip/60">
              Added on {formatDate(member.created_at)}
            </p>
            <Button
              onClick={onClose}
              className="bg-gradient-to-r from-gold-400 to-gold-600 text-black font-medium hover:from-gold-500 hover:to-gold-700"
            >
              Close
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default TeamDetailsDialog;