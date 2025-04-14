"use client"

import { Calendar } from "lucide-react"

interface SeasonalCalendarProps {
  season: string
  type: "blooming" | "dormancy" | "drought"
}

export function SeasonalCalendar({ season, type }: SeasonalCalendarProps) {
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]

  // This would be replaced with actual data in a real implementation
  const getActivityLevel = (month: string, season: string, type: string): number => {
    if (type === "blooming") {
      if (season === "spring" && ["Mar", "Apr", "May"].includes(month)) return 3
      if (season === "summer" && ["Jun", "Jul", "Aug"].includes(month)) return 3
      if (season === "autumn" && ["Sep", "Oct", "Nov"].includes(month)) return 3
      if (season === "winter" && ["Dec", "Jan", "Feb"].includes(month)) return 3

      // Adjacent seasons have medium activity
      if (season === "spring" && ["Feb", "Jun"].includes(month)) return 2
      if (season === "summer" && ["May", "Sep"].includes(month)) return 2
      if (season === "autumn" && ["Aug", "Dec"].includes(month)) return 2
      if (season === "winter" && ["Nov", "Mar"].includes(month)) return 2

      return 1
    } else if (type === "dormancy") {
      // Inverse of blooming for simplicity
      if (["Dec", "Jan", "Feb"].includes(month)) return 3 // Winter dormancy
      if (["Nov", "Mar"].includes(month)) return 2 // Transition
      return 1
    } else {
      // Drought periods
      if (["Jul", "Aug"].includes(month)) return 3 // Peak drought
      if (["Jun", "Sep"].includes(month)) return 2 // Moderate drought
      return 1
    }
  }

  const getActivityColor = (level: number, type: string): string => {
    if (type === "blooming") {
      return level === 3 ? "bg-green-500" : level === 2 ? "bg-green-300" : "bg-gray-200 dark:bg-gray-700"
    } else if (type === "dormancy") {
      return level === 3 ? "bg-blue-500" : level === 2 ? "bg-blue-300" : "bg-gray-200 dark:bg-gray-700"
    } else {
      return level === 3 ? "bg-amber-500" : level === 2 ? "bg-amber-300" : "bg-gray-200 dark:bg-gray-700"
    }
  }

  return (
    <div className="w-full p-4 border rounded-lg">
      <div className="flex items-center gap-2 mb-4">
        <Calendar className="h-5 w-5 text-muted-foreground" />
        <h3 className="font-medium">
          {type === "blooming" ? "Blooming" : type === "dormancy" ? "Dormancy" : "Drought"} Calendar
        </h3>
      </div>

      <div className="grid grid-cols-12 gap-1">
        {months.map((month) => {
          const activityLevel = getActivityLevel(month, season, type)
          const colorClass = getActivityColor(activityLevel, type)

          return (
            <div key={month} className="flex flex-col items-center">
              <div className="text-xs font-medium mb-1">{month}</div>
              <div className={`w-full h-16 ${colorClass} rounded-md flex items-center justify-center`}>
                <span className="text-xs font-medium text-white">
                  {activityLevel === 3 ? "High" : activityLevel === 2 ? "Med" : "Low"}
                </span>
              </div>
            </div>
          )
        })}
      </div>

      <div className="flex justify-between mt-4">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-gray-200 dark:bg-gray-700 rounded-full"></div>
          <span className="text-xs">Low</span>
        </div>
        <div className="flex items-center gap-2">
          <div
            className={`w-3 h-3 rounded-full ${type === "blooming" ? "bg-green-300" : type === "dormancy" ? "bg-blue-300" : "bg-amber-300"}`}
          ></div>
          <span className="text-xs">Medium</span>
        </div>
        <div className="flex items-center gap-2">
          <div
            className={`w-3 h-3 rounded-full ${type === "blooming" ? "bg-green-500" : type === "dormancy" ? "bg-blue-500" : "bg-amber-500"}`}
          ></div>
          <span className="text-xs">High</span>
        </div>
      </div>
    </div>
  )
}
