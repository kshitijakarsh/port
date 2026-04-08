import { headers } from "next/headers";
import fs from "fs";

export async function GET() {
  const headersList = await headers();
  const ip = headersList.get("x-forwarded-for");

  fs.readFile("./src/data/vistors.json", "utf-8", (err, data) => {
    if (err) {
      console.log(err);
      return;
    }
    const visitors = JSON.parse(data);
    visitors.count++;
    fs.writeFile("./src/data/vistors.json", JSON.stringify(visitors), (err) => {
      if (err) {
        console.log(err);
      }
    });
  });

  console.log(ip);
  return Response.json({ ok: true });
}