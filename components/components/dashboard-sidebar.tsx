"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  Bell,
  Car,
  CreditCard,
  HelpCircle,
  History,
  Home,
  LogOut,
  MapPin,
  MessageSquare,
  Settings,
  Star,
  User,
  Wrench,
} from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarSeparator,
} from "@/components/ui/sidebar"

interface DashboardSidebarProps {
  userRole: "car-owner" | "service-provider"
}

export function DashboardSidebar({ userRole }: DashboardSidebarProps) {
  const pathname = usePathname()

  const carOwnerMenuItems = [
    { title: "Dashboard", icon: Home, href: "/dashboard" },
    { title: "Request Help", icon: Wrench, href: "/dashboard/request-help" },
    { title: "Nearby Providers", icon: MapPin, href: "/dashboard/providers" },
    { title: "History", icon: History, href: "/dashboard/history" },
    { title: "Messages", icon: MessageSquare, href: "/dashboard/messages" },
    { title: "Notifications", icon: Bell, href: "/dashboard/notifications" },
    { title: "Payments", icon: CreditCard, href: "/dashboard/payments" },
  ]

  const serviceProviderMenuItems = [
    { title: "Dashboard", icon: Home, href: "/dashboard" },
    { title: "My Profile", icon: User, href: "/dashboard/profile" },
    { title: "Service Requests", icon: Wrench, href: "/dashboard/requests" },
    { title: "My Location", icon: MapPin, href: "/dashboard/location" },
    { title: "Reviews", icon: Star, href: "/dashboard/reviews" },
    { title: "Messages", icon: MessageSquare, href: "/dashboard/messages" },
    { title: "Earnings", icon: CreditCard, href: "/dashboard/earnings" },
    { title: "Notifications", icon: Bell, href: "/dashboard/notifications" },
  ]

  const menuItems = userRole === "car-owner" ? carOwnerMenuItems : serviceProviderMenuItems

  return (
    <Sidebar>
      <SidebarHeader className="border-b">
        <div className="flex h-14 items-center px-4">
          <Link href="/dashboard" className="flex items-center gap-2 font-semibold">
            <Car className="h-6 w-6" />
            <span>RoadAssist</span>
          </Link>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarMenu>
          {menuItems.map((item) => (
            <SidebarMenuItem key={item.title}>
              <SidebarMenuButton asChild isActive={pathname === item.href}>
                <Link href={item.href}>
                  <item.icon className="h-5 w-5" />
                  <span>{item.title}</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
        <SidebarSeparator />
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild isActive={pathname === "/dashboard/settings"}>
              <Link href="/dashboard/settings">
                <Settings className="h-5 w-5" />
                <span>Settings</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton asChild isActive={pathname === "/dashboard/help"}>
              <Link href="/dashboard/help">
                <HelpCircle className="h-5 w-5" />
                <span>Help & Support</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarContent>
      <SidebarFooter className="border-t">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild>
              <Link href="/logout">
                <LogOut className="h-5 w-5" />
                <span>Log out</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  )
}
