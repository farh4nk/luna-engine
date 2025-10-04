import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText } from "lucide-react";

interface ExtractedSummaryProps {
  title: string;
  summary: string;
}

export const ExtractedSummary = ({ title, summary }: ExtractedSummaryProps) => {
  return (
    <Card className="bg-card border-border animate-fade-in">
      <CardHeader>
        <div className="flex items-center gap-2">
          <FileText className="h-5 w-5 text-moon" />
          <CardTitle className="text-lg">{title}</CardTitle>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-foreground leading-relaxed">{summary}</p>
      </CardContent>
    </Card>
  );
};
