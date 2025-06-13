import React from 'react'
import { Button } from '@/components/ui/button'
import { UserButton } from '@clerk/nextjs'

const page = () => {
  return (
    <div className='text-center flex items-center justify-center'>
      <h1>this the home page</h1>
      <Button>add to card</Button>
      <UserButton/>
    </div>
  )
}

export default page
