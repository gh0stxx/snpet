/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
	'./node_modules/flowbite/**/*.js'],
	theme: {
		fontFamily: {
			sans: ['Poppins', 'sans-serif', ...defaultTheme.fontFamily.sans],
		},
		extend: {
			objectFit: ['cover', 'contain', 'fill', 'none', 'scale-down'],
		},
	},
	plugins: [require('flowbite/plugin')],
}
