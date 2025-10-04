import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { SearchBar } from "@/components/SearchBar";
import { Logo } from "@/components/Logo";
import { DirectAnswerCard } from "@/components/DirectAnswerCard";
import { ArticleCard } from "@/components/ArticleCard";
import { InsightsPanel } from "@/components/InsightsPanel";
import { ExtractedSummary } from "@/components/ExtractedSummary";

const SearchResults = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q') || '';
  const [extractedArticles, setExtractedArticles] = useState<string[]>([]);

  // Sample data - replace with actual API calls
  const directAnswer = "Based on current research, Mars habitability involves multiple factors including atmospheric composition, radiation levels, and potential water sources. Recent studies suggest that subsurface ice deposits may provide crucial resources for future colonization efforts, while the planet's thin atmosphere presents challenges for radiation shielding.";

  const articles = [
    {
      id: "1",
      title: "Microbial Life in Martian Subsurface Ice Deposits",
      authors: ["Dr. Sarah Mitchell", "Dr. James Chen", "Dr. Elena Rodriguez"],
      journal: "Astrobiology Journal",
      year: 2024,
      comments: 99,
      downloads: 127,
      summary: "This comprehensive study examines the potential for microbial life preservation in Martian subsurface ice. Findings suggest that certain extremophile bacteria could survive in similar conditions on Earth, indicating Mars may have harbored life."
    },
    {
      id: "2",
      title: "Atmospheric Composition Analysis of Europa's Subsurface Ocean",
      authors: ["Dr. Maria Johnson", "Dr. Alex Kim"],
      journal: "Planetary Science Quarterly",
      year: 2024,
      comments: 156,
      downloads: 203,
      summary: "Analysis of Europa's subsurface ocean reveals promising chemical signatures consistent with hydrothermal activity. This research provides new insights into the moon's potential to support extraterrestrial life forms."
    },
    {
      id: "3",
      title: "Radiation Shielding Requirements for Lunar Habitation",
      authors: ["Dr. Chen Wei", "Dr. Robert Taylor", "Dr. Lisa Anderson"],
      journal: "Space Engineering Review",
      year: 2023,
      comments: 84,
      downloads: 156,
      summary: "Detailed study of radiation exposure on the lunar surface and effective shielding strategies for long-term habitation. Results indicate that regolith-based structures could provide adequate protection against cosmic radiation."
    }
  ];

  const keyTopics = ["Microbial Life", "Subsurface Ice", "Radiation", "Atmosphere", "Water Sources"];
  
  const researchData = [
    { planet: "Mars", papers: 45, color: "mars" },
    { planet: "Europa", papers: 28, color: "europa" },
    { planet: "Moon", papers: 32, color: "moon" }
  ];

  const researchers = [
    { name: "Dr. Maria Johnson", papers: 12 },
    { name: "Dr. Chen Wei", papers: 12 },
    { name: "Dr. Alex Rodriguez", papers: 12 }
  ];

  const handleExtract = (articleId: string) => {
    if (!extractedArticles.includes(articleId)) {
      setExtractedArticles([...extractedArticles, articleId]);
    }
  };

  return (
    <div className="min-h-screen">
      <header className="sticky top-0 bg-background/95 backdrop-blur-sm border-b border-border z-10 px-6 py-4">
        <div className="flex items-center gap-8">
          <Logo size="sm" />
          <div className="flex-1 max-w-2xl">
            <SearchBar defaultValue={query} placeholder="Search research..." />
          </div>
        </div>
      </header>

      <div className="container mx-auto px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <DirectAnswerCard answer={directAnswer} />

            <div>
              <h2 className="text-2xl font-bold mb-6 text-foreground">Relevant Research Articles</h2>
              <div className="space-y-4">
                {articles.map((article) => (
                  <ArticleCard
                    key={article.id}
                    title={article.title}
                    authors={article.authors}
                    journal={article.journal}
                    year={article.year}
                    comments={article.comments}
                    downloads={article.downloads}
                    onExtract={() => handleExtract(article.id)}
                    onViewPaper={() => console.log('View paper:', article.id)}
                  />
                ))}
              </div>
            </div>

            {extractedArticles.length > 0 && (
              <div className="mt-8">
                <h2 className="text-2xl font-bold mb-6 text-foreground">Extracted Summaries</h2>
                <div className="space-y-4">
                  {extractedArticles.map((articleId) => {
                    const article = articles.find(a => a.id === articleId);
                    if (!article) return null;
                    return (
                      <ExtractedSummary
                        key={articleId}
                        title={article.title}
                        summary={article.summary}
                      />
                    );
                  })}
                </div>
              </div>
            )}
          </div>

          <div className="lg:col-span-1">
            <InsightsPanel
              keyTopics={keyTopics}
              researchData={researchData}
              researchers={researchers}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchResults;
