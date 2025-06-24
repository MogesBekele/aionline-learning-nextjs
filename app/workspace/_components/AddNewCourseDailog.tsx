// // To run this code you need to install the following dependencies:
// // npm install @google/genai mime
// // npm install -D @types/node

// import {
//   GoogleGenAI,
// } from '@google/genai';

// async function main() {
//   const ai = new GoogleGenAI({
//     apiKey: process.env.GEMINI_API_KEY,
//   });
//   const config = {
//     thinkingConfig: {
//       thinkingBudget: -1,
//     },
//     responseMimeType: 'text/plain',
//   };
//   const model = 'gemini-2.5-pro';
//   const contents = [
//     {
//       role: 'user',
//       parts: [
//         {
//           text: `generate learning course depends on following detials in which makesure to add course name, description, chapters name, image prompt, include ui/ux elements such as mookup screans, text blocks, icons buttons and creative workspace tools and symbolic elements related to user course, like sticky, notes design components, and visual aids. use a vibrant color palette(blues , purples, oranges ) with a clean professional look. the illustration should feel creative, tech-savvy and educational, ideals for visualizing concepts in user course for courses banner in 3d format. topic under each chapters, duration for each chapters etc in Json format only 

// Schema
// {
// "course":{
// name: "string"
// description: "string"
// category: "string"
// level: "string"
// includevideo: "boolean"
// noOfChapters: "number"
// chapters[
// {
// "chaptersName" : "string",
// duration : "string",
// topic: [
// "string"
// ],
// "imagePrompt": "string"
// ]

// }
// }  



// user input: Reactjs , 3 chapters`,
//         },
//       ],
//     },
//     {
//       role: 'model',
//       parts: [
//         {
//           text: `**Formulating Course Outline**

// I'm currently crafting the course outline in a JSON format for a ReactJS learning program. I've begun with the overarching details, naming it "ReactJS: From Fundamentals to Modern Web Apps." My next step involves fleshing out the course description, aiming for a concise and engaging overview of the learning journey.


// **Developing Course Structure**

// I've moved on to structuring the chapters. I'm focusing on "Chapter 1: Foundations of React & JSX," detailing its duration and topics: "Introduction to React," "Setting up the development environment," "Understanding JSX," and "Creating and rendering components." I'm also working on a descriptive image prompt for a 3D banner.


// **Structuring Chapter Details**

// I'm now deep-diving into the second chapter. I'm assigning it a "Core Concepts - Components, Props & State" title and estimating its duration at 3 hours and 15 minutes. The topics I'm planning for this chapter are "Functional vs. Class Components," "Understanding Props: Passing Data to Components," and "Introduction to State." My goal is to strike a balance between providing key concepts in a concise way.


// **Outlining Chapter Three**

// I'm now detailing Chapter Three, "Advanced React - Hooks & Lifecycle." The duration will be around 3 hours and 30 minutes, with topics including "Introduction to Hooks," "useEffect Hook," "useContext Hook," and "Component Lifecycle." I'm also preparing image prompts to visualize key concepts for this chapter's banner.


// **Constructing Course Details**

// I'm now structuring the JSON object for the course. I've defined the core course details: name, description, category ("Web Development"), level ("Beginner to Intermediate"), and that it includes videos. I'm moving on to structuring the chapters, and their corresponding details.


// **Outlining the Core Structure**

// I've defined the course details now. I've set the name to "ReactJS: From Fundamentals to Modern Web Apps," crafted a brief, enticing description, and designated it for "Web Development" at a "Beginner to Intermediate" level. The course will have videos and three chapters as requested. I'm now structuring the chapter outlines, ensuring a smooth flow from fundamental concepts to advanced topics. The image prompts for chapter banners are also ready.


