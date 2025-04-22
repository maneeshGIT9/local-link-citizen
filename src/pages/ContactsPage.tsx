
import { useState } from "react";
import { PageContainer } from "@/components/common/PageContainer";
import { ContactCard, type Contact } from "@/components/contacts/ContactCard";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Search } from "lucide-react";

export default function ContactsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  
  // Mock data - in a real app, this would come from an API
  const contacts: Contact[] = [
    {
      id: "1",
      name: "Rajesh Kumar",
      role: "Water Supply Supervisor",
      department: "Water Works Department",
      phone: "+91 9876543210",
      email: "rajesh.kumar@localgovt.org",
      area: "Sectors 1-5",
    },
    {
      id: "2",
      name: "Priya Singh",
      role: "Electricity Line Manager",
      department: "Electricity Board",
      phone: "+91 9876543211",
      email: "priya.singh@localgovt.org",
      area: "Sectors 6-10",
    },
    {
      id: "3",
      name: "Amit Patel",
      role: "Sanitation Inspector",
      department: "Municipal Corporation",
      phone: "+91 9876543212",
      email: "amit.patel@localgovt.org",
      area: "Central Area",
    },
    {
      id: "4",
      name: "Sanjay Verma",
      role: "Road Maintenance Officer",
      department: "Public Works Department",
      phone: "+91 9876543213",
      email: "sanjay.verma@localgovt.org",
    },
    {
      id: "5",
      name: "Deepa Sharma",
      role: "Property Tax Officer",
      department: "Revenue Department",
      phone: "+91 9876543214",
      email: "deepa.sharma@localgovt.org",
    },
  ];

  const filteredContacts = contacts.filter(
    (contact) =>
      contact.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      contact.role.toLowerCase().includes(searchQuery.toLowerCase()) ||
      contact.department.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const utilityContacts = contacts.filter(
    (contact) =>
      contact.department.includes("Water") ||
      contact.department.includes("Electricity")
  );

  const municipalContacts = contacts.filter(
    (contact) =>
      contact.department.includes("Municipal") ||
      contact.department.includes("Public Works") ||
      contact.department.includes("Revenue")
  );

  return (
    <PageContainer title="Utility Contacts">
      <div className="mb-4 relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
        <Input
          placeholder="Search contacts..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="pl-10"
        />
      </div>
      
      <Tabs defaultValue="all">
        <TabsList className="w-full mb-4">
          <TabsTrigger value="all" className="flex-1">All</TabsTrigger>
          <TabsTrigger value="utility" className="flex-1">Utility</TabsTrigger>
          <TabsTrigger value="municipal" className="flex-1">Municipal</TabsTrigger>
        </TabsList>
        
        <TabsContent value="all">
          {filteredContacts.map((contact) => (
            <ContactCard key={contact.id} contact={contact} />
          ))}
          
          {filteredContacts.length === 0 && (
            <div className="text-center py-8">
              <p className="text-gray-500">No contacts found matching "{searchQuery}"</p>
            </div>
          )}
        </TabsContent>
        
        <TabsContent value="utility">
          {utilityContacts
            .filter(
              (contact) =>
                contact.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                contact.role.toLowerCase().includes(searchQuery.toLowerCase()) ||
                contact.department.toLowerCase().includes(searchQuery.toLowerCase())
            )
            .map((contact) => (
              <ContactCard key={contact.id} contact={contact} />
            ))}
        </TabsContent>
        
        <TabsContent value="municipal">
          {municipalContacts
            .filter(
              (contact) =>
                contact.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                contact.role.toLowerCase().includes(searchQuery.toLowerCase()) ||
                contact.department.toLowerCase().includes(searchQuery.toLowerCase())
            )
            .map((contact) => (
              <ContactCard key={contact.id} contact={contact} />
            ))}
        </TabsContent>
      </Tabs>
    </PageContainer>
  );
}
