import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";

interface ResearchData {
  planet: string;
  papers: number;
  color: string;
}

interface Researcher {
  name: string;
  papers: number;
}

interface InsightsPanelProps {
  keyTopics: string[];
  researchData: ResearchData[];
  researchers: Researcher[];
}

export const InsightsPanel = ({ keyTopics, researchData, researchers }: InsightsPanelProps) => {
  const maxPapers = Math.max(...researchData.map(d => d.papers));
  
  return (
    <Card className="bg-card border-border sticky top-4">
      <CardHeader>
        <CardTitle className="text-xl">Research Insights</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <Tabs defaultValue="overview" className="w-full">
          <TabsList className="w-full bg-secondary">
            <TabsTrigger value="overview" className="flex-1">Overview</TabsTrigger>
            <TabsTrigger value="trends" className="flex-1">Trends</TabsTrigger>
            <TabsTrigger value="data" className="flex-1">Data</TabsTrigger>
          </TabsList>
          
          <TabsContent value="overview" className="space-y-6 mt-6">
            <div>
              <h4 className="text-sm font-semibold mb-3">Key Topics</h4>
              <div className="flex flex-wrap gap-2">
                {keyTopics.map((topic, i) => (
                  <Badge
                    key={i}
                    variant="secondary"
                    className="bg-secondary hover:bg-secondary/80 text-secondary-foreground"
                  >
                    {topic}
                  </Badge>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="text-sm font-semibold mb-3">Research Distribution</h4>
              <div className="space-y-3">
                {researchData.map((data, i) => (
                  <div key={i}>
                    <div className="flex items-center justify-between mb-1 text-sm">
                      <span className="text-foreground">{data.planet}</span>
                      <span className="text-muted-foreground">{data.papers} papers</span>
                    </div>
                    <div className="h-2 bg-secondary rounded-full overflow-hidden">
                      <div
                        className={`h-full rounded-full transition-all duration-500`}
                        style={{
                          width: `${(data.papers / maxPapers) * 100}%`,
                          backgroundColor: `hsl(var(--${data.color}))`
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="text-sm font-semibold mb-3">Top Researchers</h4>
              <div className="space-y-2">
                {researchers.map((researcher, i) => (
                  <div key={i} className="flex items-center justify-between text-sm">
                    <span className="text-foreground">{researcher.name}</span>
                    <span className="text-muted-foreground">{researcher.papers} papers</span>
                  </div>
                ))}
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="trends" className="mt-6">
            <p className="text-sm text-muted-foreground">Trend analysis coming soon...</p>
          </TabsContent>
          
          <TabsContent value="data" className="mt-6">
            <p className="text-sm text-muted-foreground">Detailed data view coming soon...</p>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};
