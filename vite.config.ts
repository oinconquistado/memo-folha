import * as path from 'node:path';
import react from '@vitejs/plugin-react-swc';
import tsconfigPaths from 'vite-tsconfig-paths';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [react(), tsconfigPaths()],

  resolve: {
    alias: [{ find: '@', replacement: path.resolve(__dirname, 'src') }],
  },
  css: {
    transformer: 'lightningcss',
  },
  server: {
    host: true,
    port: 3000,
  },
});
