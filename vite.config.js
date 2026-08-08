import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

function saveContentPlugin() {
  return {
    name: 'save-content-plugin',
    configureServer(server) {
      server.middlewares.use('/api/save-content', (req, res, next) => {
        if (req.method === 'POST') {
          let body = ''
          req.on('data', (chunk) => {
            body += chunk
          })
          req.on('end', () => {
            try {
              const data = JSON.parse(body)
              if (data.translations || data.galleryItems) {
                if (data.translations) {
                  const filePath = path.resolve(__dirname, 'src/context/LanguageContext.jsx')
                  let fileContent = fs.readFileSync(filePath, 'utf8')
                  const formattedTranslations = JSON.stringify(data.translations, null, 2)
                  const newContent = fileContent.replace(
                    /export const translations = \{[\s\S]*?\n\}/,
                    `export const translations = ${formattedTranslations}`
                  )
                  fs.writeFileSync(filePath, newContent, 'utf8')
                }

                if (data.galleryItems) {
                  const galleryPath = path.resolve(__dirname, 'src/data/galleryData.js')
                  const formattedGallery = JSON.stringify(data.galleryItems, null, 2)
                  const newGalleryContent = `export const initialGalleryItems = ${formattedGallery}\n`
                  fs.writeFileSync(galleryPath, newGalleryContent, 'utf8')
                }

                res.setHeader('Content-Type', 'application/json')
                res.end(
                  JSON.stringify({
                    success: true,
                    message: 'Berhasil menyimpan perubahan teks & deskripsi foto ke file code!',
                  })
                )
                return
              }
            } catch (err) {
              res.statusCode = 500
              res.setHeader('Content-Type', 'application/json')
              res.end(JSON.stringify({ error: err.message }))
              return
            }
          })
        } else {
          next()
        }
      })
    },
  }
}

export default defineConfig({
  plugins: [react(), tailwindcss(), saveContentPlugin()],
  server: {
    watch: {
      ignored: ['**/*.HEIC', '**/*.heic', '**/Asset Telkomsel/**'],
    },
  },
})

