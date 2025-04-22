
import { ReactNode } from "react";

interface StatusCardProps {
  title: string;
  count: number;
  icon: ReactNode;
  color: string;
}

export function StatusCard({ title, count, icon, color }: StatusCardProps) {
  return (
    <div className={`p-4 rounded-lg shadow-sm bg-white border-l-4 ${color}`}>
      <div className="flex justify-between items-center">
        <div>
          <p className="text-sm text-gray-500">{title}</p>
          <p className="text-xl font-bold">{count}</p>
        </div>
        <div className="text-gray-400">{icon}</div>
      </div>
    </div>
  );
}
