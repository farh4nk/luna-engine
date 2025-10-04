import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Sparkles } from "lucide-react";

interface DirectAnswerCardProps {
  answer: string;
}

export const DirectAnswerCard = ({ answer }: DirectAnswerCardProps) => {
  return (
    <Card className="bg-card border-border glow-card mb-6">
      <CardHeader>
        <div className="flex items-center gap-2">
          <Sparkles className="h-5 w-5 text-europa" />
          <CardTitle className="text-xl">Direct Answer</CardTitle>
        </div>
        <CardDescription>AI-generated synthesis from research papers</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-foreground leading-relaxed">{answer}</p>
      </CardContent>
    </Card>
  );
};
