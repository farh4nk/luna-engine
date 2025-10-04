import OpenAI from "openai";
const client = new OpenAI();

const response = await client.responses.create({
    model: "gpt-5",
    input: "Tell me the colors of the rainbow"
});

console.log(response.output_text);