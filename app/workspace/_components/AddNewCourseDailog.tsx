"use client";
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
import { Loader2Icon, Sparkle } from "lucide-react";
import axios from "axios";

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
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState<FormData>(initialFormData);

  const handleSubmit = (field: keyof FormData, value: any) => {
    setFormData((prevData) => ({
      ...prevData,
      [field]: field === "noOfChapters" ? Number(value) : value,
    }));
  };

  const onGenerate = async () => {
    console.log("Generating course with data: ", formData);
    setLoading(true);

    const result = await axios.post("/api/generate-course-layout", {
      ...formData,
    });
    // ...send your data here...
    console.log(result.data);
    setLoading(false);
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
                <Button
                  disabled={loading}
                  className="w-full"
                  onClick={onGenerate}
                >
                  {loading ? (
                    <Loader2Icon className="animate-spin" />
                  ) : (
                    <Sparkle />
                  )}
                  Generate Course
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
