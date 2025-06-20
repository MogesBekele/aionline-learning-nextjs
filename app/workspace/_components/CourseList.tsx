"use client";
import React, { useState } from "react";
import Image from "next/image";

function CourseList() {
  const [CourseList, setCourseList] = useState([]);
  return (
    <div>
      <h2 className="font-bold text-3xl">Courses List</h2>
      {CourseList?.length == 0 ? (
        <div>
         <Image src={'/image.png'} alt= 'image' width={100} height={100}/>
        </div>
      ) : (
        <div>list of the courses</div>
      )}
    </div>
  );
}

export default CourseList;
