import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Calendar, Clock, Plus, Trash2 } from "lucide-react";
import { toast } from "sonner";

interface TeamMember {
  id: string;
  first_name: string;
  last_name: string;
  position: string;
}

interface Schedule {
  id: string;
  day: string;
  start_time: string;
  end_time: string;
  break_duration: number;
}

interface TimeEntry {
  id: string;
  date: string;
  clock_in: string;
  clock_out: string;
  break_time: number;
  total_hours: number;
  status: string;
}

interface TeamScheduleDialogProps {
  isOpen: boolean;
  onClose: () => void;
  member: TeamMember | null;
}

const TeamScheduleDialog = ({ isOpen, onClose, member }: TeamScheduleDialogProps) => {
  const [activeTab, setActiveTab] = useState("schedule");
  const [schedules, setSchedules] = useState<Schedule[]>([
    { id: "1", day: "Monday", start_time: "09:00", end_time: "17:00", break_duration: 60 },
    { id: "2", day: "Tuesday", start_time: "09:00", end_time: "17:00", break_duration: 60 },
    { id: "3", day: "Wednesday", start_time: "09:00", end_time: "17:00", break_duration: 60 },
    { id: "4", day: "Thursday", start_time: "09:00", end_time: "17:00", break_duration: 60 },
    { id: "5", day: "Friday", start_time: "09:00", end_time: "17:00", break_duration: 60 },
  ]);
  
  const [timeEntries, setTimeEntries] = useState<TimeEntry[]>([
    { id: "1", date: "2025-01-06", clock_in: "09:05", clock_out: "17:02", break_time: 45, total_hours: 7.88, status: "completed" },
    { id: "2", date: "2025-01-07", clock_in: "08:58", clock_out: "17:15", break_time: 30, total_hours: 7.95, status: "completed" },
    { id: "3", date: "2025-01-08", clock_in: "09:02", clock_out: "", break_time: 0, total_hours: 0, status: "active" },
  ]);

  const [newSchedule, setNewSchedule] = useState({
    day: "Monday",
    start_time: "09:00",
    end_time: "17:00",
    break_duration: 60
  });

  const handleAddSchedule = () => {
    const schedule: Schedule = {
      id: Date.now().toString(),
      ...newSchedule
    };
    setSchedules([...schedules, schedule]);
    setNewSchedule({ day: "Monday", start_time: "09:00", end_time: "17:00", break_duration: 60 });
    toast.success("Schedule added successfully");
  };

  const handleDeleteSchedule = (id: string) => {
    setSchedules(schedules.filter(s => s.id !== id));
    toast.success("Schedule deleted successfully");
  };

  const handleClockAction = (entryId: string, action: 'in' | 'out') => {
    const currentTime = new Date().toLocaleTimeString('en-US', { hour12: false, hour: '2-digit', minute: '2-digit' });
    
    setTimeEntries(entries => entries.map(entry => {
      if (entry.id === entryId) {
        if (action === 'in') {
          return { ...entry, clock_in: currentTime, status: 'active' };
        } else {
          const clockIn = new Date(`2000-01-01 ${entry.clock_in}`);
          const clockOut = new Date(`2000-01-01 ${currentTime}`);
          const totalHours = (clockOut.getTime() - clockIn.getTime()) / (1000 * 60 * 60) - (entry.break_time / 60);
          return { ...entry, clock_out: currentTime, total_hours: Math.max(0, totalHours), status: 'completed' };
        }
      }
      return entry;
    }));
    
    toast.success(`Clocked ${action} successfully`);
  };

  const calculateWeeklyHours = () => {
    return timeEntries.reduce((total, entry) => total + entry.total_hours, 0).toFixed(2);
  };

  if (!member) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-6xl max-h-[90vh] overflow-y-auto bg-white border border-gray-200">
        <DialogHeader>
          <DialogTitle className="text-gray-900 font-orbitron text-xl">
            Schedule & Time Management - {member.first_name} {member.last_name}
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          {/* Tab Navigation */}
          <div className="flex border-b border-gray-200">
            <button
              onClick={() => setActiveTab("schedule")}
              className={`px-4 py-2 font-medium ${
                activeTab === "schedule"
                  ? "text-gold-600 border-b-2 border-gold-500"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              <Calendar className="w-4 h-4 inline mr-2" />
              Schedule
            </button>
            <button
              onClick={() => setActiveTab("timeclock")}
              className={`px-4 py-2 font-medium ${
                activeTab === "timeclock"
                  ? "text-gold-600 border-b-2 border-gold-500"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              <Clock className="w-4 h-4 inline mr-2" />
              Time Clock
            </button>
          </div>

          {/* Schedule Tab */}
          {activeTab === "schedule" && (
            <div className="space-y-6">
              <Card className="p-4 bg-gray-50">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Weekly Schedule</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {schedules.map((schedule) => (
                    <Card key={schedule.id} className="p-4 bg-white border border-gray-200">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="font-medium text-gray-900">{schedule.day}</h4>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => handleDeleteSchedule(schedule.id)}
                          className="text-red-600 hover:text-red-700"
                        >
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                      <div className="space-y-2 text-sm text-gray-600">
                        <p>{schedule.start_time} - {schedule.end_time}</p>
                        <p>Break: {schedule.break_duration} minutes</p>
                      </div>
                    </Card>
                  ))}
                </div>
              </Card>

              {/* Add New Schedule */}
              <Card className="p-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Add Schedule</h3>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <div>
                    <Label htmlFor="day" className="text-gray-700">Day</Label>
                    <select
                      id="day"
                      value={newSchedule.day}
                      onChange={(e) => setNewSchedule({...newSchedule, day: e.target.value})}
                      className="w-full px-3 py-2 bg-white border border-gray-300 rounded-md text-gray-900"
                    >
                      {["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"].map(day => (
                        <option key={day} value={day}>{day}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <Label htmlFor="start_time" className="text-gray-700">Start Time</Label>
                    <Input
                      id="start_time"
                      type="time"
                      value={newSchedule.start_time}
                      onChange={(e) => setNewSchedule({...newSchedule, start_time: e.target.value})}
                      className="bg-white border-gray-300 text-gray-900"
                    />
                  </div>
                  <div>
                    <Label htmlFor="end_time" className="text-gray-700">End Time</Label>
                    <Input
                      id="end_time"
                      type="time"
                      value={newSchedule.end_time}
                      onChange={(e) => setNewSchedule({...newSchedule, end_time: e.target.value})}
                      className="bg-white border-gray-300 text-gray-900"
                    />
                  </div>
                  <div>
                    <Label htmlFor="break_duration" className="text-gray-700">Break (minutes)</Label>
                    <Input
                      id="break_duration"
                      type="number"
                      value={newSchedule.break_duration}
                      onChange={(e) => setNewSchedule({...newSchedule, break_duration: parseInt(e.target.value)})}
                      className="bg-white border-gray-300 text-gray-900"
                    />
                  </div>
                </div>
                <Button
                  onClick={handleAddSchedule}
                  className="mt-4 bg-gradient-to-r from-gold-400 to-gold-600 text-black font-medium hover:from-gold-500 hover:to-gold-700"
                >
                  <Plus className="w-4 h-4 mr-2" />
                  Add Schedule
                </Button>
              </Card>
            </div>
          )}

          {/* Time Clock Tab */}
          {activeTab === "timeclock" && (
            <div className="space-y-6">
              {/* Weekly Summary */}
              <Card className="p-4 bg-gray-50">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Weekly Summary</h3>
                <p className="text-2xl font-bold text-gold-600">{calculateWeeklyHours()} hours</p>
                <p className="text-sm text-gray-600">Total hours this week</p>
              </Card>

              {/* Time Entries */}
              <Card className="p-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Time Entries</h3>
                <div className="space-y-4">
                  {timeEntries.map((entry) => (
                    <Card key={entry.id} className="p-4 bg-white border border-gray-200">
                      <div className="flex justify-between items-center">
                        <div>
                          <h4 className="font-medium text-gray-900">{entry.date}</h4>
                          <div className="text-sm text-gray-600 space-y-1">
                            <p>Clock In: {entry.clock_in || "Not clocked in"}</p>
                            <p>Clock Out: {entry.clock_out || "Not clocked out"}</p>
                            <p>Break Time: {entry.break_time} minutes</p>
                            <p>Total Hours: {entry.total_hours.toFixed(2)}</p>
                          </div>
                        </div>
                        <div className="flex gap-2">
                          {entry.status === "active" ? (
                            <Button
                              onClick={() => handleClockAction(entry.id, "out")}
                              className="bg-red-500 hover:bg-red-600 text-white"
                            >
                              Clock Out
                            </Button>
                          ) : (
                            <Button
                              onClick={() => handleClockAction(entry.id, "in")}
                              className="bg-green-500 hover:bg-green-600 text-white"
                            >
                              Clock In
                            </Button>
                          )}
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              </Card>
            </div>
          )}

          <div className="flex justify-end pt-4">
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

export default TeamScheduleDialog;