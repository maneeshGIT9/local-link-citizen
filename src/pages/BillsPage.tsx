
import { useState } from "react";
import { PageContainer } from "@/components/common/PageContainer";
import { BillCard, type Bill } from "@/components/bills/BillCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function BillsPage() {
  // Mock data - in a real app, this would come from an API
  const [bills] = useState<Bill[]>([
    {
      id: "1",
      type: "Water Bill",
      amount: 850.75,
      dueDate: "May 15, 2023",
      status: "pending",
      billNumber: "WTR-2023-05-4217",
    },
    {
      id: "2",
      type: "Electricity Bill",
      amount: 1250.50,
      dueDate: "Apr 30, 2023",
      status: "overdue",
      billNumber: "ELEC-2023-04-7891",
    },
    {
      id: "3",
      type: "Property Tax",
      amount: 4500.00,
      dueDate: "Mar 31, 2023",
      status: "paid",
      billNumber: "PTX-2023-01-1234",
    },
  ]);

  const handlePayBill = (id: string) => {
    // In a real app, navigate to payment gateway
    console.log("Pay bill:", id);
    alert(`Proceeding to payment for Bill #${id}`);
  };

  const handleViewDetails = (id: string) => {
    // In a real app, navigate to bill details page
    console.log("View bill details:", id);
    alert(`Viewing details for Bill #${id}`);
  };

  return (
    <PageContainer title="Bills & Payments">
      <Tabs defaultValue="all">
        <TabsList className="w-full mb-4">
          <TabsTrigger value="all" className="flex-1">All</TabsTrigger>
          <TabsTrigger value="pending" className="flex-1">Pending</TabsTrigger>
          <TabsTrigger value="paid" className="flex-1">Paid</TabsTrigger>
        </TabsList>
        
        <TabsContent value="all">
          {bills.map((bill) => (
            <BillCard 
              key={bill.id} 
              bill={bill} 
              onPay={handlePayBill} 
              onViewDetails={handleViewDetails} 
            />
          ))}
        </TabsContent>
        
        <TabsContent value="pending">
          {bills.filter(b => b.status === "pending" || b.status === "overdue").map((bill) => (
            <BillCard 
              key={bill.id} 
              bill={bill} 
              onPay={handlePayBill} 
              onViewDetails={handleViewDetails} 
            />
          ))}
        </TabsContent>
        
        <TabsContent value="paid">
          {bills.filter(b => b.status === "paid").map((bill) => (
            <BillCard 
              key={bill.id} 
              bill={bill} 
              onPay={handlePayBill} 
              onViewDetails={handleViewDetails} 
            />
          ))}
        </TabsContent>
      </Tabs>
      
      {bills.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500">No bills available.</p>
        </div>
      )}
    </PageContainer>
  );
}
