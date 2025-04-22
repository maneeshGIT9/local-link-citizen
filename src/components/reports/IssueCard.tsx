
import { Clock } from "lucide-react";

export type IssueStatus = "pending" | "inProgress" | "resolved";

export interface Issue {
  id: string;
  title: string;
  category: string;
  status: IssueStatus;
  date: string;
  description: string;
  location: string;
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
    </div>
  );
}
