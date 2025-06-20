import { SidebarTrigger } from '@/components/ui/sidebar'
import { UserButton } from '@clerk/nextjs'
import React from 'react'

function AppHeader() {
  return (
    <div className='p-4 justify-between items-center flex shadow-sm'>
      <SidebarTrigger/>
      <UserButton/>
    </div>
  )
}

export default AppHeader