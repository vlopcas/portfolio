import { readFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const photo = (await readFile(new URL("../public/victor.jpg", import.meta.url))).toString("base64");
const hero = (await readFile(new URL("../public/hero.png", import.meta.url))).toString("base64");
const svg = `
<svg width="1200" height="630" viewBox="0 0 1200 630" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="shade" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0" stop-color="#0b1014" stop-opacity=".98"/>
      <stop offset=".58" stop-color="#0b1014" stop-opacity=".88"/>
      <stop offset="1" stop-color="#0b1014" stop-opacity=".30"/>
    </linearGradient>
    <clipPath id="photo"><rect x="800" y="50" width="350" height="530" rx="175"/></clipPath>
  </defs>
  <rect width="1200" height="630" fill="#0b1014"/>
  <image href="data:image/png;base64,${hero}" width="1200" height="630" preserveAspectRatio="xMidYMid slice" opacity=".5"/>
  <rect width="1200" height="630" fill="url(#shade)"/>
  <circle cx="72" cy="70" r="7" fill="#f06416"/>
  <text x="95" y="79" fill="#f06416" font-family="Arial, sans-serif" font-size="25" font-weight="700" letter-spacing="4">PORTFÓLIO</text>
  <text x="70" y="252" fill="#f2f4f5" font-family="Arial, sans-serif" font-size="76" font-weight="700" letter-spacing="-3">Victor Castro.</text>
  <text x="74" y="315" fill="#f06416" font-family="Arial, sans-serif" font-size="31" font-weight="700">Data Scientist</text>
  <text x="74" y="366" fill="#c5cdd4" font-family="Arial, sans-serif" font-size="28">Software · Dados · Machine Learning · IA</text>
  <line x1="74" y1="432" x2="650" y2="432" stroke="#394550"/>
  <text x="74" y="482" fill="#a8b2bc" font-family="Arial, sans-serif" font-size="22">Projetos, experiência e estudos de caso.</text>
  <text x="74" y="550" fill="#f2f4f5" font-family="Arial, sans-serif" font-size="22" font-weight="700">vlopcas.dev</text>
  <rect x="786" y="36" width="378" height="558" rx="189" fill="none" stroke="#f06416" stroke-opacity=".6" stroke-width="2"/>
  <image href="data:image/jpeg;base64,${photo}" x="800" y="50" width="350" height="530" preserveAspectRatio="xMidYMid slice" clip-path="url(#photo)"/>
</svg>`;

await sharp(Buffer.from(svg)).png().toFile(fileURLToPath(new URL("../public/social-preview-v1.png", import.meta.url)));

const squareSvg = `
<svg width="1200" height="1200" viewBox="0 0 1200 1200" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="square-shade" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#0b1014" stop-opacity=".45"/>
      <stop offset=".58" stop-color="#0b1014" stop-opacity=".82"/>
      <stop offset="1" stop-color="#0b1014" stop-opacity="1"/>
    </linearGradient>
    <clipPath id="square-photo"><circle cx="600" cy="390" r="280"/></clipPath>
  </defs>
  <rect width="1200" height="1200" fill="#0b1014"/>
  <image href="data:image/png;base64,${hero}" width="1200" height="1200" preserveAspectRatio="xMidYMid slice" opacity=".58"/>
  <rect width="1200" height="1200" fill="url(#square-shade)"/>
  <circle cx="600" cy="390" r="301" fill="#0b1014" fill-opacity=".72" stroke="#f06416" stroke-width="3"/>
  <image href="data:image/jpeg;base64,${photo}" x="320" y="110" width="560" height="560" preserveAspectRatio="xMidYMid slice" clip-path="url(#square-photo)"/>
  <circle cx="94" cy="90" r="8" fill="#f06416"/>
  <text x="120" y="100" fill="#f06416" font-family="Arial, sans-serif" font-size="29" font-weight="700" letter-spacing="5">PORTFÓLIO</text>
  <text x="600" y="790" text-anchor="middle" fill="#f2f4f5" font-family="Arial, sans-serif" font-size="91" font-weight="700" letter-spacing="-3">Victor Castro.</text>
  <text x="600" y="862" text-anchor="middle" fill="#f06416" font-family="Arial, sans-serif" font-size="39" font-weight="700">Data Scientist</text>
  <text x="600" y="928" text-anchor="middle" fill="#c5cdd4" font-family="Arial, sans-serif" font-size="31">Software · Dados · Machine Learning · IA</text>
  <line x1="250" y1="990" x2="950" y2="990" stroke="#3a4650" stroke-width="2"/>
  <text x="600" y="1055" text-anchor="middle" fill="#a8b2bc" font-family="Arial, sans-serif" font-size="28">Projetos, experiência e estudos de caso</text>
  <text x="600" y="1122" text-anchor="middle" fill="#f2f4f5" font-family="Arial, sans-serif" font-size="28" font-weight="700">vlopcas.dev</text>
</svg>`;

await sharp(Buffer.from(squareSvg)).png().toFile(fileURLToPath(new URL("../public/social-preview-square-v1.png", import.meta.url)));
