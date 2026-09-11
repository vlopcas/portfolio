import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const root = fileURLToPath(new URL("..", import.meta.url));

const backgrounds = [
  ["docs/source-media/backgrounds/home/home-dark.png", "public/images/backgrounds/home/home-dark.webp"],
  ["docs/source-media/backgrounds/home/home-light.png", "public/images/backgrounds/home/home-light.webp"],
  ...["about", "experience", "projects"].flatMap((page) => ["dark", "light"].map((theme) => [
    `docs/source-media/backgrounds/pages/${page}-background-${theme}.png`,
    `public/images/backgrounds/pages/${page}-${theme}.webp`,
  ])),
  ...["medaudit", "third-party-lifecycle", "municipal-fiscal-data-platform", "energy-load-forecasting", "coping-struggles-prediction"].flatMap((project) => ["dark", "light"].map((theme) => [
    `docs/source-media/backgrounds/projects/${project}-background-${theme}.png`,
    `public/images/backgrounds/projects/${project}-${theme}.webp`,
  ])),
];

const rasterAssets = [
  { source: "docs/victor.jpg", destination: "public/images/portrait/victor.webp", width: 1000, quality: 84 },
  { source: "docs/source-media/brand/logo.png", destination: "public/images/brand/logo-dark.png", width: 256 },
  { source: "docs/source-media/brand/logo-preta.png", destination: "public/images/brand/logo-light.png", width: 256 },
  { source: "docs/source-media/institutions/ada-logo.jpg", destination: "public/images/institutions/ada.webp", width: 360, quality: 84 },
  { source: "docs/source-media/institutions/logo-agil.jpg", destination: "public/images/institutions/agil.webp", width: 200, quality: 86 },
  { source: "docs/source-media/institutions/unimed-logo.png", destination: "public/images/institutions/unimed.webp", width: 420, quality: 86 },
  { source: "docs/source-media/institutions/logo-ufg-horizontal.png", destination: "public/images/institutions/ufg-horizontal-dark.png", width: 360 },
  { source: "docs/source-media/institutions/logo-ufg-horizontal-colorida.png", destination: "public/images/institutions/ufg-horizontal-light.png", width: 360 },
];

async function prepare(destination) {
  await fs.mkdir(path.dirname(path.join(root, destination)), { recursive: true });
}
for (const [source, destination] of backgrounds) {
  await prepare(destination);
  await sharp(path.join(root, source)).webp({ quality: 82, effort: 6, smartSubsample: true }).toFile(path.join(root, destination));
}

for (const asset of rasterAssets) {
  await prepare(asset.destination);
  const image = sharp(path.join(root, asset.source)).resize({ width: asset.width, withoutEnlargement: true });
  if (path.extname(asset.destination) === ".webp") {
    await image.webp({ quality: asset.quality ?? 86, effort: 6, smartSubsample: true }).toFile(path.join(root, asset.destination));
  } else {
    await image.png({ compressionLevel: 9, adaptiveFiltering: true }).toFile(path.join(root, asset.destination));
  }
}
