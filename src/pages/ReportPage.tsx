
import { useState } from "react";
import { PageContainer } from "@/components/common/PageContainer";
import { IssueCard, type Issue } from "@/components/reports/IssueCard";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function ReportPage() {
  const navigate = useNavigate();
  
  const [issues] = useState<Issue[]>([
    {
      id: "1",
      title: "Broken Streetlight",
      category: "Streetlight Issues",
      status: "inProgress",
      date: "Today, 10:30 AM",
      description: "The streetlight near house #42 is not working for the past 3 days, causing safety concerns at night.",
      location: "Main Street, near Park Junction",
      agent: {
        name: "Rajesh Kumar",
        phone: "9876543210",
        arrivalTime: "Today, 2:30 PM",
      },
    },
    {
      id: "2",
      title: "Water Supply Disruption",
      category: "Water Supply",
      status: "inProgress",
      date: "Yesterday, 08:15 AM",
      description: "No water supply in Block B since yesterday morning. Multiple households are affected.",
      location: "Block B, Sector 7",
      agent: {
        name: "Suresh Reddy",
        phone: "9876543211",
        arrivalTime: "Today, 4:00 PM",
      },
    },
    {
      id: "3",
      title: "Garbage Collection Missed",
      category: "Garbage Collection",
      status: "resolved",
      date: "Apr 15, 2023",
      description: "The garbage collection vehicle has not visited our area for the last two days.",
      location: "Residential Complex, Tower 3",
    },
  ]);

  const handleViewIssue = (issue: Issue) => {
    // In a real app, navigate to issue details page
    console.log("View issue:", issue);
    // navigate(`/report/${issue.id}`);
    alert(`Viewing details for: ${issue.title}`);
  };

  return (
    <PageContainer title="Issues & Reports">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">My Issues</h1>
        <Button 
          onClick={() => navigate("/report/new")}
          className="bg-civic-primary hover:bg-civic-primary/90"
        >
          <Plus size={16} className="mr-1" />
          New Report
        </Button>
      </div>
      
      <Tabs defaultValue="all">
        <TabsList className="w-full mb-4">
          <TabsTrigger value="all" className="flex-1">All</TabsTrigger>
          <TabsTrigger value="pending" className="flex-1">Pending</TabsTrigger>
          <TabsTrigger value="inProgress" className="flex-1">In Progress</TabsTrigger>
          <TabsTrigger value="resolved" className="flex-1">Resolved</TabsTrigger>
        </TabsList>
        
        <TabsContent value="all">
          {issues.map((issue) => (
            <IssueCard key={issue.id} issue={issue} onClick={handleViewIssue} />
          ))}
        </TabsContent>
        
        <TabsContent value="pending">
          {issues.filter(i => i.status === "pending").map((issue) => (
            <IssueCard key={issue.id} issue={issue} onClick={handleViewIssue} />
          ))}
        </TabsContent>
        
        <TabsContent value="inProgress">
          {issues.filter(i => i.status === "inProgress").map((issue) => (
            <IssueCard key={issue.id} issue={issue} onClick={handleViewIssue} />
          ))}
        </TabsContent>
        
        <TabsContent value="resolved">
          {issues.filter(i => i.status === "resolved").map((issue) => (
            <IssueCard key={issue.id} issue={issue} onClick={handleViewIssue} />
          ))}
        </TabsContent>
      </Tabs>
      
      {issues.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500">No issues reported yet.</p>
          <Button 
            onClick={() => navigate("/report/new")}
            variant="outline"
            className="mt-4"
          >
            Report an Issue
          </Button>
        </div>
      )}
    </PageContainer>
  );
}
