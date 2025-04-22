
import { ReactNode } from "react";
import { AppHeader } from "./AppHeader";
import { BottomNavigation } from "./BottomNavigation";

interface PageContainerProps {
  children: ReactNode;
  title: string;
  showHeader?: boolean;
  showNavigation?: boolean;
}

export function PageContainer({ 
  children, 
  title, 
  showHeader = true, 
  showNavigation = true 
}: PageContainerProps) {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {showHeader && <AppHeader title={title} />}
      <main className="flex-1 pt-16 pb-20 px-4">
        <h2 className="text-2xl font-bold mb-4 mt-2">{title}</h2>
        {children}
      </main>
      {showNavigation && <BottomNavigation />}
    </div>
  );
}
