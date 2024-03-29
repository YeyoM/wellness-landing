/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				primary: '#157AFF',
				secundary: '#142749',
				text_blue: '#111827',
			},
			fontFamily: {
				inter: 'Inter Variable',
				sans: [
					'open-sans-hebrew-condensed',
					'Helvetica',
					'Arial',
					'sans-serif',
				],
			},
		},
	},
	plugins: [],
};
