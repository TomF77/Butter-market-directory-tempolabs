import React from "react";
import { Card } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";

interface HistoryEntry {
  id: string;
  date: string;
  action: string;
  businessName: string;
  details: string;
}

const History = () => {
  // This would typically come from your database
  const historyEntries: HistoryEntry[] = [
    {
      id: "1",
      date: "2024-01-20",
      action: "New Business Added",
      businessName: "The New Marches",
      details: "Business profile created with basic information",
    },
    {
      id: "2",
      date: "2024-01-19",
      action: "Profile Updated",
      businessName: "Q's Comic Store",
      details: "Updated business hours and contact information",
    },
  ];

  return (
    <div className="max-w-4xl mx-auto py-8 px-4">
      <h1 className="text-2xl font-bold mb-6">Recent Activity</h1>
      <ScrollArea className="h-[600px] w-full rounded-md border p-4">
        <div className="space-y-4">
          {historyEntries.map((entry) => (
            <Card key={entry.id} className="p-4">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-semibold">{entry.action}</h3>
                  <p className="text-sm text-muted-foreground">
                    {entry.businessName}
                  </p>
                  <p className="text-sm mt-2">{entry.details}</p>
                </div>
                <time className="text-sm text-muted-foreground">
                  {entry.date}
                </time>
              </div>
            </Card>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
};

export default History;
