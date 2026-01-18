// import fs from 'fs/promises'
// import path from 'path'
// import sharp from 'sharp'
// import { GALLERIES } from './gallery.config.js'

// const R2_BASE_URL = 'https://img.neuimay.com/blog'

// const OUTPUT_JSON = 'src/generated/blurMap.json'
// const CACHE_DIR = '.cache/gallery'

// const BLUR_WIDTH = 24
// const BLUR_QUALITY = 30

// async function ensureDir(dir) {
//   await fs.mkdir(dir, { recursive: true })
// }

// async function downloadImage(url, dest) {
//   const res = await fetch(url)
//   if (!res.ok) {
//     throw new Error(`Failed to fetch ${url}`)
//   }

//   const buffer = new Uint8Array(await res.arrayBuffer())
//   await fs.writeFile(dest, buffer)
// }

// async function generateBlur(imagePath) {
//   const buffer = await sharp(imagePath)
//     .resize(BLUR_WIDTH)
//     .jpeg({ quality: BLUR_QUALITY })
//     .toBuffer()

//   return `data:image/jpeg;base64,${buffer.toString('base64')}`
// }

// async function main() {
//   console.log('🟡 Generating blurMap...')

//   await ensureDir(CACHE_DIR)
//   await ensureDir(path.dirname(OUTPUT_JSON))

//   const blurMap = {}

//   for (const [folder, files] of Object.entries(GALLERIES)) {
//     for (const file of files) {
//       const key = `${folder}/${file}`
//       const url = `${R2_BASE_URL}/${key}`
//       const localPath = path.join(CACHE_DIR, file)

//       console.log(`⬇️  ${key}`)
//       await downloadImage(url, localPath)

//       console.log(`🎨 Blur ${key}`)
//       blurMap[key] = await generateBlur(localPath)
//     }
//   }

//   await fs.writeFile(
//     OUTPUT_JSON,
//     JSON.stringify(blurMap, null, 2),
//     'utf-8'
//   )

//   await fs.rm(CACHE_DIR, { recursive: true, force: true })

//   console.log(`✅ blurMap generated → ${OUTPUT_JSON}`)
// }

// main().catch(err => {
//   console.error(err)
//   process.exit(1)
// })

import fs from 'fs/promises'
import path from 'path'
import sharp from 'sharp'
import { GALLERIES } from './gallery.config.js'

const R2_BASE_URL = 'https://img.neuimay.com/blog'

const OUTPUT_JSON = 'src/generated/blurMap.json'
const CACHE_DIR = '.cache/gallery'

const BLUR_WIDTH = 24
const BLUR_QUALITY = 30

async function ensureDir(dir) {
  await fs.mkdir(dir, { recursive: true })
}

async function fileExists(file) {
  try {
    await fs.access(file)
    return true
  } catch {
    return false
  }
}

async function downloadImage(url, dest) {
  const res = await fetch(url)
  if (!res.ok) {
    throw new Error(`Failed to fetch ${url}`)
  }

  const buffer = new Uint8Array(await res.arrayBuffer())
  await fs.writeFile(dest, buffer)
}

async function generateBlur(imagePath) {
  const buffer = await sharp(imagePath)
    .resize(BLUR_WIDTH)
    .jpeg({ quality: BLUR_QUALITY })
    .toBuffer()

  return `data:image/jpeg;base64,${buffer.toString('base64')}`
}

async function main() {
  console.log('🟡 Generating blurMap (incremental)...')

  await ensureDir(CACHE_DIR)
  await ensureDir(path.dirname(OUTPUT_JSON))

  /** ✅ 1. 读取已有 blurMap（如果有） */
  let blurMap = {}
  if (await fileExists(OUTPUT_JSON)) {
    blurMap = JSON.parse(await fs.readFile(OUTPUT_JSON, 'utf-8'))
    console.log(`🔁 Loaded existing blurMap (${Object.keys(blurMap).length})`)
  }

  let generated = 0
  let skipped = 0

  for (const [folder, files] of Object.entries(GALLERIES)) {
    for (const file of files) {
      const key = `${folder}/${file}`

      /** ✅ 2. 已存在直接跳过 */
      if (blurMap[key]) {
        skipped++
        continue
      }

      const url = `${R2_BASE_URL}/${key}`
      const localPath = path.join(CACHE_DIR, file)

      console.log(`⬇️  ${key}`)
      await downloadImage(url, localPath)

      console.log(`🎨 Blur ${key}`)
      blurMap[key] = await generateBlur(localPath)

      generated++
    }
  }

  /** ✅ 3. 写回合并后的 blurMap */
  await fs.writeFile(OUTPUT_JSON, JSON.stringify(blurMap, null, 2), 'utf-8')

  await fs.rm(CACHE_DIR, { recursive: true, force: true })

  console.log(
    `✅ blurMap updated → ${OUTPUT_JSON}\n` +
      `   ➕ generated: ${generated}\n` +
      `   ⏭ skipped:   ${skipped}`,
  )
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
