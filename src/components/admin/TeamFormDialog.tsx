import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

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
}

interface TeamFormDialogProps {
  isOpen: boolean;
  onClose: () => void;
  member?: TeamMember | null;
}

const TeamFormDialog = ({ isOpen, onClose, member }: TeamFormDialogProps) => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    employee_id: '',
    first_name: '',
    last_name: '',
    email: '',
    phone: '',
    position: '',
    department: '',
    employment_status: 'active',
    employment_type: 'full_time',
    hire_date: '',
    termination_date: '',
    salary: '',
    hourly_rate: '',
    location: '',
    skills: '',
    certifications: '',
    emergency_contact_name: '',
    emergency_contact_phone: '',
    address: '',
    date_of_birth: '',
    notes: ''
  });

  useEffect(() => {
    if (member) {
      setFormData({
        employee_id: member.employee_id || '',
        first_name: member.first_name || '',
        last_name: member.last_name || '',
        email: member.email || '',
        phone: member.phone || '',
        position: member.position || '',
        department: member.department || '',
        employment_status: member.employment_status || 'active',
        employment_type: member.employment_type || 'full_time',
        hire_date: member.hire_date || '',
        termination_date: member.termination_date || '',
        salary: member.salary ? member.salary.toString() : '',
        hourly_rate: member.hourly_rate ? member.hourly_rate.toString() : '',
        location: member.location || '',
        skills: member.skills ? member.skills.join(', ') : '',
        certifications: member.certifications ? member.certifications.join(', ') : '',
        emergency_contact_name: member.emergency_contact_name || '',
        emergency_contact_phone: member.emergency_contact_phone || '',
        address: member.address || '',
        date_of_birth: member.date_of_birth || '',
        notes: member.notes || ''
      });
    } else {
      setFormData({
        employee_id: '',
        first_name: '',
        last_name: '',
        email: '',
        phone: '',
        position: '',
        department: '',
        employment_status: 'active',
        employment_type: 'full_time',
        hire_date: '',
        termination_date: '',
        salary: '',
        hourly_rate: '',
        location: '',
        skills: '',
        certifications: '',
        emergency_contact_name: '',
        emergency_contact_phone: '',
        address: '',
        date_of_birth: '',
        notes: ''
      });
    }
  }, [member, isOpen]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const submitData = {
        ...formData,
        salary: formData.salary ? parseFloat(formData.salary) : null,
        hourly_rate: formData.hourly_rate ? parseFloat(formData.hourly_rate) : null,
        skills: formData.skills ? formData.skills.split(',').map(s => s.trim()) : [],
        certifications: formData.certifications ? formData.certifications.split(',').map(c => c.trim()) : [],
        hire_date: formData.hire_date || null,
        termination_date: formData.termination_date || null,
        date_of_birth: formData.date_of_birth || null
      };

      if (member) {
        const { error } = await supabase
          .from('team_members' as any)
          .update(submitData)
          .eq('id', member.id);

        if (error) throw error;
        toast.success('Team member updated successfully');
      } else {
        const { error } = await supabase
          .from('team_members' as any)
          .insert(submitData);

        if (error) throw error;
        toast.success('Team member added successfully');
      }

      onClose();
    } catch (error) {
      console.error('Error saving team member:', error);
      toast.error('Failed to save team member');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto bg-white border border-gray-200">
        <DialogHeader>
          <DialogTitle className="text-gray-900 font-orbitron text-xl">
            {member ? 'Edit Team Member' : 'Add New Team Member'}
          </DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <Label htmlFor="employee_id" className="text-gray-700 font-medium">Employee ID</Label>
              <Input
                id="employee_id"
                value={formData.employee_id}
                onChange={(e) => setFormData({...formData, employee_id: e.target.value})}
                className="mt-1 bg-white border-gray-300 text-gray-900 focus:border-gold-400 focus:ring-gold-400"
                placeholder="EMP001"
              />
            </div>

            <div>
              <Label htmlFor="employment_status" className="text-gray-700 font-medium">Employment Status</Label>
              <select
                id="employment_status"
                value={formData.employment_status}
                onChange={(e) => setFormData({...formData, employment_status: e.target.value})}
                className="mt-1 w-full px-3 py-2 bg-white border border-gray-300 rounded-md text-gray-900 focus:border-gold-400 focus:ring-gold-400"
              >
                <option value="active">Active</option>
                <option value="inactive">Inactive</option>
                <option value="on_leave">On Leave</option>
                <option value="terminated">Terminated</option>
              </select>
            </div>

            <div>
              <Label htmlFor="first_name" className="text-gray-700 font-medium">First Name *</Label>
              <Input
                id="first_name"
                value={formData.first_name}
                onChange={(e) => setFormData({...formData, first_name: e.target.value})}
                className="mt-1 bg-white border-gray-300 text-gray-900 focus:border-gold-400 focus:ring-gold-400"
                required
              />
            </div>

            <div>
              <Label htmlFor="last_name" className="text-gray-700 font-medium">Last Name *</Label>
              <Input
                id="last_name"
                value={formData.last_name}
                onChange={(e) => setFormData({...formData, last_name: e.target.value})}
                className="mt-1 bg-white border-gray-300 text-gray-900 focus:border-gold-400 focus:ring-gold-400"
                required
              />
            </div>

            <div>
              <Label htmlFor="email" className="text-gray-700 font-medium">Email Address</Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                className="mt-1 bg-white border-gray-300 text-gray-900 focus:border-gold-400 focus:ring-gold-400"
                placeholder="john.doe@company.com"
              />
            </div>

            <div>
              <Label htmlFor="phone" className="text-gray-700 font-medium">Phone Number</Label>
              <Input
                id="phone"
                value={formData.phone}
                onChange={(e) => setFormData({...formData, phone: e.target.value})}
                className="mt-1 bg-white border-gray-300 text-gray-900 focus:border-gold-400 focus:ring-gold-400"
                placeholder="(555) 123-4567"
              />
            </div>

            <div>
              <Label htmlFor="position" className="text-gray-700 font-medium">Position *</Label>
              <Input
                id="position"
                value={formData.position}
                onChange={(e) => setFormData({...formData, position: e.target.value})}
                className="mt-1 bg-white border-gray-300 text-gray-900 focus:border-gold-400 focus:ring-gold-400"
                placeholder="Operations Manager"
                required
              />
            </div>

            <div>
              <Label htmlFor="department" className="text-gray-700 font-medium">Department</Label>
              <Input
                id="department"
                value={formData.department}
                onChange={(e) => setFormData({...formData, department: e.target.value})}
                className="mt-1 bg-white border-gray-300 text-gray-900 focus:border-gold-400 focus:ring-gold-400"
                placeholder="Operations"
              />
            </div>

            <div>
              <Label htmlFor="employment_type" className="text-gray-700 font-medium">Employment Type</Label>
              <select
                id="employment_type"
                value={formData.employment_type}
                onChange={(e) => setFormData({...formData, employment_type: e.target.value})}
                className="mt-1 w-full px-3 py-2 bg-white border border-gray-300 rounded-md text-gray-900 focus:border-gold-400 focus:ring-gold-400"
              >
                <option value="full_time">Full Time</option>
                <option value="part_time">Part Time</option>
                <option value="contractor">Contractor</option>
                <option value="intern">Intern</option>
              </select>
            </div>

            <div>
              <Label htmlFor="location" className="text-gray-700 font-medium">Work Location</Label>
              <Input
                id="location"
                value={formData.location}
                onChange={(e) => setFormData({...formData, location: e.target.value})}
                className="mt-1 bg-white border-gray-300 text-gray-900 focus:border-gold-400 focus:ring-gold-400"
                placeholder="Downtown Office"
              />
            </div>

            <div>
              <Label htmlFor="hire_date" className="text-gray-700 font-medium">Hire Date</Label>
              <Input
                id="hire_date"
                type="date"
                value={formData.hire_date}
                onChange={(e) => setFormData({...formData, hire_date: e.target.value})}
                className="mt-1 bg-white border-gray-300 text-gray-900 focus:border-gold-400 focus:ring-gold-400"
              />
            </div>

            <div>
              <Label htmlFor="date_of_birth" className="text-gray-700 font-medium">Date of Birth</Label>
              <Input
                id="date_of_birth"
                type="date"
                value={formData.date_of_birth}
                onChange={(e) => setFormData({...formData, date_of_birth: e.target.value})}
                className="mt-1 bg-white border-gray-300 text-gray-900 focus:border-gold-400 focus:ring-gold-400"
              />
            </div>

            <div>
              <Label htmlFor="salary" className="text-gray-700 font-medium">Annual Salary</Label>
              <Input
                id="salary"
                type="number"
                step="0.01"
                value={formData.salary}
                onChange={(e) => setFormData({...formData, salary: e.target.value})}
                className="mt-1 bg-white border-gray-300 text-gray-900 focus:border-gold-400 focus:ring-gold-400"
                placeholder="75000.00"
              />
            </div>

            <div>
              <Label htmlFor="hourly_rate" className="text-gray-700 font-medium">Hourly Rate</Label>
              <Input
                id="hourly_rate"
                type="number"
                step="0.01"
                value={formData.hourly_rate}
                onChange={(e) => setFormData({...formData, hourly_rate: e.target.value})}
                className="mt-1 bg-white border-gray-300 text-gray-900 focus:border-gold-400 focus:ring-gold-400"
                placeholder="25.50"
              />
            </div>

            <div>
              <Label htmlFor="emergency_contact_name" className="text-gray-700 font-medium">Emergency Contact Name</Label>
              <Input
                id="emergency_contact_name"
                value={formData.emergency_contact_name}
                onChange={(e) => setFormData({...formData, emergency_contact_name: e.target.value})}
                className="mt-1 bg-white border-gray-300 text-gray-900 focus:border-gold-400 focus:ring-gold-400"
                placeholder="Jane Doe"
              />
            </div>

            <div>
              <Label htmlFor="emergency_contact_phone" className="text-gray-700 font-medium">Emergency Contact Phone</Label>
              <Input
                id="emergency_contact_phone"
                value={formData.emergency_contact_phone}
                onChange={(e) => setFormData({...formData, emergency_contact_phone: e.target.value})}
                className="mt-1 bg-white border-gray-300 text-gray-900 focus:border-gold-400 focus:ring-gold-400"
                placeholder="(555) 987-6543"
              />
            </div>
          </div>

          <div>
            <Label htmlFor="address" className="text-gray-700 font-medium">Home Address</Label>
            <Input
              id="address"
              value={formData.address}
              onChange={(e) => setFormData({...formData, address: e.target.value})}
              className="mt-1 bg-white border-gray-300 text-gray-900 focus:border-gold-400 focus:ring-gold-400"
              placeholder="123 Main St, City, State 12345"
            />
          </div>

          <div>
            <Label htmlFor="skills" className="text-gray-700 font-medium">Skills (comma-separated)</Label>
            <Input
              id="skills"
              value={formData.skills}
              onChange={(e) => setFormData({...formData, skills: e.target.value})}
              className="mt-1 bg-white border-gray-300 text-gray-900 focus:border-gold-400 focus:ring-gold-400"
              placeholder="Team Leadership, Project Management, Customer Service"
            />
          </div>

          <div>
            <Label htmlFor="certifications" className="text-gray-700 font-medium">Certifications (comma-separated)</Label>
            <Input
              id="certifications"
              value={formData.certifications}
              onChange={(e) => setFormData({...formData, certifications: e.target.value})}
              className="mt-1 bg-white border-gray-300 text-gray-900 focus:border-gold-400 focus:ring-gold-400"
              placeholder="PMP Certified, Safety Training"
            />
          </div>

          <div>
            <Label htmlFor="notes" className="text-gray-700 font-medium">Additional Notes</Label>
            <Textarea
              id="notes"
              value={formData.notes}
              onChange={(e) => setFormData({...formData, notes: e.target.value})}
              className="mt-1 bg-white border-gray-300 text-gray-900 focus:border-gold-400 focus:ring-gold-400"
              rows={3}
              placeholder="Any additional information about this team member..."
            />
          </div>

          <div className="flex justify-end space-x-3 pt-6 border-t border-gray-200">
            <Button
              type="button"
              variant="outline"
              onClick={onClose}
              className="border-gray-300 text-gray-700 hover:bg-gray-50"
            >
              Cancel
            </Button>
            <Button
              type="submit"
              disabled={loading}
              className="bg-gradient-to-r from-gold-400 to-gold-600 text-black font-medium hover:from-gold-500 hover:to-gold-700 disabled:opacity-50"
            >
              {loading ? 'Saving...' : member ? 'Update Team Member' : 'Add Team Member'}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default TeamFormDialog;