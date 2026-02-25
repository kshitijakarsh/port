import { createHash } from "crypto";
import { promises as fs } from "fs";
import path from "path";

type VisitorStore = {
  visitorKeys: string[];
};

const storeDir = process.env.VISITOR_STORE_DIR ?? path.join(process.cwd(), ".data");
const storeFile = path.join(storeDir, "visitors.json");
const visitorSalt = process.env.VISITOR_SALT ?? "portfolio-visitor-salt";

let writeQueue: Promise<number> = Promise.resolve(0);

function extractClientIp(headers: Headers): string {
  const forwarded = headers.get("x-forwarded-for");
  if (forwarded) return forwarded.split(",")[0].trim();

  const realIp = headers.get("x-real-ip");
  if (realIp) return realIp.trim();

  const cfIp = headers.get("cf-connecting-ip");
  if (cfIp) return cfIp.trim();

  return "unknown-ip";
}

function makeVisitorKey(headers: Headers): string {
  const ip = extractClientIp(headers);
  const userAgent = headers.get("user-agent") ?? "unknown-ua";

  return createHash("sha256")
    .update(`${visitorSalt}:${ip}:${userAgent}`)
    .digest("hex");
}

async function readStore(): Promise<VisitorStore> {
  try {
    const raw = await fs.readFile(storeFile, "utf8");
    const parsed = JSON.parse(raw) as Partial<VisitorStore>;

    if (!Array.isArray(parsed.visitorKeys)) {
      return { visitorKeys: [] };
    }

    return { visitorKeys: parsed.visitorKeys };
  } catch {
    return { visitorKeys: [] };
  }
}

async function writeStore(store: VisitorStore): Promise<void> {
  await fs.mkdir(storeDir, { recursive: true });
  await fs.writeFile(storeFile, JSON.stringify(store, null, 2), "utf8");
}

async function recordUniqueVisitorInternal(headers: Headers): Promise<number> {
  const key = makeVisitorKey(headers);
  const store = await readStore();

  if (!store.visitorKeys.includes(key)) {
    store.visitorKeys.push(key);
    await writeStore(store);
  }

  return store.visitorKeys.length;
}

export async function recordUniqueVisitor(headers: Headers): Promise<number> {
  writeQueue = writeQueue.then(async () => recordUniqueVisitorInternal(headers));
  return writeQueue;
}

