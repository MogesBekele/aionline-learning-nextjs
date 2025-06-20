"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
function CourseList() {
  const [CourseList, setCourseList] = useState([]);
  return (
    <div className="mt-10">
      <h2 className="font-bold text-3xl">Courses List</h2>
      {CourseList?.length == 0 ? (
        <div className="flex items-center flex-col justify-center p-7 border rounded-xl mt-2 bg-secondary">
         <Image src={'/image.png'} alt= 'image' width={100} height={100}/>
         <h2 className="text-xl my-2 font-bold">look like you don't have any course</h2>
         <Button>create your first course</Button>
        </div>
      ) : (
        <div>list of the courses</div>
      )}
    </div>
  );
}

export default CourseList;
