import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwind from "tailwindcss"
import autoprefixer from "autoprefixer"

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    base: "./",
    build:{
        outDir: "build",
    },
    css:{
        postcss:{
            plugins:[tailwind(), autoprefixer()]
        }
    }

})
