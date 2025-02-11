import React from "react";
import Header from "../BusinessDirectory/Header";
import Footer from "../Footer";
import { Card } from "@/components/ui/card";

const WhatsNearby = () => {
  const attractions = [
    {
      id: 1,
      name: "Hereford FC",
      description:
        "Home of the Bulls, Hereford FC is the city's premier football club.",
      distance: "0.3 miles",
      category: "Sports",
    },
    {
      id: 2,
      name: "Old Market Shopping Centre",
      description:
        "Modern shopping complex with popular retail stores and restaurants.",
      distance: "0.2 miles",
      category: "Shopping",
    },
    {
      id: 3,
      name: "Hereford Cathedral",
      description:
        "Historic cathedral home to the Mappa Mundi and chained library.",
      distance: "0.4 miles",
      category: "Attractions",
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
            <h1 className="text-4xl font-bold mb-4">What's Nearby</h1>
            <p className="text-lg text-muted-foreground mb-8">
              Discover attractions and places of interest near Hereford Butter
              Market
            </p>
          </section>

          <section className="space-y-6">
            <h2 className="text-2xl font-semibold">Local Attractions</h2>
            <div className="grid gap-6">
              {attractions.map((attraction) => (
                <Card key={attraction.id} className="p-6">
                  <div className="flex justify-between gap-4">
                    <div>
                      <h3 className="text-xl font-semibold mb-2">
                        {attraction.name}
                      </h3>
                      <p className="text-muted-foreground mb-4">
                        {attraction.description}
                      </p>
                      <p className="text-sm">{attraction.category}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-muted-foreground">
                        {attraction.distance}
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

export default WhatsNearby;
