import React from "react";
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
import { useState } from "react";
function AddNewCourseDailog({ children }: { children: React.ReactNode }) {
  const [formData, setFormData] = useState({
    courseName: "",
    courseDescription: "",
    noOfChapters: 0,
    includeVideo: false,
    difficultyLevel: "beginner",
  });
  
const handleSubmit = (field : string, value : string) => {
  setFormData((prevData) => ({
    ...prevData,
    [field]: value,
  }));


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
                <Input placeholder="Course Name" />
              </div>
              <div>
                <label>Course Description (Optional)</label>
                <Textarea placeholder="Course Description" />
              </div>
              <div>
                <label>No. Of Chapters</label>
                <Input placeholder="No Of Chapters" type="number" min={1} />
              </div>
              <div className="flex items-center gap-3">
                <label>Include Video</label>
                <Switch />
              </div>
              <div>
                <label className="mb-2">Difficulty Level</label>
                <Select defaultValue="beginner"> 
                  <SelectTrigger className="w-ull">
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
                <Input placeholder="Category (separeted by comma)" />
              </div>
              <div className="mt-5">
                <Button className="w-full"> <Sparkle/> Generate Course</Button>
              </div>
            </div>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}

export default AddNewCourseDailog;
