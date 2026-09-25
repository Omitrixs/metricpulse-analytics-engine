"use client"
import { usePathname } from "next/navigation"

function HeaderPathname() {
    const pathname = usePathname(); 


  return (
    <>
    {pathname === "/" && "Dashboard"}
    {pathname === "/analytics" && "Analytics"}
    {pathname === "/invoices" && "Invoices"}
    {pathname === "/notifications" && "Notifications"}
    {pathname === "/settings" && "Settings"}
    
    
    </>
  )
}

export default HeaderPathname