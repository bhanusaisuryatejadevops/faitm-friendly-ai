import { Layout } from "@/components/Layout";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Bell, CheckCircle, Calendar, AlertCircle } from "lucide-react";

const mockUpdates = [
  {
    id: "1",
    type: "task_completed",
    title: "Task Completed",
    message: "You completed 'Review project proposal'",
    time: "2 hours ago",
    icon: CheckCircle,
    color: "text-green-500",
  },
  {
    id: "2",
    type: "reminder",
    title: "Upcoming Appointment",
    message: "Team meeting in 1 hour",
    time: "5 hours ago",
    icon: Calendar,
    color: "text-blue-500",
  },
  {
    id: "3",
    type: "overdue",
    title: "Overdue Task",
    message: "Buy groceries is overdue",
    time: "1 day ago",
    icon: AlertCircle,
    color: "text-red-500",
  },
];

const Updates = () => {
  return (
    <Layout>
      <div className="p-4 space-y-4 max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold">Updates</h1>
          <Badge variant="secondary" className="text-sm">
            {mockUpdates.length} new
          </Badge>
        </div>

        <div className="space-y-3">
          {mockUpdates.map((update) => {
            const Icon = update.icon;
            
            return (
              <Card key={update.id} className="p-4 transition-smooth hover:shadow-medium cursor-pointer">
                <div className="flex items-start gap-3">
                  <div className={`w-10 h-10 rounded-full bg-card flex items-center justify-center shrink-0 border-2 ${update.color} border-current border-opacity-20`}>
                    <Icon className={`w-5 h-5 ${update.color}`} />
                  </div>
                  
                  <div className="flex-1 space-y-1">
                    <h3 className="font-medium">{update.title}</h3>
                    <p className="text-sm text-muted-foreground">{update.message}</p>
                    <p className="text-xs text-muted-foreground">{update.time}</p>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </Layout>
  );
};

export default Updates;
