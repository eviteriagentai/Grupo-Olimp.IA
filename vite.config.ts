import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import { tempo } from "tempo-devtools/dist/vite";

const conditionalPlugins = [];
if (process.env.TEMPO === "true") {
  conditionalPlugins.push(['tempo-devtools/swc', {}]);
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react({
      plugins: [...conditionalPlugins]
    }),
    tempo()
  ],
  server: {
    // @ts-ignore
    allowedHosts: process.env.TEMPO === "true" ? true : undefined
  },
  base: "/"
});
EOL ; npm install && echo 'Tempo: Node Modules Installed' ; npm run dev -- --host 0.0.0.0 --port 3000
