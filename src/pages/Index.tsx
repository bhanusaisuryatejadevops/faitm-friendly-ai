import { useState } from "react";
import { Layout } from "@/components/Layout";
import { TaskFilters } from "@/components/TaskFilters";
import { TaskList } from "@/components/TaskList";
import { AddTaskDialog } from "@/components/AddTaskDialog";

const Index = () => {
  const [activeFilter, setActiveFilter] = useState("Today");

  return (
    <Layout>
      <div className="p-4 space-y-4 max-w-6xl mx-auto">
        <TaskFilters activeFilter={activeFilter} onFilterChange={setActiveFilter} />
        
        <div className="space-y-6">
          <div>
            <h2 className="text-lg font-semibold mb-3 text-foreground">Your Tasks</h2>
            <TaskList />
          </div>
        </div>
        
        <AddTaskDialog />
      </div>
    </Layout>
  );
};

export default Index;
