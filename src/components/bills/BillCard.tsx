
import { FileText } from "lucide-react";
import { Button } from "@/components/ui/button";

export interface Bill {
  id: string;
  type: string;
  amount: number;
  dueDate: string;
  status: "paid" | "pending" | "overdue";
  billNumber: string;
}

interface BillCardProps {
  bill: Bill;
  onPay: (id: string) => void;
  onViewDetails: (id: string) => void;
}

export function BillCard({ bill, onPay, onViewDetails }: BillCardProps) {
  const statusStyles = {
    paid: "bg-green-100 text-green-800",
    pending: "bg-amber-100 text-amber-800",
    overdue: "bg-red-100 text-red-800",
  };

  const statusLabels = {
    paid: "Paid",
    pending: "Due",
    overdue: "Overdue",
  };

  return (
    <div className="bg-white rounded-lg shadow-sm p-4 mb-4">
      <div className="flex items-start justify-between">
        <div className="flex items-start">
          <div className="bg-civic-light p-2 rounded mr-3">
            <FileText size={20} className="text-civic-primary" />
          </div>
          <div>
            <h3 className="font-medium">{bill.type}</h3>
            <p className="text-xs text-gray-500">Bill #{bill.billNumber}</p>
          </div>
        </div>
        <span className={`text-xs px-2 py-1 rounded ${statusStyles[bill.status]}`}>
          {statusLabels[bill.status]}
        </span>
      </div>
      
      <div className="mt-3 flex justify-between items-center">
        <div>
          <p className="text-xs text-gray-500">Amount</p>
          <p className="font-bold">₹{bill.amount.toFixed(2)}</p>
        </div>
        <div>
          <p className="text-xs text-gray-500">Due Date</p>
          <p className="text-sm">{bill.dueDate}</p>
        </div>
      </div>
      
      <div className="mt-4 flex space-x-2">
        <Button 
          variant="outline" 
          size="sm"
          className="flex-1"
          onClick={() => onViewDetails(bill.id)}
        >
          View Details
        </Button>
        
        {bill.status !== "paid" && (
          <Button 
            size="sm"
            className="flex-1 bg-civic-primary hover:bg-civic-primary/90"
            onClick={() => onPay(bill.id)}
          >
            Pay Now
          </Button>
        )}
      </div>
    </div>
  );
}
