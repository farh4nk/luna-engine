import { cn } from "@/lib/utils";

interface FilterChipProps {
  label: string;
  active?: boolean;
  onClick?: () => void;
  className?: string;
}

export const FilterChip = ({ label, active = false, onClick, className }: FilterChipProps) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        "px-6 py-2 rounded-full text-sm font-medium transition-all duration-200",
        "bg-secondary text-secondary-foreground",
        "hover:bg-secondary/80 hover-scale",
        active && "bg-accent text-accent-foreground ring-2 ring-ring",
        className
      )}
    >
      {label}
    </button>
  );
};
