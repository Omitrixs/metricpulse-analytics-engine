"use client"
import {
    Card,
    CardTitle,
    CardDescription,
    CardAction,
    CardHeader,
    CardContent,
} from "../ui/card";
import { Badge } from "../ui/badge";
import { type ChartConfig,
        ChartContainer,
        ChartTooltip,
        ChartTooltipContent,
 } from "../ui/chart";
import { Bar, BarChart, CartesianGrid, XAxis, YAxis} from "recharts"
import { weeklyVisitors } from "@/data/mock-data";

const chartConfig = {} satisfies ChartConfig;

function WeeklyVisitors() {
  return (
    <Card>
        <CardHeader>
            <CardTitle>Weekly visitors</CardTitle>
            <CardDescription>Unique visitors this week</CardDescription>
            <CardAction>
                <Badge variant={"secondary"} >This Week</Badge>
            </CardAction>
        </CardHeader>
        <CardContent>
            <ChartContainer config={chartConfig}className="h-50 w-full">
                <BarChart accessibilityLayer data={weeklyVisitors} barSize={32}>
                    <CartesianGrid
                    vertical={false}
                    />
                    <XAxis
                    dataKey="day"
                    tickLine={false}
                    tickMargin={10}
                    axisLine={false}
                     />
                    <YAxis
                    tick={{fontSize: 11}}
                    tickLine={false}
                    axisLine={false}
                     />
                    <ChartTooltip
                    cursor={false}
                    content={<ChartTooltipContent hideLabel />}
                    />
                    <Bar
                    dataKey="visitors"
                    fill="var(--chart-4)"
                    radius={8}
                    />
                </BarChart>
            </ChartContainer>
        </CardContent>
    </Card>
  )
}

export default WeeklyVisitors