import React, { useState } from "react";
import { Card } from "@/components/ui/card";
import { PlusCircle } from "lucide-react";
import NewBusinessForm from "./NewBusinessForm";
import BusinessCard from "./BusinessCard";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";

interface Business {
  id: string;
  name: string;
  description: string;
  category: string;
  address: string;
  phone?: string;
  email?: string;
  website?: string;
  hours?: string;
  imageUrls: string[];
}

interface BusinessGridProps {
  businesses?: Business[];
  onLoadMore?: () => void;
}

const BusinessGrid = ({
  businesses = [
    {
      id: "1",
      name: "The New Marches",
      description:
        "Take away food - Quiche, salad, baked potatoes and rolls. Outside catering for all occasions.",
      category: "Food & Beverage",
      address: "Butter Market, Hereford",
      phone: "07898852408",
      email: "mjd9449@gmail.com",
      hours: "Monday - Saturday 8am-3pm",
      imageUrls: [
        "https://czeglfqapjidljvcgwud.supabase.co/storage/v1/object/public/images_for_business_cards//The%20New%20Marches%20dalle%203.png",
      ],
    },
    {
      id: "2",
      name: "Q's Comic Store",
      description:
        "Back Issue comics, graphic novels, comic art. Comic history and valuations.",
      category: "Retail",
      address: "Butter Market, Hereford",
      email: "qcomicstore@outlook.com",
      website: "https://www.facebook.com/qcomicstore/",
      hours: "Open 10am till 5pm",
      imageUrls: [
        "https://czeglfqapjidljvcgwud.supabase.co/storage/v1/object/public/images_for_business_cards//q%20comic%20store%20-%20help%20me%20hereford.webp",
      ],
    },
    {
      id: "3",
      name: "Mailes Bros",
      description:
        "Suppliers of quality pork products, local cheeses, local honey and local free range eggs. Products offered: Sausage, bacon, gammon, cooked meats, pork pies, eggs and cheese",
      category: "Pork Products",
      address: "Butter Market, Hereford",
      phone: "07977140582",
      email: "wazisname@aol.com",
      hours: "Monday - Saturday 8.30am - 5pm",
      imageUrls: [
        "https://czeglfqapjidljvcgwud.supabase.co/storage/v1/object/public/images_for_business_cards//Mailes%20Bros%20-%20Butchers%20dalle%203.png",
      ],
    },
    {
      id: "4",
      name: "Hillmans Florist",
      description:
        "Hillmans offer a wide range of fresh flowers, balloons, greeting cards and much more. Floristry for all occasions including weddings and funerals.",
      category: "Florist",
      address: "Butter Market, Hereford",
      phone: "01432 276098",
      email: "hillmansflorist@gmail.com",
      website: "www.hilmansflorist.co.uk",
      hours: "Monday - Saturday 8.30am - 5pm",
      imageUrls: [
        "https://czeglfqapjidljvcgwud.supabase.co/storage/v1/object/public/images_for_business_cards//Hillmans%20florist%20dalle%203.png",
      ],
    },
    {
      id: "5",
      name: "Nel Bubble Tea",
      description: "A huge range of bubble tea & bubble waffles",
      category: "Cafe",
      address: "Butter Market, Hereford",
      phone: "07478 679805",
      website: "https://www.nelbubbletea.com",
      hours: "Tuesday-Saturday: 11am-5pm, Monday & Sunday: Closed",
      imageUrls: [
        "https://czeglfqapjidljvcgwud.supabase.co/storage/v1/object/public/images_for_business_cards//Nell%20Bubble%20Tea.png",
      ],
    },
  ],
  onLoadMore = () => {},
}: BusinessGridProps) => {
  const [showNewBusinessForm, setShowNewBusinessForm] = useState(false);
  const [expandedCardId, setExpandedCardId] = useState<string | null>(null);

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold mb-6">Featured Businesses</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {businesses.map((business) => (
          <BusinessCard
            key={business.id}
            {...business}
            isExpanded={expandedCardId === business.id}
            onExpand={() => setExpandedCardId(business.id)}
          />
        ))}
        <Card
          className="w-[350px] h-[450px] bg-white hover:shadow-lg cursor-pointer rounded-lg overflow-hidden border border-border flex flex-col items-center justify-center"
          onClick={() => setShowNewBusinessForm(true)}
        >
          <PlusCircle className="h-16 w-16 text-muted-foreground mb-4" />
          <h3 className="text-xl font-semibold">Add Your Business</h3>
          <p className="text-muted-foreground text-center mt-2 px-4">
            Join the Hereford Butter Market community
          </p>
        </Card>
      </div>

      <NewBusinessForm
        open={showNewBusinessForm}
        onOpenChange={setShowNewBusinessForm}
      />
    </div>
  );
};

export default BusinessGrid;
