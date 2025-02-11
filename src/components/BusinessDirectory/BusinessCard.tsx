import React from "react";
import { Card } from "@/components/ui/card";
import { Mail, Phone, Globe, Clock } from "lucide-react";

interface BusinessCardProps {
  id?: string;
  name?: string;
  description?: string;
  category?: string;
  address?: string;
  phone?: string;
  email?: string;
  website?: string;
  hours?: string;
  imageUrls?: string[];
  isExpanded?: boolean;
  onExpand?: () => void;
}

const BusinessCard = ({
  id = "1",
  name = "Sample Business",
  description = "A sample business description that showcases what this business offers to its customers.",
  category = "General",
  address = "123 Market Street",
  phone,
  email,
  website,
  hours,
  imageUrls = [
    "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800",
  ],
  isExpanded = false,
  onExpand = () => {},
}: BusinessCardProps) => {
  return (
    <Card
      className={`w-[350px] bg-white hover:shadow-lg cursor-pointer rounded-lg overflow-hidden border border-border transition-all duration-200 ${isExpanded ? "h-[450px]" : "h-[400px]"}`}
      onClick={onExpand}
    >
      <div className="relative h-48 w-full overflow-hidden">
        <img
          src={imageUrls[0]}
          alt={name}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full text-sm font-medium">
          {category}
        </div>
      </div>
      <div className="p-6 space-y-4">
        <div>
          <h3 className="text-xl font-semibold mb-2">{name}</h3>
          <p className="text-muted-foreground text-sm line-clamp-2">
            {description}
          </p>
        </div>

        {isExpanded && (
          <div className="space-y-2 text-sm">
            {hours && (
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-muted-foreground" />
                <span>{hours}</span>
              </div>
            )}
            {phone && (
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-muted-foreground" />
                <a href={`tel:${phone}`} className="hover:underline">
                  {phone}
                </a>
              </div>
            )}
            {email && (
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-muted-foreground" />
                <a href={`mailto:${email}`} className="hover:underline">
                  {email}
                </a>
              </div>
            )}
            {website && (
              <div className="flex items-center gap-2">
                <Globe className="h-4 w-4 text-muted-foreground" />
                <a
                  href={
                    website.startsWith("http") ? website : `https://${website}`
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  {website}
                </a>
              </div>
            )}
          </div>
        )}
      </div>
    </Card>
  );
};

export default BusinessCard;
