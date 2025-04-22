
import { PageContainer } from "@/components/common/PageContainer";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Switch } from "@/components/ui/switch";
import { Bell, Key, LogOut, Moon, Settings, User } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function ProfilePage() {
  const navigate = useNavigate();
  
  const handleLogout = () => {
    // In a real app, clear auth token
    localStorage.removeItem("isLoggedIn");
    navigate("/login");
  };
  
  return (
    <PageContainer title="Profile & Settings">
      <div className="flex flex-col items-center mb-6">
        <Avatar className="w-24 h-24 border-4 border-white shadow-md">
          <AvatarImage src="https://github.com/shadcn.png" alt="User" />
          <AvatarFallback>JD</AvatarFallback>
        </Avatar>
        <h2 className="text-xl font-bold mt-3">John Doe</h2>
        <p className="text-gray-500">Survey #: ABC12345</p>
        <Button variant="outline" size="sm" className="mt-3">
          <User size={16} className="mr-1" />
          Edit Profile
        </Button>
      </div>
      
      <Card className="mb-4">
        <CardHeader>
          <CardTitle className="text-lg flex items-center">
            <Settings size={18} className="mr-2" />
            App Settings
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium">Notifications</p>
              <p className="text-sm text-gray-500">Receive app notifications</p>
            </div>
            <Switch defaultChecked />
          </div>
          
          <Separator />
          
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium">Email Alerts</p>
              <p className="text-sm text-gray-500">Receive updates via email</p>
            </div>
            <Switch defaultChecked />
          </div>
          
          <Separator />
          
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium">Dark Mode</p>
              <p className="text-sm text-gray-500">Switch to dark theme</p>
            </div>
            <Switch />
          </div>
        </CardContent>
      </Card>
      
      <Card className="mb-4">
        <CardHeader>
          <CardTitle className="text-lg flex items-center">
            <Bell size={18} className="mr-2" />
            Notification Preferences
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <p className="font-medium">Issue Updates</p>
            <Switch defaultChecked />
          </div>
          
          <div className="flex items-center justify-between">
            <p className="font-medium">Bill Reminders</p>
            <Switch defaultChecked />
          </div>
          
          <div className="flex items-center justify-between">
            <p className="font-medium">News & Announcements</p>
            <Switch defaultChecked />
          </div>
        </CardContent>
      </Card>
      
      <Card className="mb-4">
        <CardHeader>
          <CardTitle className="text-lg flex items-center">
            <Key size={18} className="mr-2" />
            Account Security
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Button variant="outline" className="w-full">Change Password</Button>
        </CardContent>
      </Card>
      
      <Button 
        variant="destructive" 
        className="w-full"
        onClick={handleLogout}
      >
        <LogOut size={16} className="mr-2" />
        Logout
      </Button>
    </PageContainer>
  );
}
