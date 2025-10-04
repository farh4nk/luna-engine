import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, FileText, MessageSquare, Download } from "lucide-react";

interface ArticleCardProps {
  title: string;
  authors: string[];
  journal: string;
  year: number;
  comments: number;
  downloads: number;
  onExtract?: () => void;
  onViewPaper?: () => void;
}

export const ArticleCard = ({
  title,
  authors,
  journal,
  year,
  comments,
  downloads,
  onExtract,
  onViewPaper
}: ArticleCardProps) => {
  return (
    <Card className="bg-card border-border hover:border-border/60 transition-all duration-300 glow-hover">
      <CardContent className="p-6">
        <h3 className="text-lg font-semibold text-foreground mb-3 leading-tight">
          {title}
        </h3>
        
        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
          <span>{authors.join(', ')}</span>
        </div>
        
        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
          <div className="flex items-center gap-1">
            <Calendar className="h-4 w-4" />
            <span>{year}</span>
          </div>
          <span>{journal}</span>
        </div>
        
        <div className="flex items-center justify-between">
          <div className="flex gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-1">
              <MessageSquare className="h-4 w-4" />
              <span>{comments}</span>
            </div>
            <div className="flex items-center gap-1">
              <Download className="h-4 w-4" />
              <span>{downloads}</span>
            </div>
          </div>
          
          <div className="flex gap-2">
            <Button
              variant="secondary"
              size="sm"
              onClick={onExtract}
              className="text-xs"
            >
              <FileText className="h-3 w-3 mr-1" />
              Extract Data
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={onViewPaper}
              className="text-xs"
            >
              View Paper
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
