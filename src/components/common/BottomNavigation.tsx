
import { Link, useLocation } from "react-router-dom";
import { Home, AlertCircle, Newspaper, FileText, User } from "lucide-react";

export function BottomNavigation() {
  const location = useLocation();
  
  const navItems = [
    { icon: Home, label: "Home", path: "/" },
    { icon: AlertCircle, label: "Report", path: "/report" },
    { icon: Newspaper, label: "Updates", path: "/updates" },
    { icon: FileText, label: "Bills", path: "/bills" },
    { icon: User, label: "Profile", path: "/profile" },
  ];
  
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-4 py-2 flex justify-between items-center shadow-md">
      {navItems.map((item) => {
        const isActive = location.pathname === item.path;
        return (
          <Link
            key={item.path}
            to={item.path}
            className={`flex flex-col items-center ${
              isActive ? "text-civic-primary" : "text-gray-500"
            }`}
          >
            <item.icon size={20} />
            <span className="text-xs mt-1">{item.label}</span>
          </Link>
        );
      })}
    </div>
  );
}
