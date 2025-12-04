"use client"

import {
  ChartContainer,
  ChartTooltipContent,
} from "@/components/ui/chart"

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
} from "recharts"

export function GithubContributionChart({ data }: { data: any[] }) {

  return (
    <ChartContainer
      config={{
        contributions: {
          label: "Contributions",
          color: "#FFBF00",
        },
      }}
      className="
        w-full
        h-[250px]       /* Mobile height */
        sm:h-[300px]     /* Tablet */
        md:h-[350px]     /* Desktop */
        lg:h-[400px]     /* Large screens */
        xl:h-[450px]     /* Extra large */
        flex
        justify-center
        items-center
      "
    >
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={data}
          margin={{ left: 20, right: 20, top: 10, bottom: 10 }}
        >
          <CartesianGrid strokeDasharray="3 3" />

          <XAxis
            dataKey="date"
            tickLine={false}
            axisLine={false}
            minTickGap={20}
          />

          <YAxis tickLine={false} axisLine={false} allowDecimals={false} />

          <Tooltip content={<ChartTooltipContent />} />

          <Line
            type="monotone"
            dataKey="contributions"
            stroke="var(--color-contributions)"
            strokeWidth={2}
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </ChartContainer>
  )
}
