"use client"

import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts"

import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

interface BloomCalendarChartProps {
  plantType: string
  color: string
}

export function BloomCalendarChart({ plantType, color }: BloomCalendarChartProps) {
  // This would be replaced with actual data in a real implementation
  const data = [
    {
      name: "Tulip",
      type: "bulb",
      color: "red",
      jan: 0,
      feb: 0,
      mar: 50,
      apr: 100,
      may: 80,
      jun: 0,
      jul: 0,
      aug: 0,
      sep: 0,
      oct: 0,
      nov: 0,
      dec: 0,
    },
    {
      name: "Daffodil",
      type: "bulb",
      color: "yellow",
      jan: 0,
      feb: 20,
      mar: 90,
      apr: 100,
      may: 30,
      jun: 0,
      jul: 0,
      aug: 0,
      sep: 0,
      oct: 0,
      nov: 0,
      dec: 0,
    },
    {
      name: "Cherry Blossom",
      type: "tree",
      color: "pink",
      jan: 0,
      feb: 0,
      mar: 30,
      apr: 100,
      may: 50,
      jun: 0,
      jul: 0,
      aug: 0,
      sep: 0,
      oct: 0,
      nov: 0,
      dec: 0,
    },
    {
      name: "Rose",
      type: "shrub",
      color: "pink",
      jan: 0,
      feb: 0,
      mar: 0,
      apr: 0,
      may: 30,
      jun: 90,
      jul: 100,
      aug: 80,
      sep: 40,
      oct: 0,
      nov: 0,
      dec: 0,
    },
    {
      name: "Lavender",
      type: "shrub",
      color: "blue",
      jan: 0,
      feb: 0,
      mar: 0,
      apr: 0,
      may: 20,
      jun: 80,
      jul: 100,
      aug: 90,
      sep: 30,
      oct: 0,
      nov: 0,
      dec: 0,
    },
    {
      name: "Sunflower",
      type: "flower",
      color: "yellow",
      jan: 0,
      feb: 0,
      mar: 0,
      apr: 0,
      may: 0,
      jun: 30,
      jul: 90,
      aug: 100,
      sep: 70,
      oct: 20,
      nov: 0,
      dec: 0,
    },
    {
      name: "Aster",
      type: "flower",
      color: "blue",
      jan: 0,
      feb: 0,
      mar: 0,
      apr: 0,
      may: 0,
      jun: 0,
      jul: 0,
      aug: 30,
      sep: 90,
      oct: 100,
      nov: 40,
      dec: 0,
    },
    {
      name: "Chrysanthemum",
      type: "flower",
      color: "pink",
      jan: 0,
      feb: 0,
      mar: 0,
      apr: 0,
      may: 0,
      jun: 0,
      jul: 0,
      aug: 0,
      sep: 60,
      oct: 100,
      nov: 80,
      dec: 0,
    },
    {
      name: "Winter Jasmine",
      type: "shrub",
      color: "yellow",
      jan: 70,
      feb: 90,
      mar: 50,
      apr: 0,
      may: 0,
      jun: 0,
      jul: 0,
      aug: 0,
      sep: 0,
      oct: 0,
      nov: 0,
      dec: 40,
    },
    {
      name: "Hellebore",
      type: "flower",
      color: "white",
      jan: 60,
      feb: 100,
      mar: 80,
      apr: 30,
      may: 0,
      jun: 0,
      jul: 0,
      aug: 0,
      sep: 0,
      oct: 0,
      nov: 0,
      dec: 30,
    },
  ]

  // Filter data based on selected plant type and color
  const filteredData = data.filter((item) => {
    if (plantType !== "all" && item.type !== plantType) return false
    if (color !== "all" && item.color !== color) return false
    return true
  })

  return (
    <div className="w-full h-[500px]">
      <ChartContainer
        config={{
          jan: { label: "January", color: "hsl(var(--chart-1))" },
          feb: { label: "February", color: "hsl(var(--chart-1))" },
          mar: { label: "March", color: "hsl(var(--chart-1))" },
          apr: { label: "April", color: "hsl(var(--chart-2))" },
          may: { label: "May", color: "hsl(var(--chart-2))" },
          jun: { label: "June", color: "hsl(var(--chart-3))" },
          jul: { label: "July", color: "hsl(var(--chart-3))" },
          aug: { label: "August", color: "hsl(var(--chart-3))" },
          sep: { label: "September", color: "hsl(var(--chart-4))" },
          oct: { label: "October", color: "hsl(var(--chart-4))" },
          nov: { label: "November", color: "hsl(var(--chart-4))" },
          dec: { label: "December", color: "hsl(var(--chart-1))" },
        }}
        className="h-full"
      >
        <BarChart
          data={filteredData}
          layout="vertical"
          margin={{
            top: 20,
            right: 30,
            left: 100,
            bottom: 10,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" horizontal={false} />
          <XAxis type="number" domain={[0, 100]} />
          <YAxis dataKey="name" type="category" width={100} />
          <ChartTooltip content={<ChartTooltipContent />} />
          <Bar dataKey="jan" stackId="a" fill="var(--color-jan)" />
          <Bar dataKey="feb" stackId="a" fill="var(--color-feb)" />
          <Bar dataKey="mar" stackId="a" fill="var(--color-mar)" />
          <Bar dataKey="apr" stackId="a" fill="var(--color-apr)" />
          <Bar dataKey="may" stackId="a" fill="var(--color-may)" />
          <Bar dataKey="jun" stackId="a" fill="var(--color-jun)" />
          <Bar dataKey="jul" stackId="a" fill="var(--color-jul)" />
          <Bar dataKey="aug" stackId="a" fill="var(--color-aug)" />
          <Bar dataKey="sep" stackId="a" fill="var(--color-sep)" />
          <Bar dataKey="oct" stackId="a" fill="var(--color-oct)" />
          <Bar dataKey="nov" stackId="a" fill="var(--color-nov)" />
          <Bar dataKey="dec" stackId="a" fill="var(--color-dec)" />
        </BarChart>
      </ChartContainer>
    </div>
  )
}
