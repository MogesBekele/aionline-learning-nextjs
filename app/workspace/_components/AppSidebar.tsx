"use client";
import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

import {
  Book,
  Compass,
  LayoutDashboard,
  PencilRulerIcon,
  UserCircle2Icon,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const SidebarOptions = [
  {
    title: "Dashboard",
    icon: LayoutDashboard,
    path: "/workspace",
  },
  {
    title: "My Learning",
    icon: Book,
    path: "/workspace/my-courses",
  },
  {
    title: "Explore Courses",
    icon: Compass,
    path: "/workspace/explore",
  },
  {
    title: "AI Tools",
    icon: PencilRulerIcon,
    path: "/workspace/ai-tools",
  },
  {
    title: "Billing",
    icon: LayoutDashboard,
    path: "/workspace/billing",
  },
  {
    title: "Profile",
    icon: UserCircle2Icon,
    path: "/workspace/billing",
  },
];
function AppSidebar() {
  const path= usePathname()
  return (
    <Sidebar>
      <SidebarHeader className="p-4">
        <Image
          className="text-black"
          alt="logo"
          src="/logo.svg"
          width={40}
          height={40}
        />
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <Button>Create New Courese</Button>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {SidebarOptions.map((items, index) => (
                <SidebarMenuItem key={index}>
                  <SidebarMenuButton asChild
                  className="p-5">
                    <Link href={items.path} className={`text-[17px] ${path.includes(items.path)&& 'text-primary bg-purple-50'}`}>
                      <items.icon className=" h-7 w-7" />
                      <span>{items.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter />
    </Sidebar>
  );
}

export default AppSidebar;
