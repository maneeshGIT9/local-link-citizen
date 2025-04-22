import { Bell } from "lucide-react";
import { Link } from "react-router-dom";

interface AppHeaderProps {
  title: string;
  showNotification?: boolean;
}

export function AppHeader({ title, showNotification = true }: AppHeaderProps) {
  return (
    <header className="bg-primary text-white p-4 flex justify-between items-center fixed top-0 left-0 right-0 z-10">
      <h1 className="text-xl font-bold">WeGov</h1>
      <div className="flex items-center space-x-4">
        {showNotification && (
          <Link to="/notifications" className="text-white relative">
            <Bell size={20} />
            <span className="absolute -top-1 -right-1 bg-civic-accent rounded-full w-4 h-4 flex items-center justify-center text-[10px]">
              3
            </span>
          </Link>
        )}
      </div>
    </header>
  );
}
