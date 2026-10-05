import { Badge } from "@/components/ui/badge"
import {Button} from "@/components/ui/button"
import {RiCheckLine} from "@remixicon/react"
import NotifCard from "@/components/notif-card"
import { Separator } from "@/components/ui/separator"
import { notifications } from "@/data/mock-data"

function page() {

  const unread = notifications.filter((n) => !n.read);
  const read = notifications.filter((n) => n.read);
  return (
    <main>
      <div className="p-6 max-w-2xl space-y-6">
        {/* Title */}
        <div className="flex items-center justify-between">
          <p className="text-sm text-muted-foreground">
            <span className="font-semibold text-foreground">3</span> Unread notifications
          </p>
          <Button variant="default" size="sm" className="gap-2">
            <RiCheckLine />Mark all as read
          </Button>
        </div>
        {/* Unread Notification */}
        {unread.length > 0 && 
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <p className="font-semibold text-muted-foreground
            uppercase tracking-wider
            text-xs">New</p>
            <Badge className="text-[10px]
            size-4">4</Badge>
          </div>
          {unread.map((n)=> (
            <NotifCard key={n.id} n={n} unread={true} />
          ))}
        </div>
        }
        
        {/* Read notifications */}
        {read.length > 0 &&
        <div className="space-y-2">
          <Separator />
          <p className="text-xs font-semibold
          text-muted-foreground uppercase pt-2">Earlier</p>
          {read.map((n)=> (
            <NotifCard key={n.id} n={n} unread={false} />
          ))}
        </div>
        }
      </div>
    </main>
  )
}

export default page