import {Card, CardHeader, CardTitle, CardDescription, CardContent,
} from "@/components/ui/card"
import {topProducts} from "@/data/mock-data"
import { cn } from "@/lib/utils";


function TopProducts() {
  return (
    <Card className="h-full">
        <CardHeader>
            <CardTitle>Top plans</CardTitle>
            <CardDescription>Best performing subscriptions</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4" >
            {topProducts.map((product,i) => {
const maxRevenue = topProducts[0].revenue;
const pct = Math.round((product.revenue / maxRevenue) * 100);
                return <div key={product.name}>
                    {/* wrapper */}
                    <div className="flex items-center justify-between mb-1.5">
                        {/* text */}
                        <div className="flex items-center gap-2">
                            <span className="size-5 rounded-md bg-violet-100 text-violet-700 text-[10px] font-bold flex items-center justify-center shrink-0">{i + 1}.</span>
                            <span className="text-xs font-medium">{product.name}</span>
                        </div>
                        {/* text */}
                        <span className={cn("text-[11px] font-semibold", product.growth >= 0 ? "text-emerald-600" : "text-red-500")}>
                            {product.growth >= 0 ? "+" : ""}{product.growth}%
                        </span>
                    </div>
                    {/* wrapper */}
                    <div className="flex items-center gap-3">
                        {/* bar */}
                        <div className="flex-1 h-1.5 bg-muted rounded-full overflow-hidden">
                            <div className="h-full bg-linear-to-r from-violet-500 to-indigo-500 rounded-full" style={{ width: `${pct}%` }}></div>
                        </div>
                        {/* value */}
                        <div className="text-xs font-semibold text-muted-foreground w-14 text-right">
                            ${(product.revenue / 1000).toFixed(1)}k
                        </div>
                    </div>
                </div>;
            }
                )}
        </CardContent>
    </Card>
  )
}

export default TopProducts