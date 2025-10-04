import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { SearchBar } from "@/components/SearchBar";
import { FilterChip } from "@/components/FilterChip";
import { Logo } from "@/components/Logo";

const Index = () => {
  const navigate = useNavigate();
  const [activeFilter, setActiveFilter] = useState<string | null>(null);

  const filters = [
    "Mars habitability",
    "Europa ocean life",
    "Lunar radiation"
  ];

  const handleSearch = (query: string) => {
    if (query.trim()) {
      navigate(`/search?q=${encodeURIComponent(query)}`);
    }
  };

  const handleFilterClick = (filter: string) => {
    setActiveFilter(filter);
    handleSearch(filter);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4">
      <div className="w-full max-w-3xl space-y-8 text-center">
        <div className="flex justify-center mb-12 animate-fade-in">
          <Logo size="lg" />
        </div>

        <div className="space-y-6 animate-fade-in">
          <SearchBar onSearch={handleSearch} />
          
          <div className="flex flex-wrap justify-center gap-3">
            {filters.map((filter) => (
              <FilterChip
                key={filter}
                label={filter}
                active={activeFilter === filter}
                onClick={() => handleFilterClick(filter)}
              />
            ))}
          </div>
        </div>

        <p className="text-muted-foreground text-sm animate-fade-in">
          Exploring extraterrestrial habitability through advanced research intelligence.
        </p>
      </div>
    </div>
  );
};

export default Index;
