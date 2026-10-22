const fs = require("fs");
const path = require("path");

const outputDir = path.join(process.cwd(), "out");
const basePath = "/arman-vaziri";

const textExtensions = new Set([
  ".html",
  ".js",
  ".css",
  ".json",
  ".txt",
  ".xml",
  ".svg",
  ".webmanifest",
]);

function processDirectory(directory) {
  for (const entry of fs.readdirSync(directory, { withFileTypes: true })) {
    const fullPath = path.join(directory, entry.name);

    if (entry.isDirectory()) {
      processDirectory(fullPath);
      continue;
    }

    if (!textExtensions.has(path.extname(entry.name))) {
      continue;
    }

    const content = fs.readFileSync(fullPath, "utf8");
    const fixedContent = content.replace(
      /(?<!\/arman-vaziri)\/images\//g,
      `${basePath}/images/`
    );

    if (fixedContent !== content) {
      fs.writeFileSync(fullPath, fixedContent, "utf8");
    }
  }
}

if (!fs.existsSync(outputDir)) {
  console.error("Export folder 'out' was not found. Run the build first.");
  process.exit(1);
}

processDirectory(outputDir);
console.log("Exported image paths fixed successfully.");
