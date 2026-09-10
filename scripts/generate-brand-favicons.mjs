import fs from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const [source, destination] = process.argv.slice(2);
if (!source || !destination) throw new Error("Usage: node generate-brand-favicons.mjs <logo.png> <output-directory>");

const sizes = [16, 32, 48, 180, 192, 512];
await fs.mkdir(destination, { recursive: true });

for (const size of sizes) {
  const inset = Math.max(2, Math.round(size * 0.12));
  const logoSize = size - inset * 2;
  const radius = Math.round(size * 0.2);
  const background = Buffer.from(`<svg width="${size}" height="${size}" xmlns="http://www.w3.org/2000/svg"><rect width="${size}" height="${size}" rx="${radius}" fill="#0b1014"/></svg>`);
  const logo = await sharp(source).trim().resize({ width: logoSize, height: logoSize, fit: "inside" }).png().toBuffer();
  const metadata = await sharp(logo).metadata();
  const left = Math.round((size - (metadata.width ?? logoSize)) / 2);
  const top = Math.round((size - (metadata.height ?? logoSize)) / 2);
  const filename = size === 180 ? "apple-touch-icon.png" : size >= 192 ? `icon-${size}.png` : `favicon-${size}x${size}.png`;
  await sharp(background).composite([{ input: logo, left, top }]).png().toFile(path.join(destination, filename));
}
