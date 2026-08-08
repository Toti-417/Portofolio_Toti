import fs from 'fs'
import path from 'path'
import convert from 'heic-convert'

async function convertDir(srcDir, destDir) {
  if (!fs.existsSync(srcDir)) return
  if (!fs.existsSync(destDir)) {
    fs.mkdirSync(destDir, { recursive: true })
  }

  const files = fs.readdirSync(srcDir)
  for (const file of files) {
    if (file.toLowerCase().endsWith('.heic')) {
      const inputPath = path.join(srcDir, file)
      const outputFileName = file.replace(/\.heic$/i, '.jpg')
      const outputPath = path.join(destDir, outputFileName)

      if (!fs.existsSync(outputPath)) {
        console.log(`Converting ${file} -> ${outputFileName}...`)
        try {
          const inputBuffer = fs.readFileSync(inputPath)
          const outputBuffer = await convert({
            buffer: inputBuffer,
            format: 'JPEG',
            quality: 0.85
          })
          fs.writeFileSync(outputPath, outputBuffer)
          console.log(`Saved ${outputPath}`)
        } catch (err) {
          console.error(`Failed to convert ${file}:`, err.message)
        }
      } else {
        console.log(`Already exists: ${outputFileName}`)
      }
    }
  }
}

async function main() {
  console.log('Starting HEIC image conversions...')
  await convertDir('public/Asset Telkomsel', 'public/gallery/telkomsel')
  await convertDir('public/asset Telkominfra', 'public/gallery/telkominfra')
  console.log('All conversions finished successfully!')
}

main()
