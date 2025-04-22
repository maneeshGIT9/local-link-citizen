
import { PageContainer } from "@/components/common/PageContainer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { InfoIcon, BellRing, AlertTriangle } from "lucide-react";

interface Update {
  id: string;
  title: string;
  content: string;
  date: string;
  category: string;
  type: "info" | "announcement" | "alert";
}

export default function UpdatesPage() {
  // Mock data - in a real app, this would come from an API
  const updates: Update[] = [
    {
      id: "1",
      title: "Scheduled Water Supply Maintenance",
      content: "Due to maintenance work, water supply will be disrupted in Sectors 5, 6, and 7 from 10 AM to 2 PM tomorrow. Please store water accordingly.",
      date: "Today, 9:00 AM",
      category: "Water Utility",
      type: "announcement",
    },
    {
      id: "2",
      title: "New Road Construction Starting",
      content: "Construction of the new connecting road between Main Street and Commerce Avenue will begin next week. Expected completion is within 2 months.",
      date: "Yesterday, 3:30 PM",
      category: "Infrastructure",
      type: "info",
    },
    {
      id: "3",
      title: "Property Tax Due Date Extension",
      content: "The last date for payment of property tax has been extended to June 30, 2023. A 5% rebate is available on payments made before May 31.",
      date: "3 days ago",
      category: "Taxes",
      type: "info",
    },
    {
      id: "4",
      title: "Heavy Rainfall Alert",
      content: "Heavy rainfall expected in the next 48 hours. Citizens are advised to take necessary precautions and avoid waterlogged areas.",
      date: "1 week ago",
      category: "Weather",
      type: "alert",
    },
  ];

  const typeIcons = {
    info: <InfoIcon size={18} className="text-civic-primary" />,
    announcement: <BellRing size={18} className="text-civic-secondary" />,
    alert: <AlertTriangle size={18} className="text-civic-accent" />,
  };

  const typeClasses = {
    info: "bg-blue-50 border-blue-200",
    announcement: "bg-green-50 border-green-200",
    alert: "bg-amber-50 border-amber-200",
  };

  return (
    <PageContainer title="Updates & Announcements">
      <Tabs defaultValue="all">
        <TabsList className="w-full mb-4">
          <TabsTrigger value="all" className="flex-1">All</TabsTrigger>
          <TabsTrigger value="announcements" className="flex-1">Announcements</TabsTrigger>
          <TabsTrigger value="alerts" className="flex-1">Alerts</TabsTrigger>
        </TabsList>
        
        <TabsContent value="all">
          {updates.map((update) => (
            <div 
              key={update.id} 
              className={`mb-4 p-4 rounded-lg border ${typeClasses[update.type]}`}
            >
              <div className="flex justify-between items-start">
                <div className="flex items-center">
                  {typeIcons[update.type]}
                  <h3 className="font-medium ml-2">{update.title}</h3>
                </div>
                <Badge variant="outline">{update.category}</Badge>
              </div>
              <p className="mt-2 text-sm">{update.content}</p>
              <p className="mt-2 text-xs text-gray-500">{update.date}</p>
            </div>
          ))}
        </TabsContent>
        
        <TabsContent value="announcements">
          {updates.filter(u => u.type === "announcement").map((update) => (
            <div 
              key={update.id} 
              className={`mb-4 p-4 rounded-lg border ${typeClasses[update.type]}`}
            >
              <div className="flex justify-between items-start">
                <div className="flex items-center">
                  {typeIcons[update.type]}
                  <h3 className="font-medium ml-2">{update.title}</h3>
                </div>
                <Badge variant="outline">{update.category}</Badge>
              </div>
              <p className="mt-2 text-sm">{update.content}</p>
              <p className="mt-2 text-xs text-gray-500">{update.date}</p>
            </div>
          ))}
        </TabsContent>
        
        <TabsContent value="alerts">
          {updates.filter(u => u.type === "alert").map((update) => (
            <div 
              key={update.id} 
              className={`mb-4 p-4 rounded-lg border ${typeClasses[update.type]}`}
            >
              <div className="flex justify-between items-start">
                <div className="flex items-center">
                  {typeIcons[update.type]}
                  <h3 className="font-medium ml-2">{update.title}</h3>
                </div>
                <Badge variant="outline">{update.category}</Badge>
              </div>
              <p className="mt-2 text-sm">{update.content}</p>
              <p className="mt-2 text-xs text-gray-500">{update.date}</p>
            </div>
          ))}
        </TabsContent>
      </Tabs>
    </PageContainer>
  );
}
