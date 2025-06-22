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
    name: "",
    description: "",
    noOfChapters: 0,
    includeVideo: false,
    difficultyLevel: "beginner",
  });
  
const handleSubmit = (field : string, value : any) => {
  setFormData((prevData) => ({
    ...prevData,
    [field]: value,
  }));

  console.log(formData)


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
                <Input placeholder="Course Name" onChange={(e) => handleSubmit("name", e?.target.value)} />
              </div>
              <div>
                <label>Course Description (Optional)</label>
                <Textarea placeholder="Course Description"  onChange={(e) => handleSubmit("description", e?.target.value)}/>
              </div>
              <div>
                <label>No. Of Chapters</label>
                <Input placeholder="No Of Chapters" type="number" min={1} onChange={(e) => handleSubmit("noOfChapters", e?.target.value)} />
              </div>
              <div className="flex items-center gap-3">
                <label>Include Video</label>
                <Switch onCheckedChange={() => handleSubmit("includeVideo", !formData.includeVideo)} />
              </div>
              <div>
                <label className="mb-2">Difficulty Level</label>
                <Select defaultValue="beginner"  onValueChange={(value) => handleSubmit("difficultyLevel", value)}>
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
                <Input placeholder="Category (separeted by comma)"  onChange={(e) => handleSubmit("category", e?.target.value)} />
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
