import {SidebarTrigger} from "@/components/ui/sidebar"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group"
import { RiNotification3Line, RiSearchLine } from "@remixicon/react"
import { Button } from "./ui/button"
import ModeToggle from "./mode-toggle"
import HeaderPathname from "./header-pathname"

function Header() {
  return (
    <header className="sticky top-0 left-0 border-b bg-background z-50">
        <div className="flex justify-between items-center px-4 py-2 gap-6">
            {/* Wrapper */}
            <div className=" flex items-center gap-1">
                <SidebarTrigger/>
               <h1 className="text-sm sm:text-xl font-semibold"> <HeaderPathname/>
               </h1>
            </div>
            {/* Right side */}
      <div className="flex items-center gap-1">
        <InputGroup className="max-w-xs">
          <InputGroupInput placeholder="Search..." />
          <InputGroupAddon>
            <RiSearchLine/>
          </InputGroupAddon>
        </InputGroup>
        <Button variant={"ghost"} size={"icon-lg"}>
          <RiNotification3Line size={20} />
        </Button>
        <ModeToggle/>
      </div>

      </div>
    </header>
  )
}

export default Header