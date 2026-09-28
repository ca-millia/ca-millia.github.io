import fs from 'node:fs/promises';
import sharp from 'sharp';

let before = 0;
let after = 0;
for (const file of await fs.readdir('public/img')) {
  if (!/\.(jpg|jpeg)$/i.test(file)) continue;
  const source = await fs.readFile(`public/img/${file}`);
  const output = await sharp(source).rotate().resize({ width: 1600, withoutEnlargement: true }).jpeg({ quality: 82, mozjpeg: true }).toBuffer();
  const result = output.length < source.length ? output : source;
  await fs.writeFile(`dist/img/${file}`, result);
  before += source.length;
  after += result.length;
}
console.log(`JPEG delivery images: ${(before / 1e6).toFixed(2)} MB → ${(after / 1e6).toFixed(2)} MB. Originals unchanged.`);
