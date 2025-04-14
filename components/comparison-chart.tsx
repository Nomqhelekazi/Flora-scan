"use client"

import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer, Legend } from "recharts"

interface ComparisonChartProps {
  plants: string[]
}

export function ComparisonChart({ plants }: ComparisonChartProps) {
  // Sample data for demonstration
  const chartData = [
    { characteristic: "Growth Rate", fullMark: 10, Lavender: 6, Sedum: 4, "Ornamental Grass": 8 },
    { characteristic: "Water Needs", fullMark: 10, Lavender: 3, Sedum: 2, "Ornamental Grass": 5 },
    { characteristic: "Maintenance", fullMark: 10, Lavender: 4, Sedum: 2, "Ornamental Grass": 3 },
    { characteristic: "Biodiversity", fullMark: 10, Lavender: 8, Sedum: 6, "Ornamental Grass": 7 },
    { characteristic: "Drought Resistance", fullMark: 10, Lavender: 7, Sedum: 9, "Ornamental Grass": 6 },
  ]

  // Define colors for each plant
  const colors = ["#8884d8", "#82ca9d", "#ffc658", "#ff8042"]

  return (
    <div className="w-full h-[400px]">
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart cx="50%" cy="50%" outerRadius="80%" data={chartData}>
          <PolarGrid />
          <PolarAngleAxis dataKey="characteristic" />
          <PolarRadiusAxis angle={30} domain={[0, 10]} />

          {["Lavender", "Sedum", "Ornamental Grass"].map((plant, index) => (
            <Radar
              key={plant}
              name={plant}
              dataKey={plant}
              stroke={colors[index % colors.length]}
              fill={colors[index % colors.length]}
              fillOpacity={0.2}
            />
          ))}

          <Legend />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  )
}
