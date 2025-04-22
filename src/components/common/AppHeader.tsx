
import { Bell, User } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface AppHeaderProps {
  title: string;
  showNotification?: boolean;
}

export function AppHeader({ title, showNotification = true }: AppHeaderProps) {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    navigate("/login");
  };

  return (
    <header className="bg-primary text-white p-4 flex justify-between items-center fixed top-0 left-0 right-0 z-10">
      <div className="flex items-center space-x-4">
        <img 
          src="/lovable-uploads/0d9f435f-da50-4fc9-a25f-b708833c7022.png" 
          alt="WeGov Logo" 
          className="h-10 w-10 mr-2"
        />
        <div>
          <h1 className="text-xl font-bold">WeGov</h1>
          <p className="text-xs opacity-90">Government of Telangana</p>
        </div>
      </div>
      <div className="flex items-center space-x-4">
        {showNotification && (
          <Link to="/notifications" className="text-white relative">
            <Bell size={20} />
            <span className="absolute -top-1 -right-1 bg-civic-accent rounded-full w-4 h-4 flex items-center justify-center text-[10px]">
              3
            </span>
          </Link>
        )}
        
        <DropdownMenu>
          <DropdownMenuTrigger className="focus:outline-none">
            <Avatar className="h-8 w-8 border-2 border-white/20">
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56" align="end">
            <DropdownMenuLabel>
              <div className="font-normal text-sm">
                <p className="font-medium text-base">John Doe</p>
                <p className="text-muted-foreground">Survey #: ABC12345</p>
              </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="cursor-pointer" onClick={() => navigate('/profile')}>
              <User className="mr-2 h-4 w-4" />
              View Profile
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="cursor-pointer text-red-600" onClick={handleLogout}>
              Log out
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
}
