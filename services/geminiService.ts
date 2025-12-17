import { GoogleGenAI } from "@google/genai";

const apiKey = process.env.GEMINI_API_KEY;

if (!apiKey) {
  console.warn("GEMINI_API_KEY environment variable is not set. AI features may not work.");
}

const ai = new GoogleGenAI({ apiKey: apiKey || '' });

export const editImageWithGemini = async (
  base64Image: string,
  prompt: string,
  mimeType: string = 'image/png'
): Promise<string> => {
  if (!apiKey) {
    throw new Error("GEMINI_API_KEY is not configured. Please set it in environment variables.");
  }

  try {
    const cleanBase64 = base64Image.replace(/^data:image\/\w+;base64,/, "");

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash-image',
      contents: {
        parts: [
          {
            inlineData: {
              data: cleanBase64,
              mimeType: mimeType,
            },
          },
          {
            text: `Edit this image based on the following instruction: ${prompt}. Return only the image.`,
          },
        ],
      },
    });

    // Extract image from response
    // The response might contain an image part or text description if it failed, but usually for editing it returns the image.
    // For 2.5 Flash Image, we look for inlineData in the parts.
    
    const parts = response.candidates?.[0]?.content?.parts;
    if (!parts) throw new Error("No content generated");

    for (const part of parts) {
        if (part.inlineData && part.inlineData.data) {
            return `data:${part.inlineData.mimeType};base64,${part.inlineData.data}`;
        }
    }

    throw new Error("No image data returned from Gemini.");

  } catch (error) {
    console.error("Gemini API Error:", error);
    throw error;
  }
};