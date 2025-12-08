import satori from 'satori'
import sharp from 'sharp'
import { readFileSync, writeFileSync, mkdirSync, existsSync, readdirSync } from 'fs'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'
import matter from 'gray-matter'

const __dirname = dirname(fileURLToPath(import.meta.url))
const rootDir = join(__dirname, '..')
const publicDir = join(rootDir, 'public')
const contentDir = join(rootDir, 'src', 'content')
const ogDir = join(publicDir, 'og')

function loadLogo(): string {
  const logoPath = join(publicDir, 'logo.svg')
  const svg = readFileSync(logoPath, 'utf-8')
  return `data:image/svg+xml;base64,${Buffer.from(svg).toString('base64')}`
}

const COLORS = {
  background: '#0f172a',
  backgroundGradientEnd: '#1e293b',
  brandPurple: '#d9d2ff',
  brandOrange: '#ff6737',
  textPrimary: '#f1f5f9',
  textSecondary: '#94a3b8',
  border: '#334155',
}

const WIDTH = 1200
const HEIGHT = 630

async function loadFont(): Promise<ArrayBuffer> {
  const fontPath = join(__dirname, 'Inter-Bold.ttf')
  if (!existsSync(fontPath)) {
    console.log('Downloading Inter Bold font...')
    const response = await fetch(
      'https://cdn.jsdelivr.net/fontsource/fonts/inter@latest/latin-700-normal.ttf'
    )
    if (!response.ok) throw new Error(`Failed to download font: ${response.status}`)
    const buffer = await response.arrayBuffer()
    writeFileSync(fontPath, Buffer.from(buffer))
    return buffer
  }
  const fileBuffer = readFileSync(fontPath)
  return fileBuffer.buffer.slice(fileBuffer.byteOffset, fileBuffer.byteOffset + fileBuffer.byteLength)
}

async function loadFontRegular(): Promise<ArrayBuffer> {
  const fontPath = join(__dirname, 'Inter-Regular.ttf')
  if (!existsSync(fontPath)) {
    console.log('Downloading Inter Regular font...')
    const response = await fetch(
      'https://cdn.jsdelivr.net/fontsource/fonts/inter@latest/latin-400-normal.ttf'
    )
    if (!response.ok) throw new Error(`Failed to download font: ${response.status}`)
    const buffer = await response.arrayBuffer()
    writeFileSync(fontPath, Buffer.from(buffer))
    return buffer
  }
  const fileBuffer = readFileSync(fontPath)
  return fileBuffer.buffer.slice(fileBuffer.byteOffset, fileBuffer.byteOffset + fileBuffer.byteLength)
}

function createOgImage(
  title: string,
  subtitle: string,
  category?: string,
  logoDataUri?: string
) {
  return {
    type: 'div',
    props: {
      style: {
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        padding: '60px',
        background: `linear-gradient(135deg, ${COLORS.background} 0%, ${COLORS.backgroundGradientEnd} 100%)`,
      },
      children: [
        {
          type: 'div',
          props: {
            style: {
              display: 'flex',
              flexDirection: 'column',
              gap: '24px',
            },
            children: [
              category && {
                type: 'div',
                props: {
                  style: {
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                  },
                  children: [
                    {
                      type: 'div',
                      props: {
                        style: {
                          padding: '8px 16px',
                          background: COLORS.border,
                          borderRadius: '8px',
                          color: COLORS.textSecondary,
                          fontSize: '20px',
                          fontFamily: 'Inter',
                        },
                        children: category,
                      },
                    },
                  ],
                },
              },
              {
                type: 'div',
                props: {
                  style: {
                    fontSize: title.length > 40 ? '48px' : '56px',
                    fontWeight: 700,
                    color: COLORS.textPrimary,
                    fontFamily: 'Inter',
                    lineHeight: 1.2,
                    maxWidth: '900px',
                  },
                  children: title,
                },
              },
              {
                type: 'div',
                props: {
                  style: {
                    fontSize: '24px',
                    color: COLORS.textSecondary,
                    fontFamily: 'Inter',
                    maxWidth: '800px',
                    lineHeight: 1.4,
                  },
                  children: subtitle,
                },
              },
            ].filter(Boolean),
          },
        },
        {
          type: 'div',
          props: {
            style: {
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
            },
            children: [
              {
                type: 'div',
                props: {
                  style: {
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    fontSize: '32px',
                    fontWeight: 700,
                    fontFamily: 'Inter',
                  },
                  children: [
                    logoDataUri && {
                      type: 'img',
                      props: {
                        src: logoDataUri,
                        width: 44,
                        height: 44,
                        style: { width: '44px', height: '44px', marginTop: '4px' },
                      },
                    },
                    {
                      type: 'span',
                      props: {
                        style: { display: 'flex' },
                        children: [
                          { type: 'span', props: { style: { color: COLORS.brandPurple }, children: 'artificery' } },
                          { type: 'span', props: { style: { color: COLORS.textSecondary }, children: '.' } },
                          { type: 'span', props: { style: { color: COLORS.brandOrange }, children: 'io' } },
                        ],
                      },
                    },
                  ].filter(Boolean),
                },
              },
              {
                type: 'div',
                props: {
                  style: {
                    fontSize: '20px',
                    color: COLORS.textSecondary,
                    fontFamily: 'Inter',
                  },
                  children: 'Tools & Guides for Tabletop Gaming',
                },
              },
            ],
          },
        },
      ],
    },
  }
}