// `,
//         },
//         {
//           text: `\`\`\`json
// {
//   "course": {
//     "name": "ReactJS: Modern Web Development",
//     "description": "Dive into the world of ReactJS and learn to build powerful, fast, and dynamic single-page applications. This course takes you from the fundamental concepts of JSX and components to advanced topics like state management with Hooks, creating a solid foundation for your career in web development.",
//     "category": "Web Development",
//     "level": "Beginner to Intermediate",
//     "includevideo": true,
//     "noOfChapters": 3,
//     "chapters": [
//       {
//         "chaptersName": "Chapter 1: Foundations of React & JSX",
//         "duration": "2 hours 30 minutes",
//         "topic": [
//           "Introduction to React: The 'What' and 'Why'",
//           "Setting Up Your Development Environment with Create React App",
//           "Understanding JSX: JavaScript as a Template",
//           "Creating Your First Functional Component",
//           "Rendering Elements and Component Composition"
//         ],
//         "imagePrompt": "A 3D course banner illustration for a ReactJS introduction. In the center, a glowing 3D browser mockup screen shows a simple 'Hello, World!' UI. Floating around it are foundational building blocks labeled 'JSX' and 'Component'. The workspace includes creative elements like sticky notes with \`<p>Hello</p>\` code, a stylized React atom logo icon, and a simple design compass. The vibrant color palette uses electric blues, deep purples, and pops of bright orange, creating a look that is clean, professional, tech-savvy, and highly educational."
//       },
//       {
//         "chaptersName": "Chapter 2: State, Props, and Handling Events",
//         "duration": "3 hours 15 minutes",
//         "topic": [
//           "Understanding Props: Passing Data Down the Component Tree",
//           "Introduction to State: Managing Component-level Data",
//           "Handling User Events like Clicks and Form Submissions",
//           "Conditional Rendering: Showing and Hiding UI Elements",
//           "Rendering Lists of Data with '.map()' and Keys"
//         ],
//         "imagePrompt": "A 3D course banner visualizing React's data flow. A central, stylized 3D component receives glowing orange data streams labeled 'Props'. Inside the component, a purple, pulsating orb labeled 'State' represents internal data management. UI elements include a mockup of an interactive list, toggle switch icons, and button icons to represent event handling. The background is a clean, professional dark purple, with vibrant blue and orange accents. The overall feel is creative, educational, and visualizes the abstract concept of state and props in a tech-savvy style."
//       },
//       {
//         "chaptersName": "Chapter 3: Mastering React Hooks & Building a Project",
//         "duration": "4 hours",
//         "topic": [
//           "Deep Dive into the \`useState\` Hook",
//           "Managing Side Effects with the \`useEffect\` Hook",
//           "Sharing State Globally with the \`useContext\` Hook",
//           "Building a Complete To-Do List Application",
//           "Introduction to Client-Side Routing with React Router"
//         ],
//         "imagePrompt": "A dynamic 3D course banner for an advanced React chapter. The scene features a central mockup screen showcasing a complete, interactive to-do list application. Floating around the screen are large, glowing 3D hook shapes (like a fish hook) labeled 'useState' and 'useEffect'. These hooks are visually 'catching' UI elements and data points. Creative workspace tools like a virtual whiteboard with a component tree diagram, sticky notes with hook syntax, and navigation arrow icons are part of the scene. The illustration uses a vibrant palette of blues, purples, and oranges to feel modern, creative, and educational."
//       }
//     ]
//   }
// }
// \`\`\``,
//         },
//       ],
//     },
//     {
//       role: 'user',
//       parts: [
//         {
//           text: `INSERT_INPUT_HERE`,
//         },
//       ],
//     },
//   ];

//   const response = await ai.models.generateContentStream({
//     model,
//     config,
//     contents,
//   });
//   let fileIndex = 0;
//   for await (const chunk of response) {
//     console.log(chunk.text);
//   }
// }

// main();




import React, { useState, ChangeEvent } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Sparkle } from "lucide-react";

type FormData = {
  name: string;
  description: string;
  noOfChapters: number;
  includeVideo: boolean;
  level: string;
  category: string;
};

const initialFormData: FormData = {
  name: "",
  description: "",
  noOfChapters: 1,
  includeVideo: false,
  level: "",
  category: "",
};

function AddNewCourseDailog({ children }: { children: React.ReactNode }) {
  const [formData, setFormData] = useState<FormData>(initialFormData);

  const handleSubmit = (field: keyof FormData, value: any) => {
    setFormData((prevData) => ({
      ...prevData,
      [field]: field === "noOfChapters" ? Number(value) : value,
    }));
  };

  const onGenerate = () => {
    console.log("Generating course with data: ", formData);
    // ...send your data here...
    setFormData(initialFormData); // Reset the form
  };

  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Create New Course Using AI</DialogTitle>
          <DialogDescription asChild>
            <div className="flex flex-col gap-3 mt-3">
              <div>
                <label>Course Name</label>
                <Input
                  placeholder="Course Name"
                  value={formData.name}
                  onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    handleSubmit("name", e.target.value)
                  }
                />
              </div>
              <div>
                <label>Course Description (Optional)</label>
                <Textarea
                  placeholder="Course Description"
                  value={formData.description}
                  onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
                    handleSubmit("description", e.target.value)
                  }
                />
              </div>
              <div>
                <label>No. Of Chapters</label>
                <Input
                  placeholder="No Of Chapters"
                  type="number"
                  min={1}
                  onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    handleSubmit("noOfChapters", e.target.value)
                  }
                  value={formData.noOfChapters}
                />
              </div>
              <div className="flex items-center gap-3">
                <label>Include Video</label>
                <Switch
                  onCheckedChange={() =>
                    handleSubmit("includeVideo", !formData.includeVideo)
                  }
                  checked={formData.includeVideo}
                />
              </div>
              <div>
                <label className="mb-2">Difficulty Level</label>
                <Select
                  defaultValue="beginner"
                  onValueChange={(value) => handleSubmit("level", value)}
                  value={formData.level}
                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Difficulty Level" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="beginner">Beginner</SelectItem>
                    <SelectItem value="moderate">Moderate</SelectItem>
                    <SelectItem value="advanced">Advanced</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label>Category</label>
                <Input
                  placeholder="Category (separated by comma)"
                  onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    handleSubmit("category", e.target.value)
                  }
                  value={formData.category}
                />
              </div>
              <div className="mt-5">
                <Button className="w-full" onClick={onGenerate}>
                  <Sparkle /> Generate Course
                </Button>
              </div>
            </div>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}

export default AddNewCourseDailog;
