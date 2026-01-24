import fs from 'fs'
import path from 'path'
import sharp from 'sharp'

const IMAGE_BASE = 'https://img.neuimay.com/blog'
const BLUR_MAP_PATH = path.resolve('./src/generated/blurMap.json')
const OUT_ROOT = path.resolve('./assets/blog-grid')

const WIDTH = 800
const isImage = (name) => /\.(jpe?g|png)$/i.test(name)

// 读 blurMap
const blurMap = JSON.parse(fs.readFileSync(BLUR_MAP_PATH, 'utf-8'))

async function downloadAndResize(relativePath) {
  if (!isImage(relativePath)) return

  const url = `${IMAGE_BASE}/${relativePath}`
  const outPath = path.join(OUT_ROOT, relativePath)

  fs.mkdirSync(path.dirname(outPath), { recursive: true })

  // 已生成就跳过（断点续跑）
  if (fs.existsSync(outPath)) {
    console.log('↷ skip', relativePath)
    return
  }

  const res = await fetch(url)
  if (!res.ok) {
    console.error('✗ failed', url)
    return
  }

  const buffer = Buffer.from(await res.arrayBuffer())

  await sharp(buffer)
    .resize({ width: WIDTH })
    .jpeg({
      quality: 70,
      mozjpeg: true,
    })
    .toFile(outPath)

  console.log('✓', relativePath)
}

async function run() {
  const entries = Object.keys(blurMap)

  for (const relativePath of entries) {
    await downloadAndResize(relativePath)
  }

  console.log('\nAll thumbnails generated.')
}

run().catch(console.error)
