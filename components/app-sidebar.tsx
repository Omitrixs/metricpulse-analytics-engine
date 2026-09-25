"use client";

import { Activity, Sparkles } from "lucide-react";
import NextLink from "next/link";
import { usePathname } from "next/navigation";
import { appSidebarItems } from "@/data/data";
import {
  Sidebar,
  SidebarFooter,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar";
import { cn } from "@/lib/utils";

export function AppSidebar() {
  const pathname = usePathname();

  return (
    <Sidebar collapsible="icon" className="border-r border-border/50">
      {/* Sidebar Header */}
      <SidebarHeader className="p-3 group-data-[collapsible=icon]:p-2 border-b border-border/50">
        <div className="group flex items-center gap-2.5 cursor-pointer justify-start group-data-[collapsible=icon]:justify-center">
          <div className="flex shrink-0 items-center justify-center rounded-lg bg-primary p-2 text-primary-foreground shadow-sm transition-all duration-300 ease-in-out group-hover:scale-105 group-hover:shadow-md">
            <Activity className="h-5 w-5 stroke-[2.5] transition-transform duration-300 ease-in-out group-hover:rotate-12" />
          </div>
          <div className="flex flex-col group-data-[collapsible=icon]:hidden">
            <span className="font-bold text-base tracking-tight leading-none text-foreground transition-colors duration-200 group-hover:text-primary">
              Metric<span className="text-primary">Pulse</span>
            </span>
            <span className="text-[10px] text-muted-foreground font-medium uppercase tracking-wider mt-1">
              Analytics Engine
            </span>
          </div>
        </div>
      </SidebarHeader>

      {/* Main Navigation Content */}
      <SidebarContent className="px-2 py-3">
        <SidebarMenu className="space-y-1">
          {appSidebarItems.map(({ id, label, Icon, href }) => {
            const isActive = pathname === href;

            return (
              <SidebarMenuItem key={id}>
                <NextLink href={href} className="w-full">
                  <SidebarMenuButton
                    tooltip={label}
                    className={cn(
                      "w-full justify-start gap-3 px-3 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground group-data-[collapsible=icon]:justify-center group-data-[collapsible=icon]:px-0",
                      isActive &&
                        "bg-primary text-primary-foreground hover:bg-primary/90 hover:text-primary-foreground font-semibold shadow-xs"
                    )}
                  >
                    <span className="shrink-0">
                      <Icon
                        className={cn(
                          "h-4 w-4",
                          isActive ? "text-primary-foreground" : "text-muted-foreground"
                        )}
                      />
                    </span>
                    <span className="group-data-[collapsible=icon]:hidden">{label}</span>
                  </SidebarMenuButton>
                </NextLink>
              </SidebarMenuItem>
            );
          })}
        </SidebarMenu>
      </SidebarContent>

      {/* Sidebar Footer */}
      <SidebarFooter className="p-3 group-data-[collapsible=icon]:p-2 border-t border-border/50 flex flex-col gap-3">
        {/* Compact Pro Banner */}
        <div className="rounded-lg border border-border/60 bg-muted/40 p-2.5 group-data-[collapsible=icon]:hidden">
          <div className="flex items-center gap-2 mb-2">
            <div className="flex h-6 w-6 items-center justify-center rounded-md bg-primary/10 text-primary shrink-0">
              <Sparkles className="h-3.5 w-3.5" />
            </div>
            <div className="flex flex-col min-w-0">
              <p className="text-xs font-semibold leading-none text-foreground">Pro Plan</p>
              <p className="text-[10px] text-muted-foreground truncate mt-0.5">Advanced analytics</p>
            </div>
          </div>
          <Button size="sm" className="w-full h-7 text-xs font-medium">
            Upgrade
          </Button>
        </div>

        {/* User Profile Footer */}
        <div className="flex items-center gap-3 group-data-[collapsible=icon]:justify-center">
          <Avatar className="h-8 w-8 shrink-0 border border-border">
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback className="text-xs font-semibold">OT</AvatarFallback>
          </Avatar>
          <div className="flex flex-col min-w-0 group-data-[collapsible=icon]:hidden">
            <p className="text-xs font-semibold text-foreground truncate leading-tight">
              Omitusa Toyosi
            </p>
            <p className="text-[11px] text-muted-foreground truncate">
              omitusaayotoyosi@gmail.com
            </p>
          </div>
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}

export default AppSidebar;