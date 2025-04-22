
import { AlertTriangle, FileText, Phone, Settings } from "lucide-react";
import { Link } from "react-router-dom";

export function QuickActions() {
  const actions = [
    { 
      icon: <AlertTriangle className="text-civic-accent" size={24} />, 
      label: "Report Issue", 
      path: "/report" 
    },
    { 
      icon: <FileText className="text-civic-primary" size={24} />, 
      label: "Pay Bills", 
      path: "/bills" 
    },
    { 
      icon: <Phone className="text-civic-secondary" size={24} />, 
      label: "Contacts", 
      path: "/contacts" 
    },
    { 
      icon: <Settings className="text-civic-muted" size={24} />, 
      label: "Settings", 
      path: "/profile" 
    },
  ];

  return (
    <div className="grid grid-cols-4 gap-2 mt-6">
      {actions.map((action, index) => (
        <Link
          key={index}
          to={action.path}
          className="flex flex-col items-center bg-white p-3 rounded-lg shadow-sm"
        >
          {action.icon}
          <span className="text-xs mt-2 text-center">{action.label}</span>
        </Link>
      ))}
    </div>
  );
}
