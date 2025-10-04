import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Sparkles, ArrowLeftRight } from "lucide-react";

interface DirectAnswerCardProps {
  answer: string;
  onCompare?: () => void;
}

export const DirectAnswerCard = ({ answer, onCompare }: DirectAnswerCardProps) => {
  return (
    <Card className="bg-card border-border glow-card mb-6">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Sparkles className="h-5 w-5 text-europa" />
            <CardTitle className="text-xl">Direct Answer</CardTitle>
          </div>
          {onCompare && (
            <Button 
              variant="outline" 
              size="sm" 
              onClick={onCompare}
              className="gap-2"
            >
              <ArrowLeftRight className="h-4 w-4" />
              Compare with ChatGPT
            </Button>
          )}
        </div>
        <CardDescription>AI-generated synthesis from research papers</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-foreground leading-relaxed">{answer}</p>
      </CardContent>
    </Card>
  );
};