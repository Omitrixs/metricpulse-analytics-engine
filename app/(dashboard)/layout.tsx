import { SidebarProvider } from "@/components/ui/sidebar";
import AppSidebar from "@/components/app-sidebar";
import Header from "@/components/Header"
// import NextTopLoader from "nextjs-toploader";

function layout({ children }: { children: React.ReactNode })  {
  return (
    <SidebarProvider> 
      {/* <NextTopLoader /> */}
      <AppSidebar />
      <div className="w-full">
        <Header />
        {children}
      </div>
    </SidebarProvider>
  )
}

export default layout