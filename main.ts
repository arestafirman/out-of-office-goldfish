import { mkdirSync, writeFileSync } from "node:fs";

// The entry: one out-of-office auto-reply, written exactly as judged.
// 141 characters, within the 1-159 character gate.
const ENTRY =
  "Out of office: I left my inbox with the office goldfish. He has answered 0 emails and promoted 3 to spam. Back Monday, unless he gets my job.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
