import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Sparkles, MessageSquare } from "lucide-react";

interface ComparisonDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  lunaAnswer: string;
  chatGPTAnswer?: string;
}

export const ComparisonDialog = ({ open, onOpenChange, lunaAnswer, chatGPTAnswer = "ChatGPT would provide a more generalized response here, drawing from its training data rather than specific research papers. The response might lack the depth and citations that Luna provides from the academic database." }: ComparisonDialogProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-6xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl">AI Response Comparison</DialogTitle>
          <DialogDescription>
            Compare Luna's research-based answer with ChatGPT's general knowledge
          </DialogDescription>
        </DialogHeader>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
          {/* Luna's Answer */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 pb-3 border-b border-europa/30">
              <Sparkles className="h-5 w-5 text-europa" />
              <h3 className="font-semibold text-lg">Luna (Research-Based)</h3>
            </div>
            <div className="bg-card/50 border border-border rounded-lg p-4">
              <p className="text-foreground/90 leading-relaxed">{lunaAnswer}</p>
            </div>
            <div className="text-sm text-muted-foreground">
              ✓ Sourced from academic papers<br />
              ✓ Includes research citations<br />
              ✓ Domain-specific accuracy
            </div>
          </div>

          {/* ChatGPT's Answer */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 pb-3 border-b border-muted/30">
              <MessageSquare className="h-5 w-5 text-muted-foreground" />
              <h3 className="font-semibold text-lg">ChatGPT (General Knowledge)</h3>
            </div>
            <div className="bg-muted/20 border border-border rounded-lg p-4">
              <p className="text-foreground/70 leading-relaxed">{chatGPTAnswer}</p>
            </div>
            <div className="text-sm text-muted-foreground">
              • General training data<br />
              • Broader but less specific<br />
              • No direct citations
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};