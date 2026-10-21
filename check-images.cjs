const sharp = require("sharp");
const path = "public/images/projects/apartments/velvet-vibe";

async function main() {
  for (const file of ["e-1.png", "e-2.png"]) {
    const image = await sharp(`${path}/${file}`).metadata();
    console.log(`${file}: ${image.width} x ${image.height}`);
  }
}

main().catch(console.error);
