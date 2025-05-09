import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  css: ['~/assets/css/tailwind.css'],
  devtools: { enabled: true },

  vite: {
    plugins: [
      tailwindcss(),
    ],
  },

  modules: ['shadcn-nuxt','@pinia/nuxt'],
  shadcn: {
    prefix: '',
    componentDir: './components/ui'
  }
})