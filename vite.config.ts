import { defineConfig } from 'vite'
import path from 'path'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'


function figmaAssetResolver() {
  return {
    name: 'figma-asset-resolver',
    resolveId(id) {
      if (id.startsWith('figma:asset/')) {
        const filename = id.replace('figma:asset/', '')
        return path.resolve(__dirname, 'src/assets', filename)
      }
    },
  }
}

export default defineConfig({
  plugins: [
    figmaAssetResolver(),
    // The React and Tailwind plugins are both required for Make, even if
    // Tailwind is not being actively used – do not remove them
    react(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      // Alias @ to the src directory
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    port: 5173,
    host: true,
    watch: {
      ignored: ['**/dist/**', '**/dist.zip', '**/junk/**', '**/*.zip', '**/public/documents/**', '**/*.pdf'],
    },
  },
  preview: {
    port: 5173,
    host: true,
  },

  // File types to support raw imports. Never add .css, .tsx, or .ts files to this.
  assetsInclude: ['**/*.svg', '**/*.csv'],
  build: {
    emptyOutDir: false,
    rollupOptions: {
      output: {
        assetFileNames: (assetInfo) => {
          const originalName = assetInfo.originalFileNames?.[0] || assetInfo.names?.[0] || ''
          const normalized = originalName.replace(/\\/g, '/')
          
          if (normalized.endsWith('.css')) {
            return 'assets/css/[name]-[hash][extname]'
          }

          // If asset is inside src/imports/<page-or-module>/
          const importsMatch = normalized.match(/src\/imports\/([^/]+)\//)
          if (importsMatch) {
            const pageFolder = importsMatch[1]
            return `assets/${pageFolder}/[name]-[hash][extname]`
          }

          // If asset is inside src/pages/<page-name>/
          const pagesMatch = normalized.match(/src\/pages\/([^/]+)\//)
          if (pagesMatch) {
            const pageFolder = pagesMatch[1]
            return `assets/${pageFolder}/[name]-[hash][extname]`
          }

          // Fallback common assets folder
          return 'assets/common/[name]-[hash][extname]'
        },
        chunkFileNames: 'assets/js/[name]-[hash].js',
        entryFileNames: 'assets/js/[name]-[hash].js',
      },
    },
  },
})
