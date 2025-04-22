
import { PageContainer } from "@/components/common/PageContainer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { PieChart, Vote } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Poll {
  id: string;
  title: string;
  description: string;
  options: {
    id: string;
    text: string;
    votes: number;
  }[];
  totalVotes: number;
  category: string;
}

export default function PollsPage() {
  // Mock data - in a real app, this would come from an API
  const polls: Poll[] = [
    {
      id: "1",
      title: "Street Light Installation",
      description: "Which areas need street lights the most urgently?",
      options: [
        { id: "1", text: "Main Market Area", votes: 45 },
        { id: "2", text: "Residential Block B", votes: 30 },
        { id: "3", text: "Park Surroundings", votes: 25 },
      ],
      totalVotes: 100,
      category: "Infrastructure",
    },
    {
      id: "2",
      title: "Waste Collection Schedule",
      description: "What's your preferred time for waste collection?",
      options: [
        { id: "1", text: "Early Morning (6-8 AM)", votes: 120 },
        { id: "2", text: "Late Morning (8-10 AM)", votes: 80 },
        { id: "3", text: "Evening (4-6 PM)", votes: 50 },
      ],
      totalVotes: 250,
      category: "Sanitation",
    },
  ];

  return (
    <PageContainer title="Community Polls">
      <Tabs defaultValue="active">
        <TabsList className="w-full mb-4">
          <TabsTrigger value="active" className="flex-1">Active Polls</TabsTrigger>
          <TabsTrigger value="completed" className="flex-1">Completed</TabsTrigger>
        </TabsList>
        
        <TabsContent value="active">
          {polls.map((poll) => (
            <div 
              key={poll.id} 
              className="mb-4 p-4 rounded-lg border bg-white"
            >
              <div className="flex justify-between items-start">
                <div className="flex items-center gap-2">
                  <Vote size={20} className="text-primary" />
                  <h3 className="font-medium">{poll.title}</h3>
                </div>
                <Badge variant="outline">{poll.category}</Badge>
              </div>
              <p className="mt-2 text-sm text-gray-600">{poll.description}</p>
              
              <div className="mt-4 space-y-3">
                {poll.options.map((option) => (
                  <div key={option.id} className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>{option.text}</span>
                      <span>{Math.round((option.votes / poll.totalVotes) * 100)}%</span>
                    </div>
                    <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-primary" 
                        style={{ width: `${(option.votes / poll.totalVotes) * 100}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-4 text-sm text-gray-500">
                Total votes: {poll.totalVotes}
              </div>
              
              <Button className="mt-4 w-full">Vote Now</Button>
            </div>
          ))}
        </TabsContent>
        
        <TabsContent value="completed">
          <div className="text-center text-gray-500 py-8">
            <PieChart className="mx-auto h-12 w-12 mb-4" />
            <p>No completed polls available</p>
          </div>
        </TabsContent>
      </Tabs>
    </PageContainer>
  );
}
