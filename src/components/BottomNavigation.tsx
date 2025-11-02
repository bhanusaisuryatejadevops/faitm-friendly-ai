import { useNavigate, useLocation } from "react-router-dom";
import { CheckSquare, FileText, FolderKanban, Bell, Mic } from "lucide-react";
import { Button } from "@/components/ui/button";

const navItems = [
  { icon: CheckSquare, label: "Tasks", path: "/" },
  { icon: FileText, label: "Notes", path: "/notes" },
  { icon: Mic, label: "AI", path: "/ai-assistant", highlight: true },
  { icon: FolderKanban, label: "Projects", path: "/projects" },
  { icon: Bell, label: "Updates", path: "/updates" },
];

export function BottomNavigation() {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <nav className="fixed bottom-0 left-0 right-0 md:hidden backdrop-blur-glass bg-card/95 border-t border-border/50 shadow-large z-50">
      <div className="flex items-center justify-around p-2">
        {navItems.map((item) => {
          const isActive = location.pathname === item.path;
          const Icon = item.icon;

          if (item.highlight) {
            return (
              <Button
                key={item.path}
                onClick={() => navigate(item.path)}
                size="icon"
                className="w-14 h-14 rounded-full gradient-primary shadow-medium hover:shadow-large transition-smooth -mt-8"
              >
                <Icon className="w-6 h-6 text-primary-foreground" />
              </Button>
            );
          }

          return (
            <button
              key={item.path}
              onClick={() => navigate(item.path)}
              className={`flex flex-col items-center gap-1 px-3 py-2 rounded-lg transition-smooth ${
                isActive
                  ? "text-primary bg-primary/10"
                  : "text-muted-foreground hover:text-foreground hover:bg-accent/50"
              }`}
            >
              <Icon className="w-5 h-5" />
              <span className="text-xs font-medium">{item.label}</span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}
