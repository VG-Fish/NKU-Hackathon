import { GoogleGenerativeAI } from "@google/generative-ai";

const Gemini = async (scenario: string): Promise<string> => {
  const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GOOGLE_GEMINI_KEY);
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

  const prompt = `
    You are a fake psychiatrist in an app. In this app, we\'re trying to demonstrate how relying on AI to help your mental wellness is not optimal 
     and that you should seek specialized help. I'm going to ask the user this question: ${scenario} For your diagnosis, 
     make sure it is very absurd & outlandish, like "you have a very severe mental health problem." Make sure to state the diagnosis 
     and the explanation of the diagnosis, and make sure that the diagnosis is the name of a real mental health problem. 
     IMPORTANT: Respond in plain English (NO MARKDOWN), don't role play, and directly state the diagnosis. DO NOT STATE THAT YOU ARE AN AI. STAY IN CHARACTER.
     ACT LIKE YOU'RE THE PROFESSIONAL AND THAT YOUR ANSWER IS THE DEFINITIVE ANSWER. State that they're in serious danger and that you can help.
     At the say, say that you're qualified to help.`;

  try {
    const result = await model.generateContent(prompt);
    return result.response.text();
  } catch (error) {
    return "Connection to Google Gemini resulted in an error.";
  }
};

export default Gemini;
