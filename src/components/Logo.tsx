import lunaLogo from "@/assets/luna-logo.png";

interface LogoProps {
  size?: "sm" | "md" | "lg";
  showText?: boolean;
}

export const Logo = ({ size = "md", showText = true }: LogoProps) => {
  const sizeClasses = {
    sm: "h-8 w-8",
    md: "h-12 w-12",
    lg: "h-20 w-20"
  };
  
  const textSizeClasses = {
    sm: "text-xl",
    md: "text-2xl",
    lg: "text-4xl"
  };

  return (
    <div className="flex items-center gap-3">
      <img 
        src={lunaLogo} 
        alt="Luna" 
        className={`${sizeClasses[size]} rounded-full`}
      />
      {showText && (
        <h1 className={`${textSizeClasses[size]} font-bold text-foreground tracking-tight`}>
          Luna
        </h1>
      )}
    </div>
  );
};
