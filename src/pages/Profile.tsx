import { useState } from "react";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Upload, X } from "lucide-react";

const Profile = () => {
  const [name, setName] = useState("Guest User");
  const [email, setEmail] = useState("guest@faitm.app");
  const [avatar, setAvatar] = useState("");

  const handleSave = () => {
    // Save profile logic
  };

  const handleCancel = () => {
    // Reset fields
  };

  const handleRemoveAvatar = () => {
    setAvatar("");
  };

  return (
    <Layout>
      <div className="p-4 max-w-2xl mx-auto">
        <Card className="p-6 space-y-6 shadow-soft">
          <h1 className="text-2xl font-bold">Profile Settings</h1>

          <div className="flex flex-col items-center gap-4">
            <Avatar className="w-32 h-32 border-4 border-primary/20">
              <AvatarImage src={avatar} />
              <AvatarFallback className="text-3xl gradient-primary text-primary-foreground">
                {name.charAt(0).toUpperCase()}
              </AvatarFallback>
            </Avatar>

            <div className="flex gap-2">
              <Button variant="outline" size="sm" className="transition-smooth">
                <Upload className="w-4 h-4 mr-2" />
                Upload Photo
              </Button>
              {avatar && (
                <Button
                  variant="outline"
                  size="sm"
                  onClick={handleRemoveAvatar}
                  className="text-destructive hover:bg-destructive/10 transition-smooth"
                >
                  <X className="w-4 h-4 mr-2" />
                  Remove
                </Button>
              )}
            </div>
          </div>

          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your name"
                className="transition-smooth focus:border-primary"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="transition-smooth focus:border-primary"
              />
            </div>
          </div>

          <div className="flex gap-3 pt-4">
            <Button
              variant="outline"
              onClick={handleCancel}
              className="flex-1 transition-smooth"
            >
              Cancel
            </Button>
            <Button
              onClick={handleSave}
              className="flex-1 gradient-primary text-primary-foreground shadow-soft hover:shadow-medium transition-smooth"
            >
              Save Changes
            </Button>
          </div>
        </Card>
      </div>
    </Layout>
  );
};

export default Profile;
