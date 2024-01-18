/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'primary' : '#686868',
				'accent' : '#151515',
			},
			boxShadow: {
				'menu': '0px 10px 40px 0px rgba(0, 0, 0, 0.15)',
			},
		},
	},
	plugins: [],
}
