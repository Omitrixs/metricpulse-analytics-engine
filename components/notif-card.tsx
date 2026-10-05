import {Card, CardContent} from "@/components/ui/card"
import { notifications } from "@/data/mock-data";
import { cn } from "@/lib/utils";
import { RiMoneyDollarCircleLine,
    RiAlertLine, RiUserLine, RiSettings3Line
 } from "@remixicon/react";


const typeConfig: Record<string,
{icon: React.ElementType; color: string;
    bg: string;
}
> = {
    payment: {
        icon: RiMoneyDollarCircleLine,
        color: "text-emerald-600",
        bg: "bg-emerald-50"
    },
    alert: {
        icon: RiAlertLine,
        color: "text-amber-600",
        bg: "bg-amber-50"
    },
    user: {
        icon: RiUserLine,
        color: "text-violet-600",
        bg: "bg-violet-50"
    },
    system: {
        icon: RiSettings3Line,
        color: "text-sky-600",
        bg: "bg-sky-50"
    }

}

function NotifCard({n, unread}: {n:
    (typeof notifications)[0]; unread: boolean;
}) {

    const config = typeConfig[n.type] ?? typeConfig.system;
    const Icon = config.icon;
  return (
    <Card className={cn("gap-0 py-0 relative",
        !unread && "opacity-60"
    )}>
        {unread && (
            <span className="absolute top-4 right-4 size-2 bg-primary rounded-full" />
        )}
        <CardContent className="p-4 flex items-start gap-4">
            <div className=""><Icon /></div>
            <div className="flex-1 min-w-0">
                <p className="font-semibold text-sm">{n.title}</p>
                <p className="text-xs text-muted-foreground mt-0.5">{n.message}</p>
                <p className="text-[11px]
                text-muted-foreground
                mt-1.5">{n.time}</p>
            </div>
        </CardContent>
    </Card>
  )
}

export default NotifCard