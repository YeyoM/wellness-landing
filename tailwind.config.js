/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				primary: '#157AFF',
			},
			fontFamily: {
				inter: 'Inter Variable',
			},
		},
	},
	plugins: [],
};
