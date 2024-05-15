"use client";

import {
  Bar,
  BarChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip
} from "recharts";

import { Card } from "@/components/ui/card";

interface ChartProps {
  data: {
    name: string;
    total: number;
  }[];
}

export const Chart = ({
  data
}: ChartProps) => {
  return (
    <Card>
      <ResponsiveContainer width="100%" height={350}>
        <BarChart data={data}>
          <XAxis
            dataKey="name"
            stroke="#888888"
            fontSize={10}
            tickLine={false}
            axisLine={false}
            className="text-ellipsis overflow-hidden"
          />
          <YAxis
            stroke="#888888"
            fontSize={10}
            tickLine={false}
            axisLine={false}
            tickFormatter={(value) => `$${value}`}
          />
          <Tooltip wrapperStyle={{ padding: '2rem auto',  backgroundColor: '#fff' }} />
          <Bar
            dataKey="total"
            fill="#0369a1"
            radius={[4, 4, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </Card>
  )
}