import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  User,
  Settings,
  Share2,
  LogOut,
  Trash2,
  Info,
  Shield,
  FileText,
  Mic2,
  Plug,
} from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarHeader,
  SidebarFooter,
  useSidebar,
} from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const menuItems = [
  { title: "Profile", icon: User, path: "/profile" },
  { title: "General Settings", icon: Settings, path: "/settings" },
  { title: "Integration Hub", icon: Plug, path: "/integrations" },
  { title: "Share FAITM", icon: Share2, path: "/share" },
  { title: "About FAITM", icon: Info, path: "/about" },
  { title: "Privacy Policy", icon: Shield, path: "/privacy", external: true },
  { title: "Terms of Service", icon: FileText, path: "/terms", external: true },
];

export function AppSidebar() {
  const navigate = useNavigate();
  const { open } = useSidebar();
  const [user] = useState({ name: "Guest User", email: "guest@faitm.app" });

  const handleNavigation = (path: string, external?: boolean) => {
    if (external) {
      window.open(path, "_blank");
    } else {
      navigate(path);
    }
  };

  return (
    <Sidebar 
      className="border-r border-border/50 backdrop-blur-glass bg-card/80"
      collapsible="offcanvas"
    >
      <SidebarHeader className="p-6 border-b border-border/50">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl gradient-primary flex items-center justify-center shadow-soft">
            <Mic2 className="w-5 h-5 text-primary-foreground" />
          </div>
          {open && (
            <div className="flex flex-col">
              <span className="font-bold text-lg bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                FAITM
              </span>
              <span className="text-xs text-muted-foreground">AI Task Manager</span>
            </div>
          )}
        </div>
      </SidebarHeader>

      <SidebarContent className="p-4">
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    onClick={() => handleNavigation(item.path, item.external)}
                    className="transition-smooth hover:bg-primary/10"
                  >
                    <item.icon className="w-4 h-4" />
                    <span>{item.title}</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="p-4 border-t border-border/50">
        <div className="space-y-2">
          <SidebarMenuButton className="w-full transition-smooth hover:bg-destructive/10 text-destructive">
            <LogOut className="w-4 h-4" />
            <span>Logout</span>
          </SidebarMenuButton>
          <SidebarMenuButton className="w-full transition-smooth hover:bg-destructive/10 text-destructive">
            <Trash2 className="w-4 h-4" />
            <span>Delete Account</span>
          </SidebarMenuButton>
          <Button className="w-full mt-4 gradient-primary text-primary-foreground shadow-soft hover:shadow-medium transition-smooth">
            Sign Up
          </Button>
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}
