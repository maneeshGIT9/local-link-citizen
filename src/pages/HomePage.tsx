
import { PageContainer } from "@/components/common/PageContainer";
import { StatusCard } from "@/components/home/StatusCard";
import { QuickActions } from "@/components/home/QuickActions";
import { RecentUpdates } from "@/components/home/RecentUpdates";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { AlertCircle, CheckCircle, Wrench, InfoIcon } from "lucide-react";

export default function HomePage() {
  // Mock data - in a real app, this would come from an API
  const statusData = [
    { title: "Pending Issues", count: 2, icon: <AlertCircle size={24} />, color: "border-civic-accent" },
    { title: "In Progress", count: 1, icon: <Wrench size={24} />, color: "border-civic-primary" },
    { title: "Resolved", count: 5, icon: <CheckCircle size={24} />, color: "border-civic-secondary" },
  ];

  const updates = [
    {
      id: "1",
      title: "Scheduled Water Supply Maintenance",
      date: "Today",
      category: "Water Utility",
    },
    {
      id: "2",
      title: "New Road Construction Starting",
      date: "Yesterday",
      category: "Infrastructure",
    },
    {
      id: "3",
      title: "Property Tax Due Date Extension",
      date: "3 days ago",
      category: "Taxes",
    },
  ];

  return (
    <PageContainer title="Home">
      <Alert className="mb-4 bg-civic-light border-civic-primary/20">
        <InfoIcon className="h-4 w-4 text-civic-primary" />
        <AlertTitle>Welcome to CivicLink!</AlertTitle>
        <AlertDescription>
          Your bridge to better local governance and community services.
        </AlertDescription>
      </Alert>

      <div className="grid grid-cols-3 gap-3">
        {statusData.map((item, index) => (
          <StatusCard 
            key={index}
            title={item.title}
            count={item.count}
            icon={item.icon}
            color={item.color}
          />
        ))}
      </div>

      <QuickActions />
      
      <RecentUpdates updates={updates} />
    </PageContainer>
  );
}
