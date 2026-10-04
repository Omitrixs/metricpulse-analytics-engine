import {summaryCardsItems} from "@/data/data"
import {Card,
        CardContent,
        CardHeader,
        CardTitle,
        CardDescription,
        CardAction,
} from "@/components/ui/card"
import { cn } from "@/lib/utils"
import { invoices } from "@/data/mock-data"
import {Button} from "@/components/ui/button"
import { RiDownload2Line, RiAddLine, RiFileList3Line } from "@remixicon/react"
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"

const statusVariant: Record<string, string> ={
  paid: "bg-emerald-50 text-emerald-600 border-emerald-100 hover:bg-emerald-50",
  pending: "bg-amber-50 text-amber-600 border-amber-100 hover:bg-amber-50",
  overdue: "bg-red-50 text-red-600 border-red-100 hover:bg-red-50",
};

function page() {
  return (
    <main>
      <div className="main-wrapper space-y-6">
        {/* Summary cards */}
        <div className="grid grid-cols-1
        sm:grid-cols-3 gap-4">
          {summaryCardsItems.map((item) => (
            <Card key={item.label}>
              <CardContent>
                <p className="text-xs text-muted-foreground">{item.label}</p>
                <p className={cn("text-2xl font-bold mt-1", item.color)}>{item.value}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        {/* Tables */}
        <Card className="gap-0 py-0">
          <CardHeader className="px-5 pt-5 pb-4">
            <CardTitle className="text-sm font-semibold" >All Invoices</CardTitle>
            <CardDescription className="flex items-center gap-2">{invoices.length} invoices total</CardDescription>
            <CardDescription />
            <CardAction className="flex items-center gap-2">
              <Button variant={'outline'} size={"sm"}>
                <RiDownload2Line size={14}/> Export
              </Button>
              <Button>
                <RiAddLine /> New Invoice
              </Button>
            </CardAction>
          </CardHeader>
          <CardContent className="p-0">
            <Table>
  <TableHeader>
    <TableRow>
      {[
        "Invoice",
        "Customer",
        "Product",
        "Date",
        "Due Date",
        "Amount",
        "Status",
        "",
      ].map((label)=>(
        <TableHead key={label} className="first:pl-5 last:pr-5">{label}</TableHead>
      ))}
    </TableRow>
  </TableHeader>
  <TableBody>
    {invoices.map((inv) => (
      <TableRow key={inv.id}>
        <TableCell className="pl-5">{inv.id}</TableCell>
        <TableCell>
          <p>{inv.customer}</p>
          <p>{inv.email}</p>
        </TableCell>
        <TableCell>{inv.product}</TableCell>
        <TableCell>{inv.date}</TableCell>
        <TableCell>{inv.due}</TableCell>
        <TableCell>{inv.amount}</TableCell>
        <TableCell>
          <Badge variant={'outline'}
          className={cn("text=[11px] font-semibold capitalize",
            statusVariant[inv.status]
          )}>
            {inv.status}</Badge>
        </TableCell>
        <TableCell className="pr-5">
          <Button variant="ghost" size={"icon-xs"} aria-label={`Download ${inv.id}`}>
            <RiFileList3Line size={14} />
          </Button>
        </TableCell>
      </TableRow>
    ))}
  </TableBody>
</Table>
          </CardContent>
        </Card>
      </div>
    </main>
  )
}

export default page