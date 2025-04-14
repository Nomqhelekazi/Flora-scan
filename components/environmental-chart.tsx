"use client"

import { Line, LineChart, CartesianGrid, XAxis, YAxis, Legend, ResponsiveContainer } from "recharts"

import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { monthlyClimateData } from "@/lib/climate-data"

export function EnvironmentalChart() {
  return (
    <div className="w-full h-[400px]">
      <ChartContainer
        config={{
          temperature: {
            label: "Temperature (°C)",
            color: "hsl(var(--chart-1))",
          },
          rainfall: {
            label: "Rainfall (mm)",
            color: "hsl(var(--chart-2))",
          },
          sunlight: {
            label: "Sunlight (hours/day)",
            color: "hsl(var(--chart-3))",
          },
          windSpeed: {
            label: "Wind Speed (m/s)",
            color: "hsl(var(--chart-4))",
          },
        }}
        className="h-full"
      >
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={monthlyClimateData}
            margin={{
              top: 20,
              right: 30,
              left: 20,
              bottom: 30,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis yAxisId="left" />
            <YAxis yAxisId="right" orientation="right" />
            <ChartTooltip content={<ChartTooltipContent />} />
            <Legend
              verticalAlign="bottom"
              height={36}
              formatter={(value) => {
                const labels = {
                  temperature: "Temperature (°C)",
                  rainfall: "Rainfall (mm)",
                  sunlight: "Sunlight (hours/day)",
                  windSpeed: "Wind Speed (m/s)",
                }
                return labels[value as keyof typeof labels] || value
              }}
            />
            <Line
              yAxisId="left"
              type="monotone"
              dataKey="temperature"
              stroke="var(--color-temperature)"
              activeDot={{ r: 8 }}
            />
            <Line yAxisId="right" type="monotone" dataKey="rainfall" stroke="var(--color-rainfall)" />
            <Line yAxisId="left" type="monotone" dataKey="sunlight" stroke="var(--color-sunlight)" />
            <Line
              yAxisId="left"
              type="monotone"
              dataKey="windSpeed"
              stroke="var(--color-windSpeed)"
              strokeDasharray="5 5"
            />
          </LineChart>
        </ResponsiveContainer>
      </ChartContainer>

      <div className="flex flex-wrap justify-center gap-4 mt-4">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full" style={{ backgroundColor: "var(--color-temperature)" }}></div>
          <span className="text-xs">Temperature (°C)</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full" style={{ backgroundColor: "var(--color-rainfall)" }}></div>
          <span className="text-xs">Rainfall (mm)</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full" style={{ backgroundColor: "var(--color-sunlight)" }}></div>
          <span className="text-xs">Sunlight (hours/day)</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full" style={{ backgroundColor: "var(--color-windSpeed)" }}></div>
          <span className="text-xs">Wind Speed (m/s)</span>
        </div>
      </div>
    </div>
  )
}
