import React from "react";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Link } from "react-router-dom";
import AuthNav from "../auth/AuthNav";

interface HeaderProps {
  onSearch: (term: string) => void;
  onCategoryChange: (category: string) => void;
  onSort: (option: string) => void;
}

const Header = ({ onSearch, onCategoryChange, onSort }: HeaderProps) => {
  return (
    <header className="bg-white border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-8">
            <Link to="/" className="text-2xl font-bold">
              Hereford Butter Market
            </Link>
            <nav className="hidden md:flex items-center space-x-6">
              <Link
                to="/whats-here"
                className="text-sm font-medium text-muted-foreground hover:text-foreground"
              >
                What's Here
              </Link>
              <Link
                to="/whats-on"
                className="text-sm font-medium text-muted-foreground hover:text-foreground"
              >
                What's On
              </Link>
              <Link
                to="/whats-nearby"
                className="text-sm font-medium text-muted-foreground hover:text-foreground"
              >
                What's Nearby
              </Link>
            </nav>
          </div>

          <div className="flex flex-1 max-w-md mx-4">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                type="search"
                placeholder="Search businesses..."
                className="w-full pl-10"
                onChange={(e) => onSearch(e.target.value)}
              />
            </div>
          </div>

          <div className="flex items-center gap-4">
            <Select onValueChange={onCategoryChange}>
              <SelectTrigger className="w-[160px]">
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
                <SelectItem value="food">Food & Beverage</SelectItem>
                <SelectItem value="retail">Retail</SelectItem>
                <SelectItem value="services">Services</SelectItem>
              </SelectContent>
            </Select>

            <Select onValueChange={onSort}>
              <SelectTrigger className="w-[160px]">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="name">Name A-Z</SelectItem>
                <SelectItem value="category">Category</SelectItem>
                <SelectItem value="newest">Newest First</SelectItem>
              </SelectContent>
            </Select>

            <AuthNav />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
