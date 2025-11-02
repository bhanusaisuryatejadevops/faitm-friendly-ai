import { Layout } from "@/components/Layout";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { FolderKanban } from "lucide-react";

const mockProjects = [
  { id: "1", name: "Work", taskCount: 8, completed: 5, color: "bg-blue-500" },
  { id: "2", name: "Personal", taskCount: 12, completed: 7, color: "bg-green-500" },
  { id: "3", name: "Health & Fitness", taskCount: 5, completed: 3, color: "bg-purple-500" },
];

const Projects = () => {
  return (
    <Layout>
      <div className="p-4 space-y-4 max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold">Projects</h1>
          <Badge variant="secondary" className="text-sm">
            {mockProjects.length} projects
          </Badge>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {mockProjects.map((project) => {
            const progress = (project.completed / project.taskCount) * 100;
            
            return (
              <Card key={project.id} className="p-6 transition-smooth hover:shadow-medium cursor-pointer">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className={`w-12 h-12 rounded-lg ${project.color} bg-opacity-20 flex items-center justify-center`}>
                      <FolderKanban className={`w-6 h-6 ${project.color.replace('bg-', 'text-')}`} />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg">{project.name}</h3>
                      <p className="text-sm text-muted-foreground">
                        {project.completed} / {project.taskCount} tasks
                      </p>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Progress value={progress} className="h-2" />
                    <p className="text-xs text-right text-muted-foreground">
                      {Math.round(progress)}% complete
                    </p>
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

export default Projects;
