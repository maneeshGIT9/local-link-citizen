
import { PageContainer } from "@/components/common/PageContainer";
import { IssueForm } from "@/components/reports/IssueForm";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function NewReportPage() {
  const navigate = useNavigate();
  
  return (
    <PageContainer title="Report an Issue">
      <Button 
        variant="ghost" 
        size="sm" 
        className="mb-4 pl-0"
        onClick={() => navigate("/report")}
      >
        <ArrowLeft size={16} className="mr-1" />
        Back to Issues
      </Button>
      
      <div className="bg-white rounded-lg shadow-sm p-4">
        <IssueForm />
      </div>
    </PageContainer>
  );
}
