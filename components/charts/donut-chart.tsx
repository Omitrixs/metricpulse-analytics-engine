import { Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardAction,
  CardDescription
} from "../ui/card"
import {Badge} from "../ui/badge"
import { ChartContainer, type ChartConfig } from "@/components/ui/chart"

const chartConfig = {
  revenue: {label: "Revenue", color: "#7c3aed"},
  expenses: {label: "Expenses", color: "#6366f1"}
} satisfies ChartConfig;

function DonutChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Revenue Overview</CardTitle>
        <CardDescription>Monthly Revenue vs Expenses</CardDescription>
        <CardAction>
          <Badge variant="secondary">Last 30 days</Badge>
        </CardAction>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <div className="h-50 w-full" />
        </ChartContainer>
      </CardContent>
    </Card>
  )
}

export default DonutChart