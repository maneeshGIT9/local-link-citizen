
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { FormControl, FormField, FormItem, FormLabel, FormMessage, Form } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const loginSchema = z.object({
  surveyNumber: z.string().min(1, { message: "Survey number is required" }),
  password: z.string().min(1, { message: "Password is required" }),
});

type LoginFormValues = z.infer<typeof loginSchema>;

export function LoginForm() {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const form = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      surveyNumber: "",
      password: "",
    },
  });
  
  const onSubmit = async (values: LoginFormValues) => {
    setIsSubmitting(true);
    
    try {
      // In a real app, this would be an API call to authenticate the user
      console.log("Login data:", values);
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Store auth token (in a real app)
      localStorage.setItem("isLoggedIn", "true");
      
      // Redirect to home
      navigate("/");
    } catch (error) {
      console.error("Login failed:", error);
      alert("Login failed. Please check your credentials and try again.");
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="surveyNumber"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Survey Number</FormLabel>
              <FormControl>
                <Input placeholder="Enter property survey number" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input placeholder="Enter your password" type="password" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <div className="text-right">
          <a href="#" className="text-sm text-civic-primary hover:underline">
            Forgot Password?
          </a>
        </div>
        
        <Button 
          type="submit" 
          className="w-full bg-civic-primary hover:bg-civic-primary/90"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Logging in..." : "Login"}
        </Button>
      </form>
    </Form>
  );
}
