/**
 * Runs the Sanity CLI with Node 18+, even when `npx`/`npm` is bound to Node 16.
 * Vite 6 needs crypto.getRandomValues, which is missing on Node 16.
 */
const { spawnSync, execFileSync } = require("child_process");
const fs = require("fs");
const path = require("path");

const MIN_MAJOR = 18;

function nodeMajor(bin) {
  try {
    const version = execFileSync(bin, ["-p", "process.versions.node"], {
      encoding: "utf8",
    }).trim();
    return parseInt(version.split(".")[0], 10);
  } catch {
    return 0;
  }
}

function resolveNode() {
  const candidates = [
    process.env.NODE_BINARY,
    "C:\\Program Files\\nodejs\\node.exe",
    process.execPath,
  ].filter(Boolean);

  for (const bin of candidates) {
    if (fs.existsSync(bin) && nodeMajor(bin) >= MIN_MAJOR) {
      return bin;
    }
  }

  return null;
}

const nodeBin = resolveNode();
if (!nodeBin) {
  console.error(
    "Sanity Studio needs Node.js 18+ (20 recommended). This shell is using Node " +
      process.versions.node +
      ".\nUse Node 20 from C:\\Program Files\\nodejs\\node.exe"
  );
  process.exit(1);
}

const sanityBin = path.join(__dirname, "node_modules", "@sanity", "cli", "bin", "sanity");
const result = spawnSync(nodeBin, [sanityBin, ...process.argv.slice(2)], {
  stdio: "inherit",
  env: process.env,
  cwd: __dirname,
  windowsHide: true,
});

process.exit(result.status ?? 1);
