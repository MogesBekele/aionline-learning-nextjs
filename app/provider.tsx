'use client'
import React, { useEffect } from 'react'
import axios from 'axios'
import { useUser } from '@clerk/nextjs'
import { UserDetialContext } from '@/context/UserDetialContext'


const Provider = ({ children }: { children: React.ReactNode }) => {
  const { user } = useUser()
  const [userDetails, setUserDetails] = React.useState<any>(null);


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
  setUserDetails(result.data);
}

  return (

  <UserDetialContext.Provider value={{userDetails, setUserDetails}}>
   <div>{children}</div>
  </UserDetialContext.Provider>
  
 
  )
}

export default Provider