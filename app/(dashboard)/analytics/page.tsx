import StatCard from "@/components/stat-card"
import { RiEyeLine, RiTimeLine, RiUserFollowLine, RiPercentLine } from "@remixicon/react"
import RevenueChart from '@/components/charts/revenue-chart'
import DonutChart from '@/components/charts/donut-chart'
import WeeklyVisitors from "@/components/charts/weekly-visitors"
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card"
import {topCountries} from "@/data/data"

function page() {
  return (
    <main>
      <div className="space-y-6 main-wrapper">
        {/* wrapper */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
          <StatCard title="Page Views"
                    value="248,921"
                    change="+18.3%"
                    positive={true}
                    icon={RiEyeLine}
                    iconClr="text-violet-600"
                    iconBg="bg-violet-50"
                     />
            <StatCard title="Avg. session"
                    value="4m 32s"
                    change="+2.1%"
                    positive={true}
                    icon={RiTimeLine}
                    iconClr="text-indigo-600"
                    iconBg="bg-indigo-50"
                     />
            <StatCard title="New Users"
                    value="1,284"
                    change="+9.7%"
                    positive={true}
                    icon={RiUserFollowLine}
                    iconClr="text-sky-600"
                    iconBg="bg-sky-50"
                     />
            <StatCard title="Bounce Rate"
                    value="38.2%"
                    change="-4.5%"
                    positive={false}
                    icon={RiPercentLine}
                    iconClr="text-rose-600"
                    iconBg="bg-rose-50"
                     />
        </div>
        {/* Weekly visitors chart */}
        <WeeklyVisitors />
        {/* wrapper */}
        <div className="grid grid-cols-1 gap-4 xl:grid-cols-3">
            <div className="xl:col-span-2">
              <RevenueChart />
            </div>
            <div>
              <DonutChart />
            </div>
          </div>
          {/* Top Countries */}
          <Card>
            <CardHeader>
              <CardTitle className="font-semibold text-sm" >Top Countries</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3" >
              {topCountries.map((row)=> (
                <div key={row.country} className="flex items-center gap-4">
                  {/* wrapper */}
                  <span className="text-xs font-medium w-36 truncate">
                    {row.country}
                  </span>
                  {/* Bar */}
                  <div className="flex-1 h-1.5 bg-muted rounded-full overflow-hidden">
                    <div className="h-full bg-linear-to-r from-violet-500
                    to-indigo-400 rounded-full" style={{width: `${row.pct}%`}}/>
                  </div>
                  {/* Visitors */}
                  <span className="text-xs
                  text-muted-foreground w-16
                  text-right">{row.visitors.toLocaleString()}</span>
                </div>
                ))}
            </CardContent>
          </Card>
      </div>
    </main>
  )
}

export default page