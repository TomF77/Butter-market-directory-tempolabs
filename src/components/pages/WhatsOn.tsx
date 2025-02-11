import React from "react";
import Header from "../BusinessDirectory/Header";
import Footer from "../Footer";
import { Card } from "@/components/ui/card";

const WhatsOn = () => {
  const events = [
    {
      id: 1,
      title: "Local Artisan Market",
      date: "2024-02-15",
      time: "10:00 AM - 4:00 PM",
      description:
        "A showcase of local artisans and craftspeople selling unique handmade items.",
      location: "Butter Market Main Hall",
    },
    {
      id: 2,
      title: "Food Festival Weekend",
      date: "2024-02-24",
      time: "11:00 AM - 6:00 PM",
      description:
        "Sample delicious local food and beverages from our vendors.",
      location: "Throughout Butter Market",
    },
    {
      id: 3,
      title: "Live Music Evening",
      date: "2024-03-02",
      time: "6:00 PM - 9:00 PM",
      description: "Enjoy live performances from local musicians.",
      location: "Butter Market Courtyard",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header
        onSearch={() => {}}
        onCategoryChange={() => {}}
        onSort={() => {}}
      />
      <main className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <div className="space-y-8">
          <section>
            <h1 className="text-4xl font-bold mb-4">What's On</h1>
            <p className="text-lg text-muted-foreground mb-8">
              Upcoming events and activities at Hereford Butter Market
            </p>
          </section>

          <section className="space-y-6">
            <h2 className="text-2xl font-semibold">Upcoming Events</h2>
            <div className="grid gap-6">
              {events.map((event) => (
                <Card key={event.id} className="p-6">
                  <div className="flex flex-col md:flex-row justify-between gap-4">
                    <div>
                      <h3 className="text-xl font-semibold mb-2">
                        {event.title}
                      </h3>
                      <p className="text-muted-foreground mb-4">
                        {event.description}
                      </p>
                      <p className="text-sm">{event.location}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold">
                        {new Date(event.date).toLocaleDateString()}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {event.time}
                      </p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default WhatsOn;
