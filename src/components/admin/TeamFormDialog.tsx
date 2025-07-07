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
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto bg-dark border-vip/20">
        <DialogHeader>
          <DialogTitle className="text-vip-glow font-orbitron">
            {member ? 'Edit Team Member' : 'Add New Team Member'}
          </DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="employee_id" className="text-vip">Employee ID</Label>
              <Input
                id="employee_id"
                value={formData.employee_id}
                onChange={(e) => setFormData({...formData, employee_id: e.target.value})}
                className="bg-white/5 border-vip/20 text-vip"
                placeholder="EMP001"
              />
            </div>

            <div>
              <Label htmlFor="employment_status" className="text-vip">Employment Status</Label>
              <select
                id="employment_status"
                value={formData.employment_status}
                onChange={(e) => setFormData({...formData, employment_status: e.target.value})}
                className="w-full px-3 py-2 bg-white/5 border border-vip/20 rounded-md text-vip"
              >
                <option value="active">Active</option>
                <option value="inactive">Inactive</option>
                <option value="on_leave">On Leave</option>
                <option value="terminated">Terminated</option>
              </select>
            </div>

            <div>
              <Label htmlFor="first_name" className="text-vip">First Name *</Label>
              <Input
                id="first_name"
                value={formData.first_name}
                onChange={(e) => setFormData({...formData, first_name: e.target.value})}
                className="bg-white/5 border-vip/20 text-vip"
                required
              />
            </div>

            <div>
              <Label htmlFor="last_name" className="text-vip">Last Name *</Label>
              <Input
                id="last_name"
                value={formData.last_name}
                onChange={(e) => setFormData({...formData, last_name: e.target.value})}
                className="bg-white/5 border-vip/20 text-vip"
                required
              />
            </div>

            <div>
              <Label htmlFor="email" className="text-vip">Email</Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                className="bg-white/5 border-vip/20 text-vip"
              />
            </div>

            <div>
              <Label htmlFor="phone" className="text-vip">Phone</Label>
              <Input
                id="phone"
                value={formData.phone}
                onChange={(e) => setFormData({...formData, phone: e.target.value})}
                className="bg-white/5 border-vip/20 text-vip"
              />
            </div>

            <div>
              <Label htmlFor="position" className="text-vip">Position *</Label>
              <Input
                id="position"
                value={formData.position}
                onChange={(e) => setFormData({...formData, position: e.target.value})}
                className="bg-white/5 border-vip/20 text-vip"
                required
              />
            </div>

            <div>
              <Label htmlFor="department" className="text-vip">Department</Label>
              <Input
                id="department"
                value={formData.department}
                onChange={(e) => setFormData({...formData, department: e.target.value})}
                className="bg-white/5 border-vip/20 text-vip"
              />
            </div>

            <div>
              <Label htmlFor="employment_type" className="text-vip">Employment Type</Label>
              <select
                id="employment_type"
                value={formData.employment_type}
                onChange={(e) => setFormData({...formData, employment_type: e.target.value})}
                className="w-full px-3 py-2 bg-white/5 border border-vip/20 rounded-md text-vip"
              >
                <option value="full_time">Full Time</option>
                <option value="part_time">Part Time</option>
                <option value="contractor">Contractor</option>
                <option value="intern">Intern</option>
              </select>
            </div>

            <div>
              <Label htmlFor="location" className="text-vip">Location</Label>
              <Input
                id="location"
                value={formData.location}
                onChange={(e) => setFormData({...formData, location: e.target.value})}
                className="bg-white/5 border-vip/20 text-vip"
              />
            </div>

            <div>
              <Label htmlFor="hire_date" className="text-vip">Hire Date</Label>
              <Input
                id="hire_date"
                type="date"
                value={formData.hire_date}
                onChange={(e) => setFormData({...formData, hire_date: e.target.value})}
                className="bg-white/5 border-vip/20 text-vip"
              />
            </div>

            <div>
              <Label htmlFor="date_of_birth" className="text-vip">Date of Birth</Label>
              <Input
                id="date_of_birth"
                type="date"
                value={formData.date_of_birth}
                onChange={(e) => setFormData({...formData, date_of_birth: e.target.value})}
                className="bg-white/5 border-vip/20 text-vip"
              />
            </div>

            <div>
              <Label htmlFor="salary" className="text-vip">Salary</Label>
              <Input
                id="salary"
                type="number"
                step="0.01"
                value={formData.salary}
                onChange={(e) => setFormData({...formData, salary: e.target.value})}
                className="bg-white/5 border-vip/20 text-vip"
                placeholder="75000.00"
              />
            </div>

            <div>
              <Label htmlFor="hourly_rate" className="text-vip">Hourly Rate</Label>
              <Input
                id="hourly_rate"
                type="number"
                step="0.01"
                value={formData.hourly_rate}
                onChange={(e) => setFormData({...formData, hourly_rate: e.target.value})}
                className="bg-white/5 border-vip/20 text-vip"
                placeholder="25.50"
              />
            </div>

            <div>
              <Label htmlFor="emergency_contact_name" className="text-vip">Emergency Contact Name</Label>
              <Input
                id="emergency_contact_name"
                value={formData.emergency_contact_name}
                onChange={(e) => setFormData({...formData, emergency_contact_name: e.target.value})}
                className="bg-white/5 border-vip/20 text-vip"
              />
            </div>

            <div>
              <Label htmlFor="emergency_contact_phone" className="text-vip">Emergency Contact Phone</Label>
              <Input
                id="emergency_contact_phone"
                value={formData.emergency_contact_phone}
                onChange={(e) => setFormData({...formData, emergency_contact_phone: e.target.value})}
                className="bg-white/5 border-vip/20 text-vip"
              />
            </div>
          </div>

          <div>
            <Label htmlFor="address" className="text-vip">Address</Label>
            <Input
              id="address"
              value={formData.address}
              onChange={(e) => setFormData({...formData, address: e.target.value})}
              className="bg-white/5 border-vip/20 text-vip"
            />
          </div>

          <div>
            <Label htmlFor="skills" className="text-vip">Skills (comma-separated)</Label>
            <Input
              id="skills"
              value={formData.skills}
              onChange={(e) => setFormData({...formData, skills: e.target.value})}
              className="bg-white/5 border-vip/20 text-vip"
              placeholder="Team Leadership, Project Management, Customer Service"
            />
          </div>

          <div>
            <Label htmlFor="certifications" className="text-vip">Certifications (comma-separated)</Label>
            <Input
              id="certifications"
              value={formData.certifications}
              onChange={(e) => setFormData({...formData, certifications: e.target.value})}
              className="bg-white/5 border-vip/20 text-vip"
              placeholder="PMP Certified, Safety Training"
            />
          </div>

          <div>
            <Label htmlFor="notes" className="text-vip">Notes</Label>
            <Textarea
              id="notes"
              value={formData.notes}
              onChange={(e) => setFormData({...formData, notes: e.target.value})}
              className="bg-white/5 border-vip/20 text-vip"
              rows={3}
            />
          </div>

          <div className="flex justify-end space-x-3 pt-4">
            <Button
              type="button"
              variant="outline"
              onClick={onClose}
              className="border-vip/20 text-vip hover:bg-vip/10"
            >
              Cancel
            </Button>
            <Button
              type="submit"
              disabled={loading}
              className="bg-gradient-to-r from-gold-400 to-gold-600 text-black font-medium hover:from-gold-500 hover:to-gold-700"
            >
              {loading ? 'Saving...' : member ? 'Update Member' : 'Add Member'}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default TeamFormDialog;