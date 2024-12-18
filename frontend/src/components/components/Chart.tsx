import { 
    ChartConfig,
    ChartContainer,
    ChartLegend,
    ChartLegendContent,
    ChartTooltip,
    ChartTooltipContent,
} from "../ui/chart";
import { BarChart, Bar, CartesianGrid, XAxis } from "recharts";

const Chart = () => {
  const chartData = [
    { month: "January", desktop: 186, mobile: 80 },
    { month: "February", desktop: 305, mobile: 200 },
    { month: "March", desktop: 237, mobile: 120 },
    { month: "April", desktop: 73, mobile: 190 },
    { month: "May", desktop: 209, mobile: 130 },
    { month: "June", desktop: 214, mobile: 140 },
  ];

  const chartConfig = {
    desktop: {
      label: "Savings",
      color: "#2563eb",
    },
    mobile: {
      label: "Loan",
      color: "#60a5fa",
    },
  } satisfies ChartConfig;
  return (
    <div className="mt-10">
      <div className="flex flex-row items-center justify-between mt-3">
        <div>
          <h2 className="font-semibold text-xl md:text-3xl">
            Group Savings by months
          </h2>
          <p className="font-thin">Savings summary from 1-12 Nov, 2024</p>
        </div>
        <div>
          <h2>Total savings</h2>
          <p className="text-3xl">₦1,278.45</p>
        </div>
      </div>
      <div className="">
        <ChartContainer config={chartConfig} className="min-h-[200px] w-full">
          <BarChart accessibilityLayer data={chartData}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <Bar dataKey="desktop" fill="var(--color-desktop)" radius={4} />
            <Bar dataKey="mobile" fill="var(--color-mobile)" radius={4} />
          </BarChart>
        </ChartContainer>
      </div>
    </div>
  );
};

export default Chart;
