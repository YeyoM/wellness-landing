import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	resolve: {
		alias: {
			'@assets': resolve(__dirname, './src/assets'),
			'@components': resolve(__dirname, './src/components'),
		},
	},
});
