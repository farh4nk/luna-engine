import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { SearchBar } from "@/components/SearchBar";
import { FilterChip } from "@/components/FilterChip";
import { Logo } from "@/components/Logo";

const Index = () => {
  // Hooks
  const navigate = useNavigate();
  const [activeFilter, setActiveFilter] = useState<string | null>(null);

  // These should be relevant to current news but we could 
  // hard code values for the presentation
  const filters = [
    "Mars habitability",
    "Europa ocean life",
    "Lunar radiation"
  ];

  const handleSearch = (query: string) => {
    if (query.trim()) { // ensure it's not empty
      // Handles route switching without reloading page everytime (useNavigate hook)
      navigate(`/search?q=${encodeURIComponent(query)}`); 
    }
  };

  const handleFilterClick = (filter: string) => {
    setActiveFilter(filter);
    handleSearch(filter);
  };
  
  // Generate stars
  const stars = Array.from({ length: 100 }, (_, i) => ({
    id: i,
    size: Math.random() * 2 + 0.5,
    top: Math.random() * 100,
    left: Math.random() * 100,
    duration: Math.random() * 3 + 2,
    delay: Math.random() * 3,
  }));

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 relative">
      {/* Starry Background */}
      <div className="starry-background">
        {stars.map((star) => (
          <div
            key={star.id}
            className="star"
            style={{
              width: `${star.size}px`,
              height: `${star.size}px`,
              top: `${star.top}%`,
              left: `${star.left}%`,
              animationDuration: `${star.duration}s`,
              animationDelay: `${star.delay}s`,
            }}
          />
        ))}
      </div>

      <div className="w-full max-w-3xl space-y-8 text-center relative z-10">
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
