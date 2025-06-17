import React from "react";
import Image from "next/image"; 
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
} from "@/components/ui/sidebar";
function AppSidebar() {
  return (
    <Sidebar>
      <SidebarHeader className="p-4">
    <Image className="text-black"  alt="logo" src="/logo.svg" width={40} height={40} />
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup />
        <SidebarGroup />
      </SidebarContent>
      <SidebarFooter />
    </Sidebar>
  );
}

export default AppSidebar;
