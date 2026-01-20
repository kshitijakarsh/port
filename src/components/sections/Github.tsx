"use client";

import axios from "axios";
import { useEffect, useState } from "react";
import { GithubContributionChart } from "@/components/GithubContributionChart";
import Button from "@/components/Button";
import { GithubContributionMap } from "@/components/GithubContributionMap";
import { type DateRange } from "react-day-picker";
import { Calendar } from "@/components/ui/calendar";

interface ContributionDay {
  contributionCount: number;
  date: string;
}

interface ContributionWeek {
  contributionDays: ContributionDay[];
}

interface ContributionCalendar {
  totalContributions: number;
  weeks: ContributionWeek[];
}

interface ContributionsResponse {
  data: {
    user: {
      contributionsCollection: {
        contributionCalendar: ContributionCalendar;
      };
    };
  };
}

export interface ChartPoint {
  date: string;
  contributions: number;
}

export default function Github() {
  const [chartData, setChartData] = useState<ChartPoint[]>([]);
  const today = new Date();
  const oneMonthBack = new Date(today);
  oneMonthBack.setMonth(today.getMonth() - 1);

  const [dateRange, setDateRange] = useState<DateRange | undefined>({
    from: oneMonthBack,
    to: today,
  });
  const [showcalendar, setShowcalendar] = useState(false);
  const [visualMode, setVisualMode] = useState<"chart" | "heatmap">("heatmap");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post(
          "https://api.github.com/graphql",
          {
            query: `
              query($userName:String!) {
                user(login: $userName){
                  contributionsCollection {
                    contributionCalendar {
                      totalContributions
                      weeks {
                        contributionDays {
                          contributionCount
                          date
                        }
                      }
                    }
                  }
                }
              }
            `,
            variables: { userName: "kshitijakarsh" },
          },
          {
            headers: {
              Authorization: `Bearer ${process.env.NEXT_PUBLIC_GITHUB_TOKEN}`,
            },
          }
        );

        const calendar =
          response.data.data.user.contributionsCollection.contributionCalendar;

        const flat = calendar.weeks.flatMap(
          (week: { contributionDays: ContributionDay[] }) =>
            week.contributionDays.map((day) => ({
              date: day.date,
              contributions: day.contributionCount,
            }))
        );

        setChartData(flat);
      } catch (error) {
        console.error("Error fetching GitHub data", error);
      }
    };

    fetchData();
  }, []);

  const filteredData = chartData.filter((d) => {
    if (!dateRange?.from || !dateRange?.to) return true;
    const date = new Date(d.date);
    return date >= dateRange.from && date <= dateRange.to;
  });

  return (
    <div className="px-4 w-full">
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3">
        <h1 className="text-lg sm:text-xl serif font-semibold py-3 sm:py-4">
          Github Contributions
        </h1>

        <div className="flex items-center gap-1 outline outline-offset-2 outline-amber-400 rounded-md mx-auto sm:mx-0">
          <div onClick={() => setVisualMode("heatmap")}>
            <Button text="Heatmap" />
          </div>
          <div className="self-stretch w-px bg-amber-400"></div>
          <div onClick={() => setVisualMode("chart")}>
            <Button text="Chart" />
          </div>
        </div>
      </div>

      <div className="flex justify-center w-full pb-10">
        {visualMode === "chart" ? (
          <div className="relative w-full max-w-3xl mt-4">
            <div
              onClick={() => setShowcalendar((prev) => !prev)}
              className="flex justify-end mb-2 z-30 relative"
            >
              <Button text={showcalendar ? "Hide Calendar" : "Show Calendar"} />
            </div>

            {showcalendar && (
              <div className="absolute inset-0 z-20 flex items-start justify-center sm:justify-end pointer-events-none">
                <div className="mt-8 rounded-lg border shadow-xl bg-white p-4 pointer-events-auto w-[95%] sm:w-auto">
                  <Calendar
                    mode="range"
                    defaultMonth={dateRange?.from}
                    selected={dateRange}
                    onSelect={setDateRange}
                    numberOfMonths={1}
                    className="rounded-lg"
                  />
                </div>
              </div>
            )}
            <div
              className={`${
                showcalendar ? "opacity-30 pointer-events-none" : ""
              }`}
            >
              <GithubContributionChart data={filteredData} />
            </div>
          </div>
        ) : (
          <div className="mt-4 w-full max-w-3xl">
            <GithubContributionMap />
          </div>
        )}
      </div>
    </div>
  );
}
