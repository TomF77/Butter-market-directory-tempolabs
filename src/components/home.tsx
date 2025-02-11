import React, { useState } from "react";
import Header from "./BusinessDirectory/Header";
import BusinessGrid from "./BusinessDirectory/BusinessGrid";
import Footer from "./Footer";

const Home = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [sortOption, setSortOption] = useState("");

  const handleSearch = (term: string) => {
    setSearchTerm(term);
  };

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
  };

  const handleSort = (option: string) => {
    setSortOption(option);
  };

  const handleLoadMore = () => {
    // Implement load more functionality
  };

  return (
    <div className="min-h-screen bg-background">
      <Header
        onSearch={handleSearch}
        onCategoryChange={handleCategoryChange}
        onSort={handleSort}
      />
      <main className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <BusinessGrid onLoadMore={handleLoadMore} />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
