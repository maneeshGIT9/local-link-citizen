
import { Clock, Phone } from "lucide-react";

export type IssueStatus = "pending" | "inProgress" | "resolved";

export interface Issue {
  id: string;
  title: string;
  category: string;
  status: IssueStatus;
  date: string;
  description: string;
  location: string;
  agent?: {
    name: string;
    phone: string;
    arrivalTime: string;
  };
}

interface IssueCardProps {
  issue: Issue;
  onClick?: (issue: Issue) => void;
}

export function IssueCard({ issue, onClick }: IssueCardProps) {
  const statusColors = {
    pending: "bg-amber-100 text-amber-800",
    inProgress: "bg-blue-100 text-blue-800",
    resolved: "bg-green-100 text-green-800",
  };

  const statusLabels = {
    pending: "Pending",
    inProgress: "In Progress",
    resolved: "Resolved",
  };

  return (
    <div 
      className="bg-white rounded-lg shadow-sm p-4 mb-4"
      onClick={() => onClick?.(issue)}
    >
      <div className="flex justify-between items-start">
        <h3 className="font-medium">{issue.title}</h3>
        <span className={`text-xs px-2 py-1 rounded ${statusColors[issue.status]}`}>
          {statusLabels[issue.status]}
        </span>
      </div>
      <p className="text-sm text-gray-500 mt-1">{issue.category}</p>
      <p className="text-sm mt-2 line-clamp-2">{issue.description}</p>
      <div className="flex items-center mt-2 text-xs text-gray-500">
        <Clock size={14} className="mr-1" />
        <span>{issue.date}</span>
      </div>
      
      {issue.agent && issue.status === "inProgress" && (
        <div className="mt-3 pt-3 border-t border-gray-100">
          <p className="text-sm font-medium">Assigned Agent</p>
          <div className="text-sm text-gray-600">
            <p>{issue.agent.name}</p>
            <div className="flex items-center mt-1 space-x-4">
              <div className="flex items-center">
                <Phone size={14} className="mr-1" />
                <span>{issue.agent.phone}</span>
              </div>
              <div className="flex items-center">
                <Clock size={14} className="mr-1" />
                <span>ETA: {issue.agent.arrivalTime}</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
