import OpenAI from "openai";

// const openai = new OpenAI({
//     apiKey: process.env.OPENAI_API_KEY,
// });

// Update based on what is available in the data
export interface Match {
    title: string;
    Link: string;
    score: number;
    summary: string;
}

export interface FetchResult {
    question: string;
    directAnswer: string;
    matches: Match[];
    keyTerms: string[];
    // openAIAnswer: string;
};

export async function fetchSearchResults({ question }: { question: string }): Promise<FetchResult> {
    if(!question) {
      throw new Error("Empty search, fix button submission -- shouldn't be allowing submission")  
    };

    // Calling cloudflare endpoint
    const CF_res = await fetch("http://localhost:8787/rag", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ question }),
    });

    if(!CF_res.ok) {
        throw new Error("CloudFlare API Call Failed");
    }

    //Successfull call
    const data = await CF_res.json();
    // const openAIAnswer = await fetchOpenAIAnswer(question);
    
    console.log("Data top matches", data.top_matches);
    const result: FetchResult = {
        question: data.query || question,
        directAnswer: data.final_answer || "",
        matches: (data.top_matches).map((match: any) => ({
            title: match.title || "no title?",
            Link: match.Link || "No source?", // optional, only if your ingestion includes links
            score: match.score || 0,
            summary: match.summary || "No available summary, sorry!",
        })),
        keyTerms: data.key_terms || [],
        // openAIAnswer: openAIAnswer || "no GPT", // you can call OpenAI separately if needed
  };

  console.log(result)
  return result;

}

// export async function fetchOpenAIAnswer(question: string): Promise<string> {
//     if (!question) return "";
  
//     const prompt = `Answer the following question in roughly 3 sentences: "${question}"`;
  
//     try {
//       const response = await openai.chat.completions.create({
//         model: "gpt-5",            // or gpt-3.5-turbo if cheaper/faster
//         messages: [
//           { role: "system", content: "You are a helpful scientific assistant." },
//           { role: "user", content: prompt },
//         ],
//         temperature: 0.2,          // lower temperature for more factual answers
//         max_tokens: 500,
//       });
  
//       return response.choices?.[0]?.message?.content?.trim() || "";
//     } catch (err) {
//         console.error("OpenAI API call failed", err);
//         return "";
//     }
//   }