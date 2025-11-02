import { Button } from "@/components/ui/button";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

const filters = [
  "Today",
  "Tomorrow",
  "This Week",
  "This Month",
  "All Tasks",
  "Custom Range",
  "Unplanned",
  "Completed",
];

interface TaskFiltersProps {
  activeFilter: string;
  onFilterChange: (filter: string) => void;
}

export function TaskFilters({ activeFilter, onFilterChange }: TaskFiltersProps) {
  return (
    <ScrollArea className="w-full">
      <div className="flex gap-2 p-4">
        {filters.map((filter) => (
          <Button
            key={filter}
            variant={activeFilter === filter ? "default" : "outline"}
            size="sm"
            onClick={() => onFilterChange(filter)}
            className={`shrink-0 transition-smooth ${
              activeFilter === filter
                ? "gradient-primary text-primary-foreground shadow-soft"
                : "hover:bg-accent/50"
            }`}
          >
            {filter}
          </Button>
        ))}
      </div>
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  );
}
