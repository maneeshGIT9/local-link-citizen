
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { poll } from "lucide-react";

const Polls = () => {
  const polls = [
    {
      id: 1,
      title: "Street Light Maintenance",
      description: "Should we increase the frequency of street light maintenance?",
      votes: { yes: 156, no: 43 },
    },
    {
      id: 2,
      title: "Park Development",
      description: "Do you support the development of a new park in sector 7?",
      votes: { yes: 289, no: 12 },
    },
  ];

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="flex items-center gap-2 mb-6">
        <poll className="h-6 w-6 text-[#1D8745]" />
        <h1 className="text-2xl font-bold">Community Polls</h1>
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        {polls.map((poll) => (
          <Card key={poll.id}>
            <CardHeader>
              <CardTitle>{poll.title}</CardTitle>
              <CardDescription>{poll.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <Button 
                  className="w-full bg-[#1D8745] hover:bg-[#156834]"
                  onClick={() => console.log("Voted yes")}
                >
                  Yes ({poll.votes.yes})
                </Button>
                <Button 
                  variant="outline"
                  className="w-full border-[#1D8745] text-[#1D8745]"
                  onClick={() => console.log("Voted no")}
                >
                  No ({poll.votes.no})
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Polls;
