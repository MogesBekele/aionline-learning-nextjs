import { GoogleGenAI } from "@google/genai";
import { NextResponse } from "next/server";

const PROMPT = `
Generate a learning course based on the following details. 
Make sure to include:
- Course name
- Description
- Category
- Level
- Chapters (with chapter name, duration, topics, and image prompt)
- UI/UX elements such as mockup screens, text blocks, icons, buttons, creative workspace tools, symbolic elements (like sticky notes, design components, visual aids)
- Use a vibrant color palette (blues, purples, oranges) with a clean, professional look. 
- The illustration should feel creative, tech-savvy, and educational, ideal for visualizing concepts in the course banner in 3D format.
- List topics under each chapter and duration for each chapter.
- Return the result in JSON format only.

Schema:
{
  "course": {
    "name": "string",
    "description": "string",
    "category": "string",
    "level": "string",
    "includeVideo": "boolean",
    "noOfChapters": "number",
    "chapters": [
      {
        "chapterName": "string",
        "duration": "string",
        "topics": ["string"],
        "imagePrompt": "string"
      }
    ]
  }
}

User input: Reactjs, 3 chapters
`;

export async function POST(request: Request) {
  try {
    const formdata = await request.json();

    if (!process.env.GEMINI_API_KEY) {
      return new Response("Missing Gemini API key", { status: 500 });
    }

    const ai = new GoogleGenAI({
      apiKey: process.env.GEMINI_API_KEY,
    });

    const config = {
      thinkingConfig: { thinkingBudget: -1 },
      responseMimeType: "text/plain",
    };
    const model = "gemini-2.5-pro";

    const userInput = JSON.stringify(formdata, null, 2);
    const prompt = `${PROMPT}\nUser input:\n${userInput}`;

    const contents = [
      {
        role: "user",
        parts: [{ text: prompt }],
      },
    ];
    const result = await ai.models.generateContent({
      model,
      config,
      contents,
    });

    // Gemini's SDK usually returns the text like this:
    const text = result.candidates?.[0]?.content?.parts?.[0]?.text ?? "";

    try {
      const json = JSON.parse(text);
      return new Response(JSON.stringify(json), {
        status: 200,
        headers: { "Content-Type": "application/json" },
      });
    } catch {
      return new Response(text, { status: 200 });
    }
  } catch (error: any) {
    console.error("API Error:", error);
    return new Response(error.message || "Internal Server Error", {
      status: 500,
    });
  }
}
