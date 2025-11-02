import { useState } from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, Flag } from "lucide-react";

interface Task {
  id: string;
  title: string;
  dueDate?: string;
  dueTime?: string;
  priority?: "low" | "medium" | "high";
  project?: string;
  completed: boolean;
}

const mockTasks: Task[] = [
  {
    id: "1",
    title: "Review project proposal",
    dueDate: "Today",
    dueTime: "2:00 PM",
    priority: "high",
    project: "Work",
    completed: false,
  },
  {
    id: "2",
    title: "Schedule team meeting",
    dueDate: "Tomorrow",
    priority: "medium",
    project: "Work",
    completed: false,
  },
  {
    id: "3",
    title: "Buy groceries",
    dueDate: "Today",
    priority: "low",
    project: "Personal",
    completed: false,
  },
];

export function TaskList() {
  const [tasks, setTasks] = useState<Task[]>(mockTasks);

  const toggleTask = (id: string) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  const getPriorityColor = (priority?: string) => {
    switch (priority) {
      case "high": return "text-red-500";
      case "medium": return "text-yellow-500";
      case "low": return "text-green-500";
      default: return "text-muted-foreground";
    }
  };

  return (
    <div className="space-y-3">
      {tasks.map((task) => (
        <Card
          key={task.id}
          className={`p-4 transition-smooth hover:shadow-medium cursor-pointer ${
            task.completed ? "opacity-60" : ""
          }`}
        >
          <div className="flex items-start gap-3">
            <Checkbox
              checked={task.completed}
              onCheckedChange={() => toggleTask(task.id)}
              className="mt-1"
            />
            
            <div className="flex-1 space-y-2">
              <h3 className={`font-medium ${task.completed ? "line-through" : ""}`}>
                {task.title}
              </h3>
              
              <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
                {task.dueDate && (
                  <div className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    <span>{task.dueDate}</span>
                  </div>
                )}
                
                {task.dueTime && (
                  <div className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    <span>{task.dueTime}</span>
                  </div>
                )}
                
                {task.project && (
                  <Badge variant="secondary" className="text-xs">
                    {task.project}
                  </Badge>
                )}
              </div>
            </div>
            
            {task.priority && (
              <Flag className={`w-4 h-4 ${getPriorityColor(task.priority)}`} />
            )}
          </div>
        </Card>
      ))}
    </div>
  );
}
