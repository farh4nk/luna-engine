import { fetchSearchResults } from "../services/fetch.ts"

async function test() {
  try {
    const result = await fetchSearchResults({ "question" : "how does space affect bone density?"});
    console.log("=== FETCH RESULT ===");
    console.log(JSON.stringify(result, null, 2)); // pretty-print the object
  } catch (err) {
    console.error("Error fetching search results:", err);
  }
}

test();
