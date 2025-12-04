import { GitHubCalendar } from "react-github-calendar";

export const GithubContributionMap = () => {
  return (
    <GitHubCalendar
      username="kshitijakarsh"
      showColorLegend={false}
      theme={{
        light: ['hsl(0, 0%, 92%)', 'rebeccapurple'],
        dark: ["#333", "rgb(245, 158, 11)"],
      }}
    />
  );
};
