import { Layout } from "@/components/Layout";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Mail, Calendar, Plus } from "lucide-react";

const availableIntegrations = [
  { id: "gmail", name: "Gmail", icon: Mail, connected: false, description: "Connect your Gmail account" },
  { id: "outlook", name: "Microsoft Outlook", icon: Calendar, connected: false, description: "Sync with Outlook calendar" },
];

const connectedAccounts = [
  { id: "1", name: "work@example.com", service: "Gmail", icon: Mail },
];

const Integrations = () => {
  return (
    <Layout>
      <div className="p-4 space-y-6 max-w-6xl mx-auto">
        <h1 className="text-2xl font-bold">Integration Hub</h1>

        <div className="space-y-4">
          <h2 className="text-lg font-semibold">Add Account</h2>
          <div className="grid gap-4 md:grid-cols-2">
            {availableIntegrations.map((integration) => {
              const Icon = integration.icon;
              
              return (
                <Card key={integration.id} className="p-6 transition-smooth hover:shadow-medium">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    
                    <div className="flex-1 space-y-3">
                      <div>
                        <h3 className="font-semibold">{integration.name}</h3>
                        <p className="text-sm text-muted-foreground">{integration.description}</p>
                      </div>
                      
                      <Button size="sm" className="gradient-primary text-primary-foreground">
                        <Plus className="w-4 h-4 mr-2" />
                        Connect
                      </Button>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>

        {connectedAccounts.length > 0 && (
          <div className="space-y-4">
            <h2 className="text-lg font-semibold">Your Accounts</h2>
            <div className="space-y-3">
              {connectedAccounts.map((account) => {
                const Icon = account.icon;
                
                return (
                  <Card key={account.id} className="p-4 transition-smooth hover:shadow-medium">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                        <Icon className="w-5 h-5 text-primary" />
                      </div>
                      
                      <div className="flex-1">
                        <h3 className="font-medium">{account.name}</h3>
                        <p className="text-sm text-muted-foreground">{account.service}</p>
                      </div>
                      
                      <Badge variant="secondary" className="bg-green-500/10 text-green-600">
                        Connected
                      </Badge>
                      
                      <Button variant="outline" size="sm">
                        Disconnect
                      </Button>
                    </div>
                  </Card>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Integrations;
