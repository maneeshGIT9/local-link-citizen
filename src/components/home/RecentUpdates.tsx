
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

interface Update {
  id: string;
  title: string;
  date: string;
  category: string;
}

interface RecentUpdatesProps {
  updates: Update[];
}

export function RecentUpdates({ updates }: RecentUpdatesProps) {
  return (
    <div className="bg-white rounded-lg shadow-sm p-4 mt-6">
      <div className="flex justify-between items-center mb-4">
        <h3 className="font-bold">Recent Updates</h3>
        <Link to="/updates" className="text-civic-primary text-sm flex items-center">
          View All <ArrowRight size={16} className="ml-1" />
        </Link>
      </div>
      <div className="space-y-4">
        {updates.map((update) => (
          <div key={update.id} className="border-b pb-3 last:border-0">
            <p className="font-medium">{update.title}</p>
            <div className="flex justify-between mt-1">
              <span className="text-xs bg-civic-light px-2 py-1 rounded text-civic-muted">
                {update.category}
              </span>
              <span className="text-xs text-gray-500">{update.date}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
