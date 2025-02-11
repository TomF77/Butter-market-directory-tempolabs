import React from "react";
import Header from "../BusinessDirectory/Header";
import Footer from "../Footer";

const WhatsHere = () => {
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
            <h1 className="text-4xl font-bold mb-4">What's Here</h1>
            <p className="text-lg text-muted-foreground mb-8">
              Discover the vibrant community of businesses at Hereford Butter
              Market
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">About the Butter Market</h2>
            <p className="text-muted-foreground">
              The Hereford Butter Market is a historic indoor market located in
              the heart of Hereford. Dating back to the 1860s, it has been a
              cornerstone of local commerce and community life.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">Business Categories</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  name: "Food & Beverage",
                  description:
                    "Local cafes, food stalls, and specialty food shops",
                  count: 12,
                },
                {
                  name: "Retail",
                  description:
                    "Unique shops offering various goods and products",
                  count: 15,
                },
                {
                  name: "Services",
                  description: "Professional and personal services",
                  count: 8,
                },
              ].map((category) => (
                <div
                  key={category.name}
                  className="p-6 bg-card rounded-lg border"
                >
                  <h3 className="text-xl font-semibold mb-2">
                    {category.name}
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    {category.description}
                  </p>
                  <p className="text-sm">{category.count} businesses</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default WhatsHere;
