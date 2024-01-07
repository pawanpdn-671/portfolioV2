/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			maxWidth: {
				container: "1440px",
				contentContainer: "1140px",
				containerSmall: "1024px",
				containerxs: "768px",
			},
			screens: {
				xs: "320px",
				sm: "375px",
				sml: "500px",
				md: "667px",
				mdl: "768px",
				lg: "960px",
				lgl: "1024px",
				xl: "1280px",
			},
			fontFamily: {
				bodyFont: ["Nunito Sans", "sans-serif"],
				gameFont: ["gameFont", "sans-serif"],
				titleFont: ["League Spartan", "sans-serif"],
			},
			boxShadow: {
				navbarShadow: "var(--navbar-shadow)",
			},
			colors: {
				bodyColor: "rgba(var(--body-color))",
				textGreen: "rgba(var(--button-color))",
				textLight: "rgba(var(--text-color))",
				textDark: "rgba(var(--text-dark))",
				hoverColor: "rgba(var(--hover-bg-color))",
				secondColor: "rgba(var(--secondary-color))",
			},
			backgroundImage: {
				"whack-a-mole-bg":
					"linear-gradient(to bottom, rgba(0, 0, 0,0.3), rgba(0, 0, 0,0.2)), url('/assets/images/game/mario-bg.jpg')",
				"flappy-bird-bg": "url('/assets/images/game/flappybirdbg.png')",
				"candy-crush-bg": "url('/assets/images/game/candy/background.jpg')",
				"candy-crush-board-bg": "url('/assets/images/game/candy/blank.png')",
			},
		},
	},
	plugins: [],
};
