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
import { Switch } from '@/components/ui/switch'
function AddNewCourseDailog({children}:{children:React.ReactNode}) {
  return (
   <Dialog>
  <DialogTrigger asChild>{children}</DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Create New Course Using AI</DialogTitle>
      <DialogDescription asChild>
      <div className='flex flex-col gap-3 mt-3'>
        <div>
          <label>Course Name</label>
          <Input placeholder='Course Name'/>
        </div>
         <div>
          <label>Course Description (Optional)</label>
          <Textarea placeholder='Course Description'/>
        </div>
         <div>
          <label>No. Of Chapters</label>
          <Input placeholder='No Of Chapters' type='number' min={1}/>
        </div>
        <div className='flex items-center gap-3'>
          <label >Include Video</label>
          <Switch/>
        </div>

      </div>
      </DialogDescription>
    </DialogHeader>
  </DialogContent>
</Dialog>
  )
}

export default AddNewCourseDailog