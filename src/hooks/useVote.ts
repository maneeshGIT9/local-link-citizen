
import { useState } from 'react';
import { createClient } from '@supabase/supabase-js';
import { toast } from 'sonner';

const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL!, 
  import.meta.env.VITE_SUPABASE_ANON_KEY!
);

export const useVote = () => {
  const [isVoting, setIsVoting] = useState(false);

  const castVote = async (pollId: string, optionId: string) => {
    setIsVoting(true);
    try {
      // First, check if user has already voted in this poll
      const { data: existingVote, error: checkError } = await supabase
        .from('votes')
        .select('*')
        .eq('poll_id', pollId)
        .single();

      if (checkError && checkError.code !== 'PGRST116') {
        throw checkError;
      }

      if (existingVote) {
        // If user has already voted, update the existing vote
        const { error: updateError } = await supabase
          .from('votes')
          .update({ option_id: optionId })
          .eq('poll_id', pollId)
          .eq('user_id', supabase.auth.getUser().data.user?.id);

        if (updateError) throw updateError;
        toast.success('Vote updated successfully');
      } else {
        // If no existing vote, insert a new vote
        const { error: insertError } = await supabase
          .from('votes')
          .insert({ 
            poll_id: pollId, 
            option_id: optionId,
            user_id: supabase.auth.getUser().data.user?.id 
          });

        if (insertError) throw insertError;
        toast.success('Vote cast successfully');
      }
    } catch (error) {
      console.error('Error voting:', error);
      toast.error('Failed to cast vote');
    } finally {
      setIsVoting(false);
    }
  };

  return { castVote, isVoting };
};
