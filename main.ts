const fs = require("fs");
const path = require("path");

const TEXT = "The eraser shrinks every time it works. By the time you actually need it — one wrong word in an exam — it is a pink crumb your fingers cannot even hold.";

if (TEXT.length < 1 || TEXT.length > 200) {
  throw new Error("TEXT must be 1-200 characters, got " + TEXT.length);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";

try {
  fs.mkdirSync(outDir, { recursive: true });
  fs.writeFileSync(path.join(outDir, "entry.txt"), TEXT);
} catch (err) {
  console.error(err);
  process.exit(1);
}
