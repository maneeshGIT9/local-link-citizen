
import { PageContainer } from "@/components/common/PageContainer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { PieChart, Vote } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";
import { useVote } from "@/hooks/useVote";

// Define interfaces for our data
interface PollOption {
  id: string;
  text: string;
  votes: number;
}

interface Poll {
  id: string;
  title: string;
  description: string;
  options: PollOption[];
  totalVotes: number;
  category: string;
  userVote?: string; // Track user's current vote
}

export default function PollsPage() {
  const [polls, setPolls] = useState<Poll[]>([]);
  const { castVote, isVoting } = useVote();
  const supabase = createClient(
    import.meta.env.VITE_SUPABASE_URL!, 
    import.meta.env.VITE_SUPABASE_ANON_KEY!
  );

  useEffect(() => {
    const fetchPolls = async () => {
      // Fetch polls with their options and vote counts
      const { data: pollsData, error: pollsError } = await supabase
        .from('polls')
        .select(`
          id, 
          title, 
          description, 
          category,
          poll_options(id, text),
          votes(option_id)
        `);

      if (pollsError) {
        console.error('Error fetching polls:', pollsError);
        return;
      }

      // Fetch user's current votes
      const { data: userVotes, error: votesError } = await supabase
        .from('votes')
        .select('poll_id, option_id');

      if (votesError) {
        console.error('Error fetching user votes:', votesError);
        return;
      }

      // Transform the data
      const transformedPolls: Poll[] = pollsData.map(poll => ({
        id: poll.id,
        title: poll.title,
        description: poll.description,
        category: poll.category,
        options: poll.poll_options.map(option => ({
          id: option.id,
          text: option.text,
          votes: poll.votes.filter(vote => vote.option_id === option.id).length
        })),
        totalVotes: poll.votes.length,
        userVote: userVotes?.find(v => v.poll_id === poll.id)?.option_id
      }));

      setPolls(transformedPolls);
    };

    fetchPolls();
  }, []);

  const handleVote = async (pollId: string, optionId: string) => {
    await castVote(pollId, optionId);
    // Refetch polls to update vote counts
    // In a real app, you might want to optimistically update the UI
  };

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
                      <span>{poll.totalVotes > 0 
                        ? Math.round((option.votes / poll.totalVotes) * 100) 
                        : 0}%</span>
                    </div>
                    <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                      <div 
                        className={`h-full ${
                          poll.userVote === option.id 
                            ? 'bg-green-500' 
                            : 'bg-primary'
                        }`} 
                        style={{ 
                          width: poll.totalVotes > 0 
                            ? `${(option.votes / poll.totalVotes) * 100}%` 
                            : '0%' 
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-4 text-sm text-gray-500">
                Total votes: {poll.totalVotes}
              </div>
              
              <div className="mt-4 space-y-2">
                {poll.options.map((option) => (
                  <Button 
                    key={option.id}
                    onClick={() => handleVote(poll.id, option.id)}
                    disabled={isVoting}
                    variant={poll.userVote === option.id ? 'default' : 'outline'}
                    className="w-full"
                  >
                    {poll.userVote === option.id ? 'Voted' : 'Vote'} for {option.text}
                  </Button>
                ))}
              </div>
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
