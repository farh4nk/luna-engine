import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

interface SearchBarProps {
  placeholder?: string;
  onSearch?: (query: string) => void;
  defaultValue?: string;
  className?: string;
}

export const SearchBar = ({ 
  placeholder = "Search for extraterrestrial habitability research...",
  onSearch,
  defaultValue = "",
  className = ""
}: SearchBarProps) => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const query = formData.get('search') as string;
    if (onSearch) {
      onSearch(query);
    }
  };

  return (
    <form onSubmit={handleSubmit} className={`relative ${className}`}>
      <div className="relative flex items-center">
        <Search className="absolute left-4 h-5 w-5 text-muted-foreground" />
        <Input
          name="search"
          type="text"
          placeholder={placeholder}
          defaultValue={defaultValue}
          className="pl-12 pr-24 h-14 bg-card border-border text-foreground placeholder:text-muted-foreground rounded-xl glow-hover"
        />
        <Button 
          type="submit"
          className="absolute right-2 h-10 rounded-lg bg-secondary hover:bg-secondary/80"
        >
          Search
        </Button>
      </div>
    </form>
  );
};
