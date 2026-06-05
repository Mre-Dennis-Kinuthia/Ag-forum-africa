import { access } from "node:fs/promises"
import { join } from "node:path"

const required = [
  "hero-farmland.jpg",
  "golden-fields.jpg",
  "farmer-field.jpg",
  "og-image.jpg",
]

const imagesDir = join(process.cwd(), "public", "images")

for (const file of required) {
  try {
    await access(join(imagesDir, file))
  } catch {
    console.error(`Missing required image: public/images/${file}`)
    process.exit(1)
  }
}

console.log(`✓ ${required.length} images present`)
