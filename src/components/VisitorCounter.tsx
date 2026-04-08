import fs from "fs";

export default function VisitorCounter() {
  const data = fs.readFileSync("./src/data/vistors.json", "utf-8");
  const visitors = JSON.parse(data);
  return visitors.count;
}