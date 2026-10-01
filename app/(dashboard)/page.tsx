import StatCard from '@/components/stat-card'
import { User } from 'lucide-react'
import { RiMoneyDollarCircleLine, RiUserLine, RiShoppingBagLine,
  RiArrowUpLine
 } from "@remixicon/react"
import RevenueChart from '@/components/charts/revenue-chart'
import DonutChart from '@/components/charts/donut-chart'


function Dashboard() {
  return (
    <main>
      <div className="main-wrapper space-y-6">
        {/* Stats */}
        <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-4">
          {/* Copy Statcard 3X */}
          <StatCard
            title="Total Users"
            value="91,234"
            change="+12%"
            positive={true}
            icon={RiMoneyDollarCircleLine}
            iconClr="text-violet-600"
            iconBg="bg-violet-50"
          />
          <StatCard
            title="Active Users"
            value="3,842"
            change="+8.2%"
            positive={true}
            icon={RiUserLine}
            iconClr="text-indigo-600"
            iconBg="bg-indigo-50"
          />
          <StatCard
            title="Total Orders"
            value="1,267"
            change="+5.3%"
            positive={true}
            icon={RiShoppingBagLine}
            iconClr="text-sky-600"
            iconBg="bg-sky-50"
          />
          <StatCard
            title="Churn Rate"
            value="2.34%"
            change="-0.8%"
            positive={false}
            icon={RiArrowUpLine}
            iconClr="text-rose-600"
            iconBg="bg-rose-50"
          />
        </div>
          {/* Charts Row */}
          <div className="grid grid-cols-1 gap-4 xl:grid-cols-3">
            <div className="xl:col-span-2">
              <RevenueChart />
            </div>
            <div className="">
              <DonutChart />
            </div>
          </div>

            {/* Button Row */}
            <div className="">
              
            </div>
        </div>
    </main>
  )
}

export default Dashboard