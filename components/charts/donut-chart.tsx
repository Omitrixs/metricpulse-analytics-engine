"use client"

import { Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardAction,
  CardDescription,
  CardFooter
} from "../ui/card"
import { trafficData } from "@/data/mock-data";
import {Badge} from "../ui/badge"
import { ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart";

const chartConfig = Object.fromEntries(
  trafficData.map((d) => [ 
    d.name.toLocaleLowerCase(),
    { label: d.name, color: d.fill},
     ])
  ) satisfies ChartConfig;

import {PieChart,Pie
} from 'recharts'

function DonutChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Traffic Source</CardTitle>
        <CardDescription>Where your users comes from</CardDescription>
        <CardAction>
          <Badge variant="secondary">Last 30 days</Badge>
        </CardAction>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}
        className="h-40 w-full">
          <PieChart>
            <Pie
            data= {trafficData}
            cx="50%"
            cy="50%"
            innerRadius={50}
            outerRadius={72}
            paddingAngle={3}
            dataKey={"value"}
             />
             <ChartTooltip
             content= {
              <ChartTooltipContent formatter={
                (value) => `${value}%`
              } />
             }
              />
          </PieChart>
        </ChartContainer>
        {/* Card Footer */}
          <div className="space-y-2 mt-2">
            {trafficData.map((items) =>
            <div className="flex items-center
            justify-between text-xs" key={items.name}>
              {/* wrapper */}
              <div className="flex items-center gap-2">
                <span className="size-2.5 block rounded-full"
                style={{ backgroundColor: items.fill}} />
                <span className="text-muted-foreground">{items.name}</span>
              </div>
              {/* percent */}
              <span className="font-semibold">{items.value}%</span> 

            </div>
            )
             }
          </div>
      </CardContent>
    </Card>
  )
}

export default DonutChart