async function generateImage(
  element: ReturnType<typeof createOgImage>,
  outputPath: string,
  fonts: { bold: ArrayBuffer; regular: ArrayBuffer }
) {
  const svg = await satori(element as React.ReactNode, {
    width: WIDTH,
    height: HEIGHT,
    fonts: [
      {
        name: 'Inter',
        data: fonts.bold,
        weight: 700,
        style: 'normal',
      },
      {
        name: 'Inter',
        data: fonts.regular,
        weight: 400,
        style: 'normal',
      },
    ],
  })

  const png = await sharp(Buffer.from(svg)).png().toBuffer()

  const dir = dirname(outputPath)
  if (!existsSync(dir)) {
    mkdirSync(dir, { recursive: true })
  }

  writeFileSync(outputPath, png)
  console.log(`Generated: ${outputPath}`)
}

function getGuides(): Array<{
  path: string
  title: string
  description: string
  category: string
  slug: string
}> {
  const guides: Array<{
    path: string
    title: string
    description: string
    category: string
    slug: string
  }> = []

  const guidesDir = join(contentDir, 'guides')
  if (!existsSync(guidesDir)) return guides

  const categories = readdirSync(guidesDir, { withFileTypes: true })
    .filter((d) => d.isDirectory())
    .map((d) => d.name)

  for (const category of categories) {
    const categoryDir = join(guidesDir, category)
    const files = readdirSync(categoryDir).filter((f) => f.endsWith('.mdx'))

    for (const file of files) {
      const filePath = join(categoryDir, file)
      const content = readFileSync(filePath, 'utf-8')
      const { data } = matter(content)

      guides.push({
        path: filePath,
        title: data.title || file.replace('.mdx', ''),
        description: data.description || '',
        category: data.category || category,
        slug: file.replace('.mdx', ''),
      })
    }
  }

  return guides
}

const categoryLabels: Record<string, string> = {
  foundry: 'Foundry VTT',
  infrastructure: 'Infrastructure',
}

async function main() {
  console.log('Loading fonts and logo...')
  const [boldFont, regularFont] = await Promise.all([
    loadFont(),
    loadFontRegular(),
  ])
  const fonts = { bold: boldFont, regular: regularFont }
  const logoDataUri = loadLogo()

  if (!existsSync(ogDir)) {
    mkdirSync(ogDir, { recursive: true })
  }

  console.log('\nGenerating homepage OG image...')
  const homepageElement = createOgImage(
    'Enhance Your TTRPG Experience',
    'Tools and utilities for Foundry VTT and tabletop gaming to make your sessions more memorable.',
    undefined,
    logoDataUri
  )
  await generateImage(homepageElement, join(publicDir, 'og-image.png'), fonts)

  console.log('\nGenerating guide OG images...')
  const guides = getGuides()

  for (const guide of guides) {
    const element = createOgImage(
      guide.title,
      guide.description,
      categoryLabels[guide.category] || guide.category,
      logoDataUri
    )
    const outputPath = join(ogDir, 'guides', guide.category, `${guide.slug}.png`)
    await generateImage(element, outputPath, fonts)
  }

  console.log(`\nDone! Generated ${guides.length + 1} OG images.`)
}

main().catch(console.error)
