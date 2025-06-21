import React from 'react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
function AddNewCourseDailog({children}:{children:React.ReactNode}) {
  return (
   <Dialog>
  <DialogTrigger asChild>{children}</DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Create New Course Using AI</DialogTitle>
      <DialogDescription asChild>
      <div>
        <div>
          <label>Course Name</label>
          <Input placeholder='Course Name'/>
        </div>
         <div>
          <label>Course Description (Optional)</label>
          <Textarea placeholder='Course Description'/>
        </div>

      </div>
      </DialogDescription>
    </DialogHeader>
  </DialogContent>
</Dialog>
  )
}

export default AddNewCourseDailog