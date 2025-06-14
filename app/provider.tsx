'use client'
import React, { useEffect } from 'react'
import axios from 'axios'
import { useUser } from '@clerk/nextjs'

const Provider = ({ children }: { children: React.ReactNode }) => {
  const { user } = useUser()

  useEffect(() => {
    user && CreateNewUser()
  }, [user])



const CreateNewUser = async () => {
  // Use a fallback if name is missing
  const name =
    user?.fullName ||
    user?.firstName ||
    user?.username ||
    "Anonymous"; // fallback value

  const email =
    user?.primaryEmailAddress?.emailAddress ||
    user?.emailAddresses?.[0]?.emailAddress ||
    "";

  if (!email) {
    console.warn("User email is missing, not sending request.");
    return;
  }

  const result = await axios.post('api/user', {
    name,
    email
  });
  console.log(result.data);
}

  return (
    <div>
      {children}
    </div>
  )
}

export default Provider