
import {Card, CardContent} from "@/components/ui/card"
import { StateCardProps } from "@/types/types"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

function StatCard({
    title,
    value,
    change,
    positive=true,
    icon: Icon,
    iconClr,
    iconBg,
}: StateCardProps) {
  return (
    <Card className="shadow-none gap-0 py-0">
        <CardContent className="p-5 flex items-center gap-4">
            {/* Icon */}
            <div className={cn("size-12 rounded-xl flex items-center justify-center shrink-0",
                iconBg)}>
                <Icon className={cn("size-6", iconClr)}/>
            </div>
            {/* Contents */}
            <div>
                <p className="text-sm text-muted-foreground">{title}</p>
                <p className="text-2xl font-bold mt-0.5">{value}</p>
            </div>

            {/* Badge */}
            <Badge variant={positive ? "secondary" : "destructive"} className={cn("text-sm font-semibold", positive ? "bg-emerald-50 text-emerald-600 border-emerald-100 hover:bg-emerald-200" : 
                "bg-red-50 text-red-600 border-red-100 hover:bg-red-200"
                )}>
                {change}
            </Badge>
        </CardContent>
    </Card>
  )
}

export default StatCard