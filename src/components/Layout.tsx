import { useState } from "react";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import { BottomNavigation } from "@/components/BottomNavigation";
import { TopBar } from "@/components/TopBar";

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <SidebarProvider defaultOpen={false}>
      <div className="min-h-screen flex w-full bg-gradient-soft">
        <AppSidebar />
        
        <main className="flex-1 flex flex-col pb-20 md:pb-0">
          <TopBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
          
          <div className="flex-1 overflow-auto">
            {children}
          </div>
          
          <BottomNavigation />
        </main>
      </div>
    </SidebarProvider>
  );
}
