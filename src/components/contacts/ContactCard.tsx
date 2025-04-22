
import { Phone, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

export interface Contact {
  id: string;
  name: string;
  role: string;
  department: string;
  phone: string;
  email: string;
  area?: string;
}

interface ContactCardProps {
  contact: Contact;
}

export function ContactCard({ contact }: ContactCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-sm p-4 mb-4">
      <div className="flex justify-between items-start">
        <div>
          <h3 className="font-medium">{contact.name}</h3>
          <p className="text-sm text-civic-primary">{contact.role}</p>
          <p className="text-xs text-gray-500 mt-1">{contact.department}</p>
        </div>
        <Button 
          size="sm" 
          variant="outline"
          className="text-civic-primary border-civic-primary hover:bg-civic-primary/10"
        >
          <Phone size={16} className="mr-1" />
          Call
        </Button>
      </div>
      
      {contact.area && (
        <div className="flex items-center mt-3 text-xs text-gray-500">
          <MapPin size={14} className="mr-1" />
          <span>Area: {contact.area}</span>
        </div>
      )}
      
      <div className="mt-3 space-y-2">
        <div className="flex items-center text-sm">
          <Phone size={16} className="mr-2 text-gray-400" />
          <span>{contact.phone}</span>
        </div>
        <div className="flex items-center text-sm">
          <Mail size={16} className="mr-2 text-gray-400" />
          <span>{contact.email}</span>
        </div>
      </div>
    </div>
  );
}
