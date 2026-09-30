"use client";

import { Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardAction,
  CardDescription} from "../ui/card"
import {Badge} from "../ui/badge"
import { ChartContainer, ChartLegend, ChartTooltip, ChartTooltipContent, ChartLegendContent, type ChartConfig } from "@/components/ui/chart"
import {AreaChart, Area, XAxis, YAxis,
  CartesianGrid,
} from "recharts"
import { revenueData } from "@/data/mock-data";
import { config } from "process";


const chartConfig = {
  revenue: {label: "Revenue", color: "#7c3aed"},
  expenses: {label: "Expenses", color: "#6366f1"}
} satisfies ChartConfig;

function  RevenueChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Revenue Overview</CardTitle>
        <CardDescription>Monthly Revenue vs Expenses</CardDescription>
        <CardAction>
          <Badge variant="secondary" className="ml-auto text-xs">2026</Badge>
        </CardAction>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className="h-64 w-full">
          <AreaChart data= {revenueData} margin={{ top: 0, right: 0, left: -20, bottom: 0 }}>
            <defs>
              <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor={chartConfig.revenue.color} stopOpacity={0.8}/>
                <stop offset="95%" stopColor={chartConfig.revenue.color} stopOpacity={0.1}/>
              </linearGradient>
              <linearGradient id="colorExpenses" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor={chartConfig.expenses.color} stopOpacity={0.8}/>
                <stop offset="95%" stopColor={chartConfig.expenses.color} stopOpacity={0.1}/>
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis dataKey={"month"}
                      tick={{ fontSize: 12 }}
                      axisLine={false}
                      tickLine={false} />
            <YAxis tick={{ fontSize: 12 }}
                          axisLine={false}
                          tickLine={false}
                          tickFormatter={(value) => `$${value / 1000}k`} />
            <ChartTooltip content={
              <ChartTooltipContent
              formatter={(value) => `$${(Number(value)).toLocaleString()}`}
              />
            } />
            <ChartLegend content= 
            {<ChartLegendContent />} />
            <Area type="monotone" dataKey={"expenses"} stroke={chartConfig.expenses.color} fill="url(#colorExpenses)" />
            <Area type="monotone" dataKey={"revenue"} stroke={chartConfig.revenue.color} fill="url(#colorRevenue)" />
          </AreaChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}

export default RevenueChart