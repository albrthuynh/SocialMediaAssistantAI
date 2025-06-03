import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { BarChart3, TrendingUp, Users, Eye, ChevronLeft, ChevronRight } from "lucide-react"

export function AnalyticsSidebar() {
  const [isCollapsed, setIsCollapsed] = useState(false)

  const metrics = [
    { label: "Total Views", value: "15.6k", icon: Eye, change: "+12%" },
    { label: "Engagement", value: "8.2k", icon: Users, change: "+8%" },
    { label: "Reposts", value: "125", icon: TrendingUp, change: "+15%" },
  ]

  return (
    <div
      className={`bg-[#1f1f1f] border-r border-[#3a3a3a] transition-all duration-300 flex-shrink-0 ${
        isCollapsed ? "w-32 mr-50" : "w-80"
        }`}
    >
      <div className="p-4 border-b border-[#3a3a3a] flex items-center justify-between">
        {!isCollapsed && <h2 className="text-lg font-semibold text-white">Analytics</h2>}
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="text-gray-400 hover:text-white hover:bg-[#3a3a3a]"
        >
          {isCollapsed ? <ChevronRight className="h-4 w-4" /> : <ChevronLeft className="h-4 w-4" />}
        </Button>
      </div>

      <div className="p-4 space-y-4">
        {!isCollapsed ? (
          <>
            {metrics.map((metric, index) => {
              const Icon = metric.icon
              return (
                <Card key={index} className="bg-[#2a2a2a] border-[#3a3a3a]">
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-gray-400">{metric.label}</p>
                        <p className="text-2xl font-bold text-white">{metric.value}</p>
                        <p className="text-sm text-[#ff6b35]">{metric.change}</p>
                      </div>
                      <Icon className="h-8 w-8 text-[#ff6b35]" />
                    </div>
                  </CardContent>
                </Card>
              )
            })}

            <Card className="bg-[#2a2a2a] border-[#3a3a3a]">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <BarChart3 className="h-5 w-5 text-[#ff6b35]" />
                  Engagement Trends
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-32 bg-[#1f1f1f] rounded-lg flex items-center justify-center">
                  <p className="text-gray-400 text-sm">Chart visualization</p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-[#2a2a2a] border-[#3a3a3a]">
              <CardHeader>
                <CardTitle className="text-white text-sm">Performance</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-400 text-sm">Reach</span>
                  <span className="text-white text-sm">24.5k</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400 text-sm">Impressions</span>
                  <span className="text-white text-sm">45.2k</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400 text-sm">CTR</span>
                  <span className="text-white text-sm">3.2%</span>
                </div>
              </CardContent>
            </Card>
          </>
        ) : (
          <div className="space-y-4">
            {metrics.map((metric, index) => {
              const Icon = metric.icon
              return (
                <div key={index} className="flex justify-center">
                  <Icon className="h-6 w-6 text-[#ff6b35]" />
                </div>
              )
            })}
          </div>
        )}
      </div>
    </div>
  )
}
