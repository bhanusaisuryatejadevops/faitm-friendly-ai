import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { SidebarTrigger } from "@/components/ui/sidebar";

interface TopBarProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

export function TopBar({ searchQuery, setSearchQuery }: TopBarProps) {
  return (
    <header className="sticky top-0 z-10 backdrop-blur-glass bg-card/80 border-b border-border/50 shadow-soft">
      <div className="flex items-center gap-4 p-4">
        <SidebarTrigger className="md:hidden" />
        
        <h1 className="text-xl font-bold">Tasks</h1>
        
        <div className="flex-1 max-w-md ml-auto relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search tasks, appointments, notes..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10 bg-background/50 border-border/50 focus:border-primary transition-smooth"
          />
        </div>
      </div>
    </header>
  );
}
