import StatCard from '@/components/stat-card'
import { User } from 'lucide-react'
import { RiMoneyDollarCircleLine } from "@remixicon/react"


function Dashboard() {
  return (
    <main>
      <div className="">
        {/* Stats */}
        <div className="">
          <StatCard
            title="Total Users"
            value="91,234"
            change="+12%"
            positive={true}
            icon={RiMoneyDollarCircleLine}
            iconClr="text-violet-600"
            iconBg="bg-violet-50"
          />
          {/* Charts Row */}
          <div className="">
            {/* Button Row */}
            <div className="">
              
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Dashboard