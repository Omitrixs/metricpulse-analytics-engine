import {Card, CardTitle, CardHeader, CardAction, CardDescription, CardContent} from "@/components/ui/card"
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import {recentOrders} from "@/data/mock-data"
import {Badge} from "@/components/ui/badge"
import { cn } from "@/lib/utils"

const statusVariant: Record<string, string> = {
    paid: "bg-emerald-50 text-emerald-600 border-emerald-100 hover:bg-emerald-200",
    pending: "bg-amber-50 text-amber-600 border-amber-100 hover:bg-amber-200",
    overdue: "bg-red-50 text-red-600 border-red-100 hover:bg-red-200",

}

function RecentOrdersTables() {
  return (
    <Card>
        <CardHeader>
            <CardTitle>Recent Orders</CardTitle>
            <CardDescription>Latest transactions from your store</CardDescription>
            <CardAction className="text-xs text-violet-500 font-medium hover:underline">
                <a href="/invoices">View all invoices</a>
            </CardAction>
        </CardHeader>
        <CardContent className="p-0">
            <Table>
  <TableCaption>A list of your recent invoices.</TableCaption>
  <TableHeader>
    <TableRow>
        {["Order ID", "Customer", "Product",
            "Amount", "Status"].map((label)=>(
            <TableHead key={label} className="first:px-5 font-medium text-muted-foreground">{label}</TableHead>
        ))}
    </TableRow>
  </TableHeader>
  <TableBody>
    {recentOrders.map((order)=> (
         <TableRow key={order.id} className="hover:bg-muted/50">
      <TableCell className="font-medium px-5">{order.id}</TableCell>
      <TableCell>{order.customer}</TableCell>
      <TableCell className="text-muted-foreground">{order.product}</TableCell>
      <TableCell>${order.amount.toFixed(2)}</TableCell>
      <TableCell>
        <Badge className={cn("text-[11px] font-semibold capitalize",
            statusVariant[order.status]
        )} variant={"outline"}>
          {order.status}
        </Badge>
      </TableCell>
    </TableRow>
    ))}
  </TableBody>
</Table>
        </CardContent>
    </Card>
  )
}

export default RecentOrdersTables