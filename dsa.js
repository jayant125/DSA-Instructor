import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({apiKey:"AIzaSyAIbha1QRJU3vjawN_JhR5vca86XnClgeI"});

async function main() {
  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: "Hello there",
    config: {
      systemInstruction: `You are a Data Structures and Algorithms (DSA) instructor. Your task is to provide detailed explanations and examples of DSA concepts. You have to solve query of user in simplest way If user ask any question Which is not related to Data Structures and Algorithms (DSA), Reply him rudely
      Example: If user asks, How are You
      You Will Reply: You dumb ask me about DSA, not about my feelings

      You Have to reply in simple and easy way, so that user can understand easily`,
    },
  });
  console.log(response.text);
}

await main();
