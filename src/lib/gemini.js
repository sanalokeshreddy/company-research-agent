import { GoogleGenerativeAI } from "@google/generative-ai";
import { SYSTEM_INSTRUCTION } from "./prompts";

// Initialize API
const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY);

const model = genAI.getGenerativeModel({
  model: "gemini-2.5-flash",
  systemInstruction: SYSTEM_INSTRUCTION,
  // This enables the "Google Search" tool for real-time data 
  tools: [
    {
      googleSearchRetrieval: {
        dynamicRetrievalConfig: {
          mode: "mode_dynamic",
          dynamicThreshold: 0.7,
        },
      },
    },
  ],
});

export async function runResearchAgent(chatHistory, currentPlan, userMessage) {
  try {
    // We construct a context-aware prompt
    const chat = model.startChat({
      history: chatHistory.map(msg => ({
        role: msg.role === 'agent' ? 'model' : 'user',
        parts: [{ text: msg.content }] // Simplified for this demo
      })),
    });

    // We explicitly pass the current document state so the AI knows what to edit 
    const contextPrompt = `
    CURRENT DOCUMENT STATE:
    ${JSON.stringify(currentPlan)}
    
    USER REQUEST:
    ${userMessage}
    
    Remember to return JSON only.
    `;

    const result = await chat.sendMessage(contextPrompt);
    const responseText = result.response.text();

    // Clean the output (sometimes LLMs wrap JSON in markdown code blocks)
    const cleanJson = responseText.replace(/```json|```/g, '').trim();
    
    return JSON.parse(cleanJson);

  } catch (error) {
    console.error("Agent Error:", error);
    return {
      thought_process: "Error encountered",
      chat_response: "I encountered an error processing that request. Please check your API key or try again.",
      document_updates: [],
      conflict_detected: false
    };
  }
}